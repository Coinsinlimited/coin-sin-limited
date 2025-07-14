"use client"
import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Info } from "lucide-react"

// Re-import translations and countryCodes from crypto-landing.tsx to ensure consistency
// In a real application, these would likely be in a shared context or utility file.
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
        disclaimerFull: `IMPORTANT: Exenciones de Responsabilidad de Ingresos y Legales. Las gráficas de ingresos y ganancias creadas por smartbitboost.io, también conocido como "Este Sitio Web", se utilizan únicamente como ilustraciones ideales de su potencial de ganancias. El éxito de las personas en testimonios y otros ejemplos son resultados excepcionales, por lo que no están destinados a garantizar que usted u otros logren lo mismo. Los resultados individuales dependerán de cómo use smartbitboost.io. Por lo que haga, este sitio web no tiene responsabilidad. Siempre debe actuar con precaución y diligencia debida porque asume toda la responsabilidad por sus acciones y decisiones al utilizar productos y servicios. Acepta que de ninguna manera este sitio web será responsable de los resultados de su uso de nuestros servicios. Consulte nuestros términos de uso para obtener información sobre nuestras exenciones de responsabilidad y otras restricciones. Si bien el comercio puede generar beneficios notables, también conlleva el riesgo de perder el capital invertido en parte o en su totalidad, por lo que debe considerar si puede permitirse invertir. ©2025
AVISO DE REGULACIÓN EN USA: El comercio de Forex, CFDs y criptomonedas no está bajo ninguna regulación estadounidense. La inversión en criptomonedas no está regulada ni supervisada por ninguna agencia financiera o de EE. UU. Cualquier comercio que no sea regulado por residentes estadounidenses se considera ilegal. Este sitio web no acepta clientes estadounidenses o ciudadanos estadounidenses. Este sitio web no tiene responsabilidad por las acciones de los clientes ubicados o con ciudadanía estadounidense. Los clientes ubicados dentro de los Estados Unidos o con ciudadanía estadounidense asumen toda la responsabilidad por sus acciones y decisiones al usar productos y servicios de este Sitio Web. En cualquier y todas las circunstancias, la elección de utilizar el Sitio Web, el Servicio y/o el Software es bajo la total responsabilidad del Usuario, quien debe cumplir con la legislación vigente.`,
        disclaimerFullContent: `IMPORTANTE: Exenciones de Responsabilidad de Ingresos y Legales. Se ha hecho todo lo posible para representar con precisión este producto y su potencial. Aunque esta industria es una de las pocas en las que uno puede escribir su propio cheque en términos de ganancias, no hay garantía de que gane dinero utilizando las técnicas e ideas de estos materiales. Los ejemplos en estos materiales no deben interpretarse como una promesa o garantía de ganancias. El potencial de ganancias depende completamente de la persona que utiliza nuestro producto, ideas y técnicas. No pretendemos que esto sea un "esquema para hacerse rico".

Cualquier reclamo de ganancias reales o ejemplos de resultados reales puede verificarse previa solicitud. Su nivel de éxito en la obtención de los resultados reclamados en nuestros materiales depende del tiempo que dedique al programa, las ideas y técnicas mencionadas, sus finanzas, conocimientos y diversas habilidades. Dado que estos factores difieren según los individuos, no podemos garantizar su éxito o nivel de ingresos. Tampoco somos responsables de ninguna de sus acciones.

Los materiales de nuestro producto y nuestro sitio web pueden contener información que incluye o se basa en declaraciones prospectivas en el sentido de la Ley de Reforma de Litigios de Valores de 1995. Las declaraciones prospectivas expresan nuestras expectativas o pronósticos de eventos futuros. Puede identificar estas declaraciones por el hecho de que no se relacionan estrictamente con hechos históricos o actuales. Utilizan palabras como "anticipar", "estimar", "esperar", "proyectar", "pretender", "planificar", "creer" y otras palabras y términos de significado similar en relación con una descripción de ganancias potenciales o rendimiento financiero.

Todas y cada una de las declaraciones prospectivas aquí o en cualquiera de nuestros materiales de venta tienen la intención de expresar nuestra opinión sobre el potencial de ganancias. Muchos factores serán importantes para determinar sus resultados reales y no se garantiza que logrará resultados similares a los nuestros o a los de cualquier otra persona; de hecho, no se garantiza que logrará ningún resultado de nuestras ideas y técnicas en nuestro material.

El autor y el editor renuncian a cualquier garantía (expresa o implícita), comerciabilidad o idoneidad para un propósito particular. El autor y el editor en ningún caso serán responsables ante ninguna parte por daños directos, indirectos, punitivos, especiales, incidentales u otros daños consecuentes que surjan directa o indirectamente del uso de este material, que se proporciona "tal cual" y sin garantías.

Como siempre, se debe buscar el consejo de un profesional legal, fiscal, contable u otro profesional competente. El autor y el editor no garantizan el rendimiento, la eficacia o la aplicabilidad de ningún sitio listado o vinculado en este producto.

Todos los enlaces son solo para fines informativos y no están garantizados en cuanto a contenido, precisión o cualquier otro propósito implícito o explícito.

Privacidad
Mantenemos esta página para demostrar nuestro firme compromiso con los derechos y la privacidad de nuestros usuarios. Esta página explica cómo nuestro sitio recopila información de nuestros miembros.

Boletín gratuito y lista de correo: respetamos la privacidad de nuestros usuarios y, como tal, nunca compartiremos nuestra base de datos de direcciones de correo electrónico y nombres con terceros.

Al confirmar que le gustaría unirse a nuestro boletín, de vez en cuando le enviaremos información gratuita relacionada con los productos que comercializamos, consejos generales relacionados con el marketing en línea y material promocional para otros productos. Su correo electrónico nunca se transmitirá a terceros. Tampoco le enviaremos spam. Puede darse de baja de la lista de correo en cualquier momento.

Información personal que recopilamos y cómo se utiliza: Proveedor de servicios: cuando compra un producto, el pago es procesado por el producto, quien recopilará su nombre, dirección e información de tarjeta de crédito para verificar su pedido. No pueden usar la información para ningún otro propósito. Al realizar el pedido, también recopilamos su nombre y dirección de correo electrónico. Utilizamos esta información para hacer un seguimiento con usted según la sección de boletines anterior.

Recordatorio adicional – Descargo de responsabilidad de ganancias:
Se ha hecho todo lo posible para representar con precisión este producto y su potencial. Aunque esta industria es una de las pocas en las que uno puede escribir su propio cheque en términos de ganancias, no hay garantía de que gane dinero utilizando las técnicas e ideas de estos materiales.

Los ejemplos en estos materiales no deben tomarse como una promesa o garantía de ganancias. El potencial de ganancias depende completamente de la persona que utiliza nuestro producto, ideas, técnicas y el esfuerzo realizado. No pretendemos que esto sea un "esquema para hacerse rico", y tampoco debe verlo como tal.

Todas y cada una de las declaraciones prospectivas aquí o en cualquiera de nuestros materiales de venta tienen la intención de expresar nuestra opinión sobre el potencial de ganancias. Muchos factores serán importantes para determinar sus resultados reales y no se garantiza que logrará resultados similares a los nuestros o a los de cualquier otra persona; de hecho, no se garantiza que logrará ningún resultado de nuestras ideas y técnicas.

Los resultados varían y, como ocurre con cualquier oportunidad de ganar dinero, podría ganar más o menos. El éxito en CUALQUIER oportunidad de ganar dinero es el resultado de un trabajo duro, tiempo y una variedad de otros factores. El producto no ofrece garantías expresas o implícitas de ingresos.

Política de devoluciones y reembolsos: como se indicó, si compra un producto y no disfruta de la libertad financiera que esperaba, no gana tanto con nuestros métodos como esperaba, o por cualquier motivo, puede solicitar un reembolso del producto dentro de los 60 días posteriores a la compra. Como nota al margen, le pedimos que ponga en práctica las técnicas antes de solicitar un reembolso, para nuestro beneficio: sin embargo, nuestra política de reembolso es incondicional y esto es una sugerencia, no un requisito. Somos conscientes de que algunos compradores no lograrán sus objetivos personales a pesar de nuestros mejores esfuerzos, y mantenemos nuestra política de reembolso como tal. Envíenos su número de recibo (que se le dio cuando realizó el pedido) y procesaremos su solicitud de reembolso lo más rápido posible, generalmente dentro de las 24 horas.

Revisiones de esta política: Nuestra empresa se reserva el derecho de revisar, enmendar o modificar esta política, nuestro acuerdo de Términos de servicio y nuestras otras políticas y acuerdos en cualquier momento y de cualquier manera, actualizando esta publicación.
Copyright © 2025 producto | Todos los derechos reservados
`,
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
        disclaimerFullContent: `IMPORTANT: Income and Legal Disclaimers. Every effort has been made to accurately represent this product and its potential. Even though this industry is one of the few where one can write their own check in terms of earnings, there is no guarantee that you will earn any money using the techniques and ideas in these materials. Examples in these materials are not to be interpreted as a promise or guarantee of earnings. Earning potential is entirely dependent on the person using our product, ideas and techniques. We do not purport this as a “get rich scheme.”

Any claims made of actual earnings or examples of actual results can be verified upon request. Your level of success in attaining the results claimed in our materials depends on the time you devote to the program, ideas and techniques mentioned, your finances, knowledge and various skills. Since these factors differ according to individuals, we cannot guarantee your success or income level. Nor are we responsible for any of your actions.

Materials in our product and our website may contain information that includes or is based upon forward-looking statements within the meaning of the Securities Litigation Reform Act of 1995. Forward-looking statements give our expectations or forecasts of future events. You can identify these statements by the fact that they do not relate strictly to historical or current facts. They use words such as “anticipate,” “estimate,” “expect,” “project,” “intend,” “plan,” “believe,” and other words and terms of similar meaning in connection with a description of potential earnings or financial performance.

Any and all forward looking statements here or on any of our sales material are intended to express our opinion of earnings potential. Many factors will be important in determining your actual results and no guarantees are made that you will achieve results similar to ours or anybody else’s, in fact no guarantees are made that you will achieve any results from our ideas and techniques in our material.

The author and publisher disclaim any warranties (express or implied), merchantability, or fitness for any particular purpose. The author and publisher shall in no event be held liable to any party for any direct, indirect, punitive, special, incidental or other consequential damages arising directly or indirectly from any use of this material, which is provided “as is”, and without warranties.

As always, the advice of a competent legal, tax, accounting or other professional should be sought. The author and publisher do not warrant the performance, effectiveness or applicability of any sites listed or linked to in this product.

All links are for information purposes only and are not warranted for content, accuracy or any other implied or explicit purpose.

Privacy
We maintain this page to demonstrate our firm commitment to the rights and privacy of our users. This page explains how our site collects information from our members.

Free Newsletter and mailing list: we respect the privacy of our users, and as such we will never share our database of email addresses and names with any third party.

Upon confirmation that you would like to join our newsletter, we will from time to time send you free information relating to the products we market, general advice related to online marketing, and promotional material for other products. Your email will never be passed onto any third party. We will also never spam you. You may unsubscribe from the mailing list at any time.

Personal Information we collect and how it is used: Service provider: when you purchase product, the payment is processed by product, who will collect your name, address, and credit card information so as to verify your order. They may not use the information for any other purpose. Upon ordering, we also collect your name and e-mail address. We use this information to follow-up on you as per the above newsletter section.

Further Reminder – Earnings Disclaimer:
Every effort has been made to accurately represent this product and its potential. Even though this industry is one of the few where one can write their own check in terms of earnings, there is no guarantee that you will earn any money using the techniques and ideas in these materials.

Examples in these materials are not to be taken as a promise or guarantee of earnings. Earning potential is entirely dependent on the person using our product, ideas, techniques and the effort put forth. We do not purport this as a “get rich scheme”, and nor should you view it as such.

Any and all forward looking statements here or on any of our sales material are intended to express our opinion of earnings potential. Many factors will be important in determining your actual results and no guarantees are made that you will achieve results similar to ours or anybody else’s, in fact no guarantees are made that you will achieve any results from our ideas and techniques.

Results vary, and as with any money-making opportunity, you could make more or less. Success in ANY money-making opportunity is a result of hard work, time and a variety of other factors. No express or implied guarantees of income are made by product.

Returns and refunds policy: as stated, if you purchase product, and you do not enjoy the financial freedom that you expected, do not make as much from our methods as you expected, or indeed for any reason, you may claim a refund for the product within 60 days of purchase. On a sidenote we do ask you to put the techniques into use before requesting a refund, for both our benefit: however, our refund policy is unconditional and this is a suggestion, not a requirement. We are aware that some buyers will not achieve their personal goals despite our best efforts to the contrary, and we stand by our refund policy as such. Please forward your receipt number (given to you when you ordered) to us and we will action your refund request as quickly as possible, typically within 24 hours.

Revisions to This Policy: Our company reserves the right to revise, amend, or modify this policy, our Terms Of Service agreement, and our other policies and agreements at any time and in any manner, by updating this posting.
Copyright © 2025 product | All Rights Reserved
`,
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

export default function DisclaimerPage() {
    const [language, setLanguage] = useState<"es" | "en">("es")
    const [platformNetBenefit, setPlatformNetBenefit] = useState(466837090)
    const [newUsersToday, setNewUsersToday] = useState(4000)

    useEffect(() => {
        const benefitInterval = setInterval(() => {
            setPlatformNetBenefit((prev) => prev + Math.floor(Math.random() * 1000) + 100)
        }, 5000)

        const usersInterval = setInterval(() => {
            setNewUsersToday((prev) => prev + Math.floor(Math.random() * 5) + 1)
        }, 10000)

        return () => {
            clearInterval(benefitInterval)
            clearInterval(usersInterval)
        }
    }, [])

    const t = translations[language]

    const handleLanguageChange = (newLanguage: string) => {
        setLanguage(newLanguage as "es" | "en")
    }

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

            {/* Main Content for Disclaimer */}
            <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 sm:py-12 text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 sm:mb-12 leading-tight text-center">
                    {t.footerDescargo}
                </h1>
                <div className="prose prose-invert max-w-none text-white/90 leading-relaxed space-y-6">
                    {t.disclaimerFullContent.split("\n\n").map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </div>

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
                                <a href="/#registration-form" className="hover:text-orange-300 transition-colors duration-200">
                                    {t.footerContactanos}
                                </a>
                            </li>
                            <li>
                                <a href="/privacy" className="hover:text-orange-300 transition-colors duration-200">
                                    {t.footerPrivacidad}
                                </a>
                            </li>
                            <li>
                                <a href="/terms" className="hover:text-orange-300 transition-colors duration-200">
                                    {t.footerTerminos}
                                </a>
                            </li>
                            <li>
                                <a href="/disclaimer" className="hover:text-orange-300 transition-colors duration-200">
                                    {t.footerDescargo}
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
            </footer>
        </div>
    )
}
