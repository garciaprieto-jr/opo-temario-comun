// script.js (Actualizado para 25 preguntas aleatorias en una página)

// Variables de estado global
let preguntasActuales = [];
let respuestasUsuario = [];
let temaActualNombre = '';
const CANTIDAD_PREGUNTAS = 25; // Define el número fijo de preguntas a mostrar

/**
 * Función auxiliar para seleccionar preguntas aleatorias.
 * @param {Array} array - El array de preguntas completo del tema.
 * @param {number} n - La cantidad de preguntas a seleccionar.
 * @returns {Array} Un nuevo array con 'n' preguntas aleatorias.
 */
function seleccionarPreguntasAleatorias(array, n) {
    // Mezcla el array (algoritmo de Fisher-Yates)
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    // Devuelve los primeros 'n' elementos
    return array.slice(0, n);
}


// --- FUNCIONES DE INICIO Y NAVEGACIÓN ---

/**
 * Muestra la pantalla de selección de temas
 */
function mostrarSelectorTemas() {
    document.getElementById('selector-temas').style.display = 'block';
    document.getElementById('examen').style.display = 'none';
    document.getElementById('contenedor-resultados').style.display = 'none';
    
    // Asegurarse de que el contenedor de examen esté limpio
    document.getElementById('contenedor-preguntas-completas').innerHTML = '';
}

/**
 * Inicia el examen: selecciona 25 preguntas aleatorias y las muestra.
 * @param {string} temaId - 'tema1' o 'tema2'
 */
function iniciarExamen(temaId) {
    if (typeof temas === 'undefined' || !temas[temaId]) {
        alert('Error: No se pudieron cargar los datos de las preguntas. Verifica data.js');
        return;
    }

    // 1. Seleccionar las 25 preguntas aleatorias
    const preguntasTemaCompleto = temas[temaId].preguntas;
    preguntasActuales = seleccionarPreguntasAleatorias([...preguntasTemaCompleto], CANTIDAD_PREGUNTAS);

    // 2. Inicializar el estado del examen
    temaActualNombre = temas[temaId].titulo;
    respuestasUsuario = new Array(preguntasActuales.length).fill(null);
    
    // 3. Actualizar la interfaz
    document.getElementById('titulo-examen').textContent = `Examen Aleatorio de 25 Preguntas: ${temaActualNombre}`;
    document.getElementById('selector-temas').style.display = 'none';
    document.getElementById('contenedor-resultados').style.display = 'none';
    document.getElementById('examen').style.display = 'block';

    // 4. Mostrar todas las preguntas en la página
    mostrarExamenCompleto();
}

/**
 * Genera y muestra todo el HTML de las 25 preguntas en la página.
 */
function mostrarExamenCompleto() {
    const contenedorPreguntas = document.getElementById('contenedor-preguntas-completas');
    contenedorPreguntas.innerHTML = ''; // Limpiar el contenedor

    let preguntasHTML = '';

    preguntasActuales.forEach((pregunta, indice) => {
        let opcionesHTML = '';

        // Generar las opciones de la pregunta
        pregunta.opciones.forEach((opcion, i) => {
            const idOpcion = `p${indice}-op${i}`;
            // Necesitamos guardar la respuesta al hacer clic, ya que no hay navegación
            const checked = respuestasUsuario[indice] === opcion ? 'checked' : '';

            opcionesHTML += `
                <label class="opcion-quiz">
                    <input type="radio" name="pregunta-${indice}" id="${idOpcion}" value="${opcion}" ${checked}
                           onclick="seleccionarRespuesta(${indice})">
                    <span>${opcion}</span>
                </label>
            `;
        });

        // Contenedor de la pregunta individual
        preguntasHTML += `
            <div class="pregunta-individual">
                <h4>${indice + 1}. ${pregunta.pregunta}</h4>
                <div class="contenedor-opciones-individual">${opcionesHTML}</div>
            </div>
        `;
    });

    // Añadir todas las preguntas y el botón de finalizar
    contenedorPreguntas.innerHTML = preguntasHTML;
}


/**
 * Registra la respuesta del usuario para la pregunta.
 * Esta función es llamada por el evento onclick de cada radio button.
 * @param {number} indice - Índice de la pregunta en el array preguntasActuales.
 */
function seleccionarRespuesta(indice) {
    const selector = `input[name="pregunta-${indice}"]:checked`;
    const radioChecked = document.querySelector(selector);
    
    if (radioChecked) {
        respuestasUsuario[indice] = radioChecked.value;
    } else {
        respuestasUsuario[indice] = null;
    }
}


/**
 * Calcula la puntuación final y muestra los resultados.
 */
function finalizarExamen() {
    const total = preguntasActuales.length;
    let aciertos = 0;
    let errores = 0;
    let sinContestar = 0;

    // Calcular aciertos, errores y sin contestar
    preguntasActuales.forEach((pregunta, i) => {
        const respuestaSeleccionada = respuestasUsuario[i];

        if (respuestaSeleccionada === null) {
            sinContestar++;
        } else if (respuestaSeleccionada === pregunta.respuestaCorrecta) {
            aciertos++;
        } else {
            errores++;
        }
    });

    // Fórmula: Nota = Aciertos - (Errores / 3)
    const nota = aciertos - (errores / 3);

    const contenedorResultados = document.getElementById('contenedor-resultados');

    // Ocultar examen, mostrar resultados
    document.getElementById('examen').style.display = 'none';
    contenedorResultados.style.display = 'block';

    // Generar el HTML de resultados
    contenedorResultados.innerHTML = `
        <div style="border: 2px solid #007bff; padding: 20px; border-radius: 8px; margin-top: 30px; background-color: #f8f9fa;">
            <h2 style="color: #007bff; border-bottom: 2px solid #007bff; padding-bottom: 10px;">📊 Puntuación Final - ${temaActualNombre}</h2>
            <p style="font-size: 1.1em;">Total de Preguntas: <strong>${total}</strong></p>
            <p style="font-size: 1.1em;">Total Contestadas: <strong>${total - sinContestar}</strong></p>
            <p style="font-size: 1.1em;">Sin Contestar: <strong>${sinContestar}</strong></p>
            <hr>
            <p style="font-size: 1.2em; color: green;">✅ Aciertos: <strong style="font-size: 1.3em;">${aciertos}</strong></p>
            <p style="font-size: 1.2em; color: red;">❌ Errores: <strong style="font-size: 1.3em;">${errores}</strong></p>
            <hr>
            <p style="font-size: 1.5em; color: blue;">Nota (penalización 1/3): <strong style="font-size: 1.5em;">${nota.toFixed(2)}</strong></p>
            <hr>
            <button onclick="revisarExamen()" style="margin-top: 20px; padding: 10px 20px; background-color: #17a2b8; color: white; border: none; border-radius: 5px; cursor: pointer; margin-right: 10px;">Revisar Examen</button>
            <button onclick="mostrarSelectorTemas()" style="margin-top: 20px; padding: 10px 20px; background-color: #6c757d; color: white; border: none; border-radius: 5px; cursor: pointer;">Volver a Temas</button>
        </div>
    `;
}


/**
 * Muestra el examen con las respuestas correctas e incorrectas marcadas.
 */
function revisarExamen() {
    const contenedorExamen = document.getElementById('examen');
    contenedorExamen.style.display = 'block';
    document.getElementById('contenedor-resultados').style.display = 'none';
    document.getElementById('titulo-examen').textContent = `Revisión: ${temaActualNombre}`;
    
    // Ocultamos el botón de finalizar y navegación, solo dejamos el de volver a temas
    const controlesAdicionales = document.getElementById('controles-adicionales');
    controlesAdicionales.innerHTML = '<button onclick="mostrarSelectorTemas()" style="margin-top: 20px; padding: 10px 20px; background-color: #6c757d; color: white; border: none; border-radius: 5px; cursor: pointer;">Volver a Temas</button>';


    const preguntasHTML = preguntasActuales.map((pregunta, indice) => {
        const respuestaCorrecta = pregunta.respuestaCorrecta;
        const respuestaSeleccionada = respuestasUsuario[indice];
        
        let opcionesHTML = pregunta.opciones.map(opcion => {
            let clase = '';
            // 1. Marcar la respuesta correcta en verde
            if (opcion === respuestaCorrecta) {
                clase = 'correcta';
            }
            // 2. Marcar la respuesta incorrecta del usuario en rojo (si la hay)
            if (opcion === respuestaSeleccionada && opcion !== respuestaCorrecta) {
                clase = 'incorrecta';
            }

            return `
                <div class="opcion-revision ${clase}">
                    ${opcion}
                </div>
            `;
        }).join('');

        let estado = '';
        if (respuestaSeleccionada === null) {
            estado = '<span style="color: #6c757d; font-weight: bold;">[SIN CONTESTAR]</span>';
        } else if (respuestaSeleccionada === respuestaCorrecta) {
            estado = '<span style="color: green; font-weight: bold;">[CORRECTA]</span>';
        } else {
            estado = `<span style="color: red; font-weight: bold;">[INCORRECTA]</span>`;
        }

        return `
            <div class="pregunta-revision">
                <h4>${indice + 1}. ${pregunta.pregunta} ${estado}</h4>
                <div class="opciones-revision">
                    ${opcionesHTML}
                </div>
                ${respuestaSeleccionada !== null && respuestaSeleccionada !== respuestaCorrecta ? `<p style="font-weight: bold; margin-top: 10px; color: red;">Tu Respuesta: ${respuestaSeleccionada}</p>` : ''}
                <p style="font-weight: bold; margin-top: 5px; color: green;">Respuesta Correcta: ${respuestaCorrecta}</p>
            </div>
        `;
    }).join('');

    // Reemplazamos los contenidos de los contenedores dinámicos
    const contenedorPreguntas = document.getElementById('contenedor-preguntas-completas');
    contenedorPreguntas.innerHTML = preguntasHTML;
}


// Iniciar la aplicación mostrando el selector de temas al cargar
document.addEventListener('DOMContentLoaded', mostrarSelectorTemas);
