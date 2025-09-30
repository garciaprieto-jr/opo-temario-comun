// script.js (CORREGIDO)

// Variables de estado del examen
let preguntasActuales = [];
let respuestasUsuario = [];
let temaActualNombre = '';
let temaActualID = '';

// --- FUNCIONES DE INICIO Y NAVEGACIÓN ---

/**
 * Muestra la pantalla de selección de temas
 */
function mostrarSelectorTemas() {
    document.getElementById('selector-temas').style.display = 'block';
    document.getElementById('examen').style.display = 'none';
    document.getElementById('contenedor-resultados').style.display = 'none';
    
    // Asegurarse de que el contenedor de examen esté limpio
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
    if (!window.temas || !window.temas[temaId]) {
        console.error('Error: La estructura de temas no está cargada correctamente o el ID es incorrecto.', temaId);
        // Si el archivo data.js no se cargó, 'temas' será undefined.
        alert('Error: No se pudieron cargar los datos de las preguntas. Asegúrate de que el archivo data.js esté en la misma carpeta.');
        return;
    }

    // Establecer el estado del examen
    temaActualID = temaId;
    temaActualNombre = window.temas[temaId].nombre;
    preguntasActuales = window.temas[temaId].preguntas;
    respuestasUsuario = new Array(preguntasActuales.length).fill(null);

    // Actualizar la interfaz
    document.getElementById('titulo-examen').textContent = temaActualNombre;
    document.getElementById('selector-temas').style.display = 'none';
    document.getElementById('contenedor-resultados').style.display = 'none';
    document.getElementById('examen').style.display = 'block';

    mostrarPregunta(0);
}

// --- FUNCIONES DEL EXAMEN ---

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
 * El cambio clave: Lee el valor del radio button marcado, evitando problemas de string escaping.
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

    // Calcular la nota con penalización de 1/3
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
    document.getElementById('controles-navegacion').innerHTML = '<button onclick="mostrarSelectorTemas()" style="margin-top: 20px; padding: 10px 20px; background-color: #6c757d; color: white; border: none; border-radius: 5px; cursor: pointer;">Volver a Temas</button>';

    const preguntasHTML = preguntasActuales.map((pregunta, indice) => {
        const respuestaCorrecta = pregunta.respuestaCorrecta;
        const respuestaSeleccionada = respuestasUsuario[indice];
        
        let opcionesHTML = pregunta.opciones.map(opcion => {
            let clase = '';
            // Marcar la respuesta correcta en verde
            if (opcion === respuestaCorrecta) {
                clase = 'correcta';
            }
            // Marcar la respuesta incorrecta del usuario en rojo (si la hay)
            if (opcion === respuestaSeleccionada && opcion !== respuestaCorrecta) {
                clase = 'incorrecta';
            }
            
            // Si no se seleccionó nada, pero es la correcta
            if (respuestaSeleccionada === null && opcion === respuestaCorrecta) {
                clase = 'correcta no-seleccionada'; // Indica que esta era la correcta y no se marcó
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
                ${respuestaSeleccionada === null ? '' : `<p style="font-weight: bold; margin-top: 10px;">Tu respuesta: ${respuestaSeleccionada}</p>`}
                <p style="font-weight: bold;">Respuesta Correcta: ${respuestaCorrecta}</p>
            </div>
        `;
    }).join('');

    // Reemplazamos los contenidos de los contenedores dinámicos
    document.getElementById('contenedor-pregunta').innerHTML = ''; // Ocultar pregunta actual
    document.getElementById('contenedor-opciones').innerHTML = ''; // Ocultar opciones actuales
    document.getElementById('contenedor-examen').innerHTML = preguntasHTML; // Mostrar revisión
}


// Iniciar la aplicación mostrando el selector de temas al cargar
document.addEventListener('DOMContentLoaded', mostrarSelectorTemas);
