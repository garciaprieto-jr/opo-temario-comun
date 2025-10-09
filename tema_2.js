// tema_2.js


/**
 * =========================================================
 * TEMA 2: ADMINISTRACIÓN Y ORGANIZACIÓN TERRITORIAL (120 PREGUNTAS)
 * =========================================================
 * Claves CORREGIDAS: pregunta, opciones, respuestaCorrecta
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
    {
        pregunta: "3. El sometimiento pleno de la Administración a la Ley y al Derecho se fundamenta en el principio de:",
        opciones: ["Eficacia.", "Jerarquía.", "Legalidad.", "Coordinación."],
        respuestaCorrecta: "Legalidad."
    },
    {
        pregunta: "4. ¿Cuál de los siguientes principios NO está expresamente mencionado en el artículo 103.1 de la CE en relación con la actuación de la Administración Pública?",
        opciones: ["Desconcentración.", "Transparencia.", "Jerarquía.", "Coordinación."],
        respuestaCorrecta: "Transparencia."
    },
    {
        pregunta: "5. La potestad reglamentaria del Gobierno está sometida a fiscalización por parte de:",
        opciones: ["Solo el Tribunal Constitucional.", "Solo el Defensor del Pueblo.", "Los Tribunales de Justicia.", "El Consejo de Estado en exclusiva."],
        respuestaCorrecta: "Los Tribunales de Justicia."
    },
    {
        pregunta: "6. ¿Qué principio constitucional implica la transferencia de titularidad de una competencia desde la Administración central a otra Administración territorial distinta?",
        opciones: ["Desconcentración.", "Jerarquía.", "Descentralización.", "Coordinación."],
        respuestaCorrecta: "Descentralización."
    },
    {
        pregunta: "7. El principio de **buena fe** en las relaciones entre los ciudadanos y la Administración se deriva del principio de:",
        opciones: ["Seguridad jurídica.", "Economía.", "Desconcentración.", "Eficacia."],
        respuestaCorrecta: "Seguridad jurídica."
    },
    {
        pregunta: "8. La responsabilidad patrimonial de la Administración Pública por el funcionamiento de los servicios públicos se recoge en el artículo:",
        opciones: ["104 de la CE.", "106.2 de la CE.", "103.3 de la CE.", "9.1 de la CE."],
        respuestaCorrecta: "106.2 de la CE."
    },
    {
        pregunta: "9. ¿Qué principio del artículo 103.1 de la CE implica la ordenación de órganos con relación de superioridad y subordinación?",
        opciones: ["Descentralización.", "Coordinación.", "Desconcentración.", "Jerarquía."],
        respuestaCorrecta: "Jerarquía."
    },
    {
        pregunta: "10. La reserva de Ley que exige que el desarrollo de los derechos fundamentales se realice mediante Ley Orgánica, ¿qué principio constitucional refuerza?",
        opciones: ["El principio democrático.", "El principio de legalidad.", "El principio de economía.", "El principio de subsidiariedad."],
        respuestaCorrecta: "El principio de legalidad."
    },
    {
        pregunta: "11. ¿Cuál es el tribunal encargado de controlar la legalidad de la actuación administrativa y la sumisión de esta a los fines que la justifican?",
        opciones: ["Tribunal Supremo en Pleno.", "Tribunal Constitucional.", "Tribunales de la jurisdicción Contencioso-Administrativa.", "Tribunal de Cuentas."],
        respuestaCorrecta: "Tribunales de la jurisdicción Contencioso-Administrativa."
    },
    {
        pregunta: "12. El principio de **igualdad** en el acceso a las funciones públicas se garantiza de acuerdo con los criterios de:",
        opciones: ["Capacidad y formación.", "Mérito y antigüedad.", "Mérito y capacidad.", "Antigüedad y formación."],
        respuestaCorrecta: "Mérito y capacidad."
    },
    {
        pregunta: "13. El artículo 9.3 de la CE garantiza la interdicción de la arbitrariedad de los poderes públicos, lo que está directamente relacionado con el principio de:",
        opciones: ["Publicidad.", "Legalidad.", "Descentralización.", "Eficiencia."],
        respuestaCorrecta: "Legalidad."
    },
    {
        pregunta: "14. ¿Qué implica el principio de **desconcentración** en la Administración?",
        opciones: ["La creación de nuevas Administraciones territoriales.", "La transferencia de funciones a órganos periféricos dentro de la misma Administración.", "La atribución de personalidad jurídica propia a entes dependientes.", "La asunción de competencias por el órgano superior."],
        respuestaCorrecta: "La transferencia de funciones a órganos periféricos dentro de la misma Administración."
    },
    {
        pregunta: "15. ¿Cuál es la finalidad principal del principio de **coordinación** entre Administraciones Públicas?",
        opciones: ["Garantizar la jerarquía.", "Asegurar la eficacia y la coherencia.", "Evitar la duplicidad de funciones.", "Todas son correctas."],
        respuestaCorrecta: "Asegurar la eficacia y la coherencia."
    },
    {
        pregunta: "16. Los actos de la Administración Pública se presumen:",
        opciones: ["Legales y ejecutivos.", "Ejecutivos y válidos.", "Válidos y eficaces.", "Eficaces y justos."],
        respuestaCorrecta: "Válidos y eficaces."
    },
    {
        pregunta: "17. El control jurisdiccional de la potestad reglamentaria del Gobierno se realiza a través de la jurisdicción:",
        opciones: ["Civil.", "Penal.", "Contencioso-Administrativa.", "Social."],
        respuestaCorrecta: "Contencioso-Administrativa."
    },
    {
        pregunta: "18. ¿Qué institución es el superior órgano consultivo del Gobierno de la Nación?",
        opciones: ["El Consejo de Estado.", "El Tribunal de Cuentas.", "El Defensor del Pueblo.", "El Consejo Fiscal."],
        respuestaCorrecta: "El Consejo de Estado."
    },
    {
        pregunta: "19. El control de la legalidad de los gastos e ingresos del Estado se atribuye a:",
        opciones: ["El Senado.", "El Tribunal de Cuentas.", "El Tribunal Constitucional.", "La Intervención General de la Administración del Estado."],
        respuestaCorrecta: "El Tribunal de Cuentas."
    },
    {
        pregunta: "20. La Administración del Estado se organiza territorialmente en:",
        opciones: ["Provincias y Municipios.", "Comunidades Autónomas y Provincias.", "Comunidades Autónomas.", "Provincias, con el establecimiento de órganos periféricos en el ámbito autonómico."],
        respuestaCorrecta: "Provincias, con el establecimiento de órganos periféricos en el ámbito autonómico."
    },
    {
        pregunta: "21. ¿Qué órgano ejerce la representación ordinaria del Estado en una Comunidad Autónoma?",
        opciones: ["El Delegado del Gobierno.", "El Presidente de la Comunidad Autónoma.", "El Subdelegado del Gobierno.", "El Ministro de Política Territorial."],
        respuestaCorrecta: "El Delegado del Gobierno."
    },
    {
        pregunta: "22. La Constitución establece que las Comunidades Autónomas se constituyen sobre la base de:",
        opciones: ["Provincias limítrofes con características históricas y culturales comunes.", "Provincias con ámbito territorial propio.", "Provincias limítrofes.", "Regiones históricas."],
        respuestaCorrecta: "Provincias limítrofes con características históricas y culturales comunes."
    },
    {
        pregunta: "23. La iniciativa para el proceso autonómico puede partir de:",
        opciones: ["Todas las Diputaciones interesadas o del 75% de los municipios.", "Dos tercios de los municipios y dos tercios de los electores.", "Todas las Diputaciones interesadas y dos tercios de los municipios.", "El 50% de los municipios y la mayoría de las Diputaciones."],
        respuestaCorrecta: "Todas las Diputaciones interesadas y dos tercios de los municipios."
    },
    {
        pregunta: "24. El principio de **solidaridad** entre las Comunidades Autónomas tiene como finalidad:",
        opciones: ["Garantizar un nivel mínimo de servicios públicos en todo el territorio.", "Evitar el separatismo.", "Promover el desarrollo económico equilibrado.", "Unificar las normativas autonómicas."],
        respuestaCorrecta: "Promover el desarrollo económico equilibrado."
    },
    {
        pregunta: "25. ¿Qué artículo constitucional establece la obligación del Estado de garantizar la realización efectiva del principio de solidaridad?",
        opciones: ["Artículo 2", "Artículo 138", "Artículo 158", "Artículo 156"],
        respuestaCorrecta: "Artículo 138"
    },
    {
        pregunta: "26. ¿Qué institución se encarga de dirimir los conflictos de competencias entre el Estado y las Comunidades Autónomas?",
        opciones: ["El Tribunal Supremo.", "El Consejo de Estado.", "El Tribunal Constitucional.", "Las Cortes Generales."],
        respuestaCorrecta: "El Tribunal Constitucional."
    },
    {
        pregunta: "27. Los Estatutos de Autonomía se aprueban mediante:",
        opciones: ["Ley Ordinaria.", "Decreto Ley.", "Ley de Bases.", "Ley Orgánica."],
        respuestaCorrecta: "Ley Orgánica."
    },
    {
        pregunta: "28. ¿Cuál de los siguientes NO es un órgano de la Comunidad Autónoma, según el Estatuto de Autonomía?",
        opciones: ["El Consejo de Gobierno.", "La Asamblea Legislativa.", "El Tribunal Superior de Justicia.", "El Presidente."],
        respuestaCorrecta: "El Tribunal Superior de Justicia."
    },
    {
        pregunta: "29. ¿En qué artículo de la CE se regulan las Haciendas de las Comunidades Autónomas?",
        opciones: ["Artículo 157", "Artículo 156", "Artículo 158", "Artículo 155"],
        respuestaCorrecta: "Artículo 156"
    },
    {
        pregunta: "30. ¿Qué mecanismo constitucional permite al Gobierno adoptar medidas para obligar a una Comunidad Autónoma a cumplir sus obligaciones o proteger el interés general?",
        opciones: ["El Recurso de Inconstitucionalidad.", "La Ley Orgánica de Armonización.", "El Artículo 155 de la CE.", "La Declaración de Estado de Sitio."],
        respuestaCorrecta: "El Artículo 155 de la CE."
    },
    {
        pregunta: "31. ¿Qué Título de la CE se dedica a la Organización Territorial del Estado?",
        opciones: ["Título VI", "Título VII", "Título VIII", "Título IX"],
        respuestaCorrecta: "Título VIII"
    },
    {
        pregunta: "32. El principio de autonomía de los municipios y provincias está garantizado por la Constitución en el Artículo:",
        opciones: ["137", "140", "141", "142"],
        respuestaCorrecta: "137"
    },
    {
        pregunta: "33. La provincia es una entidad local con personalidad jurídica propia, determinada por:",
        opciones: ["La agrupación de Comarcas.", "La agrupación de municipios.", "Las circunscripciones electorales.", "Las divisiones históricas."],
        respuestaCorrecta: "La agrupación de municipios."
    },
    {
        pregunta: "34. ¿A quién corresponde el gobierno y la administración de la provincia?",
        opciones: ["Al Gobierno Provincial.", "A la Diputación u órganos similares.", "Al Delegado del Gobierno.", "A la Asamblea de Municipios."],
        respuestaCorrecta: "A la Diputación u órganos similares."
    },
    {
        pregunta: "35. ¿Cuál es el órgano que ostenta el gobierno y la administración del municipio?",
        opciones: ["El Concejo Abierto.", "El Pleno Municipal.", "El Alcalde y los Concejales.", "El Ayuntamiento."],
        respuestaCorrecta: "El Ayuntamiento."
    },
    {
        pregunta: "36. La autonomía municipal está protegida por:",
        opciones: ["Reserva de Ley Orgánica.", "Reserva de Ley.", "El Reglamento de la Corporación.", "Los Tratados Internacionales."],
        respuestaCorrecta: "Reserva de Ley."
    },
    {
        pregunta: "37. El Fondo de Compensación Interterritorial se establece en el Artículo:",
        opciones: ["156", "157", "158", "159"],
        respuestaCorrecta: "158"
    },
    {
        pregunta: "38. ¿Cuál es el criterio principal que el Fondo de Compensación Interterritorial debe corregir?",
        opciones: ["El desequilibrio fiscal entre CCAA.", "El desequilibrio económico interterritorial.", "El desequilibrio demográfico.", "El déficit de infraestructuras."],
        respuestaCorrecta: "El desequilibrio económico interterritorial."
    },
    {
        pregunta: "39. El derecho a la autonomía de los municipios está garantizado por el Artículo:",
        opciones: ["140", "141", "142", "143"],
        respuestaCorrecta: "140"
    },
    {
        pregunta: "40. ¿Cuál de estos órganos es un instrumento de cooperación vertical (Estado-CCAA) más formal?",
        opciones: ["Convenios de Colaboración.", "Conferencias Sectoriales.", "Comisiones Bilaterales de Cooperación.", "Mancomunidades."],
        respuestaCorrecta: "Conferencias Sectoriales."
    },
    {
        pregunta: "41. ¿Qué es una Mancomunidad de Municipios?",
        opciones: ["Una entidad territorial con personalidad jurídica propia.", "Una asociación de municipios para ejecutar obras o servicios comunes.", "Un órgano de cooperación entre provincias.", "Un órgano de gestión de infraestructuras."],
        respuestaCorrecta: "Una asociación de municipios para ejecutar obras o servicios comunes."
    },
    {
        pregunta: "42. Los Decretos Leyes son normas con rango de Ley que pueden dictarse en caso de:",
        opciones: ["Urgencia parlamentaria.", "Necesidad extraordinaria y urgente.", "Vacío legal.", "Pérdida de confianza."],
        respuestaCorrecta: "Necesidad extraordinaria y urgente."
    },
    {
        pregunta: "43. ¿Qué materias NO pueden ser reguladas por Decreto Ley?",
        opciones: ["La Hacienda Pública.", "Los derechos, deberes y libertades del Título I.", "Las CCAA.", "El régimen electoral general."],
        respuestaCorrecta: "Los derechos, deberes y libertades del Título I."
    },
    {
        pregunta: "44. ¿Qué plazo tiene el Congreso de los Diputados para convalidar o derogar un Decreto Ley?",
        opciones: ["15 días.", "30 días.", "20 días.", "60 días."],
        respuestaCorrecta: "30 días."
    },
    {
        pregunta: "45. Las Leyes de Comisión (transferencia o delegación de facultades) se regulan en el Artículo:",
        opciones: ["81", "82", "83", "84"],
        respuestaCorrecta: "82"
    },
    {
        pregunta: "46. ¿Cuál es la finalidad de las Leyes de Bases?",
        opciones: ["Regular los derechos fundamentales.", "Delegar la potestad de dictar normas con rango de Ley en el Gobierno.", "Establecer la base económica del Estado.", "Regular el régimen electoral general."],
        respuestaCorrecta: "Delegar la potestad de dictar normas con rango de Ley en el Gobierno."
    },
    {
        pregunta: "47. La forma de las normas que dicta el Gobierno en virtud de una delegación legislativa se denomina:",
        opciones: ["Decreto Ley.", "Decreto Legislativo.", "Orden Ministerial.", "Decreto de la Presidencia."],
        respuestaCorrecta: "Decreto Legislativo."
    },
    {
        pregunta: "48. ¿Cuál de estas normas tiene RANGO DE LEY?",
        opciones: ["Reglamento.", "Orden Ministerial.", "Decreto Legislativo.", "Circular."],
        respuestaCorrecta: "Decreto Legislativo."
    },
    {
        pregunta: "49. ¿Quién refrenda las Leyes y demás normas con rango de Ley, y los Decretos del Consejo de Ministros?",
        opciones: ["El Presidente del Gobierno.", "El Rey.", "El Ministro competente.", "El Consejo de Estado."],
        respuestaCorrecta: "El Presidente del Gobierno."
    },
    {
        pregunta: "50. El refrendo de los actos del Rey es necesario para:",
        opciones: ["Su validez.", "Su publicidad.", "Su eficacia.", "Su ejecutividad."],
        respuestaCorrecta: "Su validez."
    },
    {
        pregunta: "51. ¿Qué tipo de Ley no puede ser objeto de delegación legislativa al Gobierno?",
        opciones: ["Ley Ordinaria.", "Ley Orgánica.", "Ley de Presupuestos.", "Ley de Bases."],
        respuestaCorrecta: "Ley Orgánica."
    },
    {
        pregunta: "52. ¿Quién ejerce el control de constitucionalidad sobre los Decretos Leyes y Decretos Legislativos?",
        opciones: ["El Tribunal Supremo.", "El Congreso de los Diputados.", "El Tribunal Constitucional.", "El Consejo de Estado."],
        respuestaCorrecta: "El Tribunal Constitucional."
    },
    {
        pregunta: "53. El Consejo de Estado, como órgano consultivo, emite dictámenes en función de:",
        opciones: ["La legalidad de la norma.", "La oportunidad política.", "La adecuación económica.", "La moral pública."],
        respuestaCorrecta: "La legalidad de la norma."
    },
    {
        pregunta: "54. ¿Cuál de los siguientes NO es un criterio de ordenación de las fuentes del Derecho?",
        opciones: ["Jerarquía.", "Competencia.", "Sucesión.", "Territorialidad."],
        respuestaCorrecta: "Sucesión."
    },
    {
        pregunta: "55. El principio de **competencia** se aplica en las relaciones entre:",
        opciones: ["Ley Ordinaria y Ley Orgánica.", "Ley Estatal y Ley Autonómica.", "Ley y Reglamento.", "Leyes de distintos rangos."],
        respuestaCorrecta: "Ley Estatal y Ley Autonómica."
    },
    {
        pregunta: "56. El Gobierno está sometido a:",
        opciones: ["La Constitución y la Ley.", "La Constitución, las Leyes y el Derecho.", "El Tribunal Constitucional y el Tribunal Supremo.", "Las Cortes Generales."],
        respuestaCorrecta: "La Constitución, las Leyes y el Derecho."
    },
    {
        pregunta: "57. ¿Qué norma regula la Administración de Justicia?",
        opciones: ["Ley de Enjuiciamiento Civil.", "Ley Orgánica del Poder Judicial.", "Código Penal.", "Código Civil."],
        respuestaCorrecta: "Ley Orgánica del Poder Judicial."
    },
    {
        pregunta: "58. La Ley de Bases debe fijar obligatoriamente:",
        opciones: ["El objeto y el plazo para su ejercicio.", "La finalidad y la materia que se regula.", "El contenido y la delegación.", "Las competencias del Gobierno."],
        respuestaCorrecta: "El objeto y el plazo para su ejercicio."
    },
    {
        pregunta: "59. ¿Qué Ley debe aprobar el Parlamento para que el Gobierno pueda dictar un Texto Refundido?",
        opciones: ["Ley de Bases.", "Ley de Autorización.", "Ley Ordinaria.", "Ley de Delegación."],
        respuestaCorrecta: "Ley de Autorización."
    },
    {
        pregunta: "60. El principio de **reserva de ley** implica que una materia debe ser regulada por una norma:",
        opciones: ["Con rango de Ley.", "Que afecta al Título I.", "Aprobada por el Gobierno.", "Con mayoría absoluta."],
        respuestaCorrecta: "Con rango de Ley."
    },
    {
        pregunta: "61. El Artículo 103.2 de la CE establece que los órganos de la Administración del Estado son creados, regidos y coordinados de acuerdo con la:",
        opciones: ["Constitución y la Ley.", "Ley.", "Ley Orgánica.", "Voluntad del Gobierno."],
        respuestaCorrecta: "Ley."
    },
    {
        pregunta: "62. ¿Cuál es el rango normativo de un **Real Decreto**?",
        opciones: ["Tiene rango de Ley.", "Tiene rango de Reglamento.", "Depende del contenido.", "Solo es un acto administrativo."],
        respuestaCorrecta: "Tiene rango de Reglamento."
    },
    {
        pregunta: "63. ¿Qué tipo de Ley debe regular el régimen electoral general?",
        opciones: ["Ley Ordinaria.", "Ley de Bases.", "Ley Orgánica.", "Decreto Legislativo."],
        respuestaCorrecta: "Ley Orgánica."
    },
    {
        pregunta: "64. Las leyes de la Comunidad Autónoma están sometidas, en su control de constitucionalidad, al:",
        opciones: ["Tribunal Supremo.", "Tribunal Constitucional.", "Consejo de Estado.", "Asamblea Legislativa."],
        respuestaCorrecta: "Tribunal Constitucional."
    },
    {
        pregunta: "65. ¿Qué principio garantiza la igualdad de derechos y obligaciones de los ciudadanos en todo el territorio español?",
        opciones: ["El principio de legalidad.", "El principio de unidad.", "El principio de solidaridad.", "El principio de no discriminación."],
        respuestaCorrecta: "El principio de no discriminación."
    },
    {
        pregunta: "66. Los acuerdos de cooperación entre CCAA necesitan la autorización de:",
        opciones: ["El Rey.", "Las Cortes Generales.", "El Tribunal Constitucional.", "El Gobierno."],
        respuestaCorrecta: "Las Cortes Generales."
    },
    {
        pregunta: "67. ¿Qué órgano ejerce la Alta Inspección para la protección del interés general del Estado en las CCAA?",
        opciones: ["El Gobierno.", "El Senado.", "El Tribunal Constitucional.", "El Consejo de Estado."],
        respuestaCorrecta: "El Gobierno."
    },
    {
        pregunta: "68. La **Disposición Transitoria Segunda** de la CE permite a las provincias de régimen preautonómico que no accedieron por el Art. 143 (vía lenta), acceder por la vía del:",
        opciones: ["Artículo 155.", "Artículo 151 (vía rápida).", "Artículo 145.", "Estatuto de Autonomía."],
        respuestaCorrecta: "Artículo 151 (vía rápida)."
    },
    {
        pregunta: "69. ¿Cuál es la finalidad del **principio de lealtad constitucional** en el Estado Autonómico?",
        opciones: ["Garantizar la financiación de las CCAA.", "Asegurar que las CCAA no se separen del Estado.", "Exigir la colaboración y el respeto entre el Estado y las CCAA.", "Garantizar la supremacía del Estado."],
        respuestaCorrecta: "Exigir la colaboración y el respeto entre el Estado y las CCAA."
    },
    {
        pregunta: "70. Los recursos que las CCAA tienen a su disposición para financiar sus competencias provienen de:",
        opciones: ["Impuestos cedidos por el Estado.", "Impuestos propios.", "Transferencias del Fondo de Compensación.", "Todas son correctas."],
        respuestaCorrecta: "Todas son correctas."
    },
    {
        pregunta: "71. ¿Cuál de los siguientes NO es un principio que informe la actuación de la Administración, según el artículo 103.1 de la CE?",
        opciones: ["Objetividad.", "Eficacia.", "Descentralización.", "Subsidiariedad."],
        respuestaCorrecta: "Subsidiariedad."
    },
    {
        pregunta: "72. ¿Qué implica el principio de **buena administración**?",
        opciones: ["La eficacia y la economía en la gestión.", "El derecho a ser oído y a obtener respuesta.", "La responsabilidad patrimonial de la Administración.", "La transparencia en la gestión."],
        respuestaCorrecta: "El derecho a ser oído y a obtener respuesta."
    },
    {
        pregunta: "73. ¿Cuál es la forma de organización que permite a un órgano superior asumir competencias de un órgano inferior (salvo que sea Ley) en casos excepcionales?",
        opciones: ["Delegación.", "Avocación.", "Desconcentración.", "Descentralización."],
        respuestaCorrecta: "Avocación."
    },
    {
        pregunta: "74. La **encomienda de gestión** implica:",
        opciones: ["La transferencia de la titularidad de una competencia.", "El ejercicio de actividades de carácter material, técnico o de servicios.", "La delegación de la potestad reglamentaria.", "La colaboración entre entes territoriales."],
        respuestaCorrecta: "El ejercicio de actividades de carácter material, técnico o de servicios."
    },
    {
        pregunta: "75. El control de constitucionalidad de las Leyes autonómicas se realiza a través de:",
        opciones: ["Recurso de Amparo.", "Recurso de Inconstitucionalidad.", "Cuestión de Inconstitucionalidad.", "Ambas (Recurso y Cuestión) son correctas."],
        respuestaCorrecta: "Ambas (Recurso y Cuestión) son correctas."
    },
    {
        pregunta: "76. Las CCAA que no accedieron por el Artículo 151 (vía rápida), se rigen por el procedimiento del Artículo:",
        opciones: ["143 (vía lenta).", "144.", "145.", "150."],
        respuestaCorrecta: "143 (vía lenta)."
    },
    {
        pregunta: "77. ¿Cuál de estas materias es competencia **exclusiva** del Estado (Art. 149.1)?",
        opciones: ["Ordenación del territorio.", "Legislación laboral.", "Agricultura y ganadería.", "Turismo."],
        respuestaCorrecta: "Legislación laboral."
    },
    {
        pregunta: "78. La previsión de creación de órganos de colaboración entre CCAA se recoge en el Artículo:",
        opciones: ["140", "141", "142", "145"],
        respuestaCorrecta: "145"
    },
    {
        pregunta: "79. ¿Qué establece la CE respecto a la participación de las CCAA en la organización de la Justicia?",
        opciones: ["Pueden crear su propio Tribunal Superior de Justicia.", "Pueden dictar normas de procedimiento.", "Solo pueden intervenir en la demarcación territorial.", "Tienen competencia en la administración de la Justicia."],
        respuestaCorrecta: "Solo pueden intervenir en la demarcación territorial."
    },
    {
        pregunta: "80. El derecho de los municipios a tener sus propios ingresos para el cumplimiento de sus fines se garantiza en el Artículo:",
        opciones: ["140", "141", "142", "143"],
        respuestaCorrecta: "142"
    },
    {
        pregunta: "81. La Administración Pública está sometida al control de:",
        opciones: ["Las Cortes Generales.", "Los Tribunales.", "El Defensor del Pueblo.", "Todas las anteriores."],
        respuestaCorrecta: "Todas las anteriores."
    },
    {
        pregunta: "82. ¿Qué significa el principio de **descentralización** funcional?",
        opciones: ["Traspaso de funciones a órganos periféricos del Estado.", "Traspaso de competencias a otras Administraciones territoriales.", "Traspaso de funciones a entes instrumentales con personalidad jurídica propia.", "Traspaso de funciones al Gobierno."],
        respuestaCorrecta: "Traspaso de funciones a entes instrumentales con personalidad jurídica propia."
    },
    {
        pregunta: "83. ¿Cuál es el principal instrumento de colaboración financiera entre el Estado y las CCAA?",
        opciones: ["El Fondo de Compensación Interterritorial.", "La Ley de Presupuestos Generales del Estado.", "El Consejo de Política Fiscal y Financiera.", "Los Convenios de Colaboración."],
        respuestaCorrecta: "El Consejo de Política Fiscal y Financiera."
    },
    {
        pregunta: "84. El nombramiento del Presidente de la Comunidad Autónoma se realiza por:",
        opciones: ["El Rey, a propuesta del Gobierno.", "El Rey, a propuesta de la Asamblea Legislativa.", "El Presidente del Gobierno.", "La Asamblea Legislativa."],
        respuestaCorrecta: "El Rey, a propuesta de la Asamblea Legislativa."
    },
    {
        pregunta: "85. La Ley que autoriza la celebración de un convenio de colaboración entre CCAA (Art. 145.2) es una Ley:",
        opciones: ["Orgánica.", "Ordinaria.", "De Bases.", "De Armonización."],
        respuestaCorrecta: "Ordinaria."
    },
    {
        pregunta: "86. ¿Qué órgano de la Administración Central dirige la política interior y exterior?",
        opciones: ["El Rey.", "El Presidente del Gobierno.", "El Consejo de Ministros. (Gobierno)", "Las Cortes Generales."],
        respuestaCorrecta: "El Consejo de Ministros. (Gobierno)"
    },
    {
        pregunta: "87. Los **organismos autónomos** se caracterizan por:",
        opciones: ["Tener personalidad jurídica propia y patrimonio propio.", "Estar sometidos a un régimen de autonomía funcional.", "Realizar actividades de gestión o prestación de servicios.", "Todas son correctas."],
        respuestaCorrecta: "Todas son correctas."
    },
    {
        pregunta: "88. ¿Cuál de los siguientes órganos NO tiene potestad reglamentaria en el ámbito estatal?",
        opciones: ["El Consejo de Ministros.", "El Presidente del Gobierno.", "Los Ministros.", "El Consejo de Estado."],
        respuestaCorrecta: "El Consejo de Estado."
    },
    {
        pregunta: "89. La **Comisión Delegada del Gobierno** es un órgano:",
        opciones: ["Consultivo.", "De colaboración interministerial.", "De control parlamentario.", "De apoyo al Consejo de Ministros."],
        respuestaCorrecta: "De colaboración interministerial."
    },
    {
        pregunta: "90. La **delegación de firma** supone:",
        opciones: ["La transferencia de la titularidad de una competencia.", "La autorización para que un órgano inferior firme un acto.", "La asunción de competencias por el órgano superior.", "La delegación de potestad reglamentaria."],
        respuestaCorrecta: "La autorización para que un órgano inferior firme un acto."
    },
    {
        pregunta: "91. El principio de **transparencia** en la Administración se relaciona con el derecho de los ciudadanos a:",
        opciones: ["Ser oído en el procedimiento.", "Acceder a los archivos y registros.", "Obtener una indemnización.", "Recurrir los actos administrativos."],
        respuestaCorrecta: "Acceder a los archivos y registros."
    },
    {
        pregunta: "92. El **Consejo de Estado** es un órgano:",
        opciones: ["Consultivo.", "De control.", "Ejecutivo.", "Legislativo."],
        respuestaCorrecta: "Consultivo."
    },
    {
        pregunta: "93. El **Plan de Estabilidad** (Art. 135 CE) implica una obligación del Estado para mantener el déficit:",
        opciones: ["Por debajo del 3% del PIB.", "Por debajo del 5% del PIB.", "Dentro de los límites de la UE.", "En el marco de la Ley de Presupuestos."],
        respuestaCorrecta: "Dentro de los límites de la UE."
    },
    {
        pregunta: "94. ¿Cuál de los siguientes NO es un principio de la Justicia, según el artículo 117 de la CE?",
        opciones: ["Independencia.", "Inamovilidad.", "Unidad.", "Objetividad."],
        respuestaCorrecta: "Objetividad."
    },
    {
        pregunta: "95. La **descentralización** es una técnica de organización que se produce entre:",
        opciones: ["Órganos jerárquicamente relacionados.", "Entes territoriales distintos.", "Diferentes departamentos ministeriales.", "Órganos periféricos del Estado."],
        respuestaCorrecta: "Entes territoriales distintos."
    },
    {
        pregunta: "96. ¿Qué función corresponde a los **Subdelegados del Gobierno**?",
        opciones: ["Representar al Gobierno en las Comunidades Autónomas.", "Dirigir la Administración General del Estado en la provincia.", "Coordinar la Administración Periférica.", "Ejercer la Alta Inspección."],
        respuestaCorrecta: "Dirigir la Administración General del Estado en la provincia."
    },
    {
        pregunta: "97. ¿Qué implica la **cláusula de supletoriedad** del Derecho estatal (Art. 149.3)?",
        opciones: ["Que el Derecho estatal prevalece sobre el autonómico.", "Que el Derecho estatal se aplica en defecto de Derecho autonómico.", "Que el Derecho estatal es superior jerárquicamente.", "Que el Derecho autonómico debe armonizar con el estatal."],
        respuestaCorrecta: "Que el Derecho estatal se aplica en defecto de Derecho autonómico."
    },
    {
        pregunta: "98. El sistema de fuentes del Derecho en el ámbito autonómico se rige por el principio de:",
        opciones: ["Jerarquía.", "Competencia.", "Prevalencia.", "Legalidad."],
        respuestaCorrecta: "Competencia."
    },
    {
        pregunta: "99. ¿Cuál de estos NO es un principio de la acción exterior de la Administración del Estado?",
        opciones: ["Principio de unidad.", "Principio de coordinación.", "Principio de lealtad constitucional.", "Principio de soberanía."],
        respuestaCorrecta: "Principio de soberanía."
    },
    {
        pregunta: "100. El **Recurso de Amparo** protege los derechos de la Sección 1ª del Capítulo II del Título I, pero NO protege los derechos recogidos en el Capítulo:",
        opciones: ["Capítulo I.", "Capítulo II, Sección 2ª.", "Capítulo III.", "Capítulo IV."],
        respuestaCorrecta: "Capítulo III."
    },
    {
        pregunta: "101. ¿Qué tipo de acto puede ser objeto de **recurso de alzada**?",
        opciones: ["Actos que ponen fin a la vía administrativa.", "Actos de trámite cualificado.", "Actos de mero trámite.", "Actos definitivos que no ponen fin a la vía administrativa."],
        respuestaCorrecta: "Actos definitivos que no ponen fin a la vía administrativa."
    },
    {
        pregunta: "102. El **recurso de reposición** es un recurso:",
        opciones: ["Potestativo.", "Obligatorio.", "Jerárquico.", "Especial."],
        respuestaCorrecta: "Potestativo."
    },
    {
        pregunta: "103. ¿Qué implica el principio de **ejecutividad** de los actos administrativos?",
        opciones: ["Que deben ser cumplidos por los ciudadanos.", "Que la Administración puede imponer su cumplimiento forzoso.", "Que el acto es eficaz desde su notificación.", "Que el acto es válido."],
        respuestaCorrecta: "Que deben ser cumplidos por los ciudadanos."
    },
    {
        pregunta: "104. El **silencio administrativo** en los procedimientos iniciados a solicitud del interesado se considera, por regla general, de carácter:",
        opciones: ["Estimatorio.", "Desestimatorio.", "Nulo.", "Suspensivo."],
        respuestaCorrecta: "Estimatorio."
    },
    {
        pregunta: "105. ¿Cuál es el plazo máximo para dictar y notificar la resolución expresa en un procedimiento administrativo, si no hay Ley que lo fije?",
        opciones: ["Un mes.", "Dos meses.", "Tres meses.", "Seis meses."],
        respuestaCorrecta: "Tres meses."
    },
    {
        pregunta: "106. El **Plan Hidrológico Nacional** es un ejemplo de competencia:",
        opciones: ["Exclusiva del Estado.", "Compartida con las CCAA.", "Exclusiva de las CCAA.", "De colaboración con los municipios."],
        respuestaCorrecta: "Exclusiva del Estado."
    },
    {
        pregunta: "107. ¿Qué órgano de la CCAA representa al Estado a nivel autonómico?",
        opciones: ["El Presidente de la CCAA.", "La Asamblea Legislativa.", "El Delegado del Gobierno.", "El Consejo de Gobierno."],
        respuestaCorrecta: "El Delegado del Gobierno."
    },
    {
        pregunta: "108. ¿Cuál es la institución que debe informar preceptivamente sobre los Anteproyectos de Ley y los Proyectos de Decretos Legislativos?",
        opciones: ["El Consejo de Estado.", "El Consejo General del Poder Judicial.", "El Tribunal de Cuentas.", "El Tribunal Constitucional."],
        respuestaCorrecta: "El Consejo de Estado."
    },
    {
        pregunta: "109. ¿Qué Ley debe aprobar el Gobierno para que el Estado pueda transferir o delegar facultades a las Comunidades Autónomas?",
        opciones: ["Ley Ordinaria.", "Ley Orgánica (Artículo 150.2).", "Ley de Bases.", "Decreto Legislativo."],
        respuestaCorrecta: "Ley Orgánica (Artículo 150.2)."
    },
    {
        pregunta: "110. La **autonomía financiera** de las CCAA se regula en el Artículo:",
        opciones: ["156", "157", "158", "159"],
        respuestaCorrecta: "156"
    },
    {
        pregunta: "111. ¿Qué principio rige la actuación de los Jueces y Magistrados, según el artículo 117 de la CE?",
        opciones: ["Sometimiento a la Constitución y a la Ley.", "Responsabilidad penal.", "Incompatibilidad política.", "Objetividad en la impartición."],
        respuestaCorrecta: "Sometimiento a la Constitución y a la Ley."
    },
    {
        pregunta: "112. ¿Cuál es el ámbito territorial de la Ley Autonómica?",
        opciones: ["Todo el territorio nacional.", "Solo el territorio de la CCAA.", "El territorio de la CCAA y los municipios limítrofes.", "Las competencias transferidas por el Estado."],
        respuestaCorrecta: "Solo el territorio de la CCAA."
    },
    {
        pregunta: "113. ¿Qué figura está prevista en el Artículo 154 de la CE?",
        opciones: ["El Presidente de la CCAA.", "El Delegado del Gobierno.", "El Tribunal Superior de Justicia.", "El Consejo de Gobierno."],
        respuestaCorrecta: "El Delegado del Gobierno."
    },
    {
        pregunta: "114. ¿Cuál de los siguientes NO es un principio de la actuación del Defensor del Pueblo?",
        opciones: ["Independencia.", "Neutralidad.", "Gratuidad.", "Jerarquía."],
        respuestaCorrecta: "Jerarquía."
    },
    {
        pregunta: "115. El **Principio de Subsidiariedad** es clave en la organización de la Unión Europea y se aplica en el Derecho interno en el ámbito de:",
        opciones: ["La organización militar.", "La legislación laboral.", "Las competencias municipales.", "La Justicia."],
        respuestaCorrecta: "Las competencias municipales."
    },
    {
        pregunta: "116. La responsabilidad patrimonial de la Administración es:",
        opciones: ["Objetiva.", "Subjetiva.", "Culpable.", "Solidaria."],
        respuestaCorrecta: "Objetiva."
    },
    {
        pregunta: "117. ¿Qué tipo de acto puede ser objeto de **recurso extraordinario de revisión**?",
        opciones: ["Actos firmes en vía administrativa.", "Actos de mero trámite.", "Actos anulables.", "Actos que vulneran derechos fundamentales."],
        respuestaCorrecta: "Actos firmes en vía administrativa."
    },
    {
        pregunta: "118. El **principio de estabilidad presupuestaria** (Art. 135) obliga a las Administraciones Públicas a no incurrir en:",
        opciones: ["Déficit estructural.", "Gasto excesivo.", "Deuda pública.", "Endeudamiento privado."],
        respuestaCorrecta: "Déficit estructural."
    },
    {
        pregunta: "119. ¿Cuál de estos órganos puede ser utilizado como técnica de cooperación **vertical** (Estado-CCAA)?",
        opciones: ["Mancomunidad de Municipios.", "Consorcio entre municipios vecinos.", "Comisión Bilateral de Cooperación.", "Agrupación de Comarcas."],
        respuestaCorrecta: "Comisión Bilateral de Cooperación."
    },
    {
        pregunta: "120. ¿Qué técnica permite a una Administración realizar actuaciones propias de otra, previa autorización de esta?",
        opciones: ["La delegación de competencias.", "La encomienda de gestión.", "La transferencia de titularidad.", "La coordinación forzosa."],
        respuestaCorrecta: "La encomienda de gestión."
    }
];

export const tema2 = {
    titulo: 'Tema 2: Administración y Organización Territorial',
    descripcion: 'Prueba con penalización de 1/3.',
    cantidadExamen: 20, // Cantidad específica de preguntas para el examen
    logicaPuntuacion: {
        valorCorrecta: 1.0,
        valorIncorrecta: 1/3, // Resta un tercio por error
        restaPorFallo: true
    },
    preguntas: tema2_preguntas
};
