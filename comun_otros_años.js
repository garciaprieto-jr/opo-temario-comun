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
];
