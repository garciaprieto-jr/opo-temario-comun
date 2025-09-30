// script.js — lógica principal de la app (25 preguntas aleatorias)


let preguntasActuales = [];
let respuestasUsuario = [];
let temaActualNombre = '';
const CANTIDAD_PREGUNTAS = 25;


function mezclarYSeleccionar(array, n){
const copia = [...array];
for(let i=copia.length-1;i>0;i--){
const j = Math.floor(Math.random()*(i+1));
[copia[i], copia[j]] = [copia[j], copia[i]];
}
return copia.slice(0, Math.min(n, copia.length));
}


function mostrarSelectorTemas(){
document.getElementById('selector-temas').style.display = 'block';
document.getElementById('examen').style.display = 'none';
document.getElementById('contenedor-resultados').style.display = 'none';
// limpiar
const cont = document.getElementById('contenedor-preguntas-completas');
if(cont) cont.innerHTML = '';
}


function iniciarExamen(temaId){
if(typeof temas === 'undefined' || !temas[temaId]){
alert('Error: no se han cargado los datos. Revisa data.js');
return;
}


const preguntasTema = temas[temaId].preguntas;
preguntasActuales = mezclarYSeleccionar(preguntasTema, CANTIDAD_PREGUNTAS);
respuestasUsuario = new Array(preguntasActuales.length).fill(null);
temaActualNombre = temas[temaId].titulo;


document.getElementById('titulo-examen').textContent = `Examen Aleatorio de ${preguntasActuales.length} preguntas — ${temaActualNombre}`;
document.getElementById('selector-temas').style.display = 'none';
document.getElementById('examen').style.display = 'block';
document.getElementById('contenedor-resultados').style.display = 'none';


// intentar cargar respuestas guardadas por si hay sesión previa
const clave = `quiz_${temaId}`;
const almacenadas = localStorage.getItem(clave);
if(almacenadas){
try{
const obj = JSON.parse(almacenadas);
if(Array.isArray(obj) && obj.length === preguntasActuales.length){
respuestasUsuario = obj;
}
}catch(e){/* ignore */}
}


mostrarExamenCompl

// --- PUNTO DE ARRANQUE DE LA APLICACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializa el estado de la aplicación mostrando el selector de temas.
    mostrarSelectorTemas();

    // 2. Adjunta los listeners a los botones de inicio de examen.
    // Esto asume que tienes botones con la clase 'btn-tema' y un data-tema="temaX" en tu index.html
    document.querySelectorAll('.btn-tema').forEach(button => {
        button.addEventListener('click', (e) => {
            const temaId = e.target.dataset.tema;
            iniciarExamen(temaId);
        });
    });
});
