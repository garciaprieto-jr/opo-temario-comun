document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener los botones de la interfaz
    const btnTema1 = document.getElementById('tema-1');
    const btnTema2 = document.getElementById('tema-2');

    // 2. Asignar el evento de clic a cada botón
    btnTema1.addEventListener('click', () => cargarPreguntas('tema-1'));
    btnTema2.addEventListener('click', () => cargarPreguntas('tema-2'));

    // 3. Función principal para cargar los datos JSON
    function cargarPreguntas(tema) {
        // CORRECCIÓN CRÍTICA: La ruta al archivo JSON debe ser correcta.
        // Se asume que los archivos están en la carpeta 'data/'
        const url = `data/${tema}.js`; 
        
        const container = document.getElementById('preguntas-container');
        container.innerHTML = `<p>Cargando preguntas del ${tema.toUpperCase()}...</p>`;

        fetch(url)
            .then(response => {
                // VERIFICACIÓN CLAVE: Comprueba el código de estado (por ejemplo, si es 404 Not Found)
                if (!response.ok) {
                    // Muestra el error de la ruta directamente en la consola
                    console.error(`Error ${response.status}: No se encontró el archivo en la ruta: ${url}`);
                    // Lanza un error para ser capturado por el .catch
                    throw new Error(`¡Error! No se pudieron cargar las preguntas del ${tema}. Revisa que el archivo exista en la ruta correcta: data/${tema}.json`);
                }
                return response.json();
            })
            .then(data => {
                // Si la carga fue exitosa, muestra los datos
                mostrarPreguntas(data, tema);
            })
            .catch(error => {
                // Manejo de errores (ruta incorrecta, JSON mal formado, etc.)
                container.innerHTML = `<p style="color: red;">${error.message}</p>`;
            });
    }

    // 4. Función para renderizar o mostrar las preguntas
    function mostrarPreguntas(preguntas, tema) {
        const container = document.getElementById('preguntas-container');
        let html = `<h3>${tema.toUpperCase().replace('-', ' ')} (${preguntas.length} Preguntas)</h3><ul>`;
        
        preguntas.forEach((q, index) => {
            html += `<li><strong>${index + 1}. ${q.pregunta}</strong> (Respuesta: ${q.respuesta})</li>`;
        });
        
        html += `</ul>`;
        container.innerHTML = html;
    }
});
