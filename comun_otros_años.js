export const comun_otros_años = {
    titulo: 'Preguntas M1 Parte Común otros años',
    descripcion: 'Prueba con penalización de 1/3.',
    cantidadExamen: 40, 
    logicaPuntuacion: {
        valorCorrecta: 1.0,
        valorIncorrecta: 1/3, 
        restaPorFallo: true
    },
    
   preguntas: [
    // Constitución Española
    // PRIMERA SERIE DE PREGUNTAS (24 PREGUNTAS)
    {
        pregunta: "Señale la respuesta CORRECTA conforme al artículo 1 de la Constitución Española de 1978:",
        opciones: [
            "España se constituye en un Estado social y democrático de Derecho.",
            "España se constituye en un Estado liberal y democrático de Derecho.",
            "España se constituye en una República social y democrática de Derecho."
        ],
        respuestaCorrecta: "España se constituye en un Estado social y democrático de Derecho."
    },
    {
        pregunta: "El artículo 1 de la Constitución Española de 1978 propugna como valores superiores del ordenamiento jurídico:",
        opciones: [
            "La libertad, la fraternidad y la igualdad.",
            "La libertad, la justicia, la igualdad y el pluralismo político.",
            "La igualdad, la justicia, la libertad y la autonomía."
        ],
        respuestaCorrecta: "La libertad, la justicia, la igualdad y el pluralismo político."
    },
    {
        pregunta: "De conformidad con el artículo 2 de la Constitución Española de 1978, la Constitución se fundamenta en la indisoluble unidad de la Nación española, patria común e indivisible de todos los españoles, y reconoce y garantiza el derecho a:",
        opciones: [
            "La autonomía de las nacionalidades y regiones que la integran y la desigualdad entre todas ellas.",
            "La autodeterminación de las nacionalidades que la integran y la solidaridad entre las regiones.",
            "La autonomía de las nacionalidades y regiones que la integran y la solidaridad entre todas ellas."
        ],
        respuestaCorrecta: "La autonomía de las nacionalidades y regiones que la integran y la solidaridad entre todas ellas."
    },
    {
        pregunta: "Según el artículo 10 de la Constitución Española de 1978, las normas relativas a los derechos fundamentales y a las libertades que la Constitución reconoce se interpretarán de conformidad con:",
        opciones: [
            "La Declaración Universal de Derechos Humanos y los tratados y acuerdos internacionales sobre las mismas materias ratificados por España.",
            "Los estatutos de autonomía de las Comunidades Autónomas.",
            "El Tribunal Constitucional."
        ],
        respuestaCorrecta: "La Declaración Universal de Derechos Humanos y los tratados y acuerdos internacionales sobre las mismas materias ratificados por España."
    },
    {
        pregunta: "El artículo 27 de la Constitución Española de 1978 establece que la enseñanza básica:",
        opciones: [ "Es obligatoria y gratuita.", "Es voluntaria y cofinanciada.", "Es voluntaria y gratuita." ],
        respuestaCorrecta: "Es obligatoria y gratuita."
    },
    {
        pregunta: "El artículo 54 de la Constitución Española de 1978 establece que una ley orgánica regulará la institución del Defensor del Pueblo, como alto comisionado:",
        opciones: [
            "Del Tribunal Supremo, designado por este para la defensa de los derechos comprendidos en este Título.",
            "De las Cortes Generales designado por estas para la defensa de los derechos comprendidos en este Título.",
            "Del Fiscal General del Estado, designado por este para la defensa de los derechos comprendidos en este Título."
        ],
        respuestaCorrecta: "De las Cortes Generales designado por estas para la defensa de los derechos comprendidos en este Título."
    },
    {
        pregunta: "Señale la respuesta FALSA. De conformidad con la Ley 40/2015, de 1 de octubre, de Régimen Jurídico del Sector Público:",
        opciones: [
            "Los Ministros son los jefes superiores del Departamento.",
            "Los Subsecretarios ostentan la representación ordinaria del Ministerio.",
            "Los Secretarios generales técnicos están bajo la inmediata dependencia del Ministro."
        ],
        respuestaCorrecta: "Los Secretarios generales técnicos están bajo la inmediata dependencia del Ministro."
    },
    {
        pregunta: "Señale la respuesta FALSA. De acuerdo con la Ley 50/1997, de 27 de noviembre, del Gobierno:",
        opciones: [
            "Las deliberaciones del Consejo de Ministros serán públicas.",
            "El Consejo Ministros es un órgano colegiado del Gobierno.",
            "Al Consejo de Ministros le corresponde aprobar el Proyecto de Ley de Presupuestos Generales del Estado."
        ],
        respuestaCorrecta: "Las deliberaciones del Consejo de Ministros serán públicas."
    },
    {
        pregunta: "Según la Ley 40/2015, de 1 de octubre, de Régimen Jurídico del Sector Público, en la organización central de la Administración General del Estado:",
        opciones: [
            "Son órganos superiores los Ministros, los Secretarios de Estado y los Subsecretarios.",
            "Son órganos directivos los Secretarios generales técnicos y los Directores Generales.",
            "Son órganos superiores los Ministros y los Secretarios generales."
        ],
        respuestaCorrecta: "Son órganos directivos los Secretarios generales técnicos y los Directores Generales."
    },
    {
        pregunta: "De acuerdo con el artículo 55 del texto refundido de la Ley del Estatuto Básico del Empleado Público, los principios constitucionales por los que se rige el derecho al acceso al empleo público son:",
        opciones: [ "Buen aspecto físico y relaciones familiares.", "Igualdad, mérito y capacidad.", "Transparencia, honor y salud." ],
        respuestaCorrecta: "Igualdad, mérito y capacidad."
    },
    {
        pregunta: "En virtud de lo establecido en el Reglamento General de Ingreso del Personal al servicio de la Administración general del Estado, el ingreso del personal funcionario se llevará a cabo a través de los sistemas de:",
        opciones: [
            "Oposición exclusivamente.",
            "Oposición, concurso oposición o concurso libres.",
            "Concurso de méritos y excepcionalmente oposición."
        ],
        respuestaCorrecta: "Oposición, concurso oposición o concurso libres."
    },
    {
        pregunta: "Señale en cuál de las siguientes circunstancias es posible el nombramiento de un funcionario interino, de acuerdo con el texto refundido de la Ley del Estatuto Básico del Empleado Público:",
        opciones: [
            "La sustitución transitoria de los titulares, durante el tiempo estrictamente necesario.",
            "Para la sustitución definitiva de los titulares en los casos de ausencia por enfermedad profesional.",
            "En todo caso, cuando así lo autorice el superior jerárquico."
        ],
        respuestaCorrecta: "La sustitución transitoria de los titulares, durante el tiempo estrictamente necesario."
    },
    {
        pregunta: "De conformidad con lo dispuesto el artículo 96 del texto refundido de la Ley del Estatuto Básico del Empleado Público, escoja la opción correcta respecto de las sanciones impuestas por la comisión de faltas muy graves:",
        opciones: [
            "Conllevará en todo caso pena de prisión.",
            "Despido disciplinario del personal laboral, que comportará la inhabilitación para ser titular de un nuevo contrato de trabajo con funciones similares a las que desempeñaban.",
            "Únicamente, una amonestación verbal."
        ],
        respuestaCorrecta: "Despido disciplinario del personal laboral, que comportará la inhabilitación para ser titular de un nuevo contrato de trabajo con funciones similares a las que desempeñaban."
    },
    {
        pregunta: "De acuerdo con lo establecido en el del texto refundido de la Ley del Estatuto Básico del Empleado Público, la obstaculización al ejercicio de las libertades públicas y derechos sindicales constituye:",
        opciones: [ "Falta muy grave.", "Un delito que, en todo caso, conlleva pena de prisión.", "No constituye falta disciplinaria." ],
        respuestaCorrecta: "Falta muy grave."
    },
    {
        pregunta: "De acuerdo con el artículo 89 del texto refundido de la Ley del Estatuto Básico del Empleado Público, quienes se encuentren en la situación de excedencia voluntaria por interés particular:",
        opciones: [
            "No devengarán retribuciones, ni les será computable el tiempo que permanezcan en tal situación a efectos de ascensos, trienios y derechos en el régimen de Seguridad Social que les sea de aplicación.",
            "No devengarán retribuciones, pero les será computable el tiempo de permanencia a efectos de trienios, carrera y derechos en el régimen de Seguridad Social que sea de aplicación.",
            "Devengarán retribuciones y les será computable el tiempo de permanencia a efectos de trienios, carrera y derechos en el régimen de Seguridad Social que sea de aplicación."
        ],
        respuestaCorrecta: "No devengarán retribuciones, ni les será computable el tiempo que permanezcan en tal situación a efectos de ascensos, trienios y derechos en el régimen de Seguridad Social que les sea de aplicación."
    },
    {
        pregunta: "Según la Ley de Prevención de Riesgos Laborales, los Delegados de Prevención serán:",
        opciones: [
            "Designados por y entre los representantes de los trabajadores.",
            "Designados por la empresa para dicha ocupación.",
            "Trabajadores fijos de la empresa."
        ],
        respuestaCorrecta: "Designados por y entre los representantes de los trabajadores."
    },
    {
        pregunta: "Los principios de la acción preventiva por parte del empresario NO incluyen:",
        opciones: [
            "Adoptar medidas que antepongan la protección individual a la colectiva.",
            "Adaptar el trabajo a la persona.",
            "Evaluar los riesgos que no se puedan evitar."
        ],
        respuestaCorrecta: "Adoptar medidas que antepongan la protección individual a la colectiva."
    },
    {
        pregunta: "Según el artículo 29 de la Ley de Prevención de Riesgos Laborales, es obligación del trabajador:",
        opciones: [
            "Proveerse de los medios y equipos de protección necesarios para su seguridad.",
            "Cooperar con el empresario para que este pueda garantizar unas condiciones de trabajo que sean seguras.",
            "No existen obligaciones de los trabajadores, estas son del empresario."
        ],
        respuestaCorrecta: "Cooperar con el empresario para que este pueda garantizar unas condiciones de trabajo que sean seguras."
    },
    {
        pregunta: "Según el artículo 7.3 de la Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, el acoso sexual y el acoso por razón de sexo se considerarán discriminatorios:",
        opciones: [ "En todo caso.", "Solamente cuando sean directos.", "Solamente cuando sean indirectos." ],
        respuestaCorrecta: "En todo caso."
    },
    {
        pregunta: "Conforme dispone el artículo 6 de la Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, se considera discriminación directa por razón de sexo:",
        opciones: [
            "La situación en que se encuentra una persona que pudiera ser tratada, en atención a su sexo, de manera menos favorable que otra en situación comparable.",
            "La práctica aparentemente neutra que pone a personas de un sexo en desventaja particular con respecto a personas del otro, salvo una justificación objetiva.",
            "La situación en que se encuentra una persona que sea tratada, en atención a su sexo, de manera claramente desfavorable que otra en situación distinta."
        ],
        respuestaCorrecta: "La situación en que se encuentra una persona que pudiera ser tratada, en atención a su sexo, de manera menos favorable que otra en situación comparable."
    },
    {
        pregunta: "De conformidad con el artículo 30 de la Ley Orgánica 1/2004, de 28 de diciembre, de Medidas de Protección Integral contra la Violencia de Género, las tareas de asesoramiento, evaluación, etc., corresponderán:",
        opciones: [
            "Al Ministerio de Igualdad.",
            "A los Juzgados de Violencia sobre la Mujer.",
            "Al Observatorio Estatal de Violencia sobre la Mujer."
        ],
        respuestaCorrecta: "Al Observatorio Estatal de Violencia sobre la Mujer."
    },
    {
        pregunta: "Según el artículo 26 de la Ley 39/2006, de 14 de diciembre, de Promoción de la Autonomía Personal y Atención a las personas en situación de dependencia, ¿cuántos grados de dependencia existen?:",
        opciones: [
            "Tres, dependencia moderada, dependencia severa y dependencia absoluta.",
            "Dos, dependencia severa y gran dependencia.",
            "Tres, dependencia moderada, dependencia severa y gran dependencia."
        ],
        respuestaCorrecta: "Tres, dependencia moderada, dependencia severa y gran dependencia."
    },
    {
        pregunta: "El artículo 2 de la Ley 39/2006, de 14 de diciembre, de Promoción de la Autonomía Personal y atención a las personas en situación de dependencia, define “necesidades de apoyo para la autonomía personal” como:",
        opciones: [
            "Las que requieren las personas que tienen discapacidad intelectual o mental para hacer efectivo un grado satisfactorio de autonomía personal en el seno de la comunidad.",
            "Las que requieren las personas que tienen una discapacidad física para hacer efectivo un grado satisfactorio de autonomía personal en el seno de la comunidad.",
            "Las que requieren las personas que no pueden realizar las actividades básicas de la vida diaria."
        ],
        respuestaCorrecta: "Las que requieren las personas que tienen discapacidad intelectual o mental para hacer efectivo un grado satisfactorio de autonomía personal en el seno de la comunidad."
    },
    {
        pregunta: "Según el artículo 14.1 de la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno, el derecho de acceso podrá ser limitado cuando acceder a la información suponga un perjuicio para:",
        opciones: [ "La protección de la infancia.", "La política de la Unión Europea.", "La protección del medio ambiente." ],
        respuestaCorrecta: "La protección de la infancia."
    },

    // SEGUNDA SERIE DE PREGUNTAS (40 PREGUNTAS)
    {
        pregunta: "¿Cuál de las siguientes afirmaciones describe el concepto de \"Estado social y democrático de Derecho\" según la Constitución Española?",
        opciones: [
            "A) El poder del Estado es absoluto y no está sujeto a control judicial.",
            "B) El Estado garantiza la protección social de los ciudadanos, pero no la igualdad.",
            "C) El Estado se organiza para garantizar el bienestar de los ciudadanos respetando sus derechos.",
            "D) El Estado permite la discriminación si se justifica por motivos económicos."
        ],
        respuestaCorrecta: "C) El Estado se organiza para garantizar el bienestar de los ciudadanos respetando sus derechos."
    },
    {
        pregunta: "Cuál de los siguientes se consideran valores superiores según el artículo 1.1 de la Constitución Española:",
        opciones: [
            "A) La libertad",
            "B) La justicia y la igualdad",
            "C) El pluralismo político",
            "D) Todas las respuestas anteriores son correctas"
        ],
        respuestaCorrecta: "D) Todas las respuestas anteriores son correctas"
    },
    {
        pregunta: "De conformidad con el artículo 31 de la Constitución Española Todos contribuirán al sostenimiento de los gastos públicos de acuerdo con su capacidad económica mediante un sistema tributario justo inspirado en los principios de:",
        opciones: [
            "A) Igualdad y equidad que, en ningún caso, tendrá alcance confiscatorio.",
            "B) Igualdad y proporcionalidad que, en ningún caso, tendrá alcance confiscatorio.",
            "C) Igualdad y progresividad que, en ningún caso, tendrá alcance confiscatorio.",
            "D) Igualdad, progresividad y proporcionalidad que, en ningún caso, tendrá alcance confiscatorio."
        ],
        respuestaCorrecta: "C) Igualdad y progresividad que, en ningún caso, tendrá alcance confiscatorio."
    },
    {
        pregunta: "De acuerdo con el artículo 3 de la Ley 7/1985, de 2 de abril, Reguladora de las Bases del Régimen Local, ¿cuál de las siguientes NO es considerada una Entidad Local Territorial?",
        opciones: [ "A) La Provincia.", "B) La Comunidad Autónoma.", "C) El Municipio.", "D) La Comarca." ],
        respuestaCorrecta: "B) La Comunidad Autónoma."
    },
    {
        pregunta: "De acuerdo con la Constitución Española, ¿cómo se organiza territorialmente el Estado en relación con las entidades administrativas reconocidas?",
        opciones: [
            "A) En Municipios, Comarcas y Comunidades Autónomas, conforme a las divisiones tradicionales y estatutarias.",
            "B) En Municipios, Provincias y Comunidades Autónomas, como establece el marco constitucional y estatutario vigente.",
            "C) En Comarcas, Provincias, Ciudades y Comunidades Autónomas, atendiendo a las competencias delegadas.",
            "D) En Municipios, Ciudades Autónomas y Comunidades Autónomas, según las especificidades recogidas para Ceuta y Melilla."
        ],
        respuestaCorrecta: "B) En Municipios, Provincias y Comunidades Autónomas, como establece el marco constitucional y estatutario vigente."
    },
    {
        pregunta: "¿De quién es la competencia para conocer de los conflictos de competencia entre el Estado y las Comunidades Autónomas o de los conflictos de las Comunidades Autónomas entre sí?:",
        opciones: [ "A) Del Congreso de los Diputados.", "B) Del Tribunal Constitucional.", "C) Del Senado.", "D) De la Cámara." ],
        respuestaCorrecta: "B) Del Tribunal Constitucional."
    },
    {
        pregunta: "La adopción obligatoria de medidas por parte de las Comunidades Autónomas para que éstas cumplan con sus obligaciones constitucionales de acuerdo con el artículo 155 de la Constitución Española requiere de:",
        opciones: [
            "A) Autorización por mayoría absoluta del Congreso de los Diputados",
            "B) Aprobación por la mayoría absoluta del Senado",
            "C) Aprobación por mayoría simple de ambas Cámaras",
            "D) Aprobación por mayoría simple del Senado"
        ],
        respuestaCorrecta: "B) Aprobación por la mayoría absoluta del Senado"
    },
    {
        pregunta: "¿Cuál es la principal función del Presidente del Gobierno según la Constitución Española?",
        opciones: [
            "A) Dirigir la política exterior y ser responsable de la defensa del país.",
            "B) Nombrar a los ministros y coordinar la acción del Gobierno.",
            "C) Elaborar las leyes junto con las Cortes Generales.",
            "D) Ejercer la potestad judicial en ausencia del Rey."
        ],
        respuestaCorrecta: "B) Nombrar a los ministros y coordinar la acción del Gobierno."
    },
    {
        pregunta: "¿Qué organismo del Gobierno tiene la potestad de coordinar y dirigir la política general de la Administración del Estado?",
        opciones: [ "A) El Parlamento.", "B) El Consejo de Ministros.", "C) El Tribunal Supremo.", "D) La Secretaría de Estado." ],
        respuestaCorrecta: "B) El Consejo de Ministros."
    },
    {
        pregunta: "De acuerdo con la normativa vigente sobre la Conferencia de Presidentes, ¿cuál de los siguientes NO forma parte de su composición?",
        opciones: [
            "A) Los Ministros que integran el Consejo de Ministros del Gobierno.",
            "B) El Presidente del Gobierno en calidad de máxima autoridad del Poder Ejecutivo.",
            "C) Los Presidentes de las Comunidades Autónomas con competencias estatutarias propias.",
            "D) Los Presidentes de las Ciudades Autónomas de Ceuta y Melilla, en su condición de máximos representantes de dichos territorios."
        ],
        respuestaCorrecta: "A) Los Ministros que integran el Consejo de Ministros del Gobierno."
    },
    {
        pregunta: "¿Cuál de las siguientes afirmaciones describe adecuadamente el papel del Gobierno en el sistema político español?",
        opciones: [
            "A) El Gobierno es el encargado de elaborar las leyes, pero no de ejecutarlas.",
            "B) El Gobierno es el responsable de la dirección de la política interior y exterior, así como de la administración pública.",
            "C) El Gobierno sólo ejerce funciones en materia económica y de defensa.",
            "D) El Gobierno es responsable de la elección del Presidente del Tribunal Constitucional."
        ],
        respuestaCorrecta: "B) El Gobierno es el responsable de la dirección de la política interior y exterior, así como de la administración pública."
    },
    {
        pregunta: "¿Cuál de las siguientes funciones corresponde a los Secretarios de Estado en la Administración General del Estado?",
        opciones: [
            "A) Proponer y coordinar la política gubernamental en su área de responsabilidad.",
            "B) Supervisar los tribunales administrativos.",
            "C) Dirigir el Congreso de los Diputados.",
            "D) Gestionar las relaciones exteriores de España."
        ],
        respuestaCorrecta: "A) Proponer y coordinar la política gubernamental en su área de responsabilidad."
    },
    {
        pregunta: "Según el artículo 55 de la Ley 40/2015, de 1 de octubre, de Régimen del Sector Público que regula la estructura de la Administración General del Estado, en la organización central son órganos superiores:",
        opciones: [
            "A) los Ministros y los Secretarios de Estado.",
            "B) los Subsecretarios y Secretarios generales.",
            "C) los Secretarios generales técnicos y Directores generales.",
            "D) los Subdirectores generales."
        ],
        respuestaCorrecta: "A) los Ministros y los Secretarios de Estado."
    },
    {
        pregunta: "Según el artículo 115 de la Constitución Española el Presidente del Gobierno, podrá proponer la disolución de las Cortes Generales. Sin embargo, no podrá ejercer esta potestad:",
        opciones: [
            "A) Cuando esté en trámite una moción de censura.",
            "B) Hasta que transcurra un año desde la anterior disolución.",
            "C) Mientras estén declarados algunos de los estados de alarma, excepción y sitio.",
            "D) Todas las anteriores son correctas."
        ],
        respuestaCorrecta: "D) Todas las anteriores son correctas."
    },
    {
        pregunta: "De conformidad con el artículo 97 de la Constitución Española de 1978, el Gobierno:",
        opciones: [
            "A) Dirige la política interior y exterior, la Administración civil y militar y la defensa del Estado. Ejerce la función ejecutiva y la potestad reglamentaria de acuerdo con la Constitución y las leyes.",
            "B) Acredita a los embajadores y otros representantes diplomáticos. Los representantes extranjeros en España están acreditados ante él.",
            "C) Manifiesta el consentimiento del Estado para obligarse internacionalmente por medio de tratados, de conformidad con la Constitución y las leyes.",
            "D) Le corresponde, previa autorización de las Cortes Generales, declarar la guerra y hacer la paz."
        ],
        respuestaCorrecta: "A) Dirige la política interior y exterior, la Administración civil y militar y la defensa del Estado. Ejerce la función ejecutiva y la potestad reglamentaria de acuerdo con la Constitución y las leyes."
    },
    {
        pregunta: "De acuerdo con el artículo 100 de la Constitución Española, ¿quién nombra a los Ministros?",
        opciones: [ "A) El Presidente del Gobierno.", "B) El Presidente del Congreso.", "C) La Comisión de Nombramientos de las Cortes Generales.", "D) El Rey." ],
        respuestaCorrecta: "D) El Rey."
    },
    {
        pregunta: "De acuerdo con el texto refundido de la Ley del Estatuto Básico del Empleado Público, ¿cuál de las siguientes afirmaciones sobre los derechos del personal funcionario es correcta?",
        opciones: [
            "A) El derecho a la negociación colectiva se limita exclusivamente al personal laboral.",
            "B) Los funcionarios tienen derecho a un sistema objetivo de carrera profesional basado en los principios de igualdad, mérito y capacidad.",
            "C) Los funcionarios no tienen derecho a recibir formación continua, sólo aquellos con funciones directivas.",
            "D) El personal funcionario no tiene derecho a la jubilación anticipada."
        ],
        respuestaCorrecta: "B) Los funcionarios tienen derecho a un sistema objetivo de carrera profesional basado en los principios de igualdad, mérito y capacidad."
    },
    {
        pregunta: "Según lo dispuesto en el artículo 15 del texto refundido de la Ley del Estatuto Básico del Empleado Público, de los siguientes derechos de los empleados públicos indique los que se ejercen de forma colectiva:",
        opciones: [
            "A) Libertad sindical y libre asociación profesional.",
            "B) Huelga y protección eficaz en materia de seguridad y salud en el trabajo.",
            "C) Libertad sindical y huelga.",
            "D) Libertad sindical y prevención de riesgos laborales."
        ],
        respuestaCorrecta: "C) Libertad sindical y huelga."
    },
    {
        pregunta: "El artículo 14 de la Ley del Estatuto Básico del Empleado Público, reconoce el derecho de los empleados públicos a la formación continua y a la actualización permanente de sus conocimientos y capacidades profesionales:",
        opciones: [ "A) Preferentemente en horario laboral.", "B) Siempre en horario laboral.", "C) Preferentemente fuera del horario laboral.", "D) Siempre fuera del horario laboral." ],
        respuestaCorrecta: "A) Preferentemente en horario laboral."
    },
    {
        pregunta: "De acuerdo con el artículo 47 bis del texto refundido de la Ley del Estatuto Básico del Empleado Público, la prestación del servicio mediante teletrabajo:",
        opciones: [
            "A) Responderá a un porcentaje determinado de acuerdo con el número de empleados públicos de la unidad administrativa.",
            "B) Habrá de ser expresamente autorizada y será compatible con la modalidad presencial.",
            "C) Tendrá carácter forzoso de acuerdo con los criterios que se establezcan para su desarrollo.",
            "D) Como regla general, podrá suponer como máximo hasta el cincuenta por ciento de la jornada laboral en términos semanales."
        ],
        respuestaCorrecta: "B) Habrá de ser expresamente autorizada y será compatible con la modalidad presencial."
    },
    {
        pregunta: "Son funcionarios de carrera:",
        opciones: [
            "A) Quienes por razones expresamente justificadas de necesidad y urgencia, son nombrados como tales con carácter temporal...",
            "B) Quienes en virtud de contrato de trabajo formalizado por escrito... presta servicios retribuidos por las Administraciones Públicas.",
            "C) Quienes, en virtud de nombramiento legal, están vinculados a una Administración Pública por una relación estatutaria regulada por el Derecho Administrativo para el desempeño de servicios profesionales retribuidos de carácter permanente.",
            "D) Quienes en virtud de nombramiento y con carácter no permanente, sólo realiza funciones expresamente calificadas como de confianza o asesoramiento especial."
        ],
        respuestaCorrecta: "C) Quienes, en virtud de nombramiento legal, están vinculados a una Administración Pública por una relación estatutaria regulada por el Derecho Administrativo para el desempeño de servicios profesionales retribuidos de carácter permanente."
    },
    {
        pregunta: "¿Cuál es el órgano competente para la selección del personal funcionario en las Administraciones Públicas?",
        opciones: [ "A) El Tribunal Constitucional.", "B) La Comisión de Igualdad y Selección.", "C) El Ministerio de Trabajo y Economía Social.", "D) El órgano que tenga atribuida la competencia en cada administración pública según la normativa vigente." ],
        respuestaCorrecta: "D) El órgano que tenga atribuida la competencia en cada administración pública según la normativa vigente."
    },
    {
        pregunta: "Conforme a la normativa aplicable al personal laboral que presta servicio en las Administraciones Públicas, ¿cuál de las siguientes opciones describe correctamente las modalidades contractuales?",
        opciones: [
            "A) En función de la duración del contrato, este podrá adoptar las formas de contrato fijo, por tiempo indefinido o temporal, según las necesidades del servicio.",
            "B) El personal laboral se vincula a la Administración mediante la formalización de un contrato de trabajo por escrito, con carácter indefinido...",
            "C) La relación laboral se establece a través de un contrato de trabajo, ya sea verbal o por escrito...",
            "D) El contrato laboral del personal al servicio de la Administración es exclusivamente temporal y debe formalizarse siempre por escrito..."
        ],
        respuestaCorrecta: "A) En función de la duración del contrato, este podrá adoptar las formas de contrato fijo, por tiempo indefinido o temporal, según las necesidades del servicio."
    },
    {
        pregunta: "¿Cuál de las siguientes es una diferencia clave entre el personal funcionario y el personal laboral al servicio de la Administración Pública?",
        opciones: [
            "A) El personal laboral no puede desempeñar funciones directivas en la administración.",
            "B) El personal funcionario está vinculado por una relación contractual y el personal laboral por una relación estatutaria.",
            "C) El personal laboral está sometido al Derecho Laboral, mientras que el personal funcionario se rige por el Derecho Administrativo.",
            "D) El personal funcionario tiene derecho a una indemnización por despido improcedente, mientras que el personal laboral no."
        ],
        respuestaCorrecta: "C) El personal laboral está sometido al Derecho Laboral, mientras que el personal funcionario se rige por el Derecho Administrativo."
    },
    {
        pregunta: "La Comisión Paritaria del personal laboral de la Administración General del Estado está formada por:",
        opciones: [ "A) Quince personas en representación de cada una de las partes.", "B) Diez personas en representación de cada una de las partes.", "C) Ocho personas en representación de cada una de las partes.", "D) Veinte personas en representación de cada una de las partes." ],
        respuestaCorrecta: "A) Quince personas en representación de cada una de las partes."
    },
    {
        pregunta: "NO serán objeto de negociación, en su ámbito respectivo y en relación con las competencias de cada Administración Pública, las materias siguientes:",
        opciones: [
            "A) La aplicación del incremento de las retribuciones del personal al servicio de las Administraciones Públicas...",
            "B) La determinación y aplicación de las retribuciones complementarias de los funcionarios.",
            "C) Los criterios generales de los planes y fondos para la formación y la promoción interna.",
            "D) Las decisiones de las Administraciones Públicas que afecten a sus potestades de organización."
        ],
        respuestaCorrecta: "D) Las decisiones de las Administraciones Públicas que afecten a sus potestades de organización."
    },
    {
        pregunta: "¿Cuál de las siguientes afirmaciones describe correctamente una modalidad de contrato de trabajo en la Administración Pública?",
        opciones: [
            "A) Los contratos de trabajo en la Administración Pública son siempre indefinidos y a jornada completa.",
            "B) Los contratos de trabajo pueden ser de carácter fijo, temporal o de formación, dependiendo de las necesidades de la Administración.",
            "C) En la Administración Pública, no se pueden realizar contratos temporales.",
            "D) La Administración Pública solo puede contratar a personal de forma indefinida."
        ],
        respuestaCorrecta: "B) Los contratos de trabajo pueden ser de carácter fijo, temporal o de formación, dependiendo de las necesidades de la Administración."
    },
    {
        pregunta: "¿Cuál de las siguientes es una causa legalmente establecida para extinción del contrato del personal laboral en la Administración Pública?",
        opciones: [ "A) La incapacidad temporal prolongada por más de seis meses.", "B) La huelga legal del trabajador.", "C) El rechazo a las órdenes directas del supervisor.", "D) La falta de formación suficiente para realizar el puesto." ],
        respuestaCorrecta: "C) El rechazo a las órdenes directas del supervisor."
    },
    {
        pregunta: "En la Administración Pública, ¿cuál de las siguientes afirmaciones sobre el contrato de trabajo temporal es correcta?",
        opciones: [
            "A) Los contratos temporales solo pueden realizarse para proyectos de más de 5 años.",
            "B) Los contratos temporales pueden ser renovados de forma indefinida, sin límite de tiempo.",
            "C) Los contratos temporales solo pueden ser utilizados para necesidades permanentes.",
            "D) Los contratos temporales deben tener una causa justificada y estar sujetos a una duración determinada."
        ],
        respuestaCorrecta: "D) Los contratos temporales deben tener una causa justificada y estar sujetos a una duración determinada."
    },
    {
        pregunta: "¿Qué derechos tienen los trabajadores del sector público en relación con la sindicación?",
        opciones: [
            "A) No tienen derecho a sindicarse.",
            "B) Tienen derecho a sindicarse en cualquier momento, pero solo pueden pertenecer a sindicatos oficiales.",
            "C) Tienen derecho a sindicarse y a participar en la actividad sindical sin que esto afecte a su relación laboral.",
            "D) Tienen derecho a sindicarse, pero deben hacerlo únicamente dentro de sus horas laborales."
        ],
        respuestaCorrecta: "C) Tienen derecho a sindicarse y a participar en la actividad sindical sin que esto afecte a su relación laboral."
    },
    {
        pregunta: "Señale la afirmación correcta en relación con el despido disciplinario:",
        opciones: [
            "A) El despido disciplinario no comportará la inhabilitación para ser titular de un nuevo contrato de trabajo...",
            "B) El despido disciplinario comportará además la inhabilitación para ser titular de un nuevo contrato de trabajo en la misma categoría profesional o en otra con funciones similares a las que se desempeñaban.",
            "C) El despido disciplinario comportará además la inhabilitación para ser titular de un nuevo contrato de trabajo en diferente categoría profesional...",
            "D) El despido disciplinario comportará además la inhabilitación para ser titular de un nuevo contrato de trabajo en otra Administración Pública."
        ],
        respuestaCorrecta: "B) El despido disciplinario comportará además la inhabilitación para ser titular de un nuevo contrato de trabajo en la misma categoría profesional o en otra con funciones similares a las que se desempeñaban."
    },
    {
        pregunta: "¿Cuál es el objetivo principal de las políticas de igualdad de género en la Administración General del Estado?",
        opciones: [ "A) Aumentar el número de funcionarias.", "B) Promover la igualdad de oportunidades entre mujeres y hombres.", "C) Reducir el presupuesto del Estado.", "D) Facilitar el acceso de las mujeres en altos cargos del Estado." ],
        respuestaCorrecta: "B) Promover la igualdad de oportunidades entre mujeres y hombres."
    },
    {
        pregunta: "¿Qué es un Plan de Igualdad de género?",
        opciones: [
            "A) Un documento que establece normas para la contratación de mujeres en diferentes puestos de trabajo.",
            "B) Un conjunto de acciones para garantizar la igualdad entre géneros en el puesto de trabajo.",
            "C) Un plan para mejorar el uso de recursos en las administraciones públicas.",
            "D) Una estrategia para disminuir la violencia de género."
        ],
        respuestaCorrecta: "B) Un conjunto de acciones para garantizar la igualdad entre géneros en el puesto de trabajo."
    },
    {
        pregunta: "¿Cuál es el principal objetivo del Plan de Igualdad de Género en la Administración General del Estado y sus Organismos Públicos?",
        opciones: [
            "A) Garantizar la paridad en la contratación de hombres y mujeres en todos los niveles jerárquicos.",
            "B) Eliminar las desigualdades salariales y fomentar el acceso de las mujeres a puestos directivos.",
            "C) Promover la igualdad efectiva de género, integrando la perspectiva de género en todas las políticas y procedimientos.",
            "D) Crear nuevas leyes específicas que penalicen la discriminación de género en el ámbito público."
        ],
        respuestaCorrecta: "C) Promover la igualdad efectiva de género, integrando la perspectiva de género en todas las políticas y procedimientos."
    },
    {
        pregunta: "¿Qué establece la Ley 39/2006, de 14 de diciembre, de Promoción de la Autonomía Personal y Atención a las Personas en Situación de Dependencia?",
        opciones: [
            "A) La creación de un sistema único de atención para todas las personas con discapacidad.",
            "B) La promoción de la autonomía personal y la creación de un sistema de atención a la dependencia, garantizando una atención personalizada según las necesidades.",
            "C) El establecimiento de subsidios económicos para las personas con discapacidad sin importar su grado.",
            "D) La obligatoriedad de acceder a servicios residenciales para todas las personas en situación de dependencia."
        ],
        respuestaCorrecta: "B) La promoción de la autonomía personal y la creación de un sistema de atención a la dependencia, garantizando una atención personalizada según las necesidades."
    },
    {
        pregunta: "Según la Ley Orgánica 3/2007, de 22 de marzo, para la Igualdad efectiva de mujeres y hombres:",
        opciones: [
            "A) Se considera discriminación directa por razón de sexo la situación en que una disposición... pone a personas de un sexo en desventaja...",
            "B) Se considera discriminación directa por razón de sexo la situación en que se encuentra una persona que sea, haya sido o pudiera ser tratada, en atención a su sexo, de manera menos favorable que otra en situación comparable.",
            "C) Se considera discriminación directa por razón de sexo, cualquier comportamiento, verbal o físico, de naturaleza sexual...",
            "D) Se considera discriminación directa por razón de sexo cualquier comportamiento realizado en función del sexo de una persona..."
        ],
        respuestaCorrecta: "B) Se considera discriminación directa por razón de sexo la situación en que se encuentra una persona que sea, haya sido o pudiera ser tratada, en atención a su sexo, de manera menos favorable que otra en situación comparable."
    },
    {
        pregunta: "Señales cuál de los siguientes NO es un principio rector de los recogidos en la Ley Orgánica 1/2004, de 28 de diciembre, de Medidas de Protección Integral contra la Violencia de Género:",
        opciones: [
            "A) Fortalecer las medidas de sensibilización ciudadana de prevención...",
            "B) Consagrar derechos de las mujeres víctimas de violencia de género, exigibles ante las Administraciones Públicas...",
            "C) Iniciar un expediente sancionador por informar sobre una situación de acoso sexual.",
            "D) Garantizar derechos económicos para las mujeres víctimas de violencia de género, con el fin de facilitar su integración social."
        ],
        respuestaCorrecta: "C) Iniciar un expediente sancionador por informar sobre una situación de acoso sexual."
    },
    {
        pregunta: "Son titulares de los derechos reconocidos en el Real Decreto Legislativo 1/2013, de 29 de noviembre, por el que se aprueba el Texto Refundido de la Ley General de derechos de las personas con discapacidad y de su inclusión social:",
        opciones: [
            "A) Aquellas que presentan deficiencias físicas, mentales, intelectuales o sensoriales, previsiblemente permanentes...",
            "B) Aquellas que presentan deficiencias únicamente físicas, previsiblemente permanentes...",
            "C) Aquellas que presentan deficiencias físicas, y mentales, previsiblemente permanentes...",
            "D) Aquellas que presentan deficiencias únicamente mentales, previsiblemente permanentes..."
        ],
        respuestaCorrecta: "A) Aquellas que presentan deficiencias físicas, mentales, intelectuales o sensoriales, previsiblemente permanentes que, al interactuar con diversas barreras, puedan impedir su participación plena y efectiva en la sociedad, en igualdad de condiciones con los demás."
    },
    {
        pregunta: "Según indica la Ley 39/2006, de 14 de diciembre, de Promoción de la Autonomía Personal y Atención a las personas en situación de dependencia, la definición del Grado I, dependencia moderada es:",
        opciones: [
            "A) Cuando la persona necesita ayuda... dos o tres veces al día...",
            "B) Cuando la persona necesita ayuda... varias veces al día... y necesita el apoyo indispensable y continuo de otra persona...",
            "C) Cuando la persona necesita ayuda... al menos una vez a la semana.",
            "D) Cuando la persona necesita ayuda para realizar varias actividades básicas de la vida diaria, al menos una vez al día o tiene necesidades de apoyo intermitente o limitado para su autonomía personal."
        ],
        respuestaCorrecta: "D) Cuando la persona necesita ayuda para realizar varias actividades básicas de la vida diaria, al menos una vez al día o tiene necesidades de apoyo intermitente o limitado para su autonomía personal."
    },
    {
        pregunta: "El III Plan para la igualdad de género en la Administración General del Estado y en los Organismos Públicos vinculados o dependientes de ella, se aprobó en:",
        opciones: [ "A) 2019.", "B) 2020.", "C) 2021.", "D) 2022." ],
        respuestaCorrecta: "B) 2020."
    },
       {
        pregunta: "Según el art. 1.2 de la Constitución Española de 1978 (en adelante CE), ¿en quién reside la Soberanía Nacional?",
        opciones: [
            "A) Las Cortes Generales.",
            "B) Las Cortes Generales y el Gobierno.",
            "C) Reside en el pueblo español, del que emanan los poderes del Estado.",
            "D) Únicamente el Gobierno."
        ],
        respuestaCorrecta: "C) Reside en el pueblo español, del que emanan los poderes del Estado."
    },
    {
        pregunta: "Según el art. 10.2 CE, ¿cómo se interpretarán las normas relativas a los derechos fundamentales?",
        opciones: [
            "A) De conformidad con la Declaración Universal de Derechos Humanos exclusivamente.",
            "B) Según el derecho del que se trate.",
            "C) Según se dictamine por el Tribunal Supremo.",
            "D) De conformidad con la Declaración Universal de Derechos Humanos y los tratados y acuerdos internacionales sobre las mismas materias ratificados por España."
        ],
        respuestaCorrecta: "D) De conformidad con la Declaración Universal de Derechos Humanos y los tratados y acuerdos internacionales sobre las mismas materias ratificados por España."
    },
    {
        pregunta: "De acuerdo con el artículo 141.1 CE, la provincia es una entidad:",
        opciones: [
            "A) Local con personalidad jurídica propia, determinada por la agrupación de municipios y división territorial para el cumplimiento de las actividades del Estado.",
            "B) Estatal con personalidad jurídica propia, determinada por la agrupación de municipios y división territorial para el cumplimiento de las actividades del Estado.",
            "C) Local con personalidad jurídica propia, determinada por la agrupación de municipios y división territorial para el cumplimiento de las actividades de la Comunidad Autónoma.",
            "D) Local con personalidad jurídica propia, determinada por la agrupación de municipios y división territorial para el cumplimiento de las actividades de la Diputación Provincial."
        ],
        respuestaCorrecta: "A) Local con personalidad jurídica propia, determinada por la agrupación de municipios y división territorial para el cumplimiento de las actividades del Estado."
    },
    {
        pregunta: "Dentro de los términos de la Constitución Española, los Estatutos serán:",
        opciones: [
            "A) La norma institucional básica de cada Comunidad Autónoma y el Estado no los reconocerá como parte integrante de su ordenamiento jurídico.",
            "B) La norma institucional básica de cada Comunidad Autónoma y el Estado los reconocerá y amparará como parte integrante de su ordenamiento jurídico.",
            "C) Una norma más de cada Comunidad Autónoma y el Estado los reconocerá y amparará como parte integrante del ordenamiento jurídico.",
            "D) Una norma que el Estado los reconocerá."
        ],
        respuestaCorrecta: "B) La norma institucional básica de cada Comunidad Autónoma y el Estado los reconocerá y amparará como parte integrante de su ordenamiento jurídico."
    },
    {
        pregunta: "Las materias sobre las que el Estado tiene competencia exclusiva, vienen recogidas en la Constitución Española de 1978, en que artículo:",
        opciones: [
            "A) 150",
            "B) 148",
            "C) 149.1",
            "D) 149.3"
        ],
        respuestaCorrecta: "C) 149.1"
    },
    {
        pregunta: "Según el artículo 148 de la CE, las Comunidades Autónomas podrán asumir competencias en materia de:",
        opciones: [
            "A) Defensa y Fuerzas Armadas.",
            "B) Régimen aduanero y arancelario; comercio exterior.",
            "C) Ordenación del territorio, urbanismo y vivienda.",
            "D) Hacienda general y Deuda del Estado."
        ],
        respuestaCorrecta: "C) Ordenación del territorio, urbanismo y vivienda."
    },
    {
        pregunta: "Entre los principios de las relaciones interadministrativas que recoge el artículo 140.1 de la Ley 40/2015 de Régimen Jurídico del Sector Público (en adelante LRJSP), se encuentra:",
        opciones: [
            "A) Responsabilidad de una sola administración.",
            "B) Coordinación.",
            "C) Solidaridad intergeneracional.",
            "D) Adecuación al orden de distribución de competencias establecido por los tribunales."
        ],
        respuestaCorrecta: "B) Coordinación."
    },
    {
        pregunta: "¿Quién dirige la Administración civil y militar y la defensa del Estado, según la Ley 50/1997, de 27 de noviembre, Ley del Gobierno (en adelante Ley de Gobierno)?:",
        opciones: [
            "A) Las Fuerzas Armadas.",
            "B) El Congreso de los Diputados.",
            "C) Las Cortes Generales.",
            "D) El Gobierno."
        ],
        respuestaCorrecta: "D) El Gobierno."
    },
    {
        pregunta: "¿Cómo son nombrados y separados los Secretarios de Estado, de acuerdo a lo recogido en el artículo 15 de la Ley del Gobierno?",
        opciones: [
            "A) Por Real Decreto del Presidente del Gobierno.",
            "B) Por Real Decreto del Consejo de Ministros.",
            "C) Por Orden Ministerial, previo conocimiento del Consejo de Ministros.",
            "D) Por el Rey, a propuesta del Presidente del Gobierno."
        ],
        respuestaCorrecta: "B) Por Real Decreto del Consejo de Ministros."
    },
    {
        pregunta: "El artículo 21 de la Ley del Gobierno, establece una serie de facultades que no podrá ejercer el Presidente del Gobierno en funciones. De las indicadas, ¿cuál es INCORRECTA?",
        opciones: [
            "A) Aprobar el Proyecto de Ley de Presupuestos Generales del Estado.",
            "B) Proponer al Rey la disolución de alguna de las Cámaras, o de las Cortes Generales.",
            "C) Plantear la cuestión de confianza.",
            "D) Proponer al Rey la convocatoria de un referéndum consultivo."
        ],
        respuestaCorrecta: "A) Aprobar el Proyecto de Ley de Presupuestos Generales del Estado."
    },
    {
        pregunta: "Según el artículo 56 de la LRJSP, los elementos organizativos básicos de las estructuras orgánicas son:",
        opciones: [
            "A) Los órganos administrativos.",
            "B) Las unidades de servicios integrados.",
            "C) Las unidades administrativas.",
            "D) Las unidades de servicios comunes."
        ],
        respuestaCorrecta: "C) Las unidades administrativas."
    },
    {
        pregunta: "¿Cuál de los siguientes NO es un principio que las Administraciones Públicas deban respetar en su actuación y relaciones, según el artículo 3.1 LRJSP?",
        opciones: [
            "A) Eficacia en el cumplimiento de los objetivos fijados.",
            "B) Participación, subjetividad y transparencia de la actuación administrativa.",
            "C) Buena fe, confianza legítima y lealtad institucional.",
            "D) Servicio efectivo a los ciudadanos."
        ],
        respuestaCorrecta: "B) Participación, subjetividad y transparencia de la actuación administrativa."
    },
    {
        pregunta: "Señale cómo se clasifican los empleados públicos de acuerdo con el Real Decreto Legislativo 5/2015, de 30 de octubre, por el que se aprueba el Texto Refundido de la Ley del Estatuto Básico del Empleado Público (en adelante TREBEP):",
        opciones: [
            "A) Funcionarios de carrera, funcionarios interinos, personal laboral y personal eventual.",
            "B) Funcionarios de carrera, personal laboral y personal estatutario.",
            "C) Funcionarios de carrera, funcionarios interinos y personal estatutario.",
            "D) Funcionarios de carrera, funcionarios interinos, personal laboral, personal eventual y personal estatutario."
        ],
        respuestaCorrecta: "A) Funcionarios de carrera, funcionarios interinos, personal laboral y personal eventual."
    },
    {
        pregunta: "Según regula el TREBEP, por ser preciso atender el cuidado de un familiar de primer grado, por razones de enfermedad muy grave, el funcionario tendrá derecho a solicitar:",
        opciones: [
            "A) Una reducción de hasta el cincuenta por ciento de la jornada laboral, con la correspondiente reducción proporcional de retribuciones, por el plazo máximo de un mes.",
            "B) Una reducción de hasta el cincuenta por ciento de la jornada laboral, con la correspondiente reducción proporcional de retribuciones, por el plazo máximo de tres meses.",
            "C) Una reducción de hasta el cincuenta por ciento de la jornada laboral, con carácter retribuido, por el plazo máximo de un mes.",
            "D) Una reducción de hasta el cincuenta por ciento de la jornada laboral, con carácter retribuido, por el plazo máximo de tres meses."
        ],
        respuestaCorrecta: "C) Una reducción de hasta el cincuenta por ciento de la jornada laboral, con carácter retribuido, por el plazo máximo de un mes."
    },
    {
        pregunta: "De conformidad con el TREBEP, la prestación del servicio mediante teletrabajo, en general, tendrá carácter:",
        opciones: [
            "A) Obligatorio.",
            "B) Irreversible.",
            "C) Voluntario y reversible.",
            "D) Voluntario e irreversible."
        ],
        respuestaCorrecta: "C) Voluntario y reversible."
    },
    {
        pregunta: "Según el TREBEP, si fuera necesario el desplazamiento previo de los progenitores al país de origen del adoptado, en los casos de adopción internacional, se tendrá derecho, además de al permiso ordinario por adopción, a un permiso de:",
        opciones: [
            "A) Hasta dos meses de duración, percibiendo durante este periodo exclusivamente las retribuciones básicas.",
            "B) Hasta cuatro semanas de duración, percibiendo durante este periodo exclusivamente las retribuciones básicas.",
            "C) Hasta dos semanas de duración, percibiendo durante este periodo exclusivamente las retribuciones básicas.",
            "D) Hasta cuatro meses de duración, percibiendo durante este periodo exclusivamente las retribuciones básicas."
        ],
        respuestaCorrecta: "A) Hasta dos meses de duración, percibiendo durante este periodo exclusivamente las retribuciones básicas."
    },
    {
        pregunta: "De conformidad con el TREBEP, por fallecimiento, accidente o enfermedad grave, hospitalización o intervención quirúrgica sin hospitalización que precise de reposo domiciliario de un familiar, el funcionario tiene derecho a un permiso de:",
        opciones: [
            "A) Tres días hábiles cuando se trate de un familiar dentro del segundo grado de consanguinidad o afinidad y el suceso se produzca en la misma localidad.",
            "B) Cuatro días hábiles cuando se trata de un familiar dentro del segundo grado de consanguinidad.",
            "C) Cinco días hábiles cuando se trate de un familiar dentro del segundo grado de consanguinidad o afinidad y el suceso se produzca en distinta localidad.",
            "D) Dos días hábiles cuando se trate de un familiar dentro del segundo grado de consanguinidad o afinidad y el suceso se produzca en la misma localidad."
        ],
        respuestaCorrecta: "D) Dos días hábiles cuando se trate de un familiar dentro del segundo grado de consanguinidad o afinidad y el suceso se produzca en la misma localidad."
    },
    {
        pregunta: "Según el art. 13 de la Ley 53/1984, de 26 de diciembre, de Incompatibilidades del personal al servicio de las Administraciones Públicas: \"No podrá reconocerse compatibilidad alguna para actividades privadas a quienes se les hubiere autorizado la compatibilidad para\":",
        opciones: [
            "A) Un segundo puesto o actividad públicos, siempre que la suma de jornadas de ambos sea igual o superior a la máxima en las Administraciones Públicas.",
            "B) Un tercer puesto o actividad públicos, siempre que la suma de jornadas de ambos sea igual o superior a la máxima en las Administraciones Públicas.",
            "C) Un segundo puesto o actividad públicos, siempre que la suma de jornadas de ambos sea igual o inferior a la máxima en las Administraciones Públicas.",
            "D) No se reconoce, en ningún caso, compatibilidad alguna."
        ],
        respuestaCorrecta: "A) Un segundo puesto o actividad públicos, siempre que la suma de jornadas de ambos sea igual o superior a la máxima en las Administraciones Públicas."
    },
    {
        pregunta: "De acuerdo con el artículo catorce de la Ley 53/1984, de 26 de diciembre, de Incompatibilidades del personal al servicio de las Administraciones Públicas, la resolución motivada reconociendo la compatibilidad o declarando la incompatibilidad, se dictará en el plazo de:",
        opciones: [
            "A) Tres semanas.",
            "B) Dos semanas.",
            "C) Dos meses.",
            "D) 20 días."
        ],
        respuestaCorrecta: "C) Dos meses."
    },
    {
        pregunta: "De acuerdo con el TREBEP, los puestos de trabajo en la Administración se proveerán mediante procedimientos basados en los principios de:",
        opciones: [
            "A) Libertad, igualdad y publicidad.",
            "B) Igualdad, transparencia y paridad.",
            "C) Capacidad, publicidad y mérito.",
            "D) Igualdad, mérito, capacidad y publicidad."
        ],
        respuestaCorrecta: "D) Igualdad, mérito, capacidad y publicidad."
    },
    {
        pregunta: "De acuerdo con el artículo 70 TREBEP, la Oferta de Empleo Público recoge:",
        opciones: [
            "A) Las necesidades de material para llevar a cabo el correcto trabajo en la Administración Pública.",
            "B) Las necesidades de recursos humanos, con asignación presupuestaria, que deban proveerse mediante la incorporación de personal laboral.",
            "C) Las necesidades de recursos humanos, con asignación presupuestaria, que deban proveerse mediante la incorporación de personal de nuevo ingreso.",
            "D) Los puestos disponibles en las distintas Administraciones Públicas."
        ],
        respuestaCorrecta: "C) Las necesidades de recursos humanos, con asignación presupuestaria, que deban proveerse mediante la incorporación de personal de nuevo ingreso."
    },
    {
        pregunta: "Qué organizaciones sindicales están representadas en las Subcomisiones Paritarias de los Ministerios, según el IV Convenio colectivo único para el personal laboral de la Administración General del Estado (en adelante CUAGE):",
        opciones: [
            "A) Las organizaciones sindicales con representación en el Comité de Empresa de los Ministerios.",
            "B) Las organizaciones sindicales firmantes del IV Convenio Único para el personal laboral de la Administración General del Estado.",
            "C) Las organizaciones sindicales con representación a nivel nacional dentro de la Administración General del Estado.",
            "D) Las organizaciones sindicales con mayor número de representantes en el Comité de Empresa del Ministerio."
        ],
        respuestaCorrecta: "B) Las organizaciones sindicales firmantes del IV Convenio Único para el personal laboral de la Administración General del Estado."
    },
    {
        pregunta: "De conformidad con el CUAGE, ¿qué órgano de seguimiento y aplicación del convenio tiene competencias para aprobar la creación o modificación de especialidades?",
        opciones: [
            "A) La Comisión Paritaria.",
            "B) La Comisión Negociadora.",
            "C) La Subcomisión Paritaria en el ámbito de cada Ministerio.",
            "D) El Ministerio de Educación, Formación Profesional y Deportes."
        ],
        respuestaCorrecta: "A) La Comisión Paritaria."
    },
    {
        pregunta: "¿Cuántas personas constituyen la Comisión Paritaria, según regula el CUAGE?",
        opciones: [
            "A) Quince personas.",
            "B) Quince personas, en representación de cada una de las partes.",
            "C) Quince personas, ocho en representación de la Administración y siete en representación de la parte social.",
            "D) Treinta personas, catorce en representación de la parte social, quince en representación de la parte social y el Presidente de la Comisión Paritaria sin voto."
        ],
        respuestaCorrecta: "B) Quince personas, en representación de cada una de las partes."
    },
    {
        pregunta: "Tal como regula el CUAGE, las aptitudes profesionales, las titulaciones académicas y el contenido general de la prestación laboral determina:",
        opciones: [
            "A) La especialidad.",
            "B) La familia profesional.",
            "C) El grupo profesional.",
            "D) El área funcional."
        ],
        respuestaCorrecta: "C) El grupo profesional."
    },
    {
        pregunta: "¿Qué estructura de clasificación profesional se establece en el IV Convenio Único para el personal laboral de la Administración General del Estado?",
        opciones: [
            "A) Grupo profesional y especialidad.",
            "B) Grupo profesional, familia profesional y/o especialidad.",
            "C) Grupo profesional y familia profesional.",
            "D) Grupo profesional y área funcional."
        ],
        respuestaCorrecta: "B) Grupo profesional, familia profesional y/o especialidad."
    },
    {
        pregunta: "En relación con los supuestos de suspensión del contrato de trabajo para personal laboral fijo contemplados en el artículo 94 del CUAGE, indique la respuesta FALSA:",
        opciones: [
            "A) El trabajador o trabajadora deberá solicitar su reincorporación a la Administración en el plazo de un mes desde la finalización de la situación que dio origen a la suspensión del contrato de trabajo.",
            "B) La reincorporación se realizará a un puesto de trabajo de su mismo grupo, familia profesional y/o especialidad, en el mismo Departamento u organismo y en la localidad de su puesto de origen.",
            "C) Hasta que se haga efectiva su incorporación a un puesto de trabajo mantendrá la situación de suspensión regulada en este artículo.",
            "D) Si el trabajador o trabajadora fijos no solicitaran la reincorporación a la Administración se procederá de oficio a declararles en excedencia voluntaria por interés particular con un periodo mínimo de permanencia de un año."
        ],
        respuestaCorrecta: "D) Si el trabajador o trabajadora fijos no solicitaran la reincorporación a la Administración se procederá de oficio a declararles en excedencia voluntaria por interés particular con un periodo mínimo de permanencia de un año."
    },
    {
        pregunta: "Según el artículo 27.2 del CUAGE, los puestos de trabajo vacantes de personal laboral cuya cobertura sea necesaria, de acuerdo con la planificación de recursos humanos de la organización, NO se proveerán:",
        opciones: [
            "A) Mediante concurso abierto y permanente.",
            "B) Mediante libre designación.",
            "C) Mediante promoción profesional.",
            "D) Mediante ingreso libre."
        ],
        respuestaCorrecta: "C) Mediante promoción profesional."
    },
    {
        pregunta: "Por la comisión de faltas disciplinarias del personal laboral incluido en el ámbito del IV Convenio Único del Personal Laboral de la AGE se pueden imponer las siguientes sanciones. Indique la FALSA:",
        opciones: [
            "A) Suspensión de empleo y sueldo de tres meses y un día a dos años, para el caso de faltas muy graves.",
            "B) Suspensión de empleo y sueldo por un período de tres días a tres meses, para el caso de faltas graves.",
            "C) Suspensión de empleo y sueldo de hasta dos días, para el caso de faltas leves.",
            "D) No cabe suspensión de empleo y sueldo, para el caso de faltas leves."
        ],
        respuestaCorrecta: "D) No cabe suspensión de empleo y sueldo, para el caso de faltas leves."
    },
    {
        pregunta: "En relación con la extinción del contrato de trabajo, recogida en el artículo 97 CUAGE, señale la respuesta INCORRECTA:",
        opciones: [
            "A) El contrato de trabajo se extinguirá por las causas señaladas al respecto en el texto refundido de la Ley del Estatuto de los Trabajadores y normas de desarrollo y concordantes.",
            "B) En el caso de extinción del contrato de trabajo por despido colectivo fundado en causas económicas, técnicas, organizativas o de producción se priorizará la permanencia del personal en el ámbito del Convenio.",
            "C) El contrato de trabajo se extinguirá por las causas consignadas válidamente en el contrato, aunque las mismas constituyan abuso de derecho manifiesto por parte del empresario.",
            "D) El contrato de trabajo se extinguirá por dimisión del trabajador, debiendo mediar el preaviso que señalen los convenios colectivos o la costumbre del lugar."
        ],
        respuestaCorrecta: "C) El contrato de trabajo se extinguirá por las causas consignadas válidamente en el contrato, aunque las mismas constituyan abuso de derecho manifiesto por parte del empresario."
    },
    {
        pregunta: "Señale la respuesta CORRECTA, teniendo en cuenta lo establecido en el artículo 86 CUAGE, relativo a los derechos e infraestructura de los Comités de Empresa y de los Delegados y Delegadas de Personal:",
        opciones: [
            "A) Los Comités de Empresa dispondrán, en su ámbito, de un local adecuado y apto para desarrollar las actividades propias de su representación, provisto de teléfono y el correspondiente mobiliario y material informático y de oficina, así como la utilización de fotocopiadora.",
            "B) En el desarrollo de su función representativa, las personas que conforman los Comités y Delegados y Delegadas de personal no tendrán derecho a percibir las dietas y gastos de locomoción por la asistencia a reuniones convocadas por la Administración.",
            "C) El tiempo de la asistencia a reuniones convocadas por la Administración se computará a efectos de crédito horario.",
            "D) Los Comités de Empresa y Delegados y Delegadas de personal podrán acordar la acumulación de todas o parte de las horas sindicales que les correspondan exclusivamente en uno de ellos."
        ],
        respuestaCorrecta: "A) Los Comités de Empresa dispondrán, en su ámbito, de un local adecuado y apto para desarrollar las actividades propias de su representación, provisto de teléfono y el correspondiente mobiliario y material informático y de oficina, así como la utilización de fotocopiadora."
    },
    {
        pregunta: "Indique la respuesta CORRECTA, teniendo en cuenta lo establecido en el artículo 11 del Real Decreto Legislativo 5/2015, de 30 de octubre, por el que se aprueba el texto refundido de la Ley del Estatuto Básico del Empleado Público (en adelante TREBEP), respecto al personal laboral:",
        opciones: [
            "A) Es personal laboral el que, en virtud de contrato de trabajo formalizado por escrito, en cualquiera de las modalidades de contratación de personal previstas en la legislación laboral, presta servicios retribuidos por las Administraciones Públicas.",
            "B) Las leyes de Función Pública que se dicten en desarrollo de este Estatuto establecerán los criterios para la determinación de los puestos de trabajo que no pueden ser desempeñados por personal laboral.",
            "C) En función de la duración del contrato éste podrá ser fijo, por tiempo definido o temporal.",
            "D) Los procedimientos de selección del personal laboral no serán públicos, rigiéndose en todo caso por los principios de igualdad, mérito y capacidad. En el caso del personal laboral temporal se regirá igualmente por el principio de celeridad, teniendo por finalidad atender razones expresamente justificadas de necesidad y urgencia."
        ],
        respuestaCorrecta: "A) Es personal laboral el que, en virtud de contrato de trabajo formalizado por escrito, en cualquiera de las modalidades de contratación de personal previstas en la legislación laboral, presta servicios retribuidos por las Administraciones Públicas."
    },
    {
        pregunta: "Según la Ley Orgánica 1/2004, de 28 de diciembre, de Medidas de Protección Integral contra la Violencia de Género, la Violencia de Género se ejerce sobre las mujeres por parte de quienes:",
        opciones: [
            "A) No sean o hayan sido sus cónyuges.",
            "B) Convivan con ellas.",
            "C) Sean o hayan sido sus cónyuges.",
            "D) Estén ligados a ellas familiarmente."
        ],
        respuestaCorrecta: "C) Sean o hayan sido sus cónyuges."
    },
    {
        pregunta: "Según la Ley 4/2023, de 28 de febrero, para la igualdad real y efectiva de las personas trans y para la garantía de los derechos de las personas LGTBI, se entiende por transfobia:",
        opciones: [
            "A) Toda actitud, conducta o discurso de rechazo, repudio, prejuicio, discriminación o intolerancia hacia las personas homosexuales por el hecho de serlo, o ser percibidas como tales.",
            "B) Toda actitud, conducta o discurso de rechazo, repudio, prejuicio, discriminación o intolerancia hacia las personas bisexuales por el hecho de serlo, o ser percibidas como tales.",
            "C) Atracción física, sexual o afectiva hacia una persona.",
            "D) Toda actitud, conducta o discurso de rechazo, repudio, prejuicio, discriminación o intolerancia hacia las personas trans por el hecho de serlo, o ser percibidas como tales."
        ],
        respuestaCorrecta: "D) Toda actitud, conducta o discurso de rechazo, repudio, prejuicio, discriminación o intolerancia hacia las personas trans por el hecho de serlo, o ser percibidas como tales."
    },
    {
        pregunta: "En base al artículo 49 CE, ¿quién impulsará las políticas que garanticen la plena autonomía personal y la inclusión social de las personas con discapacidad, en entornos universalmente accesibles?",
        opciones: [
            "A) Los poderes públicos.",
            "B) El Ministerio de Inclusión, Seguridad Social y Migraciones, exclusively.",
            "C) Las Comunidades Autónomas/Ciudades Autónomas, exclusively.",
            "D) El Presidente del Gobierno."
        ],
        respuestaCorrecta: "A) Los poderes públicos."
    },
    {
        pregunta: "¿En qué grados se clasifica la dependencia según lo establecido por la Ley 39/2006, de 14 de diciembre, de Promoción de la Autonomía Personal y Atención a las personas en situación de dependencia?",
        opciones: [
            "A) Los grados de clasificación de la dependencia son: Grado I. Dependencia leve Grado ll. Dependencia moderada. Y Grado III. Gran dependencia.",
            "B) Los grados de clasificación de la dependencia son: Grado I. Dependencia moderada Grado Il. Dependencia severa. Y Grado III. Gran dependencia.",
            "C) Los grados de clasificación de la dependencia son: Grado I (grave) y Grado ll (muy grave).",
            "D) Los grados de clasificación de la dependencia son: Grado 0, (leve), Grado I (grave) y Grado ll (muy grave)."
        ],
        respuestaCorrecta: "B) Los grados de clasificación de la dependencia son: Grado I. Dependencia moderada Grado Il. Dependencia severa. Y Grado III. Gran dependencia."
    },
    {
        pregunta: "El ámbito de aplicación de la Ley 4/2023, de 28 de febrero, para la igualdad real y efectiva de las personas trans y para la garantía de los derechos de las personas LGTBI se extiende a:",
        opciones: [
            "A) Exclusivamente a las personas físicas o jurídicas de carácter público.",
            "B) A las personas de nacionalidad española que no se encuentren en territorio español.",
            "C) No incluye a las personas menores de edad.",
            "D) Esta Ley será de aplicación a toda persona física o jurídica, de carácter público o privado, que resida, se encuentre o actúe en territorio español, cualquiera que fuera su nacionalidad, origen racial o étnico, religión, domicilio, residencia, edad, estado civil o situación administrativa, en los términos y con el alcance que se contemplan en esta ley y en el resto del ordenamiento jurídico."
        ],
        respuestaCorrecta: "D) Esta Ley será de aplicación a toda persona física o jurídica, de carácter público o privado, que resida, se encuentre o actúe en territorio español, cualquiera que fuera su nacionalidad, origen racial o étnico, religión, domicilio, residencia, edad, estado civil o situación administrativa, en los términos y con el alcance que se contemplan en esta ley y en el resto del ordenamiento jurídico."
    },
    {
        pregunta: "Según lo dispuesto en el artículo 6 de la Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, se considera discriminación indirecta por razón de sexo:",
        opciones: [
            "A) La situación en que se encuentra una persona que sea, haya sido o pudiera ser tratada, en atención a su sexo, de manera menos favorable que otra en situación comparable.",
            "B) No puede justificarse objetivamente en atención a una finalidad legítima.",
            "C) La situación en que una disposición, criterio o práctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro.",
            "D) Todo trato desfavorable a las mujeres relacionado con el embarazo o la maternidad."
        ],
        respuestaCorrecta: "C) La situación en que una disposición, criterio o práctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro."
    },
    {
        pregunta: "La Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, obliga a elaborar y aplicar un plan de igualdad a:",
        opciones: [
            "A) Empresas de cincuenta o más trabajadores.",
            "B) Todas las empresas.",
            "C) Empresas de doscientos cincuenta o más trabajadores.",
            "D) Empresas de ciento cincuenta o más trabajadores."
        ],
        respuestaCorrecta: "A) Empresas de cincuenta o más trabajadores."
    },
       {
        pregunta: "La Constitución Española de 1978 se estructura:",
        opciones: [
            "A) En 168 artículos y 2 disposiciones finales.",
            "B) En 168 artículos, 1 preámbulo y 3 disposiciones adicionales, 9 disposiciones transitorias, 1 disposición derogatoria y 1 disposición final.",
            "C) En un preámbulo, 169 artículos y 4 disposiciones adicionales, 9 disposiciones transitorias, 1 disposición derogatoria y 1 disposición final.",
            "D) En 169 capítulos, un preámbulo y 2 disposiciones adicionales."
        ],
        respuestaCorrecta: "C) En un preámbulo, 169 artículos y 4 disposiciones adicionales, 9 disposiciones transitorias, 1 disposición derogatoria y 1 disposición final."
    },
    {
        pregunta: "El artículo 15 de la Constitución Española establece que:",
        opciones: [
            "A) Nadie podrá ser obligado a declarar sobre su ideología, religión o creencias.",
            "B) Todos tienen derecho a la vida y a la integridad física y moral, sin que, en ningún caso, puedan ser sometidos a tortura ni a penas o tratos inhumanos o degradantes.",
            "C) Toda persona tiene derecho a la libertad y a la seguridad. Nadie puede ser privado de su libertad, sino con la observancia de lo establecido en este artículo y en los casos y en la forma previstos en la ley.",
            "D) Los españoles tienen derecho a elegir libremente su residencia y a circular por el territorio nacional."
        ],
        respuestaCorrecta: "B) Todos tienen derecho a la vida y a la integridad física y moral, sin que, en ningún caso, puedan ser sometidos a tortura ni a penas o tratos inhumanos o degradantes."
    },
    {
        pregunta: "¿Qué derecho reconocido en el artículo 29 de la Constitución ha de realizarse por escrito, en la forma y con los efectos que determine la ley?",
        opciones: [
            "A) El derecho de huelga.",
            "B) El derecho de petición individual y colectiva.",
            "C) El derecho de petición individual exclusivamente.",
            "D) El derecho de petición colectiva exclusivamente."
        ],
        respuestaCorrecta: "B) El derecho de petición individual y colectiva."
    },
    {
        pregunta: "El derecho a la protección de la salud en la Constitución Española:",
        opciones: [
            "A) Es un derecho fundamental y los ciudadanos pueden recabar la tutela de ese derecho ante los tribunales.",
            "B) Es un derecho recogido en el Capítulo Segundo del Título I de la Constitución.",
            "C) Está reconocido entre los principios rectores de la política social y económica.",
            "D) No aparece en la Constitución Española vigente."
        ],
        respuestaCorrecta: "C) Está reconocido entre los principios rectores de la política social y económica."
    },
    {
        pregunta: "El nombramiento y cese de los Subdelegados del Gobierno en las provincias se efectuará por:",
        opciones: [
            "A) Real Decreto del Presidente del Gobierno.",
            "B) Real Decreto del Consejo de Ministros.",
            "C) Resolución del Delegado del Gobierno.",
            "D) Orden del Ministro del Política Territorial."
        ],
        respuestaCorrecta: "C) Resolución del Delegado del Gobierno."
    },
    {
        pregunta: "Conforme a la Ley 40/2015, de 1 de octubre, tienen la consideración de órganos administrativos:",
        opciones: [
            "A) Todas las unidades administrativas.",
            "B) Las unidades administrativas a las que se atribuyan funciones con efectos jurídicos frente a terceros o cuya actuación tenga carácter preceptivo.",
            "C) Únicamente las unidades administrativas a las que se atribuyan funciones con efectos jurídicos frente a terceros.",
            "D) Las unidades administrativas que dupliquen la competencia de otras que ya existe."
        ],
        respuestaCorrecta: "B) Las unidades administrativas a las que se atribuyan funciones con efectos jurídicos frente a terceros o cuya actuación tenga carácter preceptivo."
    },
    {
        pregunta: "Según el artículo 137 de la Constitución Española, el Estado se organiza territorialmente:",
        opciones: [
            "A) En municipios, territorios insulares, provincias y Comunidades Autónomas.",
            "B) En municipios, mancomunidades, provincias y Comunidades Autónomas.",
            "C) En municipios, provincias y en las Comunidades Autónomas que se constituyan.",
            "D) En entidades locales y Comunidades Autónomas."
        ],
        respuestaCorrecta: "C) En municipios, provincias y en las Comunidades Autónomas que se constituyan."
    },
    {
        pregunta: "Es competencia exclusiva del Estado, según el artículo 149 de la Constitución Española de 1978:",
        opciones: [
            "A) Los museos, bibliotecas y conservatorios de música.",
            "B) La promoción del deporte y de la adecuada utilización del ocio.",
            "C) La legislación laboral; sin perjuicio de su ejecución por los órganos de las Comunidades Autónomas.",
            "D) La asistencia social."
        ],
        respuestaCorrecta: "C) La legislación laboral; sin perjuicio de su ejecución por los órganos de las Comunidades Autónomas."
    },
    {
        pregunta: "Según el artículo 148 de la Constitución Española de 1978, las Comunidades Autónomas podrán asumir competencias en materia de:",
        opciones: [
            "A) Ordenación del territorio, urbanismo y vivienda.",
            "B) La Legislación sobre propiedad intelectual e industrial.",
            "C) Nacionalidad, inmigración, emigración, extranjería y derecho de asilo.",
            "D) Régimen aduanero y arancelario; comercio exterior."
        ],
        respuestaCorrecta: "A) Ordenación del territorio, urbanismo y vivienda."
    },
    {
        pregunta: "Corresponde al Presidente del Gobierno (artículo 2, Ley 50/97):",
        opciones: [
            "A) Plantear la cuestión de confianza ante el Congreso de los Diputados, previa deliberación del Consejo de Ministros.",
            "B) Proponer al Senado la convocatoria de un referéndum consultivo, previa autorización del Congreso de los Diputados.",
            "C) Establecer el programa político del Senado y determinar las directrices de la política correspondiente a las antiguas colonias españolas.",
            "D) Declarar los estados de alarma y de excepción y proponer al Congreso de los Diputados la declaración del estado de sitio."
        ],
        respuestaCorrecta: "A) Plantear la cuestión de confianza ante el Congreso de los Diputados, previa deliberación del Consejo de Ministros."
    },
    {
        pregunta: "Corresponde al Presidente del Gobierno:",
        opciones: [
            "A) Representar al Gobierno.",
            "B) Aprobar los proyectos de ley.",
            "C) Aprobar los Reales Decretos-leyes y los Reales Decretos Legislativos.",
            "D) Acordar la negociación y firma de Tratados internacionales, así como su aplicación provisional."
        ],
        respuestaCorrecta: "A) Representar al Gobierno."
    },
    {
        pregunta: "Según la Ley 40/2015, de 1 de octubre, de Régimen Jurídico del Sector Público, las Direcciones Generales en un Ministerio se crean, modifican y suprimen:",
        opciones: [
            "A) A través de las relaciones de puestos de trabajo.",
            "B) Por Orden del Ministro respectivo.",
            "C) Por Real Decreto del Consejo de Ministros.",
            "D) Por Real Decreto del Presidente del Gobierno."
        ],
        respuestaCorrecta: "C) Por Real Decreto del Consejo de Ministros."
    },
    {
        pregunta: "De acuerdo con el artículo 5 de la Ley 40/2015, de 1 de octubre, de Régimen Jurídico del Sector Público, los órganos administrativos:",
        opciones: [
            "A) No podrán elaborar instrucciones y órdenes de servicio para dirigir la actividad de sus órganos jerárquicamente dependientes.",
            "B) Son las unidades administrativas a las que se les atribuye funciones que tengan efectos jurídicos frente a terceros o cuya actuación tenga carácter preceptivo.",
            "C) Solo pueden ser creados por el poder legislativo mediante Ley.",
            "D) Podrán crearse tantos como se necesiten."
        ],
        respuestaCorrecta: "B) Son las unidades administrativas a las que se les atribuye funciones que tengan efectos jurídicos frente a terceros o cuya actuación tenga carácter preceptivo."
    },
    {
        pregunta: "Los órganos directivos encargados de la gestión de una o varias áreas funcionalmente homogéneas del Ministerio son:",
        opciones: [
            "A) Las Secretarías de Estado.",
            "B) Las Direcciones Generales.",
            "C) Las Subsecretarías.",
            "D) Las Subdirecciones Generales."
        ],
        respuestaCorrecta: "B) Las Direcciones Generales."
    },
    {
        pregunta: "El ejercicio de las funciones que impliquen la participación directa o indirecta en el ejercicio de las potestades públicas o en la salvaguardia de los intereses generales del Estado y de las Administraciones Públicas corresponde, de acuerdo con el artículo 9 del texto refundido de la Ley del Estatuto Básico del Empleado Público, aprobado por el Real Decreto Legislativo 5/2015, de 30 de octubre:",
        opciones: [
            "A) Al personal laboral fijo exclusivamente.",
            "B) A los funcionarios públicos exclusivamente.",
            "C) Al personal funcionario y laboral indistintamente.",
            "D) Al personal eventual exclusivamente."
        ],
        respuestaCorrecta: "B) A los funcionarios públicos exclusivamente."
    },
    {
        pregunta: "Señale la respuesta correcta respecto de los funcionarios de carrera, de acuerdo con el artículo 9 del texto refundido de la Ley del Estatuto Básico del Empleado Público, aprobado por el Real Decreto Legislativo 5/2015, de 30 de octubre:",
        opciones: [
            "A) Solo realizan funciones expresamente calificadas como de confianza o asesoramiento especial.",
            "B) Sus condiciones de empleo no tienen la consideración de materia objeto de negociación colectiva en ningún caso.",
            "C) Están vinculados a una Administración Pública en virtud de nombramiento legal.",
            "D) Prestan servicios retribuidos por las Administraciones Públicas en virtud de contrato de trabajo formalizado por escrito."
        ],
        respuestaCorrecta: "C) Están vinculados a una Administración Pública en virtud de nombramiento legal."
    },
    {
        pregunta: "Señale la respuesta correcta respecto del personal laboral, de acuerdo con el artículo 11 del texto refundido de la Ley del Estatuto Básico del Empleado Público, aprobado por el Real Decreto Legislativo 5/2015, de 30 de octubre:",
        opciones: [
            "A) Son nombrados para el desempeño temporal de funciones propias de funcionarios de carrera.",
            "B) Su nombramiento y cese son libres en todos los casos.",
            "C) Está regulado por el Derecho Administrativo en todo caso, no siendo aplicable la normativa laboral.",
            "D) Puede ser fijo, por tiempo indefinido o temporal."
        ],
        respuestaCorrecta: "D) Puede ser fijo, por tiempo indefinido o temporal."
    },
    {
        pregunta: "Los empleados públicos tienen derecho, de acuerdo con el artículo 14 del texto refundido de la Ley del Estatuto Básico del Empleado Público, aprobado por el Real Decreto Legislativo 5/2015, de 30 de octubre:",
        opciones: [
            "A) A la formación continua y a la actualización permanente de sus conocimientos y capacidades profesionales, preferentemente en horario laboral.",
            "B) A la inamovilidad en la condición de personal eventual.",
            "C) A percibir solo las retribuciones que discrecionalmente determine el superior jerárquico.",
            "D) A la adopción de medidas que favorezcan la conciliación de la vida personal, familiar y laboral solo para el personal laboral fijo."
        ],
        respuestaCorrecta: "A) A la formación continua y a la actualización permanente de sus conocimientos y capacidades profesionales, preferentemente en horario laboral."
    },
    {
        pregunta: "Señale la respuesta correcta respecto del trabajo a distancia (teletrabajo) de los empleados públicos, de acuerdo con el artículo 47bis del texto refundido de la Ley del Estatuto Básico del Empleado Público:",
        opciones: [
            "A) Será obligatorio con carácter general.",
            "B) La Administración proporcionará y mantendrá a las personas que trabajen a distancia los medios tecnológicos necesarios para su actividad.",
            "C) No se aplicará la normativa de prevención de riesgos laborales a las personas que trabajen a distancia.",
            "D) Es incompatible con la modalidad de trabajo presencial."
        ],
        respuestaCorrecta: "B) La Administración proporcionará y mantendrá a las personas que trabajen a distancia los medios tecnológicos necesarios para su actividad."
    },
    {
        pregunta: "El acceso al empleo público se regirá, entre otros, por los principios constitucionales de:",
        opciones: [
            "A) Igualdad, mérito y capacidad.",
            "B) Parcialidad de los miembros de los órganos de selección.",
            "C) Opacidad.",
            "D) Falta de adecuación entre el contenido de los procesos selectivos y las funciones o tareas a desarrollar."
        ],
        respuestaCorrecta: "A) Igualdad, mérito y capacidad."
    },
    {
        pregunta: "Las ofertas de empleo público reservarán para las personas con discapacidad un cupo de plazas, de acuerdo con el artículo 59 del texto refundido de la Ley del Estatuto Básico del Empleado Público:",
        opciones: [
            "A) No inferior al 7% de las vacantes ofertadas, en todo caso.",
            "B) Superior al 10% de las vacantes ofertadas, en todo caso.",
            "C) Inferior al 7% de las vacantes ofertadas, en todo caso.",
            "D) Ninguna de las opciones anteriores es correcta."
        ],
        respuestaCorrecta: "A) No inferior al 7% de las vacantes ofertadas, en todo caso."
    },
    {
        pregunta: "Los órganos de selección de personas para el ingreso al empleo público:",
        opciones: [
            "A) Serán unipersonales con carácter general.",
            "B) Podrá estar integrado por personal de elección o designación política.",
            "C) Tenderán a la paridad entre mujer y hombre.",
            "D) Estarán formados por miembros que podrán representar a otros órganos administrativos u organizaciones sindicales."
        ],
        respuestaCorrecta: "C) Tenderán a la paridad entre mujer y hombre."
    },
    {
        pregunta: "Los sistemas selectivos de personal laboral fijo serán, de acuerdo con el artículo 60 del texto refundido de la Ley del Estatuto Básico del Empleado Público:",
        opciones: [
            "A) Oposición exclusivamente en todos los casos.",
            "B) Concurso de valoración de méritos exclusivamente en todos los casos.",
            "C) Concurso-oposición exclusivamente en todos los casos.",
            "D) Oposición, concurso-oposición o concurso de valoración de méritos."
        ],
        respuestaCorrecta: "D) Oposición, concurso-oposición o concurso de valoración de méritos."
    },
    {
        pregunta: "Los empleados públicos en activo que realizan una jornada ordinaria de trabajo podrán ejercer las siguientes actividades privadas, de acuerdo con el artículo 12 de la Ley 53/1984, de 26 de diciembre, de Incompatibilidades del personal al servicio de las Administraciones Públicas:",
        opciones: [
            "A) Aquellas relacionadas con asuntos en los que esté interviniendo.",
            "B) Aquellas que requieran la presencia efectiva durante un horario de 40 horas semanales.",
            "C) Aquellas que impliquen asumir un cargo en empresas que sean contratistas de la Administración donde desempeñan sus funciones como empleados públicos.",
            "D) Aquellas relacionadas con empresas sin ninguna relación con el Departamento, Organismo o Entidad en las que presten servicio como empleados públicos."
        ],
        respuestaCorrecta: "D) Aquellas relacionadas con empresas sin ninguna relación con el Departamento, Organismo o Entidad en las que presten servicio como empleados públicos."
    },
    {
        pregunta: "Según el artículo 7 del IV Convenio colectivo único para el personal laboral de la Administración General del Estado, la clasificación profesional del personal laboral del ámbito de aplicación de dicho Convenio solo podrá modificarse:",
        opciones: [
            "A) Cuando lo determine un juzgado.",
            "B) A través de los procedimientos previstos en el mismo.",
            "C) Por acuerdo de dos tercios de la Subcomisión Paritaria correspondiente.",
            "D) No se puede modificar de ninguna manera."
        ],
        respuestaCorrecta: "B) A través de los procedimientos previstos en el mismo."
    },
    {
        pregunta: "Corresponde interpretar la totalidad del articulado, disposiciones y anexos del IV Convenio Único para el personal laboral de la Administración General del Estado, vigilar y exigir su cumplimiento a:",
        opciones: [
            "A) La Comisión Paritaria.",
            "B) Los Presidentes de las distintas Subcomisiones Paritarias.",
            "C) La Comisión Ejecutiva de la Comisión Interministerial de Retribuciones.",
            "D) El grupo de trabajo de disposiciones y anexos."
        ],
        respuestaCorrecta: "A) La Comisión Paritaria."
    },
    {
        pregunta: "Una de las funciones de las Subcomisiones Paritarias del IV Convenio es:",
        opciones: [
            "A) Negociar las retribuciones del personal de su Departamento.",
            "B) La creación de unidades específicas.",
            "C) Interpretar el articulado correspondiente a los complementos salariales.",
            "D) Recibir información sobre las vacantes que serán incluidas en el concurso abierto y permanente y los criterios para su determinación."
        ],
        respuestaCorrecta: "D) Recibir información sobre las vacantes que serán incluidas en el concurso abierto y permanente y los criterios para su determinación."
    },
    {
        pregunta: "Se establecen en el artículo 12 del IV Convenio Único para el personal laboral de la Administración General del Estado:",
        opciones: [
            "A) Una Comisión Negociadora y una Comisión Paritaria.",
            "B) Una Comisión de Función Pública y un grupo de trabajo de complementos.",
            "C) Las familias profesionales correspondientes al citado Convenio.",
            "D) Una Comisión de Traslados y otra de Promoción Interna."
        ],
        respuestaCorrecta: "C) Las familias profesionales correspondientes al citado Convenio."
    },
    {
        pregunta: "La titulación exigida para el ingreso al grupo profesional E0, en el IV Convenio Único es:",
        opciones: [
            "A) Sin titulación prevista en el sistema educativo.",
            "B) Título de Bachiller o Técnico o equivalentes.",
            "C) Título de doctor.",
            "D) Grado Superior de Formación Profesional."
        ],
        respuestaCorrecta: "A) Sin titulación prevista en el sistema educativo."
    },
    {
        pregunta: "En relación a la forma del contrato regulada en el artículo 8 del Texto refundido de la Ley del Estatuto de los Trabajadores, señale la opción INCORRECTA:",
        opciones: [
            "A) El contrato de trabajo se podrá celebrar por escrito o de palabra.",
            "B) La copia básica que se entrega a la representación legal de los trabajadores debe incluir siempre el número del documento nacional de identidad.",
            "C) El empresario está obligado a comunicar a la oficina pública de empleo, en el plazo de los diez días siguientes a su concertación, el contenido de los contratos de trabajo que celebre.",
            "D) Deberán constar por escrito los contratos de prácticas y para la formación y el aprendizaje, los contratos a tiempo parcial, fijos-discontinuos y de relevo y los contratos para la realización de una obra o servicio determinado."
        ],
        respuestaCorrecta: "B) La copia básica que se entrega a la representación legal de los trabajadores debe incluir siempre el número del documento nacional de identidad."
    },
    {
        pregunta: "Respecto a la validez de los contratos, señale la opción INCORRECTA:",
        opciones: [
            "A) Si resultase nula solo una parte del contrato de trabajo, éste será declarado nulo en su integridad siempre.",
            "B) En caso de nulidad por discriminación salarial por razón de sexo, el trabajador tendrá derecho a la retribución correspondiente al trabajo igual o de igual valor.",
            "C) En caso de que el contrato resultase nulo, el trabajador podrá exigir, por el trabajo que ya hubiese prestado, la remuneración consiguiente a un contrato válido.",
            "D) Si resultase nula solo una parte del contrato de trabajo, este permanecerá válido en lo restante, y se entenderá completado con los preceptos jurídicos adecuados conforme a lo dispuesto en el artículo 3.1 del Estatuto de los Trabajadores."
        ],
        respuestaCorrecta: "A) Si resultase nula solo una parte del contrato de trabajo, éste será declarado nulo en su integridad siempre."
    },
    {
        pregunta: "Las personas contratadas con un contrato a tiempo parcial:",
        opciones: [
            "A) No podrán realizar trabajos nocturnos.",
            "B) No podrán realizar horas extraordinarias, salvo en los supuestos establecidos en el artículo 35.3 del Estatuto de los Trabajadores.",
            "C) El trabajador podrá ser despedido o sancionado en caso de rechazar la conversión de un trabajo a tiempo completo en un trabajo parcial y viceversa.",
            "D) No podrán realizar horas complementarias."
        ],
        respuestaCorrecta: "B) No podrán realizar horas extraordinarias, salvo en los supuestos establecidos en el artículo 35.3 del Estatuto de los Trabajadores."
    },
    {
        pregunta: "Conforme el artículo 49 del texto refundido de la Ley del Estatuto de los Trabajadores, el contrato de trabajo se extinguirá (Señale la respuesta INCORRECTA):",
        opciones: [
            "A) Por voluntad de los representantes del trabajador, fundamentada en un incumplimiento contractual del empresario.",
            "B) Por mutuo acuerdo de las partes.",
            "C) Por expiración del tiempo convenido o realización de la obra o servicio objeto del contrato.",
            "D) Por dimisión del trabajador, debiendo mediar el preaviso que señalen los convenios colectivos o la costumbre del lugar."
        ],
        respuestaCorrecta: "A) Por voluntad de los representantes del trabajador, fundamentada en un incumplimiento contractual del empresario."
    },
    {
        pregunta: "Una de las siguientes causas de extinción del contrato de trabajo es INCORRECTA según lo establecido en el artículo 49 de la Ley del Estatuto de los trabajadores:",
        opciones: [
            "A) Por voluntad del trabajador, fundamentada en un incumplimiento contractual del empresario.",
            "B) Por decisión de la trabajadora que se vea obligada a abandonar temporalmente su puesto de trabajo como consecuencia de ser víctima de violencia de género.",
            "C) Por despido del trabajador.",
            "D) Por despido colectivo fundado en causas económicas, técnicas, organizativas o de producción."
        ],
        respuestaCorrecta: "B) Por decisión de la trabajadora que se vea obligada a abandonar temporalmente su puesto de trabajo como consecuencia de ser víctima de violencia de género."
    },
    {
        pregunta: "Conforme establece el IV Convenio Único de la Administración General del Estado en su artículo 93, una de las siguientes causas de suspensión de contrato de trabajo no permite la reserva del puesto de trabajo:",
        opciones: [
            "A) Nacimiento, adopción, del progenitor diferente de la madre biológica, y, riesgo durante el embarazo o la lactancia natural de la mujer trabajadora.",
            "B) Reservistas voluntarios y voluntarias.",
            "C) Nombramiento del personal laboral como personal funcionario en prácticas o para la realización de períodos de prueba como personal laboral fijo en el ámbito de una Administración Pública.",
            "D) Nombramiento como alto cargo del personal laboral fijo por el Gobierno de la Nación o por los órganos de gobierno de las Comunidades Autónomas y de las Ciudades de Ceuta y Melilla o de las Corporaciones Locales."
        ],
        respuestaCorrecta: "D) Nombramiento como alto cargo del personal laboral fijo por el Gobierno de la Nación o por los órganos de gobierno de las Comunidades Autónomas y de las Ciudades de Ceuta y Melilla o de las Corporaciones Locales."
    },
    {
        pregunta: "El artículo 3.1 a) de la Ley 15/2022, de 12 de julio, integral para la igualdad de trato y la no discriminación, establece que, esta Ley se aplicará al empleo, por cuenta ajena y por cuenta propia, que comprende el acceso a:",
        opciones: [
            "A) Las condiciones de trabajo, incluidas las retributivas, excluido el despido, la promoción profesional y la formación para el empleo.",
            "B) Las condiciones de trabajo, incluidas las retributivas y las de despido, la promoción profesional y la formación para el empleo.",
            "C) Las condiciones de trabajo, incluidas las retributivas las de despido, con exclusión de la promoción profesional y la formación para el empleo.",
            "D) Las condiciones de trabajo, incluidas las retributivas, excluidos el despido y la promoción profesional e incluida la formación para el empleo."
        ],
        respuestaCorrecta: "B) Las condiciones de trabajo, incluidas las retributivas y las de despido, la promoción profesional y la formación para el empleo."
    },
    {
        pregunta: "Según el artículo 10 de la Ley 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, los actos y las cláusulas de los negocios jurídicos que constituyan o causen discriminación por razón de sexo se considerarán:",
        opciones: [
            "A) Nulos y sin efecto, y darán lugar a responsabilidad a través de un sistema de reparaciones o indemnizaciones.",
            "B) Nulos y sin efecto, y darán lugar a responsabilidades penales en todo caso.",
            "C) Nulos y con efecto por lo que darán lugar a sanciones.",
            "D) Nulos y sin efecto, por lo que no darán lugar a responsabilidades."
        ],
        respuestaCorrecta: "A) Nulos y sin efecto, y darán lugar a responsabilidad a través de un sistema de reparaciones o indemnizaciones."
    },
    {
        pregunta: "El artículo 3 i), de la Ley 4/2023, de 28 de febrero, para la igualdad real y efectiva de las personas trans y para la garantía de los derechos de las personas LGTBI, define la Identidad sexual como:",
        opciones: [
            "A) Persona cuya identidad sexual no se corresponde con el sexo asignado al nacer.",
            "B) Vivencia interna e individual del sexo tal y como cada persona la siente y autodefine, pudiendo o no corresponder con el sexo asignado al nacer.",
            "C) Manifestación que cada persona hace de su identidad sexual.",
            "D) Persona cuya identidad sexual se corresponde con el sexo asignado al nacer."
        ],
        respuestaCorrecta: "B) Vivencia interna e individual del sexo tal y como cada persona la siente y autodefine, pudiendo o no corresponder con el sexo asignado al nacer."
    },
    {
        pregunta: "Dispone el artículo 6.1 del Real Decreto Legislativo 1/2013, de 29 de noviembre, Texto Refundido de la Ley General de derechos de las personas con discapacidad y de su inclusión social, que el ejercicio de los derechos de las personas con discapacidad se realizará de acuerdo con:",
        opciones: [
            "A) El principio de igualdad constitucional.",
            "B) El principio de legalidad en la toma de decisiones.",
            "C) El principio de libertad en la toma de decisiones.",
            "D) El principio de no discriminación."
        ],
        respuestaCorrecta: "D) El principio de no discriminación."
    },
    {
        pregunta: "Conforme el artículo 6.2 de la Ley 39/2006, de 14 de diciembre, de Promoción de la Autonomía Personal y Atención a las personas en situación de dependencia, el Sistema para la Autonomía y la Dependencia se configura como:",
        opciones: [
            "A) Una red de utilización privada que integra, de forma coordinada, centros y servicios, públicos y privados.",
            "B) Una red de utilización pública que integra los centros de las distintas Comunidades Autónomas.",
            "C) Una red de utilización pública que integra, de forma coordinada, centros y servicios, públicos y privados.",
            "D) Una red de centros estatales que se utilizan coordinadamente por los Ayuntamientos."
        ],
        respuestaCorrecta: "C) Una red de utilización pública que integra, de forma coordinada, centros y servicios, públicos y privados."
    }
]
];
