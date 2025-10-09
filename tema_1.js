// tema_1.js

/**
 * =========================================================
 * TEMA 1: CONSTITUCIÓN ESPAÑOLA (100 PREGUNTAS)
 * =========================================================
 * Claves utilizadas: pregunta, opciones, respuestaCorrecta
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
    {
        pregunta: "3. ¿Cuál de estos NO se menciona en el Artículo 1.1 de la CE como valor superior de su ordenamiento jurídico?",
        opciones: ["Justicia", "Solidaridad", "Igualdad", "Pluralismo Político"],
        respuestaCorrecta: "Solidaridad"
    },
    {
        pregunta: "4. ¿Cuántos son los valores superiores del ordenamiento jurídico español, según el Artículo 1.1 de la CE?",
        opciones: ["Tres", "Cuatro", "Cinco", "Seis"],
        respuestaCorrecta: "Cuatro"
    },
    {
        pregunta: "5. La forma política del Estado español es, según el Artículo 1.3 de la CE, la:",
        opciones: ["República Federal", "Monarquía Constitucional", "Monarquía Parlamentaria", "República Parlamentaria"],
        respuestaCorrecta: "Monarquía Parlamentaria"
    },
    {
        pregunta: "6. ¿En qué Título de la Constitución se recogen los valores superiores y la forma política del Estado?",
        opciones: ["Título Preliminar", "Título I", "Título II", "Título X"],
        respuestaCorrecta: "Título Preliminar"
    },
    {
        pregunta: "7. El concepto de Constitución 'escrita' hace referencia a que:",
        opciones: ["Fue redactada por una Ponencia Constitucional.", "Requiere de procedimientos de reforma especiales.", "Su contenido se halla recogido en un solo texto.", "Reconoce un amplio catálogo de derechos."],
        respuestaCorrecta: "Su contenido se halla recogido en un solo texto."
    },
    {
        pregunta: "8. Según el Artículo 2 de la CE, la Constitución se fundamenta en la indisoluble unidad de la Nación española, patria común e indivisible de todos los españoles, y reconoce y garantiza:",
        opciones: ["La autonomía de las provincias y municipios.", "El derecho a la autodeterminación de los pueblos.", "El derecho a la autonomía de las nacionalidades y regiones.", "La organización territorial en Comunidades Autónomas."],
        respuestaCorrecta: "El derecho a la autonomía de las nacionalidades y regiones."
    },
    {
        pregunta: "9. La soberanía nacional reside en:",
        opciones: ["El Rey.", "Las Cortes Generales.", "El pueblo español.", "El Gobierno."],
        respuestaCorrecta: "El pueblo español."
    },
    {
        pregunta: "10. La CE de 1978 entró en vigor el mismo día de su:",
        opciones: ["Aprobación por el Congreso.", "Aprobación por el Senado.", "Ratificación en referéndum.", "Publicación en el BOE."],
        respuestaCorrecta: "Publicación en el BOE."
    },
    {
        pregunta: "11. ¿Cuál es el principio que inspira la actuación de las Fuerzas Armadas (Art. 8)?",
        opciones: ["Garantizar la soberanía y la independencia de España.", "Defender la legalidad y el orden constitucional.", "Apoyar a las Fuerzas y Cuerpos de Seguridad del Estado.", "Mantener la paz y la seguridad internacional."],
        respuestaCorrecta: "Garantizar la soberanía y la independencia de España."
    },
    {
        pregunta: "12. De acuerdo con el Artículo 9.3 de la CE, la Constitución garantiza el principio de:",
        opciones: ["Irretroactividad de las disposiciones no favorables o restrictivas de derechos individuales.", "Seguridad jurídica.", "Publicidad de las normas.", "Todas las anteriores son correctas."],
        respuestaCorrecta: "Todas las anteriores son correctas."
    },
    {
        pregunta: "13. El principio de legalidad implica que:",
        opciones: ["La Administración está sometida plenamente a la Ley y al Derecho.", "Los poderes públicos están sujetos a la Constitución y al resto del ordenamiento jurídico.", "Toda norma debe ser publicada para ser válida.", "Las leyes tienen que ser aprobadas por mayoría cualificada."],
        respuestaCorrecta: "Los poderes públicos están sujetos a la Constitución y al resto del ordenamiento jurídico."
    },
    {
        pregunta: "14. ¿Qué artículo de la CE establece la sujeción de los ciudadanos y los poderes públicos a la Constitución y al resto del ordenamiento jurídico?",
        opciones: ["Artículo 1", "Artículo 9", "Artículo 10", "Artículo 2"],
        respuestaCorrecta: "Artículo 9"
    },
    {
        pregunta: "15. El principio de jerarquía normativa se aplica en las relaciones entre:",
        opciones: ["Las normas de igual rango de diferentes órganos.", "Las normas de distinto rango (p. ej., Ley y Reglamento).", "La ley estatal y la ley autonómica.", "La ley y la costumbre."],
        respuestaCorrecta: "Las normas de distinto rango (p. ej., Ley y Reglamento)."
    },
    {
        pregunta: "16. ¿Cuál de estos NO es un principio garantizado por el Artículo 9.3 de la CE?",
        opciones: ["Interdicción de la arbitrariedad de los poderes públicos.", "La responsabilidad de los poderes públicos.", "La descentralización administrativa.", "La publicidad de las normas."],
        respuestaCorrecta: "La descentralización administrativa."
    },
    {
        pregunta: "17. El principio de responsabilidad de los poderes públicos se refiere a:",
        opciones: ["Su obligación de reparar los daños causados por su funcionamiento.", "La obligación de dar cuenta ante las Cortes.", "La rendición de cuentas ante el Tribunal de Cuentas.", "La sujeción al ordenamiento penal."],
        respuestaCorrecta: "Su obligación de reparar los daños causados por su funcionamiento."
    },
    {
        pregunta: "18. La labor de las Fuerzas Armadas, según la CE, es garantizar:",
        opciones: ["La independencia de España.", "La integridad territorial.", "El ordenamiento constitucional.", "Todas las anteriores."],
        respuestaCorrecta: "Todas las anteriores."
    },
    {
        pregunta: "19. El principio de irretroactividad de las disposiciones restrictivas de derechos individuales implica que una ley penal desfavorable:",
        opciones: ["Solo se aplica a hechos futuros.", "Solo se aplica a hechos pasados.", "Se aplica siempre, salvo que lo diga expresamente.", "Es inconstitucional."],
        respuestaCorrecta: "Solo se aplica a hechos futuros."
    },
    {
        pregunta: "20. ¿Qué órgano ejerce la potestad reglamentaria de acuerdo con la CE?",
        opciones: ["El Parlamento", "El Gobierno", "El Tribunal Constitucional", "El Consejo General del Poder Judicial"],
        respuestaCorrecta: "El Gobierno"
    },
    {
        pregunta: "21. El Título I de la CE se denomina:",
        opciones: ["De los derechos y libertades.", "De los derechos y deberes fundamentales.", "De los derechos fundamentales.", "De los derechos y libertades fundamentales."],
        respuestaCorrecta: "De los derechos y deberes fundamentales."
    },
    {
        pregunta: "22. La dignidad de la persona, los derechos inviolables que le son inherentes, el libre desarrollo de la personalidad, el respeto a la Ley y a los derechos de los demás son el fundamento del:",
        opciones: ["Orden político y la paz social.", "Ordenamiento jurídico.", "Ordenamiento político.", "Orden público."],
        respuestaCorrecta: "Orden político y la paz social."
    },
    {
        pregunta: "23. ¿En qué artículo se establece que la mayoría de edad es a los dieciocho años?",
        opciones: ["Artículo 12", "Artículo 13", "Artículo 14", "Artículo 15"],
        respuestaCorrecta: "Artículo 12"
    },
    {
        pregunta: "24. El derecho a la vida y a la integridad física y moral se regula en el:",
        opciones: ["Artículo 14", "Artículo 15", "Artículo 16", "Artículo 17"],
        respuestaCorrecta: "Artículo 15"
    },
    {
        pregunta: "25. ¿Cuál es el trato que se prohíbe taxativamente en el Artículo 15 de la CE?",
        opciones: ["Tratos degradantes.", "Penas y tratos inhumanos o degradantes.", "Tratos vejatorios.", "Penas y tratos crueles."],
        respuestaCorrecta: "Penas y tratos inhumanos o degradantes."
    },
    {
        pregunta: "26. La abolición de la pena de muerte es un mandato que solo permite excepciones en tiempo de guerra en virtud de:",
        opciones: ["La Ley de Seguridad Nacional.", "Las leyes militares.", "La Ley de Estados de Excepción.", "La Declaración Universal de Derechos Humanos."],
        respuestaCorrecta: "Las leyes militares."
    },
    {
        pregunta: "27. La inviolabilidad del domicilio está garantizada en el Artículo:",
        opciones: ["17", "18", "19", "20"],
        respuestaCorrecta: "18"
    },
    {
        pregunta: "28. ¿Qué Sección del Capítulo II del Título I recoge los derechos fundamentales y libertades públicas que gozan de la máxima protección?",
        opciones: ["Sección 1ª", "Sección 2ª", "Sección 3ª", "Capítulo III"],
        respuestaCorrecta: "Sección 1ª"
    },
    {
        pregunta: "29. El derecho de asociación (Art. 22) requiere que las asociaciones sean:",
        opciones: ["Lícitas y pacíficas.", "Inscritas en un registro público.", "Libres y voluntarias.", "Sin ánimo de lucro."],
        respuestaCorrecta: "Lícitas y pacíficas."
    },
    {
        pregunta: "30. ¿En qué artículo se recoge el derecho a la tutela judicial efectiva?",
        opciones: ["Artículo 23", "Artículo 24", "Artículo 25", "Artículo 26"],
        respuestaCorrecta: "Artículo 24"
    },
    {
        pregunta: "31. El derecho a la presunción de inocencia se recoge dentro de las garantías del proceso en el Artículo:",
        opciones: ["21", "23", "24", "25"],
        respuestaCorrecta: "24"
    },
    {
        pregunta: "32. ¿Qué derecho implica la prohibición de ser condenado o sancionado por acciones u omisiones que en el momento de producirse no constituyan delito, falta o infracción administrativa?",
        opciones: ["El principio de legalidad penal.", "El principio de irretroactividad.", "El principio de tipicidad.", "El derecho a la legalidad sancionadora."],
        respuestaCorrecta: "El derecho a la legalidad sancionadora."
    },
    {
        pregunta: "33. El derecho a la educación (Art. 27) establece la libertad de enseñanza y la obligación de los poderes públicos de garantizarla. ¿Hasta qué edad es obligatoria y gratuita la educación básica?",
        opciones: ["Hasta los 14 años.", "Hasta la mayoría de edad.", "Hasta la edad que fije la ley.", "Hasta los 16 años."],
        respuestaCorrecta: "Hasta los 16 años."
    },
    {
        pregunta: "34. ¿En qué artículo se reconoce el derecho a la libertad sindical?",
        opciones: ["Artículo 27", "Artículo 28", "Artículo 29", "Artículo 30"],
        respuestaCorrecta: "Artículo 28"
    },
    {
        pregunta: "35. El deber de contribuir al sostenimiento de los gastos públicos (deber fundamental) se establece en el Artículo:",
        opciones: ["30", "31", "32", "33"],
        respuestaCorrecta: "31"
    },
    {
        pregunta: "36. La colegiación obligatoria solo podrá ser impuesta por ley para el ejercicio de:",
        opciones: ["Las profesiones liberales.", "Las profesiones que impliquen un interés público.", "Las profesiones universitarias.", "Las profesiones que impliquen riesgo para la salud."],
        respuestaCorrecta: "Las profesiones que impliquen un interés público."
    },
    {
        pregunta: "37. El deber de defender a España (Art. 30) se cumplirá, en su caso, mediante el cumplimiento de:",
        opciones: ["La Ley de Seguridad Nacional.", "La Ley de Defensa Nacional.", "Las obligaciones militares.", "Las obligaciones que establezca la ley."],
        respuestaCorrecta: "Las obligaciones que establezca la ley."
    },
    {
        pregunta: "38. La reserva de ley orgánica es necesaria para el desarrollo de los derechos y libertades contenidos en:",
        opciones: ["Todo el Título I.", "La Sección 1ª del Capítulo II del Título I.", "El Capítulo III del Título I.", "El Capítulo II del Título I."],
        respuestaCorrecta: "La Sección 1ª del Capítulo II del Título I."
    },
    {
        pregunta: "39. ¿Cuál es el único derecho de la Sección 1ª del Capítulo II del Título I que NO es susceptible de Recurso de Amparo ante el Tribunal Constitucional?",
        opciones: ["Derecho al honor, a la intimidad personal y familiar y a la propia imagen (Art. 18).", "Derecho de reunión (Art. 21).", "Derecho de asociación (Art. 22).", "El recurso de amparo es aplicable a todos ellos."],
        respuestaCorrecta: "El recurso de amparo es aplicable a todos ellos."
    },
    {
        pregunta: "40. ¿Cuál de los siguientes derechos está recogido en el Capítulo III del Título I (Principios Rectores)?",
        opciones: ["Derecho a la huelga (Art. 28).", "Derecho a la negociación colectiva (Art. 37).", "Derecho a contraer matrimonio (Art. 32).", "Derecho a la objeción de conciencia (Art. 30)."],
        respuestaCorrecta: "Derecho a la negociación colectiva (Art. 37)."
    },
    {
        pregunta: "41. La protección de los derechos y libertades reconocidos en el Artículo 14 y la Sección 1ª del Capítulo II del Título I se realizará mediante el recurso de:",
        opciones: ["Recurso de inconstitucionalidad.", "Recurso contencioso-administrativo.", "Recurso de amparo ante el Tribunal Constitucional.", "Recurso de casación ante el Tribunal Supremo."],
        respuestaCorrecta: "Recurso de amparo ante el Tribunal Constitucional."
    },
    {
        pregunta: "42. Los derechos del Capítulo III del Título I (Principios Rectores) solo podrán ser alegados ante la Jurisdicción ordinaria de acuerdo con:",
        opciones: ["La jurisprudencia del Tribunal Supremo.", "La jurisprudencia del Tribunal Constitucional.", "Lo que dispongan las leyes que los desarrollen.", "El Reglamento del Congreso de los Diputados."],
        respuestaCorrecta: "Lo que dispongan las leyes que los desarrollen."
    },
    {
        pregunta: "43. ¿Cuál es el plazo para interponer el Recurso de Amparo Constitucional, en la vía judicial previa, desde la notificación de la resolución judicial firme?",
        opciones: ["15 días.", "20 días.", "30 días.", "60 días."],
        respuestaCorrecta: "30 días."
    },
    {
        pregunta: "44. La suspensión de los derechos fundamentales se regula en el Artículo:",
        opciones: ["53", "54", "55", "56"],
        respuestaCorrecta: "55"
    },
    {
        pregunta: "45. ¿Qué derechos no pueden ser suspendidos, ni siquiera en estados de excepción o sitio?",
        opciones: ["Derecho a la libertad personal (Art. 17).", "Derecho a la vida (Art. 15).", "Derecho a la inviolabilidad del domicilio (Art. 18).", "Se pueden suspender todos salvo que el Tribunal Constitucional diga lo contrario."],
        respuestaCorrecta: "Derecho a la vida (Art. 15)."
    },
    {
        pregunta: "46. La figura del Defensor del Pueblo se regula en el Título:",
        opciones: ["I", "III", "VII", "IV"],
        respuestaCorrecta: "IV"
    },
    {
        pregunta: "47. ¿Ante qué órgano presenta el Defensor del Pueblo su informe anual sobre su gestión?",
        opciones: ["El Rey", "El Gobierno", "El Tribunal Constitucional", "Las Cortes Generales"],
        respuestaCorrecta: "Las Cortes Generales"
    },
    {
        pregunta: "48. ¿Cuál es el procedimiento judicial que garantiza la protección de los derechos de la Sección 1ª del Capítulo II del Título I ante la jurisdicción ordinaria?",
        opciones: ["Procedimiento ordinario.", "Procedimiento sumario y preferente.", "Procedimiento de tutela especial.", "Procedimiento ordinario con trámite de urgencia."],
        respuestaCorrecta: "Procedimiento sumario y preferente."
    },
    {
        pregunta: "49. La regulación de la figura del Defensor del Pueblo se realiza mediante:",
        opciones: ["Ley ordinaria.", "Ley de bases.", "Ley de desarrollo constitucional.", "Ley Orgánica."],
        respuestaCorrecta: "Ley Orgánica."
    },
    {
        pregunta: "50. ¿Cuál de los siguientes artículos está incluido en el Título I, pero NO tiene la consideración de derecho fundamental tutelable por Amparo?",
        opciones: ["Artículo 16 (Libertad ideológica y religiosa).", "Artículo 27 (Derecho a la educación).", "Artículo 28 (Derecho a la sindicación y a la huelga).", "Artículo 29 (Derecho de petición)."],
        respuestaCorrecta: "Artículo 27 (Derecho a la educación)."
    },
    {
        pregunta: "51. El derecho al honor, a la intimidad personal y familiar y a la propia imagen (Art. 18) se protege mediante:",
        opciones: ["Ley Orgánica.", "Ley ordinaria.", "Procedimiento sumario y preferente.", "Amparo Constitucional."],
        respuestaCorrecta: "Amparo Constitucional."
    },
    {
        pregunta: "52. La libertad ideológica, religiosa y de culto (Art. 16) NO tiene más limitación, en sus manifestaciones, que la necesaria para el mantenimiento del:",
        opciones: ["Orden público protegido por la Ley.", "Ordenamiento Constitucional.", "Respeto a los derechos de terceros.", "La moral y las buenas costumbres."],
        respuestaCorrecta: "Orden público protegido por la Ley."
    },
    {
        pregunta: "53. El plazo máximo de detención preventiva, antes de ser puesto a disposición judicial o ser puesto en libertad, es de:",
        opciones: ["24 horas.", "48 horas.", "72 horas.", "96 horas."],
        respuestaCorrecta: "72 horas."
    },
    {
        pregunta: "54. ¿Quién es el competente para decretar la suspensión individual de derechos en supuestos de bandas armadas o terrorismo?",
        opciones: ["Un juez (orden judicial).", "El Fiscal General del Estado.", "El Gobierno con autorización judicial.", "El Ministro del Interior."],
        respuestaCorrecta: "Un juez (orden judicial)."
    },
    {
        pregunta: "55. El derecho de reunión (Art. 21) se ejerce sin necesidad de autorización previa, pero requiere de:",
        opciones: ["Comunicación previa solo en lugares públicos.", "Comunicación previa a la autoridad solo para manifestaciones.", "Comunicación previa a la autoridad en caso de reuniones en lugares de tránsito público.", "Autorización del Delegado del Gobierno."],
        respuestaCorrecta: "Comunicación previa a la autoridad en caso de reuniones en lugares de tránsito público."
    },
    {
        pregunta: "56. La Ley Orgánica que desarrolle los derechos y libertades de la Sección 1ª del Capítulo II del Título I requiere para su aprobación:",
        opciones: ["Mayoría absoluta del Congreso.", "Mayoría simple de ambas Cámaras.", "Mayoría absoluta de ambas Cámaras.", "Mayoría de dos tercios del Congreso."],
        respuestaCorrecta: "Mayoría absoluta del Congreso."
    },
    {
        pregunta: "57. ¿Cuál de las siguientes acciones NO garantiza el Artículo 24 (Tutela Judicial Efectiva)?",
        opciones: ["Derecho al Juez ordinario predeterminado por la Ley.", "Derecho a no declarar contra sí mismo.", "Derecho a la doble instancia penal.", "Derecho a ser informado de la acusación."],
        respuestaCorrecta: "Derecho a la doble instancia penal."
    },
    {
        pregunta: "58. ¿Qué se prohíbe en materia laboral en el Artículo 28.2 (Derecho de huelga)?",
        opciones: ["El cierre patronal.", "El cierre patronal abusivo.", "Los servicios mínimos.", "Las coacciones en el ejercicio de la huelga."],
        respuestaCorrecta: "El cierre patronal abusivo."
    },
    {
        pregunta: "59. La riqueza del país en sus distintas formas y sea cual fuere su titularidad está subordinada al interés:",
        opciones: ["Público.", "General.", "Nacional.", "Colectivo."],
        respuestaCorrecta: "General."
    },
    {
        pregunta: "60. ¿Cuál de estos es un principio rector de la política social y económica (Capítulo III, Título I)?",
        opciones: ["El fomento del progreso social y económico.", "La protección de la salud.", "La garantía de la libertad de empresa.", "La defensa de los consumidores y usuarios."],
        respuestaCorrecta: "La protección de la salud."
    },
    {
        pregunta: "61. El Artículo 10 de la CE, que remite a la Declaración Universal de Derechos Humanos, se encuentra en:",
        opciones: ["El Título Preliminar.", "El Capítulo I del Título I.", "El Capítulo II del Título I.", "La Disposición Adicional Cuarta."],
        respuestaCorrecta: "El Capítulo I del Título I."
    },
    {
        pregunta: "62. ¿Qué Artículo establece la igualdad ante la ley y la prohibición de discriminación?",
        opciones: ["Artículo 10", "Artículo 13", "Artículo 14", "Artículo 15"],
        respuestaCorrecta: "Artículo 14"
    },
    {
        pregunta: "63. La prohibición de ser obligado a declarar sobre ideología, religión o creencias se recoge en el Artículo:",
        opciones: ["16", "17", "18", "19"],
        respuestaCorrecta: "16"
    },
    {
        pregunta: "64. El derecho a entrar y salir libremente de España se recoge en el Artículo:",
        opciones: ["18", "19", "20", "21"],
        respuestaCorrecta: "19"
    },
    {
        pregunta: "65. El derecho a expresar y difundir libremente los pensamientos, ideas y opiniones se garantiza en el Artículo:",
        opciones: ["20", "21", "22", "23"],
        respuestaCorrecta: "20"
    },
    {
        pregunta: "66. La participación de los ciudadanos en los asuntos públicos se recoge en el Artículo:",
        opciones: ["22", "23", "24", "25"],
        respuestaCorrecta: "23"
    },
    {
        pregunta: "67. El derecho a fundar sindicatos y a afiliarse libremente a ellos está recogido en el Artículo:",
        opciones: ["27", "28", "29", "30"],
        respuestaCorrecta: "28"
    },
    {
        pregunta: "68. ¿Qué Artículo de la CE garantiza la libertad de empresa en el marco de la economía de mercado?",
        opciones: ["37", "38", "39", "40"],
        respuestaCorrecta: "38"
    },
    {
        pregunta: "69. La protección integral de los hijos, iguales ante la ley, con independencia de su filiación, es un principio rector contenido en el Artículo:",
        opciones: ["32", "34", "39", "40"],
        respuestaCorrecta: "39"
    },
    {
        pregunta: "70. La protección de la salud y el derecho a un medio ambiente adecuado están recogidos en los Artículos:",
        opciones: ["41 y 42", "43 y 45", "44 y 46", "47 y 48"],
        respuestaCorrecta: "43 y 45"
    },
    {
        pregunta: "71. ¿A quién le corresponde establecer las condiciones en que los ciudadanos de otros países y los apátridas podrán gozar del derecho de asilo en España?",
        opciones: ["A los tratados internacionales.", "A la ley.", "Al Gobierno mediante Real Decreto.", "Al Reglamento."],
        respuestaCorrecta: "A la ley."
    },
    {
        pregunta: "72. ¿Quiénes gozarán de los derechos reconocidos en el Título I de la CE?",
        opciones: ["Solo los españoles.", "Los españoles y los extranjeros que vivan legalmente.", "Los españoles, y los extranjeros en los términos que fijen los tratados y la ley.", "Los españoles y los ciudadanos de la Unión Europea."],
        respuestaCorrecta: "Los españoles, y los extranjeros en los términos que fijen los tratados y la ley."
    },
    {
        pregunta: "73. La extradición solo se concederá en cumplimiento de un tratado o de la ley, atendiendo al principio de:",
        opciones: ["Reciprocidad.", "Especialidad.", "Legalidad.", "Proporcionalidad."],
        respuestaCorrecta: "Legalidad."
    },
    {
        pregunta: "74. ¿La extradición de qué personas prohíbe taxativamente la CE?",
        opciones: ["Personas en régimen de asilo político.", "Extranjeros en situación irregular.", "Ciudadanos españoles.", "Los nacionales, por delitos políticos."],
        respuestaCorrecta: "Los nacionales, por delitos políticos."
    },
    {
        pregunta: "75. ¿Qué ley regulará el modo de adquisición, conservación y pérdida de la nacionalidad española?",
        opciones: ["Ley Orgánica.", "Ley ordinaria.", "Real Decreto.", "Ley de Extranjería."],
        respuestaCorrecta: "Ley ordinaria."
    },
    {
        pregunta: "76. ¿Qué Título de la CE se dedica a la Corona?",
        opciones: ["Título Preliminar.", "Título I.", "Título II.", "Título III."],
        respuestaCorrecta: "Título II."
    },
    {
        pregunta: "77. La suspensión general e indiscriminada de los derechos fundamentales solo puede producirse en los siguientes estados, declarados por el Gobierno, salvo uno. ¿Cuál?",
        opciones: ["Estado de Alarma.", "Estado de Excepción.", "Estado de Sitio.", "En el Estado de Alarma no se produce la suspensión."],
        respuestaCorrecta: "Estado de Alarma."
    },
    {
        pregunta: "78. ¿Qué artículo establece que la Ley regulará el status de las organizaciones profesionales?",
        opciones: ["36", "37", "38", "39"],
        respuestaCorrecta: "36"
    },
    {
        pregunta: "79. El principio de protección a la familia y a la infancia se encuentra en el Artículo:",
        opciones: ["38", "39", "40", "41"],
        respuestaCorrecta: "39"
    },
    {
        pregunta: "80. El derecho a la propiedad privada y a la herencia (Art. 33) está limitado por:",
        opciones: ["La función social de estos derechos.", "La Ley de Expropiación Forzosa.", "El principio de legalidad.", "El interés público."],
        respuestaCorrecta: "La función social de estos derechos."
    },
    {
        pregunta: "81. ¿Qué es una Ley Orgánica?",
        opciones: ["La que aprueba el Gobierno.", "La que aprueba el Parlamento en el ejercicio de la soberanía.", "La relativa al desarrollo de los derechos fundamentales y libertades públicas, las que aprueben los Estatutos de Autonomía y el régimen electoral general.", "La que afecta a la organización de los poderes del Estado."],
        respuestaCorrecta: "La relativa al desarrollo de los derechos fundamentales y libertades públicas, las que aprueben los Estatutos de Autonomía y el régimen electoral general."
    },
    {
        pregunta: "82. ¿Cómo se regula el derecho a la intimidad y al secreto de las comunicaciones (Art. 18.3)?",
        opciones: ["Solo puede ser afectado por orden judicial.", "Solo puede ser afectado por orden judicial motivada.", "Solo puede ser afectado por orden de la autoridad competente.", "Puede ser limitado por Ley."],
        respuestaCorrecta: "Solo puede ser afectado por orden judicial motivada."
    },
    {
        pregunta: "83. El matrimonio tiene plena igualdad jurídica en el Artículo:",
        opciones: ["30", "31", "32", "33"],
        respuestaCorrecta: "32"
    },
    {
        pregunta: "84. ¿Cuál es la garantía que tienen los derechos y libertades de la Sección 2ª del Capítulo II del Título I?",
        opciones: ["Recurso de amparo.", "Reserva de Ley Orgánica.", "Reserva de Ley.", "Procedimiento preferente y sumario."],
        respuestaCorrecta: "Reserva de Ley."
    },
    {
        pregunta: "85. La Ley que desarrolle los principios rectores del Capítulo III debe tener en cuenta:",
        opciones: ["La eficacia.", "La legislación anterior.", "La reserva de ley.", "El respeto a su contenido esencial."],
        respuestaCorrecta: "El respeto a su contenido esencial."
    },
    {
        pregunta: "86. La hábeas corpus es un procedimiento destinado a:",
        opciones: ["Garantizar la inviolabilidad del domicilio.", "Poner fin a una detención ilegal.", "Proteger el secreto de las comunicaciones.", "Poner fin a los tratos inhumanos."],
        respuestaCorrecta: "Poner fin a una detención ilegal."
    },
    {
        pregunta: "87. ¿Qué principio rige la justicia en el Artículo 24 de la CE?",
        opciones: ["La gratuidad.", "La tutela judicial efectiva.", "La imparcialidad.", "La publicidad."],
        respuestaCorrecta: "La tutela judicial efectiva."
    },
    {
        pregunta: "88. La participación de los sindicatos en la política social y económica del país se basa en el principio de:",
        opciones: ["Concertación.", "Diálogo social.", "Representación.", "Tutela."],
        respuestaCorrecta: "Diálogo social."
    },
    {
        pregunta: "89. ¿Qué establece el Artículo 53.1 de la CE respecto a los derechos y libertades?",
        opciones: ["Que solo pueden ser regulados por Ley Orgánica.", "Que vinculan a todos los poderes públicos.", "Que están garantizados por el Recurso de Amparo.", "Que requieren de desarrollo reglamentario."],
        respuestaCorrecta: "Que vinculan a todos los poderes públicos."
    },
    {
        pregunta: "90. La objeción de conciencia al servicio militar (anteriormente) se reconocía en el Artículo:",
        opciones: ["29", "30", "31", "32"],
        respuestaCorrecta: "30"
    },
    {
        pregunta: "91. La libertad de cátedra se reconoce en el ámbito de:",
        opciones: ["La libertad de expresión.", "La autonomía universitaria.", "El derecho a la educación.", "La libertad ideológica."],
        respuestaCorrecta: "El derecho a la educación."
    },
    {
        pregunta: "92. ¿Qué figura está prevista en el Artículo 54 de la CE?",
        opciones: ["El Fiscal General del Estado.", "El Tribunal de Cuentas.", "El Defensor del Pueblo.", "El Tribunal Constitucional."],
        respuestaCorrecta: "El Defensor del Pueblo."
    },
    {
        pregunta: "93. La limitación de la libertad de circulación (Art. 19) solo puede hacerse por:",
        opciones: ["Decisión administrativa.", "Ley de Seguridad Ciudadana.", "Orden de la autoridad judicial.", "Las causas establecidas en la ley."],
        respuestaCorrecta: "Las causas establecidas en la ley."
    },
    {
        pregunta: "94. ¿Cuál es el órgano que puede acordar la disolución de una asociación ilícita?",
        opciones: ["La Autoridad Gubernativa.", "El Gobierno.", "El Tribunal Constitucional.", "Los Tribunales (judicial)."],
        respuestaCorrecta: "Los Tribunales (judicial)."
    },
    {
        pregunta: "95. El derecho a la información veraz (Art. 20) está limitado por el respeto a:",
        opciones: ["La dignidad humana.", "La moral y el orden público.", "Los derechos de la personalidad.", "La reserva de sumario."],
        respuestaCorrecta: "Los derechos de la personalidad."
    },
    {
        pregunta: "96. La protección de la infancia (Art. 39) es un principio rector que impone la obligación a los poderes públicos de asegurar:",
        opciones: ["La protección social, económica y jurídica de la familia.", "La protección integral de los hijos.", "La protección de la salud de los menores.", "El desarrollo de la educación infantil."],
        respuestaCorrecta: "La protección integral de los hijos."
    },
    {
        pregunta: "97. ¿Qué implica el principio de Interdicción de la Arbitrariedad (Art. 9.3)?",
        opciones: ["Que nadie puede ser castigado sin ley previa.", "Que la Administración debe motivar todas sus decisiones.", "Que los poderes públicos no pueden actuar por capricho o desviación de poder.", "Que la ley es jerárquicamente superior al reglamento."],
        respuestaCorrecta: "Que los poderes públicos no pueden actuar por capricho o desviación de poder."
    },
    {
        pregunta: "98. La reserva de Ley para la regulación de derechos y libertades significa que:",
        opciones: ["La materia debe ser regulada por una norma con rango de Ley.", "La materia debe ser regulada por Ley Orgánica.", "El Gobierno no puede dictar Reglamentos sobre esa materia.", "La regulación se reserva a las Cortes Generales."],
        respuestaCorrecta: "La materia debe ser regulada por una norma con rango de Ley."
    },
    {
        pregunta: "99. ¿A qué se refiere el término 'consenso' en el contexto de la CE de 1978?",
        opciones: ["Al amplio apoyo popular en el referéndum de ratificación.", "Al acuerdo entre las principales fuerzas políticas en su elaboración.", "A la colaboración entre el Gobierno y la oposición.", "Al acuerdo entre el Congreso y el Senado."],
        respuestaCorrecta: "Al acuerdo entre las principales fuerzas políticas en su elaboración."
    },
    {
        pregunta: "100. El Título I de la CE está estructurado en 5 Capítulos, más el Artículo 10 (Norma de interpretación). ¿Qué Capítulo recoge los principios rectores de la política social y económica?",
        opciones: ["Capítulo I", "Capítulo II", "Capítulo III", "Capítulo IV"],
        respuestaCorrecta: "Capítulo III"
    }
      {
    "pregunta": "Según el artículo 1.1 de la Constitución, ¿cuáles son los valores superiores del ordenamiento jurídico español?",
    "opciones": [
      "a) La libertad, la justicia, la igualdad y el pluralismo político.",
      "b) La unidad de la Nación, la autonomía de las nacionalidades y la solidaridad.",
      "c) La dignidad de la persona, los derechos inviolables y el libre desarrollo de la personalidad.",
      "d) La soberanía nacional, la división de poderes y la monarquía parlamentaria."
    ],
    "respuesta_correcta": "a",
    "articulo_referencia": "Art. 1.1"
  },
  {
    "pregunta": "La forma política del Estado español es:",
    "opciones": [
      "a) República parlamentaria.",
      "b) Monarquía constitucional.",
      "c) Estado social y democrático de Derecho.",
      "d) Monarquía parlamentaria."
    ],
    "respuesta_correcta": "d",
    "articulo_referencia": "Art. 1.3"
  },
  {
    "pregunta": "¿En quién reside la soberanía nacional, según la Constitución Española (CE)?",
    "opciones": [
      "a) En las Cortes Generales.",
      "b) En el Rey.",
      "c) En el pueblo español.",
      "d) En el Gobierno de la Nación."
    ],
    "respuesta_correcta": "c",
    "articulo_referencia": "Art. 1.2"
  },
  {
    "pregunta": "El castellano es la lengua española oficial del Estado. Según la CE, las demás lenguas españolas:",
    "opciones": [
      "a) Serán también oficiales en las respectivas Comunidades Autónomas de acuerdo con la ley.",
      "b) Serán también oficiales en las respectivas Comunidades Autónomas de acuerdo con sus Estatutos.",
      "c) Serán cooficiales en todo el territorio español si así lo aprueban las Cortes Generales.",
      "d) Son consideradas un patrimonio cultural que será objeto de especial respeto, pero no de oficialidad."
    ],
    "respuesta_correcta": "b",
    "articulo_referencia": "Art. 3.2"
  },
  {
    "pregunta": "La capital del Estado, según el artículo 5 de la CE, es:",
    "opciones": [
      "a) La ciudad que elijan las Cortes Generales por mayoría absoluta.",
      "b) La ciudad de Madrid.",
      "c) La ciudad donde el Rey fije su residencia oficial.",
      "d) No se establece ninguna capital en la Constitución."
    ],
    "respuesta_correcta": "b",
    "articulo_referencia": "Art. 5"
  },
  {
    "pregunta": "¿Cuál de las siguientes afirmaciones sobre la bandera de España es la correcta según la CE?",
    "opciones": [
      "a) Está formada por tres franjas horizontales, roja, amarilla y roja, siendo la amarilla de doble anchura que cada una de las rojas.",
      "b) Está formada por tres franjas verticales, roja, amarilla y roja, siendo la amarilla de igual anchura que las rojas.",
      "c) Los Estatutos podrán reconocer banderas y enseñas propias de las Comunidades Autónomas, que podrán utilizarse en lugar de la bandera de España en los edificios públicos.",
      "d) Una ley orgánica regulará el diseño del escudo de España, que deberá figurar en todo caso en la bandera."
    ],
    "respuesta_correcta": "a",
    "articulo_referencia": "Art. 4.1"
  },
  {
    "pregunta": "La Constitución reconoce a los partidos políticos como expresión del pluralismo político, pero su estructura interna y funcionamiento deberán ser:",
    "opciones": [
      "a) Libres.",
      "b) Democráticos.",
      "c) Aprobados por el Ministerio del Interior.",
      "d) Regulados por una ley de bases."
    ],
    "respuesta_correcta": "b",
    "articulo_referencia": "Art. 6"
  },
  {
    "pregunta": "Según el artículo 9.1 de la CE, los ciudadanos y los poderes públicos están sujetos a:",
    "opciones": [
      "a) La Constitución y al resto del ordenamiento jurídico.",
      "b) Únicamente a la Constitución.",
      "c) A las leyes orgánicas y a la Constitución.",
      "d) A las directivas de la Unión Europea y a la Constitución."
    ],
    "respuesta_correcta": "a",
    "articulo_referencia": "Art. 9.1"
  },
  {
    "pregunta": "¿Cuál de los siguientes NO es un principio garantizado por el artículo 9.3 de la CE?",
    "opciones": [
      "a) La jerarquía normativa.",
      "b) La retroactividad de las disposiciones sancionadoras no favorables o restrictivas de derechos individuales.",
      "c) La seguridad jurídica.",
      "d) La interdicción de la arbitrariedad de los poderes públicos."
    ],
    "respuesta_correcta": "b",
    "articulo_referencia": "Art. 9.3"
  },
  {
    "pregunta": "La dignidad de la persona y el libre desarrollo de la personalidad son, según el artículo 10.1 de la CE:",
    "opciones": [
      "a) Derechos fundamentales de la Sección 1ª.",
      "b) Principios rectores de la política social y económica.",
      "c) El fundamento del orden político y de la paz social.",
      "d) Valores superiores del ordenamiento jurídico."
    ],
    "respuesta_correcta": "c",
    "articulo_referencia": "Art. 10.1"
  },
  {
    "pregunta": "Las normas relativas a los derechos fundamentales y a las libertades que la Constitución reconoce se interpretarán de conformidad con:",
    "opciones": [
      "a) La jurisprudencia del Tribunal Supremo.",
      "b) La Declaración Universal de Derechos Humanos y los tratados y acuerdos internacionales sobre las mismas materias ratificados por España.",
      "c) Las costumbres y los principios generales del derecho.",
      "d) Las leyes orgánicas que los desarrollen."
    ],
    "respuesta_correcta": "b",
    "articulo_referencia": "Art. 10.2"
  },
  {
    "pregunta": "La nacionalidad española se adquiere, se conserva y se pierde de acuerdo con lo establecido en:",
    "opciones": [
      "a) El Código Civil.",
      "b) La propia Constitución.",
      "c) Una ley orgánica.",
      "d) La ley."
    ],
    "respuesta_correcta": "d",
    "articulo_referencia": "Art. 11.1"
  },
  {
    "pregunta": "¿Puede un español de origen ser privado de su nacionalidad?",
    "opciones": [
      "a) Sí, si reside habitualmente en el extranjero y adquiere otra nacionalidad.",
      "b) No, en ningún caso.",
      "c) Sí, por sentencia judicial firme si ha cometido delitos de traición.",
      "d) Sí, por decisión del Consejo de Ministros."
    ],
    "respuesta_correcta": "b",
    "articulo_referencia": "Art. 11.2"
  },
  {
    "pregunta": "¿Cuándo alcanzan los españoles la mayoría de edad según la Constitución?",
    "opciones": [
      "a) A los 16 años.",
      "b) A los 21 años.",
      "c) A los 18 años.",
      "d) La Constitución no fija una edad, se remite a la ley."
    ],
    "respuesta_correcta": "c",
    "articulo_referencia": "Art. 12"
  },
  {
    "pregunta": "En relación con los extranjeros en España, la Constitución establece que:",
    "opciones": [
      "a) Gozarán de las mismas libertades públicas que los españoles.",
      "b) Gozarán de las libertades públicas que garantiza el presente Título en los términos que establezcan los tratados y la ley.",
      "c) Solo podrán ejercer el derecho de sufragio activo en las elecciones europeas.",
      "d) No pueden ser extraditados en ningún caso."
    ],
    "respuesta_correcta": "b",
    "articulo_referencia": "Art. 13.1"
  },
  {
    "pregunta": "La extradición solo se concederá en cumplimiento de:",
    "opciones": [
      "a) Una orden judicial europea.",
      "b) Un tratado o de la ley, atendiendo al principio de reciprocidad.",
      "c) La legislación penal española.",
      "d) Una decisión del Gobierno."
    ],
    "respuesta_correcta": "b",
    "articulo_referencia": "Art. 13.3"
  },
  {
    "pregunta": "Quedan excluidos de la extradición:",
    "opciones": [
      "a) Los delitos de terrorismo.",
      "b) Los delitos fiscales.",
      "c) Los delitos políticos.",
      "d) Los delitos contra la seguridad vial."
    ],
    "respuesta_correcta": "c",
    "articulo_referencia": "Art. 13.3"
  },
  {
    "pregunta": "El derecho a la vida se reconoce en el artículo 15 de la CE, que establece que:",
    "opciones": [
      "a) Todos tienen derecho a la vida, sin excepción alguna.",
      "b) Queda abolida la pena de muerte, sin excepción alguna.",
      "c) Queda abolida la pena de muerte, salvo lo que puedan disponer las leyes penales militares para tiempos de guerra.",
      "d) La ley regulará la práctica de la eutanasia."
    ],
    "respuesta_correcta": "c",
    "articulo_referencia": "Art. 15"
  },
  {
    "pregunta": "Según el artículo 16 de la CE, en relación con la libertad religiosa, se establece que:",
    "opciones": [
      "a) España es un Estado confesional.",
      "b) Ninguna confesión tendrá carácter estatal.",
      "c) La religión católica es la religión oficial del Estado.",
      "d) Se prohíben las ceremonias de cualquier confesión en público."
    ],
    "respuesta_correcta": "b",
    "articulo_referencia": "Art. 16.3"
  },
  {
    "pregunta": "¿Puede alguien ser obligado a declarar sobre su ideología, religión o creencias?",
    "opciones": [
      "a) Sí, si lo requiere un juez en un procedimiento penal.",
      "b) Solo si la declaración es para fines estadísticos.",
      "c) No, nadie podrá ser obligado a declarar sobre su ideología, religión o creencias.",
      "d) Sí, en el momento de solicitar la nacionalidad española."
    ],
    "respuesta_correcta": "c",
    "articulo_referencia": "Art. 16.2"
  },
  {
    "pregunta": "El derecho a la libertad y a la seguridad se regula en el artículo 17 de la CE. ¿Cuál es el plazo máximo de la detención preventiva?",
    "opciones": [
      "a) 24 horas.",
      "b) 48 horas.",
      "c) El tiempo estrictamente necesario para la realización de las averiguaciones y, en todo caso, en el plazo máximo de 72 horas.",
      "d) El que determine el juez en cada caso."
    ],
    "respuesta_correcta": "c",
    "articulo_referencia": "Art. 17.2"
  },
  {
    "pregunta": "Toda persona detenida debe ser informada de forma inmediata y de modo que le sea comprensible de:",
    "opciones": [
      "a) La identidad del agente que le detiene.",
      "b) La posible pena a la que se enfrenta.",
      "c) Sus derechos y de las razones de su detención.",
      "d) El lugar exacto al que va a ser conducido."
    ],
    "respuesta_correcta": "c",
    "articulo_referencia": "Art. 17.3"
  },
  {
    "pregunta": "La Constitución garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen en su artículo:",
    "opciones": [
      "a) 17.",
      "b) 18.",
      "c) 19.",
      "d) 20."
    ],
    "respuesta_correcta": "b",
    "articulo_referencia": "Art. 18"
  },
  {
    "pregunta": "El domicilio es inviolable. ¿Cuándo se puede realizar una entrada o registro en él sin consentimiento del titular?",
    "opciones": [
      "a) Con autorización de la autoridad gubernativa.",
      "b) En caso de flagrante delito o con resolución judicial.",
      "c) Cuando existan indicios de una actividad ilícita.",
      "d) Por orden de un agente de la autoridad."
    ],
    "respuesta_correcta": "b",
    "articulo_referencia": "Art. 18.2"
  },
  {
    "pregunta": "El secreto de las comunicaciones, y en especial de las postales, telegráficas y telefónicas, está garantizado, salvo:",
    "opciones": [
      "a) Decisión de la policía judicial.",
      "b) Petición de una de las partes implicadas.",
      "c) Resolución administrativa motivada.",
      "d) Resolución judicial."
    ],
    "respuesta_correcta": "d",
    "articulo_referencia": "Art. 18.3"
  },
  {
    "pregunta": "El derecho a expresar y difundir libremente los pensamientos, ideas y opiniones mediante la palabra, el escrito o cualquier otro medio de reproducción se reconoce en el artículo:",
    "opciones": [
      "a) 18.",
      "b) 19.",
      "c) 20.",
      "d) 21."
    ],
    "respuesta_correcta": "c",
    "articulo_referencia": "Art. 20"
  },
  {
    "pregunta": "El ejercicio del derecho a la libertad de expresión:",
    "opciones": [
      "a) No tiene más límite que la ley.",
      "b) No puede restringirse mediante ningún tipo de censura previa.",
      "c) Puede restringirse por la autoridad gubernativa en caso de alteración del orden público.",
      "d) Solo ampara las informaciones veraces."
    ],
    "respuesta_correcta": "b",
    "articulo_referencia": "Art. 20.2"
  },
  {
    "pregunta": "¿Qué derecho NO se menciona en el artículo 20 de la CE?",
    "opciones": [
      "a) A la producción y creación literaria, artística, científica y técnica.",
      "b) A la cláusula de conciencia y al secreto profesional.",
      "c) El derecho de reunión pacífica y sin armas.",
      "d) A comunicar o recibir libremente información veraz por cualquier medio de difusión."
    ],
    "respuesta_correcta": "c",
    "articulo_referencia": "Art. 20"
  },
  {
    "pregunta": "El derecho de reunión pacífica y sin armas:",
    "opciones": [
      "a) Requerirá siempre autorización previa.",
      "b) No necesitará autorización previa.",
      "c) Deberá ser comunicado a la autoridad, que solo podrá prohibirla por motivos de seguridad vial.",
      "d) Solo puede ejercerse en lugares cerrados."
    ],
    "respuesta_correcta": "b",
    "articulo_referencia": "Art. 21.1"
  },
  {
    "pregunta": "En los casos de reuniones en lugares de tránsito público y manifestaciones, se deberá dar comunicación previa a la autoridad, que solo podrá prohibirlas cuando:",
    "opciones": [
      "a) Se prevea una asistencia masiva de personas.",
      "b) Existan razones fundadas de alteración del orden público, con peligro para personas o bienes.",
      "c) Coincidan con otros actos o eventos en la misma zona.",
      "d) No se identifique a los organizadores."
    ],
    "respuesta_correcta": "b",
    "articulo_referencia": "Art. 21.2"
  },
  {
    "pregunta": "El derecho de asociación se regula en el artículo 22 de la CE. ¿Qué tipo de asociaciones son ilegales?",
    "opciones": [
      "a) Las que no tengan un fin lucrativo.",
      "b) Las que persigan fines o utilicen medios tipificados como delito.",
      "c) Las asociaciones con estructura jerárquica.",
      "d) Las asociaciones que no se inscriban en el registro correspondiente."
    ],
    "respuesta_correcta": "b",
    "articulo_referencia": "Art. 22.2"
  },
  {
    "pregunta": "Las asociaciones constituidas al amparo del artículo 22 de la CE:",
    "opciones": [
      "a) Deberán inscribirse en un registro a los solos efectos de publicidad.",
      "b) Deberán inscribirse en un registro para adquirir personalidad jurídica.",
      "c) Solo podrán ser disueltas por decisión de la autoridad gubernativa.",
      "d) Están exentas de cualquier tipo de control administrativo."
    ],
    "respuesta_correcta": "a",
    "articulo_referencia": "Art. 22.3"
  },
  {
    "pregunta": "El derecho a participar en los asuntos públicos se reconoce en el artículo 23. Señale la afirmación correcta:",
    "opciones": [
      "a) Los ciudadanos tienen el derecho a participar en los asuntos públicos, pero solo a través de representantes.",
      "b) El sufragio en España es universal, libre, igual, directo y puede no ser secreto en algunos casos.",
      "c) Los ciudadanos tienen derecho a acceder en condiciones de igualdad a las funciones y cargos públicos, con los requisitos que señalen las leyes.",
      "d) Solo los españoles de origen pueden acceder a los altos cargos del Estado."
    ],
    "respuesta_correcta": "c",
    "articulo_referencia": "Art. 23.2"
  },
  {
    "pregunta": "¿Qué derecho fundamental se regula en el artículo 24 de la CE?",
    "opciones": [
      "a) El derecho a la educación.",
      "b) El derecho a la tutela judicial efectiva.",
      "c) El principio de legalidad penal.",
      "d) El derecho a la sindicación."
    ],
    "respuesta_correcta": "b",
    "articulo_referencia": "Art. 24"
  },
  {
    "pregunta": "¿Cuál de las siguientes garantías NO forma parte del derecho a la tutela judicial efectiva del artículo 24?",
    "opciones": [
      "a) A no declarar contra sí mismos y a no confesarse culpables.",
      "b) A la presunción de inocencia.",
      "c) A ser informado de la acusación formulada contra ellos.",
      "d) A la doble instancia judicial en todos los procedimientos."
    ],
    "respuesta_correcta": "d",
    "articulo_referencia": "Art. 24.2"
  },
  {
    "pregunta": "Según el artículo 25 de la CE, nadie puede ser condenado o sancionado por acciones u omisiones que en el momento de producirse:",
    "opciones": [
      "a) Fueran consideradas socialmente reprobables.",
      "b) No constituyan delito, falta o infracción administrativa según la legislación vigente en aquel momento.",
      "c) No estuvieran recogidas en el Código Penal, aunque sí en una ley ordinaria.",
      "d) Causaran un grave perjuicio a terceros."
    ],
    "respuesta_correcta": "b",
    "articulo_referencia": "Art. 25.1"
  },
  {
    "pregunta": "Las penas privativas de libertad y las medidas de seguridad estarán orientadas hacia:",
    "opciones": [
      "a) La reinserción social y la reeducación.",
      "b) El castigo y la disuasión.",
      "c) La protección de la sociedad.",
      "d) La reparación del daño causado."
    ],
    "respuesta_correcta": "a",
    "articulo_referencia": "Art. 25.2"
  },
  {
    "pregunta": "La Administración civil, según el artículo 25.3 de la CE:",
    "opciones": [
      "a) Podrá imponer sanciones que impliquen penas privativas de libertad en casos excepcionales.",
      "b) No podrá imponer sanciones que directa o subsidiariamente impliquen privación de libertad.",
      "c) Podrá imponer privación de libertad por un tiempo máximo de 72 horas.",
      "d) Puede delegar la imposición de penas privativas de libertad en la autoridad judicial."
    ],
    "respuesta_correcta": "b",
    "articulo_referencia": "Art. 25.3"
  },
  {
    "pregunta": "¿Qué se reconoce en el artículo 27 de la CE?",
    "opciones": [
      "a) La libertad de empresa.",
      "b) El derecho a la educación y la libertad de enseñanza.",
      "c) El derecho al trabajo.",
      "d) El derecho a la propiedad privada."
    ],
    "respuesta_correcta": "b",
    "articulo_referencia": "Art. 27"
  },
  {
    "pregunta": "Según el artículo 28 de la CE, todos tienen derecho a sindicarse libremente. La ley podrá limitar o exceptuar el ejercicio de este derecho a:",
    "opciones": [
      "a) Los trabajadores autónomos.",
      "b) El personal civil al servicio de la Administración.",
      "c) Las Fuerzas o Institutos armados o a los demás Cuerpos sometidos a disciplina militar.",
      "d) Los jueces, magistrados y fiscales."
    ],
    "respuesta_correcta": "c",
    "articulo_referencia": "Art. 28.1"
];

export const tema1 = {
    titulo: 'Tema 1: Constitución Española (20 Preguntas)',
    descripcion: 'Prueba con penalización de 1/3.',
    cantidadExamen: 20, // Cantidad específica de preguntas para el examen
    logicaPuntuacion: {
        valorCorrecta: 1.0,
        valorIncorrecta: 1/3, // Resta un tercio por error
        restaPorFallo: true
    },
    preguntas: tema1_preguntas
};
