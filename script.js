// script.js — lógica principal de la app (25 preguntas aleatorias)

let preguntasActuales = [];
let respuestasUsuario = [];
let temaActualNombre = '';
const CANTIDAD_PREGUNTAS = 25;

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
 * Muestra el selector de temas y oculta el examen/resultados.
 */
function mostrarSelectorTemas(){
    document.getElementById('selector-temas').style.display = 'block';
    document.getElementById('examen').style.display = 'none';
    document.getElementById('contenedor-resultados').style.display = 'none';
    
    // Limpiar el contenedor del examen anterior
    const cont = document.getElementById('contenedor-preguntas-completas');
    if(cont) cont.innerHTML = '';
}

/**
 * Inicia el examen para un tema específico, selecciona las preguntas y carga respuestas guardadas.
 */
function iniciarExamen(temaId){
    if(typeof temas === 'undefined' || !temas[temaId]){
        alert('Error: no se han cargado los datos. Revisa data.js');
        return;
    }

    const preguntasTema = temas[temaId].preguntas;
    // Seleccionar preguntas aleatorias
    preguntasActuales = mezclarYSeleccionar(preguntasTema, CANTIDAD_PREGUNTAS);
    respuestasUsuario = new Array(preguntasActuales.length).fill(null);
    temaActualNombre = temas[temaId].titulo;

    // Actualizar la interfaz
    document.getElementById('titulo-examen').textContent = `Examen Aleatorio de ${preguntasActuales.length} preguntas — ${temaActualNombre}`;
    document.getElementById('selector-temas').style.display = 'none';
    document.getElementById('examen').style.display = 'block';
    // Ocultar resultados de un intento anterior
    document.getElementById('contenedor-resultados').style.display = 'none'; 

    // Intentar cargar respuestas guardadas (sesión previa)
    const clave = `quiz_${temaId}`;
    const almacenadas = localStorage.getItem(clave);
    if(almacenadas){
        try{
            const obj = JSON.parse(almacenadas);
            // Comprobar que el número de preguntas coincide con el de la sesión anterior
            if(Array.isArray(obj) && obj.length === preguntasActuales.length){
                respuestasUsuario = obj;
            }
        }catch(e){/* Ignorar errores de parseo */ }
    }

    mostrarExamenCompleto();
}

/**
 * Guarda el estado actual de las respuestas del usuario en el localStorage.
 */
function guardarRespuestasLocalmente(){
    const temaId = Object.keys(temas).find(id => temas[id].titulo === temaActualNombre);
    if(temaId) {
        const clave = `quiz_${temaId}`;
        localStorage.setItem(clave, JSON.stringify(respuestasUsuario));
    }
}

/**
 * Registra la respuesta seleccionada por el usuario.
 */
function seleccionarRespuesta(preguntaIndex, opcionIndex){
    respuestasUsuario[preguntaIndex] = opcionIndex;
    guardarRespuestasLocalmente();
}

/**
 * Renderiza el HTML de todas las preguntas con sus opciones.
 */
function mostrarExamenCompleto(){
    const contenedor = document.getElementById('contenedor-preguntas-completas');
    if (!contenedor) return;

    contenedor.innerHTML = preguntasActuales.map((p, pIndex) => {
        const opcionesHTML = p.opciones.map((opcion, oIndex) => {
            const id = `p${pIndex}o${oIndex}`;
            // Comprueba si esta opción fue la seleccionada previamente
            const checked = respuestasUsuario[pIndex] === oIndex ? 'checked' : '';
            return `
                <div class="opcion">
                    <input type="radio" id="${id}" name="pregunta_${pIndex}" value="${oIndex}" ${checked} 
                           onclick="seleccionarRespuesta(${pIndex}, ${oIndex})">
                    <label for="${id}">${opcion}</label>
                </div>
            `;
        }).join('');

        return `
            <div class="card pregunta-card">
                <p class="pregunta-texto"><strong>${pIndex + 1}.</strong> ${p.pregunta}</p>
                <div class="opciones-container">${opcionesHTML}</div>
            </div>
        `;
    }).join('');

    const btnCorregir = document.getElementById('btn-corregir');
    if(btnCorregir) {
        btnCorregir.onclick = corregirExamen;
        btnCorregir.style.display = 'block';
    }
}

/**
 * Procesa las respuestas, calcula la nota con penalización (3 fallos = 1 acierto).
 * La nota final se calcula SOBRE 25.
 */
function corregirExamen(event){
    // FIX CRÍTICO 1: Prevenir el envío del formulario.
    if(event && typeof event.preventDefault === 'function') {
        event.preventDefault();
    }
    
    let correctas = 0;           // C: Aciertos
    let fallosPuntuables = 0;    // W: Respuestas elegidas que son incorrectas (penalizan)
    let sinResponder = 0;        // U: Preguntas no contestadas (no penalizan)
    let total = preguntasActuales.length; // total = 25
    
    // Generar un objeto detallado de los resultados
    const resultadosDetallados = preguntasActuales.map((p, index) => {
        const respuestaCorrectaIndex = p.opciones.indexOf(p.respuestaCorrecta);
        const respuestaElegidaIndex = respuestasUsuario[index];
        let esCorrecta = false;
        
        if(respuestaElegidaIndex !== null){
            if(respuestaElegidaIndex === respuestaCorrectaIndex){
                esCorrecta = true;
                correctas++;
            } else {
                fallosPuntuables++; 
            }
        } else {
            sinResponder++; 
        }
        
        return {
            pregunta: p.pregunta,
            opciones: p.opciones,
            respuestaCorrecta: p.respuestaCorrecta,
            respuestaElegidaIndex: respuestaElegidaIndex,
            esCorrecta: esCorrecta,
            indexCorrecta: respuestaCorrectaIndex
        };
    });

    // 1. APLICAR LA REGLA DE OPOSICIÓN: 3 fallos anulan 1 acierto.
    const penalizacion = fallosPuntuables / 3;
    const aciertosNetos = correctas - penalizacion;
    
    // 2. CALCULAR LA NOTA SOBRE 25.
    const notaFinal = Math.max(0, aciertosNetos); 
    
    mostrarResultados(
        notaFinal, 
        correctas, 
        fallosPuntuables, // Fallos Elegidos (penalizan)
        sinResponder,     // No Contestadas (no penalizan)
        penalizacion,     // Puntuación Negativa
        total, 
        resultadosDetallados
    );

    // Limpiar respuestas guardadas tras la corrección
    const temaId = Object.keys(temas).find(id => temas[id].titulo === temaActualNombre);
    if(temaId) localStorage.removeItem(`quiz_${temaId}`);
}

/**
 * Muestra los resultados finales y la corrección detallada, haciendo scroll al final.
 */
function mostrarResults(nota, correctas, fallosElegidos, noContestadas, penalizacionPuntos, total, detalles){
    // Hacemos visible el contenedor de resultados (que está al final del examen).
    const resumenContainer = document.getElementById('contenedor-resultados');
    resumenContainer.style.display = 'block';

    // --- 1. ACTUALIZAR EL RESUMEN DE RESULTADOS DETALLADO ---
    
    // Construir el nuevo contenido HTML con el desglose.
    const resumenHTML = `
        <h2>Resultados del Examen</h2>
        <div class="resumen-resultados">
            <h3>Puntuación Final: <span class="nota" id="resultado-nota">${nota.toFixed(2)}</span>/<span style="font-size: 0.7em;">25</span></h3>
            <p>Preguntas Totales: <strong>${total}</strong></p>
            <hr style="border-top: 1px dashed #ccc;">
            
            <p style="color: var(--success);">✅ Aciertos: <strong>${correctas}</strong></p>
            <p style="color: var(--danger);">❌ Fallos Elegidos: <strong>${fallosElegidos}</strong></p>
            <p style="color: var(--muted);">➖ No Contestadas: <strong>${noContestadas}</strong></p>
            <hr style="border-top: 1px dashed #ccc; margin-top: 15px; margin-bottom: 15px;">

            <h4>Cálculo de la Nota (Netas)</h4>
            <p>Puntuación Bruta (Aciertos): <strong>${correctas}</strong> puntos.</p>
            <p>Penalización (1/3 por fallo): <strong>-${penalizacionPuntos.toFixed(2)}</strong> puntos.</p>
            <p>Netas Finales (Nota/25): <strong>${(correctas - penalizacionPuntos).toFixed(2)}</strong> puntos.</p>
        </div>

        <button id="btn-reiniciar-selector" onclick="mostrarSelectorTemas()">Volver al Selector de Temas</button>

        <h3>Detalle de la Corrección</h3>
        <div id="detalles-correccion"></div>
    `;

    // Reemplazar el contenido completo del contenedor de resultados
    resumenContainer.innerHTML = resumenHTML;


    // --- 2. ACTUALIZAR DETALLES DE CORRECCIÓN ---
    
    const contenedorDetalles = document.getElementById('detalles-correccion');
    if (!contenedorDetalles) return;

    contenedorDetalles.innerHTML = detalles.map((d, index) => {
        // Determinar la clase del card
        const clase = d.esCorrecta ? 'correcta' : (d.respuestaElegidaIndex !== null ? 'fallo' : 'no-contestada');
        // Determinar el icono
        let icono = d.esCorrecta ? '✅' : '❌';
        if (d.respuestaElegidaIndex === null) {
            icono = '➖'; // Icono para no contestada
        }
        
        const opcionesHTML = d.opciones.map((opcion, oIndex) => {
            let marca = '';
            const esRespuestaElegida = oIndex === d.respuestaElegidaIndex;
            const esRespuestaCorrecta = oIndex === d.indexCorrecta;

            if (esRespuestaCorrecta) {
                marca = ' (Respuesta Correcta)';
            }
            // Marcar la opción elegida por el usuario si era incorrecta
            if (esRespuestaElegida && !d.esCorrecta) {
                marca = ' (Tu Respuesta: INCORRECTA)';
            }
            // Etiquetar si no se contestó
            if (d.respuestaElegidaIndex === null && esRespuestaCorrecta) {
                 marca = ' (No Contestada)';
            }
            
            return `<li class="${esRespuestaCorrecta ? 'correcta-opcion' : ''} ${esRespuestaElegida && !d.esCorrecta ? 'fallo-opcion' : ''}">${opcion}${marca}</li>`;
        }).join('');

        return `
            <div class="card ${clase}">
                <p><strong>${index + 1}. ${icono} ${d.pregunta}</strong></p>
                <ul class="opciones-correccion">${opcionesHTML}</ul>
            </div>
        `;
    }).join('');
    
    // **ACCION CRÍTICA**: Hacer scroll hasta el contenedor de resultados (que ahora está al final del examen)
    resumenContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Renombrar la función mostrarResults a mostrarResultados para evitar errores de referencia
const mostrarResultados = mostrarResults;


// ----------------------------------------------------------------------
// --- PUNTO DE ARRANQUE DE LA APLICACIÓN ---
// ----------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa el estado de la aplicación mostrando el selector de temas.
    mostrarSelectorTemas();

    // Adjunta los listeners a los botones de inicio de examen.
    document.querySelectorAll('.btn-tema').forEach(button => {
        button.addEventListener('click', (e) => {
            const temaId = e.target.dataset.tema;
            iniciarExamen(temaId);
        });
    });
});
