// data.js

/**
 * =========================================================
 * TEMA 1: CONSTITUCIÓN ESPAÑOLA (100 PREGUNTAS)
 * =========================================================
 */
const temas = {
tema1: {
titulo: 'Constitución Española (TEMA 1) - Banco de preguntas',
preguntas: [
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
        respuestaCorrecta: "Hasta la edad que fije la ley."
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
        respuestaCorrecta: "Título II"
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
        {
        question: "3. El sometimiento pleno de la Administración a la Ley y al Derecho se fundamenta en el principio de:",
        options: [
            "Eficacia.",
            "Jerarquía.",
            "Legalidad.",
            "Coordinación."
        ],
        correctAnswer: "Legalidad."
    },
    {
        question: "4. ¿Cuál de los siguientes principios NO está expresamente mencionado en el artículo 103.1 de la CE en relación con la actuación de la Administración Pública?",
        options: [
            "Desconcentración.",
            "Transparencia.",
            "Jerarquía.",
            "Coordinación."
        ],
        correctAnswer: "Transparencia."
    },
    {
        question: "5. La potestad reglamentaria del Gobierno está sometida a fiscalización por parte de:",
        options: [
            "Solo el Tribunal Constitucional.",
            "Solo el Defensor del Pueblo.",
            "Los Tribunales de Justicia.",
            "El Consejo de Estado en exclusiva."
        ],
        correctAnswer: "Los Tribunales de Justicia."
    },
    {
        question: "6. ¿Qué principio constitucional implica la transferencia de titularidad de una competencia desde la Administración central a otra Administración territorial distinta?",
        options: [
            "Desconcentración.",
            "Jerarquía.",
            "Descentralización.",
            "Coordinación."
        ],
        correctAnswer: "Descentralización."
    },
    {
        question: "7. El principio de **buena fe** en las relaciones entre los ciudadanos y la Administración se deriva del principio de:",
        options: [
            "Seguridad jurídica.",
            "Economía.",
            "Desconcentración.",
            "Eficacia."
        ],
        correctAnswer: "Seguridad jurídica."
    },
    {
        question: "8. La responsabilidad patrimonial de la Administración Pública por el funcionamiento de los servicios públicos se recoge en el artículo:",
        options: [
            "104 de la CE.",
            "106.2 de la CE.",
            "103.3 de la CE.",
            "9.1 de la CE."
        ],
        correctAnswer: "106.2 de la CE."
    },
    {
        question: "9. ¿Qué principio del artículo 103.1 de la CE implica la ordenación de órganos con relación de superioridad y subordinación?",
        options: [
            "Descentralización.",
            "Coordinación.",
            "Desconcentración.",
            "Jerarquía."
        ],
        correctAnswer: "Jerarquía."
    },
    {
        question: "10. La reserva de Ley que exige que el desarrollo de los derechos fundamentales se realice mediante Ley Orgánica, ¿qué principio constitucional refuerza?",
        options: [
            "El principio democrático.",
            "El principio de legalidad.",
            "El principio de economía.",
            "El principio de subsidiariedad."
        ],
        correctAnswer: "El principio de legalidad."
    },
    {
        question: "11. ¿Cuál es el tribunal encargado de controlar la legalidad de la actuación administrativa y la sumisión de esta a los fines que la justifican?",
        options: [
            "Tribunal Supremo en Pleno.",
            "Tribunal Constitucional.",
            "Tribunales de la jurisdicción Contencioso-Administrativa.",
            "Tribunal de Cuentas."
        ],
        correctAnswer: "Tribunales de la jurisdicción Contencioso-Administrativa."
    },
    {
        question: "12. El principio de **igualdad** en el acceso a las funciones públicas se garantiza de acuerdo con los criterios de:",
        options: [
            "Capacidad y formación.",
            "Mérito y antigüedad.",
            "Mérito y capacidad.",
            "Antigüedad y formación."
        ],
        correctAnswer: "Mérito y capacidad."
    },
    {
        question: "13. El artículo 9.3 de la CE garantiza la interdicción de la arbitrariedad de los poderes públicos, lo que está directamente relacionado con el principio de:",
        options: [
            "Publicidad.",
            "Legalidad.",
            "Descentralización.",
            "Eficiencia."
        ],
        correctAnswer: "Legalidad."
    },
    {
        question: "14. ¿Qué implica el principio de **desconcentración** en la Administración?",
        options: [
            "La creación de nuevas Administraciones territoriales.",
            "La transferencia de funciones a órganos periféricos dentro de la misma Administración.",
            "La atribución de personalidad jurídica propia a entes dependientes.",
            "La asunción de competencias por el órgano superior."
        ],
        correctAnswer: "La transferencia de funciones a órganos periféricos dentro de la misma Administración."
    },
    {
        question: "15. Los funcionarios públicos están al servicio de los intereses generales de acuerdo con los principios de:",
        options: [
            "Imparcialidad y objetividad.",
            "Lealtad y subordinación.",
            "Eficacia y economía.",
            "Jerarquía y disciplina."
        ],
        correctAnswer: "Imparcialidad y objetividad."
    },
    {
        question: "16. La existencia de la figura del **Defensor del Pueblo** se enmarca dentro del control de:",
        options: [
            "Los actos de gobierno del Poder Ejecutivo.",
            "La actividad de la Administración en la defensa de los derechos fundamentales.",
            "Las sentencias de los tribunales.",
            "La potestad legislativa del Parlamento."
        ],
        correctAnswer: "La actividad de la Administración en la defensa de los derechos fundamentales."
    },
    {
        question: "17. El control jurisdiccional de la potestad reglamentaria del Gobierno implica que:",
        options: [
            "Los reglamentos pueden ser recurridos ante el Tribunal Constitucional.",
            "Los jueces pueden anular reglamentos contrarios a la Constitución o a la Ley.",
            "El Tribunal Supremo debe aprobar previamente todos los reglamentos.",
            "Solo el Parlamento puede suspender la aplicación de un reglamento."
        ],
        correctAnswer: "Los jueces pueden anular reglamentos contrarios a la Constitución o a la Ley."
    },
    {
        question: "18. ¿Cuál es el principio que exige que la Administración actúe de forma proporcionada a los fines perseguidos, evitando actuaciones excesivas?",
        options: [
            "Principio de legalidad.",
            "Principio de proporcionalidad.",
            "Principio de jerarquía.",
            "Principio de coordinación."
        ],
        correctAnswer: "Principio de proporcionalidad."
    },
    {
        question: "19. La ley que regula la actuación de la Administración Pública en materia de procedimiento administrativo común es un desarrollo directo del principio constitucional de:",
        options: [
            "Eficacia.",
            "Seguridad jurídica.",
            "Legalidad y debido proceso.",
            "Autonomía."
        ],
        correctAnswer: "Legalidad y debido proceso."
    },
    {
        question: "20. La obligación de la Administración de resolver de forma expresa y notificar sus resoluciones se relaciona con el principio de:",
        options: [
            "Transparencia.",
            "Eficacia.",
            "Desconcentración.",
            "Descentralización."
        ],
        correctAnswer: "Eficacia."
    },
    {
        question: "21. La Constitución garantiza el derecho de los particulares a ser indemnizados por toda lesión que sufran en cualquiera de sus bienes y derechos, salvo en casos de:",
        options: [
            "Fuerza mayor.",
            "Imprudencia leve.",
            "Culpa exclusiva del perjudicado.",
            "Caso fortuito."
        ],
        correctAnswer: "Culpa exclusiva del perjudicado."
    },
    {
        question: "22. El principio de **transparencia** en la actividad administrativa implica principalmente:",
        options: [
            "La publicidad activa y el derecho de acceso a la información pública.",
            "La obligación de todos los funcionarios de declarar sus bienes.",
            "La celebración de todos los actos administrativos a puerta abierta.",
            "La gratuidad de todos los trámites administrativos."
        ],
        correctAnswer: "La publicidad activa y el derecho de acceso a la información pública."
    },
    {
        question: "23. Los principios de la Administración se aplican:",
        options: [
            "Solo a la Administración General del Estado.",
            "Solo a las Administraciones Territoriales.",
            "A todas las Administraciones Públicas, de acuerdo con sus leyes reguladoras.",
            "Únicamente a la Administración Instrumental."
        ],
        correctAnswer: "A todas las Administraciones Públicas, de acuerdo con sus leyes reguladoras."
    },
    {
        question: "24. ¿Qué órgano ejerce el control interno de la gestión económico-financiera del sector público estatal?",
        options: [
            "El Tribunal de Cuentas.",
            "La Intervención General de la Administración del Estado (IGAE).",
            "El Consejo de Estado.",
            "El Defensor del Pueblo."
        ],
        correctAnswer: "La Intervención General de la Administración del Estado (IGAE)."
    },
    {
        question: "25. El órgano superior que dirige la acción del Gobierno y coordina las funciones de los demás miembros es:",
        options: [
            "El Consejo de Ministros.",
            "El Presidente del Gobierno.",
            "Las Comisiones Delegadas del Gobierno.",
            "El Jefe del Estado."
        ],
        correctAnswer: "El Presidente del Gobierno."
    },
    {
        question: "26. ¿Cuál de los siguientes NO es un órgano superior de la Administración General del Estado (AGE)?",
        options: [
            "El Subsecretario.",
            "El Ministro.",
            "El Presidente del Gobierno.",
            "El Secretario de Estado."
        ],
        correctAnswer: "El Subsecretario."
    },
    {
        question: "27. Los **Ministros** son titulares de sus Departamentos y, además de ejercer la potestad reglamentaria en su ámbito, forman parte de:",
        options: [
            "La Comisión General de Secretarios de Estado y Subsecretarios.",
            "El Consejo de Estado.",
            "El Gobierno.",
            "El Tribunal de Cuentas."
        ],
        correctAnswer: "El Gobierno."
    },
    {
        question: "28. La **Comisión General de Secretarios de Estado y Subsecretarios** es un órgano:",
        options: [
            "De control de la actividad económica.",
            "Superior de la AGE.",
            "Interministerial de apoyo al Consejo de Ministros.",
            "De la organización periférica."
        ],
        correctAnswer: "Interministerial de apoyo al Consejo de Ministros."
    },
    {
        question: "29. ¿Qué órganos de la AGE están directamente regulados por Real Decreto del Consejo de Ministros?",
        options: [
            "Solo las Secretarías Generales.",
            "Las Secretarías de Estado y las Subsecretarías.",
            "Los Ministerios, las Secretarías de Estado y las Subsecretarías.",
            "Únicamente los Ministros."
        ],
        correctAnswer: "Los Ministerios, las Secretarías de Estado y las Subsecretarías."
    },
    {
        question: "30. Los **Secretarios de Estado** son órganos:",
        options: [
            "Directivos.",
            "Superiores.",
            "Consultivos.",
            "Periféricos."
        ],
        correctAnswer: "Superiores."
    },
    {
        question: "31. ¿Cuál es el órgano de la organización periférica de la AGE con nivel orgánico de Subsecretario que representa al Gobierno en una Comunidad Autónoma?",
        options: [
            "El Delegado del Gobierno.",
            "El Subdelegado del Gobierno.",
            "El Director Insular.",
            "El Gobernador Civil."
        ],
        correctAnswer: "El Delegado del Gobierno."
    },
    {
        question: "32. ¿A quién corresponde la dirección de los servicios territoriales no integrados de la AGE en una provincia, bajo la inmediata dependencia del Delegado del Gobierno?",
        options: [
            "Al Director Insular.",
            "Al Subdelegado del Gobierno.",
            "Al Director Provincial.",
            "Al Secretario General."
        ],
        correctAnswer: "Al Subdelegado del Gobierno."
    },
    {
        question: "33. La **organización periférica** de la AGE se articula fundamentalmente en torno a:",
        options: [
            "Los Ministerios.",
            "Los Organismos Autónomos.",
            "Las Delegaciones y Subdelegaciones del Gobierno.",
            "Las Agencias Estatales."
        ],
        correctAnswer: "Las Delegaciones y Subdelegaciones del Gobierno."
    },
    {
        question: "34. ¿Qué es un **Organismo Autónomo** dentro del Sector Público Estatal?",
        options: [
            "Un órgano de la AGE sin personalidad jurídica.",
            "Una entidad de Derecho Público con personalidad jurídica propia, que ejerce potestades administrativas.",
            "Una sociedad mercantil estatal.",
            "Una Fundación del sector público."
        ],
        correctAnswer: "Una entidad de Derecho Público con personalidad jurídica propia, que ejerce potestades administrativas."
    },
    {
        question: "35. Las **Comisiones Delegadas del Gobierno** son creadas por:",
        options: [
            "El Presidente del Gobierno, mediante Real Decreto.",
            "El Consejo de Ministros, mediante Acuerdo.",
            "Ley Orgánica.",
            "El Ministro de Hacienda y Función Pública."
        ],
        correctAnswer: "El Presidente del Gobierno, mediante Real Decreto."
    },
    {
        question: "36. ¿Quién preside las Comisiones Delegadas del Gobierno?",
        options: [
            "El Ministro de la Presidencia, por defecto.",
            "El Vicepresidente que designe el Presidente del Gobierno.",
            "El miembro del Gobierno que se determine en el Real Decreto de su creación.",
            "El Ministro más antiguo."
        ],
        correctAnswer: "El miembro del Gobierno que se determine en el Real Decreto de su creación."
    },
    {
        question: "37. ¿Cuál es el órgano de la AGE que ostenta la representación ordinaria del Estado en el ámbito insular?",
        options: [
            "El Subdelegado del Gobierno.",
            "El Delegado del Gobierno.",
            "El Director Insular.",
            "El Cabildo Insular."
        ],
        correctAnswer: "El Director Insular."
    },
    {
        question: "38. Las **Secretarías Generales Técnicas** se encuadran en la estructura de la AGE como órganos de apoyo y se sitúan jerárquicamente bajo:",
        options: [
            "El Ministro.",
            "La Subsecretaría.",
            "La Secretaría de Estado.",
            "La Dirección General."
        ],
        correctAnswer: "La Subsecretaría."
    },
    {
        question: "39. La estructura orgánica básica de los Ministerios se establece mediante:",
        options: [
            "Orden Ministerial.",
            "Acuerdo del Consejo de Ministros.",
            "Real Decreto.",
            "Ley."
        ],
        correctAnswer: "Real Decreto."
    },
    {
        question: "40. Los **Directores Generales** son órganos:",
        options: [
            "Superiores.",
            "Directivos.",
            "Periféricos.",
            "Consultivos."
        ],
        correctAnswer: "Directivos."
    },
    {
        question: "41. ¿Cuál es la función principal del Consejo de Ministros?",
        options: [
            "Representar al Estado en el exterior.",
            "Ejercer la potestad legislativa.",
            "Determinar la dirección política y aprobar proyectos de ley.",
            "Ejercer el mando supremo de las Fuerzas Armadas."
        ],
        correctAnswer: "Determinar la dirección política y aprobar proyectos de ley."
    },
    {
        question: "42. La relación de puestos de trabajo (RPT) de la AGE es un instrumento de:",
        options: [
            "Desconcentración.",
            "Ordenación del empleo público.",
            "Delegación de competencias.",
            "Planificación económica."
        ],
        correctAnswer: "Ordenación del empleo público."
    },
    {
        question: "43. La AGE actúa y se relaciona con los ciudadanos y empresas a través de:",
        options: [
            "Servicios centrales y servicios territoriales.",
            "Solo organismos públicos.",
            "Únicamente sus Ministerios.",
            "Exclusivamente las Delegaciones del Gobierno."
        ],
        correctAnswer: "Servicios centrales y servicios territoriales."
    },
    {
        question: "44. La figura del **Subdirector General** es considerada un órgano:",
        options: [
            "De asesoramiento.",
            "Directivo, de acuerdo con la legislación básica.",
            "Superior.",
            "Periférico."
        ],
        correctAnswer: "Directivo, de acuerdo con la legislación básica."
    },
    {
        question: "45. ¿Qué nivel orgánico, como regla general, tiene atribuida la dirección y gestión de uno o varios sectores funcionales de la Subsecretaría?",
        options: [
            "El Director General.",
            "El Secretario General.",
            "El Subdirector General.",
            "El Secretario de Estado."
        ],
        correctAnswer: "El Subdirector General."
    },
    {
        question: "46. La Ley 40/2015, de Régimen Jurídico del Sector Público, regula la AGE y también:",
        options: [
            "Solo el Sector Público Autonómico.",
            "El Sector Público Institucional.",
            "Solo las Corporaciones de Derecho Público.",
            "Exclusivamente las relaciones interadministrativas."
        ],
        correctAnswer: "El Sector Público Institucional."
    },
    {
        question: "47. ¿Quién puede proponer la creación, modificación y supresión de Direcciones Generales?",
        options: [
            "Solo el Presidente del Gobierno.",
            "El Ministro del Departamento correspondiente.",
            "El Consejo de Estado.",
            "El Secretario de Estado."
        ],
        correctAnswer: "El Ministro del Departamento correspondiente."
    },
    {
        question: "48. En la organización territorial del Estado, las **Delegaciones del Gobierno** en las Comunidades Autónomas se configuran como:",
        options: [
            "Un órgano de la CCAA.",
            "La expresión de la organización periférica de la AGE.",
            "Una entidad local.",
            "Un órgano consultivo del Gobierno Central."
        ],
        correctAnswer: "La expresión de la organización periférica de la AGE."
    },
    {
        question: "49. El Título VIII de la Constitución Española se denomina:",
        options: [
            "De los derechos y deberes fundamentales.",
            "Del Gobierno y de la Administración.",
            "De la organización territorial del Estado.",
            "Del Poder Judicial."
        ],
        correctAnswer: "De la organización territorial del Estado."
    },
    {
        question: "50. La Constitución garantiza el principio de **autonomía** para:",
        options: [
            "Los Ministerios.",
            "Las Comunidades Autónomas y las Provincias.",
            "Los municipios y las provincias.",
            "Los municipios, las provincias y las Comunidades Autónomas."
        ],
        correctAnswer: "Los municipios, las provincias y las Comunidades Autónomas."
    },
    {
        question: "51. ¿Qué precepto constitucional establece la indisoluble unidad de la Nación española?",
        options: [
            "Artículo 1.1 de la CE.",
            "Artículo 2 de la CE.",
            "Artículo 8.1 de la CE.",
            "Artículo 137 de la CE."
        ],
        correctAnswer: "Artículo 2 de la CE."
    },
    {
        question: "52. Las **Comunidades Autónomas** se constituyen con:",
        options: [
            "Autonomía política y administrativa.",
            "Autonomía solo administrativa.",
            "Autonomía legislativa.",
            "Capacidad para delegar la soberanía."
        ],
        correctAnswer: "Autonomía política y administrativa."
    },
    {
        question: "53. ¿Cuál es la norma institucional básica de la Comunidad Autónoma?",
        options: [
            "La Ley Orgánica de Transferencias.",
            "La Ley de Bases de Régimen Local.",
            "El Estatuto de Autonomía.",
            "La Ley de Régimen Jurídico de las Administraciones Públicas."
        ],
        correctAnswer: "El Estatuto de Autonomía."
    },
    {
        question: "54. Los Estatutos de Autonomía son aprobados mediante:",
        options: [
            "Ley ordinaria de las Cortes Generales.",
            "Ley Orgánica.",
            "Real Decreto.",
            "Acuerdo del Consejo de Ministros."
        ],
        correctAnswer: "Ley Orgánica."
    },
    {
        question: "55. ¿Cuál de estos NO es un órgano institucional de las Comunidades Autónomas (modelo constitucional básico)?",
        options: [
            "La Asamblea Legislativa.",
            "El Consejo de Gobierno.",
            "El Tribunal Superior de Justicia.",
            "El Presidente."
        ],
        correctAnswer: "El Tribunal Superior de Justicia."
    },
    {
        question: "56. El **Gobierno y la Administración** de una Comunidad Autónoma recaen en:",
        options: [
            "El Parlamento y el Tribunal Superior de Justicia.",
            "El Consejo de Gobierno.",
            "Las Diputaciones Provinciales.",
            "El Delegado del Gobierno."
        ],
        correctAnswer: "El Consejo de Gobierno."
    },
    {
        question: "57. La **Provincia** es una entidad local que, además de ser una división territorial para el cumplimiento de las actividades del Estado, está dotada de:",
        options: [
            "Autonomía política.",
            "Personalidad jurídica propia.",
            "Potestad legislativa exclusiva.",
            "Competencias de coordinación con el Estado."
        ],
        correctAnswer: "Personalidad jurídica propia."
    },
    {
        question: "58. ¿Qué órgano ejerce el gobierno y la administración autónoma de la provincia?",
        options: [
            "El Delegado del Gobierno.",
            "La Diputación u órgano equivalente.",
            "El Consejo de Ministros.",
            "El Parlamento Autonómico."
        ],
        correctAnswer: "La Diputación u órgano equivalente."
    },
    {
        question: "59. Los **municipios** gozan de autonomía para la gestión de sus respectivos intereses, que se concreta en:",
        options: [
            "El derecho a separarse de la Comunidad Autónoma.",
            "La potestad para legislar sobre cualquier materia.",
            "Plena personalidad jurídica y capacidad para ejercer potestades.",
            "La subordinación a la provincia."
        ],
        correctAnswer: "Plena personalidad jurídica y capacidad para ejercer potestades."
    },
    {
        question: "60. ¿Quién nombra al Presidente de la Comunidad Autónoma?",
        options: [
            "Las Cortes Generales.",
            "El Rey, a propuesta del Presidente de la Asamblea Legislativa de la CCAA.",
            "El Presidente del Gobierno Central.",
            "El Pleno del Tribunal Constitucional."
        ],
        correctAnswer: "El Rey, a propuesta del Presidente de la Asamblea Legislativa de la CCAA."
    },
    {
        question: "61. El control de la constitucionalidad de las disposiciones normativas con fuerza de ley de las Comunidades Autónomas corresponde a:",
        options: [
            "El Tribunal Supremo.",
            "El Tribunal Superior de Justicia de la CCAA.",
            "El Tribunal Constitucional.",
            "Las Cortes Generales."
        ],
        correctAnswer: "El Tribunal Constitucional."
    },
    {
        question: "62. ¿Qué vía de acceso a la autonomía se conoce como 'vía lenta' o del artículo 143 de la CE?",
        options: [
            "La vía del artículo 151 de la CE.",
            "La vía de la disposición transitoria segunda.",
            "La vía del artículo 143 de la CE.",
            "La vía de la disposición adicional primera."
        ],
        correctAnswer: "La vía del artículo 143 de la CE."
    },
    {
        question: "63. La posibilidad de que el Estado obligue a una Comunidad Autónoma al cumplimiento forzoso de sus obligaciones se regula en el artículo:",
        options: [
            "149 de la CE.",
            "155 de la CE.",
            "143 de la CE.",
            "151 de la CE."
        ],
        correctAnswer: "155 de la CE."
    },
    {
        question: "64. Los territorios que en el momento de entrar en vigor la Constitución contaban con regímenes preautonómicos y que se constituyeron en CCAA por la vía del artículo 151 de la CE son:",
        options: [
            "Todas las CCAA.",
            "El País Vasco, Cataluña, Galicia y Andalucía.",
            "Solo el País Vasco y Cataluña.",
            "Canarias y Baleares."
        ],
        correctAnswer: "El País Vasco, Cataluña, Galicia y Andalucía."
    },
    {
        question: "65. La asunción de competencias por las Comunidades Autónomas está limitada por:",
        options: [
            "La Ley de Régimen Local.",
            "El listado de competencias exclusivas del Estado (art. 149.1 CE).",
            "La voluntad de las provincias.",
            "El principio de subsidiariedad."
        ],
        correctAnswer: "El listado de competencias exclusivas del Estado (art. 149.1 CE)."
    },
    {
        question: "66. ¿Cuál es la institución de la Comunidad Autónoma que ejerce la función legislativa?",
        options: [
            "El Consejo de Gobierno.",
            "La Asamblea Legislativa o Parlamento Autonómico.",
            "El Tribunal Superior de Justicia.",
            "El Presidente."
        ],
        correctAnswer: "La Asamblea Legislativa o Parlamento Autonómico."
    },
    {
        question: "67. Las **Ciudades Autónomas** de Ceuta y Melilla:",
        options: [
            "Tienen la misma capacidad competencial que cualquier CCAA.",
            "Son un tipo especial de Entidad Local con competencias autonómicas y régimen foral.",
            "Son Entidades Locales con régimen especial, reguladas por Ley Orgánica.",
            "Son provincias de ultramar."
        ],
        correctAnswer: "Son Entidades Locales con régimen especial, reguladas por Ley Orgánica."
    },
    {
        question: "68. El **Consejo de Gobierno** de la Comunidad Autónoma tiene, principalmente, funciones:",
        options: [
            "Jurisdiccionales.",
            "Electorales.",
            "Ejecutivas y administrativas.",
            "De control del Estado."
        ],
        correctAnswer: "Ejecutivas y administrativas."
    },
    {
        question: "69. La creación de agrupaciones de municipios se denomina:",
        options: [
            "Descentralización funcional.",
            "Comarcas u otras Entidades Supramunicipales.",
            "Desconcentración provincial.",
            "Mancomunidad de Regiones."
        ],
        correctAnswer: "Comarcas u otras Entidades Supramunicipales."
    },
    {
        question: "70. ¿Qué mayoría se exigió en el referéndum para la ratificación de los Estatutos de Autonomía de las CCAA que accedieron por la vía del artículo 151 de la CE?",
        options: [
            "Mayoría simple de los electores de cada provincia.",
            "Mayoría absoluta de los electores de cada provincia.",
            "Mayoría de dos tercios de los votos válidos.",
            "Mayoría simple de los votos emitidos."
        ],
        correctAnswer: "Mayoría absoluta de los electores de cada provincia."
    },
    {
        question: "71. La **disolución anticipada** de la Asamblea Legislativa de una Comunidad Autónoma corresponde a:",
        options: [
            "El Presidente del Gobierno de la Nación.",
            "El Presidente de la Comunidad Autónoma.",
            "Las Cortes Generales.",
            "El Tribunal Constitucional."
        ],
        correctAnswer: "El Presidente de la Comunidad Autónoma."
    },
    {
        question: "72. El **control económico y presupuestario** de las Comunidades Autónomas es ejercido por:",
        options: [
            "El Banco de España.",
            "El Ministerio de Hacienda.",
            "El Tribunal de Cuentas y los Órganos de Control Externo autonómicos.",
            "El Tribunal Superior de Justicia."
        ],
        correctAnswer: "El Tribunal de Cuentas y los Órganos de Control Externo autonómicos."
    },
    {
        question: "73. El artículo 149.1 de la CE establece las competencias que son **exclusivas** del:",
        options: [
            "Municipio.",
            "Estado.",
            "Comunidad Autónoma.",
            "Provincia."
        ],
        correctAnswer: "Estado."
    },
    {
        question: "74. Las competencias que la Constitución no haya atribuido expresamente al Estado podrán corresponder a:",
        options: [
            "El Consejo de Estado.",
            "Las Comunidades Autónomas, de acuerdo con sus Estatutos.",
            "Los municipios.",
            "La Administración Periférica."
        ],
        correctAnswer: "Las Comunidades Autónomas, de acuerdo con sus Estatutos."
    },
    {
        question: "75. ¿Qué significa que una competencia sea **exclusiva** del Estado (art. 149.1 CE)?",
        options: [
            "Que el Estado solo puede legislar sobre ella.",
            "Que el Estado tiene la potestad legislativa y la ejecutiva.",
            "Que la CCAA puede ejecutar la normativa estatal si su Estatuto lo prevé.",
            "Que el Estado solo tiene capacidad de coordinación."
        ],
        correctAnswer: "Que el Estado tiene la potestad legislativa y la ejecutiva."
    },
    {
        question: "76. ¿Qué ocurre con las materias no atribuidas al Estado por la CE y que los Estatutos no asuman?",
        options: [
            "Corresponden al Estado, que podrá legislar y ejecutar.",
            "Quedan sin regulación.",
            "Corresponden a los municipios.",
            "Se regulan por la costumbre."
        ],
        correctAnswer: "Corresponden al Estado, que podrá legislar y ejecutar."
    },
    {
        question: "77. ¿Cuál de las siguientes materias es competencia **exclusiva** del Estado, según el art. 149.1 de la CE?",
        options: [
            "Sanidad.",
            "Bases del régimen minero y energético.",
            "Nacionalidad, inmigración, emigración, extranjería y derecho de asilo.",
            "Ordenación del territorio."
        ],
        correctAnswer: "Nacionalidad, inmigración, emigración, extranjería y derecho de asilo."
    },
    {
        question: "78. La competencia sobre la **legislación básica** en materia de Sanidad corresponde al:",
        options: [
            "Municipio.",
            "Estado.",
            "Comunidad Autónoma.",
            "Consejo de Estado."
        ],
        correctAnswer: "Estado."
    },
    {
        question: "79. La regulación de la **enseñanza** es competencia de las Comunidades Autónomas, pero el Estado tiene reservada la competencia sobre:",
        options: [
            "La organización de los centros educativos.",
            "La regulación de los niveles educativos.",
            "Las normas básicas para el desarrollo del artículo 27 de la CE.",
            "La totalidad del sistema educativo."
        ],
        correctAnswer: "Las normas básicas para el desarrollo del artículo 27 de la CE."
    },
    {
        question: "80. Un **conflicto de competencias** entre el Estado y una Comunidad Autónoma es resuelto por:",
        options: [
            "El Tribunal Supremo.",
            "El Tribunal Constitucional.",
            "El Consejo de Estado.",
            "El Tribunal Superior de Justicia de la CCAA."
        ],
        correctAnswer: "El Tribunal Constitucional."
    },
    {
        question: "81. ¿Qué tipo de conflicto se plantea cuando un órgano del Estado cree que una disposición o resolución de una CCAA invade la esfera de su competencia?",
        options: [
            "Conflicto de jurisdicción.",
            "Conflicto positivo de competencias.",
            "Cuestión de inconstitucionalidad.",
            "Recurso de amparo."
        ],
        correctAnswer: "Conflicto positivo de competencias."
    },
    {
        question: "82. ¿Qué ocurre si ninguna de las Administraciones Territoriales ejerce una competencia que le corresponde (conflicto negativo de competencias)?",
        options: [
            "El Tribunal Supremo asume la competencia.",
            "El ciudadano puede acudir al Tribunal Constitucional.",
            "El Consejo de Estado asume la competencia provisionalmente.",
            "La competencia se atribuye a la AGE."
        ],
        correctAnswer: "El ciudadano puede acudir al Tribunal Constitucional."
    },
    {
        question: "83. Las Leyes Marco que permiten a las Cortes Generales atribuir a las Comunidades Autónomas la facultad de dictar normas legislativas se recogen en el artículo:",
        options: [
            "150.1 de la CE.",
            "149.1 de la CE.",
            "153.a de la CE.",
            "150.2 de la CE."
        ],
        correctAnswer: "150.1 de la CE."
    },
    {
        question: "84. La figura de la **delegación o transferencia de facultades** de titularidad estatal a favor de las CCAA está regulada en el artículo:",
        options: [
            "149.1 CE.",
            "150.2 CE.",
            "148.1 CE.",
            "155 CE."
        ],
        correctAnswer: "150.2 CE."
    },
    {
        question: "85. En la distribución competencial, el concepto de **legislación básica** implica:",
        options: [
            "El desarrollo normativo completo de la materia por el Estado.",
            "La fijación de principios o mínimos comunes por el Estado.",
            "La ejecución exclusiva por parte de la CCAA.",
            "La posibilidad de que la CCAA dicte normas con rango de Ley Orgánica."
        ],
        correctAnswer: "La fijación de principios o mínimos comunes por el Estado."
    },
    {
        question: "86. La competencia en materia de **fomento de la cultura** puede ser ejercida por:",
        options: [
            "Solo el Estado.",
            "Solo las Comunidades Autónomas.",
            "El Estado y las Comunidades Autónomas, de forma concurrente o compartida.",
            "Exclusivamente los municipios."
        ],
        correctAnswer: "El Estado y las Comunidades Autónomas, de forma concurrente o compartida."
    },
    {
        question: "87. Si una Ley estatal contiene solo la regulación de la 'legislación básica' sobre una materia, ¿a quién corresponde el desarrollo normativo y la ejecución?",
        options: [
            "Al Estado, obligatoriamente.",
            "A las Comunidades Autónomas, si así lo prevé su Estatuto.",
            "Al Gobierno de la Nación.",
            "Al Consejo de Estado."
        ],
        correctAnswer: "A las Comunidades Autónomas, si así lo prevé su Estatuto."
    },
    {
        question: "88. La **cláusula de cierre** del sistema competencial (art. 149.3 CE) establece que el derecho estatal será:",
        options: [
            "Supletorio del derecho de las Comunidades Autónomas.",
            "Superior jerárquicamente.",
            "El único aplicable en caso de conflicto.",
            "Siempre prevalente."
        ],
        correctAnswer: "Supletorio del derecho de las Comunidades Autónomas."
    },
    {
        question: "89. El **Recurso de Inconstitucionalidad** contra una Ley o norma con fuerza de Ley de una CCAA es resuelto por:",
        options: [
            "El Tribunal Supremo.",
            "La Sala Contencioso-Administrativa de la Audiencia Nacional.",
            "El Tribunal Constitucional.",
            "El Pleno del Congreso de los Diputados."
        ],
        correctAnswer: "El Tribunal Constitucional."
    },
    {
        question: "90. ¿Qué significa que una competencia sea **compartida**?",
        options: [
            "Que la CCAA puede legislar y ejecutar con independencia del Estado.",
            "Que el Estado establece la legislación básica y la CCAA el desarrollo legislativo y la ejecución.",
            "Que el Estado solo tiene funciones de coordinación.",
            "Que ambas Administraciones ejercen la misma potestad sobre el mismo objeto."
        ],
        correctAnswer: "Que el Estado establece la legislación básica y la CCAA el desarrollo legislativo y la ejecución."
    },
    {
        question: "91. El **Recurso de Amparo** en materia de competencias es:",
        options: [
            "Inexistente, no procede en esta materia.",
            "Un mecanismo para resolver conflictos entre órganos constitucionales.",
            "Un recurso ordinario contra los actos del Gobierno.",
            "Un mecanismo para resolver conflictos entre las CCAA."
        ],
        correctAnswer: "Inexistente, no procede en esta materia."
    },
    {
        question: "92. ¿A quién corresponde la competencia exclusiva sobre el **régimen de la Seguridad Social**?",
        options: [
            "A las Comunidades Autónomas.",
            "Al Estado.",
            "A los Ayuntamientos.",
            "Es una competencia concurrente."
        ],
        correctAnswer: "Al Estado."
    },
    {
        question: "93. Los conflictos de competencias entre los órganos de la misma Comunidad Autónoma se resuelven de acuerdo con:",
        options: [
            "La Ley Orgánica del Tribunal Constitucional.",
            "El Estatuto de Autonomía de la CCAA.",
            "La Ley de Régimen Local.",
            "El criterio del Ministerio de la Presidencia."
        ],
        correctAnswer: "El Estatuto de Autonomía de la CCAA."
    },
    {
        question: "94. En el caso de delegación de facultades del Estado a una CCAA mediante Ley Orgánica (art. 150.2 CE), la norma de delegación debe prever:",
        options: [
            "Un mecanismo de control solo del Tribunal Constitucional.",
            "Las formas de control del Estado.",
            "Que la CCAA pueda modificar la ley orgánica.",
            "Un plazo de vigencia indefinido."
        ],
        correctAnswer: "Las formas de control del Estado."
    },
    {
        question: "95. ¿Qué acción puede ejercer el Gobierno central si entiende que una disposición de una CCAA es inconstitucional?",
        options: [
            "Recurso Contencioso-Administrativo.",
            "Conflicto positivo de competencias.",
            "Recurso de inconstitucionalidad ante el TC.",
            "Recurso de alzada."
        ],
        correctAnswer: "Recurso de inconstitucionalidad ante el TC."
    },
    {
        question: "96. ¿A quién corresponde la competencia en materia de **obras públicas de interés general**?",
        options: [
            "A las Comunidades Autónomas.",
            "A los municipios.",
            "Al Estado.",
            "A las provincias."
        ],
        correctAnswer: "Al Estado."
    },
    {
        question: "97. El principio de **coordinación** entre las Administraciones Públicas implica:",
        options: [
            "La subordinación jerárquica de unas a otras.",
            "La fijación de técnicas para la colaboración en el ejercicio de las respectivas competencias.",
            "La centralización de todas las funciones administrativas.",
            "La obligatoriedad de la AGE de aprobar todos los actos de las CCAA."
        ],
        correctAnswer: "La fijación de técnicas para la colaboración en el ejercicio de las respectivas competencias."
    },
    {
        question: "98. La Ley 40/2015, de Régimen Jurídico del Sector Público, regula los instrumentos y técnicas de:",
        options: [
            "Desconcentración interna.",
            "Relaciones interadministrativas.",
            "Control presupuestario.",
            "Organización periférica."
        ],
        correctAnswer: "Relaciones interadministrativas."
    },
    {
        question: "99. La **Conferencia de Presidentes** es un órgano de cooperación de composición:",
        options: [
            "Bilateral.",
            "Interministerial.",
            "Multilateral y de máximo nivel político.",
            "Consultiva, compuesta por expertos."
        ],
        correctAnswer: "Multilateral y de máximo nivel político."
    },
    {
        question: "100. Los **Convenios de Colaboración** entre Administraciones Públicas tienen por objeto:",
        options: [
            "La cesión de la titularidad de una competencia.",
            "Fijar la obligación de una Administración de subordinarse a otra.",
            "La formalización de compromisos de actuación conjunta en materias de competencia común.",
            "La resolución de conflictos de competencias."
        ],
        correctAnswer: "La formalización de compromisos de actuación conjunta en materias de competencia común."
    },
    {
        question: "101. ¿Cuál es el órgano de cooperación multilateral de composición sectorial que reúne a los miembros del Gobierno de la Nación responsables de un área y a los correspondientes Consejeros de las CCAA?",
        options: [
            "La Comisión Bilateral de Cooperación.",
            "La Conferencia Sectorial.",
            "La Conferencia de Presidentes.",
            "La Comisión Interministerial."
        ],
        correctAnswer: "La Conferencia Sectorial."
    },
    {
        question: "102. La **cooperación interadministrativa** puede ser:",
        options: [
            "Solo vertical.",
            "Solo horizontal.",
            "Horizontal (entre CCAA o entre EELL) y vertical (Estado con CCAA o EELL).",
            "Únicamente voluntaria."
        ],
        correctAnswer: "Horizontal (entre CCAA o entre EELL) y vertical (Estado con CCAA o EELL)."
    },
    {
        question: "103. ¿Cuál de los siguientes es un instrumento de la cooperación **voluntaria** entre Administraciones?",
        options: [
            "El requerimiento de incompetencia.",
            "El Conflicto Positivo de Competencias.",
            "El Convenio de Colaboración.",
            "Las medidas de control del art. 155 CE."
        ],
        correctAnswer: "El Convenio de Colaboración."
    },
    {
        question: "104. El deber de colaboración entre Administraciones se basa en el principio de:",
        options: [
            "Jerarquía.",
            "Lealtad institucional.",
            "Desconcentración.",
            "Economía."
        ],
        correctAnswer: "Lealtad institucional."
    },
    {
        question: "105. ¿Quién puede constituir Comisiones Bilaterales de Cooperación para la coordinación entre el Estado y una Comunidad Autónoma?",
        options: [
            "El Tribunal Constitucional.",
            "El Gobierno de la Nación y el Consejo de Gobierno de la CCAA.",
            "El Defensor del Pueblo.",
            "El Congreso de los Diputados."
        ],
        correctAnswer: "El Gobierno de la Nación y el Consejo de Gobierno de la CCAA."
    },
    {
        question: "106. La coordinación, a diferencia de la cooperación, implica:",
        options: [
            "La libre voluntad de las partes para actuar conjuntamente.",
            "Una imposición del ente superior para homogeneizar la acción del inferior.",
            "La transferencia de la titularidad competencial.",
            "La resolución de un conflicto de atribuciones."
        ],
        correctAnswer: "Una imposición del ente superior para homogeneizar la acción del inferior."
    },
    {
        question: "107. ¿Cuál es el instrumento principal para la coordinación financiera entre el Estado y las CCAA?",
        options: [
            "El Consejo de Política Fiscal y Financiera (CPFF).",
            "La Conferencia de Presidentes.",
            "La Comisión Bilateral.",
            "El Fondo de Compensación Interterritorial."
        ],
        correctAnswer: "El Consejo de Política Fiscal y Financiera (CPFF)."
    },
    {
        question: "108. Los **Planes y Programas conjuntos** se utilizan como técnica de cooperación para:",
        options: [
            "La ejecución de obras públicas de interés general.",
            "La ejecución de competencias autonómicas en el ámbito del Estado.",
            "Desarrollar políticas que afectan a varias Administraciones.",
            "La delegación de competencias del Estado a las CCAA."
        ],
        correctAnswer: "Desarrollar políticas que afectan a varias Administraciones."
    },
    {
        question: "109. ¿Qué instrumento permite una gestión común de servicios, prestaciones o actividades?",
        options: [
            "El Protocolo General de Actuación.",
            "La Conferencia Sectorial.",
            "La figura de los Consorcios.",
            "El Conflicto Positivo de Competencias."
        ],
        correctAnswer: "La figura de los Consorcios."
    },
    {
        question: "110. El deber de información mutua en el ámbito de la cooperación se relaciona directamente con el principio de:",
        options: [
            "Publicidad activa.",
            "Lealtad institucional.",
            "Subsidiariedad.",
            "Imparcialidad."
        ],
        correctAnswer: "Lealtad institucional."
    },
    {
        question: "111. En los **Consorcios** interadministrativos, la participación de la AGE o de sus Organismos Públicos es:",
        options: [
            "Exclusiva.",
            "Obligatoria.",
            "Voluntaria.",
            "Limitada solo a funciones consultivas."
        ],
        correctAnswer: "Voluntaria."
    },
    {
        question: "112. Un **Protocolo General de Actuación** tiene valor de:",
        options: [
            "Ley.",
            "Norma reglamentaria.",
            "Simple declaración de intenciones o marco de colaboración futura.",
            "Convenio de colaboración."
        ],
        correctAnswer: "Simple declaración de intenciones o marco de colaboración futura."
    },
    {
        question: "113. ¿Cuál es la forma de cooperación que exige a las Administraciones implicadas la creación de una nueva persona jurídica?",
        options: [
            "Los Convenios.",
            "Los Consorcios.",
            "Los Protocolos.",
            "Las Conferencias Sectoriales."
        ],
        correctAnswer: "Los Consorcios."
    },
    {
        question: "114. La Ley 40/2015 establece que las Administraciones Públicas deberán abstenerse de cualquier actuación que suponga:",
        options: [
            "El ejercicio de potestades administrativas.",
            "La duplicidad de trámites o la superposición de actuaciones.",
            "La ejecución de normativa estatal.",
            "La coordinación de servicios."
        ],
        correctAnswer: "La duplicidad de trámites o la superposición de actuaciones."
    },
    {
        question: "115. El ejercicio de las competencias por los Entes Locales debe realizarse de la forma más cercana a los ciudadanos (principio de:):",
        options: [
            "Desconcentración.",
            "Subsidiariedad.",
            "Proporcionalidad.",
            "Legalidad."
        ],
        correctAnswer: "Subsidiariedad."
    },
    {
        question: "116. En la Conferencia Sectorial, los Acuerdos que obligan a las CCAA requieren el voto favorable de:",
        options: [
            "Dos tercios de los representantes.",
            "La mayoría simple de los presentes.",
            "La representación del Estado y de las CCAA que supongan al menos la mitad de la población.",
            "La unanimidad de todos los miembros."
        ],
        correctAnswer: "La representación del Estado y de las CCAA que supongan al menos la mitad de la población."
    },
    {
        question: "117. ¿Qué implica el deber de **asistencia activa** en las relaciones interadministrativas?",
        options: [
            "La obligación de la AGE de financiar todas las actuaciones de las CCAA.",
            "La obligación de auxiliar a otra Administración cuando sea necesario para el ejercicio de sus competencias.",
            "La asunción de competencias ajenas.",
            "La participación obligatoria en todos los órganos de cooperación."
        ],
        correctAnswer: "La obligación de auxiliar a otra Administración cuando sea necesario para el ejercicio de sus competencias."
    },
    {
        question: "118. El **Fondo de Compensación Interterritorial** es un instrumento para hacer efectivo el principio de:",
        options: [
            "Eficacia.",
            "Solidaridad.",
            "Jerarquía.",
            "Desconcentración."
        ],
        correctAnswer: "Solidaridad."
    },
    {
        question: "119. ¿Cuál de estos órganos puede ser utilizado como técnica de cooperación **vertical** (Estado-CCAA)?",
        options: [
            "Mancomunidad de Municipios.",
            "Consorcio entre municipios vecinos.",
            "Comisión Bilateral de Cooperación.",
            "Agrupación de Comarcas."
        ],
        correctAnswer: "Comisión Bilateral de Cooperación."
    },
    {
        question: "120. ¿Qué técnica permite a una Administración realizar actuaciones propias de otra, previa autorización de esta?",
        options: [
            "La delegación de competencias.",
            "La encomienda de gestión.",
            "La transferencia de titularidad.",
            "La coordinación forzosa."
        ],
        correctAnswer: "La encomienda de gestión."
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
