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
        dobPlaceholder: "Fecha de Nacimiento", // Nuevo placeholder
        registerButton: "Regístrame",
        searchCountry: "Buscar país...",
        termsText:
            "Al registrarte, aceptas y estás de acuerdo con los términos de uso y la Política de privacidad del sitio.",
        privacyText:
            "Tus datos siempre están protegidos con Coin Sin Limited. Al completar este formulario, aceptas recibir nuestros correos electrónicos de marketing. Puedes cambiar de opinión en cualquier momento haciendo clic en el enlace para darte de baja en la parte inferior de cualquiera de nuestros correos electrónicos.",
        registrationSuccessTitle: "¡Muchas Gracias por Registrarte!",
        noCountriesFound: "No se encontraron países",
        masterTradingTitle: "DOMINA EL TRADING DE CRIPTOMONEDAS CON NUESTRO",
        masterTradingHighlight: "SISTEMA DE INVERSION POR IA CON UNA PRESISION DEL 95.6%",
        ctaParagraph1:
            "Imagina una nueva vida en la que el trabajo se vuelva opcional, los ahorros ya no sean necesarios y todas tus facturas se paguen sin esfuerzo. Imagina la libertad de explorar, planificar un coche nuevo o incluso tener una casa.",
        ctaParagraph2:
            "Ahora imagínate mirando la pantalla de tu teléfono inteligente y siendo testigo de otra ganancia de 1,000€ sin esfuerzo hoy mismo. Suena atractivo, ¿verdad?",
        ctaParagraph3:
            "Coin Sin Limited lo hace posible. Como una plataforma de inicio impulsada por IA, empoderamos a los nuevos inversores para que se sumerjan en el mundo de las inversiones en criptomonedas, independientemente de su experiencia previa. By starting with an investment of just 250€, you can seize the opportunity to multiply your daily earnings by x5.",
        ctaParagraph4:
            "¿Listo para unirte a nosotros? ¡Sigue las instrucciones de esta página y emprende tu emocionante viaje hacia una vida estable y sin preocupaciones, llena de abundantes placeres!",
        startNowButton: "Empieza ahora",
        advantagesTitle:
            "VENTAJAS DE INVERTIR EN DIVISAS POPULARES E INFORMACIÓN ESENCIAL SOBRE LA PLATAFORMA COIN SIN LIMITED",
        advantagesIntro:
            "Invertir en divises digitales es una opción atractiva para los inversores. Las criptomonedas reúnen todas las características necesarias para ofrecer una liquidez estable. Dos factores clave determinan los beneficios de esta tipo de inversiones:",
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
            "Otro factor que hace atractiva la inversión en Canadá, Australia y otros países es la educación. Muchas personas sienten que un humano puede tomar decisiones influido por las emociones, una máquina permanece objetiva y racional. Es fundamental no olvidar las emociones. Separar la racionalidad de la emoción es crucial, especialmente en la esfera de la inversión, donde todo se decide basándose en datos puros y previsiones exactas.",
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
            "Invertir con herramientas basadas en inteligencia artificial hace que las inversiones sean asimilables en Canadá, Australia y otros países.",
        reason8: "El uso de la inteligencia artificial aumenta la velocidad de la toma de decisiones.",
        reason9:
            "La inteligencia artificial proporciona una toma de decisiones más rápida para realizar mejores acciones de inversión.",
        efficiencyGuarantee:
            "Así, la inteligencia artificial garantiza la rentabilidad de la inversión al asegurar una eficacia de los sistemas de al menos el 95%. La precisión depende del sistema específico, pero puede alcanzar para los humanos entre el 95% y el 99,4%. La eficiencia de nuestros instrumentos de negociación basados en algoritmos Coin Sin Limited es del 99,4%.",
        platformBenefitTitle: "COIN SIN LIMITED ES UNA PLATAFORMA QUE TRABAJA EN BENEFICIO DEL INVERSOR",
        platformBenefitText1:
            "Para los inversores novatos, invertir en criptomonedas puede resultar increíblemente complicado. A menudo, los principiantes necesitan comprender todos los entresijos de este ámbito para no perder sus pequeñas inversiones en el menor tiempo posible. Esto les lleva a perder el interés por las criptomonedas y por la inversión en general. Sin embargo, necesitan darse cuenta de las oportunidades potenciales que están perdiendo.",
        platformBenefitText2:
            "La plataforma Coin Sin Limited les permite hacer realidad sus sueños de ingresos pasivos estables. Basado en inteligencia artificial, este algoritmo trabaja continuamente, analizando la situación del mercado, estudiando las tendencias de las criptomonedas y realizando operaciones que casi siempre resultan rentables. Miles de personas en todo el mundo ya han generado miles de millones de euros con Coin Sin Limited.",
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
            "Los tiempos no son fáciles, y todo a nuestro alrededor va poco a poco hacia abajo. Aunque la situación puede mejorar en el futuro, todo el mundo debería ocuparse hoy de su futuro para no depender de factores externos. Las herramientas inteligentes pueden ayudarte con esto.",
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
        notScamText2:
            "Los usuarios tienen acceso a una cuenta de demostración virtual donde pueden evaluar las capacidades del sistema sin riesgo antes de invertir fondos reales. La protección del usuario es el requisito principal del proyecto. SSL certificates y el cifrado multicapa protegen de manera fiable todos los datos personales.",
        notScamTitle: "COIN SIN LIMITED NO ES UNA ESTAFA, Y ESTA ES LA RAZÓN",
        notScamText1:
            "Es un proyecto de inversión automatizado que ofrece la oportunidad de ganar dinero invirtiendo en criptomonedas populares y proyectos prometedores en el mundo de los activos digitales. El sistema está controlado por ingenieros informáticos y corredores registrados en CySEC. Los corredores autorizados llevan a cabo los procesos financieros en el sistema.",
        notScamText3:
            "Por seguridad, se recomienda cerrar la sesión después de cada uso y evitar conectarse al sistema desde redes públicas.",
        notScamText4:
            "Coin Sin Limited ofrece máximos beneficios y ganancias sin riesgo, y presenta pruebas de no fraude. También encontrará opiniones sobre Coin Sin Limited a continuación.",
        testimonialsTitle: "DESCUBRE LO QUE DICEN LOS MIEMBROS DE",
        testimonialsHighlight: "COIN SIN LIMITED",
        testimonialsTitle2: "SOBRE ESTA PLATAFORMA DE TRADING:",
        tradingEasyTitle: "TRADING CON COIN SIN LIMITED ES",
        tradingEasyHighlight: "¡100% FÁCIL Y CÓMODO!",
        tradingEasyIntro:
            "Al enviar el formulario a continuación con su información precisa en este sitio web, desbloqueará rápidamente el acceso ilimitado a nuestro sistema de trading de IA altamente confiable, dedicado e imparcial. Únase a los más de 2,500 inversores astutos que ya se están beneficiando de sus capacidades.",
        featureAiSelectionsTitle: "SELECCIONES DE INVERSIÓN EXCLUSIVAMENTE RENTABLES REALIZADAS POR IA",
        featureAiSelectionsText:
            "Atrás quedaron los días en que las inversiones estaban reservados para los ricos. Nuestro avanzado sistema informático analiza meticulosamente la liquidez, la volatilidad y el volumen de operaciones, lo que garantiza decisiones de inversión óptimas. Disfruta de ingresos constantes en tu cuenta a través de acciones de empresas de primer nivel, respaldadas por una impresionante garantía de precisión comercial del 99.4%.",
        featureAutoTradingTitle: "FUNCIONALIDAD DE COMERCIO AUTOMÁTICO IMPECABLE",
        featureAutoTradingText:
            "Experimenta la conveniencia de nuestra función de trading automático, que te permite generar ganancias sin esfuerzo, incluso cuando no estés en tu puesto de trabajo. ¡No se requiere experiencia comercial! Simplemente haz tu inversión inicial y observa cómo el saldo de tu cuenta crece constantemente.",
        featureSupportTitle: "SOPORTE INTEGRAL AL USUARIO",
        featureSupportText:
            "Como miembro valioso de Coin Sin Limited, nuestro amable gestor de atención al cliente está a tu disposición, listo para resolver cualquier pregunta o preocupación que puedas tener.",
        featureCommunityTitle: "ACCESO EXCLUSIVO A UNA COMUNIDAD ÚNICA",
        featureCommunityText:
            "Únete a nuestra prestigiosa comunidad Coin Sin Limited y obtén una membresía privilegiada. Considérate afortunado de haber encontrado la oportunidad de registrarte. Ten en cuenta que, debido a las limitaciones de capacidad del sistema, solo podemos enviar invitaciones a un número selecto de usuarios. Aprovecha esta oportunidad para resolver tus problemas financieros de una vez por todas.",
        createAccountButton: "¡Crea tu cuenta!",
        howToStartTitle: "CÓMO",
        howToStartHighlight: "EMPEZAR?",
        step1Title: "REGISTRO: COMPLETA EL FORMULARIO A CONTINUACIÓN",
        step1Description:
            "El formulario de registro está en esta página. Completa el formulario para convertirte en miembro. Una vez que tu registro sea aprobado, automáticamente te convertirás en un nuevo participante de Coin Sin Limited.",
        step2Title: "DEPOSITA €250 O MÁS",
        step2Description:
            "Como en cualquier negocio, necesitas capital inicial. La ventaja de la plataforma Coin Sin Limited es que solo requiere una inversión inicial modesta. Simplemente deposita 250€ o más para empezar a ganar dinero.",
        step3Title: "ESTATE ATENTO A TU TELÉFONO... ¡PODRÍAS RECIBIR UNA LLAMADA!",
        step3Description:
            "Después de hacer un pago, nuestro gestor se pondrá en contacto contigo para confirmar todo y activar tu cuenta. Si tienes alguna pregunta, el gestor te proporcionará respuestas detalladas para ayudarte. Ten en cuenta que la llamada puede provenir de un número no identificado.",
        faqTitle: "PREGUNTAS",
        faqHighlight: "FREQUENTES",
        finalSectionTitle: "APROVECHA LA OPORTUNIDAD DE CONVERTIRTE EN UN INVERSOR INTELIGENTE HOY Y...",
        finalSectionSubtitle: "...¡DESATA UN MUNDO DE POSIBILIDADES, CON UN MÍNIMO DE 1,000€ EN TU CUENTA CADA DÍA!",
        finalSectionText:
            "Actúa ahora proporcionando tu nombre completo y correo electrónico en el formulario a continuación, y desbloquea la oportunidad más excepcional y exclusiva para generar ingresos sustanciales sin esfuerzo. Deja que la IA se encargue del trabajo duro mientras tú obtienes beneficios tangibles al instante. ¡No te lo pierdas!",
        footerCompanyInfo:
            "Coin Sin Limited es una empresa especializada en proporcionar información y herramientas para la inversión y el comercio de criptomonedas, basadas en inteligencia artificial.",
        footerContactanos: "Contáctanos",
        footerPrivacidad: "Privacidad",
        footerTerminos: "Términos",
        footerDescargo: "Descargo de Responsabilidad",
        footerEmailLabel: "Email:",
        footerCopyright: "Todos los derechos reservados. Coin Sin Limited.",
        officialRegistrationNumber: "Número de registro oficial (CNMV) - 287",
        smallFormNamePlaceholder: "Tu nombre",
        smallFormSurnamePlaceholder: "Tu apellido",
        smallFormEmailPlaceholder: "Tu correo electrónico",
        smallFormPhonePlaceholder: "9 11 2345-6789",
        smallFormDobPlaceholder: "Fecha de Nacimiento", // Nuevo placeholder para el formulario pequeño
        smallFormRegisterButton: "Regístrame",
        smallFormTermsText:
            "Al registrarte, aceptas y estás de acuerdo con los términos de uso y la Política de privacidad del sitio.",
        smallFormPrivacyText:
            "Tus datos siempre están protegidos con Coin Sin Limited. Al completar este formulario, aceptas recibir nuestros correos electrónicos de marketing.",
        ageConfirmation: "Confirmo que soy mayor de edad.",
        disclaimerFull: `IMPORTANT: Exenciones de Responsabilidad de Ingresos y Legales. Los gráficos de ingresos y ganancias creados por Coin Sin Limited, también conocido como "Este Sitio Web", se utilizan únicamente como ilustraciones ideales de su potencial de ganancias. El éxito de las personas en testimonios y otros ejemplos son resultados excepcionales, y por lo tanto no tienen la intención de garantizar que usted u otros lograrán lo mismo. Los resultados individuales dependerán de cómo utilice Coin Sin Limited. Por lo que haga, este sitio web no tiene responsabilidad. Siempre debe actuar con precaución y diligencia debida porque asume la plena responsabilidad de sus acciones y decisiones al utilizar productos y servicios. Usted acepta que de ninguna manera este sitio web será responsable de los resultados de su uso de nuestros servicios. Consulte nuestros términos de uso para obtener información sobre nuestras exenciones de responsabilidad y otras restricciones. Si bien el trading puede generar beneficios notables, también conlleva el riesgo de perder el capital invertido en parte o en su totalidad, por lo que debe considerar si puede permitirse invertir. ©2025AVISO REGULATORIO DE EE. UU.: El trading de Forex, CFD y criptomonedas no está bajo ninguna regulación de EE. UU. La inversión en criptomonedas no está regulada ni supervisada por ninguna agencia financiera o de EE. UU. Cualquier trading no regulado por residentes de EE. UU. se considera ilegal. Este sitio web no acepta clientes ni ciudadanos de EE. UU. Este sitio web no tiene responsabilidad por las acciones de clientes ubicados en o con ciudadanía estadounidense. Los clientes ubicados dentro de los Estados Unidos o con ciudadanía estadounidense asumen la plena responsabilidad de sus acciones y decisiones al utilizar productos y servicios de este Sitio Web. En cualquier circunstancia, la elección de usar el Sitio Web, el Servicio y/o el Software es bajo la única responsabilidad del Usuario, quien debe cumplir con la legislación vigente.`,
        disclaimerFullContent: `IMPORTANTE: Exenciones de Responsabilidad de Ingresos y Legales. Se ha hecho todo lo posible para representar con precisión este producto y su potencial. Aunque esta industria es una de las pocas en las que uno puede escribir su propio cheque en términos de ganancias, no hay garantía de que gane dinero utilizando las técnicas e ideas de estos materiales. Los ejemplos en estos materiales no deben interpretarse como una promesa o garantía de ganancias. El potencial de ganancias depende completamente de la persona que utiliza nuestro producto, ideas y técnicas. No pretendemos que esto sea un "esquema para hacerse rico".Cualquier reclamo de ganancias reales o ejemplos de resultados reales puede verificarse previa solicitud. Su nivel de éxito en la obtención de los resultados reclamados en nuestros materiales depende del tiempo que dedique al programa, las ideas y técnicas mencionadas, sus finanzas, conocimientos y diversas habilidades. Dado que estos factores difieren según los individuos, no podemos garantizar su éxito o nivel de ingresos. Tampoco somos responsables de ninguna de sus acciones.Los materiales de nuestro producto y nuestro sitio web pueden contener información que incluye o se basa en declaraciones prospectivas en el sentido de la Ley de Reforma de Litigios de Valores de 1995. Las declaraciones prospectivas expresan nuestras expectativas o pronósticos de eventos futuros. Puede identificar estas declaraciones por el hecho de que no se relacionan estrictamente con hechos históricos o actuales. Utilizan palabras como "anticipar", "estimar", "esperar", "proyectar", "pretender", "planificar", "creer" y otras palabras y términos de significado similar en relación con una descripción de ganancias potenciales o rendimiento financiero.Todas y cada una de las declaraciones prospectivas aquí o en cualquiera de nuestros materiales de venta tienen la intención de expresar nuestra opinión sobre el potencial de ganancias. Muchos factores serán importantes para determinar sus resultados reales y no se garantiza que logrará resultados similares a los nuestros o a los de cualquier otra persona; de hecho, no se garantiza que logrará ningún resultado de nuestras ideas y técnicas en nuestro material.El autor y el editor renuncian a cualquier garantía (expresa o implícita), comerciabilidad o idoneidad para un propósito particular. El autor y el editor en ningún caso serán responsables ante ninguna parte por daños directos, indirectos, punitivos, especiales, incidentales u otros daños consecuentes que surjan directa o indirectamente del uso de este material, que se proporciona "tal cual" y sin garantías.Como siempre, se debe buscar el consejo de un profesional legal, fiscal, contable u otro profesional competente. El autor y el editor no garantizan el rendimiento, la eficacia o la aplicabilidad de ningún sitio listado o vinculado en este producto.Todos los enlaces son solo para fines informativos y no están garantizados en cuanto a contenido, precisión o cualquier otro propósito implícito o explícito.PrivacidadMantenemos esta página para demostrar nuestro firme compromiso con los derechos y la privacidad de nuestros usuarios. Esta página explica cómo nuestro sitio recopila información de nuestros miembros.Boletín gratuito y lista de correo: respetamos la privacidad de nuestros usuarios y, como tal, nunca compartiremos nuestra base de datos de direcciones de correo electrónico y nombres con terceros.Al confirmar que le gustaría unirse a nuestro boletín, de vez en cuando le enviaremos información gratuita relacionada con los productos que comercializamos, consejos generales relacionados con el marketing en línea y material promocional para otros productos. Su correo electrónico nunca se transmitirá a terceros. Tampoco le enviaremos spam. Puede darse de baja de la lista de correo en cualquier momento.Información personal que recopilamos y cómo se utiliza: Proveedor de servicios: cuando compra un producto, el pago es procesado por el producto, quien recopilará su nombre, dirección e información de tarjeta de crédito para verificar su pedido. No pueden usar la información para ningún otro propósito. Al realizar el pedido, también recopilamos su nombre y dirección de correo electrónico. Utilizamos esta información para hacer un seguimiento con usted según la sección de boletines anterior.Recordatorio adicional – Descargo de responsabilidad de ganancias:Se ha hecho todo lo posible para representar con precisión este producto y su potencial. Aunque esta industria es una de las pocas en las que uno puede escribir su propio cheque en términos de ganancias, no hay garantía de que gane dinero utilizando las técnicas e ideas de estos materiales.Los ejemplos en estos materiales no deben tomarse como una promesa o garantía de ganancias. El potencial de ganancias depende completamente de la persona que utiliza nuestro producto, ideas, técnicas y el esfuerzo realizado. No pretendemos que esto sea un "esquema para hacerse rico", y tampoco debe verlo como tal.Todas y cada una de las declaraciones prospectivas aquí o en cualquiera de nuestros materiales de venta tienen la intención de expresar nuestra opinión sobre el potencial de ganancias. Muchos factores serán importantes para determinar sus resultados reales y no se garantiza que logrará resultados similares a los nuestros o a los de cualquier otra persona; de hecho, no se garantiza que logrará ningún resultado de nuestras ideas y técnicas.Los resultados varían y, como ocurre con cualquier oportunidad de ganar dinero, podría ganar más o menos. El éxito en CUALQUIER oportunidad de ganar dinero es el resultado de un trabajo duro, tiempo y una variedad de otros factores. El producto no ofrece garantías expresas o implícitas de ingresos.Política de devoluciones y reembolsos: como se indicó, si compra un producto y no disfruta de la libertad financiera que esperaba, no gana tanto con nuestros métodos como esperaba, o por cualquier motivo, puede solicitar un reembolso del producto dentro de los 60 días posteriores a la compra. Como nota al margen, le pedimos que ponga en práctica las técnicas antes de solicitar un reembolso, para nuestro beneficio: sin embargo, nuestra política de reembolso es incondicional y esto es una sugerencia, no un requisito. Somos conscientes de que algunos compradores no lograrán sus objetivos personales a pesar de nuestros mejores esfuerzos, y mantenemos nuestra política de reembolso como tal. Envíenos su número de recibo (que se le dio cuando realizó el pedido) y procesaremos su solicitud de reembolso lo más rápido posible, generalmente dentro de las 24 horas.Revisiones de esta política: Nuestra empresa se reserva el derecho de revisar, enmendar o modificar esta política, nuestro acuerdo de Términos de servicio y nuestras otras políticas y acuerdos en cualquier momento y de cualquier manera, actualizando esta publicación.Copyright © 2025 producto | Todos los derechos reservados`,
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
        dobPlaceholder: "Date of Birth", // New placeholder
        registerButton: "Register me",
        searchCountry: "Search country...",
        termsText: "By registering, you accept and agree to the terms of use and the site's Privacy Policy.",
        privacyText:
            "Your data is always protected with Coin Sin Limited. By completing this form, you agree to receive our marketing emails. You can change your mind at any time by clicking the unsubscribe link at the bottom of any of our emails.",
        registrationSuccessTitle: "Thank You for Registering!",
        noCountriesFound: "No countries found",
        masterTradingTitle: "MASTER CRYPTOCURRENCY TRADING WITH OUR",
        masterTradingHighlight: "AI INVESTMENT SYSTEM WITH 95.6% ACCURACY",
        ctaParagraph1:
            "Imagine a new life where work becomes optional, savings are no longer necessary, and all your bills are paid effortlessly. Imagine the freedom to explore, plan for a new car, or even own a home.",
        ctaParagraph2:
            "Now imagine looking at your smartphone screen and witnessing another effortless €1,000 gain today. Sounds appealing, right?",
        ctaParagraph3:
            "Coin Sin Limited makes it possible. As an AI-powered startup platform, we empower new investors to dive into the world of cryptocurrency investments, regardless of their prior experience. By starting with an investment of just €250, you can seize the opportunity to multiply your daily earnings by x5.",
        ctaParagraph4:
            "Ready to join us? Follow the instructions on this page and embark on your exciting journey towards a stable, worry-free life, full of abundant pleasures!",
        startNowButton: "Start now",
        advantagesTitle:
            "ADVANTAGES OF INVESTING IN POPULAR CURRENCIES AND ESSENTIAL INFORMATION ABOUT THE COIN SIN LIMITED PLATFORM",
        advantagesIntro:
            "Investing in digital currencies is an attractive option for investors. Cryptocurrencies gather all the necessary characteristics to offer stable liquidity. Two key factors determine the benefits of this type of investment:",
        growthPotentialTitle: "Growth Potential:",
        growthPotentialText:
            "Some cryptocurrencies have already reached significant value, but many projects have great development potential. Due to their growing popularity, the cryptocurrency market attracts investors who can obtain high returns by investing in digital assets.",
        diversificationTitle: "Portfolio Diversification:",
        diversificationText:
            "Cryptocurrencies provide the opportunity to diversify your investment portfolio. They provide an alternative asset class that is independent of traditional financial markets. Investing in cryptocurrencies helps diversify risk and protect the portfolio from possible negative influences in one area.",
        focusOnPlatformTitle: "Let's now focus on the Coin Sin Limited platform.",
        focusOnPlatformText1:
            "Why is artificial intelligence (AI) fundamental to the investment market? AI is faster than the human brain and can analyze data accurately, provided the system is configured correctly. Machine learning has three significant advantages in the investment market.",
        focusOnPlatformText2:
            "Furthermore, artificial intelligence operates in the market 24/7 now. It means real-time global situation awareness, knowledge accumulation about patterns, and immediate creation of profitable strategies. The Coin Sin Limited platform offers an effective profitability achievable for humans. It is a matter of time until machines fully assume this function.",
        focusOnPlatformText3:
            "Another factor that makes investing in Canada, Australia, and other countries attractive is education. Many people feel that a human can make decisions influenced by emotions, a machine remains objective and rational. It is essential not to forget emotions. Segregating rationality from emotion is fundamental, but a realization in the investment sphere, where everything is decided based on pure data and exact forecasts.",
        focusOnPlatformText4:
            "Additionally, investing before earning income is significantly different. Before a person starts earning income, they spend a significant amount of money on testing, which has benefits, in addition to acquiring situational experience and investment awareness. In contrast, a machine handles this much faster and requires minimal outlay to maximize income.",
        nineReasonsIntro:
            "So, we have nine main reasons why using the Coin Sin Limited platform is beneficial, especially for beginner traders:",
        reason1:
            "Our trading tools process large amounts of data quickly and efficiently, allowing you to make accurate decisions.",
        reason2: "AI-based software provides advanced market analysis with accurate data and forecasts.",
        reason3: "Artificial intelligence adapts to current market conditions, suggesting the best investment strategies.",
        reason4: "Investing with an AI-based system is not affected by human errors and provides objective information.",
        reason5: "Investing using a machine is cheaper than making human decisions and generates more profits.",
        reason6: "Artificial intelligence requires less initial investment, which increases investment efficiency.",
        reason7: "Investing with AI-based tools makes investments affordable in Canada, Australia, and other countries.",
        reason8: "Using artificial intelligence increases the speed of decision-making.",
        reason9: "Artificial intelligence provides faster decision-making for better investment actions.",
        efficiencyGuarantee:
            "Thus, artificial intelligence guarantees investment profitability by ensuring system effectiveness of at least 95%. Accuracy depends on the specific system, but can reach between 95% and 99.4% for humans. The efficiency of our Coin Sin Limited algorithm-based trading instruments is 99.4%.",
        platformBenefitTitle: "COIN SIN LIMITED IS A PLATFORM THAT WORKS FOR THE INVESTOR'S BENEFIT",
        platformBenefitText1:
            "For novice investors, investing in cryptocurrencies can be incredibly complicated. Often, beginners need to understand all the ins and outs of this field so as not to lose their small investments in the shortest possible time. This leads to them losing interest in cryptocurrencies and in investing in general. However, they need to realize the potential opportunities they are missing.",
        platformBenefitText2:
            "The Coin Sin Limited platform allows them to make their dreams of stable passive income come true. Based on artificial intelligence, this algorithm works continuously, analyzing the market situation, studying cryptocurrency trends, and performing operations that almost always result in profits. Thousands of people around the world have already generated billions of euros with Coin Sin Limited.",
        platformFeaturesTitle: "The features of the Coin Sin Limited platform include:",
        feature1:
            "A deep understanding of the cryptocurrency market and trends in the world of digital assets that are beyond the reach of the human mind.",
        feature2:
            "The supercomputer can calculate millions of variations every second and predict trends with maximum accuracy.",
        feature3: "Secure operations with benefits for the investor.",
        platformUnnoticedText:
            "The Coin Sin Limited platform went unnoticed at the time of product launch. However, it is causing anger and panic among central banks and governments around the world. While big players try to stop the Coin Sin Limited platform project, you can start earning big money now.",
        investSmartTitle: "INVEST IN CRIPTOCURRENCIES SMARTLY WITH THE COIN SIN LIMITED PLATFORM",
        investSmartText1:
            "Times are not easy, and everything around us is slowly going down. Although the situation may improve in the future, everyone should take care of their future today so as not to depend on external factors. Smart tools can help you with this.",
        investSmartText2:
            "The Coin Sin Limited investment platform allows you to do so without wasting time studying the digital currency market. You can start investing today in countries like Canada, Australia, and others. Success is pre-calculated, and all you need is the desire to join.",
        algorithmToolsIntro: "The algorithm provides you with the tools to help you:",
        tool1: "Avoid unnecessary risks and losses.",
        tool2: "Obtain almost totally passive income.",
        tool3: "Work in the market with broad portfolio diversification and parallel risk reduction.",
        tool4: "Receive stable income both short and long term.",
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
        notScamText2:
            "Users have access to a virtual demo account where they can risk-free evaluate the system's capabilities before investing real funds. User protection is the main requirement of the project. SSL certificates and multi-layer encryption reliably protect all personal data.",
        notScamTitle: "COIN SIN LIMITED IS NOT A SCAM, AND HERE'S WHY",
        notScamText1:
            "It is an automated investment project that offers the opportunity to earn money by investing in popular cryptocurrencies and promising projects in the world of digital assets. The system is controlled by computer engineers and brokers registered with CySEC. Authorized brokers carry out the financial processes in the system.",
        notScamText3:
            "For security, it is recommended to log out after each use and avoid connecting to the system from public networks.",
        notScamText4:
            "Coin Sin Limited offers maximum benefits and risk-free earnings, and presents proof of non-fraud. You will also find opinions about Coin Sin Limited below.",
        testimonialsTitle: "DISCOVER WHAT MEMBERS OF",
        testimonialsHighlight: "COIN SIN LIMITED",
        testimonialsTitle2: "SAY ABOUT THIS TRADING PLATFORM:",
        tradingEasyTitle: "TRADING WITH COIN SIN LIMITED IS",
        tradingEasyHighlight: "100% EASY AND COMFORTABLE!",
        tradingEasyIntro:
            "By submitting the form below with your accurate information on this website, you will quickly unlock unrestricted access to our highly reliable, dedicated, and unbiased AI trading system. Join the more than 2,500 astute investors who are already benefiting from its capabilities.",
        featureAiSelectionsTitle: "EXCLUSIVELY PROFITABLE INVESTMENT SELECTIONS MADE BY AI",
        featureAiSelectionsText:
            "Gone are the days when investments were reserved for the rich. Our advanced computer system meticulously analyzes liquidity, volatility, and trading volume, which ensures optimal investment decisions. Enjoy consistent income in your account through top-tier company shares, backed by an impressive 99.4% trading accuracy guarantee.",
        featureAutoTradingTitle: "IMPECCABLE AUTOMATIC TRADING FUNCTIONALITY",
        featureAutoTradingText:
            "Experience the convenience of our automatic trading feature, which allows you to effortlessly generate profits, even when you are not at your workstation. No trading experience required! Simply make your initial investment and watch your account balance grow steadily.",
        featureSupportTitle: "COMPREHENSIVE USER SUPPORT",
        featureSupportText:
            "As a valuable member of Coin Sin Limited, our friendly customer service manager is at your disposal, ready to address any questions or concerns you may have.",
        featureCommunityTitle: "EXCLUSIVE ACCESS TO A UNIQUE COMMUNITY",
        featureCommunityText:
            "Join our prestigious Coin Sin Limited community and gain privileged membership. Consider yourself lucky to have found the opportunity to register. Please note that, due to system capacity limitations, we can only send invitations to a select number of users. Take advantage of this opportunity to solve your financial problems once and for all.",
        createAccountButton: "Create your account!",
        howToStartTitle: "HOW TO",
        howToStartHighlight: "START?",
        step1Title: "REGISTRATION: COMPLETE THE FORM BELOW",
        step1Description:
            "The registration form is on this page. Complete the form to become a member. Once your registration is approved, you will automatically become a new Coin Sin Limited participant.",
        step2Title: "DEPOSIT €250 OR MORE",
        step2Description:
            "As in any business, you need initial capital. The advantage of the Coin Sin Limited platform is that it only requires a modest initial investment. Simply deposit €250 or more to start earning money.",
        step3Title: "STAY TUNED TO YOUR PHONE... YOU MIGHT RECEIVE A CALL!",
        step3Description:
            "After making a payment, our manager will contact you to confirm everything and activate your account. If you have any questions, the manager will provide detailed answers to help you. Please note that the call may come from an unidentified number.",
        faqTitle: "FREQUENTLY",
        faqHighlight: "ASKED QUESTIONS",
        finalSectionTitle: "SEIZE THE OPPORTUNITY TO BECOME A SMART INVESTOR TODAY AND...",
        finalSectionSubtitle: "...UNLEASH A WORLD OF POSSIBILITIES, WITH A MINIMUM OF €1,000 IN YOUR ACCOUNT EVERY DAY!",
        finalSectionText:
            "Take action now by providing your full name and email in the form below, and unlock the most exceptional and exclusive opportunity to generate substantial income effortlessly. Let AI handle the hard work while you reap tangible benefits instantly. Don't miss out!",
        footerCompanyInfo:
            "Coin Sin Limited is a company specializing in providing information and tools for cryptocurrency investment and trading, based on artificial intelligence.",
        footerContactanos: "Contact Us",
        footerPrivacidad: "Privacy",
        footerTerminos: "Terms",
        footerDescargo: "Disclaimer",
        footerEmailLabel: "Email:",
        footerCopyright: "All rights reserved. Coin Sin Limited.",
        officialRegistrationNumber: "Official Registration Number (CNMV) - 287",
        smallFormNamePlaceholder: "Your name",
        smallFormSurnamePlaceholder: "Your surname",
        smallFormEmailPlaceholder: "Your email",
        smallFormPhonePlaceholder: "9 11 2345-6789",
        smallFormDobPlaceholder: "Date of Birth", // New placeholder for small form
        smallFormRegisterButton: "Register Me",
        smallFormTermsText: "By registering, you accept and agree to the site's terms of use and Privacy Policy.",
        smallFormPrivacyText:
            "Your data is always protected with Coin Sin Limited. By completing this form, you agree to receive our marketing emails.",
        ageConfirmation: "I confirm that I am of legal age.",
        disclaimerFull: `IMPORTANT: Income and Legal Disclaimers. The income and earnings graphs created by Coin Sin Limited, also known as "This Website", are used solely as ideal illustrations of your earning potential. The success of individuals in testimonials and other examples are exceptional results, and therefore are not intended to guarantee that you or others will achieve the same. Individual results will depend on how you use Coin Sin Limited. For whatever you do, this website has no responsibility. You should always act with caution and due diligence because you assume full responsibility for your actions and decisions when using products and services from this Website. In any and all circumstances, the choice to use the Website, the Service and/or the Software is under the sole responsibility of the User, who must comply with current legislation.`,
        disclaimerFullContent: `IMPORTANT: Income and Legal Disclaimers. Every effort has been made to accurately represent this product and its potential. Even though this industry is one of the few where one can write their own check in terms of earnings, there is no guarantee that you will earn any money using the techniques and ideas in these materials. Examples in these materials are not to be interpreted as a promise or guarantee of earnings. Earning potential is entirely dependent on the person using our product, ideas and techniques. We do not purport this as a “get rich scheme.”Any claims made of actual earnings or examples of actual results can be verified upon request. Your level of success in attaining the results claimed in our materials depends on the time you devote to the program, ideas and techniques mentioned, your finances, knowledge and various skills. Since these factors differ according to individuals, we cannot guarantee your success or income level. Nor are we responsible for any of your actions.Materials in our product and our website may contain information that includes or is based upon forward-looking statements within the meaning of the Securities Litigation Reform Act of 1995. Forward-looking statements give our expectations or forecasts of future events. You can identify these statements by the fact that they do not relate strictly to historical or current facts. They use words such as “anticipate,” “estimate,” “expect,” “project,” “intend,” “plan,” “believe,” and other words and terms of similar meaning in connection with a description of potential earnings or financial performance.Any and all forward looking statements here or on any of our sales material are intended to express our opinion of earnings potential. Many factors will be important in determining your actual results and no guarantees are made that you will achieve results similar to ours or anybody else’s, in fact no guarantees are made that you will achieve any results from our ideas and techniques in our material.The author and publisher disclaim any warranties (express or implied), merchantability, or fitness for any particular purpose. The author and publisher shall in no event be held liable to any party for any direct, indirect, punitive, special, incidental or other consequential damages arising directly or indirectly from any use of this material, which is provided “as is”, and without warranties.As always, the advice of a competent legal, tax, accounting or other professional should be sought. The author and publisher do not warrant the performance, effectiveness or applicability of any sites listed or linked to in this product.All links are for information purposes only and are not warranted for content, accuracy or any other implied or explicit purpose.PrivacyWe maintain this page to demonstrate our firm commitment to the rights and privacy of our users. This page explains how our site collects information from our members.Free Newsletter and mailing list: we respect the privacy of our users, and as such we will never share our database of email addresses and names with any third party.Upon confirmation that you would like to join our newsletter, we will from time to time send you free information relating to the products we market, general advice related to online marketing, and promotional material for other products. Your email will never be passed onto any third party. We will also never spam you. You may unsubscribe from the mailing list at any time.Personal Information we collect and how it is used: Service provider: when you purchase product, the payment is processed by product, who will collect your name, address, and credit card information so as to verify your order. They may not use the information for any other purpose. Upon ordering, we also collect your name and e-mail address. We use this information to follow-up on you as per the above newsletter section.Further Reminder – Earnings Disclaimer:Every effort has been made to accurately represent this product and its potential. Even though this industry is one of the few where one can write their own check in terms of earnings, there is no guarantee that you will earn any money using the techniques and ideas in these materials.Examples in these materials are not to be taken as a promise or guarantee of earnings. Earning potential is entirely dependent on the person using our product, ideas, techniques and the effort put forth. We do not purport this as a “get rich scheme”, and nor should you view it as such.Any and all forward looking statements here or on any of our sales material are intended to express our opinion of earnings potential. Many factors will be important in determining your actual results and no guarantees are made that you will achieve results similar to ours or anybody else’s, in fact no guarantees are made that you will achieve any results from our ideas and techniques.Results vary, and as with any money-making opportunity, you could make more or less. Success in ANY money-making opportunity is a result of hard work, time and a variety of other factors. No express or implied guarantees of income are made by product.Returns and refunds policy: as stated, if you purchase product, and you do not enjoy the financial freedom that you expected, do not make as much from our methods as you expected, or indeed for any reason, you may claim a refund for the product within 60 days of purchase. On a sidenote we do ask you to put the techniques into use before requesting a refund, for both our benefit: however, our refund policy is unconditional and this is a suggestion, not a requirement. We are aware that some buyers will not achieve their personal goals despite our best efforts to the contrary, and we stand by our refund policy as such. Please forward your receipt number (given to you when you ordered) to us and we will action your refund request as quickly as possible, typically within 24 hours.Revisions to This Policy: Our company reserves the right to revise, amend, or modify this policy, our Terms Of Service agreement, and our other policies and agreements at any time and in any manner, by updating this posting.Copyright © 2025 product | All Rights Reserved`,
    },
    ca: {
        // Catalan translations (copied from Spanish for now)
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
        dobPlaceholder: "Data de Naixement",
        registerButton: "Registra'm",
        searchCountry: "Cercar país...",
        termsText: "En registrar-te, acceptes i estàs d'acord amb els termes d'ús i la Política de privadesa del lloc.",
        privacyText:
            "Les teves dades sempre estan protegides amb Coin Sin Limited. En completar aquest formulari, acceptes rebre els nostres correus electrònics de màrqueting. Pots canviar d'opinió en qualsevol moment fent clic a l'enllaç per donar-te de baixa a la part inferior de qualsevol dels nostres correus electrònics.",
        registrationSuccessTitle: "Moltes Gràcies per Registrar-te!",
        noCountriesFound: "No s'han trobat països",
        masterTradingTitle: "DOMINA EL TRADING DE CRIPTOMONEDES AMB EL NOSTRE",
        masterTradingHighlight: "SISTEMA D'INVERSIÓ PER IA AMB UNA PRECISIÓ DEL 95.6%",
        ctaParagraph1:
            "Imagina una nova vida en la qual la feina esdevingui opcional, els estalvis ja no siguin necessaris i totes les teves factures es paguin sense esforç. Imagina la llibertat d'explorar, planificar un cotxe nou o fins i tot tenir una casa.",
        ctaParagraph2:
            "Ara imagina't mirant la pantalla del teu telèfon intel·ligent i sent testimoni d'un altre guany de 1.000€ sense esforç avui mateix. Sona atractiu, oi?",
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
            "La plataforma Coin Sin Limited els permet fer realitat els seus somnis d'ingressos passius estables. Basat en intel·ligència artificial, aquest algoritme treballa contínuament, analitzant la situació del mercat, estudiant les tendències de les criptomonedes i realitzant operacions que gairebé sempre resulten rendibles. Milers de persones a tot el món ja han generat milers de milions d'euros amb Coin Sin Limited.",
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
        notScamText2:
            "Els usuaris tenen accés a un compte de demostració virtual on poden avaluar les capacitats del sistema sense risc abans d'invertir fons reals. La protecció de l'usuari és el requisit principal del projecte. SSL certificates i el xifratge multicapa protegeixen de manera fiable totes les dades personals.",
        notScamTitle: "COIN SIN LIMITED NO ÉS UNA ESTAFA, I AQUESTA ÉS LA RAÓ",
        notScamText1:
            "És un projecte d'inversió automatitzat que ofereix l'oportunitat de guanyar diners invertint en criptomonedes populars i projectes prometedors en el món dels actius digitals. El sistema està controlat per enginyers informàtics i corredors registrats a CySEC. Els corredors autoritzats realitzen els processos financers del sistema.",
        notScamText3:
            "Per seguretat, es recomana tancar la sessió després de cada ús i evitar connectar-se al sistema des de xarxes públiques.",
        notScamText4:
            "Coin Sin Limited ofereix màxims beneficis i guanys sense risc, i presenta proves de no fraud. També trobaràs opinions sobre Coin Sin Limited a continuació.",
        testimonialsTitle: "DESCOBREIX EL QUE DIUEN ELS MEMBRES DE",
        testimonialsHighlight: "COIN SIN LIMITED",
        testimonialsTitle2: "DIUEN SOBRE AQUESTA PLATAFORMA DE TRADING:",
        tradingEasyTitle: "TRADING AMB COIN SIN LIMITED ÉS",
        tradingEasyHighlight: "100% FÀCIL I CÒMODE!",
        tradingEasyIntro:
            "En enviar el formulari següent amb la teva informació precisa en aquest lloc web, desbloquejaràs ràpidament l'accés il·limitat al nostre sistema de trading d'IA altament fiable, dedicat i imparcial. Uneix-te als més de 2.500 inversors astuts que ja s'estan beneficiant de les seves capacitats.",
        featureAiSelectionsTitle: "SELECCIONS D'INVERSIÓ EXCLUSIVAMENT RENDIBLES REALITZADES PER IA",
        featureAiSelectionsText:
            "Enrere van quedar els dies en què les inversions estaven reservades per als rics. El nostre avançat sistema informàtic analitza meticulosament la liquiditat, la volatilitat i el volum d'operacions, la qual cosa garanteix decisions d'inversió òptimes. Gaudeix d'ingressos constants al teu compte a través d'accions d'empreses de primer nivell, recolzades per una impressionant garantia de precisió comercial del 99.4%.",
        featureAutoTradingTitle: "FUNCIONALITAT DE COMERÇ AUTOMÀTIC IMPECABLE",
        featureAutoTradingText:
            "Experimenta la conveniència de la nostra funció de trading automàtic, que et permet generar guanys sense esforç, fins i tot quan no estiguis al teu lloc de treball. No es requereix experiència comercial! Simplement fes la teva inversió inicial i observa com el saldo del teu compte creix constantment.",
        featureSupportTitle: "SUPORT INTEGRAL A L'USUARI",
        featureSupportText:
            "Com a membre valuós de Coin Sin Limited, el nostre amable gestor d'atenció al client està a la teva disposició, preparat per resoldre qualsevol pregunta o preocupació que puguis tenir.",
        featureCommunityTitle: "ACCÉS EXCLUSIU A UNA COMUNITAT ÚNICA",
        featureCommunityText:
            "Uneix-te a la nostra prestigiosa comunitat Coin Sin Limited i obtén una membresia privilegiada. Considera't afortunat d'haver trobat l'oportunitat de registrar-te. Tingues en compte que, a causa de les limitacions de capacitat del sistema, només podem enviar invitacions a un número selecte de usuaris. Aprofita aquesta oportunitat per resoldre els teus problemes financers d'una vegada per totes.",
        createAccountButton: "Crea el teu compte!",
        howToStartTitle: "COM",
        howToStartHighlight: "COMENÇAR?",
        step1Title: "REGISTRE: COMPLETA EL FORMULARI A CONTINUACIÓ",
        step1Description:
            "El formulari de registre està en aquesta pàgina. Completa el formulari per convertir-te en membre. Una vegada que el teu registre sigui aprovat, automàticament et convertiràs en un nou participant de Coin Sin Limited.",
        step2Title: "DEPOSITA €250 O MÉS",
        step2Description:
            "Com en qualsevol negoci, necessites capital inicial. L'avantatge de la plataforma Coin Sin Limited és que només requereix una inversió inicial modesta. Simplement diposita 250€ o més per començar a guanyar diners.",
        step3Title: "ESTIGUES ATENT AL TU TELÈFON... PODRIES REBRE UNA TRUCADA!",
        step3Description:
            "Després de fer un pagament, el nostre gestor es posarà en contacte amb tu per confirmar-ho tot i activar el teu compte. Si tens alguna pregunta, el gestor et proporcionarà respostes detallades per ajudar-te. Tingues en compte que la trucada pot provenir d'un número no identificat.",
        faqTitle: "PREGUNTES",
        faqHighlight: "FREQUENTS",
        finalSectionTitle: "APROFITA L'OPORTUNITAT DE CONVERTIR-TE EN UN INVERSOR INTEL·LIGENT AVUI I...",
        finalSectionSubtitle: "...DESFERMA UN MÓN DE POSSIBILITATS, AMB UN MÍNIM DE 1.000€ AL TU COMPTE CADA DIA!",
        finalSectionText:
            "Actua ara proporcionant el teu nom complet i correu electrònic al formulari a continuació, i desbloqueja l'oportunitat més excepcional i exclusiva per generar ingressos substancials sense esforç. Deixa que la IA s'encarregui de la feina dura mentre tu obtens beneficis tangibles a l'instant. No t'ho perdis!",
        footerCompanyInfo:
            "Coin Sin Limited és una empresa especialitzada en proporcionar informació i eines per a la inversió i el comerç de criptomonedes, basades en intel·ligència artificial.",
        footerContactanos: "Contacta'ns",
        footerPrivacidad: "Privadesa", // Corrected key name
        footerTerminos: "Termes",
        footerDescargo: "Exempció de Responsabilitat",
        footerEmailLabel: "Correu electrònic:",
        footerCopyright: "Tots els drets reservats. Coin Sin Limited.",
        officialRegistrationNumber: "Número de registre oficial (CNMV) - 287",
        smallFormNamePlaceholder: "El teu nom",
        smallFormSurnamePlaceholder: "El teu cognom",
        smallFormEmailPlaceholder: "El teu correu electrònic",
        smallFormPhonePlaceholder: "9 11 2345-6789",
        smallFormDobPlaceholder: "Data de Naixement",
        smallFormRegisterButton: "Registra'm",
        smallFormTermsText:
            "En registrar-te, acceptes i estàs d'acord amb els termes d'ús i la Política de privadesa del lloc.",
        smallFormPrivacyText:
            "Les teves dades sempre estan protegides amb Coin Sin Limited. En completar aquest formulari, acceptes rebre els nostres correus electrònics de màrqueting.",
        ageConfirmation: "Confirmo que sóc major d'edat.",
        disclaimerFull: `IMPORTANT: Exempcions de Responsabilitat d'Ingressos i Legals. Els gràfics d'ingressos i guanys creats per Coin Sin Limited, també conegut com "Aquest Lloc Web", s'utilitzen únicament com a il·lustracions ideals del seu potencial de guanys. L'èxit de les persones en testimonis i altres exemples són resultats excepcionals, i per tant no tenen la intenció de garantir que vostè o altres aconseguiran el mateix. Els resultats individuals dependran de com utilitzi Coin Sin Limited. Per la qual cosa faci, aquest lloc web no té responsabilitat. Sempre ha d'actuar amb precaució i diligència deguda perquè assumeix la plena responsabilitat de les seves accions i decisions en utilitzar productes i serveis. Vostè accepta que de cap manera aquest lloc web serà responsable dels resultats del seu ús dels nostres serveis. Consulteu els nostres termes d'ús per obtenir informació sobre les nostres exempcions de responsabilitat i altres restriccions. Si bé el trading pot generar beneficis notables, també comporta el risc de perdre el capital invertit en part o en la seva totalitat, per la qual qual ha de considerar si pot permetre's invertir. ©2025AVÍS REGULATORI DELS EUA: El trading de Forex, CFD i criptomonedes no està sota cap regulació dels EUA. La inversió en criptomonedes no està regulada ni supervisada per cap agència financera o dels EUA. Qualsevol trading no regulat per residents dels EUA es considera il·legal. Aquest lloc web no accepta clients ni ciutadans dels EUA. Aquest lloc web no té responsabilitat per les accions de clients ubicats o amb ciutadania nord-americana. Els clients ubicats dins dels Estats Units o amb ciutadania nord-americana assumeixen la plena responsabilitat de les seves accions i decisions en utilitzar productes i serveis d'aquest Lloc Web. En qualsevol circumstància, la elecció d'utilitzar el Lloc Web, el Servei i/o el Programari és sota la sola responsabilitat de l'Usuari, que ha de complir amb la legislació vigent.`,
        disclaimerFullContent: `IMPORTANT: Exempcions de Responsabilitat d'Ingressos i Legals. S'ha fet tot el possible per representar amb precisió aquest producte i el seu potencial. Encara que aquesta indústria és una de les poques en les quals un pot escriure el seu propi xec en termes de guanys, no hi ha garantia que guanyarà diners utilitzant les tècniques i idees d'aquests materials. Els exemples en aquests materials no s'han d'interpretar com una promesa o garantia de guanys. El potencial de guanys depèn completament de la persona que utilitza el nostre producte, idees i tècniques. No pretenem que això sigui un "esquema per fer-se ric".Qualsevol reclamació de guanys reals o exemples de resultats reals es pot verificar prèvia sol·licitud. El seu nivell d'èxit en l'obtenció dels resultats reclamats en els nostres materials depèn del temps que dediqui al programa, les idees i tècniques esmentades, les seves finances, coneixements i diverses habilitats. Atès que aquests factors difereixen segons els individus, no podem garantir el seu èxit o nivell d'ingressos. Tampoc som responsables de cap de les seves accions.Els materials del nostre producte i el nostre lloc web poden contenir informació que inclou o es basa en declaracions prospectives en el sentit de la Llei de Reforma de Litigis de Valors de 1995. Les declaracions prospectives expressen les nostres expectatives o pronòstics d'esdeveniments futurs. Pot identificar aquestes declaracions pel fet que no es relacionen estrictament amb fets històrics o actuals. Utilitzen paraules com "anticipar", "estimar", "esperar", "projectar", "pretendre", "planificar", "creure" i altres paraules i termes de significat similar en relació amb una descripció de guanys potencials o rendiment financer.Totes i cadascuna de les declaracions prospectives aquí o en qualsevol dels nostres materials de venda tenen la intenció d'expressar la nostra opinió sobre el potencial de guanys. Molts factors seran importants per determinar els seus resultats reals i no es garanteix que aconseguirà resultats similars als nostres o als de qualsevol altra persona; de fet, no es garanteix que aconseguirà cap resultat de les nostres idees i tècniques en el nostre material.L'autor i l'editor renuncien a qualsevol garantia (expressa o implícita), comerciabilitat o idoneïtat per a un propòsit particular. L'autor i l'editor en cap cas seran responsables davant de cap part per danys directes, indirectes, punitius, especials, incidentals o altres danys conseqüents que sorgeixin directa o indirectament de l'ús d'aquest material, que es proporciona "tal qual" i sense garanties.Com sempre, s'ha de buscar el consell d'un professional legal, fiscal, comptable o altre professional competent. L'autor i l'editor no garanteixen el rendiment, l'eficàcia o l'aplicabilitat de cap lloc llistat o vinculat en aquest producte.Tots els enllaços són només per a finalitats informatives i no estan garantits quant a contingut, precisió o qualsevol altre propòsit implícit o explícit.PrivadesaMantenim aquesta pàgina per demostrar el nostre ferm compromís amb els drets i la privadesa dels nostres usuaris. Aquesta pàgina explica com el nostre lloc recopila informació dels nostres membres.Butlletí gratuït i llista de correu: respectem la privadesa dels nostres usuaris i, com a tal, mai compartirem la nostra base de dades d'adreces de correu electrònic i noms amb tercers.En confirmar que li agradaria unir-se al nostre butlletí, de tant en tant li enviarem informació gratuïta relacionada amb els productes que comercialitzem, consells generals relacionats amb el màrqueting en línia i material promocional per a altres productes. El seu correu electrònic mai es transmetrà a tercers. Tampoc li enviarem spam. Pot donar-se de baixa de la llista de correu en qualsevol moment.Informació personal que recopilem i com s'utilitza: Proveïdor de serveis: quan compra un producte, el pagament és processat pel producte, qui recopilarà el seu nom, adreça i informació de targeta de crèdit per verificar la seva comanda. No poden utilitzar la informació per a cap altre propòsit. En realitzar la comanda, també recopilem el seu nom i adreça de correu electrònic. Utilitzem aquesta informació per fer un seguiment amb vostè segons la secció de butlletins anterior.Recordatori addicional – Exempció de responsabilitat de guanys:S'ha fet tot el possible per representar amb precisió aquest producte i el seu potencial. Encara que aquesta indústria és una de les poques en les quals un pot escriure el seu propi xec en termes de guanys, no hi ha garantia que guanyarà diners utilitzant les tècniques i idees d'aquests materials.Els exemples en aquests materials no s'han de prendre com una promesa o garantia de guanys. El potencial de guanys depèn completament de la persona que utilitza el nostre producte, idees, tècniques i l'esforç realitzat. No pretenem que això sigui un "esquema per fer-se ric", i tampoc ha de veure-ho com a tal.Totes i cadascuna de les declaracions prospectives aquí o en qualsevol dels nostres materials de venda tenen la intenció d'expressar la nostra opinió sobre el potencial de guanys. Molts factors seran importants per determinar els seus resultats reals i no es garanteix que aconseguirà resultats similars als nostres o als de qualsevol altra persona; de fet, no es garanteix que aconseguirà cap resultat de les nostres idees i tècniques.Els resultats varien i, com passa amb qualsevol oportunitat de guanyar diners, podria guanyar més o menys. L'èxit en QUALSEVOL oportunitat de guanyar diners és el resultat d'un treball dur, temps i una varietat d'altres factors. El producte no ofereix garanties expresses o implícites d'ingressos.Política de devolucions i reemborsaments: com s'ha indicat, si compra un producte i no gaudeix de la llibertat financera que esperava, no guanya tant amb els nostres mètodes com esperava, o de fet per qualsevol motiu, pot sol·licitar un reemborsament del producte dins dels 60 dies posteriors a la compra. Com a nota al marge, li demanem que posi en pràctica les tècniques abans de sol·licitar un reemborsament, per al nostre benefici: no obstant això, la nostra política de reemborsament és incondicional i això és un suggeriment, no un requisit. Som conscients que alguns compradors no aconseguiran els seus objectius personals malgrat els nostres millors esforços en contra, i mantenim la nostra política de reemborsament com a tal. Envieu-nos el seu número de rebut (que se li va donar quan va fer la comanda) i processarem la seva sol·licitud de reemborsament el més ràpid possible, generalment dins de les 24 hores.Revisions d'aquesta política: La nostra empresa es reserva el dret de revisar, esmenar o modificar aquesta política, el nostre acord de Termes de servei i les nostres altres polítiques i acords en qualsevol moment i de qualsevol manera, actualitzant aquesta publicació.Copyright © 2025 product | Tots els drets reservats`,
    },
    it: {
        // Italian translations (copied from Spanish for now)
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
        dobPlaceholder: "Data di Nascita",
        registerButton: "Registrami",
        searchCountry: "Cerca paese...",
        termsText: "Registrandoti, accetti e sei d'accordo con i termini d'uso e la Politica sulla privacy del sito.",
        privacyText:
            "I tuoi dati sono sempre protetti con Coin Sin Limited. Completando questo modulo, accetti di ricevere le nostre email di marketing. Puoi cambiare idea in qualsiasi momento cliccando sul link di disiscrizione in fondo a qualsiasi nostra email.",
        registrationSuccessTitle: "Grazie per la Registrazione!",
        noCountriesFound: "Nessun paese trovato",
        masterTradingTitle: "PADRONEGGIA IL TRADING DI CRIPTOVALUTE CON IL NOSTRO",
        masterTradingHighlight: "SISTEMA DI INVESTIMENTO AI CON UNA PRECISIONE DEL 95.6%",
        ctaParagraph1:
            "Immagina una nuova vita in cui il lavoro diventa facoltativo, i risparmi non sono più necessari e tutte le tue bollette sono pagate senza sforzo. Immagina la libertà di esplorare, pianificare una nuova auto o persino possedere una casa.",
        ctaParagraph2:
            "Ora immagina di guardare lo schermo del tuo smartphone e di assistere a un altro guadagno di 1.000€ senza sforzo oggi stesso. Sembra allettante, vero?",
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
            "La piattaforma Coin Sin Limited consente loro di realizzare i loro sogni di reddito passivo stabile. Basato sull'intelligenza artificiale, questo algoritmo lavora continuamente, analizzando la situazione del mercato, studiando le tendenze delle criptovalute ed eseguendo operazioni che quasi sempre si traducono in profitti. Migliaia di persone in tutto il mondo hanno già generato miliardi di euro con Coin Sin Limited.",
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
        notScamText2:
            "Gli utenti hanno accesso a un account demo virtuale dove possono valutare le capacità del sistema senza rischi prima di investire fondi reali. La protezione dell'utente è il requisito principale del progetto. SSL certificates e la crittografia multilivello proteggono in modo affidabile tutti i dati personali.",
        notScamTitle: "COIN SIN LIMITED NON È UNA TRUFFA, ED ECCO PERCHÉ",
        notScamText1:
            "È un progetto di investimento automatizzato che offre l'opportunità di guadagnare denaro investendo in criptovalute popolari e progetti promettenti nel mondo degli asset digitali. Il sistema è controllato da ingegneri informatici e broker registrati presso CySEC. I broker autorizzati eseguono i processi finanziari nel sistema.",
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
            "Sono finiti i giorni in cui gli investimenti erano riservati per i ricchi. Il nostro avanzato sistema informatico analizza meticolosamente liquidità, volatilità e volume di trading, il che garantisce decisioni di investimento ottimali. Goditi un reddito costante sul tuo conto tramite azioni de aziende di prim'ordine, supportate da un'impressionante garanzia di precisione di trading del 99.4%.",
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
        finalSectionSubtitle: "...SCATENA UN MONDO DI POSSIBILITÀ, CON UN MÍNIMO DI 1.000€ SUL TUO CONTO OGNI GIORNO!",
        finalSectionText:
            "Agisci ora fornendo il tuo nome completo e la tua email nel modulo sottostante, e sblocca l'opportunità più eccezionale ed esclusiva per generare un reddito sostanziale senza sforzo. Lascia che l'IA si occupi del lavoro duro mentre tu raccogli benefici tangibili all'istante. Non perdere l'occasione!",
        footerCompanyInfo:
            "Coin Sin Limited è un'azienda specializzata nella fornitura di informazioni e strumenti per l'investimento e il trading di criptovalute, basati sull'intelligenza artificiale.",
        footerContactanos: "Contattaci",
        footerPrivacidad: "Privacy",
        footerTerminos: "Termini",
        footerDescargo: "Disclaimer",
        footerEmailLabel: "Email:",
        footerCopyright: "Tutti i diritti riservati. Coin Sin Limited.",
        officialRegistrationNumber: "Numero di registrazione ufficiale (CNMV) - 287",
        smallFormNamePlaceholder: "Il tuo nome",
        smallFormSurnamePlaceholder: "Il tuo cognome",
        smallFormEmailPlaceholder: "La tua email",
        smallFormPhonePlaceholder: "9 11 2345-6789",
        smallFormDobPlaceholder: "Data di Nascita",
        smallFormRegisterButton: "Registrami",
        smallFormTermsText:
            "Registrandoti, accetti e sei d'accordo con i termini d'uso e la Politica sulla privacy del sito.",
        smallFormPrivacyText:
            "I tuoi dati sono sempre protetti con Coin Sin Limited. Completando questo modulo, accetti di ricevere le nostre email di marketing.",
        ageConfirmation: "Confermo di essere maggiorenne.",
        disclaimerFull: `IMPORTANT: Esclusioni di Responsabilità su Redditi e Legali. I grafici di reddito e guadagni creati da Coin Sin Limited, noto anche come "Questo Sito Web", sono utilizzati unicamente come illustrazioni ideali del tuo potenziale di guadagno. Il successo degli individui nelle testimonianze e in altri esempi sono risultati eccezionali, e pertanto non intendono garantire che tu o altri otterrete lo stesso. I risultati individuali dipenderanno da come utilizzi Coin Sin Limited. Per qualsiasi cosa tu faccia, questo sito web non ha responsabilità. Dovresti sempre agire con cautela e dovuta diligenza perché ti assumi la piena responsabilità delle tue azioni e decisioni quando utilizzi prodotti e servizi. Accetti che in nessun modo questo sito web sarà responsabile dei risultati del tuo utilizzo dei nostri servizi. Consulta i nostri termini d'uso per informazioni sulle nostre esclusioni di responsabilità e altre restrizioni. Sebbene el trading possa generare notevoli benefici, comporta anche il rischio di perdere il capitale investito en parte o per intero, quindi dovresti considerare se puoi permetterti di investire. ©2025AVVISO REGOLATORIO USA: Il trading de Forex, CFD e criptovalute non è soggetto ad alcuna regolamentazione USA. L'investimento in criptovalute non è regolamentato o supervisionato da alcuna agenzia finanziaria o USA. Qualsiasi trading non regolamentato da residenti USA è considerado ilegal. Este sitio web non accetta clienti o cittadini USA. Este sitio web non ha responsabilità per le azioni dei clienti situati o con cittadinanza statunitense. I clienti situati negli Stati Uniti o con cittadinanza statunitense si assumono la piena responsabilità delle loro azioni e decisioni quando utilizzano prodotti e servizi da este Sito Web. In qualsiasi circostanza, la scelta di utilizzare el Sito Web, el Servizio e/o el Programma è sotto la sola responsabilità dell'Utente, che deve rispettare la legislazione vigente.`,
        disclaimerFullContent: `IMPORTANT: Esclusioni di Responsabilità su Redditi e Legali. Ogni sforzo è stato fatto per rappresentare accuratamente questo prodotto e il suo potenziale. Anche se questo settore è uno dei pochi in cui si può scrivere il proprio assegno in termini di guadagni, non vi è alcuna garanzia che si guadagnerà denaro utilizzando le tecniche e le idee contenute in questi materiali. Gli esempi in questi materiali non devono essere interpretati come una promessa o garanzia di guadagni. Il potenziale di guadagno dipende interamente dalla persona che utilizza il nostro prodotto, le idee e le tecniche. Non intendiamo che questo sia uno "schema per arricchirsi".Qualsiasi affermazione di guadagni effettivi o esempi di risultati effettivi può essere verificata su richiesta. Il tuo livello di successo nel raggiungere i risultati dichiarati nei nostri materiali dipende dal tempo che dedichi al programma, alle idee e alle tecniche menzionate, alle tue finanze, conoscenze e varie abilità. Poiché questi fattori differiscono a seconda degli individui, non possiamo garantire il tuo successo o il tuo livello di reddito. Né siamo responsabili per le tue azioni.I materiali del nostro prodotto e del nostro sito web possono contenere informazioni che includono o si basano su dichiarazioni previsionali ai sensi del Securities Litigation Reform Act del 1995. Le dichiarazioni previsionali esprimono le nostre aspettative o previsioni di eventi futuri. Puoi identificare queste dichiarazioni dal fatto che non si riferiscono strettamente a fatti storici o attuali. Usano parole come "anticipare", "stimare", "aspettarsi", "proiettare", "intendere", "pianificare", "credere" e altre parole e termini di significato simile in relazione a una descrizione di potenziali guadagni o prestazioni finanziarie.Qualsiasi e tutte le dichiarazioni previsionali qui o in qualsiasi nostro materiale di vendita sono intese a esprimere la nostra opinione sul potenziale di guadagno. Molti fattori saranno importanti nel determinare i tuoi risultati effettivi e non vengono fornite garanzie che raggiungerai risultati simili ai nostri o a quelli di chiunque altro; infatti, non vengono fornite garanzie che raggiungerai alcun risultato dalle nostre idee e tecniche nel nostro materiale.L'autore e l'editore declinano qualsiasi garanzia (espressa o implicita), commerciabilità o idoneità per uno scopo particolare. L'autore e l'editore non saranno in alcun caso responsabili nei confronti di alcuna parte per danni diretti, indiretti, punitivi, speciali, incidentali o altri danni consequenziali derivanti direttamente o indirettamente da qualsiasi uso di questo materiale, che viene fornito "così com'è" e senza garanzie.Come sempre, si dovrebbe chiedere il consiglio di un professionista legale, fiscale, contabile o altro professionista competente. L'autore e l'editore non garantiscono le prestazioni, l'efficacia o l'applicabilità di alcun sito elencato o collegato a questo prodotto.Tutti i collegamenti sono solo a scopo informativo e non sono garantiti per contenuto, accuratezza o qualsiasi altro scopo implicito o esplicito.PrivacyManteniamo questa pagina per dimostrare il nostro fermo impegno per i diritti e la privacy dei nostri utenti. Questa pagina spiega come il nostro sito raccoglie informazioni dai nostri membri.Newsletter gratuita e mailing list: rispettiamo la privacy dei nostri utenti e, come tale, non condivideremo mai il nostro database di indirizzi email e nomi con terze parti.Dopo aver confermato che desideri iscriverti alla nostra newsletter, di tanto in tanto ti invieremo informazioni gratuite relative ai prodotti che commercializziamo, consigli generali relativi al marketing online e materiale promozionale per altri prodotti. La tua email non verrà mai trasmessa a terze parti. Non ti invieremo mai spam. Puoi annullare l'iscrizione alla mailing list in qualsiasi momento.Informazioni personali che raccogliamo e come vengono utilizzate: Fornitore di servizi: quando acquisti un prodotto, il pagamento viene elaborato dal prodotto, che raccoglierà il tuo nome, indirizzo e informazioni sulla carta di credito per verificare il tuo ordine. Non possono utilizzare le informazioni per nessun altro scopo. Al momento dell'ordine, raccogliamo anche il tuo nome e indirizzo email. Utilizziamo queste informazioni per seguirti come da sezione newsletter sopra.Ulteriore promemoria – Dichiarazione di non responsabilità sui guadagni:Ogni sforzo è stato fatto per rappresentare accuratamente questo prodotto e il suo potenziale. Anche se questo settore è uno dei pochi in cui si può scrivere il proprio assegno in termini di guadagni, non vi è alcuna garanzia che si guadagnerà denaro utilizzando le tecniche e le idee contenute in questi materiali.Gli esempi in questi materiali non devono essere presi come una promessa o garanzia di guadagni. Il potenziale di guadagno dipende interamente dalla persona che utilizza il nostro prodotto, le idee, le tecniche e lo sforzo profuso. Non intendiamo che questo sia uno "schema per arricchirsi", né dovresti considerarlo tale.Qualsiasi e tutte le dichiarazioni previsionali qui o in qualsiasi nostro materiale di vendita sono intese a esprimere la nostra opinione sul potenziale di guadagno. Molti fattori saranno importanti nel determinare i tuoi risultati effettivi e non vengono fornite garanzie che raggiungerai risultati simili ai nostri o a quelli di chiunque altro; infatti, non vengono fornite garanzie che raggiungerai alcun risultato dalle nostre idee e tecniche.I risultati variano e, come per qualsiasi opportunità di guadagno, potresti guadagnare di più o di meno. Il successo in QUALSIASI opportunità di guadagno è il risultato di duro lavoro, tempo e una varietà di altri fattori. Nessuna garanzia espressa o implicita di reddito viene fornita dal prodotto.Politica di resi e rimborsi: come indicato, se acquisti un prodotto e non godi della libertà finanziaria che ti aspettavi, non guadagni tanto con i nostri metodi quanto ti aspettavi, o per qualsiasi motivo, puoi richiedere un rimborso per il prodotto entro 60 giorni dall'acquisto. A margine, ti chiediamo di mettere in pratica le tecniche prima di richiedere un rimborso, a nostro vantaggio: tuttavia, la nostra politica di rimborso è incondizionata e questo è un suggerimento, non un requisito. Siamo consapevoli che alcuni acquirenti non raggiungeranno i loro obiettivi personali nonostante i nostri migliori sforzi, e manteniamo la nostra politica di rimborso in quanto tale. Ti preghiamo di inoltrarci il tuo numero di ricevuta (che ti è stato fornito al momento dell'ordine) e elaboreremo la tua richiesta di rimborso il più rapidamente possibile, in genere entro 24 ore.Revisioni di questa politica: La nostra azienda si riserva il diritto di rivedere, modificare o emendare questa politica, il nostro accordo sui Termini di servizio e le nostre altre politiche e accordi in qualsiasi momento e in qualsiasi modo, aggiornando questa pubblicazione.Copyright © 2025 prodotto | Tutti i diritti riservati`,
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
    { code: "+237", flag: "🇨🇲", country: "Camerún", name: "Camerún", id: "cm" },
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

type Language = "es" | "en" | "ca" | "it"

export default function DisclaimerPage() {
    const [language, setLanguage] = useState<Language>("es")
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
        setLanguage(newLanguage as Language)
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
                                    <SelectItem value="ca">CAT Català</SelectItem>
                                    <SelectItem value="it">🇮🇹 Italiano</SelectItem>
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
