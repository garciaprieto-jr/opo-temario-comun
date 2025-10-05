// script.js — lógica principal de la app (20 preguntas aleatorias con penalización)

let preguntasActuales = [];
let respuestasUsuario = [];
let temaActualNombre = '';
// ----------------------------------------------------------------------
// --- MODIFICACIÓN 1: Cambiar la cantidad de preguntas a 20 ---
// ----------------------------------------------------------------------
const CANTIDAD_PREGUNTAS = 20; 
const KEY_LOCAL_STORAGE = 'examen_respuestas';

/**
 * Función para mezclar un array y seleccionar las primeras N preguntas.
 * (Algoritmo de Fisher-Yates)
 */
function mezclarYSeleccionar(array, n){
    const copia = [...array];
    for(let i=copia.length-1;i>0;i--){
        const j = Math.floor(Math.random()*(i+1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia.slice(0, Math.min(n, copia.length));
}

/**
 * Guarda el estado actual de las respuestas del usuario en el localStorage.
 */
function guardarRespuestasLocalmente(){
    const estado = {
        tema: temaActualNombre,
        preguntas: preguntasActuales.map(p => p.pregunta), // Solo guarda la pregunta para referencia
        respuestas: respuestasUsuario
    };
    localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(estado));
}

/**
 * Carga respuestas guardadas del localStorage si coinciden con el tema actual.
 */
function cargarRespuestasLocalmente(preguntasNuevas){
    const stored = localStorage.getItem(KEY_LOCAL_STORAGE);
    if(stored){
        const estadoGuardado = JSON.parse(stored);
        
        // Comprueba que sea el mismo tema Y que las preguntas coincidan (esto es clave si son aleatorias)
        const preguntasCoinciden = estadoGuardado.preguntas.every((p, i) => p === preguntasNuevas[i].pregunta);

        if(estadoGuardado.tema === temaActualNombre && preguntasCoinciden){
            // Si el tema y las preguntas coinciden, cargamos las respuestas.
            respuestasUsuario = estadoGuardado.respuestas;
        } else {
            // Si no coinciden, limpiamos el guardado (no tiene sentido)
            localStorage.removeItem(KEY_LOCAL_STORAGE);
            respuestasUsuario = Array(preguntasNuevas.length).fill(null);
        }
    } else {
        respuestasUsuario = Array(preguntasNuevas.length).fill(null);
    }
}

/**
 * Muestra el selector de temas y oculta el examen/resultados.
 * También reinicia el estado de la aplicación.
 */
function mostrarSelectorTemas(){
    document.getElementById('selector-temas').style.display = 'block';
    document.getElementById('examen').style.display = 'none';
    document.getElementById('contenedor-resultados').style.display = 'none';
    
    // Volver a mostrar el botón de corregir (si estaba oculto)
    const btnCorregir = document.getElementById('btn-corregir');
    if (btnCorregir) btnCorregir.style.display = 'block';

    // Limpiar el contenedor del examen anterior
    const cont = document.getElementById('contenedor-preguntas-completas');
    if(cont) cont.innerHTML = '';

    // Limpiar el localStorage y el estado
    localStorage.removeItem(KEY_LOCAL_STORAGE);
    preguntasActuales = [];
    respuestasUsuario = [];
    temaActualNombre = '';
}

/**
 * Inicia el examen para un tema específico, selecciona las preguntas y carga respuestas guardadas.
 */
function iniciarExamen(temaId){
    // 'temas' debe estar definido en data.js
    if(typeof temas === 'undefined' || !temas[temaId]){
        alert('Error: no se han cargado los datos o el tema no existe. Revisa data.js');
        return;
    }

    const tema = temas[temaId];
    temaActualNombre = tema.titulo;

    // 1. Selecciona y mezcla las preguntas
    preguntasActuales = mezclarYSeleccionar(tema.preguntas, CANTIDAD_PREGUNTAS);

    // 2. Carga respuestas guardadas (o inicializa el array)
    cargarRespuestasLocalmente(preguntasActuales);

    // 3. Renderiza las preguntas y oculta el selector
    renderizarPreguntas();
    document.getElementById('selector-temas').style.display = 'none';
    document.getElementById('examen').style.display = 'block';
    document.getElementById('titulo-examen').textContent = temaActualNombre;
    document.getElementById('contenedor-resultados').style.display = 'none';
    document.getElementById('btn-corregir').style.display = 'block'; // Asegura que se muestre al iniciar
}

/**
 * Genera el HTML de la pregunta y sus opciones.
 */
function generarHTMLPregunta(pregunta, index){
    let opcionesHTML = pregunta.opciones.map((opcion, i) => {
        const isChecked = respuestasUsuario[index] === i;
        const checkedAttr = isChecked ? 'checked' : '';
        const id = `p${index}-op${i}`;
        
        return `
            <label for="${id}" class="opcion">
                <input type="radio" id="${id}" name="pregunta-${index}" value="${i}" ${checkedAttr} 
                       onclick="seleccionarRespuesta(${index}, ${i})">
                <span>${opcion}</span>
            </label>
        `;
    }).join('');

    return `
        <div class="pregunta" id="pregunta-${index}">
            <h3>${index + 1}. ${pregunta.pregunta}</h3>
            <div class="opciones">
                ${opcionesHTML}
            </div>
        </div>
    `;
}

/**
 * Renderiza todas las preguntas en el contenedor principal.
 */
function renderizarPreguntas(){
    const contenedor = document.getElementById('contenedor-preguntas-completas');
    if(!contenedor) return;

    const html = preguntasActuales.map(generarHTMLPregunta).join('');
    contenedor.innerHTML = html;
}

/**
 * Registra la respuesta seleccionada por el usuario y la guarda.
 */
function seleccionarRespuesta(preguntaIndex, opcionIndex){
    // El índice de la opción (0, 1, 2, 3) se guarda como respuesta
    respuestasUsuario[preguntaIndex] = opcionIndex;
    
    // Llamada completa a la función de guardado
    guardarRespuestasLocalmente(); 
}

/**
 * Muestra los resultados del examen al corregir.
 */
function corregirExamen(){
    let correctas = 0;
    let fallos = 0; // Necesitamos contar los fallos por separado para la nueva lógica
    const preguntasContainer = document.getElementById('contenedor-preguntas-completas');
    
    // 1. Iterar sobre las preguntas para la corrección y contar
    preguntasActuales.forEach((pregunta, index) => {
        const respuestaCorrecta = pregunta.respuestaCorrecta;
        const respuestaIndex = respuestasUsuario[index]; // null si no ha respondido
        const opcionSeleccionada = respuestaIndex !== null ? pregunta.opciones[respuestaIndex] : null;

        let claseCorreccion = 'sin-contestar';
        let feedbackHTML = `<p><strong>Respuesta Correcta:</strong> ${respuestaCorrecta}</p>`;
        
        if (opcionSeleccionada === respuestaCorrecta) {
            correctas++;
            claseCorreccion = 'correcta';
            feedbackHTML = `<p class="verde"><strong>¡Correcto!</strong></p>` + feedbackHTML;
        } else if (respuestaIndex !== null) {
            fallos++; // Contamos el fallo aquí
            claseCorreccion = 'incorrecta';
            feedbackHTML = `<p class="rojo"><strong>Incorrecto. Tu respuesta:</strong> ${opcionSeleccionada}</p>` + feedbackHTML;
        } else {
            // Sin contestar, no suma ni resta.
            claseCorreccion = 'sin-contestar';
            feedbackHTML = `<p class="gris"><strong>Sin contestar.</strong></p>` + feedbackHTML;
        }
        
        // Añadir fuente si existe
        if (pregunta.fuente && pregunta.fuente.length > 0) {
            feedbackHTML += `<p class="fuente">Fuente: ${pregunta.fuente}</p>`;
        }

        // Marcar la pregunta en el examen y deshabilitar opciones
        const preguntaElement = preguntasContainer.querySelector(`#pregunta-${index}`);
        if(preguntaElement){
            preguntaElement.classList.add(claseCorreccion);
            
            // Deshabilitar todas las opciones después de corregir
            preguntaElement.querySelectorAll('input[type="radio"]').forEach(radio => {
                radio.disabled = true;
            });

            // Mostrar el feedback debajo de la pregunta
            const feedbackDiv = document.createElement('div');
            feedbackDiv.classList.add('feedback-correccion');
            feedbackDiv.innerHTML = feedbackHTML;
            preguntaElement.appendChild(feedbackDiv);
        }
    });

    // 2. Cálculo de resultados y actualización del resumen
    // ----------------------------------------------------------------------
    // --- MODIFICACIÓN 2: Nueva lógica de puntuación (Fallos restan 1/3) ---
    // ----------------------------------------------------------------------
    
    const totalPreguntas = preguntasActuales.length;
    
    // Valor de una pregunta correcta (se usa 1.0 como base)
    const valorCorrecta = 1.0; 
    // Valor de una pregunta incorrecta (resta 1/3 del valor de la correcta)
    const valorIncorrecta = 1/3; 

    // Puntuación base (solo correctas)
    let puntuacionBase = correctas * valorCorrecta;
    // Penalización por fallos
    let penalizacion = fallos * valorIncorrecta; 
    
    // Puntuación final: Aseguramos que no sea negativa
    let puntuacionNeta = Math.max(0, puntuacionBase - penalizacion); 
    
    // El valor máximo posible (si todas son correctas)
    const puntuacionMaxima = totalPreguntas * valorCorrecta;

    // Calculamos la nota sobre 10
    const nota = (puntuacionNeta * 10) / puntuacionMaxima;
    
    // La nota final se calcula en base a la puntuación neta sobre el máximo posible
    const apto = nota >= 5.0; // Asumiendo un 5 como aprobado

    document.getElementById('resumen-correctas').textContent = correctas;
    document.getElementById('resumen-fallos').textContent = fallos;
    document.getElementById('resumen-nota').textContent = nota.toFixed(2);
    document.getElementById('resumen-estado').textContent = apto ? 'APTO' : 'NO APTO';
    document.getElementById('resumen-estado').className = apto ? 'apto' : 'no-apto';
    // ----------------------------------------------------------------------

    // 3. Ocultar el botón de corregir y mostrar el resumen
    document.getElementById('btn-corregir').style.display = 'none';
    const resumenContainer = document.getElementById('contenedor-resultados');
    resumenContainer.style.display = 'block';

    // 4. Desplazarse al contenedor de resultados (que ahora está al final del examen)
    resumenContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // 5. Limpiar el estado de guardado local, ya que ya está corregido
    localStorage.removeItem(KEY_LOCAL_STORAGE);
}


// ----------------------------------------------------------------------
// --- PUNTO DE ARRANQUE DE LA APLICACIÓN ---\
// ----------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa el estado de la aplicación mostrando el selector de temas.
    mostrarSelectorTemas();

    // Adjunta los listeners a los botones de inicio de examen (.btn-tema).
    document.querySelectorAll('.btn-tema').forEach(button => {
        button.addEventListener('click', (e) => {
            // Asegúrate de usar e.currentTarget para obtener el botón que tiene el data-tema
            const temaId = e.currentTarget.dataset.tema;
            iniciarExamen(temaId);
        });
    });

    // Listener para el botón de corregir examen.
    const btnCorregir = document.getElementById('btn-corregir');
    if (btnCorregir) {
        btnCorregir.addEventListener('click', (e) => {
            e.preventDefault(); // Evita el envío de formulario por defecto
            corregirExamen();
        });
    }

    // Listener para el botón de volver al selector.
    const btnReiniciar = document.getElementById('btn-reiniciar-selector');
    if (btnReiniciar) {
        btnReiniciar.addEventListener('click', mostrarSelectorTemas);
    }
});
        btnReiniciar.addEventListener('click', mostrarSelectorTemas);
    }
});
