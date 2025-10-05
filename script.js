// script.js (Módulo principal)

// ----------------------------------------------------------------------
// --- 1. IMPORTACIÓN DE MÓDULOS DE TEMA (DEBE SER LO PRIMERO) ---
// ----------------------------------------------------------------------
import { tema1 } from './tema_1.js';
import { tema2 } from './tema_2.js';
import { tema3 } from './tema_3.js';
import { examen2024 } from './examen_2024_01.js';

// Consolidación de temas: Mapea los data-tema del HTML a los objetos importados.
const temas = {
    'tema1': tema1,
    'tema2': tema2,
    'tema3': tema3,
    'examen2024': examen2024,
};

// ----------------------------------------------------------------------
// --- 2. VARIABLES GLOBALES DEL MÓDULO ---
// ----------------------------------------------------------------------
let preguntasActuales = [];
let respuestasUsuario = [];
let temaActualNombre = '';
const KEY_LOCAL_STORAGE = 'examen_respuestas';


// ----------------------------------------------------------------------
// --- 3. FUNCIONES DE LÓGICA (mezclarYSeleccionar, etc.) ---
// ----------------------------------------------------------------------

/**
 * Función para mezclar un array y seleccionar las primeras N preguntas.
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
        preguntas: preguntasActuales.map(p => p.pregunta), 
        respuestas: respuestasUsuario
    };
    localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(estado));
}

/**
 * Carga respuestas guardadas del localStorage.
 */
function cargarRespuestasLocalmente(preguntasNuevas){
    const stored = localStorage.getItem(KEY_LOCAL_STORAGE);
    if(stored){
        const estadoGuardado = JSON.parse(stored);
        
        // Comprueba que las preguntas coincidan
        const preguntasCoinciden = estadoGuardado.preguntas.every((p, i) => p === preguntasNuevas[i].pregunta);

        if(estadoGuardado.tema === temaActualNombre && preguntasCoinciden){
            respuestasUsuario = estadoGuardado.respuestas;
        } else {
            localStorage.removeItem(KEY_LOCAL_STORAGE);
            respuestasUsuario = Array(preguntasNuevas.length).fill(null);
        }
    } else {
        respuestasUsuario = Array(preguntasNuevas.length).fill(null);
    }
}

/**
 * Muestra el selector de temas y reinicia el estado.
 */
function mostrarSelectorTemas(){
    document.getElementById('selector-temas').style.display = 'block';
    document.getElementById('examen').style.display = 'none';
    document.getElementById('contenedor-resultados').style.display = 'none';
    
    const btnCorregir = document.getElementById('btn-corregir');
    if (btnCorregir) btnCorregir.style.display = 'block';

    const cont = document.getElementById('contenedor-preguntas-completas');
    if(cont) cont.innerHTML = '';

    localStorage.removeItem(KEY_LOCAL_STORAGE);
    preguntasActuales = [];
    respuestasUsuario = [];
    temaActualNombre = '';
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
 * CRÍTICO: Registra la respuesta seleccionada.
 * Se hace global (window.) para que pueda ser llamada desde el atributo 'onclick' del HTML dinámico.
 */
window.seleccionarRespuesta = function(preguntaIndex, opcionIndex){
    respuestasUsuario[preguntaIndex] = opcionIndex;
    guardarRespuestasLocalmente(); 
}

/**
 * Inicia el examen, selecciona las preguntas y carga respuestas.
 */
function iniciarExamen(temaId){
    if(!temas[temaId]){
        alert(`Error: El tema con ID '${temaId}' no existe. Revisa el HTML o la consolidación de temas.`);
        return;
    }

    const tema = temas[temaId];
    temaActualNombre = tema.titulo;

    // Obtener la cantidad de preguntas del tema (o usar 20 por defecto)
    const cantidadASeleccionar = tema.cantidadExamen || 20;

    // 1. Selecciona y mezcla las preguntas
    preguntasActuales = mezclarYSeleccionar(tema.preguntas, cantidadASeleccionar);

    // 2. Carga respuestas guardadas (o inicializa el array)
    cargarRespuestasLocalmente(preguntasActuales);

    // 3. Renderiza las preguntas y oculta el selector
    renderizarPreguntas();
    document.getElementById('selector-temas').style.display = 'none';
    document.getElementById('examen').style.display = 'block';
    document.getElementById('titulo-examen').textContent = temaActualNombre;
    document.getElementById('contenedor-resultados').style.display = 'none';
    document.getElementById('btn-corregir').style.display = 'block'; 
}

/**
 * Muestra los resultados del examen al corregir.
 */
function corregirExamen(){
    // ... (El cuerpo de esta función se mantiene igual a tu versión más reciente) ...

    let correctas = 0;
    let fallos = 0; 
    const preguntasContainer = document.getElementById('contenedor-preguntas-completas');
    
    // Buscar el tema actual por título para obtener su lógica de puntuación
    const temaId = Object.keys(temas).find(key => temas[key].titulo === temaActualNombre);
    const tema = temas[temaId];
    if (!tema || !tema.logicaPuntuacion) return; 

    // Asignar los valores de la lógica de puntuación del tema
    const logica = tema.logicaPuntuacion;
    const valorCorrecta = logica.valorCorrecta;
    const valorIncorrecta = logica.valorIncorrecta; 
    
    // 1. Iterar sobre las preguntas para la corrección y contar
    preguntasActuales.forEach((pregunta, index) => {
        const respuestaCorrecta = pregunta.respuestaCorrecta;
        const respuestaIndex = respuestasUsuario[index]; 
        const preguntaElement = preguntasContainer.querySelector(`#pregunta-${index}`);
        
        // Lógica de corrección
        // ... (El resto de la lógica de corrección que ya tenías)
        if (respuestaIndex !== null) {
            const respuestaUsuarioTexto = pregunta.opciones[respuestaIndex];
            
            if (respuestaUsuarioTexto === respuestaCorrecta) {
                correctas++;
                if (preguntaElement) preguntaElement.classList.add('correcta');
            } else {
                fallos++;
                if (preguntaElement) preguntaElement.classList.add('incorrecta');
            }
        } else {
            if (preguntaElement) preguntaElement.classList.add('sin-contestar');
        }

        // Mostrar feedback de corrección (la respuesta correcta siempre se muestra)
        if (preguntaElement) {
            const feedbackHTML = `
                <div class="feedback-correccion">
                    <p><strong>Respuesta Correcta:</strong> <span class="verde">${respuestaCorrecta}</span></p>
                    ${pregunta.fuente ? `<p class="fuente">Fuente: ${pregunta.fuente}</p>` : ''}
                </div>
            `;
            preguntaElement.insertAdjacentHTML('beforeend', feedbackHTML);
            
            // Deshabilitar botones de radio
            preguntaElement.querySelectorAll('input[type="radio"]').forEach(radio => radio.disabled = true);
        }
    });


    // 2. Cálculo de resultados y actualización del resumen
    const totalPreguntas = preguntasActuales.length;
    
    let puntuacionBase = correctas * valorCorrecta;
    let penalizacion = fallos * valorIncorrecta; 
    let puntuacionNeta = Math.max(0, puntuacionBase - penalizacion); 
    
    const puntuacionMaxima = totalPreguntas * valorCorrecta;
    const nota = (puntuacionNeta * 10) / puntuacionMaxima;
    
    const apto = nota >= 5.0; 

    document.getElementById('resumen-correctas').textContent = correctas;
    document.getElementById('resumen-fallos').textContent = fallos;
    document.getElementById('resumen-nota').textContent = nota.toFixed(2);
    document.getElementById('resumen-estado').textContent = apto ? 'APTO' : 'NO APTO';
    document.getElementById('resumen-estado').className = apto ? 'apto' : 'no-apto';

    // 3. Ocultar el botón de corregir y mostrar el resumen
    document.getElementById('btn-corregir').style.display = 'none';
    const resumenContainer = document.getElementById('contenedor-resultados');
    resumenContainer.style.display = 'block';

    // 4. Desplazarse al contenedor de resultados
    resumenContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // 5. Limpiar el estado de guardado local
    localStorage.removeItem(KEY_LOCAL_STORAGE);
}


// ----------------------------------------------------------------------
// --- PUNTO DE ARRANQUE DE LA APLICACIÓN ---
// ----------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa el estado de la aplicación mostrando el selector de temas.
    mostrarSelectorTemas();

    // Adjunta los listeners a los botones de inicio de examen (.btn-tema).
    document.querySelectorAll('.btn-tema').forEach(button => {
        button.addEventListener('click', (e) => {
            const temaId = e.currentTarget.dataset.tema;
            iniciarExamen(temaId);
        });
    });

    // Listener para el botón de corregir examen.
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
