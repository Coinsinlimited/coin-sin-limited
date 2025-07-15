"use client"
import { useState, useMemo } from "react"
import Link from "next/link" // Import Link for navigation
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Info } from "lucide-react"

// Re-defining translations and countryCodes for this specific page
// In a larger project, these would ideally be in a shared lib/translations.ts and lib/country-codes.ts
const translations = {
    es: {
        notification:
            "¡Actúa ahora! Coin Sin Limited está acelerando las ganancias de los participantes! ¡Asegura tu lugar antes de que caduque la invitación Privada!",
        platformBenefit: "Beneficio NETO de Usuarios:",
        userIncome: "Usuarios nuevos a la fecha",
        mainTitle: "Ingresos inteligentes todos los días para tu nueva",
        mainTitleHighlight: "vida sin estrés para siempre",
        subtitle: "Nuestros usuarios suelen hacer x2, x5 e incluso x10 en inversiones",
        readyToJoin: "LISTO PARA UNIRTE? INICIA TU REGISTRO EN EL SISTEMA AQUÍ Y AHORA.",
        motivationalText:
            "TIENES DERECHO A LA INDEPENDENCIA FINANCIERA, Y NO ES UN PRIVILEGIO. ES TU DERECHO, INDEPENDIENTEMENTE DE TU EDAD, LOGROS Y ESTATUS SOCIAL.",
        playVideo: "Reproducir Video",
        pauseVideo: "Pausar Video",
        improveLife: "MEJORA TU VIDA HOY",
        namePlaceholder: "Tu nombre",
        surnamePlaceholder: "Tu apellido",
        emailPlaceholder: "Tu correo electrónico",
        phonePlaceholder: "9 11 2345-6789",
        registerButton: "Regístrame",
        searchCountry: "Buscar país...",
        termsText:
            "Al registrarte, aceptas y estás de acuerdo con los términos de uso y la Política de privacidad del sitio.",
        privacyText:
            "Tus datos siempre están protegidos con Coin Sin Limited. Al completar este formulario, aceptas recibir nuestros correos electrónicos de marketing. Puedes cambiar de opinión en cualquier momento haciendo clic en el enlace para darte de baja en la parte inferior de cualquiera de nuestros correos electrónicos.",
        registrationSuccessTitle: "¡Muchas Gracias por Registrarte!",
        noCountriesFound: "No se encontraron países",
        masterTradingTitle: "DOMINA EL TRADING DE CRIPTOMONEDAS CON NUESTRA",
        masterTradingHighlight: "HERRAMIENTA DE INVERSIÓN DE IA CON UNA PRECISIÓN DEL 99.4%",
        ctaParagraph1:
            "Imagina una nueva vida en la que el trabajo se vuelva opcional, los ahorros ya no sean necesarios y todas tus facturas se paguen sin esfuerzo. Imagina la libertad de explorar, planificar un coche nuevo o incluso tener una casa.",
        ctaParagraph2:
            "Ahora imagínate mirando la pantalla de tu teléfono inteligente y siendo testigo de otra ganancia de 1,000$ sin esfuerzo hoy mismo. Suena atractivo, ¿verdad?",
        ctaParagraph3:
            "Coin Sin Limited lo hace posible. Como una plataforma de inicio impulsada por IA, empoderamos a los nuevos inversores para que se sumerjan en el mundo de las inversiones en criptomonedas, independientemente de su experiencia previa. Al comenzar con una inversión de solo 250 €, puedes aprovechar la oportunidad de multiplicar tus ganancias diarias por x5.",
        ctaParagraph4:
            "¿Listo para unirte a nosotros? ¡Sigue las instrucciones de esta página y emprende tu emocionante viaje hacia una vida estable y sin preocupaciones, llena de abundantes placeres!",
        startNowButton: "Empieza ahora",
        advantagesTitle:
            "VENTAJAS DE INVERTIR EN DIVISAS POPULARES E INFORMACIÓN ESENCIAL SOBRE LA PLATAFORMA COIN SIN LIMITED",
        advantagesIntro:
            "Invertir en divisas digitales es una opción atractiva para los inversores. Las criptomonedas reúnen todas las características necesarias para ofrecer una liquidez estable. Dos factores clave determinan los beneficios de esta tipo de inversiones:",
        growthPotentialTitle: "Potencial de crecimiento:",
        growthPotentialText:
            "Algunas criptomonedas ya han alcanzado un valor significativo, pero muchos proyectos tienen un gran potencial de desarrollo. Debido a su creciente popularidad, el mercado de las criptomonedas atrae a inversores que pueden obtener altos rendimientos invirtiendo en activos digitales.",
        diversificationTitle: "Diversificación de la cartera:",
        diversificationText:
            "Las criptomonedas brindan la oportunidad de diversificar su cartera de inversiones. Proporcionan una clase de activos alternativa que es independiente de los mercados financieros tradicionales. Invertir en criptomonedas ayuda a diversificar el riesgo y a proteger la cartera de posibles influencias negativas en un área.",
        focusOnPlatformTitle: "Centrémonos ahora en la plataforma Coin Sin Limited.",
        focusOnPlatformText1:
            "¿Por qué la inteligencia artificial (IA) es fundamental para el mercado de inversión? La IA es más rápida que el cerebro humano y puede analizar datos con precisión, siempre que el sistema esté configurado correctamente. El aprendizaje automático tiene tres ventajas significativas en el mercado de inversión.",
        focusOnPlatformText2:
            "Además, la inteligencia artificial opera en el mercado las 24/7 ahora. Significa conocimiento de la situación global en tiempo real, acumulación de conocimientos sobre patrones y creación inmediata de estrategias rentables. La plataforma Coin Sin Limited ofrece una rentabilidad eficaz de alcanzar para los humanos. Es cuestión de tiempo que las máquinas asuman plenamente esta función.",
        focusOnPlatformText3:
            "Otro factor que hace atractiva la inversión en Canadá, Australia y otros países es la educación. Muchas personas sienten que un humano puede tomar decisiones influido por las emociones, una máquina permanece objetiva y racional. Es fundamental no se olviden las emociones. Segregar la racionalidad de la emoción es fundamental, pero un realizo en la esfera de la inversión, donde todo se decide basándose en datos puros y previsiones exactas.",
        focusOnPlatformText4:
            "Además, invertir antes de obtener ingresos es significativamente diferente. Antes de que una persona empiece a obtener ingresos, gasta una cantidad significativa de dinero en pruebas, lo que tiene beneficios, además de adquirir experiencia situacional y conciencia de la inversión. En cambio, una máquina se encarga de esto mucho más rápido y requiere un desembolso mínimo para maximizar los ingresos.",
        nineReasonsIntro:
            "Así pues, tenemos nueve razones principales por las que utilizar la plataforma Coin Sin Limited es beneficioso, especialmente para los operadores principiantes:",
        reason1:
            "Nuestras herramientas de trading procesan grandes cantidades de datos de forma rápida y eficiente, lo que le permite tomar decisiones precisas.",
        reason2:
            "El software basado en inteligencia artificial proporciona un análisis avanzado del mercado con datos y previsiones precisas.",
        reason3:
            "La inteligencia artificial se adapta a las condiciones actuales del mercado, sugiriendo las mejores estrategias de inversión.",
        reason4:
            "Invertir con un sistema basado en inteligencia artificial no se ve afectado por errores humanos y proporciona información objetiva.",
        reason5: "Invertir usando una máquina es más barato que tomar decisiones humanas y genera más beneficios.",
        reason6:
            "La inteligencia artificial requiere menos inversión inicial, lo que aumenta la eficiencia de la inversión.",
        reason7:
            "Invertir con herramientas basadas en inteligencia artificial hace que las inversiones sean asequibles en Canadá, Australia y otros países.",
        reason8: "El uso de la inteligencia artificial aumenta la velocidad de la toma de decisiones.",
        reason9:
            "La inteligencia artificial proporciona una toma de decisiones más rápida para realizar mejores acciones de inversión.",
        efficiencyGuarantee:
            "Así, la inteligencia artificial garantiza la rentabilidad de la inversión al asegurar una eficacia de los sistemas de al menos el 95%. La precisión depende del sistema específico, pero puede alcanzar para los humanos entre el 95% y el 99,4%. La eficiencia de nuestros instrumentos de negociación basados en algoritmos Coin Sin Limited es del 99,4%.",
        platformBenefitTitle: "COIN SIN LIMITED ES UNA PLATAFORMA QUE TRABAJA EN BENEFICIO DEL INVERSOR",
        platformBenefitText1:
            "Para los inversores novatos, invertir en criptomonedas puede resultar increíblemente complicado. A menudo, los principiantes necesitan comprender todos los entresijos de este ámbito para no perder sus pequeñas inversiones en el menor tiempo posible. Esto les lleva a perder el interés por las criptomonedas y por la inversión en general. Sin embargo, necesitan darse cuenta de las oportunidades potenciales que están perdiendo.",
        platformBenefitText2:
            "La plataforma Coin Sin Limited les permite hacer realidad sus sueños de ingresos pasivos estables. Basado en inteligencia artificial, este algoritmo trabaja continuamente, analizando la situación del mercado, estudiando las tendencias de las criptomonedas y realizando operaciones que casi siempre resultan rentables. Miles de personas en todo el mundo ya han generado miles de millones de dólares con Coin Sin Limited.",
        platformFeaturesTitle: "Las características de la plataforma Coin Sin Limited incluyen:",
        feature1:
            "Un profundo conocimiento del mercado de criptomonedas y de las tendencias en el mundo de los activos digitales que están fuera del alcance de la mente humana.",
        feature2:
            "El superordenador puede calcular millones de variaciones cada segundo y predecir tendencias con la máxima precisión.",
        feature3: "Operaciones seguras con beneficios para el inversor.",
        platformUnnoticedText:
            "La plataforma Coin Sin Limited pasó desapercibida en el momento del lanzamiento del producto. Sin embargo, está provocando la ira y el pánico de bancos centrales y gobiernos de todo el mundo. Mientras los grandes jugadores intentan detener el proyecto de la plataforma Coin Sin Limited, usted puede empezar a ganar mucho dinero ahora.",
        investSmartTitle: "INVIERTE EN CRIPTODIVISAS DE FORMA INTELIGENTE CON LA PLATAFORMA COIN SIN LIMITED",
        investSmartText1:
            "Los tiempos no son fáciles, y todo a nuestro alrededor va poco a poco hacia abajo. Aunque la situación puede mejorar en el futuro, todo el mundo debería ocuparse hoy de su futuro para no depender de factores externos. Las herramientas inteligentes pueden ayudarle con esto.",
        investSmartText2:
            "La plataforma de inversión Coin Sin Limited le permite hacerlo sin perder tiempo estudiando el mercado de divisas digitales. Puede empezar a invertir hoy mismo en países como Canadá, Australia y otros. El éxito está precalculado, y todo lo que necesita es el deseo de unirse.",
        algorithmToolsIntro: "El algoritmo le proporciona las herramientas para ayudarle:",
        tool1: "Evitar riesgos y pérdidas innecesarias.",
        tool2: "Obtener ingresos casi totalmente pasivos.",
        tool3: "Trabajar en el mercado con una amplia diversificación de la cartera y una reducción paralela del riesgo.",
        tool4: "Recibir ingresos estables tanto a corto como a largo plazo.",
        finalInvitation:
            "¡Por lo tanto, le invitamos a empezar a escribir la primera página de su historia de un inversor de éxito hoy después de leer la revisión de Coin Sin Limited!",
        potentialEarningsTitle: "¿QUÉ GANANCIAS POTENCIALES PUEDO ESPERAR AL INVERTIR CON COIN SIN LIMITED?",
        myInvestment: "Mi inversión:",
        usagePeriod: "Período de uso:",
        days: "días",
        potentialProfit: "Ganancia Potencial",
        startInvestingNowButton: "¡Comenzar a Invertir Ahora!",
        disclaimer:
            "* Los resultados mostrados son estimaciones basadas en el rendimiento histórico de la plataforma. Las inversiones conllevan riesgos.",
        demoAccountTitle: "PRUEBE LA CUENTA DE DEMOSTRACIÓN DE COIN SIN LIMITED",
        demoAccountText1:
            "¡Siéntase libre del alto costo de entrada en el mundo de la inversión! No necesita gastar decenas de miles de dólares para entender el comercio de criptomonedas, cómo funciona y qué debe hacer para evitar pérdidas. Le ofrecemos la oportunidad de invertir incluso unos pocos cientos de dólares y convertirlos en un negocio rentable.",
        demoAccountText2:
            "¡Pruebe una herramienta sin riesgos para un comercio rentable! Regístrese, deposite al menos €250 y obtenga su primer beneficio hoy mismo. Simplemente desplácese hasta la parte inferior de la página y regístrese.",
        notScamTitle: "COIN SIN LIMITED NO ES UNA ESTAFA, Y HE AQUÍ POR QUÉ",
        notScamText1:
            "Es un proyecto de inversión automatizado que ofrece la oportunidad de ganar dinero invirtiendo en criptomonedas populares y proyectos prometedores en el mundo de los activos digitales. El sistema está controlado por ingenieros informáticos y corredores registrados en CySEC. Corredores autorizados llevan a cabo los procesos financieros en el sistema.",
        notScamText2:
            "Los usuarios tienen acceso a una cuenta demostración virtual donde pueden evaluar sin riesgos las capacidades del sistema antes de invertir fondos reales. La protección del usuario es el principal requisito del proyecto. Los certificados SSL y la encriptación multicapa protegen de forma fiable todos los datos personales.",
        notScamText3:
            "Por seguridad, se recomienda cerrar sesión después de cada uso y evitar la conexión al sistema desde redes públicas.",
        notScamText4:
            "Coin Sin Limited ofrece beneficios máximos y ganancias sin riesgos, y presenta pruebas de no fraude. También encontrará opiniones sobre Coin Sin Limited a continuación.",
        testimonialsTitle: "DESCUBRE LO QUE DICEN LOS MIEMBROS DE",
        testimonialsHighlight: "COIN SIN LIMITED",
        testimonialsTitle2: "SOBRE ESTA PLATAFORMA DE TRADING:",
        tradingEasyTitle: "TRADING CON COIN SIN LIMITED ES",
        tradingEasyHighlight: "¡100% FÁCIL Y CÓMODO!",
        tradingEasyIntro:
            "Al enviar el formulario a continuación con tu información precisa en esta página web, desbloquearás rápidamente el acceso sin restricciones a nuestro sistema de comercio de IA altamente confiable, dedicado e imparcial. Únete a los más de 2,500 inversores astutos que ya se están beneficiando de sus capacidades.",
        featureAiSelectionsTitle: "SELECCIONES DE INVERSIÓN EXCLUSIVAMENTE RENTABLES REALIZADAS POR IA",
        featureAiSelectionsText:
            "Atrás quedaron los días en que las inversiones estaban reservados para los ricos. Nuestro avanzado sistema informático analiza meticulosamente la liquidez, la volatilidad y el volumen de operaciones, lo que garantiza decisiones de inversión óptimas. Disfruta de ingresos constantes en tu cuenta a través de acciones de empresas de primer nivel, respaldadas por una impresionante garantía de precisión comercial del 99.4%.",
        featureAutoTradingTitle: "FUNCIONALIDAD DE COMERCIO AUTOMÁTICO IMPECABLE",
        featureAutoTradingText:
            "Experimenta la Conveniencia de nuestra función de trading automático, que te permite generar ganancias sin esfuerzo, incluso cuando no estés en tu puesto de trabajo. ¡No se requiere experiencia comercial! Simplemente haz tu inversión inicial y observa cómo el saldo de tu cuenta crece constantemente.",
        featureSupportTitle: "SOPORTE COMPLETO AL USUARIO",
        featureSupportText:
            "Como miembro valioso de Coin Sin Limited, nuestro amigable gerente de atención al cliente está a tu disposición, listo para atender cualquier consulta o inquietud que puedas tener.",
        featureCommunityTitle: "ACCESO EXCLUSIVO A UNA COMUNIDAD ÚNICA",
        featureCommunityText:
            "Únete a nuestra prestigiosa comunidad Coin Sin Limited y obtén una membresía privilegiada. Considérate afortunado de haber encontrado la oportunidad de registrar. Ten en cuenta que, debido a las limitaciones de capacidad del sistema, solamente podemos enviar invitaciones a un número selecto de usuarios. Aprovecha esta oportunidad para resolver tus problemas económicos de una vez por todas.",
        createAccountButton: "¡Crea tu cuenta!",
        howToStartTitle: "CÓMO",
        howToStartHighlight: "EMPEZAR?",
        step1Title: "REGISTRO: COMPLETA EL FORMULARIO A CONTINUACIÓN",
        step1Description:
            "El formulario de registro está en esta página. Completa el formulario para convertirte en miembro. Una vez que tu registro sea aprobado, automáticamente te convertirás en un nuevo participante de Coin Sin Limited.",
        step2Title: "DEPOSITA €250 O MÁS",
        step2Description:
            "Como en cualquier empresa, necesitas un capital inicial. La ventaja de la plataforma Coin Sin Limited es que solo requiere una modesta inversión inicial. Simplemente deposita €250 o más para empezar a ganar dinero.",
        step3Title: "ESTATE ATENTO A TU TELÉFONO... ¡PODRÍAS RECIBIR UNA LLAMADA!",
        step3Description:
            "Después de realizar un pago, nuestro gerente se pondrá en contacto contigo para confirmar todo y activar tu cuenta. Si tienes alguna pregunta, el gerente te proporcionará respuestas detalladas para ayudarte. Ten en cuenta que la llamada puede provenir de un número no identificado.",
        faqTitle: "PREGUNTAS",
        faqHighlight: "FRECUENTES",
        finalSectionTitle: "APROVECHA LA OPORTUNIDAD DE CONVERTIRTE EN UN INVERSOR INTELIGENTE HOY Y...",
        finalSectionSubtitle: "...DESENCADENA UN MUNDO DE POSIBILIDADES, ¡CON UN MÍNIMO DE $1,000 EN TU CUENTA CADA DÍA!",
        finalSectionText:
            "Actúa ahora proporcionando tu nombre completo y correo electrónico en el formulario a continuación, y desbloquea la oportunidad más excepcional y exclusiva para generar ingresos sustanciales sin esfuerzo. Deja que la IA se encargue del trabajo duro mientras tú obtienes beneficios tangibles al instante. ¡No te lo pierdas!",
        footerCompanyInfo:
            "Coin Sin Limited es una empresa especializada en proporcionar información y herramientas para la inversión y el trading de criptomonedas, basada en inteligencia artificial.",
        footerContactanos: "Contáctanos",
        footerPrivacidad: "Privacidad",
        footerTerminos: "Términos",
        footerDescargo: "Descargo de Responsabilidad",
        footerAbuso: "Reporte de Abuso",
        footerEmailLabel: "Email:",
        footerCopyright: "Todos los derechos reservados.",
        smallFormNamePlaceholder: "Tu nombre",
        smallFormSurnamePlaceholder: "Tu apellido",
        smallFormEmailPlaceholder: "Tu correo electrónico",
        smallFormPhonePlaceholder: "9 11 2345-6789",
        smallFormRegisterButton: "Regístrame",
        smallFormTermsText:
            "Al registrarte, aceptas y estás de acuerdo con los términos de uso y la Política de privacidad del sitio.",
        smallFormPrivacyText:
            "Tus datos siempre están protegidos con Coin Sin Limited. Al completar este formulario, aceptas recibir nuestros correos electrónicos de marketing.",
        ageConfirmation: "Confirmo que soy mayor de edad.",
        disclaimerFull: `IMPORTANTE: Exenciones de Responsabilidad de Ingresos y Legales. Las gráficas de ingresos y ganancias creadas por smartbitboost.io, también conocido como "Este Sitio Web", se utilizan únicamente como ilustraciones ideales de su potencial de ganancias. El éxito de las personas en testimonios y otros ejemplos son resultados excepcionales, por lo que no están destinados a garantizar que usted u otros logren lo mismo. Los resultados individuales dependerán de cómo use smartbitboost.io. Por lo que haga, este sitio web no tiene responsabilidad. Siempre debe actuar con precaución y diligencia debida porque asume toda la responsabilidad por sus acciones y decisiones al utilizar productos y servicios. Acepta que de ninguna manera este sitio web será responsable de los resultados de su uso de nuestros servicios. Consulte nuestros términos de uso para obtener información sobre nuestras exenciones de responsabilidad y otras restricciones. Si bien el comercio puede generar beneficios notables, también conlleva el riesgo de perder el capital invertido en parte o en su totalidad, por lo que debe considerar si puede permitirse invertir. ©2025AVISO DE REGULACIÓN EN USA: El comercio de Forex, CFDs y criptomonedas no está bajo ninguna regulación estadounidense. La inversión en criptomonedas no está regulada ni supervisada por ninguna agencia financiera o de EE. UU. Cualquier comercio que no sea regulado por residentes estadounidenses se considera ilegal. Este sitio web no acepta clientes estadounidenses o ciudadanos estadounidenses. Este sitio web no tiene responsabilidad por las acciones de los clientes ubicados o con ciudadanía estadounidense. Los clientes ubicados dentro de los Estados Unidos o con ciudadanía estadounidense asumen toda la responsabilidad por sus acciones y decisiones al usar productos y servicios de este Sitio Web. En cualquier y todas las circunstancias, la elección de utilizar el Sitio Web, el Servicio y/o el Software es bajo la total responsabilidad del Usuario, quien debe cumplir con la legislación vigente.`,
        privacyPolicyContent: {
            title: "Política de Privacidad",
            general: {
                heading: "General",
                p1: "Recibimos sus datos personales para el uso del Sitio Web y/o Servicio. La información detallada sobre el procesamiento de sus datos personales se proporciona en esta Política de Privacidad.",
                p2: "Esta página le informa sobre nuestras políticas con respecto a la recopilación, uso y divulgación de datos personales cuando usted, como Usuario de este Sitio Web (en adelante, «Usted» o «Usuario»), utiliza este Sitio Web.",
                p3: "Al utilizar el Sitio Web, usted acepta la recopilación y el uso de información de acuerdo con esta política. A menos que se defina lo contrario en esta Política de Privacidad, los términos utilizados en esta Política de Privacidad tienen el mismo significado que en nuestros términos de uso del Sitio Web.",
            },
            methodsAndPrinciples: {
                heading: "Métodos y principios del procesamiento de datos personales",
                p1: "Respetamos su seguridad y procesamos su propia información con dignidad, legalmente y de acuerdo con esta Política de Privacidad y la ley pertinente. En caso de que se encuentre en la Unión Europea, procesamos sus datos personales según el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos, y por el que se deroga la Directiva 95/46/CE (Reglamento General de Protección de Datos; “RGPD”).",
                p2: "Para evitar la divulgación y el uso no autorizados de datos personales que no tienen la autoridad para divulgar dichos datos, así como para prevenir otros tipos de violaciones de seguridad de los datos personales que se están procesando, hemos desarrollado medidas técnicas y organizativas adecuadas.",
                p3: "En caso de que ocurra alguna violación de la seguridad de los datos personales procesados, que implique un alto riesgo para sus derechos y libertades, le informaremos inmediatamente a nuestra dirección de correo electrónico.",
                p4: "Si no ha dado su consentimiento previo, no procesaremos sus datos personales.",
            },
            processedPersonalData: {
                heading: "Datos personales procesados",
                p1: "El procesamiento de datos personales ocurre después de que se ingresan en el formulario de registro en el Sitio Web. Al enviar el formulario de registro, usted acepta celebrar un acuerdo con nosotros bajo los términos de los cuales facilitamos la comunicación entre el proveedor de Productos y/o Servicios (Anunciante) y usted, con el fin de procesar su solicitud para celebrar un acuerdo con el Anunciante para la compra de Servicios o Productos anunciados en el Sitio Web.",
                p2: "Las direcciones IP y las cookies de los usuarios de nuestro sitio web son recopiladas y procesadas por nosotros. Las cookies son pequeños fragmentos de datos enviados por un servidor web y almacenados en su computadora; estos datos nos ayudan a mejorar la experiencia de nuestro sitio web. Puede rechazar las cookies deshabilitándolas en la configuración de su navegador web; sin embargo, restringir el uso de cookies puede afectar el funcionamiento de nuestro sitio web.",
                p3: "Usted confirma que todos los datos personales que proporciona están actualizados, son veraces y correctos. Usted es responsable de cualquier daño causado por la provisión de información personal incorrecta.",
            },
            methodsOfProcessing: {
                heading: "Métodos de procesamiento de datos personales",
                p1: "El procesamiento de datos personales se realiza automáticamente. El procesamiento de datos personales es automático; este proceso no puede dar lugar a consecuencias legales ni afectarle de ninguna otra manera.",
                p2: "El procesamiento de datos personales puede delegarse a otros proveedores de servicios de envío masivo, procesadores y proveedores de servicios de TI y en la nube. Además, podemos delegar parte o la totalidad del procesamiento al procesador, al proveedor de servicios de envío masivo, al proveedor de servicios de TI y al proveedor de servicios en la nube. La selección de los procesadores se realiza con el mayor cuidado posible para que sus datos personales estén protegidos en todo momento durante su procesamiento.",
                p3: "Para utilizar el Servicio, es necesario proporcionar sus datos personales a los Anunciantes.",
                p4: "Los datos pueden transferirse a cualquier estado del mundo. Los Anunciantes y procesadores son los receptores de sus datos personales. Para completar el contrato entre nosotros, se requiere la transferencia de sus datos personales a los Anunciantes, según se especifica en los Términos. La transferencia de datos personales se realiza utilizando las precauciones suficientes para garantizar que sus datos personales estén debidamente protegidos.",
            },
            legalBasisAndPeriods: {
                heading: "Base legal y períodos del procesamiento de datos personales",
                p1: "Para brindarle Servicios de calidad, necesitamos procesar los datos personales que nos proporcionó en el formulario de registro o que nos proporcionó de cualquier otra manera. El procesamiento de datos se realiza durante el período en que le brindamos servicios de acuerdo con los Términos.",
                p2: "La dirección IP, la dirección de correo electrónico y la información derivada de las cookies se procesan para enviarle notificaciones de servicios y productos relacionados con el Sitio Web, así como información sobre oportunidades comerciales que puedan interesarle. Entre las ofertas comerciales, puede encontrar anunciantes u otros socios comerciales nuestros. El procesamiento de datos personales se realiza según su consentimiento (marcado en el formulario de registro). Usted tiene derecho a retirar su consentimiento para la recopilación de datos personales sin afectar la legalidad del procesamiento basado en dicho consentimiento antes de su revocación, así como el procesamiento realizado sobre otras bases legales que no sean su consentimiento. El procesamiento de su dirección de correo electrónico para este fin se procesará hasta que retire su consentimiento.",
            },
            dataSubjectRights: {
                heading: "Derechos del interesado",
                p1: "En caso de que el RGPD sea aplicable, usted tiene los siguientes derechos del interesado, entre otros:",
                list: [
                    "– Derecho de acceso a los datos personales (Artículo 15 del RGPD);",
                    "– Derecho de rectificación (Artículo 16 del RGPD);",
                    "– Derecho de supresión (Artículo 17 del RGPD);",
                    "– Derecho a la limitación del tratamiento (Artículo 18 del RGPD);",
                    "– Derecho a la portabilidad de los datos (Artículo 20 del RGPD);",
                    "– Derecho de oposición (Artículo 21 del RGPD);",
                    "– Derecho a no ser objeto de una decisión basada únicamente en el tratamiento automatizado, incluida la elaboración de perfiles, que produzca efectos jurídicos en usted o le afecte significativamente de forma similar (Artículo 22 del RGPD);",
                    "– Derecho a presentar una reclamación ante una autoridad de control (Artículo 77 del RGPD).",
                ],
                p2: "Declaramos que no somos responsables del tratamiento en el sentido del reglamento RGPD, ya que no determinamos los fines y medios del tratamiento de datos personales, lo cual recae bajo la responsabilidad del Anunciante.",
                p3: "Cabe señalar que en los casos en que no estemos obligados a estar sujetos al RGPD, no estamos obligados a cumplir con estos derechos. Sin embargo, incluso en este caso, haremos todo lo posible para satisfacer su queja o solicitud. Antes de actuar sobre su solicitud, es posible que deba verificar su identidad; esta medida es necesaria para proteger sus datos personales, por lo que no compartimos sus datos personales con terceros. Si se niega a proporcionarnos información que nos permita identificarle, no podremos procesar su solicitud.",
                p4: "Esta Política de Privacidad puede ser modificada o complementada por nosotros unilateralmente de vez en cuando. La nueva edición de la Política de Privacidad entra en vigor desde el momento de su publicación en el Sitio Web.",
                p5: "Tenga en cuenta que si continúa utilizando el Sitio Web y el Servicio después de cualquier cambio en la Política de Privacidad, significa que está de acuerdo y consiente en estar sujeto a la nueva Política de Privacidad. Si no está de acuerdo con algún cambio en esta Política de Privacidad y no desea que su información esté sujeta a ella, deberá dejar de usar el Sitio Web y el Servicio.",
                p6: "Una respuesta a su solicitud puede recibirse dentro de los 40 (cuarenta) días hábiles a partir del momento en que la recibimos. En una situación en la que sea imposible procesar su solicitud, definitivamente se lo notificaremos. Para la comunicación utilizamos medios electrónicos de comunicación, por ejemplo, correo electrónico o mensajería; si prefiere un método de comunicación diferente, notifíquenoslo.",
                p7: "Proporcionaremos cualquier comunicación y cualquier acción de forma gratuita; sin embargo, cuando sea necesario, podemos cobrarle una tarifa razonable, teniendo en cuenta los costos administrativos y otras características asociadas con la provisión de información, o negarnos a actuar según la solicitud.",
                p8: "Puede presentar una queja relacionada con la protección de datos personales ante el organismo estatal correspondiente, solicitar protección judicial si cree que sus derechos han sido violados. También puede presentar cualquier queja o solicitud poniéndose en contacto con nosotros.",
                p9: "Si necesita más información sobre las autoridades relevantes en su país o cualquier otra información, no dude en contactarnos.",
                copyright: "Copyright © 2023 producto | Todos los derechos reservados",
            },
        },
    },
    en: {
        notification:
            "Act now! Coin Sin Limited is accelerating participants' earnings! Secure your spot before the Private invitation expires!",
        platformBenefit: "NET User Benefit:",
        userIncome: "New users to date",
        mainTitle: "Smart income every day for your new",
        mainTitleHighlight: "stress-free life forever",
        subtitle: "Our users typically make x2, x5, and even x10 on investments",
        readyToJoin: "READY TO JOIN? START YOUR SYSTEM REGISTRATION HERE AND NOW.",
        motivationalText:
            "YOU HAVE THE RIGHT TO FINANCIAL INDEPENDENCE, AND IT IS NOT A PRIVILEGE. IT IS YOUR RIGHT, REGARDLESS OF YOUR AGE, ACHIEVEMENTS, AND SOCIAL STATUS.",
        playVideo: "Play Video",
        pauseVideo: "Pause Video",
        improveLife: "IMPROVE YOUR LIFE TODAY",
        namePlaceholder: "Your name",
        surnamePlaceholder: "Your surname",
        emailPlaceholder: "Your email",
        phonePlaceholder: "9 11 2345-6789",
        registerButton: "Register me",
        searchCountry: "Search country...",
        termsText: "By registering, you accept and agree to the terms of use and the site's Privacy Policy.",
        privacyText:
            "Your data is always protected with Coin Sin Limited. By completing this form, you agree to receive our marketing emails. You can change your mind at any time by clicking the unsubscribe link at the bottom of any of our emails.",
        registrationSuccessTitle: "Thank You for Registering!",
        noCountriesFound: "No countries found",
        masterTradingTitle: "MASTER CRYPTOCURRENCY TRADING WITH OUR",
        masterTradingHighlight: "AI INVESTMENT TOOL WITH 99.4% ACCURACY",
        ctaParagraph1:
            "Imagine a new life where work becomes optional, savings are no longer necessary, and all your bills are paid effortlessly. Imagine the freedom to explore, plan for a new car, or even own a home.",
        ctaParagraph2:
            "Now imagine looking at your smartphone screen and witnessing another effortless $1,000 gain today. Sounds appealing, right?",
        ctaParagraph3:
            "Coin Sin Limited makes it possible. As an AI-powered startup platform, we empower new investors to dive into the world of cryptocurrency investments, regardless of their prior experience. By starting with an investment of just €250, you can seize the opportunity to multiply your daily earnings by x5.",
        ctaParagraph4:
            "Ready to join us? Follow the instructions on this page and embark on your exciting journey towards a stable, worry-free life, full of abundant pleasures!",
        startNowButton: "Start now",
        advantagesTitle:
            "ADVANTAGES OF INVESTING IN POPULAR CURRENCIES AND ESSENTIAL INFORMATION ABOUT THE COIN SIN LIMITED PLATFORM",
        advantagesIntro:
            "Investing in digital currencies is an attractive option for investors. Cryptocurrencies gather all the necessary characteristics to offer stable liquidity. Two key factors determine the benefits of this type of investment:",
        growthPotentialTitle: "Growth potential:",
        growthPotentialText:
            "Some cryptocurrencies have already reached significant value, but many projects have great development potential. Due to their growing popularity, the cryptocurrency market attracts investors who can obtain high returns by investing in digital assets.",
        diversificationTitle: "Portfolio diversification:",
        diversificationText:
            "Cryptocurrencies provide the opportunity to diversify your investment portfolio. They provide an alternative asset class that is independent of traditional financial markets. Investing in cryptocurrencies helps diversify risk and protect the portfolio from possible negative influences in one area.",
        focusOnPlatformTitle: "Let's now focus on the Coin Sin Limited platform.",
        focusOnPlatformText1:
            "Why is artificial intelligence (AI) fundamental to the investment market? AI is faster than the human brain and can analyze data accurately, provided the system is configured correctly. Machine learning has three significant advantages in the investment market.",
        focusOnPlatformText2:
            "In addition, artificial intelligence operates in the market 24/7 now. It means real-time global situation awareness, knowledge accumulation about patterns, and immediate creation of profitable strategies. The Coin Sin Limited platform offers an effective profitability achievable for humans. It is a matter of time until machines fully assume this function.",
        focusOnPlatformText3:
            "Another factor that makes investing in Canada, Australia, and other countries attractive is education. Many people feel that a human can make decisions influenced by emotions, a machine remains objective and rational. It is essential not to forget emotions. Segregating rationality from emotion is fundamental, but a realization in the investment sphere, where everything is decided based on pure data and exact forecasts.",
        focusOnPlatformText4:
            "Furthermore, investing before earning income is significantly different. Before a person starts earning income, they spend a significant amount of money on testing, which has benefits, in addition to acquiring situational experience and investment awareness. In contrast, a machine handles this much faster and requires minimal outlay to maximize income.",
        nineReasonsIntro:
            "Thus, we have nine main reasons why using the Coin Sin Limited platform is beneficial, especially for beginner traders:",
        reason1:
            "Our trading tools process large amounts of data quickly and efficiently, allowing you to make accurate decisions.",
        reason2:
            "Artificial intelligence-based software provides advanced market analysis with accurate data and forecasts.",
        reason3: "Artificial intelligence adapts to current market conditions, suggesting the best investment strategies.",
        reason4:
            "Investing with an artificial intelligence-based system is not affected by human errors and provides objective information.",
        reason5: "Investing using a machine is cheaper than making human decisions and generates more profits.",
        reason6: "Artificial intelligence requires less initial investment, which increases investment efficiency.",
        reason7:
            "Investing with artificial intelligence-based tools makes investments affordable in Canada, Australia, and other countries.",
        reason8: "Using artificial intelligence increases the speed of decision-making.",
        reason9: "Artificial intelligence provides faster decision-making to make better investment actions.",
        efficiencyGuarantee:
            "Thus, artificial intelligence guarantees investment profitability by ensuring system efficiency of at least 95%. Accuracy depends on the specific system, but can reach between 95% and 99.4% for humans. The efficiency of our Coin Sin Limited algorithm-based trading instruments is 99.4%.",
        platformBenefitTitle: "COIN SIN LIMITED IS A PLATFORM THAT WORKS FOR THE INVESTOR'S BENEFIT",
        platformBenefitText1:
            "For novice investors, investing in cryptocurrencies can be incredibly complicated. Often, beginners need to understand all the ins and outs of this field so as not to lose their small investments in the shortest possible time. This leads them to lose interest in cryptocurrencies and in investing in general. However, they need to realize the potential opportunities they are missing.",
        platformBenefitText2:
            "The Coin Sin Limited platform allows them to make their dreams of stable passive income come true. Based on artificial intelligence, this algorithm continuously works, analyzing the market situation, studying cryptocurrency trends, and performing operations that are almost always profitable. Thousands of people around the world have already generated billions of dollars with Coin Sin Limited.",
        platformFeaturesTitle: "The features of the Coin Sin Limited platform include:",
        feature1:
            "A deep understanding of the cryptocurrency market and trends in the world of digital assets that are beyond the reach of the human mind.",
        feature2:
            "The supercomputer can calculate millions of variations every second and predict trends with maximum accuracy.",
        feature3: "Secure operations with benefits for the investor.",
        platformUnnoticedText:
            "The Coin Sin Limited platform went unnoticed at the time of product launch. However, it is causing anger and panic among central banks and governments around the world. While big players try to stop the Coin Sin Limited platform project, you can start earning a lot of money now.",
        investSmartTitle: "INVEST IN CRYPTOCURRENCIES SMARTLY WITH THE COIN SIN LIMITED PLATFORM",
        investSmartText1:
            "Times are not easy, and everything around us is slowly going down. Although the situation may improve in the future, everyone should take care of their future today so as not to depend on external factors. Smart tools can help you with this.",
        investSmartText2:
            "The Coin Sin Limited investment platform allows you to do so without wasting time studying the digital currency market. You can start investing today in countries like Canada, Australia, and others. Success is pre-calculated, and all you need is the desire to join.",
        algorithmToolsIntro: "The algorithm provides you with the tools to help you:",
        tool1: "Avoid unnecessary risks and losses.",
        tool2: "Obtain almost totally passive income.",
        tool3: "Work in the market with broad portfolio diversification and parallel risk reduction.",
        tool4: "Receive stable income both in the short and long term.",
        finalInvitation:
            "Therefore, we invite you to start writing the first page of your success story as an investor today after reading the Coin Sin Limited review!",
        potentialEarningsTitle: "WHAT POTENTIAL EARNINGS CAN I EXPECT WHEN INVESTING WITH COIN SIN LIMITED?",
        myInvestment: "My investment:",
        usagePeriod: "Usage period:",
        days: "days",
        potentialProfit: "Potential Profit",
        startInvestingNowButton: "Start Investing Now!",
        disclaimer:
            "* The results shown are estimates based on the platform's historical performance. Investments carry risks.",
        demoAccountTitle: "TRY THE COIN SIN LIMITED DEMO ACCOUNT",
        demoAccountText1:
            "Feel free from the high cost of entry into the world of investment! You don't need to spend tens of thousands of dollars to understand cryptocurrency trading, how it works, and what you need to do to avoid losses. We offer you the opportunity to invest even a few hundred dollars and turn them into a profitable business.",
        demoAccountText2:
            "Try a risk-free tool for profitable trading! Register, deposit at least €250, and get your first profit today. Simply scroll to the bottom of the page and register.",
        notScamTitle: "COIN SIN LIMITED IS NOT A SCAM, AND HERE'S WHY",
        notScamText1:
            "It is an automated investment project that offers the opportunity to earn money by investing in popular cryptocurrencies and promising projects in the world of digital assets. The system is controlled by computer engineers and brokers registered with CySEC. Authorized brokers carry out financial processes in the system.",
        notScamText2:
            "Users have access to a virtual demo account where they can risk-free evaluate the system's capabilities before investing real funds. User protection is the main requirement of the project. SSL certificates and multi-layer encryption reliably protect all personal data.",
        notScamText3:
            "For security, it is recommended to log out after each use and avoid connecting to the system from public networks.",
        notScamText4:
            "Coin Sin Limited offers maximum benefits and risk-free earnings, and presents proof of non-fraud. You will also find reviews about Coin Sin Limited below.",
        testimonialsTitle: "DISCOVER WHAT MEMBERS OF",
        testimonialsHighlight: "COIN SIN LIMITED",
        testimonialsTitle2: "SAY ABOUT THIS TRADING PLATFORM:",
        tradingEasyTitle: "TRADING WITH COIN SIN LIMITED IS",
        tradingEasyHighlight: "100% EASY AND COMFORTABLE!",
        tradingEasyIntro:
            "By submitting the form below with your accurate information on this webpage, you will quickly unlock unrestricted access to our highly reliable, dedicated, and unbiased AI trading system. Join the more than 2,500 astute investors who are already benefiting from its capabilities.",
        featureAiSelectionsTitle: "EXCLUSIVELY PROFITABLE INVESTMENT SELECTIONS MADE BY AI",
        featureAiSelectionsText:
            "Gone are the days when investments were reserved for the wealthy. Our advanced computer system meticulously analyzes liquidity, volatility, and trading volume, ensuring optimal investment decisions. Enjoy consistent income in your account through top-tier company shares, backed by an impressive 99.4% trading accuracy guarantee.",
        featureAutoTradingTitle: "IMPECCABLE AUTOMATIC TRADING FUNCTIONALITY",
        featureAutoTradingText:
            "Experience the Convenience of our automatic trading feature, which allows you to effortlessly generate profits, even when you are not at your workstation. No trading experience required! Simply make your initial investment and watch your account balance grow steadily.",
        featureSupportTitle: "COMPREHENSIVE USER SUPPORT",
        featureSupportText:
            "As a valuable member of Coin Sin Limited, our friendly customer service manager is at your disposal, ready to address any questions or concerns you may have.",
        featureCommunityTitle: "EXCLUSIVE ACCESS TO A UNIQUE COMMUNITY",
        featureCommunityText:
            "Join our prestigious Coin Sin Limited community and gain privileged membership. Consider yourself lucky to have found the opportunity to register. Please note that, due to system capacity limitations, we can only send invitations to a select number of users. Take advantage of this opportunity to solve your financial problems once and for all.",
        createAccountButton: "Create your account!",
        howToStartTitle: "HOW TO",
        howToStartHighlight: "GET STARTED?",
        step1Title: "REGISTRATION: COMPLETE THE FORM BELOW",
        step1Description:
            "The registration form is on this page. Complete the form to become a member. Once your registration is approved, you will automatically become a new Coin Sin Limited participant.",
        step2Title: "DEPOSIT €250 OR MORE",
        step2Description:
            "As with any business venture, you need some initial capital. The advantage of the Coin Sin Limited platform is that it only requires a modest initial investment. Simply deposit €250 or more to start earning money.",
        step3Title: "KEEP AN EYE ON YOUR PHONE... YOU MIGHT GET A CALL!",
        step3Description:
            "After making a payment, our manager will contact you to confirm everything and activate your account. If you have any questions, the manager will provide detailed answers to help you. Please note that the call may come from an unidentified number.",
        faqTitle: "FREQUENTLY",
        faqHighlight: "ASKED QUESTIONS",
        finalSectionTitle: "SEIZE THE OPPORTUNITY TO BECOME A SMART INVESTOR TODAY AND...",
        finalSectionSubtitle: "...UNLEASH A WORLD OF POSSIBILITIES, WITH A MINIMUM OF $1,000 IN YOUR ACCOUNT EVERY DAY!",
        finalSectionText:
            "Take action now by providing your full name and email in the form below, and unlock the most exceptional and exclusive opportunity to generate substantial income effortlessly. Let AI handle the hard work while you reap tangible benefits instantly. Don't miss out!",
        footerCompanyInfo:
            "Coin Sin Limited is a company specializing in providing information and tools for cryptocurrency investment and trading, based on artificial intelligence.",
        footerContactanos: "Contact Us",
        footerPrivacidad: "Privacy",
        footerTerminos: "Terms",
        footerDescargo: "Disclaimer",
        footerAbuso: "Abuse Report",
        footerEmailLabel: "Email:",
        footerCopyright: "All rights reserved.",
        smallFormNamePlaceholder: "Your name",
        smallFormSurnamePlaceholder: "Your surname",
        smallFormEmailPlaceholder: "Your email",
        smallFormPhonePlaceholder: "9 11 2345-6789",
        smallFormRegisterButton: "Register me",
        smallFormTermsText: "By registering, you accept and agree to the terms of use and the site's Privacy Policy.",
        smallFormPrivacyText:
            "Your data is always protected with Coin Sin Limited. By completing this form, you agree to receive our marketing emails.",
        ageConfirmation: "I confirm I am of legal age.",
        disclaimerFull: `IMPORTANT: Income and Legal Disclaimers. The income and earnings graphs created by smartbitboost.io, also known as "This Website", are used solely as ideal illustrations of your earning potential. The success of individuals in testimonials and other examples are exceptional results, and therefore are not intended to guarantee that you or others will achieve the same. Individual results will depend on how you use smartbitboost.io. For whatever you do, this website has no responsibility. You should always act with caution and due diligence because you assume full responsibility for your actions and decisions when using products and services. You agree that in no way will this website be responsible for the results of your use of our services. See our terms of use for information on our disclaimers and other restrictions. While trading can generate notable benefits, it also carries the risk of losing invested capital in part or in full, so you should consider whether you can afford to invest. ©2025USA REGULATORY NOTICE: Forex, CFD, and cryptocurrency trading is not under any US regulation. Cryptocurrency investment is not regulated or supervised by any US or financial agency. Any unregulated trading by US residents is considered illegal. This website does not accept US clients or US citizens. This website has no responsibility for the actions of clients located in or with US citizenship. Clients located within the United States or with US citizenship assume full responsibility for their actions and decisions when using products and services from this Website. In any and all circumstances, the choice to use the Website, the Service and/or the Software is under the sole responsibility of the User, who must comply with current legislation.`,
        privacyPolicyContent: {
            title: "Privacy Policy",
            general: {
                heading: "General",
                p1: "We receive your personal data to use the Website and/or Service. Detailed information on the processing of your personal data is provided in this Privacy Policy.",
                p2: "This page informs you of our policies regarding the collection, use, and disclosure of personal data when you as a User of this Website (hereinafter «You» or «User») use this Website.",
                p3: "By using the Website, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Website terms of use.",
            },
            methodsAndPrinciples: {
                heading: "Methods and principles of personal data processing",
                p1: "We honor your security and process your own information with dignity, lawfully and in accordance with this Privacy Policy and relevant law. In case you are in the European Union, we process your personal data as per the Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation; “GDPR”).",
                p2: "In order to avoid unauthorized disclosure and use of personal data that do not have the authority to disclose such data, as well as to prevent other types of security breaches of personal data that are being processed, we have developed appropriate technical and organizational measures.",
                p3: "In the event that any violation of the security of the processed personal data occurs, which entails a high risk for your rights and freedoms, we will immediately inform you of our email address.",
                p4: "If you have not given your prior consent, we will not process your personal data.",
            },
            processedPersonalData: {
                heading: "Processed personal data",
                p1: "The processing of personal data occurs after they are entered into the registration form on the Website. When submitting the registration form, you agree to conclude an agreement with us under the terms of which we facilitates communication between the supplier of Products and / or Services (Advertiser) and you, in order to process your application for concluding an agreement with the Advertiser for the purchase of Services or Products advertised on the Website.",
                p2: "The IP addresses and cookies of users of our website are collected and processed by us. Cookies are small pieces of data sent by a web server and stored on your computer, this data helps us improve our website experience. You can refuse cookies by disabling them in the settings in your web browser, however, restricting the usage of cookies may affect the operation of our website.",
                p3: "You confirm that all the personal data you provide is up-to-date, truthful and correct. You are responsible for any damage caused by the provision of incorrect personal information.",
            },
            methodsOfProcessing: {
                heading: "Methods of personal data processing",
                p1: "The processing of personal data is carried out automatically. The processing of personal data is automatic, this process cannot lead to any legal consequences, or in any other way affect you.",
                p2: "The processing of personal data may be delegated to other mass mailing service providers, processors, and IT and cloud service providers. In addition, we may delegate part or all of the processing to the processor, the mass mailing service provider, the IT service provider, and the cloud service provider. The selection of processors is carried out as carefully as possible so that your personal data is protected at any time during their processing.",
                p3: "To use the Service, it is necessary to provide your personal data to Advertisers.",
                p4: "Data can be transferred to any state in the world. Advertisers and processors are the recipients of your personal data. To complete the contract between us, the transfer of your personal data to Advertisers is required, as specified in the Terms. The transfer of personal data takes place using sufficient precautions to ensure that your personal data is properly protected.",
            },
            legalBasisAndPeriods: {
                heading: "Legal basis and periods of the personal data processing",
                p1: "In order to provide you with quality Services, we need to process the personal data that you provided to us in the registration form or give this data in any other way. Data processing is performed during the period we provide you with services in accordance with the Terms.",
                p2: "IP address, email address and cookie-derived information are processed to send you notifications of services and products related to the Website, as well as information about commercial opportunities that may interest you. Among the commercial offers, you can find advertisers or our other business partners. The processing of personal data is carried out according to your consent (mark in the registration form). You have the right to withdraw your consent to the collection of personal data without affecting the legality of the processing based on such consent prior to its revocation, as well as processing performed on other legal grounds than your consent. The processing of your email address for this purpose will be processed until you withdraw your consent.",
            },
            dataSubjectRights: {
                heading: "Data subject rights",
                p1: "In case GDPR is applicable, you have the following rights of the data subject, but not limited to:",
                list: [
                    "– Right of access to personal data (Article 15 of GDPR);",
                    "– Right to rectification (Article 16 of GDPR);",
                    "– Right to erasure (Article 17 of GDPR);",
                    "– Right to restriction of processing (Article 18 of GDPR);",
                    "– Right to data portability (Article 20 of GDPR);",
                    "– Right to object (Article 21 of GDPR);",
                    "– Right not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects concerning the data subject or similarly significantly affects the data subject (Article 22 of GDPR);",
                    "– Right to lodge a complaint with a supervisory authority (Article 77 of GDPR).",
                ],
                p2: "We state that we are not controller in the meaning of the GDPR regulation, as far as we do not determine the purposes and means of the processing of personal data, which succumbs to the Advertiser’s responsibility.",
                p3: "It should be noted that in cases where we are not required to be subject to the GDPR, we are not required to comply with these rights. However, even in this case, we will do our best to satisfy your complaint or request. Before we act on your request, you may need to verify your identity, this measure is necessary to protect your personal data, therefore we do not share your personal data with third parties. If you refuse to provide us with information that allows us to identify you, we will not be able to process your request.",
                p4: "This Privacy Policy may from time to time be changed or supplemented by us unilaterally. The new edition of the Privacy Policy comes into force from the moment they are published on the Website.",
                p5: "Please note that if you continue to use of the Website and the Service after any change of the Privacy Policy, means that you agree with, and consent to be bound by, the new Privacy Policy. If you disagree with any changes in this Privacy Policy and do not wish your information to be subject to it, you will need to stop using the Website and the Service.",
                p6: "A response to your request can be received within 40 (forty) working days from the moment we receive it. In a situation where it is impossible to process your request, we will definitely notify you about it. For communication we use electronic means of communication, for example e-mail or messenger, if you prefer a different method of communication, please notify us of this.",
                p7: "We will provide any communication and any action for free, however, when required, we may charge you a reasonable fee, taking into account administrative costs and other features associated with the provision of information or refuse to act upon request.",
                p8: "You can file a complaint related to the protection of personal data with the appropriate state body, request judicial protection if you believe that your rights have been violated. You can also file any complaint or request by contacting us.",
                p9: "If you need more information about the relevant authorities in your country or any such information, do not hesitate to contact us.",
                copyright: "Copyright © 2023 product | All Rights Reserved",
            },
        },
    },
    ca: {
        notification:
            "Actua ara! Coin Sin Limited està accelerant els guanys dels participants! Assegura el teu lloc abans que caduqui la invitació Privada!",
        platformBenefit: "Benefici NET d'Usuaris:",
        userIncome: "Usuaris nous a la data",
        mainTitle: "Ingressos intel·ligents cada dia per a la teva nova",
        mainTitleHighlight: "vida sense estrès per sempre",
        subtitle: "Els nostres usuaris solen fer x2, x5 i fins i tot x10 en inversions",
        readyToJoin: "LLest per unir-te? Inicia el teu registre al sistema aquí i ara.",
        motivationalText:
            "TENS DRET A LA INDEPENDÈNCIA FINANCERA, I NO ÉS UN PRIVILEGI. ÉS EL TEU DRET, INDEPENDENTMENT DE LA TEVA EDAT, ASSOLIMENTS I ESTATUS SOCIAL.",
        playVideo: "Reproduir Vídeo",
        pauseVideo: "Pausar Vídeo",
        improveLife: "MILLORA LA TEVA VIDA AVUI",
        namePlaceholder: "El teu nom",
        surnamePlaceholder: "El teu cognom",
        emailPlaceholder: "El teu correu electrònic",
        phonePlaceholder: "9 11 2345-6789",
        registerButton: "Registra'm",
        searchCountry: "Cercar país...",
        termsText: "En registrar-te, acceptes i estàs d'acord amb els termes d'ús i la Política de privadesa del lloc.",
        privacyText:
            "Les teves dades sempre estan protegides amb Coin Sin Limited. En completar aquest formulari, acceptes rebre els nostres correus electrònics de màrqueting. Pots canviar d'opinió en qualsevol moment fent clic a l'enllaç per donar-te de baixa a la part inferior de qualsevol dels nostres correus electrònics.",
        registrationSuccessTitle: "Moltes Gràcies per Registrar-te!",
        noCountriesFound: "No s'han trobat països",
        masterTradingTitle: "DOMINA EL TRADING DE CRIPTOMONEDES AMB EL NOSTRE",
        masterTradingHighlight: "SISTEMA D'INVERSIÓ PER IA AMB UNA PRECISIÓ DEL 99.4%",
        ctaParagraph1:
            "Imagina una nova vida en la qual la feina esdevingui opcional, els estalvis ja no siguin necessaris i totes les teves factures es paguin sense esforç. Imagina la llibertat d'explorar, planificar un cotxe nou o fins i tot tenir una casa.",
        ctaParagraph2:
            "Ara imagina't mirant la pantalla del teu telèfon intel·ligent i sent testimoni d'un altre guany de 1.000$ sense esforç avui mateix. Sona atractiu, oi?",
        ctaParagraph3:
            "Coin Sin Limited ho fa possible. Com una plataforma d'inici impulsada per IA, empoderem els nous inversors perquè es submergeixin en el món de les inversions en criptomonedes, independentment de la seva experiència prèvia. En començar amb una inversió de només 250€, pots aprofitar l'oportunitat de multiplicar els teus guanys diaris per x5.",
        ctaParagraph4:
            "Llest per unir-te a nosaltres? Segueix les instruccions d'aquesta pàgina i emprèn el teu emocionant viatge cap a una vida estable i sense preocupacions, plena d'abundants plaers!",
        startNowButton: "Comença ara",
        advantagesTitle:
            "AVANTATGES D'INVERTIR EN DIVISES POPULARS I INFORMACIÓ ESSENCIAL SOBRE LA PLATAFORMA COIN SIN LIMITED",
        advantagesIntro:
            "Invertir en divises digitals és una opció atractiva per als inversors. Les criptomonedes reuneixen totes les característiques necessàries per oferir una liquiditat estable. Dos factors clau determinen els beneficis d'aquest tipus d'inversions:",
        growthPotentialTitle: "Potencial de creixement:",
        growthPotentialText:
            "Algunes criptomonedes ja han assolit un valor significatiu, però molts projectes tenen un gran potencial de desenvolupament. A causa de la seva creixent popularitat, el mercat de les criptomonedes atrau inversors que poden obtenir alts rendiments invertint en actius digitals.",
        diversificationTitle: "Diversificació de la cartera:",
        diversificationText:
            "Les criptomonedes brinden l'oportunitat de diversificar la seva cartera de inversions. Proporcionen una classe d'actius alternativa que és independent dels mercats financers tradicionals. Invertir en criptomonedes ajuda a diversificar el risc i a protegir la cartera de possibles influències negatives en una àrea.",
        focusOnPlatformTitle: "Centrem-nos ara en la plataforma Coin Sin Limited.",
        focusOnPlatformText1:
            "Per què la intel·ligència artificial (IA) és fonamental per al mercat d'inversió? La IA és més ràpida que el cervell humà i pot analitzar dades amb precisió, sempre que el sistema estigui configurat correctament. L'aprenentatge automàtic té tres avantatges significatius en el mercat d'inversió.",
        focusOnPlatformText2:
            "A més, la intel·ligència artificial opera en el mercat les 24/7 ara. Significa coneixement de la situació global en temps real, acumulació de coneixements sobre patrons i creació immediata d'estratègies rendibles. La plataforma Coin Sin Limited ofereix una rendibilitat eficaç d'assolir per als humans. És qüestió de temps que les màquines assumeixin plenament aquesta funció.",
        focusOnPlatformText3:
            "Un altre factor que fa atractiva la inversió al Canadà, Austràlia i altres països és l'educació. Moltes persones senten que un humà pot prendre decisions influït per les emocions, una màquina roman objectiva i racional. És fonamental no oblidar les emocions. Segregar la racionalitat de l'emoció és fonamental, però una realitat en l'esfera de la inversió, on tot es decideix basant-se en dades pures i previsions exactes.",
        focusOnPlatformText4:
            "A més, invertir abans d'obtenir ingressos és significativament diferent. Abans que una persona comenci a obtenir ingressos, gasta una quantitat significativa de diners en proves, la qual cosa té beneficis, a més d'adquirir experiència situacional i consciència de la inversió. En canvi, una màquina s'encarrega d'això molt més ràpid i requereix un desemborsament mínim per maximitzar els ingressos.",
        nineReasonsIntro:
            "Així doncs, tenim nou raons principals per les quals utilitzar la plataforma Coin Sin Limited és beneficiós, especialment per als operadors principiants:",
        reason1:
            "Les nostres eines de trading processen grans quantitats de dades de forma ràpida i eficient, la qual cosa li permet prendre decisions precises.",
        reason2:
            "El programari basat en intel·ligència artificial proporciona una anàlisi avançada del mercat amb dades i previsions precises.",
        reason3:
            "La intel·ligència artificial s'adapta a les condicions actuals del mercat, suggerint les millors estratègies d'inversió.",
        reason4:
            "Invertir amb un sistema basat en intel·ligència artificial no es veu afectat per errors humans i proporciona informació objectiva.",
        reason5: "Invertir usant una màquina és més barat que prendre decisions humanes i genera més beneficis.",
        reason6:
            "La intel·ligència artificial requereix menys inversió inicial, la qual cosa augmenta l'eficiència de la inversió.",
        reason7:
            "Invertir amb eines basades en intel·ligència artificial fa que les inversions siguin assequibles al Canadà, Austràlia i altres països.",
        reason8: "L'ús de la intel·ligència artificial augmenta la velocitat de la presa de decisions.",
        reason9:
            "La intel·ligència artificial proporciona una presa de decisions més ràpida per realitzar millors accions d'inversió.",
        efficiencyGuarantee:
            "Així, la intel·ligència artificial garanteix la rendibilitat de la inversió en assegurar una eficàcia dels sistemes d'almenys el 95%. La precisió depèn del sistema específic, però pot assolir per als humans entre el 95% i el 99,4%. L'eficiència dels nostres instruments de negociació basats en algoritmes Coin Sin Limited és del 99,4%.",
        platformBenefitTitle: "COIN SIN LIMITED ÉS UNA PLATAFORMA QUE TREBALLA EN BENEFICI DE L'INVERSOR",
        platformBenefitText1:
            "Per als inversors novells, invertir en criptomonedes pot resultar increïblement complicat. Sovint, els principiants necessiten comprendre tots els secrets d'aquest àmbit per no perdre les seves petites inversions en el menor temps possible. Això els porta a perdre l'interès per les criptomonedes i per la inversió en general. No obstant això, necessiten adonar-se de les oportunitats potencials que estan perdent.",
        platformBenefitText2:
            "La plataforma Coin Sin Limited els permet fer realitat els seus somnis d'ingressos passius estables. Basat en intel·ligència artificial, aquest algoritme treballa contínuament, analitzant la situació del mercat, estudiant les tendències de les criptomonedes i realitzant operacions que gairebé sempre resulten rendibles. Milers de persones a tot el món ja han generat milers de milions de dòlars amb Coin Sin Limited.",
        platformFeaturesTitle: "Les característiques de la plataforma Coin Sin Limited inclouen:",
        feature1:
            "Un profund coneixement del mercat de criptomonedes i de les tendències en el món dels actius digitals que estan fora de l'abast de la ment humana.",
        feature2:
            "El superordinador pot calcular milions de variacions cada segon i predir tendències amb la màxima precisió.",
        feature3: "Operacions segures amb beneficis per a l'inversor.",
        platformUnnoticedText:
            "La plataforma Coin Sin Limited va passar desapercebuda en el moment del llançament del producte. No obstant això, està provocant la ira i el pànic de bancs centrals i governs de tot el món. Mentre els grans jugadors intenten aturar el projecte de la plataforma Coin Sin Limited, vostè pot començar a guanyar molts diners ara.",
        investSmartTitle: "INVERTEIX EN CRIPTODIVISES DE FORMA INTEL·LIGENT AMB LA PLATAFORMA COIN SIN LIMITED",
        investSmartText1:
            "Els temps no són fàcils, i tot al nostre voltant va a poc a poc cap avall. Encara que la situació pot millorar en el futur, tothom hauria d'ocupar-se avui del seu futur per no dependre de factors externs. Les eines intel·ligents poden ajudar-te amb això.",
        investSmartText2:
            "La plataforma d'inversió Coin Sin Limited li permet fer-ho sense perdre temps estudiant el mercat de divises digitals. Pot començar a invertir avui mateix en països com el Canadà, Austràlia i altres. L'èxit està precalculat, i tot el que necessita és el desig d'unir-se.",
        algorithmToolsIntro: "L'algoritme li proporciona les eines per ajudar-lo:",
        tool1: "Evitar riscos i pèrdues innecessàries.",
        tool2: "Obtenir ingressos gairebé totalment passius.",
        tool3: "Treballar en el mercat amb una àmplia diversificació de la cartera i una reducció paral·lela del risc.",
        tool4: "Rebre ingressos estables tant a curt com a llarg termini.",
        finalInvitation:
            "Per tant, el convidem a començar a escriure la primera pàgina de la seva història d'un inversor d'èxit avui després de llegir la revisió de Coin Sin Limited!",
        potentialEarningsTitle: "QUÈ GUANYS POTENCIALS PUC ESPERAR EN INVERTIR AMB COIN SIN LIMITED?",
        myInvestment: "La meva inversió:",
        usagePeriod: "Període d'ús:",
        days: "dies",
        potentialProfit: "Guany Potencial",
        startInvestingNowButton: "Començar a Invertir Ara!",
        disclaimer:
            "* Els resultats mostrats són estimacions basades en el rendiment històric de la plataforma. Les inversions comporten riscos.",
        demoAccountTitle: "PROVA EL COMPTE DE DEMOSTRACIÓ DE COIN SIN LIMITED",
        demoAccountText1:
            "Sent-te lliure de l'alt cost d'entrada al món de la inversió! No necessites gastar desenes de milers de dòlars per entendre el comerç de criptomonedes, com funciona i què has de fer per evitar pèrdues. T'oferim l'oportunitat d'invertir fins i tot uns pocs centenars de dòlars i convertir-los en un negoci rendible.",
        demoAccountText2:
            "Prova una eina sense riscos per a un comerç rendible! Registra't, diposita almenys 250€ i obtén el teu primer benefici avui mateix. Simplement desplaça't fins a la part inferior de la pàgina i registra't.",
        notScamTitle: "COIN SIN LIMITED NO ÉS UNA ESTAFA, I AQUESTA ÉS LA RAÓ",
        notScamText1:
            "És un projecte d'inversió automatitzat que ofereix l'oportunitat de guanyar diners invertint en criptomonedes populars i projectes prometedors en el món dels actius digitals. El sistema està controlat per enginyers informàtics i corredors registrats a CySEC. Corredors autoritzats realitzen els processos financers del sistema.",
        notScamText2:
            "Els usuaris tenen accés a un compte de demostració virtual on poden avaluar sense riscos les capacitats del sistema abans d'invertir fons reals. La protecció de l'usuari és el principal requisit del projecte. Els certificats SSL i el xifratge multicapa protegeixen de forma fiable totes les dades personals.",
        notScamText3:
            "Per seguretat, es recomana tancar la sessió després de cada ús i evitar la connexió al sistema des de xarxes públiques.",
        notScamText4:
            "Coin Sin Limited ofereix màxims beneficis i guanys sense riscos, i presenta proves de no frau. També trobaràs opinions sobre Coin Sin Limited a continuació.",
        testimonialsTitle: "DESCOBREIX EL QUE DIUEN ELS MEMBRES DE",
        testimonialsHighlight: "COIN SIN LIMITED",
        testimonialsTitle2: "DIUEN SOBRE AQUESTA PLATAFORMA DE TRADING:",
        tradingEasyTitle: "TRADING AMB COIN SIN LIMITED ÉS",
        tradingEasyHighlight: "100% FÀCIL I CÒMODE!",
        tradingEasyIntro:
            "En enviar el formulari següent amb la teva informació precisa en aquesta pàgina web, desbloquejaràs ràpidament l'accés sense restriccions al nostre sistema de comerç de IA altament fiable, dedicat i imparcial. Uneix-te als més de 2.500 inversors astuts que ja s'estan beneficiant de les seves capacitats.",
        featureAiSelectionsTitle: "SELECCIONS D'INVERSIÓ EXCLUSIVAMENT RENDIBLES REALITZADES PER IA",
        featureAiSelectionsText:
            "Enrere van quedar els dies en què les inversions estaven reservades per als rics. El nostre avançat sistema informàtic analitza meticulosament la liquiditat, la volatilitat i el volum d'operacions, la qual cosa garanteix decisions d'inversió òptimes. Gaudeix d'ingressos constants al teu compte a través d'accions d'empreses de primer nivell, recolzades per una impressionant garantia de precisió comercial del 99.4%.",
        featureAutoTradingTitle: "FUNCIONALITAT DE COMERÇ AUTOMÀTIC IMPECABLE",
        featureAutoTradingText:
            "Experimenta la Conveniència de la nostra funció de trading automàtic, que et permet generar guanys sense esforç, fins i tot quan no estiguis al teu lloc de treball. No es requereix experiència comercial! Simplement fes la teva inversió inicial i observa com el saldo del teu compte creix constantment.",
        featureSupportTitle: "SUPORT COMPLETO AL USUARI",
        featureSupportText:
            "Com a membre valuós de Coin Sin Limited, el nostre amigable gerent d'atenció al client està a la teva disposició, llest per atendre qualsevol consulta o inquietud que puguis tenir.",
        featureCommunityTitle: "ACCÉS EXCLUSIU A UNA COMUNITAT ÚNICA",
        featureCommunityText:
            "Uneix-te a nostra prestigiosa comunitat Coin Sin Limited i obtén una membresía privilegiada. Considera't afortunat d'haver trobat l'oportunitat de registrar. Tingues en compte que, a causa de les limitacions de capacitat del sistema, només podem enviar invitacions a un número selecte de usuaris. Aprofita aquesta oportunitat per resoldre els teus problemes econòmics d'una vegada per totes.",
        createAccountButton: "¡Crea el teu compte!",
        howToStartTitle: "COM",
        howToStartHighlight: "COMENÇAR?",
        step1Title: "REGISTRE: COMPLETA EL FORMULARI A CONTINUACIÓN",
        step1Description:
            "El formulari de registre està en aquesta pàgina. Completa el formulari per convertir-te en membre. Una vegada que el teu registre sigui aprovat, automàticament et convertiràs en un nou participant de Coin Sin Limited.",
        step2Title: "DEPOSITA €250 O MÁS",
        step2Description:
            "Com en qualsevol empresa, necessites un capital inicial. L'avantatge de la plataforma Coin Sin Limited és que només requereix una modesta inversió inicial. Simplement diposita €250 o més per començar a guanyar diners.",
        step3Title: "ESTIGUES ATENT AL TEU TELÈFON... ¡PODRIES REBRE UNA TRUCADA!",
        step3Description:
            "Després de realitzar un pagament, el nostre gerent es posarà en contacte amb tu per confirmar-ho tot i activar el teu compte. Si tens alguna pregunta, el gerent et proporcionarà respostes detallades per ajudar-te. Tingues en compte que la trucada pot provenir d'un número no identificat.",
        faqTitle: "PREGUNTES",
        faqHighlight: "FREQUENTS",
        finalSectionTitle: "APROFITA LA OPORTUNITAT DE CONVERTIR-TE EN UN INVERSOR INTEL·LIGENT AVUI I...",
        finalSectionSubtitle: "...DESENCADENA UN MÓN DE POSSIBILITATS, ¡CON UN MÍNIMO DE $1,000 EN TU CUENTA CADA DÍA!",
        finalSectionText:
            "Actúa ahora proporcionando tu nombre completo y correo electrónico en el formulario a continuación, y desbloquea la oportunidad más excepcional y exclusiva para generar ingresos sustanciales sin esfuerzo. Deja que la IA se encargue del trabajo duro mientras tú obtienes beneficios tangibles al instante. ¡No te lo pierdas!",
        footerCompanyInfo:
            "Coin Sin Limited es una empresa especializada en proporcionar información y herramientas para la inversión y el trading de criptomonedas, basada en inteligencia artificial.",
        footerContactanos: "Contacta'ns",
        footerPrivacidad: "Privadesa",
        footerTerminos: "Termes",
        footerDescargo: "Exempció de Responsabilitat",
        footerAbuso: "Report d'Abús",
        footerEmailLabel: "Email:",
        footerCopyright: "Tots els drets reservats.",
        smallFormNamePlaceholder: "El teu nom",
        smallFormSurnamePlaceholder: "El teu cognom",
        smallFormEmailPlaceholder: "El teu correu electrònic",
        smallFormPhonePlaceholder: "9 11 2345-6789",
        smallFormRegisterButton: "Registra'm",
        smallFormTermsText:
            "En registrar-te, acceptes i estàs d'acord amb els termes d'ús i la Política de privadesa del lloc.",
        smallFormPrivacyText:
            "Les teves dades sempre estan protegides amb Coin Sin Limited. En completar aquest formulari, acceptes rebre els nostres correus electrònics de màrqueting.",
        ageConfirmation: "Confirmo que sóc major d'edat.",
        disclaimerFull: `IMPORTANT: Exempcions de Responsabilitat d'Ingressos i Legals. Les gràfiques d'ingressos i guanys creades per smartbitboost.io, també conegut com "Aquest Lloc Web", s'utilitzen únicament com a il·lustracions ideals del seu potencial de guanys. L'èxit de les persones en testimonis i altres exemples són resultats excepcionals, per la qual cosa no estan destinats a garantir que vostè o altres aconseguiran el mateix. Els resultats individuals dependran de com utilitzi smartbitboost.io. Per la qual cosa faci, aquest lloc web no té responsabilitat. Sempre ha d'actuar amb precaució i diligència deguda perquè assumeix tota la responsabilitat per les seves accions i decisions en utilitzar productes i serveis. Accepta que de cap manera aquest lloc web serà responsable dels resultats del seu ús dels nostres serveis. Consulteu els nostres termes d'ús per obtenir informació sobre les nostres exempcions de responsabilitat i altres restriccions. Si bé el comerç pot generar beneficis notables, també comporta el risc de perdre el capital invertit en part o en la seva totalitat, per la qual cosa ha de considerar si pot permetre's invertir. ©2025AVÍS DE REGULACIÓ ALS EUA: El comerç de Forex, CFDs i criptomonedes no està sota cap regulació nord-americana. La inversió en criptomonedes no està regulada ni supervisada per cap agència financera o dels EUA. Qualsevol comerç que no sigui regulat per residents nord-americans es considera il·legal. Aquest lloc web no accepta clients nord-americans o ciutadans nord-americans. Aquest lloc web no té responsabilitat per les accions dels clients ubicats o amb ciutadania nord-americana. Els clients ubicats dins dels Estats Units o amb ciutadania nord-americana assumeixen tota la responsabilitat per les seves accions i decisions en utilitzar productes i serveis d'aquest Lloc Web. En qualsevol i totes les circumstàncies, la elecció d'utilitzar el Lloc Web, el Servei i/o el Programari és sota la total responsabilitat de l'Usuari, qui ha de complir amb la legislació vigent.`,
        privacyPolicyContent: {
            title: "Política de Privadesa",
            general: {
                heading: "General",
                p1: "Rebem les seves dades personals per a l'ús del Lloc Web i/o Servei. La informació detallada sobre el processament de les seves dades personals es proporciona en aquesta Política de Privadesa.",
                p2: "Aquesta pàgina l'informa sobre les nostres polítiques pel que fa a la recopilació, ús i divulgació de dades personals quan vostè, com a Usuari d'aquest Lloc Web (d'ara endavant, «Vostè» o «Usuari»), utilitza aquest Lloc Web.",
                p3: "En utilitzar el Lloc Web, vostè accepta la recopilació i l'ús d'informació d'acord amb aquesta política. A menys que es defineixi el contrari en aquesta Política de Privadesa, els termes utilitzats en aquesta Política de Privadesa tenen el mateix significat que en els nostres termes d'ús del Lloc Web.",
            },
            methodsAndPrinciples: {
                heading: "Mètodes i principis del processament de dades personals",
                p1: "Respectem la seva seguretat i processem la seva pròpia informació amb dignitat, legalment i d'acord amb aquesta Política de Privadesa i la llei pertinent. En cas que es trobi a la Unió Europea, processem les seves dades personals segons el Reglament (UE) 2016/679 del Parlament Europeu i del Consell de 27 d'abril de 2016 relatiu a la protecció de les persones físiques pel que fa al tractament de dades personals i a la lliure circulació d'aquestes dades, i pel qual es deroga la Directiva 95/46/CE (Reglament General de Protecció de Dades; “RGPD”).",
                p2: "Per evitar la divulgació i l'ús no autoritzats de dades personals que no tenen l'autoritat per divulgar aquestes dades, així com per prevenir altres tipus de violacions de seguretat de les dades personals que s'estan processant, hem desenvolupat mesures tècniques i organitzatives adequades.",
                p3: "En cas que es produeixi alguna violació de la seguretat de les dades personals processades, que impliqui un alt risc per als seus drets i llibertats, l'informarem immediatament a la nostra adreça de correu electrònic.",
                p4: "Si no ha donat el seu consentiment previ, no processarem les seves dades personals.",
            },
            processedPersonalData: {
                heading: "Dades personals processades",
                p1: "El processament de dades personals es produeix després que s'introdueixen al formulari de registre al Lloc Web. En enviar el formulari de registre, vostè accepta celebrar un acord amb nosaltres sota els termes dels quals facilitem la comunicació entre el proveïdor de Productes i/o Serveis (Anunciant) i vostè, per tal de processar la seva sol·licitud per celebrar un acord amb l'Anunciant per a la compra de Serveis o Productes anunciats al Lloc Web.",
                p2: "Les adreces IP i les cookies dels usuaris del nostre lloc web són recopilades i processades per nosaltres. Les cookies són petits fragments de dades enviats per un servidor web i emmagatzemats al seu ordinador; aquestes dades ens ajuden a millorar l'experiència del nostre lloc web. Pot rebutjar les cookies deshabilitant-les a la configuració del seu navegador web; no obstant això, restringir l'ús de cookies pot afectar el funcionament del nostre lloc web.",
                p3: "Vostè confirma que totes les dades personals que proporciona estan actualitzades, són veraces i correctes. Vostè és responsable de qualsevol dany causat per la provisió d'informació personal incorrecta.",
            },
            methodsOfProcessing: {
                heading: "Mètodes de processament de dades personals",
                p1: "El processament de dades personals es realitza automàticament. El processament de dades personals és automàtic; aquest procés no pot donar lloc a conseqüències legals ni afectar-lo de cap altra manera.",
                p2: "El processament de dades personals pot delegar-se a altres proveïdors de serveis d'enviament massiu, processadors i proveïdors de serveis de TI i al núvol. A més, podem delegar part o la totalitat del processament al processador, al proveïdor de serveis d'enviament massiu, al proveïdor de serveis de TI i al proveïdor de serveis al núvol. La selecció dels processadors es realitza amb la màxima cura possible perquè les seves dades personals estiguin protegides en tot moment durant el seu processament.",
                p3: "Per utilitzar el Servei, és necessari proporcionar les seves dades personals als Anunciants.",
                p4: "Les dades poden transferir-se a qualsevol estat del món. Els Anunciants i processadors són els receptors de les seves dades personals. Per completar el contracte entre nosaltres, es requereix la transferència de les seves dades personals als Anunciants, segons s'especifica en els Termes. La transferència de dades personals es realitza utilitzant les precaucions suficients per garantir que les seves dades personals estiguin degudament protegides.",
            },
            legalBasisAndPeriods: {
                heading: "Base legal i períodes del processament de dades personals",
                p1: "Per brindar-li Serveis de qualitat, necessitem processar les dades personals que ens va proporcionar al formulari de registre o que ens va proporcionar de qualsevol altra manera. El processament de dades es realitza durant el període en què li brindem serveis d'acord amb els Termes.",
                p2: "L'adreça IP, l'adreça de correu electrònic i la informació derivada de les cookies es processen per enviar-li notificacions de serveis i productes relacionats amb el Lloc Web, així com informació sobre oportunitats comercials que puguin interessar-li. Entre les ofertes comercials, pot trobar anunciants o altres socis comercials nostres. El processament de dades personals es realitza segons el seu consentiment (marcat al formulari de registre). Vostè té dret a retirar el seu consentiment per a la recopilació de dades personals sense afectar la legalitat del processament basat en aquest consentiment abans de la seva revocació, així com el processament realitzat sobre altres bases legals que no siguin el seu consentiment. El processament de la seva adreça de correu electrònic per a aquesta finalitat es processarà fins que retiri el seu consentiment.",
            },
            dataSubjectRights: {
                heading: "Drets de l'interessat",
                p1: "En cas que el RGPD sigui aplicable, vostè té els següents drets de l'interessat, entre d'altres:",
                list: [
                    "– Dret d'accés a les dades personals (Article 15 del RGPD);",
                    "– Dret de rectificació (Article 16 del RGPD);",
                    "– Dret de supressió (Article 17 del RGPD);",
                    "– Dret a la limitació del tractament (Article 18 del RGPD);",
                    "– Dret a la portabilitat de les dades (Article 20 del RGPD);",
                    "– Dret d'oposició (Article 21 del RGPD);",
                    "– Dret a no ser objecte d'una decisió basada únicament en el tractament automatitzat, inclosa l'elaboració de perfils, que produeixi efectes jurídics en vostè o l'afecti significativament de forma similar (Article 22 del RGPD);",
                    "– Dret a presentar una reclamació davant una autoritat de control (Article 77 del RGPD).",
                ],
                p2: "Declarem que no som responsables del tractament en el sentit del reglament RGPD, ja que no determinem els fins i mitjans del tractament de dades personals, la qual cosa recau sota la responsabilitat de l'Anunciant.",
                p3: "Cal assenyalar que en els casos en què no estem obligats a estar subjectes al RGPD, no estem obligats a complir amb aquests drets. No obstant això, fins i tot en aquest cas, farem tot el possible per satisfer la seva queixa o sol·licitud. Abans d'actuar sobre la seva sol·licitud, és possible que hagi de verificar la seva identitat; aquesta mesura és necessària per protegir les seves dades personals, per la qual cosa no compartim les seves dades personals amb tercers. Si es nega a proporcionar-nos informació que ens permeti identificar-lo, no podrem processar la seva sol·licitud.",
                p4: "Aquesta Política de Privadesa pot ser modificada o complementada per nosaltres unilateralment de tant en tant. La nova edició de la Política de Privadesa entra en vigor des del moment de la seva publicació al Lloc Web.",
                p5: "Tingueu en compte que si continueu utilitzant el Lloc Web i el Servei després de qualsevol canvi de la Política de Privadesa, significa que esteu d'acord i consentiu a estar subjecte a la nova Política de Privadesa. Si no esteu d'acord amb cap canvi en aquesta Política de Privadesa i no desitgeu que la vostra informació estigui subjecta a ella, haureu de deixar d'utilitzar el Lloc Web i el Servei.",
                p6: "Una resposta a la seva sol·licitud es pot rebre dins dels 40 (quaranta) dies hàbils a partir del moment en què la rebem. En una situació en què sigui impossible processar la seva sol·licitud, definitivament l'hi notificarem. Per a la comunicació utilitzem mitjans electrònics de comunicació, per exemple, correu electrònic o missatgeria; si preferiu un mètode de comunicació diferent, notifiqueu-nos-ho.",
                p7: "Proporcionarem qualsevol comunicació i qualsevol acció de forma gratuïta; no obstant això, quan sigui necessari, podem cobrar-li una tarifa raonable, tenint en compte els costos administratius i altres característiques associades amb la provisió d'informació, o negar-nos a actuar segons la sol·licitud.",
                p8: "Pot presentar una queixa relacionada amb la protecció de dades personals davant l'organisme estatal corresponent, sol·licitar protecció judicial si creu que els seus drets han estat violats. També pot presentar qualsevol queixa o sol·licitud posant-se en contacte amb nosaltres.",
                p9: "Si necessita més informació sobre les autoritats rellevants al seu país o qualsevol altra informació, no dubti a contactar-nos.",
                copyright: "Copyright © 2023 producte | Tots els drets reservats",
            },
        },
    },
    it: {
        notification:
            "Agisci ora! Coin Sin Limited sta accelerando i guadagni dei partecipanti! Assicurati il tuo posto prima che l'invito privato scada!",
        platformBenefit: "Beneficio NETTO Utenti:",
        userIncome: "Nuovi utenti ad oggi",
        mainTitle: "Entrate intelligenti ogni giorno per la tua nuova",
        mainTitleHighlight: "vita senza stress per sempre",
        subtitle: "I nostri utenti di solito fanno x2, x5 e persino x10 sugli investimenti",
        readyToJoin: "PRONTO AD UNIRTI? INIZIA LA TUA REGISTRAZIONE AL SISTEMA QUI E ORA.",
        motivationalText:
            "HAI IL DIRITTO ALL'INDIPENDENZA FINANZIARIA, E NON È UN PRIVILEGIO. È UN TUO DIRITTO, INDIPENDENTEMENTE DALLA TUA ETÀ, DAI TUOI RISULTATI E DAL TUO STATUS SOCIALE.",
        playVideo: "Riproduci Video",
        pauseVideo: "Metti in Pausa Video",
        improveLife: "MIGLIORA LA TUO VITA OGGI",
        namePlaceholder: "Il tuo nome",
        surnamePlaceholder: "Il tuo cognome",
        emailPlaceholder: "La tua email",
        phonePlaceholder: "9 11 2345-6789",
        registerButton: "Registrami",
        searchCountry: "Cerca paese...",
        termsText: "Registrandoti, accetti e sei d'accordo con i termini d'uso e la Politica sulla privacy del sito.",
        privacyText:
            "I tuoi dati sono sempre protetti con Coin Sin Limited. Completando questo modulo, accetti di ricevere le nostre email di marketing. Puoi cambiare idea in qualsiasi momento cliccando sul link di disiscrizione in fondo a qualsiasi nostra email.",
        registrationSuccessTitle: "Grazie per la Registrazione!",
        noCountriesFound: "Nessun paese trovato",
        masterTradingTitle: "PADRONEGGIA IL TRADING DI CRIPTOVALUTE CON IL NOSTRO",
        masterTradingHighlight: "SISTEMA DI INVESTIMENTO AI CON UNA PRECISIONE DEL 99.4%",
        ctaParagraph1:
            "Immagina una nuova vita in cui il lavoro diventa facoltativo, i risparmi non sono più necessari e tutte le tue bollette sono pagate senza sforzo. Immagina la libertà di esplorare, pianificare una nuova auto o persino possedere una casa.",
        ctaParagraph2:
            "Ora immagina di guardare lo schermo del tuo smartphone e di assistere a un altro guadagno di 1.000$ senza sforzo oggi stesso. Sembra allettante, vero?",
        ctaParagraph3:
            "Coin Sin Limited lo rende possibile. Come piattaforma di avvio basata sull'IA, diamo potere ai nuovi investitori di immergersi nel mondo degli investimenti in criptovalute, indipendentemente dalla loro esperienza precedente. Iniziando con un investimento di soli 250€, puoi cogliere l'opportunità di moltiplicare i tuoi guadagni giornalieri per x5.",
        ctaParagraph4:
            "Pronto a unirti a noi? Segui le istruzioni su questa pagina e intraprendi il tuo emozionante viaggio verso una vita stabile e senza preoccupazioni, piena di abbondanti piaceri!",
        startNowButton: "Inizia Ora",
        advantagesTitle:
            "VANTAGGI DI INVESTIRE IN VALUTE POPOLARI E INFORMAZIONI ESSENZIALI SULLA PIATTAFORMA COIN SIN LIMITED",
        advantagesIntro:
            "Investire in valute digitali è un'opzione attraente per gli investitori. Le criptovalute riuniscono tutte le caratteristiche necessarie per offrire una liquidità stabile. Due fattori chiave determinano i benefici di questo tipo di investimenti:",
        growthPotentialTitle: "Potenziale di crescita:",
        growthPotentialText:
            "Alcune criptovalute hanno già raggiunto un valore significativo, ma molti progetti hanno un grande potenziale di sviluppo. Grazie alla loro crescente popolarità, il mercato delle criptovalute attrae investitori che possono ottenere alti rendimenti investendo in asset digitali.",
        diversificationTitle: "Diversificazione del portafoglio:",
        diversificationText:
            "Le criptovalute offrono l'opportunità di diversificare il tuo portafoglio di investimenti. Forniscono una classe di asset alternativa che è indipendente dai mercati finanziari tradizionali. Investire in criptovalute aiuta a diversificare il rischio e a proteggere il portafoglio da potenziali influenze negative in un'area.",
        focusOnPlatformTitle: "Concentriamoci ora sulla piattaforma Coin Sin Limited.",
        focusOnPlatformText1:
            "Perché l'intelligenza artificiale (IA) è fondamentale per il mercato degli investimenti? L'IA è più veloce del cervello umano e può analizzare i dati con precisione, a condizione che il sistema sia configurato correttamente. L'apprendimento automatico ha tre vantaggi significativi nel mercato degli investimenti.",
        focusOnPlatformText2:
            "Inoltre, l'intelligenza artificiale opera nel mercato 24 ore su 24, 7 giorni su 7. Significa consapevolezza della situazione globale in tempo reale, accumulo di conoscenze sui modelli e creazione immediata di strategie redditizie. La piattaforma Coin Sin Limited offre una redditività efficace raggiungibile dagli esseri umani. È solo questione di tempo prima che le macchine assumano pienamente questa funzione.",
        focusOnPlatformText3:
            "Un altro fattore che rende attraente l'investimento in Canada, Australia e altri paesi è l'istruzione. Molte persone sentono che un essere umano può prendere decisioni influenzate dalle emozioni, una macchina rimane obiettiva e razionale. È essenziale non dimenticare le emozioni. Separare la razionalità dall'emozione è fondamentale, ma una realizzazione nella sfera degli investimenti, dove tutto è deciso in base a dati puri e previsioni esatte.",
        focusOnPlatformText4:
            "Inoltre, investire prima di guadagnare un reddito è significativamente diverso. Prima che una persona inizi a guadagnare un reddito, spende una quantità significativa di denaro per i test, il che ha dei benefici, oltre ad acquisire esperienza situazionale e consapevolezza degli investimenti. Al contrario, una macchina gestisce questo molto più velocemente e richiede un esborso minimo per massimizzare il reddito.",
        nineReasonsIntro:
            "Quindi, abbiamo nove ragioni principali per cui l'utilizzo della piattaforma Coin Sin Limited è vantaggioso, soprattutto per i trader principianti:",
        reason1:
            "I nostri strumenti di trading elaborano grandi quantità di dati in modo rapido ed efficiente, consentendoti di prendere decisioni accurate.",
        reason2:
            "Il software basato sull'intelligenza artificiale fornisce un'analisi di mercato avanzata con dati e previsioni accurate.",
        reason3:
            "L'intelligenza artificiale si adatta alle attuali condizioni di mercato, suggerendo le migliori strategie di investimento.",
        reason4:
            "Investire con un sistema basato sull'IA non è influenzato dagli errori umani e fornisce informazioni oggettive.",
        reason5: "Investire usando una macchina è più economico che prendere decisioni umane e genera più profitti.",
        reason6:
            "L'intelligenza artificiale richiede un investimento iniziale inferiore, il che aumenta l'efficienza dell'investimento.",
        reason7:
            "Investire con strumenti basati sull'IA rende gli investimenti accessibili in Canada, Australia e altri paesi.",
        reason8: "L'uso dell'intelligenza artificiale aumenta la velocità del processo decisionale.",
        reason9:
            "L'intelligenza artificiale fornisce un processo decisionale più rapido per migliori azioni di investimento.",
        efficiencyGuarantee:
            "Pertanto, l'intelligenza artificiale garantisce la redditività degli investimenti assicurando un'efficacia del sistema di almento il 95%. La precisione dipende dal sistema specifico, ma può raggiungere tra il 95% e il 99,4% per gli esseri umani. L'efficienza dei nostri strumenti di trading basati su algoritmi Coin Sin Limited è del 99,4%.",
        platformBenefitTitle: "COIN SIN LIMITED È UNA PIATTAFORMA CHE LAVORA A BENEFICIO DELL'INVESTITORE",
        platformBenefitText1:
            "Per gli investitori principianti, investire in criptovalute può essere incredibilmente complicato. Spesso, i principianti devono comprendere tutti i dettagli di questo campo per non perdere i loro piccoli investimenti nel più breve tempo possibile. Questo li porta a perdere interesse per le criptovalute e per gli investimenti in generale. Tuttavia, devono rendersi conto delle opportunità potenziali che stanno perdendo.",
        platformBenefitText2:
            "La piattaforma Coin Sin Limited consente loro di realizzare i loro sogni di reddito passivo stabile. Basato sull'intelligenza artificiale, questo algoritmo lavora continuamente, analizzando la situazione del mercato, studiando le tendenze delle criptovalute ed eseguendo operazioni che quasi sempre si traducono in profitti. Migliaia di persone in tutto il mondo hanno già generato miliardi di dollari con Coin Sin Limited.",
        platformFeaturesTitle: "Le caratteristiche della piattaforma Coin Sin Limited includono:",
        feature1:
            "Una profonda comprensione del mercato delle criptovalute e delle tendenze nel mondo degli asset digitali che sono al di là della portata della mente umana.",
        feature2:
            "Il supercomputer può calcolare milioni di variazioni ogni secondo e prevedere le tendenze con la massima precisione.",
        feature3: "Operazioni sicure con benefici per l'investitore.",
        platformUnnoticedText:
            "La piattaforma Coin Sin Limited è passata inosservata al momento del lancio del prodotto. Tuttavia, sta causando rabbia e panico tra le banche centrali e i governi di tutto il mondo. Mentre i grandi attori cercano di fermare il progetto della piattaforma Coin Sin Limited, puoi iniziare a guadagnare un sacco di soldi ora.",
        investSmartTitle: "INVESTI IN CRIPTOVALUTE IN MODO INTELLIGENTE CON LA PIATTAFORMA COIN SIN LIMITED",
        investSmartText1:
            "I tempi non sono facili, e tutto intorno a noi sta lentamente andando giù. Anche se la situazione potrebbe migliorare in futuro, tutti dovrebbero prendersi cura del proprio futuro oggi per non dipendere da fattori esterni. Gli strumenti intelligenti possono aiutarti in questo.",
        investSmartText2:
            "La piattaforma di investimento Coin Sin Limited ti consente di farlo senza perdere tempo a studiare il mercato delle valute digitali. Puoi iniziare a investire oggi stesso in paesi come Canada, Australia e altri. Il successo è pre-calcolato, e tutto ciò di cui hai bisogno è il desiderio di unirti.",
        algorithmToolsIntro: "L'algoritmo ti fornisce gli strumenti per aiutarti:",
        tool1: "Evitare rischi e perdite inutili.",
        tool2: "Ottenere un reddito quasi totalmente passivo.",
        tool3: "Lavorare nel mercado con un'ampia diversificazione del portafoglio e una parallela riduzione del rischio.",
        tool4: "Ricevere un reddito stabile sia a breve che a lungo termine.",
        finalInvitation:
            "Pertanto, ti invitiamo a iniziare a scrivere la prima pagina della tua storia di successo come investitore oggi dopo aver letto la recensione de Coin Sin Limited!",
        potentialEarningsTitle: "QUALI GUADAGNI POTENZIALI POSSO ASPETTARMI INVESTENDO CON COIN SIN LIMITED?",
        myInvestment: "Il mio investimento:",
        usagePeriod: "Periodo de utilizzo:",
        days: "giorni",
        potentialProfit: "Profitto Potenziale",
        startInvestingNowButton: "Inizia a Investire Ora!",
        disclaimer:
            "* I risultati mostrati sono stime basate sulle prestazioni storiche della piattaforma. Gli investimenti comportano rischi.",
        demoAccountTitle: "PROVA L'ACCOUNT DEMO DI COIN SIN LIMITED",
        demoAccountText1:
            "Sentiti libero dall'alto costo di ingresso nel mondo degli investimenti! Non hai bisogno di spendere decine di migliaia di dollari per capire il trading di criptovalute, come funziona e cosa devi fare per evitare perdite. Ti offriamo l'opportunità di investire anche poche centinaia di dollari e trasformarli in un'attività redditizia.",
        demoAccountText2:
            "Prova uno strumento senza rischi per un trading redditizio! Registrati, deposita almeno 250€ e ottieni il tuo primo profitto oggi stesso. Scorri semplicemente fino alla fine della pagina e registrati.",
        notScamTitle: "COIN SIN LIMITED NON È UNA TRUFFA, ED ECCO PERCHÉ",
        notScamText1:
            "È un progetto di investimento automatizzato che offre l'opportunità di guadagnare denaro investendo in criptovalute popolari e progetti promettenti nel mondo degli asset digitali. Il sistema è controllato da ingegneri informatici e broker registrati presso CySEC. I broker autorizzati eseguono i processi finanziari nel sistema.",
        notScamText2:
            "Gli utenti hanno accesso a un account demo virtuale dove possono valutare le capacità del sistema senza rischi prima di investire fondi reali. La protezione dell'utente è il requisito principale del progetto. SSL certificates e la crittografia multilivello proteggono in modo affidabile tutti i dati personali.",
        notScamText3:
            "Per sicurezza, si consiglia di disconnettersi dopo ogni utilizzo ed evitare di connettersi al sistema da reti pubbliche.",
        notScamText4:
            "Coin Sin Limited offre massimi benefici e guadagni senza rischi, e presenta prove di non frode. Troverai anche opinioni su Coin Sin Limited di seguito.",
        testimonialsTitle: "SCOPRI COSA DICONO I MEMBRI DI",
        testimonialsHighlight: "COIN SIN LIMITED",
        testimonialsTitle2: "DICONO DI QUESTA PIATTAFORMA DI TRADING:",
        tradingEasyTitle: "TRADING CON COIN SIN LIMITED È",
        tradingEasyHighlight: "100% FACILE E CONFORTEVOLE!",
        tradingEasyIntro:
            "Inviando il modulo sottostante con le tue informazioni accurate su questo sito web, sbloccherai rapidamente l'accesso illimitato al nostro sistema di trading AI altamente affidabile, dedicato e imparziale. Unisciti agli oltre 2.500 investitori astuti che stanno già beneficiando delle sue capacità.",
        featureAiSelectionsTitle: "SELEZIONI DI INVESTIMENTO ESCLUSIVAMENTE REDDITIZIE EFFETTUATE DALL'IA",
        featureAiSelectionsText:
            "Sono finiti i giorni in cui gli investimenti erano riservati per i ricchi. Il nostro avanzato sistema informatico analizza meticolosamente liquidità, volatilità e volume di trading, il che garantisce decisioni di investimento ottimali. Goditi un reddito costante sul tuo conto tramite azioni di aziende di prim'ordine, supportate da un'impressionante garanzia di precisione di trading del 99.4%.",
        featureAutoTradingTitle: "FUNZIONALITÀ DI TRADING AUTOMATICO IMPECABILE",
        featureAutoTradingText:
            "Sperimenta la comodità della nostra funzione di trading automatico, che ti consente di generare profitti senza sforzo, anche quando non sei alla tua postazione di lavoro. Nessuna esperienza di trading richiesta! Effettua semplicemente il tuo investimento iniziale e osserva il saldo del tuo conto crescere costantemente.",
        featureSupportTitle: "SUPPORTO UTENTE COMPLETO",
        featureSupportText:
            "Come membro prezioso de Coin Sin Limited, il nostro amichevole responsabile del servizio clienti è a tua disposizione, pronto a rispondere a qualsiasi domanda o preoccupazione tu possa avere.",
        featureCommunityTitle: "ACCESSO ESCLUSIVO A UNA COMUNITÀ UNICA",
        featureCommunityText:
            "Unisciti alla nostra prestigiosa comunità Coin Sin Limited e ottieni un'iscrizione privilegiata. Considerati fortunato di aver trovato l'opportunità di registrarti. Tieni presente che, a causa delle limitazioni di capacità del sistema, possiamo inviare inviti solo a un numero selezionato di utenti. Approfitta di questa opportunità per risolvere i tuoi problemi finanziari una volta per tutte.",
        createAccountButton: "Crea il tuo account!",
        howToStartTitle: "COME",
        howToStartHighlight: "INIZIARE?",
        step1Title: "REGISTRAZIONE: COMPLETA IL MODULO SOTTO",
        step1Description:
            "Il modulo di registrazione è su questa pagina. Completa il modulo per diventare un membro. Una volta che la tua registrazione sarà approvata, diventerai automaticamente un nuovo partecipante di Coin Sin Limited.",
        step2Title: "DEPOSITA €250 O PIÙ",
        step2Description:
            "Come in qualsiasi attività commerciale, hai bisogno di capitale iniziale. L'vantaggio della piattaforma Coin Sin Limited è che richiede solo un modesto investimento iniziale. Ti basta depositare 250€ o più per iniziare a guadagnare denaro.",
        step3Title: "RESTA SINTONIZZATO SUL TUO TELEFONO... POTRESTI RICEVERE UNA CHIAMATA!",
        step3Description:
            "Dopo aver effettuato un pagamento, il nostro responsabile ti contatterà per confermare tutto e attivare il tuo account. Se hai domande, il responsabile ti fornirà risposte dettagliate per aiutarti. Tenere presente che la chiamata potrebbe provenire da un número non identificato.",
        faqTitle: "DOMANDE",
        faqHighlight: "FREQUENTI",
        finalSectionTitle: "COGLI L'OPPORTUNITÀ DI DIVENTARE UN INVESTITORE INTELLIGENTE OGGI E...",
        finalSectionSubtitle: "...SCATENA UN MONDO DI POSSIBILITÀ, CON UN MINIMO DI $1,000 SUL TUO CONTO OGNI GIORNO!",
        finalSectionText:
            "Agisci ora fornendo il tuo nome completo e la tua email nel modulo sottostante, e sblocca l'opportunità più eccezionale ed esclusiva per generare un reddito sostanziale senza sforzo. Lascia che l'IA si occupi del lavoro duro mentre tu raccogli benefici tangibili all'istante. Non perdere l'occasione!",
        footerCompanyInfo:
            "Coin Sin Limited è un'azienda specializzata nella fornitura di informazioni e strumenti per l'investimento e il trading di criptovalute, basati sull'intelligenza artificiale.",
        footerContactanos: "Contattaci",
        footerPrivacidad: "Privacy",
        footerTerminos: "Termini",
        footerDescargo: "Disclaimer",
        footerAbuso: "Segnalazione Abuso",
        footerEmailLabel: "Email:",
        footerCopyright: "Tutti i diritti riservati.",
        smallFormNamePlaceholder: "Il tuo nome",
        smallFormSurnamePlaceholder: "Il tuo cognome",
        smallFormEmailPlaceholder: "La tua email",
        smallFormPhonePlaceholder: "9 11 2345-6789",
        smallFormRegisterButton: "Registrami",
        smallFormTermsText:
            "Registrandoti, accetti e sei d'accordo con i termini d'uso e la Politica sulla privacy del sito.",
        smallFormPrivacyText:
            "I tuoi dati sono sempre protetti con Coin Sin Limited. Completando questo modulo, accetti di ricevere le nostre email di marketing.",
        ageConfirmation: "Confermo di essere maggiorenne.",
        disclaimerFull: `IMPORTANT: Esclusioni di Responsabilità su Redditi e Legali. I grafici di reddito e guadagni creati da smartbitboost.io, noto anche come "Questo Sito Web", sono utilizzati unicamente come illustrazioni ideali del tuo potenziale di guadagno. Il successo degli individui nelle testimonianze e in altri esempi sono risultati eccezionali, e pertanto non intendono garantire che tu o altri otterrete lo stesso. I risultati individuali dipenderanno da come utilizzi smartbitboost.io. Per qualsiasi cosa tu faccia, questo sito web non ha responsabilità. Dovresti sempre agire con cautela e dovuta diligenza perché ti assumi la piena responsabilità delle tue azioni e decisioni quando utilizzi prodotti e servizi. Accetti che in nessun modo questo sito web sarà responsabile dei risultati del tuo utilizzo dei nostri servizi. Consulta i nostri termini d'uso per informazioni sulle nostre esclusioni di responsabilità e altre restrizioni. Sebbene el trading possa generare notevoli benefici, comporta anche il rischio di perdere il capitale investito en parte o per intero, quindi dovresti considerare se puoi permetterti di investire. ©2025AVVISO REGOLATORIO USA: Il trading de Forex, CFD e criptovalute non è soggetto ad alcuna regolamentazione USA. L'investimento in criptovalute non è regolamentato o supervisionato da alcuna agenzia finanziaria o USA. Qualsiasi trading non regolamentato da residenti USA è considerado ilegal. Este sitio web non accetta clienti o cittadini USA. Este sitio web non ha responsabilità per le azioni dei clienti situati o con cittadinanza statunitense. I clienti situati negli Stati Uniti o con cittadinanza statunitense si assumono la piena responsabilità delle loro azioni e decisioni quando utilizzano prodotti e servizi da este Sito Web. In qualsiasi circostanza, la scelta di utilizzare il Sito Web, el Servizio e/o el Programma è sotto la sola responsabilità dell'Utente, che deve rispettare la legislazione vigente.`,
        privacyPolicyContent: {
            title: "Informativa sulla Privacy",
            general: {
                heading: "Generale",
                p1: "Riceviamo i tuoi dati personali per l'utilizzo del Sito Web e/o del Servizio. Informazioni dettagliate sul trattamento dei tuoi dati personali sono fornite in questa Informativa sulla Privacy.",
                p2: "Questa pagina ti informa sulle nostre politiche riguardanti la raccolta, l'uso e la divulgazione dei dati personali quando tu, come Utente di questo Sito Web (di seguito «Tu» o «Utente»), utilizzi questo Sito Web.",
                p3: "Utilizzando il Sito Web, accetti la raccolta e l'uso delle informazioni in conformità con questa politica. Salvo diversa definizione in questa Informativa sulla Privacy, i termini utilizzati in questa Informativa sulla Privacy hanno gli stessi significati dei nostri termini di utilizzo del Sito Web.",
            },
            methodsAndPrinciples: {
                heading: "Metodi e principi del trattamento dei dati personali",
                p1: "Onoriamo la tua sicurezza e trattiamo le tue informazioni con dignità, legalmente e in conformità con questa Informativa sulla Privacy e la legge pertinente. Nel caso in cui ti trovi nell'Unione Europea, trattiamo i tuoi dati personali secondo il Regolamento (UE) 2016/679 del Parlamento Europeo e del Consiglio del 27 aprile 2016 relativo alla protezione delle persone fisiche con riguardo al trattamento dei dati personali, nonché alla libera circolazione di tali dati e che abroga la direttiva 95/46/CE (Regolamento generale sulla protezione dei dati; “GDPR”).",
                p2: "Al fine di evitare la divulgazione e l'uso non autorizzati di dati personali che non hanno l'autorità per divulgare tali dati, nonché per prevenire altri tipi di violazioni della sicurezza dei dati personali in fase di elaborazione, abbiamo sviluppato misure tecniche e organizzative appropriate.",
                p3: "Nel caso in cui si verifichi una violazione della sicurezza dei dati personali trattati, che comporti un rischio elevato per i tuoi diritti e libertà, ti informeremo immediatamente al nostro indirizzo email.",
                p4: "Se non hai dato il tuo previo consenso, non tratteremo i tuoi dati personali.",
            },
            processedPersonalData: {
                heading: "Dati personali trattati",
                p1: "Il trattamento dei dati personali avviene dopo che sono stati inseriti nel modulo di registrazione sul Sito Web. Inviando il modulo di registrazione, accetti di concludere un accordo con noi in base al quale facilitiamo la comunicazione tra il fornitore di Prodotti e/o Servizi (Inserzionista) e te, al fine di elaborare la tua richiesta di conclusione di un accordo con l'Inserzionista per l'acquisto di Servizi o Prodotti pubblicizzati sul Sito Web.",
                p2: "Gli indirizzi IP e i cookie degli utenti del nostro sito web vengono raccolti e trattati da noi. I cookie sono piccoli frammenti di dati inviati da un server web e memorizzati sul tuo computer; questi dati ci aiutano a migliorare l'esperienza del nostro sito web. Puoi rifiutare i cookie disabilitandoli nelle impostazioni del tuo browser web; tuttavia, la restrizione dell'uso dei cookie potrebbe influire sul funzionamento del nostro sito web.",
                p3: "Confermi che tutti i dati personali che fornisci sono aggiornati, veritieri e corretti. Sei responsabile di eventuali danni causati dalla fornitura di informazioni personali errate.",
            },
            methodsOfProcessing: {
                heading: "Metodi di trattamento dei dati personali",
                p1: "Il trattamento dei dati personali viene effettuato automaticamente. Il trattamento dei dati personali è automatico; questo processo non può portare a conseguenze legali o in altro modo influenzarti.",
                p2: "Il trattamento dei dati personali può essere delegato ad altri fornitori di servizi di mailing di massa, processori e fornitori di servizi IT e cloud. Inoltre, possiamo delegare parte o tutto il trattamento al processore, al fornitore di servizi di mailing di massa, al fornitore di servizi IT e al fornitore di servizi cloud. La selezione dei processori viene effettuata con la massima cura possibile in modo che i tuoi dati personali siano protetti in ogni momento durante il loro trattamento.",
                p3: "Per utilizzare il Servizio, è necessario fornire i tuoi dati personali agli Inserzionisti.",
                p4: "I dati possono essere trasferiti in qualsiasi stato del mondo. Inserzionisti e processori sono i destinatari dei tuoi dati personali. Per completare il contratto tra noi, è richiesto il trasferimento dei tuoi dati personali agli Inserzionisti, come specificato nei Termini. Il trasferimento dei dati personali avviene utilizzando precauzioni sufficienti per garantire che i tuoi dati personali siano adeguatamente protetti.",
            },
            legalBasisAndPeriods: {
                heading: "Base giuridica e periodi del trattamento dei dati personali",
                p1: "Al fine di fornirti Servizi di qualità, dobbiamo trattare i dati personali che ci hai fornito nel modulo di registrazione o che ci hai fornito in qualsiasi altro modo. Il trattamento dei dati viene eseguito durante il periodo in cui ti forniamo servizi in conformità con i Termini.",
                p2: "L'indirizzo IP, l'indirizzo email e le informazioni derivate dai cookie vengono trattati per inviarti notifiche di servizi e prodotti relativi al Sito Web, nonché informazioni su opportunità commerciali che potrebbero interessarti. Tra le offerte commerciali, puoi trovare inserzionisti o altri nostri partner commerciali. Il trattamento dei dati personali viene effettuato in base al tuo consenso (contrassegno nel modulo di registrazione). Hai il diritto di revocare il tuo consenso alla raccolta dei dati personali senza pregiudicare la liceità del trattamento basato su tale consenso prima della sua revoca, nonché il trattamento eseguito su altre basi giuridiche diverse dal tuo consenso. Il trattamento del tuo indirizzo email per questo scopo verrà elaborato fino a quando non revocherai il tuo consenso.",
            },
            dataSubjectRights: {
                heading: "Diritti dell'interessato",
                p1: "Nel caso in cui il GDPR sia applicabile, hai i seguenti diritti dell'interessato, ma non limitati a:",
                list: [
                    "– Diritto di accesso ai dati personali (Articolo 15 del GDPR);",
                    "– Diritto di rettifica (Articolo 16 del GDPR);",
                    "– Diritto alla cancellazione (Articolo 17 del GDPR);",
                    "– Diritto alla limitazione del trattamento (Articolo 18 del GDPR);",
                    "– Diritto alla portabilità dei dati (Articolo 20 del GDPR);",
                    "– Diritto di opposizione (Articolo 21 del GDPR);",
                    "– Diritto di non essere soggetto a una decisione basata unicamente sul trattamento automatizzato, inclusa la profilazione, che produca effetti giuridici che ti riguardano o che incida in modo analogo significativamente sulla tua persona (Articolo 22 del GDPR);",
                    "– Diritto di proporre reclamo a un'autorità di controllo (Articolo 77 del GDPR).",
                ],
                p2: "Dichiariamo di non essere titolari del trattamento ai sensi del regolamento GDPR, in quanto non determiniamo le finalità e i mezzi del trattamento dei dati personali, che ricade sotto la responsabilità dell'Inserzionista.",
                p3: "Va notato che nei casi in cui non siamo tenuti a essere soggetti al GDPR, non siamo tenuti a rispettare questi diritti. Tuttavia, anche in questo caso, faremo del nostro meglio per soddisfare il tuo reclamo o richiesta. Prima di agire sulla tua richiesta, potremmo aver bisogno di verificare la tua identità; questa misura è necessaria per proteggere i tuoi dati personali, pertanto non condividiamo i tuoi dati personali con terze parti. Se ti rifiuti di fornirci informazioni che ci consentano di identificarti, non saremo in grado di elaborare la tua richiesta.",
                p4: "Questa Informativa sulla Privacy può essere modificata o integrata da noi unilateralmente di volta in volta. La nuova edizione dell'Informativa sulla Privacy entra in vigore dal momento della loro pubblicazione sul Sito Web.",
                p5: "Si prega di notare che se si continua a utilizzare il Sito Web e il Servizio dopo qualsiasi modifica dell'Informativa sulla Privacy, significa che si accetta e si acconsente di essere vincolati dalla nuova Informativa sulla Privacy. Se non si è d'accordo con le modifiche a questa Informativa sulla Privacy e non si desidera che le proprie informazioni siano soggette ad essa, sarà necessario interrompere l'utilizzo del Sito Web e del Servizio.",
                p6: "Una risposta alla tua richiesta può essere ricevuta entro 40 (quaranta) giorni lavorativi dal momento in cui la riceviamo. In una situazione in cui è impossibile elaborare la tua richiesta, ti informeremo sicuramente. Per la comunicazione utilizziamo mezzi elettronici di comunicazione, ad esempio e-mail o messenger; se preferisci un metodo di comunicazione diverso, ti preghiamo di comunicarcelo.",
                p7: "Forniremo qualsiasi comunicazione e qualsiasi azione gratuitamente; tuttavia, quando richiesto, potremmo addebitarti una tariffa ragionevole, tenendo conto dei costi amministrativi e di altre caratteristiche associate alla fornitura di informazioni o rifiutare di agire su richiesta.",
                p8: "Puoi presentare un reclamo relativo alla protezione dei dati personali all'organismo statale competente, richiedere protezione giudiziaria se ritieni che i tuoi diritti siano stati violati. Puoi anche presentare qualsiasi reclamo o richiesta contattandoci.",
                p9: "Se hai bisogno di maggiori informazioni sulle autorità competenti nel tuo paese o qualsiasi altra informazione, non esitare a contattarci.",
                copyright: "Copyright © 2023 prodotto | Tutti i diritti riservati",
            },
        },
    },
}

const countryCodes = [
    { code: "+1", flag: "🇺🇸", country: "United States", name: "Estados Unidos", id: "us" },
    { code: "+1", flag: "🇨🇦", country: "Canada", name: "Canadá", id: "ca" },
    { code: "+7", flag: "🇷🇺", country: "Russia", name: "Rusia", id: "ru" },
    { code: "+20", flag: "🇪🇬", country: "Egypt", name: "Egipto", id: "eg" },
    { code: "+27", flag: "🇿🇦", country: "South Africa", name: "Sudáfrica", id: "za" },
    { code: "+30", flag: "🇬🇷", country: "Greece", name: "Grecia", id: "gr" },
    { code: "+31", flag: "🇳🇱", country: "Netherlands", name: "Países Bajos", id: "nl" },
    { code: "+32", flag: "🇧🇪", country: "Belgium", name: "Bélgica", id: "be" },
    { code: "+33", flag: "🇫🇷", country: "France", name: "Francia", id: "fr" },
    { code: "+34", flag: "🇪🇸", country: "Spain", name: "España", id: "es" },
    { code: "+36", flag: "🇭🇺", country: "Hungary", name: "Hungría", id: "hu" },
    { code: "+39", flag: "🇮🇹", country: "Italy", name: "Italia", id: "it" },
    { code: "+40", flag: "🇷🇴", country: "Romania", name: "Rumanía", id: "ro" },
    { code: "+41", flag: "🇨🇭", country: "Switzerland", name: "Suiza", id: "ch" },
    { code: "+43", flag: "🇦🇹", country: "Austria", name: "Austria", id: "at" },
    { code: "+44", flag: "🇬🇧", country: "United Kingdom", name: "Reino Unido", id: "gb" },
    { code: "+45", flag: "🇩🇰", country: "Denmark", name: "Dinamarca", id: "dk" },
    { code: "+46", flag: "🇸🇪", country: "Sweden", name: "Suecia", id: "se" },
    { code: "+47", flag: "🇳🇴", country: "Norway", name: "Noruega", id: "no" },
    { code: "+48", flag: "🇵🇱", country: "Poland", name: "Polonia", id: "pl" },
    { code: "+49", flag: "🇩🇪", country: "Germany", name: "Alemania", id: "de" },
    { code: "+51", flag: "🇵🇪", country: "Peru", name: "Perú", id: "pe" },
    { code: "+52", flag: "🇲🇽", country: "Mexico", name: "México", id: "mx" },
    { code: "+53", flag: "🇨🇺", country: "Cuba", name: "Cuba", id: "cu" },
    { code: "+54", flag: "🇦🇷", country: "Argentina", name: "Argentina", id: "ar" },
    { code: "+55", flag: "🇧🇷", country: "Brazil", name: "Brasil", id: "br" },
    { code: "+56", flag: "🇨🇱", country: "Chile", name: "Chile", id: "cl" },
    { code: "+57", flag: "🇨🇴", country: "Colombia", name: "Colombia", id: "co" },
    { code: "+58", flag: "🇻🇪", country: "Venezuela", name: "Venezuela", id: "ve" },
    { code: "+60", flag: "🇲🇾", country: "Malaysia", name: "Malasia", id: "my" },
    { code: "+61", flag: "🇦🇺", country: "Australia", name: "Australia", id: "au" },
    { code: "+62", flag: "🇮🇩", country: "Indonesia", name: "Indonesia", id: "id" },
    { code: "+63", flag: "🇵🇭", country: "Philippines", name: "Filipinas", id: "ph" },
    { code: "+64", flag: "🇳🇿", country: "New Zealand", name: "Nueva Zelanda", id: "nz" },
    { code: "+65", flag: "🇸🇬", country: "Singapore", name: "Singapur", id: "sg" },
    { code: "+66", flag: "🇹🇭", country: "Thailand", name: "Tailandia", id: "th" },
    { code: "+81", flag: "🇯🇵", country: "Japan", name: "Japón", id: "jp" },
    { code: "+82", flag: "🇰🇷", country: "South Korea", name: "Corea del Sur", id: "kr" },
    { code: "+84", flag: "🇻🇳", country: "Vietnam", name: "Vietnam", id: "vn" },
    { code: "+86", flag: "🇨🇳", country: "China", name: "China", id: "cn" },
    { code: "+90", flag: "🇹🇷", country: "Turkey", name: "Turquía", id: "tr" },
    { code: "+91", flag: "🇮🇳", country: "India", name: "India", id: "in" },
    { code: "+92", flag: "🇵🇰", country: "Pakistan", name: "Pakistán", id: "pk" },
    { code: "+93", flag: "🇦🇫", country: "Afghanistan", name: "Afganistán", id: "af" },
    { code: "+94", flag: "🇱🇰", country: "Sri Lanka", name: "Sri Lanka", id: "lk" },
    { code: "+95", flag: "🇲🇲", country: "Myanmar", name: "Myanmar", id: "mm" },
    { code: "+98", flag: "🇮🇷", country: "Iran", name: "Irán", id: "ir" },
    { code: "+212", flag: "🇲🇦", country: "Morocco", name: "Marruecos", id: "ma" },
    { code: "+213", flag: "🇩🇿", country: "Algeria", name: "Argelia", id: "dz" },
    { code: "+216", flag: "🇹🇳", country: "Tunisia", name: "Túnez", id: "tn" },
    { code: "+218", flag: "🇱🇾", country: "Libya", name: "Libia", id: "ly" },
    { code: "+220", flag: "🇬🇲", country: "Gambia", name: "Gambia", id: "gm" },
    { code: "+221", flag: "🇸🇳", country: "Senegal", name: "Senegal", id: "sn" },
    { code: "+222", flag: "🇲🇷", country: "Mauritania", name: "Mauritania", id: "mr" },
    { code: "+223", flag: "🇲🇱", country: "Mali", name: "Malí", id: "ml" },
    { code: "+224", flag: "🇬🇳", country: "Guinea", name: "Guinea", id: "gn" },
    { code: "+225", flag: "🇨🇮", country: "Ivory Coast", name: "Costa de Marfil", id: "ci" },
    { code: "+226", flag: "🇧🇫", country: "Burkina Faso", name: "Burkina Faso", id: "bf" },
    { code: "+227", flag: "🇳🇪", country: "Niger", name: "Níger", id: "ne" },
    { code: "+228", flag: "🇹🇬", country: "Togo", name: "Togo", id: "tg" },
    { code: "+229", flag: "🇧🇯", country: "Benin", name: "Benín", id: "bj" },
    { code: "+230", flag: "🇲🇺", country: "Mauritius", name: "Mauricio", id: "mu" },
    { code: "+231", flag: "🇱🇷", country: "Liberia", name: "Liberia", id: "lr" },
    { code: "+232", flag: "🇸🇱", country: "Sierra Leone", name: "Sierra Leona", id: "sl" },
    { code: "+233", flag: "🇬🇭", country: "Ghana", name: "Ghana", id: "gh" },
    { code: "+234", flag: "🇳🇬", country: "Nigeria", name: "Nigeria", id: "ng" },
    { code: "+235", flag: "🇹🇩", country: "Chad", name: "Chad", id: "td" },
    { code: "+236", flag: "🇨🇫", country: "Central African Republic", name: "República Centroafricana", id: "cf" },
    { code: "+237", flag: "🇨🇲", country: "Cameroon", name: "Camerún", id: "cm" },
    { code: "+238", flag: "🇨🇻", country: "Cape Verde", name: "Cabo Verde", id: "cv" },
    { code: "+239", flag: "🇸🇹", country: "Sao Tome and Principe", name: "Santo Tomé y Príncipe", id: "st" },
    { code: "+240", flag: "🇬🇶", country: "Equatorial Guinea", name: "Guinea Ecuatorial", id: "gq" },
    { code: "+241", flag: "🇬🇦", country: "Gabon", name: "Gabón", id: "ga" },
    { code: "+242", flag: "🇨🇬", country: "Republic of the Congo", name: "República del Congo", id: "cg" },
    {
        code: "+243",
        flag: "🇨🇩",
        country: "Democratic Republic of the Congo",
        name: "República Democrática del Congo",
        id: "cd",
    },
    { code: "+244", flag: "🇦🇴", country: "Angola", name: "Angola", id: "ao" },
    { code: "+245", flag: "🇬🇼", country: "Guinea-Bissau", name: "Guinea-Bisáu", id: "gw" },
    {
        code: "+246",
        flag: "🇮🇴",
        country: "British Indian Ocean Territory",
        name: "Territorio Británico del Océano Índico",
        id: "io",
    },
    { code: "+248", flag: "🇸🇨", country: "Seychelles", name: "Seychelles", id: "sc" },
    { code: "+249", flag: "🇸🇩", country: "Sudan", name: "Sudán", id: "sd" },
    { code: "+250", flag: "🇷🇼", country: "Rwanda", name: "Ruanda", id: "rw" },
    { code: "+251", flag: "🇪🇹", country: "Ethiopia", name: "Etiopía", id: "et" },
    { code: "+252", flag: "🇸🇴", country: "Somalia", name: "Somalia", id: "so" },
    { code: "+253", flag: "🇩🇯", country: "Djibouti", name: "Yibuti", id: "dj" },
    { code: "+254", flag: "🇰🇪", country: "Kenya", name: "Kenia", id: "ke" },
    { code: "+255", flag: "🇹🇿", country: "Tanzania", name: "Tanzania", id: "tz" },
    { code: "+256", flag: "🇺🇬", country: "Uganda", name: "Uganda", id: "ug" },
    { code: "+257", flag: "🇧🇮", country: "Burundi", name: "Burundi", id: "bi" },
    { code: "+258", flag: "🇲🇿", country: "Mozambique", name: "Mozambique", id: "mz" },
    { code: "+260", flag: "🇿🇲", country: "Zambia", name: "Zambia", id: "zm" },
    { code: "+261", flag: "🇲🇬", country: "Madagascar", name: "Madagascar", id: "mg" },
    { code: "+262", flag: "🇷🇪", country: "Reunion", name: "Reunión", id: "re" },
    { code: "+263", flag: "🇿🇼", country: "Zimbabwe", name: "Zimbabue", id: "zw" },
    { code: "+264", flag: "🇳🇦", country: "Namibia", name: "Namibia", id: "na" },
    { code: "+265", flag: "🇲🇼", country: "Malawi", name: "Malaui", id: "mw" },
    { code: "+266", flag: "🇱🇸", country: "Lesotho", name: "Lesoto", id: "ls" },
    { code: "+267", flag: "🇧🇼", country: "Botswana", name: "Botsuana", id: "bw" },
    { code: "+268", flag: "🇸🇿", country: "Swaziland", name: "Suazilandia", id: "sz" },
    { code: "+269", flag: "🇰🇲", country: "Comoros", name: "Comoras", id: "km" },
    { code: "+290", flag: "🇸🇭", country: "Saint Helena", name: "Santa Elena", id: "sh" },
    { code: "+291", flag: "🇪🇷", country: "Eritrea", name: "Eritrea", id: "er" },
    { code: "+297", flag: "🇦🇼", country: "Aruba", name: "Aruba", id: "aw" },
    { code: "+298", flag: "🇫🇴", country: "Faroe Islands", name: "Islas Feroe", id: "fo" },
    { code: "+299", flag: "🇬🇱", country: "Greenland", name: "Groenlandia", id: "gl" },
    { code: "+350", flag: "🇬🇮", country: "Gibraltar", name: "Gibraltar", id: "gi" },
    { code: "+351", flag: "🇵🇹", country: "Portugal", name: "Portugal", id: "pt" },
    { code: "+352", flag: "🇱🇺", country: "Luxembourg", name: "Luxemburgo", id: "lu" },
    { code: "+353", flag: "🇮🇪", country: "Ireland", name: "Irlanda", id: "ie" },
    { code: "+354", flag: "🇮🇸", country: "Iceland", name: "Islandia", id: "is" },
    { code: "+355", flag: "🇦🇱", country: "Albania", name: "Albania", id: "al" },
    { code: "+356", flag: "🇲🇹", country: "Malta", name: "Malta", id: "mt" },
    { code: "+357", flag: "🇨🇾", country: "Cyprus", name: "Chipre", id: "cy" },
    { code: "+358", flag: "🇫🇮", country: "Finland", name: "Finlandia", id: "fi" },
    { code: "+359", flag: "🇧🇬", country: "Bulgaria", name: "Bulgaria", id: "bg" },
    { code: "+370", flag: "🇱🇹", country: "Lithuania", name: "Lituania", id: "lt" },
    { code: "+371", flag: "🇱🇻", country: "Latvia", name: "Letonia", id: "lv" },
    { code: "+372", flag: "🇪🇪", country: "Estonia", name: "Estonia", id: "ee" },
    { code: "+373", flag: "🇲🇩", country: "Moldova", name: "Moldavia", id: "md" },
    { code: "+374", flag: "🇦🇲", country: "Armenia", name: "Armenia", id: "am" },
    { code: "+375", flag: "🇧🇾", country: "Belarus", name: "Bielorrusia", id: "by" },
    { code: "+376", flag: "🇦🇩", country: "Andorra", name: "Andorra", id: "ad" },
    { code: "+377", flag: "🇲🇨", country: "Monaco", name: "Mónaco", id: "mc" },
    { code: "+378", flag: "🇸🇲", country: "San Marino", name: "San Marino", id: "sm" },
    { code: "+380", flag: "🇺🇦", country: "Ukraine", name: "Ucrania", id: "ua" },
    { code: "+381", flag: "🇷🇸", country: "Serbia", name: "Serbia", id: "rs" },
    { code: "+382", flag: "🇲🇪", country: "Montenegro", name: "Montenegro", id: "me" },
    { code: "+383", flag: "🇽🇰", country: "Kosovo", name: "Kosovo", id: "xk" },
    { code: "+385", flag: "🇭🇷", country: "Croatia", name: "Croacia", id: "hr" },
    { code: "+386", flag: "🇸🇮", country: "Slovenia", name: "Eslovenia", id: "si" },
    { code: "+387", flag: "🇧🇦", country: "Bosnia and Herzegovina", name: "Bosnia y Herzegovina", id: "ba" },
    { code: "+389", flag: "🇲🇰", country: "North Macedonia", name: "Macedonia del Norte", id: "mk" },
    { code: "+420", flag: "🇨🇿", country: "Czech Republic", name: "República Checa", id: "cz" },
    { code: "+421", flag: "🇸🇰", country: "Slovakia", name: "Eslovaquia", id: "sk" },
    { code: "+423", flag: "🇱🇮", country: "Liechtenstein", name: "Liechtenstein", id: "li" },
    { code: "+500", flag: "🇫🇰", country: "Falkland Islands", name: "Islas Malvinas", id: "fk" },
    { code: "+501", flag: "🇧🇿", country: "Belize", name: "Belice", id: "bz" },
    { code: "+502", flag: "🇬🇹", country: "Guatemala", name: "Guatemala", id: "gt" },
    { code: "+503", flag: "🇸🇻", country: "El Salvador", name: "El Salvador", id: "sv" },
    { code: "+504", flag: "🇭🇳", country: "Honduras", name: "Honduras", id: "hn" },
    { code: "+505", flag: "🇳🇮", country: "Nicaragua", name: "Nicaragua", id: "ni" },
    { code: "+506", flag: "🇨🇷", country: "Costa Rica", name: "Costa Rica", id: "cr" },
    { code: "+507", flag: "🇵🇦", country: "Panama", name: "Panamá", id: "pa" },
    { code: "+508", flag: "🇵🇲", country: "Saint Pierre and Miquelon", name: "San Pedro y Miquelón", id: "pm" },
    { code: "+509", flag: "🇭🇹", country: "Haiti", name: "Haití", id: "ht" },
    { code: "+590", flag: "🇬🇵", country: "Guadeloupe", name: "Guadalupe", id: "gp" },
    { code: "+591", flag: "🇧🇴", country: "Bolivia", name: "Bolivia", id: "bo" },
    { code: "+592", flag: "🇬🇾", country: "Guyana", name: "Guyana", id: "gy" },
    { code: "+593", flag: "🇪🇨", country: "Ecuador", name: "Ecuador", id: "ec" },
    { code: "+594", flag: "🇬🇫", country: "French Guiana", name: "Guayana Francesa", id: "gf" },
    { code: "+595", flag: "🇵🇾", country: "Paraguay", name: "Paraguay", id: "py" },
    { code: "+596", flag: "🇲🇶", country: "Martinique", name: "Martinica", id: "mq" },
    { code: "+597", flag: "🇸🇷", country: "Suriname", name: "Surinam", id: "sr" },
    { code: "+598", flag: "🇺🇾", country: "Uruguay", name: "Uruguay", id: "uy" },
    { code: "+599", flag: "🇨🇼", country: "Curacao", name: "Curazao", id: "cw" },
    { code: "+670", flag: "🇹🇱", country: "East Timor", name: "Timor Oriental", id: "tl" },
    { code: "+672", flag: "🇦🇶", country: "Antarctica", name: "Antártida", id: "aq" },
    { code: "+673", flag: "🇧🇳", country: "Brunei", name: "Brunéi", id: "bn" },
    { code: "+674", flag: "🇳🇷", country: "Nauru", name: "Nauru", id: "nr" },
    { code: "+675", flag: "🇵🇬", country: "Papua New Guinea", name: "Papúa Nueva Guinea", id: "pg" },
    { code: "+676", flag: "🇹🇴", country: "Tonga", name: "Tonga", id: "to" },
    { code: "+677", flag: "🇸🇧", country: "Solomon Islands", name: "Islas Salomón", id: "sb" },
    { code: "+678", flag: "🇻🇺", country: "Vanuatu", name: "Vanuatu", id: "vu" },
    { code: "+679", flag: "🇫🇯", country: "Fiji", name: "Fiyi", id: "fj" },
    { code: "+680", flag: "🇵🇼", country: "Palau", name: "Palaos", id: "pw" },
    { code: "+681", flag: "🇼🇫", country: "Wallis and Futuna", name: "Wallis y Futuna", id: "wf" },
    { code: "+682", flag: "🇨🇰", country: "Cook Islands", name: "Islas Cook", id: "ck" },
    { code: "+683", flag: "🇳🇺", country: "Niue", name: "Niue", id: "nu" },
    { code: "+684", flag: "🇦🇸", country: "American Samoa", name: "Samoa Americana", id: "as" },
    { code: "+685", flag: "🇼🇸", country: "Samoa", name: "Samoa", id: "ws" },
    { code: "+686", flag: "🇰🇮", country: "Kiribati", name: "Kiribati", id: "ki" },
    { code: "+687", flag: "🇳🇨", country: "New Caledonia", name: "Nueva Caledonia", id: "nc" },
    { code: "+688", flag: "🇹🇻", country: "Tuvalu", name: "Tuvalu", id: "tv" },
    { code: "+689", flag: "🇵🇫", country: "French Polynesia", name: "Polinesia Francesa", id: "pf" },
    { code: "+690", flag: "🇹🇰", country: "Tokelau", name: "Tokelau", id: "tk" },
    { code: "+691", flag: "🇫🇲", country: "Micronesia", name: "Micronesia", id: "fm" },
    { code: "+692", flag: "🇲🇭", country: "Marshall Islands", name: "Islas Marshall", id: "mh" },
    { code: "+850", flag: "🇰🇵", country: "North Korea", name: "Corea del Norte", id: "kp" },
    { code: "+852", flag: "🇭🇰", country: "Hong Kong", name: "Hong Kong", id: "hk" },
    { code: "+853", flag: "🇲🇴", country: "Macau", name: "Macao", id: "mo" },
    { code: "+855", flag: "🇰🇭", country: "Cambodia", name: "Camboya", id: "kh" },
    { code: "+856", flag: "🇱🇦", country: "Laos", name: "Laos", id: "la" },
    { code: "+880", flag: "🇧🇩", country: "Bangladesh", name: "Bangladés", id: "bd" },
    { code: "+886", flag: "🇹🇼", country: "Taiwan", name: "Taiwán", id: "tw" },
    { code: "+960", flag: "🇲🇻", country: "Maldives", name: "Maldivas", id: "mv" },
    { code: "+961", flag: "🇱🇧", country: "Lebanon", name: "Líbano", id: "lb" },
    { code: "+962", flag: "🇯🇴", country: "Jordan", name: "Jordania", id: "jo" },
    { code: "+963", flag: "🇸🇾", country: "Syria", name: "Siria", id: "sy" },
    { code: "+964", flag: "🇮🇶", country: "Iraq", name: "Irak", id: "iq" },
    { code: "+965", flag: "🇰🇼", country: "Kuwait", name: "Kuwait", id: "kw" },
    { code: "+966", flag: "🇸🇦", country: "Saudi Arabia", name: "Arabia Saudí", id: "sa" },
    { code: "+967", flag: "🇾🇪", country: "Yemen", name: "Yemen", id: "ye" },
    { code: "+968", flag: "🇴🇲", country: "Oman", name: "Omán", id: "om" },
    { code: "+970", flag: "🇵🇸", country: "Palestine", name: "Palestina", id: "ps" },
    { code: "+971", flag: "🇦🇪", country: "United Arab Emirates", name: "Emiratos Árabes Unidos", id: "ae" },
    { code: "+972", flag: "🇮🇱", country: "Israel", name: "Israel", id: "il" },
    { code: "+973", flag: "🇧🇭", country: "Bahrain", name: "Baréin", id: "bh" },
    { code: "+974", flag: "🇶🇦", country: "Qatar", name: "Catar", id: "qa" },
    { code: "+975", flag: "🇧🇹", country: "Bhutan", name: "Bután", id: "bt" },
    { code: "+976", flag: "🇲🇳", country: "Mongolia", name: "Mongolia", id: "mn" },
    { code: "+977", flag: "🇳🇵", country: "Nepal", name: "Nepal", id: "np" },
    { code: "+992", flag: "🇹🇯", country: "Tajikistan", name: "Tayikistán", id: "tj" },
    { code: "+993", flag: "🇹🇲", country: "Turkmenistan", name: "Turkmenistán", id: "tm" },
    { code: "+994", flag: "🇦🇿", country: "Azerbaijan", name: "Azerbaiyán", id: "az" },
    { code: "+995", flag: "🇬🇪", country: "Georgia", name: "Georgia", id: "ge" },
    { code: "+996", flag: "🇰🇬", country: "Kyrgyzstan", name: "Kirguistán", id: "kg" },
    { code: "+998", flag: "🇺🇿", country: "Uzbekistan", name: "Uzbekistán", id: "uz" },
]

const platformNetBenefit = 466837090 // Static for this page
const newUsersToday = 4000 // Static for this page

type Language = "es" | "en" | "ca" | "it"

export default function PrivacyPolicyPage() {
    const [language, setLanguage] = useState<Language>("es")
    const [countrySearch, setCountrySearch] = useState("") // Needed for Select component, even if not used for search on this page

    const t = translations[language]

    const handleLanguageChange = (newLanguage: string) => {
        setLanguage(newLanguage as Language)
    }

    const filteredCountries = useMemo(() => {
        if (!countrySearch) return countryCodes
        const searchTerm = countrySearch.toLowerCase()
        return countryCodes.filter(
            (country) =>
                country.country.toLowerCase().includes(searchTerm) ||
                country.name.toLowerCase().includes(searchTerm) ||
                country.code.includes(searchTerm),
        )
    }, [countrySearch])

    const selectedCountry = countryCodes.find((c) => c.code === "+34") // Default to Spain for consistency

    return (
        <div className="min-h-screen relative overflow-hidden bg-blue-950">
            {/* Section with background image */}
            <div className="relative z-10" aria-label="Background image of cryptocurrency charts">
                <div className="absolute inset-0 bg-[url('/images/image.jpg')] bg-cover bg-center blur-md"></div>
                <div className="relative z-20">
                    {/* Notification Bar */}
                    <div className="relative z-20 bg-blue-600 text-white text-center py-2 px-4 text-sm">
                        <div className="flex items-center justify-center gap-2">
                            <Info className="w-4 h-4" />
                            <span>{t.notification}</span>
                            <Badge variant="destructive" className="ml-2">
                                00:00
                            </Badge>
                        </div>
                    </div>
                    {/* Header */}
                    <header className="relative z-20 grid grid-cols-[auto_1fr_auto] items-center p-4 sm:p-6">
                        {/* Logo Column */}
                        <div className="flex items-center gap-3">
                            <img
                                src="/logo.png"
                                alt="Coin Sin Limited Logo"
                                className="h-24 w-48 sm:h-28 sm:w-56 object-contain rounded-lg"
                            />
                        </div>
                        {/* Counters Column (centered) */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                            <div className="text-white text-sm text-center sm:text-left">
                                <div className="text-orange-400 font-semibold">{t.platformBenefit}</div>
                                <div className="text-xl font-bold">${platformNetBenefit.toLocaleString()}</div>
                            </div>
                            <div className="text-white text-sm text-center sm:text-left">
                                <div className="text-orange-400 font-semibold">{t.userIncome}</div>
                                <div className="text-xl font-bold">{newUsersToday.toLocaleString()}</div>
                            </div>
                        </div>
                        {/* Language Selector Column */}
                        <div className="flex justify-end">
                            <Select value={language} onValueChange={handleLanguageChange}>
                                <SelectTrigger className="w-full sm:w-32 bg-white text-gray-900 [&>span]:text-gray-900 [&>span>span]:text-gray-900 [&>svg]:text-gray-900">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="es">🇪🇸 Español</SelectItem>
                                    <SelectItem value="en">🇺🇸 English</SelectItem>
                                    <SelectItem value="ca">CAT Català</SelectItem>
                                    <SelectItem value="it">🇮🇹 Italiano</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </header>
                </div>
            </div>
            {/* Main Content Area for Privacy Policy */}
            <main id="privacy-policy-section" className="max-w-4xl mx-auto px-4 py-8 sm:px-6 sm:py-12 text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12">{t.privacyPolicyContent.title}</h1>
                <section className="space-y-8 text-lg leading-relaxed">
                    <h2 className="text-3xl font-bold text-orange-400 mb-4">{t.privacyPolicyContent.general.heading}</h2>
                    <p>{t.privacyPolicyContent.general.p1}</p>
                    <p>{t.privacyPolicyContent.general.p2}</p>
                    <p>{t.privacyPolicyContent.general.p3}</p>
                    <h2 className="text-3xl font-bold text-orange-400 mb-4">
                        {t.privacyPolicyContent.methodsAndPrinciples.heading}
                    </h2>
                    <p>{t.privacyPolicyContent.methodsAndPrinciples.p1}</p>
                    <p>{t.privacyPolicyContent.methodsAndPrinciples.p2}</p>
                    <p>{t.privacyPolicyContent.methodsAndPrinciples.p3}</p>
                    <p>{t.privacyPolicyContent.methodsAndPrinciples.p4}</p>
                    <h2 className="text-3xl font-bold text-orange-400 mb-4">
                        {t.privacyPolicyContent.processedPersonalData.heading}
                    </h2>
                    <p>{t.privacyPolicyContent.processedPersonalData.p1}</p>
                    <p>{t.privacyPolicyContent.processedPersonalData.p2}</p>
                    <p>{t.privacyPolicyContent.processedPersonalData.p3}</p>
                    <h2 className="text-3xl font-bold text-orange-400 mb-4">
                        {t.privacyPolicyContent.methodsOfProcessing.heading}
                    </h2>
                    <p>{t.privacyPolicyContent.methodsOfProcessing.p1}</p>
                    <p>{t.privacyPolicyContent.methodsOfProcessing.p2}</p>
                    <p>{t.privacyPolicyContent.methodsOfProcessing.p3}</p>
                    <p>{t.privacyPolicyContent.methodsOfProcessing.p4}</p>
                    <h2 className="text-3xl font-bold text-orange-400 mb-4">
                        {t.privacyPolicyContent.legalBasisAndPeriods.heading}
                    </h2>
                    <p>{t.privacyPolicyContent.legalBasisAndPeriods.p1}</p>
                    <p>{t.privacyPolicyContent.legalBasisAndPeriods.p2}</p>
                    <h2 className="text-3xl font-bold text-orange-400 mb-4">
                        {t.privacyPolicyContent.dataSubjectRights.heading}
                    </h2>
                    <p>{t.privacyPolicyContent.dataSubjectRights.p1}</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        {t.privacyPolicyContent.dataSubjectRights.list.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p>{t.privacyPolicyContent.dataSubjectRights.p2}</p>
                    <p>{t.privacyPolicyContent.dataSubjectRights.p3}</p>
                    <p>{t.privacyPolicyContent.dataSubjectRights.p4}</p>
                    <p>{t.privacyPolicyContent.dataSubjectRights.p5}</p>
                    <p>{t.privacyPolicyContent.dataSubjectRights.p6}</p>
                    <p>{t.privacyPolicyContent.dataSubjectRights.p7}</p>
                    <p>{t.privacyPolicyContent.dataSubjectRights.p8}</p>
                    <p>{t.privacyPolicyContent.dataSubjectRights.p9}</p>
                    <p className="text-sm text-white/70 mt-8">{t.privacyPolicyContent.dataSubjectRights.copyright}</p>
                </section>
            </main>
            {/* Footer */}
            <footer className="bg-blue-900 text-white py-8 sm:py-12 mt-16 sm:mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
                    {/* Company Info */}
                    <div className="space-y-4 text-sm">
                        <img src="/logo.png" alt="Coin Sin Limited Logo" className="h-20 w-40 object-contain rounded-lg mb-2" />
                        <p className="leading-relaxed">{t.footerCompanyInfo}</p>
                    </div>
                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-orange-400 mb-2">Enlaces Rápidos</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/#registration-form" className="hover:text-orange-300 transition-colors duration-200">
                                    {t.footerContactanos}
                                </Link>
                            </li>
                            <li>
                                <Link href="#privacy-policy-section" className="hover:text-orange-300 transition-colors duration-200">
                                    {t.footerPrivacidad}
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-orange-300 transition-colors duration-200">
                                    {t.footerTerminos}
                                </Link>
                            </li>
                            <li>
                                <Link href="/disclaimer" className="hover:text-orange-300 transition-colors duration-200">
                                    {t.footerDescargo}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* Contact Info */}
                    <div className="space-y-4 text-sm">
                        <h3 className="text-lg font-bold text-orange-400 mb-2">Contacto</h3>
                        <p>
                            <span className="font-semibold">{t.footerEmailLabel}</span> info@coinsinlimited.com
                        </p>
                    </div>
                </div>
                <div className="text-xs text-white/70 mt-8 text-center px-4 sm:px-8">
                    <p>{t.footerCopyright} Coin Sin Limited.</p>
                </div>
                <div className="text-xs text-white/50 mt-4 text-center px-4 sm:px-8 leading-relaxed">
                    <p>{t.disclaimerFull}</p>
                </div>
            </footer>
        </div>
    )
}
