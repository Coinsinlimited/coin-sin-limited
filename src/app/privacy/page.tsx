"use client"
import { useState, useMemo } from "react"
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
        disclaimerFull: `IMPORTANTE: Exenciones de Responsabilidad de Ingresos y Legales. Las gráficas de ingresos y ganancias creadas por smartbitboost.io, también conocido como "Este Sitio Web", se utilizan únicamente como ilustraciones ideales de su potencial de ganancias. El éxito de las personas en testimonios y otros ejemplos son resultados excepcionales, por lo que no están destinados a garantizar que usted u otros logren lo mismo. Los resultados individuales dependerán de cómo use smartbitboost.io. Por lo que haga, este sitio web no tiene responsabilidad. Siempre debe actuar con precaución y diligencia debida porque asume toda la responsabilidad por sus acciones y decisiones al utilizar productos y servicios. Acepta que de ninguna manera este sitio web será responsable de los resultados de su uso de nuestros servicios. Consulte nuestros términos de uso para obtener información sobre nuestras exenciones de responsabilidad y otras restricciones. Si bien el comercio puede generar beneficios notables, también conlleva el riesgo de perder el capital invertido en parte o en su totalidad, por lo que debe considerar si puede permitirse invertir. ©2025
AVISO DE REGULACIÓN EN USA: El comercio de Forex, CFDs y criptomonedas no está bajo ninguna regulación estadounidense. La inversión en criptomonedas no está regulada ni supervisada por ninguna agencia financiera o de EE. UU. Cualquier comercio que no sea regulado por residentes estadounidenses se considera ilegal. Este sitio web no acepta clientes estadounidenses o ciudadanos estadounidenses. Este sitio web no tiene responsabilidad por las acciones de los clientes ubicados o con ciudadanía estadounidense. Los clientes ubicados dentro de los Estados Unidos o con ciudadanía estadounidense asumen toda la responsabilidad por sus acciones y decisiones al usar productos y servicios de este Sitio Web. En cualquier y todas las circunstancias, la elección de utilizar el Sitio Web, el Servicio y/o el Software es bajo la total responsabilidad del Usuario, quien debe cumplir con la legislación vigente.`,
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
                p4: "Los datos pueden transferirse a cualquier estado del mundo. Los Anunciantes y procesadores son los destinatarios de sus datos personales. Para completar el contrato entre nosotros, se requiere la transferencia de sus datos personales a los Anunciantes, según se especifica en los Términos. La transferencia de datos personales se realiza utilizando las precauciones suficientes para garantizar que sus datos personales estén debidamente protegidos.",
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
                p10: "Para contactar a nuestro operador, haga clic aquí.",
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
        disclaimerFull: `IMPORTANT: Income and Legal Disclaimers. The income and earnings graphs created by smartbitboost.io, also known as "This Website", are used solely as ideal illustrations of your earning potential. The success of individuals in testimonials and other examples are exceptional results, and therefore are not intended to guarantee that you or others will achieve the same. Individual results will depend on how you use smartbitboost.io. For whatever you do, this website has no responsibility. You should always act with caution and due diligence because you assume full responsibility for your actions and decisions when using products and services. You agree that in no way will this website be responsible for the results of your use of our services. See our terms of use for information on our disclaimers and other restrictions. While trading can generate notable benefits, it also carries the risk of losing invested capital in part or in full, so you should consider whether you can afford to invest. ©2025
USA REGULATORY NOTICE: Forex, CFD, and cryptocurrency trading is not under any US regulation. Cryptocurrency investment is not regulated or supervised by any US or financial agency. Any unregulated trading by US residents is considered illegal. This website does not accept US clients or US citizens. This website has no responsibility for the actions of clients located in or with US citizenship. Clients located within the United States or with US citizenship assume full responsibility for their actions and decisions when using products and services from this Website. In any and all circumstances, the choice to use the Website, the Service and/or the Software is under the sole responsibility of the User, who must comply with current legislation.`,
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
                p10: "To contact our operator, please click here.",
                copyright: "Copyright © 2023 product | All Rights Reserved",
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
    { code: "+40", flag: "🇷🇴", country: "Romania", name: "Rumania", id: "ro" },
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

export default function PrivacyPolicyPage() {
    const [language, setLanguage] = useState<"es" | "en">("es")
    const [countrySearch, setCountrySearch] = useState("") // Needed for Select component, even if not used for search on this page

    const t = translations[language]

    const handleLanguageChange = (newLanguage: string) => {
        setLanguage(newLanguage as "es" | "en")
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
                                </SelectContent>
                            </Select>
                        </div>
                    </header>
                </div>
            </div>

            {/* Main Content Area for Privacy Policy */}
            <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 sm:py-12 text-white">
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
                    <p>
                        Para contactar a nuestro operador,{" "}
                        <a href="#" className="text-orange-400 hover:underline">
                            haga clic aquí
                        </a>
                        .
                    </p>
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
                                <a href="#" className="hover:text-orange-300 transition-colors duration-200">
                                    {t.footerContactanos}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-orange-300 transition-colors duration-200">
                                    {t.footerPrivacidad}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-orange-300 transition-colors duration-200">
                                    {t.footerTerminos}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-orange-300 transition-colors duration-200">
                                    {t.footerDescargo}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-orange-300 transition-colors duration-200">
                                    {t.footerAbuso}
                                </a>
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
