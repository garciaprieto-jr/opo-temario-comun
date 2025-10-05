// tema3.js


/**
 * =========================================================
 * TEMA 3: Tema 3.- El Gobierno y la Administración (100 PREGUNTAS)
 * =========================================================
 * Claves utilizadas: pregunta, opciones, respuestaCorrect
*/

const tema3_preguntas = [
    {
        pregunta: "¿Qué diferencia fundamental distingue a un Gobierno de la Administración, según la Constitución Española (CE)?",
        opciones: [
            "La Administración es el órgano de dirección política, mientras el Gobierno es el ente público encargado de la ejecución.",
            "El Gobierno es el órgano de dirección política y ejecutiva, mientras la Administración es el ente público encargado de la ejecución y gestión, sirviendo a los intereses generales con objetividad.",
            "La diferencia reside en que el Gobierno tiene potestad reglamentaria y la Administración no.",
            "Ambos son lo mismo, solo cambia el término según el contexto.",
        ],
        respuestaCorrecta: "El Gobierno es el órgano de dirección política y ejecutiva, mientras la Administración es el ente público encargado de la ejecución y gestión, sirviendo a los intereses generales con objetividad.",
        fuente: "[Art. 97 y 103 CE]"
    },
    {
        pregunta: "¿Cuál es una de las funciones de dirección política del Gobierno según el Artículo 97 de la CE?",
        opciones: [
            "Ejercer la función jurisdiccional y la potestad de indulto.",
            "Dirigir la Administración civil y militar, la política interior y exterior, y la defensa del Estado.",
            "Nombrar y separar a los miembros del Tribunal Constitucional.",
            "Ejercer la función legislativa de forma exclusiva.",
        ],
        respuestaCorrecta: "Dirigir la Administración civil y militar, la política interior y exterior, y la defensa del Estado.",
        fuente: "[Art. 97 CE]"
    },
    {
        pregunta: "¿Bajo qué principios actúa la Administración Pública según el Artículo 103 de la CE?",
        opciones: [
            "Centralización, temporalidad, discrecionalidad y sumisión parcial a la ley.",
            "Unidad, soberanía, representación y publicidad.",
            "Eficacia, jerarquía, descentralización, desconcentración y coordinación, con pleno sometimiento a la ley y al Derecho.",
            "Autonomía, objetividad, exclusividad y jerarquía sin sometimiento legal.",
        ],
        respuestaCorrecta: "Eficacia, jerarquía, descentralización, desconcentración y coordinación, con pleno sometimiento a la ley y al Derecho.",
        fuente: "[Art. 103 CE]"
    },
    {
        pregunta: "¿Qué miembros componen el Gobierno, según el Artículo 98 de la CE?",
        opciones: [
            "El Presidente, los Secretarios de Estado y los Ministros.",
            "El Rey, el Presidente y el Consejo de Estado.",
            "El Presidente, los Vicepresidentes (en su caso), los Ministros y los demás miembros que establezca la ley.",
            "Solo el Presidente y los Ministros, siendo los Vicepresidentes meros asesores.",
        ],
        respuestaCorrecta: "El Presidente, los Vicepresidentes (en su caso), los Ministros y los demás miembros que establezca la ley.",
        fuente: "[Art. 98 CE]"
    },
    {
        pregunta: "¿Quién dirige la acción del Gobierno y coordina las funciones de los demás miembros?",
        opciones: [
            "El Rey.",
            "El Ministro de la Presidencia.",
            "El Presidente del Gobierno.",
            "El Vicepresidente Primero.",
        ],
        respuestaCorrecta: "El Presidente del Gobierno.",
        fuente: ""
    },
    {
        pregunta: "¿Cuál de las siguientes facultades tiene el Gobierno en funciones prohibida tras la celebración de elecciones generales?",
        opciones: [
            "El despacho ordinario de los asuntos.",
            "Aprobar el Proyecto de Ley de Presupuestos Generales del Estado.",
            "Dirigir la Administración civil y militar.",
            "La convocatoria del Consejo de Ministros.",
        ],
        respuestaCorrecta: "Aprobar el Proyecto de Ley de Presupuestos Generales del Estado.",
        fuente: ""
    },
    {
        pregunta: "¿Ante qué órgano se exige la responsabilidad política solidaria del Gobierno, y mediante qué mecanismos?",
        opciones: [
            "Ante el Tribunal Supremo, mediante recursos contencioso-administrativos.",
            "Ante el Senado, mediante la interpelación ordinaria.",
            "Ante el Congreso de los Diputados, mediante la moción de censura y la cuestión de confianza.",
            "Ante el Rey, mediante dimisión unilateral.",
        ],
        respuestaCorrecta: "Ante el Congreso de los Diputados, mediante la moción de censura y la cuestión de confianza.",
        fuente: ""
    },
    {
        pregunta: "¿Qué mayoría se requiere para la investidura del candidato a Presidente del Gobierno en la *primera* votación ordinaria en el Congreso?",
        opciones: [
            "Mayoría Simple.",
            "Mayoría de dos tercios.",
            "Mayoría Absoluta.",
            "Mayoría de tres quintos.",
        ],
        respuestaCorrecta: "Mayoría Absoluta.",
        fuente: ""
    },
    {
        pregunta: "¿Qué mayoría se requiere para la investidura en la *segunda* votación ordinaria, que se celebra 48 horas después de la primera?",
        opciones: [
            "Mayoría Absoluta.",
            "Mayoría de tres quintos.",
            "Mayoría de dos tercios.",
            "Mayoría Simple.",
        ],
        respuestaCorrecta: "Mayoría Simple.",
        fuente: ""
    },
    {
        pregunta: "¿Quién nombra y separa a los Ministros y Vicepresidentes del Gobierno?",
        opciones: [
            "El Presidente del Congreso, a propuesta del Presidente del Gobierno.",
            "El Rey, a propuesta del Presidente del Gobierno.",
            "El Consejo de Ministros, por Real Decreto.",
            "El Tribunal Supremo, por mandato constitucional.",
        ],
        respuestaCorrecta: "El Rey, a propuesta del Presidente del Gobierno.",
        fuente: ""
    },
    {
        pregunta: "¿Cómo se crean las Comisiones Delegadas del Gobierno?",
        opciones: [
            "Por orden ministerial conjunta de los Ministros afectados.",
            "Por Real Decreto del Consejo de Ministros.",
            "Por Ley Orgánica aprobada por las Cortes Generales.",
            "Por decisión del Presidente del Gobierno publicada en el BOE.",
        ],
        respuestaCorrecta: "Por Real Decreto del Consejo de Ministros.",
        fuente: ""
    },
    {
        pregunta: "¿Quiénes son miembros natos de las Comisiones Delegadas del Gobierno?",
        opciones: [
            "Los Ministros.",
            "Los Subsecretarios y Secretarios de Estado.",
            "Los Directores Generales.",
            "Los Vicepresidentes del Gobierno.",
        ],
        respuestaCorrecta: "Los Vicepresidentes del Gobierno.",
        fuente: ""
    },
    {
        pregunta: "¿Quién puede presidir ocasionalmente el Consejo de Ministros, y con qué fin?",
        opciones: [
            "El Vicepresidente, con fines decisorios.",
            "El Rey, a petición del Presidente, con fines informativos.",
            "El Presidente del Congreso, con fines de control parlamentario.",
            "El Ministro de la Presidencia, con fines de Secretaría.",
        ],
        respuestaCorrecta: "El Rey, a petición del Presidente, con fines informativos.",
        fuente: ""
    },
    {
        pregunta: "¿Qué tipo de normas con rango de ley puede aprobar el Consejo de Ministros?",
        opciones: [
            "Leyes Orgánicas y Leyes Ordinarias.",
            "Decretos-leyes y Decretos Legislativos.",
            "Órdenes Ministeriales y Acuerdos de Consejo de Ministros.",
            "Reglamentos de desarrollo.",
        ],
        respuestaCorrecta: "Decretos-leyes y Decretos Legislativos.",
        fuente: ""
    },
    {
        pregunta: "¿Quién puede proponer al Rey la disolución de las Cámaras o la convocatoria de un referéndum consultivo?",
        opciones: [
            "El Consejo de Estado, por unanimidad.",
            "El Congreso de los Diputados, por mayoría absoluta.",
            "El Presidente del Gobierno.",
            "El Consejo General del Poder Judicial.",
        ],
        respuestaCorrecta: "El Presidente del Gobierno.",
        fuente: ""
    },
    {
        pregunta: "¿Cómo se llama el proceso de elección del Presidente del Gobierno que requiere Mayoría Absoluta del Congreso e incluye automáticamente al candidato alternativo?",
        opciones: [
            "Cuestión de confianza.",
            "Votación ordinaria.",
            "Moción de Censura.",
            "Proposición de ley.",
        ],
        respuestaCorrecta: "Moción de Censura.",
        fuente: ""
    },
    {
        pregunta: "¿Qué consecuencias tiene la pérdida de una cuestión de confianza por parte del Presidente del Gobierno?",
        opciones: [
            "El Presidente continúa en el cargo, pero debe reformar el Gobierno.",
            "Implica el cese del Presidente, requiriendo mayoría simple en el Congreso.",
            "Supone el cese solo de los Vicepresidentes y Ministros.",
            "No tiene consecuencias de cese, solo de control político.",
        ],
        respuestaCorrecta: "Implica el cese del Presidente, requiriendo mayoría simple en el Congreso.",
        fuente: ""
    },
    {
        pregunta: "¿Cuál de las siguientes es una función de los Ministros en el ámbito de su Departamento?",
        opciones: [
            "Ejercer la potestad legislativa en todas las materias.",
            "Proponer al Rey la disolución de las Cámaras.",
            "Desarrollar la acción del Gobierno, ejercer la potestad reglamentaria en materias propias y fijar los objetivos del Ministerio.",
            "Resolver los conflictos de atribuciones que surjan entre Ministerios.",
        ],
        respuestaCorrecta: "Desarrollar la acción del Gobierno, ejercer la potestad reglamentaria en materias propias y fijar los objetivos del Ministerio.",
        fuente: ""
    },
    {
        pregunta: "¿Qué facultades tiene el Consejo de Ministros con respecto al presupuesto?",
        opciones: [
            "Aprobar el Proyecto de Ley de Presupuestos Generales del Estado.",
            "Sancionar la Ley de Presupuestos Generales del Estado.",
            "Fiscalizar la ejecución de los Presupuestos Generales del Estado.",
            "Presentar la Ley de Presupuestos en el Senado en exclusiva.",
        ],
        respuestaCorrecta: "Aprobar el Proyecto de Ley de Presupuestos Generales del Estado.",
        fuente: ""
    },
    {
        pregunta: "¿Cuál es una de las funciones de las Comisiones Delegadas del Gobierno, además de examinar cuestiones de carácter general?",
        opciones: [
            "Aprobar los Decretos-leyes.",
            "Resolver asuntos interministeriales que no requieran ser elevados al Consejo de Ministros.",
            "Declarar los estados de alarma, excepción y sitio.",
            "Proponer la moción de censura en el Congreso.",
        ],
        respuestaCorrecta: "Resolver asuntos interministeriales que no requieran ser elevados al Consejo de Ministros.",
        fuente: ""
    },
    {
        pregunta: "¿Ante qué Sala del Tribunal Supremo es exigible la responsabilidad criminal/penal de los miembros del Gobierno?",
        opciones: [
            "Sala Primera (Civil/Patrimonial).",
            "Sala Tercera (Contencioso-Administrativo).",
            "Sala Segunda (Criminal/Penal).",
            "Sala Cuarta (Social).",
        ],
        respuestaCorrecta: "Sala Segunda (Criminal/Penal).",
        fuente: ""
    },
    {
        pregunta: "¿Ante qué Sala del Tribunal Supremo es exigible la responsabilidad civil/patrimonial de los miembros del Gobierno?",
        opciones: [
            "Sala Primera (Civil/Patrimonial).",
            "Sala Segunda (Criminal/Penal).",
            "Sala Cuarta (Social).",
            "Sala Quinta (Militar).",
        ],
        respuestaCorrecta: "Sala Primera (Civil/Patrimonial).",
        fuente: ""
    },
    {
        pregunta: "¿Cuál es el periodo de mandato establecido para el Presidente del Gobierno?",
        opciones: [
            "Seis años, renovables una sola vez.",
            "Indefinido, sujeto a la confianza parlamentaria.",
            "Cuatro años.",
            "Ocho años.",
        ],
        respuestaCorrecta: "Cuatro años.",
        fuente: ""
    },
    {
        pregunta: "¿Cuál de estas es una competencia del Gobierno según el Artículo 97 de la CE?",
        opciones: [
            "Ejercer la función ejecutiva y la potestad reglamentaria.",
            "Ejercer la potestad de aprobar Leyes Orgánicas.",
            "Elegir al Presidente del Tribunal Constitucional.",
            "Disolver el Senado.",
        ],
        respuestaCorrecta: "Ejercer la función ejecutiva y la potestad reglamentaria.",
        fuente: ""
    },
    {
        pregunta: "¿Cuál de estos supuestos NO es causa de cese del Gobierno, según el Artículo 101 de la CE?",
        opciones: [
            "Tras la celebración de elecciones generales.",
            "Pérdida de la confianza parlamentaria.",
            "Dimisión o fallecimiento del Presidente.",
            "Por la dimisión de un Ministro.",
        ],
        respuestaCorrecta: "Por la dimisión de un Ministro.",
        fuente: ""
    },
    {
        pregunta: "¿Quién tiene la potestad de proponer al Rey la disolución de las Cámaras?",
        opciones: [
            "El Consejo de Ministros.",
            "El Presidente del Gobierno.",
            "El Congreso de los Diputados.",
            "El Senado.",
        ],
        respuestaCorrecta: "El Presidente del Gobierno.",
        fuente: ""
    },
    {
        pregunta: "¿Quién propone al Rey el nombramiento y separación de los Vicepresidentes?",
        opciones: [
            "El Consejo de Ministros.",
            "El Presidente del Gobierno.",
            "El Congreso de los Diputados.",
            "El Ministro de la Presidencia.",
        ],
        respuestaCorrecta: "El Presidente del Gobierno.",
        fuente: ""
    },
    {
        pregunta: "¿Las deliberaciones del Consejo de Ministros son?",
        opciones: [
            "Públicas.",
            "Secretas.",
            "Solo públicas cuando afectan a Leyes Orgánicas.",
            "Registradas y consultables por cualquier ciudadano.",
        ],
        respuestaCorrecta: "Secretas.",
        fuente: ""
    },
    {
        pregunta: "¿Cuál es la función del Vicepresidente del Gobierno, si existe?",
        opciones: [
            "Dirigir la política exterior exclusivamente.",
            "Las que le encomiende el Rey.",
            "Las que le encomiende el Presidente del Gobierno.",
            "Sustituir automáticamente al Rey en caso de ausencia.",
        ],
        respuestaCorrecta: "Las que le encomiende el Presidente del Gobierno.",
        fuente: ""
    },
    {
        pregunta: "¿Qué ocurre con el Gobierno cesante respecto a la facultad de proponer la disolución de las Cámaras?",
        opciones: [
            "La mantiene en casos de extrema necesidad.",
            "Se abstiene de ejercerla.",
            "La ejerce con autorización del Rey.",
            "Pasa a ser competencia del Consejo de Estado.",
        ],
        respuestaCorrecta: "Se abstiene de ejercerla.",
        fuente: ""
    },
    {
        pregunta: "¿Qué ocurre con las delegaciones legislativas otorgadas por las Cortes Generales cuando el Gobierno está en funciones por celebración de elecciones generales?",
        opciones: [
            "Quedan automáticamente derogadas.",
            "Siguen vigentes y pueden ser utilizadas.",
            "Quedan en suspenso.",
            "Pasan a ser ejercidas por el Rey.",
        ],
        respuestaCorrecta: "Quedan en suspenso.",
        fuente: ""
    },
    {
        pregunta: "¿Qué implica que el Gobierno cesante continúe en funciones hasta la toma de posesión del nuevo Gobierno?",
        opciones: [
            "Que asume plenas facultades políticas.",
            "Que su gestión se limita al despacho ordinario.",
            "Que puede aprobar el Proyecto de Ley de Presupuestos.",
            "Que mantiene la facultad de proponer la disolución de las Cámaras.",
        ],
        respuestaCorrecta: "Que su gestión se limita al despacho ordinario.",
        fuente: ""
    },
    {
        pregunta: "¿Qué norma regula la composición y competencia del Consejo de Estado, supremo órgano consultivo del Gobierno?",
        opciones: [
            "Un Real Decreto-Ley.",
            "Una Ley Ordinaria.",
            "Una Ley Orgánica.",
            "Un Reglamento del Consejo de Ministros.",
        ],
        respuestaCorrecta: "Una Ley Orgánica.",
        fuente: ""
    },
    {
        pregunta: "¿Quién propone al Rey la celebración de un referéndum consultivo, previa autorización del Congreso?",
        opciones: [
            "El Consejo de Ministros.",
            "El Presidente del Gobierno.",
            "Las Cortes Generales conjuntamente.",
            "El Presidente del Congreso.",
        ],
        respuestaCorrecta: "El Presidente del Gobierno.",
        fuente: ""
    },
    {
        pregunta: "¿Quién nombra y separa al Vicepresidente del Gobierno?",
        opciones: [
            "El Consejo de Ministros.",
            "El Rey, a propuesta del Presidente.",
            "El Presidente del Congreso.",
            "El Rey, a iniciativa propia.",
        ],
        respuestaCorrecta: "El Rey, a propuesta del Presidente.",
        fuente: ""
    },
    {
        pregunta: "¿Cuál es la naturaleza de la responsabilidad de los miembros del Gobierno?",
        opciones: [
            "Individual y ante el Tribunal Constitucional.",
            "Mancomunada y ante el Rey.",
            "Política (solidaria) y criminal (individual).",
            "Exclusivamente política.",
        ],
        respuestaCorrecta: "Política (solidaria) y criminal (individual).",
        fuente: ""
    },
    {
        pregunta: "El Gobierno ejerce la función ejecutiva y la potestad reglamentaria de acuerdo con:",
        opciones: [
            "El Plan General de Gobierno.",
            "La Constitución y las leyes.",
            "Los Acuerdos Internacionales.",
            "Los reglamentos de la Unión Europea exclusivamente.",
        ],
        respuestaCorrecta: "La Constitución y las leyes.",
        fuente: ""
    },
    {
        pregunta: "¿Cuál de estos principios **no** figura en el Art. 103 CE como principio de actuación de la Administración Pública?",
        opciones: [
            "Jerarquía.",
            "Descentralización.",
            "Unidad.",
            "Coordinación.",
        ],
        respuestaCorrecta: "Unidad.",
        fuente: ""
    },
    {
        pregunta: "¿Cuál es el órgano de **dirección política** del país según la CE?",
        opciones: [
            "La Administración Pública.",
            "El Consejo de Estado.",
            "El Gobierno.",
            "El Tribunal Supremo.",
        ],
        respuestaCorrecta: "El Gobierno.",
        fuente: ""
    },
    {
        pregunta: "¿La existencia de Vicepresidentes en el Gobierno es obligatoria o potestativa?",
        opciones: [
            "Es potestativa.",
            "Es obligatoria siempre que haya más de 10 Ministros.",
            "Es siempre obligatoria.",
            "Es obligatoria si lo exige el Congreso.",
        ],
        respuestaCorrecta: "Es potestativa.",
        fuente: ""
    },
    {
        pregunta: "El Gobierno está compuesto por el Presidente, los Vicepresidentes (en su caso), los Ministros y:",
        opciones: [
            "Los Secretarios de Estado.",
            "Los Subsecretarios.",
            "Los demás miembros que establezca la ley.",
            "El Defensor del Pueblo.",
        ],
        respuestaCorrecta: "Los demás miembros que establezca la ley.",
        fuente: ""
    },
    {
        pregunta: "¿Mediante qué norma se crean las Comisiones Delegadas del Gobierno?",
        opciones: [
            "Ley Orgánica.",
            "Ley Ordinaria.",
            "Real Decreto del Consejo de Ministros.",
            "Orden Ministerial.",
        ],
        respuestaCorrecta: "Real Decreto del Consejo de Ministros.",
        fuente: ""
    },
    {
        pregunta: "¿Quiénes son miembros natos de las Comisiones Delegadas del Gobierno?",
        opciones: [
            "Los Secretarios de Estado.",
            "Los Subsecretarios.",
            "Los Vicepresidentes del Gobierno.",
            "Los Directores Generales.",
        ],
        respuestaCorrecta: "Los Vicepresidentes del Gobierno.",
        fuente: ""
    },
    {
        pregunta: "¿Cuál de las siguientes es una función del Consejo de Ministros?",
        opciones: [
            "Sancionar y promulgar las leyes.",
            "Aprobar los proyectos de ley.",
            "Proponer la disolución de las Cámaras.",
            "Nombrar al Presidente del Gobierno.",
        ],
        respuestaCorrecta: "Aprobar los proyectos de ley.",
        fuente: ""
    },
    {
        pregunta: "¿Cuál es el órgano que se encarga de la ejecución y gestión de las directrices políticas del Gobierno?",
        opciones: [
            "El Gobierno.",
            "La Administración Pública.",
            "Las Cortes Generales.",
            "El Consejo de Estado.",
        ],
        respuestaCorrecta: "La Administración Pública.",
        fuente: ""
    },
    {
        pregunta: "¿A quién corresponde la Presidencia del Consejo de Ministros?",
        opciones: [
            "Al Rey.",
            "Al Ministro de la Presidencia.",
            "Al Presidente del Gobierno.",
            "Al Vicepresidente Primero.",
        ],
        respuestaCorrecta: "Al Presidente del Gobierno.",
        fuente: ""
    },
    {
        pregunta: "¿Con qué fin puede el Rey presidir el Consejo de Ministros?",
        opciones: [
            "Con fines decisorios en caso de empate.",
            "Con fines informativos, a petición del Presidente.",
            "Con fines de control político.",
            "Con carácter permanente.",
        ],
        respuestaCorrecta: "Con fines informativos, a petición del Presidente.",
        fuente: ""
    },
    {
        pregunta: "¿Qué aprueba el Consejo de Ministros en materia de legislación con rango de ley?",
        opciones: [
            "Leyes Orgánicas.",
            "Leyes Ordinarias.",
            "Reales Decretos-Leyes y Reales Decretos Legislativos.",
            "Proposiciones de Ley.",
        ],
        respuestaCorrecta: "Reales Decretos-Leyes y Reales Decretos Legislativos.",
        fuente: ""
    },
    {
        pregunta: "¿Cómo se denomina la potestad que tienen los Ministros para dictar normas en materias propias de su Departamento?",
        opciones: [
            "Potestad legislativa.",
            "Potestad reglamentaria.",
            "Potestad jurisdiccional.",
            "Potestad de avocación.",
        ],
        respuestaCorrecta: "Potestad reglamentaria.",
        fuente: ""
    },
    {
        pregunta: "¿Cuál es la naturaleza de las deliberaciones del Consejo de Ministros?",
        opciones: [
            "Públicas.",
            "Secretas.",
            "Públicas, salvo que se decida lo contrario.",
            "Reservadas solo a los miembros del Gobierno.",
        ],
        respuestaCorrecta: "Secretas.",
        fuente: ""
    },
    {
        pregunta: "¿Cuál es una de las funciones del Vicepresidente del Gobierno?",
        opciones: [
            "La que le encomiende el Rey.",
            "Dirigir la Administración Central del Estado.",
            "Las que le encomiende el Presidente del Gobierno.",
            "Sustituir al Presidente de las Cortes Generales.",
        ],
        respuestaCorrecta: "Las que le encomiende el Presidente del Gobierno.",
        fuente: ""
    },
    {
        pregunta: "¿Cuál de las siguientes es una de las funciones del Ministro en el ámbito de su Departamento?",
        opciones: [
            "Nombrar al Presidente del Gobierno.",
            "Proponer mociones de censura.",
            "Desarrollar la acción del Gobierno y fijar los objetivos del Ministerio.",
            "Ejercer la potestad de veto sobre las leyes.",
        ],
        respuestaCorrecta: "Desarrollar la acción del Gobierno y fijar los objetivos del Ministerio.",
        fuente: ""
    },
    {
        pregunta: "¿Quién nombra y separa a los Ministros?",
        opciones: [
            "El Consejo de Ministros, a propuesta del Presidente.",
            "El Rey, a propuesta del Presidente del Gobierno.",
            "Las Cortes Generales.",
            "El Ministro de la Presidencia.",
        ],
        respuestaCorrecta: "El Rey, a propuesta del Presidente del Gobierno.",
        fuente: ""
    },
    {
        pregunta: "La Administración sirve con objetividad los intereses generales y actúa con pleno sometimiento a:",
        opciones: [
            "La voluntad del Gobierno.",
            "La Ley y al Derecho.",
            "El Reglamento interno de cada Ministerio.",
            "Las directrices europeas.",
        ],
        respuestaCorrecta: "La Ley y al Derecho.",
        fuente: ""
    },
    {
        pregunta: "¿Cuál es el órgano cuya función principal es la dirección de la defensa del Estado?",
        opciones: [
            "Las Cortes Generales.",
            "El Tribunal Constitucional.",
            "El Gobierno.",
            "El Consejo de Estado.",
        ],
        respuestaCorrecta: "El Gobierno.",
        fuente: ""
    },
    {
        pregunta: "¿Cómo se exige la responsabilidad política solidaria del Gobierno ante el Congreso de los Diputados?",
        opciones: [
            "Mediante la investidura.",
            "Mediante el Real Decreto-Ley.",
            "Mediante la moción de censura o la cuestión de confianza.",
            "Mediante el recurso de amparo.",
        ],
        respuestaCorrecta: "Mediante la moción de censura o la cuestión de confianza.",
        fuente: ""
    },
    {
        pregunta: "El Gobierno cesante continuará en funciones hasta:",
        opciones: [
            "La dimisión de todos sus miembros.",
            "La toma de posesión del nuevo Gobierno.",
            "La constitución de las nuevas Cortes Generales.",
            "La convocatoria de nuevas elecciones.",
        ],
        respuestaCorrecta: "La toma de posesión del nuevo Gobierno.",
        fuente: ""
    },
    {
        pregunta: "¿En qué caso cesa el Gobierno según el Artículo 101 de la CE?",
        opciones: [
            "Por la dimisión o fallecimiento de un Vicepresidente.",
            "Tras la celebración de elecciones generales.",
            "Por la aprobación de una Ley Orgánica.",
            "Por la reprobación de un Ministro.",
        ],
        respuestaCorrecta: "Tras la celebración de elecciones generales.",
        fuente: ""
    },
    {
        pregunta: "¿Quién nombra al candidato a Presidente del Gobierno?",
        opciones: [
            "El Congreso de los Diputados.",
            "El Rey, previa consulta con los grupos parlamentarios.",
            "El Consejo de Ministros.",
            "El Presidente del Gobierno saliente.",
        ],
        respuestaCorrecta: "El Rey, previa consulta con los grupos parlamentarios.",
        fuente: ""
    },
    {
        pregunta: "¿Qué mayoría se requiere para que el candidato a Presidente del Gobierno sea investido en la segunda votación?",
        opciones: [
            "Mayoría Simple.",
            "Mayoría Absoluta.",
            "Mayoría de dos tercios.",
            "Mayoría de tres quintos.",
        ],
        respuestaCorrecta: "Mayoría Simple.",
        fuente: ""
    },
    {
        pregunta: "Si una moción de censura triunfa, ¿qué mayoría requiere y qué incluye automáticamente?",
        opciones: [
            "Mayoría Simple y convoca elecciones.",
            "Mayoría Absoluta e incluye automáticamente al candidato alternativo.",
            "Mayoría Absoluta y se nombra un Presidente provisional.",
            "Mayoría de dos tercios e incluye al candidato alternativo.",
        ],
        respuestaCorrecta: "Mayoría Absoluta e incluye automáticamente al candidato alternativo.",
        fuente: ""
    },
    {
        pregunta: "¿Qué implica la pérdida de una cuestión de confianza por parte del Presidente?",
        opciones: [
            "El cese del Presidente del Gobierno.",
            "El cese solo de los Ministros.",
            "La obligación de convocar un referéndum.",
            "La disolución automática del Senado.",
        ],
        respuestaCorrecta: "El cese del Presidente del Gobierno.",
        fuente: ""
    },
    {
        pregunta: "¿Cuál es una de las competencias de las Comisiones Delegadas del Gobierno?",
        opciones: [
            "Aprobar los reglamentos de desarrollo de leyes.",
            "Resolver asuntos interministeriales que no requieran ser elevados al Consejo de Ministros.",
            "Nombrar a los Secretarios de Estado.",
            "Aprobar la Ley de Presupuestos.",
        ],
        respuestaCorrecta: "Resolver asuntos interministeriales que no requieran ser elevados al Consejo de Ministros.",
        fuente: ""
    },
    {
        pregunta: "¿Cuál es el órgano cuya existencia es potestativa en el Gobierno?",
        opciones: [
            "El Presidente.",
            "Los Ministros.",
            "Los Vicepresidentes.",
            "El Consejo de Ministros.",
        ],
        respuestaCorrecta: "Los Vicepresidentes.",
        fuente: ""
    },
    {
        pregunta: "¿Quién resuelve los conflictos de atribuciones que puedan surgir entre los diferentes Ministerios?",
        opciones: [
            "El Consejo de Estado.",
            "El Presidente del Gobierno.",
            "El Consejo de Ministros.",
            "El Tribunal Supremo.",
        ],
        respuestaCorrecta: "El Presidente del Gobierno.",
        fuente: ""
    },
    {
        pregunta: "¿Quién debe firmar la propuesta de disolución de las Cámaras que el Presidente somete al Rey?",
        opciones: [
            "El Rey refrenda la propuesta.",
            "El Presidente del Congreso.",
            "Debe ir refrendada por el Ministro de la Presidencia.",
            "El Presidente del Gobierno (como proponente y refrendante).",
        ],
        respuestaCorrecta: "El Presidente del Gobierno (como proponente y refrendante).",
        fuente: ""
    },
    {
        pregunta: "¿Cuál de estos NO es un principio de actuación de la Administración Pública, según la CE?",
        opciones: [
            "Jerarquía.",
            "Eficacia.",
            "Descentralización.",
            "Bipartidismo.",
        ],
        respuestaCorrecta: "Bipartidismo.",
        fuente: ""
    },
    {
        pregunta: "¿Qué normas aprueba el Consejo de Ministros para el desarrollo y ejecución de las leyes?",
        opciones: [
            "Leyes Orgánicas.",
            "Decretos Legislativos.",
            "Reglamentos.",
            "Órdenes Ministeriales.",
        ],
        respuestaCorrecta: "Reglamentos.",
        fuente: ""
    },
    {
        pregunta: "¿Cuál es la función del Ministro relativa a los objetivos de su Departamento?",
        opciones: [
            "Fijar los objetivos del Ministerio.",
            "Proponer el cese del Presidente del Gobierno.",
            "Dirigir la política exterior.",
            "Dirigir la Administración periférica.",
        ],
        respuestaCorrecta: "Fijar los objetivos del Ministerio.",
        fuente: ""
    },
    {
        pregunta: "¿Qué ocurre con la investidura si tras dos meses de la primera votación ningún candidato obtiene la confianza?",
        opciones: [
            "Se convoca una nueva sesión de investidura.",
            "El Rey convoca nuevas elecciones con el refrendo del Presidente del Congreso.",
            "El Rey disuelve ambas Cámaras y convoca nuevas elecciones con el refrendo del Presidente del Congreso.",
            "El Rey nombra al Presidente del Senado como Presidente provisional.",
        ],
        respuestaCorrecta: "El Rey disuelve ambas Cámaras y convoca nuevas elecciones con el refrendo del Presidente del Congreso.",
        fuente: ""
    },
    {
        pregunta: "La Administración Pública sirve con objetividad:",
        opciones: [
            "A los intereses del partido gobernante.",
            "A los intereses generales.",
            "A los intereses de la Corona.",
            "A los intereses de las Comunidades Autónomas.",
        ],
        respuestaCorrecta: "A los intereses generales.",
        fuente: ""
    },
    {
        pregunta: "¿A qué órgano corresponde la dirección de la política interior y exterior?",
        opciones: [
            "Las Cortes Generales.",
            "El Rey.",
            "El Consejo de Estado.",
            "El Gobierno.",
        ],
        respuestaCorrecta: "El Gobierno.",
        fuente: ""
    },
    {
        pregunta: "El Gobierno cesante tiene limitada su gestión a qué tipo de asuntos:",
        opciones: [
            "De alta dirección política.",
            "De despacho ordinario.",
            "De carácter legislativo.",
            "De política exterior estratégica.",
        ],
        respuestaCorrecta: "De despacho ordinario.",
        fuente: ""
    },
    {
        pregunta: "¿Cuál de las siguientes **no** es una facultad del Presidente del Gobierno?",
        opciones: [
            "Representar al Gobierno.",
            "Proponer al Rey el nombramiento y separación de Ministros.",
            "Sancionar y promulgar las leyes.",
            "Dirigir la acción del Gobierno.",
        ],
        respuestaCorrecta: "Sancionar y promulgar las leyes.",
        fuente: ""
    },
    {
        pregunta: "¿Quién tiene la competencia de plantear ante el Congreso la cuestión de confianza?",
        opciones: [
            "El Consejo de Ministros.",
            "El Presidente del Gobierno.",
            "El Rey.",
            "El Ministro de la Presidencia.",
        ],
        respuestaCorrecta: "El Presidente del Gobierno.",
        fuente: ""
    },
    {
        pregunta: "¿Qué tipo de mayoría requiere la cuestión de confianza para ser aprobada en el Congreso?",
        opciones: [
            "Mayoría Absoluta.",
            "Mayoría Simple.",
            "Mayoría de dos tercios.",
            "Mayoría de tres quintos.",
        ],
        respuestaCorrecta: "Mayoría Simple.",
        fuente: ""
    },
    {
        pregunta: "¿Quién es el titular de un Departamento ministerial?",
        opciones: [
            "El Secretario de Estado.",
            "El Subsecretario.",
            "El Ministro.",
            "El Director General.",
        ],
        respuestaCorrecta: "El Ministro.",
        fuente: ""
    },
    {
        pregunta: "La Administración General del Estado se organiza y actúa con pleno respeto al principio de:",
        opciones: [
            "Independencia judicial.",
            "Legalidad.",
            "Unilateralidad.",
            "Soberanía popular.",
        ],
        respuestaCorrecta: "Legalidad.",
        fuente: ""
    },
    {
        pregunta: "¿La responsabilidad criminal/penal de los miembros del Gobierno es exigible ante qué órgano?",
        opciones: [
            "El Tribunal Constitucional.",
            "La Sala de lo Penal del Tribunal Supremo.",
            "El Tribunal de Cuentas.",
            "El Tribunal Superior de Justicia.",
        ],
        respuestaCorrecta: "La Sala de lo Penal del Tribunal Supremo.",
        fuente: ""
    },
    {
        pregunta: "¿Qué potestad ejerce el Gobierno al dictar Reales Decretos-Leyes y Reales Decretos Legislativos?",
        opciones: [
            "Potestad reglamentaria.",
            "Potestad ejecutiva.",
            "Potestad legislativa delegada o de urgencia.",
            "Potestad administrativa.",
        ],
        respuestaCorrecta: "Potestad legislativa delegada o de urgencia.",
        fuente: ""
    },
    {
        pregunta: "¿La actuación de la Administración General del Estado debe asegurar a los ciudadanos:?",
        opciones: [
            "La gratuidad de todos los servicios.",
            "La efectividad de sus derechos cuando se relacionen con la Administración.",
            "La inmediata aprobación de todas las solicitudes.",
            "La eliminación de todos los trámites burocráticos.",
        ],
        respuestaCorrecta: "La efectividad de sus derechos cuando se relacionen con la Administración.",
        fuente: ""
    },
    {
        pregunta: "¿Quién asume las funciones del Presidente por ausencia?",
        opciones: [
            "El Ministro de la Presidencia.",
            "El Vicepresidente o, en su defecto, los Ministros por el orden de precedencia.",
            "El Presidente del Congreso.",
            "El Rey.",
        ],
        respuestaCorrecta: "El Vicepresidente o, en su defecto, los Ministros por el orden de precedencia.",
        fuente: ""
    },
    {
        pregunta: "¿Cuál es el órgano que actúa como instrumento coordinador de todos los departamentos ministeriales?",
        opciones: [
            "El Consejo de Estado.",
            "El Tribunal de Cuentas.",
            "El Consejo de Ministros.",
            "La Comisión Delegada de Asuntos Económicos.",
        ],
        respuestaCorrecta: "El Consejo de Ministros.",
        fuente: ""
    },
    {
        pregunta: "¿Quién preside las reuniones del Consejo de Ministros?",
        opciones: [
            "El Rey.",
            "El Ministro de la Presidencia.",
            "El Presidente del Gobierno.",
            "El Vicepresidente Primero.",
        ],
        respuestaCorrecta: "El Presidente del Gobierno.",
        fuente: ""
    },
    {
        pregunta: "¿Cuál de estos principios NO es fundamental en la organización de la Administración Central del Estado (ACE)?",
        opciones: [
            "Jerarquía.",
            "Desconcentración.",
            "Exclusividad.",
            "Coordinación.",
        ],
        respuestaCorrecta: "Exclusividad.",
        fuente: ""
    },
    {
        pregunta: "¿Cómo se regula el estatuto de los funcionarios públicos, el acceso a la función pública, etc., según la CE?",
        opciones: [
            "Mediante Ley Orgánica.",
            "Mediante Ley Ordinaria.",
            "Mediante el Reglamento de la Administración.",
            "Mediante un Real Decreto.",
        ],
        respuestaCorrecta: "Mediante Ley Ordinaria.",
        fuente: ""
    },
    {
        pregunta: "¿Qué facultad tiene prohibida el Gobierno cesante en relación con las Cortes Generales?",
        opciones: [
            "Presentar Proyectos de Ley al Congreso o al Senado.",
            "Dirigir la Administración civil.",
            "Convocar el Consejo de Ministros.",
            "Despachar asuntos ordinarios.",
        ],
        respuestaCorrecta: "Presentar Proyectos de Ley al Congreso o al Senado.",
        fuente: ""
    },
    {
        pregunta: "¿Cuál es la misión de las Fuerzas y Cuerpos de Seguridad, bajo la dependencia del Gobierno?",
        opciones: [
            "Proteger el libre ejercicio de los derechos y libertades y garantizar la seguridad ciudadana.",
            "Jugar el papel de defensa del Estado.",
            "Dirigir la política interior.",
            "Fiscalizar las cuentas del Estado.",
        ],
        respuestaCorrecta: "Proteger el libre ejercicio de los derechos y libertades y garantizar la seguridad ciudadana.",
        fuente: ""
    },
    {
        pregunta: "¿Quién nombra al Presidente del Gobierno si, tras dos meses de la primera votación, nadie obtiene la confianza?",
        opciones: [
            "El Rey.",
            "El Presidente del Congreso.",
            "El Consejo de Estado.",
            "Nadie, se convocan elecciones.",
        ],
        respuestaCorrecta: "Nadie, se convocan elecciones.",
        fuente: ""
    },
    {
        pregunta: "¿Qué se requiere para la aprobación de la moción de censura en el Congreso?",
        opciones: [
            "Mayoría simple.",
            "Mayoría de tres quintos.",
            "Mayoría absoluta.",
            "Mayoría de dos tercios.",
        ],
        respuestaCorrecta: "Mayoría absoluta.",
        fuente: ""
    },
    {
        pregunta: "¿Quién refrenda los actos del Rey en relación con el nombramiento y separación de los Ministros?",
        opciones: [
            "El Ministro de la Presidencia.",
            "El Presidente del Congreso.",
            "El Presidente del Gobierno.",
            "El Vicepresidente Primero.",
        ],
        respuestaCorrecta: "El Presidente del Gobierno.",
        fuente: ""
    },
    {
        pregunta: "¿Cuál es la función del Ministro relativa a la potestad reglamentaria?",
        opciones: [
            "Ejercer la potestad reglamentaria en materias propias.",
            "Ejercer la potestad reglamentaria por delegación del Rey.",
            "Delegar la potestad reglamentaria en el Subsecretario.",
            "No tiene potestad reglamentaria propia.",
        ],
        respuestaCorrecta: "Ejercer la potestad reglamentaria en materias propias.",
        fuente: ""
    },
    {
        pregunta: "¿Qué principio implica que las competencias no son ejercidas por la Administración del Estado con carácter exclusivo, sino que pueden transferirse para una gestión más eficaz?",
        opciones: [
            "Jerarquía.",
            "Coordinación.",
            "Descentralización.",
            "Desconcentración.",
        ],
        respuestaCorrecta: "Descentralización.",
        fuente: ""
    },
    {
        pregunta: "¿Cuál es una de las competencias del Consejo de Ministros, además de aprobar proyectos de ley?",
        opciones: [
            "Aprobar el Proyecto de Ley de Presupuestos Generales del Estado.",
            "Declarar el estado de sitio.",
            "Proponer al Rey el nombramiento del Fiscal General del Estado.",
            "Resolver los recursos contencioso-administrativos.",
        ],
        respuestaCorrecta: "Aprobar el Proyecto de Ley de Presupuestos Generales del Estado.",
        fuente: ""
    },
    {
        pregunta: "¿Qué cargo actúa como Secretario del Consejo de Ministros?",
        opciones: [
            "El Vicepresidente Primero.",
            "El Ministro de la Presidencia.",
            "El Subsecretario de la Presidencia.",
            "Un Director General de la Presidencia.",
        ],
        respuestaCorrecta: "El Ministro de la Presidencia.",
        fuente: ""
    },
    {
        pregunta: "¿Qué tipo de decisiones se resuelven en el seno de las Comisiones Delegadas del Gobierno?",
        opciones: [
            "Asuntos que afectan a la política general y que deben ser elevados al Consejo de Ministros.",
            "Asuntos interministeriales que **no** requieran ser elevados al Consejo de Ministros.",
            "La disolución de las Cámaras.",
            "El nombramiento de los embajadores.",
        ],
        respuestaCorrecta: "Asuntos interministeriales que **no** requieran ser elevados al Consejo de Ministros.",
        fuente: ""
    },
    {
        pregunta: "¿Cuál es una de las causas de cese del Gobierno?",
        opciones: [
            "Expiración del mandato de las Comunidades Autónomas.",
            "Pérdida de la confianza parlamentaria.",
            "Dimisión o fallecimiento de un Secretario de Estado.",
            "Reprobación de un Vicepresidente.",
        ],
        respuestaCorrecta: "Pérdida de la confianza parlamentaria.",
        fuente: ""
    },
    {
        pregunta: "¿Quién dirige la política interior y exterior?",
        opciones: [
            "El Rey.",
            "El Presidente del Gobierno.",
            "El Consejo de Estado.",
            "El Gobierno.",
        ],
        respuestaCorrecta: "El Gobierno.",
        fuente: ""
    },
    {
        pregunta: "¿Cuál es la diferencia de posición constitucional entre Gobierno y Administración?",
        opciones: [
            "El Gobierno responde al principio democrático y tiene iniciativa política, y la Administración es su instrumento.",
            "La Administración responde al principio democrático y el Gobierno es su instrumento.",
            "Ambos tienen la misma posición constitucional.",
            "El Gobierno solo tiene iniciativa política interna.",
        ],
        respuestaCorrecta: "El Gobierno responde al principio democrático y tiene iniciativa política, y la Administración es su instrumento.",
        fuente: ""
    },
    {
        pregunta: "El Presidente del Gobierno tiene la función de coordinar las funciones de los demás miembros del mismo, sin perjuicio de:",
        opciones: [
            "La competencia y responsabilidad directa de las Cortes Generales.",
            "La competencia y responsabilidad directa de los Ministros en su gestión.",
            "La competencia y responsabilidad del Rey.",
            "La competencia y responsabilidad del Consejo de Estado.",
        ],
        respuestaCorrecta: "La competencia y responsabilidad directa de los Ministros en su gestión.",
        fuente: ""
    },
    {
        pregunta: "¿Qué es el Gobierno según el Artículo 97 de la CE?",
        opciones: [
            "El órgano consultivo del Estado.",
            "El órgano de representación territorial.",
            "El órgano de dirección política del país.",
            "El órgano jurisdiccional supremo.",
        ],
        respuestaCorrecta: "El órgano de dirección política del país.",
        fuente: "[Art. 97 CE]"
    },
    {
        pregunta: "¿Qué ocurre si no se obtiene la mayoría absoluta en la primera votación de investidura?",
        opciones: [
            "El candidato queda rechazado definitivamente.",
            "Se convoca automáticamente una nueva sesión 48 horas después, requiriendo mayoría simple.",
            "Se disuelven las Cámaras y se convocan elecciones.",
            "El Rey nombra a otro candidato.",
        ],
        respuestaCorrecta: "Se convoca automáticamente una nueva sesión 48 horas después, requiriendo mayoría simple.",
        fuente: ""
    },
    {
        pregunta: "La Administración Pública está sujeta a la Ley y al Derecho, cumpliendo con principios como la eficacia y:",
        opciones: [
            "Unidad y exclusividad.",
            "Jerarquía y descentralización.",
            "Temporalidad y paridad.",
            "Soberanía y legalidad legislativa.",
        ],
        respuestaCorrecta: "Jerarquía y descentralización.",
        fuente: "[Art. 103 CE]"
    },
    {
        pregunta: "¿Cuál es la fuente de las funciones y estatuto de los Vicepresidentes, si existen?",
        opciones: [
            "La Ley del Gobierno establece sus funciones de forma exhaustiva.",
            "El Presidente del Gobierno les encomienda las funciones.",
            "El Rey establece sus funciones por Real Decreto.",
            "Las Cortes Generales establecen sus funciones por Ley Orgánica.",
        ],
        respuestaCorrecta: "El Presidente del Gobierno les encomienda las funciones.",
        fuente: ""
    },
    {
        pregunta: "¿Cuál es el órgano que ejerce la potestad reglamentaria de acuerdo con la Constitución y las leyes?",
        opciones: [
            "El Congreso de los Diputados.",
            "El Consejo de Estado.",
            "El Gobierno.",
            "El Tribunal Supremo.",
        ],
        respuestaCorrecta: "El Gobierno.",
        fuente: "[Art. 97 CE]"
    },
    {
        pregunta: "El Gobierno cesante NO puede, entre otras cosas, proponer:",
        opciones: [
            "El cese de un Director General.",
            "La disolución de las Cámaras.",
            "El despacho ordinario de los asuntos.",
            "La celebración de un Consejo de Ministros.",
        ],
        respuestaCorrecta: "La disolución de las Cámaras.",
        fuente: ""
    },
    {
        pregunta: "La responsabilidad civil/patrimonial de los miembros del Gobierno es exigible ante:",
        opciones: [
            "El Tribunal Constitucional.",
            "La Sala de lo Contencioso-Administrativo del TS.",
            "La Sala de lo Civil del Tribunal Supremo.",
            "El Tribunal de Cuentas.",
        ],
        respuestaCorrecta: "La Sala de lo Civil del Tribunal Supremo.",
        fuente: ""
    },
    {
        pregunta: "¿A qué tipo de normas del Gobierno se refiere la Ley 50/1997 del Gobierno como las que aprueban los reglamentos de desarrollo y ejecución de leyes?",
        opciones: [
            "Órdenes Ministeriales.",
            "Instrucciones de Servicio.",
            "Acuerdos del Consejo de Ministros.",
            "Reales Decretos.",
        ],
        respuestaCorrecta: "Reales Decretos.",
        fuente: ""
    },
    {
        pregunta: "¿Qué principio de la Administración implica la transferencia de competencias para una gestión más rápida y eficaz?",
        opciones: [
            "El principio de jerarquía.",
            "El principio de descentralización.",
            "El principio de desconcentración.",
            "El principio de eficacia.",
        ],
        respuestaCorrecta: "El principio de descentralización.",
        fuente: "[Art. 103 CE]"
    },
    {
        pregunta: "El Presidente del Gobierno dirige la acción del Gobierno y coordina las funciones de los demás miembros, sin perjuicio de la competencia y responsabilidad directa de:",
        opciones: [
            "El Rey.",
            "Los Presidentes Autonómicos.",
            "Los Ministros en su gestión.",
            "El Consejo de Estado.",
        ],
        respuestaCorrecta: "Los Ministros en su gestión.",
        fuente: ""
    },
    {
        pregunta: "¿Quién asume la Secretaría de las reuniones del Consejo de Ministros?",
        opciones: [
            "El Presidente del Gobierno.",
            "El Ministro de la Presidencia.",
            "El Director de Gabinete de Presidencia.",
            "El Vicepresidente Primero.",
        ],
        respuestaCorrecta: "El Ministro de la Presidencia.",
        fuente: ""
    },
    {
        pregunta: "¿Quién nombra y separa al Vicepresidente del Gobierno, si existe?",
        opciones: [
            "El Presidente del Gobierno directamente.",
            "El Rey, a propuesta del Presidente del Gobierno.",
            "El Consejo de Ministros.",
            "El Ministro de la Presidencia.",
        ],
        respuestaCorrecta: "El Rey, a propuesta del Presidente del Gobierno.",
        fuente: ""
    },
    {
        pregunta: "¿Quién aprueba los reglamentos para el desarrollo y la ejecución de las leyes?",
        opciones: [
            "El Congreso de los Diputados.",
            "El Consejo de Ministros.",
            "Los Ministros, mediante Orden Ministerial.",
            "El Rey, mediante Real Decreto.",
        ],
        respuestaCorrecta: "El Consejo de Ministros.",
        fuente: ""
    },
    {
        pregunta: "¿Cuál de las siguientes causas provoca el cese del Gobierno en funciones?",
        opciones: [
            "El voto en contra de una Ley Ordinaria.",
            "La dimisión de más de la mitad de los Ministros.",
            "La toma de posesión del nuevo Gobierno.",
            "El fallecimiento de un Vicepresidente.",
        ],
        respuestaCorrecta: "La toma de posesión del nuevo Gobierno.",
        fuente: ""
    },
    {
        pregunta: "Si el Rey asiste al Consejo de Ministros, lo hace:",
        opciones: [
            "Para ejercer funciones decisorias.",
            "Para ejercer la Presidencia en todo caso.",
            "A petición del Presidente, para ser informado de asuntos de Estado.",
            "Con carácter permanente.",
        ],
        respuestaCorrecta: "A petición del Presidente, para ser informado de asuntos de Estado.",
        fuente: ""
    },
    {
        pregunta: "El principio de eficacia en la Administración implica:",
        opciones: [
            "La obtención de resultados con la máxima economía de trámites y tiempo.",
            "La organización jerárquica de la Administración.",
            "El sometimiento pleno a la ley y al Derecho.",
            "El servicio objetivo a los intereses generales.",
        ],
        respuestaCorrecta: "La obtención de resultados con la máxima economía de trámites y tiempo.",
        fuente: "[Art. 103 CE]"
    },
    {
        pregunta: "¿Qué tipo de normas son los Reales Decretos-Leyes y Reales Decretos Legislativos?",
        opciones: [
            "Normas reglamentarias de desarrollo.",
            "Actos administrativos sin rango de ley.",
            "Normas con rango de ley.",
            "Leyes Orgánicas.",
        ],
        respuestaCorrecta: "Normas con rango de ley.",
        fuente: ""
    },
    {
        pregunta: "El Gobierno, además de dirigir la Administración civil y militar, dirige:",
        opciones: [
            "La política judicial.",
            "La política interior y exterior y la defensa del Estado.",
            "La política de las Comunidades Autónomas.",
            "El Consejo General del Poder Judicial.",
        ],
        respuestaCorrecta: "La política interior y exterior y la defensa del Estado.",
        fuente: "[Art. 97 CE]"
    },
    {
        pregunta: "El Gobierno cesa en los casos de pérdida de la confianza parlamentaria previstos en:",
        opciones: [
            "La Ley de Gobierno.",
            "Los Reglamentos de las Cámaras.",
            "La Constitución.",
            "El Estatuto Básico del Empleado Público.",
        ],
        respuestaCorrecta: "La Constitución.",
        fuente: ""
    },
    {
        pregunta: "¿Cuál es la función principal del Ministro en relación con su Departamento?",
        opciones: [
            "Ejercer la función ejecutiva y la potestad reglamentaria en materias propias.",
            "Proponer la moción de censura.",
            "Nombrar al Presidente del Gobierno.",
            "Dirigir la política exterior en su totalidad.",
        ],
        respuestaCorrecta: "Ejercer la función ejecutiva y la potestad reglamentaria en materias propias.",
        fuente: ""
    },
    {
        pregunta: "Una de las competencias de las Comisiones Delegadas del Gobierno es:",
        opciones: [
            "Aprobar el Presupuesto General del Estado.",
            "Estudiar cuestiones de carácter general que afecten a varios Ministerios.",
            "Aprobar Leyes Orgánicas.",
            "Nombrar y separar a los Ministros.",
        ],
        respuestaCorrecta: "Estudiar cuestiones de carácter general que afecten a varios Ministerios.",
        fuente: ""
    },
    {
        pregunta: "El Vicepresidente del Gobierno, si lo hubiere, es nombrado por:",
        opciones: [
            "El Consejo de Ministros.",
            "El Rey, a propuesta del Presidente.",
            "El Congreso, por mayoría simple.",
            "El propio Presidente.",
        ],
        respuestaCorrecta: "El Rey, a propuesta del Presidente.",
        fuente: ""
    },
    {
        pregunta: "¿Qué sucede si en la primera votación de investidura el candidato obtiene 175 votos (de 350)?",
        opciones: [
            "Es investido por mayoría absoluta.",
            "Es rechazado, se requiere una segunda votación 48h después.",
            "Es investido por mayoría simple.",
            "Se disuelven las Cámaras.",
        ],
        respuestaCorrecta: "Es rechazado, se requiere una segunda votación 48h después.",
        fuente: ""
    },
    {
        pregunta: "¿Quién ejerce la potestad reglamentaria en el ámbito de su Departamento?",
        opciones: [
            "El Secretario de Estado.",
            "El Ministro.",
            "El Subsecretario.",
            "El Presidente del Gobierno.",
        ],
        respuestaCorrecta: "El Ministro.",
        fuente: ""
    },
    {
        pregunta: "¿Qué principio de la Administración implica la organización de forma jerárquica?",
        opciones: [
            "Eficacia.",
            "Desconcentración.",
            "Jerarquía.",
            "Coordinación.",
        ],
        respuestaCorrecta: "Jerarquía.",
        fuente: "[Art. 103 CE]"
    },
    {
        pregunta: "¿Cuál de estos NO es un supuesto de cese del Gobierno?",
        opciones: [
            "Dimisión del Presidente.",
            "Fallecimiento del Presidente.",
            "Pérdida de la cuestión de confianza.",
            "Reprobación del Ministro de Hacienda.",
        ],
        respuestaCorrecta: "Reprobación del Ministro de Hacienda.",
        fuente: ""
    },
    {
        pregunta: "La responsabilidad criminal del Presidente y demás miembros del Gobierno será exigible ante:",
        opciones: [
            "El Tribunal Constitucional.",
            "La Sala Segunda del Tribunal Supremo.",
            "El Tribunal de Cuentas.",
            "El Congreso de los Diputados.",
        ],
        respuestaCorrecta: "La Sala Segunda del Tribunal Supremo.",
        fuente: ""
    },
    {
        pregunta: "Las reuniones del Consejo de Ministros pueden tener carácter:",
        opciones: [
            "Jurisdiccional o consultivo.",
            "Decisorio o deliberante.",
            "Legislativo o ejecutivo.",
            "Unilateral o bilateral.",
        ],
        respuestaCorrecta: "Decisorio o deliberante.",
        fuente: ""
    },
    {
        pregunta: "El Gobierno dirige la Administración civil y militar y la defensa del Estado, ejerciendo la función ejecutiva y la potestad:",
        opciones: [
            "Jurisdiccional.",
            "Sancionadora.",
            "Reglamentaria.",
            "Constituyente.",
        ],
        respuestaCorrecta: "Reglamentaria.",
        fuente: "[Art. 97 CE]"
    },
    {
        pregunta: "¿Quién dirige la acción del Gobierno?",
        opciones: [
            "El Consejo de Ministros.",
            "El Rey.",
            "El Presidente del Gobierno.",
            "El Ministro de la Presidencia.",
        ],
        respuestaCorrecta: "El Presidente del Gobierno.",
        fuente: ""
    },
    {
        pregunta: "El Gobierno cesante se limita al despacho ordinario y NO puede:",
        opciones: [
            "Aprobar reglamentos de urgencia.",
            "Aprobar el Proyecto de Ley de Presupuestos Generales del Estado.",
            "Proponer el cese de un Subsecretario.",
            "Convocar reuniones con Secretarios de Estado.",
        ],
        respuestaCorrecta: "Aprobar el Proyecto de Ley de Presupuestos Generales del Estado.",
        fuente: ""
    },
    {
        pregunta: "El principio de objetividad en la Administración implica que sirve con objetividad a:",
        opciones: [
            "Los intereses del Gobierno.",
            "Los intereses generales.",
            "Los intereses de los Ministerios.",
            "Los intereses de la Unión Europea.",
        ],
        respuestaCorrecta: "Los intereses generales.",
        fuente: "[Art. 103 CE]"
    },
    {
        pregunta: "¿Quién propone al Rey el nombramiento y separación de los Vicepresidentes y Ministros?",
        opciones: [
            "El Consejo de Ministros.",
            "El Presidente del Gobierno.",
            "El Congreso de los Diputados.",
            "El Ministro de la Presidencia.",
        ],
        respuestaCorrecta: "El Presidente del Gobierno.",
        fuente: ""
    },
    {
        pregunta: "¿Qué implica la 'coordinación' como principio de actuación de la Administración?",
        opciones: [
            "La supremacía del Presidente del Gobierno.",
            "La actuación conjunta y armónica de los diversos órganos y entes públicos.",
            "La eliminación de trámites burocráticos.",
            "La concentración de todas las competencias en un solo ente.",
        ],
        respuestaCorrecta: "La actuación conjunta y armónica de los diversos órganos y entes públicos.",
        fuente: "[Art. 103 CE]"
    },
    {
        pregunta: "La existencia de Vicepresidentes en el Gobierno es:",
        opciones: [
            "Potestativa.",
            "Obligatoria.",
            "Solo si el Congreso lo exige.",
            "Solo si lo establece la Ley del Gobierno.",
        ],
        respuestaCorrecta: "Potestativa.",
        fuente: ""
    },
    {
        pregunta: "La Moción de Censura debe ser propuesta por al menos:",
        opciones: [
            "Un tercio de los Diputados.",
            "La mayoría absoluta del Congreso.",
            "La décima parte de los Diputados.",
            "La mitad más uno de los Senadores.",
        ],
        respuestaCorrecta: "La décima parte de los Diputados.",
        fuente: ""
    },
    {
        pregunta: "¿Quién propone al Rey la celebración de un referéndum consultivo?",
        opciones: [
            "El Congreso, por mayoría simple.",
            "El Consejo de Ministros.",
            "El Presidente del Gobierno.",
            "El Consejo de Estado.",
        ],
        respuestaCorrecta: "El Presidente del Gobierno.",
        fuente: ""
    },
    {
        pregunta: "¿Qué institución es el supremo órgano consultivo del Gobierno?",
        opciones: [
            "El Tribunal Supremo.",
            "El Consejo de Estado.",
            "El Tribunal Constitucional.",
            "El Defensor del Pueblo.",
        ],
        respuestaCorrecta: "El Consejo de Estado.",
        fuente: ""
    },
    {
        pregunta: "¿Quién determina la composición de las Comisiones Delegadas del Gobierno?",
        opciones: [
            "El Rey.",
            "El Presidente del Gobierno.",
            "El Real Decreto de su creación.",
            "El Congreso de los Diputados.",
        ],
        respuestaCorrecta: "El Real Decreto de su creación.",
        fuente: ""
    },
    {
        pregunta: "Los Ministros son titulares de:",
        opciones: [
            "Una Secretaría de Estado.",
            "Una Subsecretaría.",
            "Un Departamento ministerial.",
            "Una Dirección General.",
        ],
        respuestaCorrecta: "Un Departamento ministerial.",
        fuente: ""
    }
];


export const tema3 = {
    titulo: 'Tema 3: El Gobierno y la Administración',
    descripcion: 'Prueba con penalización de 1/3.',
    cantidadExamen: 20, // Cantidad específica de preguntas para el examen
    logicaPuntuacion: {
        valorCorrecta: 1.0,
        valorIncorrecta: 1/3, 
        restaPorFallo: true
    },
    
    // 💥 CORRECCIÓN CRÍTICA: Debe usar la variable definida en este archivo.
    preguntas: tema3_preguntas 
};