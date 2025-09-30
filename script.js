// script.js

// Variables de estado global
let preguntasActuales = [];
let respuestasUsuario = [];
let temaActualNombre = '';
let indicePreguntaActual = 0;

/**
 * Muestra la pantalla de selección de temas
 */
function mostrarSelectorTemas() {
    document.getElementById('selector-temas').style.display = 'block';
    document.getElementById('examen').style.display = 'none';
    document.getElementById('contenedor-resultados').style.display = 'none';
    
    // Restaurar el contenedor del examen a su estado inicial
    document.getElementById('contenedor-examen').innerHTML = `
        <div id="contenedor-pregunta"></div>
        <div id="contenedor-opciones"></div>
        <hr>
        <div id="controles-navegacion" style="display: flex; justify-content: space-between; margin-top: 20px;"></div>
        <button id="btn-finalizar" onclick="finalizarExamen()" style="display: none; width: 100%; padding: 15px; margin-top: 20px; background-color: #28a745; color: white; border: none; border-radius: 5px; font-size: 1.1em; cursor: pointer;">
            Finalizar Examen y Ver Resultados
        </button>
    `;
}

/**
 * Inicia el examen cargando las preguntas del tema seleccionado
 * @param {string} temaId - 'tema1' o 'tema2'
 */
function iniciarExamen(temaId) {
    // Verificar que la variable global 'temas' exista y contenga el ID
    if (typeof temas === 'undefined' || !temas[temaId]) {
        console.error('Error: La variable "temas" no está definida o el ID es incorrecto. Verifica data.js');
        alert('Error: No se pudieron cargar los datos de las preguntas. Asegúrate de que el archivo data.js esté cargado correctamente.');
        return;
    }

    // Inicializar el estado del examen
    temaActualNombre = temas[temaId].titulo;
    preguntasActuales = temas[temaId].preguntas;
    respuestasUsuario = new Array(preguntasActuales.length).fill(null);
    indicePreguntaActual = 0;

    // Actualizar la interfaz
    document.getElementById('titulo-examen').textContent = temaActualNombre;
    document.getElementById('selector-temas').style.display = 'none';
    document.getElementById('contenedor-resultados').style.display = 'none';
    document.getElementById('examen').style.display = 'block';

    mostrarPregunta(indicePreguntaActual);
}

/**
 * Muestra una pregunta específica
 * @param {number} indice - Índice de la pregunta a mostrar
 */
function mostrarPregunta(indice) {
    const contenedorPregunta = document.getElementById('contenedor-pregunta');
    const contenedorOpciones = document.getElementById('contenedor-opciones');
    const controlesNavegacion = document.getElementById('controles-navegacion');

    // Comprobar límites
    if (indice < 0 || indice >= preguntasActuales.length) return;

    indicePreguntaActual = indice; // Actualizar el índice global
    const pregunta = preguntasActuales[indice];

    // Mostrar el título de la pregunta
    contenedorPregunta.innerHTML = `
        <p style="margin-bottom: 5px;">Pregunta ${indice + 1} de ${preguntasActuales.length}</p>
        <h3 style="margin-top: 0;">${pregunta.pregunta}</h3>
    `;

    // Generar las opciones
    contenedorOpciones.innerHTML = '';
    pregunta.opciones.forEach((opcion, i) => {
        const idOpcion = `p${indice}-op${i}`;
        // Si el usuario ya respondió, marcar la opción guardada
        const checked = respuestasUsuario[indice] === opcion ? 'checked' : '';

        const label = document.createElement('label');
        label.className = 'opcion-quiz';
        label.innerHTML = `
            <input type="radio" name="pregunta-${indice}" id="${idOpcion}" value="${opcion}" ${checked}
                   onclick="seleccionarRespuesta(${indice})">
            <span>${opcion}</span>
        `;
        contenedorOpciones.appendChild(label);
    });

    // Control de navegación
    controlesNavegacion.innerHTML = `
        <button onclick="mostrarPregunta(${indice - 1})" ${indice === 0 ? 'disabled' : ''}>← Anterior</button>
        <button onclick="mostrarPregunta(${indice + 1})" ${indice === preguntasActuales.length - 1 ? 'disabled' : ''}>Siguiente →</button>
    `;

    // Mostrar el botón de finalizar solo en la última pregunta
    document.getElementById('btn-finalizar').style.display = (indice === preguntasActuales.length - 1) ? 'block' : 'none';
}

/**
 * Registra la respuesta del usuario para la pregunta actual.
 * @param {number} indice - Índice de la pregunta
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
    document.getElementById('btn-finalizar').style.display = 'none';
    
    // Solo mostramos el botón de volver a temas en la revisión
    document.getElementById('controles-navegacion').innerHTML = '<button onclick="mostrarSelectorTemas()" style="margin-top: 20px; padding: 10px 20px; background-color: #6c757d; color: white; border: none; border-radius: 5px; cursor: pointer;">Volver a Temas</button>';

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

    // Reemplazamos los contenidos de los contenedores dinámicos para mostrar todas las preguntas de una vez
    document.getElementById('contenedor-pregunta').innerHTML = '';
    document.getElementById('contenedor-opciones').innerHTML = '';
    document.getElementById('contenedor-examen').innerHTML = preguntasHTML + document.getElementById('controles-navegacion').outerHTML; // Muestra la revisión y el botón de volver
}


// Iniciar la aplicación mostrando el selector de temas al cargar
document.addEventListener('DOMContentLoaded', mostrarSelectorTemas);
