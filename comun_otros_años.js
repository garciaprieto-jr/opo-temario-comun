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
        opciones: [
            "Es obligatoria y gratuita.",
            "Es voluntaria y cofinanciada.",
            "Es voluntaria y gratuita."
        ],
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
    
    // Leyes del Gobierno y del Sector Público
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

    // Estatuto Básico del Empleado Público y Convenio Colectivo
    {
        pregunta: "De acuerdo con el artículo 55 del texto refundido de la Ley del Estatuto Básico del Empleado Público, aprobado por el Real Decreto Legislativo 5/2015, de 30 de octubre, los principios constitucionales por los que se rige el derecho al acceso al empleo público son:",
        opciones: [
            "Buen aspecto físico y relaciones familiares.",
            "Igualdad, mérito y capacidad.",
            "Transparencia, honor y salud."
        ],
        respuestaCorrecta: "Igualdad, mérito y capacidad."
    },
    {
        pregunta: "En virtud de lo establecido en el Reglamento General de Ingreso del Personal al servicio de la Administración general del Estado y de Provisión de Puestos de Trabajo y Promoción Profesional de los Funcionarios Civiles de la Administración general del Estado, aprobado por el Real Decreto 364/1995, de 10 de marzo, el ingreso del personal funcionario se llevará a cabo a través de los sistemas de:",
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
        opciones: [
            "Falta muy grave.",
            "Un delito que, en todo caso, conlleva pena de prisión.",
            "No constituye falta disciplinaria."
        ],
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
    
    // Prevención de Riesgos Laborales
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
    
    // Igualdad, Violencia de Género y Dependencia
    {
        pregunta: "Según el artículo 7.3 de la Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, el acoso sexual y el acoso por razón de sexo se considerarán discriminatorios:",
        opciones: [
            "En todo caso.",
            "Solamente cuando sean directos.",
            "Solamente cuando sean indirectos."
        ],
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
        pregunta: "De conformidad con el artículo 30 de la Ley Orgánica 1/2004, de 28 de diciembre, de Medidas de Protección Integral contra la Violencia de Género, las tareas de asesoramiento, evaluación, colaboración institucional, elaboración de informes y estudios y propuestas de actuación en materia de violencia de género, corresponderán:",
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
        pregunta: "El artículo 2 de la Ley 39/2006, de 14 de diciembre, de Promoción de la Autonomía Personal y atención a las personas en situación de dependencia, establece que, a efectos de esta Ley, se entiende por “necesidades de apoyo para la autonomía personal”:",
        opciones: [
            "Las que requieren las personas que tienen discapacidad intelectual o mental para hacer efectivo un grado satisfactorio de autonomía personal en el seno de la comunidad.",
            "Las que requieren las personas que tienen una discapacidad física para hacer efectivo un grado satisfactorio de autonomía personal en el seno de la comunidad.",
            "Las que requieren las personas que no pueden realizar las actividades básicas de la vida diaria."
        ],
        respuestaCorrecta: "Las que requieren las personas que tienen discapacidad intelectual o mental para hacer efectivo un grado satisfactorio de autonomía personal en el seno de la comunidad."
    },
    {
        pregunta: "Según el artículo 14.1 de la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno, el derecho de acceso podrá ser limitado cuando acceder a la información suponga un perjuicio para:",
        opciones: [
            "La protección de la infancia.",
            "La política de la Unión Europea.",
            "La protección del medio ambiente."
        ],
        respuestaCorrecta: "La protección de la infancia."
    }
]
};
