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

    // Asegurar que el botón de corrección esté visible y funcione
    const btnCorregir = document.getElementById('btn-corregir');
    if(btnCorregir) {
        btnCorregir.onclick = corregirExamen;
        btnCorregir.style.display = 'block';
    }
}

/**
 * Procesa las respuestas, calcula la nota con penalización (3 fallos = 1 acierto).
 * IMPORTANTE: SÓLO RESTAN LAS RESPUESTAS ELEGIDAS INCORRECTAMENTE.
 */
function corregirExamen(){
    let correctas = 0;           // C: Aciertos
    let fallosPuntuables = 0;    // W: Respuestas elegidas que son incorrectas (penalizan)
    let sinResponder = 0;        // U: Preguntas no contestadas (no penalizan)
    let total = preguntasActuales.length;
    
    // Generar un objeto detallado de los resultados
    const resultadosDetallados = preguntasActuales.map((p, index) => {
        // Encontrar el índice de la respuesta correcta en el array de opciones
        const respuestaCorrectaIndex = p.opciones.indexOf(p.respuestaCorrecta);
        const respuestaElegidaIndex = respuestasUsuario[index];
        let esCorrecta = false;
        
        if(respuestaElegidaIndex !== null){
            if(respuestaElegidaIndex === respuestaCorrectaIndex){
                esCorrecta = true;
                correctas++;
            } else {
                // FALLO: Solo suma como fallo si fue elegida y era incorrecta
                fallosPuntuables++; 
            }
        } else {
            // SIN RESPONDER: Suma como sin responder si fue null
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
    // Los fallos (W) que penalizan son SÓLO los *elegidos* incorrectamente.
    const penalizacion = fallosPuntuables / 3;
    const aciertosNetos = correctas - penalizacion;
    
    // 2. Calcular la nota sobre 10. Math.max(0, ...) asegura que la nota nunca sea negativa.
    const notaFinal = Math.max(0, (aciertosNetos / total) * 10);
    
    // Los fallos totales para la visualización (Fallos elegidos incorrectamente + Sin Responder)
    const fallosTotalesVisual = fallosPuntuables + sinResponder;

    mostrarResultados(notaFinal, correctas, fallosTotalesVisual, total, detalles);

    // Limpiar respuestas guardadas tras la corrección
    const temaId = Object.keys(temas).find(id => temas[id].titulo === temaActualNombre);
    if(temaId) localStorage.removeItem(`quiz_${temaId}`);
}

/**
 * Muestra los resultados finales y la corrección detallada.
 */
function mostrarResultados(nota, correctas, fallosVisual, total, detalles){
    document.getElementById('examen').style.display = 'none';
    document.getElementById('contenedor-resultados').style.display = 'block';
    
    document.getElementById('resultado-nota').textContent = nota.toFixed(2);
    document.getElementById('resultado-correctas').textContent = correctas;
    // fallosVisual ahora incluye fallos elegidos y no contestadas para el resumen
    document.getElementById('resultado-fallos').textContent = fallosVisual;
    document.getElementById('resultado-total').textContent = total;
    
    const contenedorDetalles = document.getElementById('detalles-correccion');
    if (!contenedorDetalles) return;

    contenedorDetalles.innerHTML = detalles.map((d, index) => {
        const clase = d.esCorrecta ? 'correcta' : 'fallo';
        const icono = d.esCorrecta ? '✅' : '❌';
        
        const opcionesHTML = d.opciones.map((opcion, oIndex) => {
            let marca = '';
            if (oIndex === d.indexCorrecta) {
                marca = ' (Respuesta Correcta)';
            }
            // Si la respuesta elegida no es la correcta, marcar la del usuario
            if (oIndex === d.respuestaElegidaIndex && oIndex !== d.indexCorrecta) {
                marca = ' (Tu Respuesta)';
            } else if (d.respuestaElegidaIndex === null && oIndex === d.indexCorrecta) {
                // Marcar la correcta si no se ha contestado
                 marca = ' (No Contestada)';
            }
            
            return `<li class="${oIndex === d.indexCorrecta ? 'correcta-opcion' : ''} ${oIndex === d.respuestaElegidaIndex !== null && !d.esCorrecta ? 'fallo-opcion' : ''}">${opcion}${marca}</li>`;
        }).join('');

        return `
            <div class="card ${clase}">
                <p><strong>${index + 1}. ${icono} ${d.pregunta}</strong></p>
                <ul class="opciones-correccion">${opcionesHTML}</ul>
            </div>
        `;
    }).join('');
}


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
    
    // Listener para el botón de Reiniciar/Volver al selector
    const btnReiniciar = document.getElementById('btn-reiniciar-selector');
    if(btnReiniciar) {
        btnReiniciar.addEventListener('click', mostrarSelectorTemas);
    }
});
