document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener los enlaces de navegación para la carga dinámica
    const navTema1 = document.getElementById('nav-tema-1');
    const navTema2 = document.getElementById('nav-tema-2');

    // 2. Asignar el evento de clic a los enlaces
    if (navTema1) navTema1.addEventListener('click', (e) => {
        e.preventDefault(); // Evita que el enlace recargue la página
        cargarPreguntas('tema-1', 'Tema 1: La Constitución Española');
    });
    if (navTema2) navTema2.addEventListener('click', (e) => {
        e.preventDefault();
        cargarPreguntas('tema-2', 'Tema 2: Administración Pública');
    });

    // 3. Función principal para cargar los datos
    function cargarPreguntas(file_name, title) {
        // CORRECCIÓN CRÍTICA DE RUTA: 
        // La URL apunta a la carpeta 'data/' y usa la extensión '.js' según tu estructura.
        const url = `data/${file_name}.js`; 
        
        const titleElement = document.getElementById('main-title');
        const container = document.getElementById('preguntas-container');
        
        titleElement.innerHTML = title;
        container.innerHTML = `<p>Cargando preguntas del ${title}...</p>`;

        fetch(url)
            .then(response => {
                // VERIFICACIÓN CLAVE: Comprueba el código de estado (404)
                if (!response.ok) {
                    console.error(`Error ${response.status}: No se encontró el archivo en la ruta: ${url}`);
                    // Nota: Si el archivo es .js y NO JSON, puede fallar aquí.
                    throw new Error(`¡Error! No se pudieron cargar las preguntas. Verifica si el archivo '${file_name}.js' existe en la carpeta 'data/' y si contiene datos JSON válidos.`);
                }
                // Asumiendo que el archivo .js contiene datos JSON válido
                return response.json(); 
            })
            .then(data => {
                // Si la carga fue exitosa, muestra los datos
                mostrarPreguntas(data, title);
            })
            .catch(error => {
                // Manejo de errores
                container.innerHTML = `<p style="color: red;">${error.message}</p>`;
                document.getElementById('submit-quiz').style.display = 'none'; // Oculta el botón si falla
                document.getElementById('results').style.display = 'none';
            });
    }

    // 4. Función para renderizar el contenido (simplificada para el ejemplo)
    function mostrarPreguntas(preguntas, title) {
        const container = document.getElementById('preguntas-container');
        let html = `<p>Mostrando ${preguntas.length} preguntas de: ${title}</p><ol>`;
        
        preguntas.forEach((q, index) => {
            // Nota: Aquí deberías renderizar las opciones y radios para un quiz real.
            // Esto es solo una demostración de que los datos se cargaron.
            html += `<li class="question-block">
                        <div class="question">${q.pregunta}</div>
                        </li>`;
        });
        
        html += `</ol>`;
        container.innerHTML = html;
        
        // Muestra el botón de quiz (aunque la lógica del quiz esté incompleta)
        document.getElementById('submit-quiz').style.display = 'block'; 
        // Nota: Las funciones 'loadQuiz' y 'calculateResults' aún deben ser definidas en otro lugar 
        // si quieres que el quiz sea funcional y no solo una lista.
    }
});
