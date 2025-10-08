// script.js

// Clave para almacenamiento local
const KEY_LOCAL_STORAGE = 'estadoSimuladorExamen';

// Variables globales
let temaActualNombre = null;          // Título del tema actual
let preguntasActuales = [];           // Array con las preguntas mostradas
let respuestasUsuario = [];           // Índices de respuestas del usuario

// Ref a contenedores
const selectorTemasEl = document.getElementById('selector-temas');
const examenEl = document.getElementById('examen');
const contenedorPreguntas = document.getElementById('contenedor-preguntas-completas');

// Render inicial
document.addEventListener('DOMContentLoaded', () => {
    mostrarSelectorTemas();

    // Cargar estado si quedara algo en localStorage (tema/preguntas cambian -> se limpia)
    const guardado = localStorage.getItem(KEY_LOCAL_STORAGE);
    if (guardado) {
        try {
            const data = JSON.parse(guardado);
            if (data.tema && data.preguntas && Array.isArray(data.preguntas)) {
                // No restauramos automáticamente, solo dejamos la info
                // para que cargarRespuestasLocalmente lo gestione cuando inicie un tema.
            }
        } catch {}
    }
});

// ---------------------------------------------
// Utilidades de UI
// ---------------------------------------------
function mostrarSelectorTemas() {
    examenEl.style.display = 'none';
    selectorTemasEl.style.display = 'grid';
    contenedorPreguntas.innerHTML = '';
    document.getElementById('btn-corregir')?.style.setProperty('display', 'inline-block');
    document.getElementById('contenedor-resultados')?.style.setProperty('display', 'none');
}

function mostrarExamen(titulo) {
    selectorTemasEl.style.display = 'none';
    examenEl.style.display = 'block';
    document.getElementById('titulo-examen').textContent = titulo;
}

// ---------------------------------------------
// Carga/Inició de temas
// ---------------------------------------------
function iniciarExamen(temaId) {
    const tema = window.temas[temaId];
    if (!tema) return;

    temaActualNombre = tema.titulo;
    preguntasActuales = seleccionarPreguntas(tema);
    cargarRespuestasLocalmente(preguntasActuales);

    renderPreguntas(preguntasActuales);
    mostrarExamen(tema.titulo);

    // Reset resumen
    const resumen = document.getElementById('contenedor-resultados');
    if (resumen) {
        resumen.style.display = 'none';
        document.getElementById('resumen-correctas').textContent = '0';
        document.getElementById('resumen-falladas').textContent = '0';
        document.getElementById('resumen-sin-contestar').textContent = '0';
        document.getElementById('resumen-nota').textContent = '0.00';
        const est = document.getElementById('resumen-estado');
        est.textContent = 'PENDIENTE';
        est.className = '';
    }

    const btnCorregir = document.getElementById('btn-corregir');
    if (btnCorregir) btnCorregir.style.display = 'inline-block';
}

// Selección (aleatoria o limitada) según cantidadExamen si aplica
function seleccionarPreguntas(tema) {
    const lista = tema.preguntas || [];
    const n = typeof tema.cantidadExamen === 'number' ? tema.cantidadExamen : lista.length;
    if (n >= lista.length) return lista.slice();

    const copia = lista.slice();
    const seleccion = [];
    while (seleccion.length < n && copia.length) {
        const idx = Math.floor(Math.random() * copia.length);
        seleccion.push(copia.splice(idx, 1)[0]);
    }
    return seleccion;
}

// Render de preguntas
function renderPreguntas(preguntas) {
    contenedorPreguntas.innerHTML = '';
    preguntas.forEach((p, i) => {
        const idBase = `pregunta-${i}`;
        const opcionesHTML = p.opciones.map((op, idx) => {
            const checked = respuestasUsuario[i] === idx ? 'checked' : '';
            return `
                <label style="display:block;margin:6px 0;">
                    <input type="radio" name="${idBase}" value="${idx}" ${checked} />
                    ${op}
                </label>
            `;
        }).join('');

        const html = `
            <div class="pregunta" id="${idBase}">
                <p><strong>${i + 1}.</strong> ${p.pregunta}</p>
                <div class="opciones">
                    ${opcionesHTML}
                </div>
            </div>
        `;
        contenedorPreguntas.insertAdjacentHTML('beforeend', html);
    });

    // Radios -> guardar selección en memoria y en localStorage
    contenedorPreguntas.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            const name = e.target.name; // pregunta-#
            const idx = parseInt(name.split('-')[1], 10);
            const val = parseInt(e.target.value, 10);
            respuestasUsuario[idx] = val;
            guardarEstadoLocalmente();
        });
    });
}

// Guardar estado mínimo en localStorage
function guardarEstadoLocalmente() {
    const estado = {
        tema: temaActualNombre,
        preguntas: preguntasActuales.map(p => p.pregunta),
        respuestas: respuestasUsuario
    };
    try {
        localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(estado));
    } catch {}
}

// =======================
// PATCH: funciones robustas
// =======================
function cargarRespuestasLocalmente(preguntasNuevas){
  const stored = localStorage.getItem(KEY_LOCAL_STORAGE);
  if (!stored) {
    respuestasUsuario = Array(preguntasNuevas.length).fill(null);
    return;
  }

  try {
    const estadoGuardado = JSON.parse(stored);
    const mismasPreguntas =
      Array.isArray(estadoGuardado.preguntas) &&
      estadoGuardado.preguntas.length === preguntasNuevas.length &&
      estadoGuardado.preguntas.every((p, i) => p === (preguntasNuevas[i]?.pregunta));

    if (estadoGuardado.tema === temaActualNombre && mismasPreguntas) {
      respuestasUsuario = estadoGuardado.respuestas;
    } else {
      localStorage.removeItem(KEY_LOCAL_STORAGE);
      respuestasUsuario = Array(preguntasNuevas.length).fill(null);
    }
  } catch (e) {
    localStorage.removeItem(KEY_LOCAL_STORAGE);
    respuestasUsuario = Array(preguntasNuevas.length).fill(null);
  }
}

function corregirExamen(){
  let correctas = 0;
  let fallos = 0;
  let sinContestar = 0;

  const preguntasContainer = document.getElementById('contenedor-preguntas-completas');

  // Localiza el tema actual
  const temaId = Object.keys(temas).find(key => temas[key].titulo === temaActualNombre);
  const tema = temas[temaId];
  if (!tema || !tema.logicaPuntuacion) return;

  const { valorCorrecta = 1, valorIncorrecta = 0, restaPorFallo = false } = tema.logicaPuntuacion;

  preguntasActuales.forEach((pregunta, index) => {
    const respuestaCorrecta = pregunta.respuestaCorrecta;
    const respuestaIndex = respuestasUsuario[index];
    const preguntaElement = preguntasContainer.querySelector(`#pregunta-${index}`);

    if (respuestaIndex != null) {
      const respuestaUsuarioTexto = pregunta.opciones[respuestaIndex];
      if (respuestaUsuarioTexto === respuestaCorrecta) {
        correctas++;
        if (preguntaElement) preguntaElement.classList.add('correcta');
      } else {
        fallos++;
        if (preguntaElement) preguntaElement.classList.add('incorrecta');
      }
    } else {
      sinContestar++;
      if (preguntaElement) preguntaElement.classList.add('sin-contestar');
    }

    if (preguntaElement) {
      const feedbackHTML = `
        <div class="feedback-correccion">
          <p><strong>Respuesta Correcta:</strong> <span class="verde">${respuestaCorrecta}</span></p>
          ${pregunta.fuente ? `<p class="fuente">Fuente: ${pregunta.fuente}</p>` : ''}
        </div>`;
      preguntaElement.insertAdjacentHTML('beforeend', feedbackHTML);
      preguntaElement.querySelectorAll('input[type="radio"]').forEach(radio => radio.disabled = true);
    }
  });

  const totalPreguntas = preguntasActuales.length;
  const penalizacion = restaPorFallo ? (fallos * valorIncorrecta) : 0;
  const puntuacionNeta = Math.max(0, correctas * valorCorrecta - penalizacion);

  const maxTema = (typeof tema.puntajeMaximoTema === 'number')
    ? tema.puntajeMaximoTema
    : totalPreguntas * valorCorrecta;

  const nota = (puntuacionNeta * 10) / maxTema;
  const apto = nota >= 5;

  // Mostrar resumen
  const el = (id) => document.getElementById(id);
  el('resumen-correctas').textContent = String(correctas);
  el('resumen-falladas').textContent = String(fallos);
  el('resumen-sin-contestar').textContent = String(sinContestar);
  el('resumen-nota').textContent = isFinite(nota) ? nota.toFixed(2) : '0.00';

  const estadoEl = el('resumen-estado');
  estadoEl.textContent = apto ? 'APTO' : 'NO APTO';
  estadoEl.className = apto ? 'apto' : 'no-apto';

  const btnCorregir = document.getElementById('btn-corregir');
  if (btnCorregir) btnCorregir.style.display = 'none';

  const resumenContainer = document.getElementById('contenedor-resultados');
  if (resumenContainer) {
    resumenContainer.style.display = 'block';
    resumenContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  localStorage.removeItem(KEY_LOCAL_STORAGE);
}

// ---------------------------------------------
// Eventos
// ---------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    // Listener botón corregir
    const btnCorregir = document.getElementById('btn-corregir');
    if (btnCorregir) {
        btnCorregir.addEventListener('click', (e) => {
            e.preventDefault(); 
            corregirExamen();
        });
    }

    // Listener para el botón de volver al selector.
    const btnReiniciar = document.getElementById('btn-reiniciar-selector');
    if (btnReiniciar) {
        btnReiniciar.addEventListener('click', mostrarSelectorTemas);
    }
});
