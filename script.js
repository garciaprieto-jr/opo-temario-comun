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
 * Procesa las respuestas, calcula la nota y llama a mostrarResultados.
 */
function corregirExamen(){
    let correctas = 0;
    let total = preguntasActuales.length;
    
    // Generar un objeto detallado de los resultados
    const resultadosDetallados = preguntasActuales.map((p, index) => {
        // Encontrar el índice de la respuesta correcta en el array de opciones
        const respuestaCorrectaIndex = p.opciones.indexOf(p.respuestaCorrecta);
        const respuestaElegidaIndex = respuestasUsuario[index];
        let esCorrecta = false;

        if(respuestaElegidaIndex !== null && respuestaElegidaIndex === respuestaCorrectaIndex){
            esCorrecta = true;
            correctas++;
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

    const nota = (correctas / total) * 10; // Nota sobre 10
    
    mostrarResultados(nota, correctas, total, resultadosDetallados);

    // Limpiar respuestas guardadas tras la corrección
    const temaId = Object.keys(temas).find(id => temas[id].titulo === temaActualNombre);
    if(temaId) localStorage.removeItem(`quiz_${temaId}`);
}

/**
 * Muestra los resultados finales y la corrección detallada.
 */
function mostrarResultados(nota, correctas, total, detalles){
    document.getElementById('examen').style.display = 'none';
    document.getElementById('contenedor-resultados').style.display = 'block';
    
    document.getElementById('resultado-nota').textContent = nota.toFixed(2);
    document.getElementById('resultado-correctas').textContent = correctas;
    document.getElementById('resultado-fallos').textContent = total - correctas;
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
            }
            
            return `<li class="${oIndex === d.indexCorrecta ? 'correcta-opcion' : ''} ${oIndex === d.respuestaElegidaIndex && !d.esCorrecta ? 'fallo-opcion' : ''}">${opcion}${marca}</li>`;
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
// --- PUNTO DE ARRANQUE DE LA APLICACIÓN (CORRECCIÓN CRÍTICA) ---
// ----------------------------------------------------------------------
// Este código se ejecuta cuando el DOM está completamente cargado.
document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializa el estado de la aplicación mostrando el selector de temas.
    // Esto resuelve el problema de la pantalla en blanco al inicio.
    mostrarSelectorTemas();

    // 2. Adjunta los listeners a los botones de inicio de examen.
    // Asume que los botones tienen la clase 'btn-tema' y un data-tema="temaX"
    document.querySelectorAll('.btn-tema').forEach(button => {
        button.addEventListener('click', (e) => {
            const temaId = e.target.dataset.tema;
            iniciarExamen(temaId);
        });
    });
    
    // Listener para el botón de Reiniciar/Volver al selector (si existe en index.html)
    const btnReiniciar = document.getElementById('btn-reiniciar-selector');
    if(btnReiniciar) {
        btnReiniciar.addEventListener('click', mostrarSelectorTemas);
    }
});
