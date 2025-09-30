// data.js

/**
 * =========================================================
 * TEMA 1: CONSTITUCIÓN ESPAÑOLA (100 PREGUNTAS)
 * =========================================================
 */
const tema1_preguntas = [
    {
        pregunta: "1. ¿Cuál de las siguientes características NO se atribuye comúnmente a la Constitución Española de 1978 (CE)?",
        opciones: ["Consensuada", "Rígida", "Extensa", "Originaria (Auténtica)"],
        respuestaCorrecta: "Originaria (Auténtica)"
    },
    {
        pregunta: "2. La rigidez de la Constitución se demuestra principalmente en:",
        opciones: ["Su amplia extensión de 169 artículos.", "La existencia de procedimientos especiales y agravados para su reforma.", "El amplio catálogo de derechos fundamentales que incorpora.", "La previsión de la sucesión monárquica en la Corona."],
        respuestaCorrecta: "La existencia de procedimientos especiales y agravados para su reforma."
    },
    /* ... PREGUNTAS INTERMEDIAS (3 a 98) ... */
    {
        pregunta: "99. ¿A qué se refiere el principio de legalidad administrativa?",
        opciones: ["Que solo el Gobierno puede aprobar leyes.", "A la sujeción de la Administración a la Ley y al Derecho.", "A la publicación de todas las normas.", "Al respeto de los derechos fundamentales."],
        respuestaCorrecta: "A la sujeción de la Administración a la Ley y al Derecho."
    },
    {
        pregunta: "100. La Ley de Régimen Jurídico del Sector Público, Ley 40/2015, es una Ley:",
        opciones: ["Ordinaria", "Orgánica", "de Bases", "de Desarrollo Constitucional"],
        respuestaCorrecta: "Ordinaria"
    }
];

/**
 * =========================================================
 * TEMA 2: ADMINISTRACIÓN Y ORGANIZACIÓN TERRITORIAL (120 PREGUNTAS)
 * =========================================================
 */
const tema2_preguntas = [
    {
        pregunta: "1. Según el artículo 103.1 de la Constitución Española (CE), la Administración Pública sirve con objetividad a:",
        opciones: ["Los intereses del partido político mayoritario.", "Los intereses generales.", "Los intereses particulares de los ciudadanos.", "Los intereses del Gobierno de turno."],
        respuestaCorrecta: "Los intereses generales."
    },
    {
        pregunta: "2. El principio de eficacia de la Administración Pública, junto con los de jerarquía, descentralización, desconcentración y coordinación, se recoge en:",
        opciones: ["El artículo 9.3 de la CE.", "El artículo 106.1 de la CE.", "El artículo 103.3 de la CE.", "El artículo 103.1 de la CE."],
        respuestaCorrecta: "El artículo 103.1 de la CE."
    },
    /* ... PREGUNTAS INTERMEDIAS (3 a 118) ... */
    {
        pregunta: "119. ¿Cuál es el procedimiento judicial que garantiza la protección de los derechos de la Sección 1ª del Capítulo II del Título I ante la jurisdicción ordinaria?",
        opciones: ["Procedimiento ordinario.", "Procedimiento sumario y preferente.", "Procedimiento de tutela especial.", "Procedimiento ordinario con trámite de urgencia."],
        respuestaCorrecta: "Procedimiento sumario y preferente."
    },
    {
        pregunta: "120. ¿Qué mayoría se exige para la aprobación del Estatuto de Autonomía de Ceuta y Melilla por parte de las Cortes Generales?",
        opciones: ["Mayoría absoluta", "Mayoría simple", "Mayoría de tres quintos", "Mayoría de dos tercios"],
        respuestaCorrecta: "Mayoría absoluta"
    }
];

/**
 * =========================================================
 * EXPORTACIÓN: ESTRUCTURA PRINCIPAL DE TEMAS (CRÍTICO)
 * =========================================================
 * Objeto principal 'temas' que enlaza la aplicación con los datos.
 */
const temas = {
    'tema1': {
        titulo: 'Tema 1: Constitución Española (100 Preguntas)',
        preguntas: tema1_preguntas
    },
    'tema2': {
        titulo: 'Tema 2: Administración y Organización Territorial (120 Preguntas)',
        preguntas: tema2_preguntas
    }
};
