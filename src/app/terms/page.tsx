"use client"
import { useState, useMemo } from "react"
import Link from "next/link" // Import Link from next/link
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Info } from "lucide-react"

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
        disclaimerFull: `IMPORTANTE: Exenciones de Responsabilidad de Ingresos y Legales. Las gráficas de ingresos y ganancias creadas por smartbitboost.io, también conocido como "Este Sitio Web", se utilizan únicamente como ilustraciones ideales de su potencial de ganancias. El éxito de las personas en testimonios y otros ejemplos son resultados excepcionales, por lo que no están destinados a garantizar que usted u otros logren lo mismo. Los resultados individuales dependerán de cómo use smartbitboost.io. Por lo que haga, este sitio web no tiene responsabilidad. Siempre debe actuar con precaución y diligencia debida porque asume toda la responsabilidad por sus acciones y decisiones al utilizar productos y servicios. Acepta que de ninguna manera este sitio web será responsable de los resultados de su uso de nuestros servicios. Consulte nuestros términos de uso para obtener información sobre nuestras exenciones de responsabilidad y otras restricciones. Si bien el comercio puede generar beneficios notables, también conlleva el riesgo de perder el capital invertido en parte o en su totalidad, por lo que debe considerar si puede permitirse invertir. ©2025AVISO DE REGULACIÓN EN USA: El comercio de Forex, CFDs y criptomonedas no está bajo ninguna regulación estadounidense. La inversión en criptomonedas no está regulada ni supervisada por ninguna agencia financiera o de EE. UU. Cualquier comercio que no sea regulado por residentes estadounidenses se considera ilegal. Este sitio web no acepta clientes estadounidenses o ciudadanos estadounidenses. Este sitio web no tiene responsabilidad por las acciones de los clientes ubicados o con ciudadanía estadounidense. Los clientes ubicados dentro de los Estados Unidos o con ciudadanía estadounidense asumen toda la responsabilidad por sus acciones y decisiones al usar productos y servicios de este Sitio Web. En cualquier y todas las circunstancias, la elección de utilizar el Sitio Web, el Servicio y/o el Software es bajo la total responsabilidad del Usuario, quien debe cumplir con la legislación vigente.`,
        termsOfUseContent: {
            title: "Términos de Uso del Sitio Web",
            effectiveDate: "Estos Términos entran en vigor el 23 de enero de 2021.",
            generalProvisions: {
                heading: "Disposiciones Generales",
                p1: "Al utilizar smartbitboost.io (en adelante «Sitio Web»), usted acepta cumplir con estos términos de uso del Sitio Web, que rigen los derechos y obligaciones entre el propietario del dominio en el que se encuentra este Sitio Web (en adelante «Operador»), y usted como Usuario de este Sitio Web (en adelante «Usted» o «Usuario»).",
                p2: "Este dominio pertenece al Operador en base a la propiedad, la gestión operativa de este Sitio Web publicitario es realizada únicamente por el Operador. El Sitio Web le proporciona información sobre los servicios y productos de nuestro(s) socio(s) (en adelante, el/los «Anunciante(s)»). El Sitio Web le permite a usted, como Usuario de este Sitio Web, solicitar los productos o servicios del Anunciante utilizando sus sitios web (en adelante, el «Servicio»). Los términos de uso del Sitio Web se rigen por los términos de uso del Sitio Web, que se publican en el Sitio Web (en adelante, los “Términos”).",
                p3: "El Sitio Web actúa como una plataforma de información en línea e incluye un servicio que permite al Usuario enviar solicitudes de Productos y/o Servicios del Anunciante que se anuncian en el Sitio Web o utilizando los sitios web del Anunciante (en adelante «Servicio») a través de su plataforma de seguimiento (en adelante «Software»).",
                p4: "El Operador solo facilita la comunicación entre el proveedor de productos y/o servicios y el Usuario. El Operador no es un proveedor de ningún servicio y/o producto.",
                p5: "Al enviar cualquier información, usted acepta los términos de uso del Sitio Web, bajo los cuales le proporcionamos información, con el fin de procesar su solicitud para celebrar un acuerdo entre usted y el Anunciante para la compra de servicios o bienes anunciados en el Sitio Web o utilizando los sitios web del Anunciante.",
            },
            websiteContent: {
                heading: "Contenido del Sitio Web",
                p1: "Todos los materiales, incluidos banners, materiales de video y otros contenidos mostrados en el Sitio Web (en adelante, el «Contenido») se proporcionan exclusivamente con fines publicitarios e informativos y no deben utilizarse para otros fines; todos los materiales están destinados únicamente a la imitación o modelado. El Contenido puede no ser preciso y no basarse en eventos o hechos reales precisos; sin embargo, toda la información percibida del Contenido en forma visual, oral o escrita no es asesoramiento financiero, legal, fiscal u otro asesoramiento profesional y no pretende reemplazar la consulta con un profesional calificado. El Operador no ofrece garantías ni declaraciones con respecto a la aplicabilidad, precisión, idoneidad o integridad del Contenido; la información contenida en él está destinada únicamente a fines informativos y publicitarios, y deben tenerse en cuenta todas las reservas presentadas anteriormente. Por lo tanto, basándose en lo anterior, si desea utilizar y aplicar el Software, asume la total responsabilidad de sus acciones. Ninguna declaración debe interpretarse como asesoramiento de inversión o recomendaciones, sugerencias u ofertas para comprar o vender cualquier tipo de valores y/o instrumentos financieros u otros productos y/o servicios.",
                p2: "Todos los resultados presentados en la metodología y/o sistema que está disponible en el Contenido no indican necesariamente resultados futuros. No se otorgan garantías ni se hacen declaraciones de que cualquier Usuario recibirá o podrá recibir ganancias o pérdidas similares a las indicadas en el Contenido. La ejecución pasada de cualquier sistema o estrategia que pueda mostrarse en el Contenido no demuestra realmente la ejecución y los resultados futuros que se pueden lograr. Recomendamos enfáticamente que consulte con su asesor experto antes de invertir o intercambiar cualquier instrumento financiero. Recomendamos encarecidamente que consulte con su asesor personal que tenga suficientes habilidades profesionales antes de invertir o intercambiar cualquier instrumento financiero.",
                p3: "El Usuario es debidamente notificado, comprende y reconoce que el Operador no está autorizado a ofrecer ninguna recomendación legal, contable, de inversión o fiscal, o recomendaciones con respecto a la estrategia de inversión, idoneidad, rentabilidad u otros asuntos.",
            },
            serviceUsage: {
                heading: "Uso del Servicio",
                p1: "Para registrarse en el Sitio Web, es posible que necesite un nombre, apellido, dirección de correo electrónico, número de teléfono y contraseña. Solo un usuario autorizado puede tener una cuenta; no se permite el registro de varias cuentas registradas por la misma persona física o jurídica y puede llevar al cierre por parte del Operador de todas las cuentas que el Operador considere necesarias. El uso del Servicio es voluntario y gratuito.",
                p2: "Al utilizar el Sitio Web, usted consiente que su identificación y contraseña se mantengan confidenciales y acepta no utilizar la cuenta de otro usuario autorizado.",
                p3: "El Operador no es responsable de ninguna pérdida o daño resultante de su incumplimiento de estas obligaciones, no es responsable de ningún daño causado por robo, piratería o cualquier otro uso no autorizado de su contraseña, datos de identificación u otros medios de identificación.",
                p4: "Durante el registro, el Usuario está obligado a proporcionar al Operador información verdadera, precisa y completa al registrarse rellenando el formulario de registro del Sitio Web. El Usuario acepta cumplir con todas las leyes y regulaciones locales, estatales, nacionales e internacionales pertinentes con respecto al uso del Sitio Web, el Servicio y/o el Software. Además, el Usuario reconoce y acepta que el uso de Internet y acceso o la transferencia o conexión al Sitio Web es enteramente bajo su propio riesgo.",
                p5: "En caso de cualquier violación, el Operador no es responsable de la seguridad de ninguna información transmitida hacia o desde el Sitio Web. El Usuario asume toda la responsabilidad en relación con las acciones relacionadas con su uso del Sitio Web, incluyendo, pero no limitado a, el mantenimiento o la copia de seguridad de cualquier dato.",
                p6: "El Operador realiza todos los esfuerzos comercialmente razonables para que el Software y/o el Servicio estén disponibles para el Usuario. El Usuario reconoce que algunos componentes del Servicio y/o Software pueden ser proporcionados por un tercero, y por lo tanto puede haber retrasos, errores, mal funcionamiento, retraso de datos, etc., que el Operador no puede controlar. El Operador no puede dar ninguna garantía y no asume ninguna responsabilidad por los casos en que el Servicio y/o el Software no estén ininterrumpidos o libres de errores, o que los defectos en el Servicio y/o el Software sean corregidos.",
                p7: "El Operador recibe cualquier dato personal de acuerdo con la Política de Privacidad. El Usuario acepta leer y aceptar la Política de Privacidad antes de enviar cualquier dato personal en este Sitio Web. El Usuario reconoce que el uso del Sitio Web y el uso del Servicio requieren el uso de sus datos personales.",
                p8: "Cualquier Usuario acepta leer y aceptar la Política de Privacidad antes de enviar cualquier dato personal en este Sitio Web, en caso de que el Usuario se entere de una violación o posible violación de seguridad en relación con cualquier dato personal proporcionado al Operador, o sobre cualquier piratería no autorizada del Sitio Web, el Usuario deberá:",
                list1: [
                    "1) notificar inmediatamente al Operador de dicha violación o posible violación;",
                    "2) proporcionar asistencia al Operador si es razonablemente necesario para prevenir o eliminar cualquier dicha violación;",
                    "3) permite al Operador cumplir con cualquier ley aplicable que requiera informes de una violación de seguridad que conduzca a cualquier violación relacionada con la identificación de datos personales.",
                ],
                p9: "Aunque el Sitio Web puede ser accesible en todo el mundo, no todas las funciones o Servicios ofrecidos en el Sitio Web son adecuados o disponibles para su uso en todos los países. El Operador se reserva el derecho de limitar, a su discreción, la provisión y cantidad de cualquier función o Servicio a cualquier persona o región geográfica. De cualquier manera la elección de utilizar el Sitio Web, el Servicio y/o el Software es bajo total responsabilidad de Usuario, quien debe cumplir con la legislación vigente.",
                p10: "Trading Forex, CFDs y Cryptocurrencies no está regulado en los Estados Unidos. Invertir en Crypto no está supervisado ni regulado por ninguna agencia financiera ni de EE. UU. Cualquier actividad comercial no regulada por residentes de EE. UU. se considera ilegal. El Sitio Web no acepta Usuarios ubicados en los Estados Unidos o con ciudadanía estadounidense. Este Sitio Web no es responsable de las acciones de los clientes ubicados en los Estados Unidos o con ciudadanía estadounidense. Los clientes ubicados dentro de los Estados Unidos o con ciudadanía estadounidense asumen toda la responsabilidad por sus acciones y decisiones al usar productos y servicios de este Sitio Web. En cualquier y todas las circunstancias la elección de utilizar el Sitio Web, el Servicio y/o el Software es bajo la total responsabilidad del Usuario, quien debe cumplir con la legislación vigente.",
            },
            ipRights: {
                heading: "Derechos de Propiedad Intelectual",
                p1: "Los derechos de autor del Contenido pertenecen tanto al Operador como a sus socios, y no pueden almacenarse, copiarse o modificarse en ningún formato, venderse o utilizarse de ninguna manera bajo ninguna circunstancia, distribuirse o transferirse de ninguna manera sin el permiso especial del Operador. La información, módulos, patentes, divulgaciones de patentes, solicitudes de patentes y todos los derechos sobre invenciones (patentables o no), marcas comerciales, nombres comerciales, derechos de autor, métodos, conocimientos técnicos, código informático (incluido el código HTML, el código de software original, el código fuente, el código objeto), nombres de dominio de Internet y registros y solicitudes de registro de los mismos junto con todo el fondo de comercio asociado, algoritmos, métodos comerciales, interfaces de usuario, diseño gráfico y software, arquitectura de software, algoritmos, estructuras de datos; y todos los desarrollos, derivados y mejoras de los mismos, independientemente de si están registrados o no, y todos los demás derechos de propiedad intelectual de todo tipo y naturaleza en todo el mundo y como se designen, ya sea que surjan por ley, contrato, licencia o de otra manera, y todos los registros, aplicaciones, renovaciones, extensiones, continuaciones, divisiones o reediciones de los mismos ahora o en el futuro (colectivamente denominados «Propiedad Intelectual»), son propiedad exclusiva del Operador, sus sucursales, sus sucesores y cesionarios, son controlados y licenciados por él, así como/o por terceros que han otorgado al Operador una licencia para usar dicha propiedad intelectual.",
                p2: "El Operador otorga al Usuario una licencia personal, revocable, limitada, no exclusiva, gratuita y no transferible para usar el Sitio Web, el Software y el Contenido solo para uso personal. La licencia no permite al Usuario modificar, copiar, almacenar, reproducir, republicar, cargar, publicar, transferir, licenciar, sublicenciar, display, arrendar, vender, usar o distribuir de ninguna manera ningún dato, propiedad intelectual o material, proporcionado por el Operador a través del Sitio Web de ninguna manera no expresamente permitida por estos Términos. Cualquier alteración, recompilación, traducción, creación de obras derivadas, desensamblaje, publicación, eliminación, alteración de cualquier aviso o etiqueta de propiedad, para proporcionar intereses protectores o usar el Sitio Web de cualquier manera no expresamente permitida en este documento para el Usuario o cualquier tercero.",
                p3: "No puede utilizar ningún «enlace profundo», «borrado de página», «robot», «araña» u otro dispositivo automático, programa, script, algoritmo o metodología o cualquier proceso manual similar o equivalente para acceder, recibir, copiar o controlar cualquier parte del Sitio Web o en cualquier manera reproducir o eludir la estructura de navegación o la presentación del Sitio Web para recibir o intentar recibir cualquier material, documento o información por cualquier medio, intencionalmente disponible a través del Sitio Web, o intentar obtener acceso no autorizado a cualquier parte o función del sitio web, incluyendo, sin limitación, la cuenta de cualquier usuario(s), cualquier otro sistema o red conectado al sitio web o sus servidores, a cualquiera de los servicios ofrecidos en o a través del Sitio Web, piratería, «minería» de contraseñas o cualquier otro método ilegal o prohibido, o investigar, escanear o probar la vulnerabilidad del Sitio Web o cualquier red conectada al Sitio Web, y no violar las medidas de seguridad o autenticación en el Sitio Web o en cualquier red conectada al Sitio Web, o buscar a la inversa, rastrear o intentar rastrear cualquier información sobre cualquier usuario o visitante del Sitio Web, o tomar cualquier acción que cree una carga irrazonable o desproporcionadamente grande en la infraestructura del Sitio Web, sistema, redes o cualquier sistema o red asociado con él, o usar cualquier dispositivo, software o procedimiento para interferir con el funcionamiento normal del Sitio Web o las transacciones realizadas en el Sitio Web o el uso del Sitio Web por cualquier otra persona, o falsificar encabezados, pretender ser otra persona o manipular de otra manera los identificadores para ocultar la verdadera identidad u origen de cualquier mensaje o transmisión enviada hacia o desde el Operador en el Sitio Web, o usar el Sitio Web para recopilar direcciones de correo electrónico u otra información de contacto o personal, o anunciar, compartir la marca, la marca privada, usar el nombre, el logotipo o un nombre similar del Operador en otro dominio, distribuir, revender o permitir de otra manera que terceros accedan al Sitio Web y lo utilicen, en su totalidad o en parte, sin el permiso explícito, separado y previo por escrito del Operador, o usar el Sitio Web de cualquier otra manera ilegal o de una manera que pueda percibirse como causante de daño, humillación u otro impacto negativo en el Operador. Intentar el uso no autorizado de este Sitio Web puede constituir un delito. El Operador se reserva el derecho de ver, rastrear y registrar acciones en el Sitio Web, incluyendo, sin limitación, mediante el archivo de notificaciones o mensajes enviados por el Usuario a través del Sitio Web. Además, el Operador se reserva el derecho de cambiar, suspender, terminar o interrumpir el trabajo o el acceso al Sitio Web o cualquier parte del mismo en cualquier momento y sin previo aviso para proteger el Sitio Web o las actividades del Operador.",
            },
            limitationOfLiability: {
                heading: "Limitación de Responsabilidad",
                p1: "El Usuario asume la total responsabilidad y riesgo por el uso del Sitio Web, el Contenido y el Software. El Operador proporciona el Sitio Web, el Contenido y el Software y la información relacionada en la forma en que se encuentran y no otorga ninguna garantía, representación o respaldo expreso o implícito.",
                p2: "El Operador rechaza cualquier violación en relación con el Sitio Web, el Servicio, el Software, cualquier información o información de terceros o enlaces proporcionados a ellos. El Operador no es responsable de ningún costo o daño que surja directa o indirectamente como resultado de dicha transacción.",
                p3: "El Operador bajo ninguna circunstancia será responsable ante ninguna parte por pérdidas directas, indirectas, implícitas, punitivas, especiales, incidentales u otras pérdidas indirectas que surjan directa o indirectamente del uso del Sitio Web, el Contenido y el Software que se proporciona tal cual, y sin ninguna garantía.",
                p4: "El uso del Sitio Web, el Contenido y el Software es bajo el propio riesgo y responsabilidad del Usuario.",
                p5: "Cualquier reclamo de compensación por pérdidas, de una forma u otra, no puede ser aplicable al Operador; bajo ninguna circunstancia el Operador será responsable por pérdidas (incluidas pérdidas directas, indirectas, consecuentes o especiales), incluso si se le informa de la posibilidad de que tales pérdidas surjan como resultado de su uso o dependencia personal de este Sitio Web.",
                p6: "El Anunciante sigue siendo el único y total responsable de cualquier violación en relación con el Contenido de los materiales publicitarios, la precisión y/o calidad de la información, Productos y/o Servicios, Software y para cualquier parte de los mismos, por cualquier pérdida directa, indirecta, implícita, punitiva, especial, incidental u otras pérdidas indirectas que surjan directa o indirectamente de cualquier uso del Sitio Web, Contenido de materiales publicitarios, información y/o Software.",
                p7: "Any claims for compensation for losses, one way or another, or any other claims and/or complaints in relation to the Website, Content of advertising materials, accuracy and/or quality of information, Products and/or Services, Software shall be raised and/or filed to the Advertiser.",
                p8: "The quality, non-violation, accuracy, completeness or reliability of any third-party materials, programs, products displayed on such a third-party website or which you can access through a link to such a website is not confirmed in any way by the Operator, and the Operator does not give any guarantees regarding of this.",
                p9: "The Operator expressly disclaims responsibility for the content, materials, accuracy and/or quality of information, products and/or services available or advertised on these third-party websites. All communication or relations between the User and a third party occur exclusively between the User and such third party and in no way affect the Operator.",
            },
            other: {
                heading: "Otros",
                p1: "Si el Operador no puede insistir o garantizar la estricta implementación de cualquier disposición de estos Términos, esto debe interpretarse como una renuncia a cualquier disposición o derecho en acuerdo con estos Términos o legislación.",
                p2: "Las relaciones legales establecidas de acuerdo con estos Términos se regirán e interpretarán de acuerdo con las leyes de Hong Kong.",
                p3: "La fecha de uso real del Sitio Web por parte del Usuario es la fecha de regulación de las relaciones entre el Usuario y el Operador. Los derechos y obligaciones de las partes se ejercen al registrarse el Usuario.",
                p4: "El Operador puede transferir sus derechos y obligaciones de acuerdo con estos Términos a cualquier parte y en cualquier momento sin notificar al Usuario. El Usuario no tiene derecho y no puede ceder ningún derecho u obligación del Usuario a terceros sin el consentimiento previo por escrito del Operador. Estos Términos constituyen el acuerdo completo entre el Usuario y el Operador con respecto al uso del Sitio Web.",
                p5: "Las siguientes disposiciones permanecen en vigor después de la terminación de estos Términos: derechos de propiedad intelectual, limitación de responsabilidad y cualquier otra disposición de estos Términos que por su naturaleza permanezcan en vigor después de la terminación de este Términos.",
                p6: "Estos Términos pueden ser modificados o complementados por el Operador unilateralmente de vez en cuando. La nueva edición de los Términos entra en vigor desde el momento de su publicación en el Sitio Web. Si el Usuario no está de acuerdo con los nuevos Términos, él/ella deja de usar el Sitio Web y el Servicio.",
                p7: "La comunicación escrita o las relaciones comerciales entre las partes también incluyen la comunicación o las relaciones comerciales por correo electrónico sin firma electrónica, a menos que se disponga expresamente lo contrario en el presente. En caso de que alguna parte o disposición de estos Términos se considere ilegal o ineficaz por cualquier razón, ni la validez ni el resto se verán afectados.",
                copyright: "Copyright © 2025 producto | Todos los derechos reservados",
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
        termsOfUseContent: {
            title: "Website Terms of Use",
            effectiveDate: "These Terms come into force on January 23, 2021.",
            generalProvisions: {
                heading: "General provisions",
                p1: "By using smartbitboost.io (hereinafter «Website»), you agree to abide by these Website terms of use, which govern the rights and obligations between the owner of the domain on which this Website is located (hereinafter «Operator»), and you as a User of this Website (hereinafter «You» or «User»).",
                p2: "This domain belongs to Operator on the basis of ownership, the operational management of this advertising Website is performed solely by Operator. The Website provides You with information about the services and products of our partner(s) (hereinafter referred to as the «Advertiser(s)»). The Website allows you, as a User of this Website, to apply for the products or services of the Advertiser using its websites (hereinafter referred to as the «Service»). The terms of use of the Website are governed by the Website terms of use, which are published on the Website (hereinafter referred to as the “Terms”).",
                p3: "The Website acts as an online information platform and includes a service that allows the User to submit applications for Products and/or Services of the Advertiser that are advertised on the Website or using the Advertiser’s websites (hereinafter «Service») through his tracking platform (hereinafter «Software»).",
                p4: "The Operator only facilitates communication between the supplier of products and / or services and the User. The Operator is not a provider of any services and/or products.",
                p5: "When submitting any information, you agree with Website terms of use, under which we providing information to you, in order to process your application for concluding an agreement between you and the Advertiser for the purchase of services or goods advertised on the Website or using the Advertiser’s websites.",
            },
            websiteContent: {
                heading: "Website content",
                p1: "All materials including banners, video materials and other content displayed on the Website (hereinafter referred to as the «Content») are provided exclusively for advertising and informational purposes and should not be used for other purposes, all materials are intended only for imitation or modeling. The Content may not be accurate and not based on accurate real events or facts, however, any and all information perceived from the Content in a visual, oral or written form is not financial, legal, tax or other professional advice and is not intended as replacement consultation with a qualified professional. The Operator makes no warranties or statements regarding the applicability, accuracy, suitability or completeness of the Content, the information contained in it is intended for informational and advertising purposes only, and all reservations presented above should be taken into account. Thus, based on the foregoing, if you want to use and apply the Software, you take full responsibility for your actions. No statement should be construed as providing investment advice or recommendations, suggestions or offers to buy or sell any type of securities and / or financial instruments or other products and/or services.",
                p2: "All results presented in the methodology and / or system that is available in the Content do not necessarily indicate future results. No guarantees are given, no statements are made that any User will or may receive profits or losses similar to those indicated in the Content. Past execution of any system or strategy that might be displayed in the Content doesn’t really demonstrate future execution and results that may be achieved. We emphatically prescribe that you counsel with your expert counselor before ever putting or exchanging any budgetary instrument. We strongly recommend that you consult with your personal consultant who has enough professional skills before ever investing or trading in any financial instrument.",
                p3: "The User is duly notified, understands and acknowledges that the Operator is not authorized to offer any legal, accounting, investment or tax recommendations, or recommendations regarding investment strategy, suitability, profitability, or other issues.",
            },
            serviceUsage: {
                heading: "Service usage",
                p1: "To register on the Website, you may need a first name, last name, email address, phone number and password. Only one authorized user can have one account, registration of several accounts registered by the same individual or legal entity is not allowed and may lead to the closure by the Operator of as any and all accounts as the Operator considers necessary. Use of the Service is voluntary and free.",
                p2: "By using the Website, you consent to your identification and password being kept confidential and you agree not to use the account of another authorized user.",
                p3: "The Operator is not responsible for any loss or damage resulting from your non-compliance with these obligations, is not responsible for any damage caused by theft, hacking or any other unauthorized use of your password, identification data or other means of identification.",
                p4: "During registration, the User is obliged to provide the Operator with true, accurate and complete information when registering by filling it in the registration form of the Website. The User agrees to comply with all applicable local, state, national and international laws and regulations regarding the use of the Website, the Service and/or the Software. In addition, the User acknowledges and agrees that the use of the Internet and access or transfer or connection to the Website is entirely at his/her own risk.",
                p5: "In case of any violation, the Operator is not responsible for the security of any information transmitted to or from the Website. The User assumes all responsibility in relation to actions related to his/her use of the Website, including, but not limited to, maintaining or backing up any data.",
                p6: "The Operator makes all commercially reasonable efforts to make the Software and/or Service available to the User. The User acknowledges that some components of the Service and/or Software may be provided by a third party, and thus there may be delays, errors, malfunctions, data delay, etc., which the Operator cannot control. The Operator cannot give any guarantees and does not bear any responsibility for cases when the Service and/or the Software are uninterrupted or error-free, or that defects in the Service and/or the Software are corrected.",
                p7: "The Оperator receive any personal data in accordance with the Privacy Policy. The User agrees to read and accept the Privacy Policy before submitting any personal data on this Website. The User acknowledges that using the Website and using the Service requires the use of his/her personal data.",
                p8: "Any User agrees to read and accept the Privacy Policy before submitting any personal data on this Website, in case the User finds out about a violation or potential violation of security in relation to any personal data provided to the Operator, or about any unauthorized hacking of the Website, the User shall:",
                list1: [
                    "1) immediately notify the Operator of such a violation or potential violation;",
                    "2) provide assistance to the Operator if it is reasonably necessary to prevent or eliminate any such violation;",
                    "3) allows the Operator to comply with any applicable laws requiring reports of a security breach that leads to any violations related to the identification of personal data.",
                ],
                p9: "Although the Website may be accessible worldwide, not all functions or Services offered on the Website are suitable or available for use in all countries. The Operator reserves the right to limit, at its discretion, the provision and quantity of any function or Service to any person or geographical region. In any way the choice to use the Website, the Service and/or the Software is under full responsibility of User, who should comply with the current legislation.",
                p10: "Trading Forex, CFDs and Cryptocurrencies is not regulated within the United States. Invest in Crypto is not supervised or regulated by any financial agencies nor US agencies. Any unregulated trading activity by U.S. residents is considered unlawful. The Website does not accept User located within the United States or holding an American citizenship. This Website is not responsible for actions of customers located within the United States or holding an American citizenship. Customers located within the United States or holding an American citizenship bear sole responsibility for their actions and decisions when using products and services from this Website. In any and all circumstances the choice to use the Website, the Service and/or the Software is under full responsibility of User, who must comply with the current legislation.",
            },
            ipRights: {
                heading: "IP rights",
                p1: "The copyright to the Content belongs to both the Operator and its partners, and they cannot be stored, copied or modified in any format, sold or used in any way under any circumstances, distributed or transferred in any way without special permission of the Operator. The information, modules, patents, patent disclosures, patent applications, and all rights in inventions (whether patentable or not), trademarks, trade names, copyrights, methods, know-how, computer code (including HTML code, original software code, source code, object code), internet domain names, and registrations and applications for the registration thereof together with all of the goodwill associated therewith, algorithms, business methods, user interfaces, graphic design and software, software architecture, algorithms, data structures; and all developments, derivatives and improvements to them, regardless of whether they are registered or not, and all other intellectual property rights of every kind and nature throughout the world and however designated, whether arising by operation of law, contract, license, or otherwise, and all registrations, applications, renewals, extensions, continuations, divisions, or reissues thereof now or hereafter in effect (collectively referred to as “Intellectual Property”), are fully owned by the Operator, its branches, its successors and assigns, are controlled and licensed by him, as well as / or by third parties who have granted the Operator a license to use such intellectual property.",
                p2: "The Operator provides the User with a personal, revocable, limited, non-exclusive, free and non-transferable license to use the Website, Software and Content for personal use only. The license does not allow the User to modify, copy, store, reproduce, republish, upload, publish, transfer, license, sublicense, display, lease, lease, sell, use or distribute in any way any data, intellectual property or material, provided by the Operator through the Website in any way not expressly permitted by these Terms. Any alteration, recompilation, translation, creation of any derivative works, disassembly, publication, deletion, alteration of any proprietary notices or labels, to provide protective interests or otherwise use the Website in any way not expressly permitted in this document for the User or any third party.",
                p3: "You may not use any “deep link”, “page clear”, “robot”, “spider” or other automatic device, program, script, algorithm or methodology or any similar or equivalent manual process to access, receive, copy or control any part of the Website or in any way reproduce or bypass the navigation structure or presentation of the Website in order to receive or attempt to receive any materials, documents or information by any means, intentionally available through the Website,or try to gain unauthorized access to any part or function of the website, including, without limitation, the account of any user (s), any other systems or networks connected to the website or its servers, to any of the services offered on or through Website, hacking, password “mining”, or any other illegal or prohibited method,or Investigate, scan, or test the vulnerability of the Website or any network connected to the Website, and not to violate security measures or authentication on the Website or on any network connected to the Website,or reverse search, track, or try to track any information about any user or visitor to the Website, or take any action that creates an unreasonable or disproportionately large load on the infrastructure of the Website, system, networks or any systems or networks associated with it, or use any device, software or procedures to interfere with the normal operation of the Website or the transactions conducted on the Website or the use of the Website by any other person,or fake headers, pretend to be another person or otherwise manipulate identifiers to hide the true identity or origin of any message or transmission sent to or from the Operator on the Website, or use the Website to collect email addresses or other contact or personal information,or advertise, share the brand, private label, use the Operator’s name, logo or similar name on another domain, distribute, resell or otherwise allow third parties access to the Website and its use, in whole or in part, without explicit, separate and prior written permission Operator,or use the Website in any other illegal way or in a way that may be perceived as causing harm, humiliation or other negative impact on the Operator. Attempting to unauthorized use of this Website may constitute an offense. The Operator reserves the right to view, track and register actions on the Website, including, without limitation, by archiving notifications or messages sent by the User through the Website. Also, the Operator reserves the right to change, suspend, terminate or interrupt work or access to the Website or any part thereof at any time and without prior notice in order to protect the Website or the activities of the Operator.",
            },
            limitationOfLiability: {
                heading: "Limitation of liability",
                p1: "The User assumes full responsibility and risk for the use of the Website, Content and Software. The Operator provides the Website, Content and Software and related information in the form in which it is and does not give any express or implied warranties, representations or endorsements.",
                p2: "The Operator refuses any violations in relation to the Website, Service, Software, any information or third-party information or links provided to them. The Operator is not responsible for any costs or damages arising directly or indirectly as a result of any such transaction.",
                p3: "The Operator shall under no circumstances be liable to any party for any direct, indirect, implied, punitive, special, incidental or other indirect losses arising directly or indirectly from any use of the Website, Content and Software that is provided as is, and without any warranty.",
                p4: "The use of the Website, Content and Software is at the User’s own risk and responsibility.",
                p5: "Any claims for compensation for losses, one way or another, may not be applicable to the Operator, under no circumstances will the Operator be liable for losses (including direct, indirect, indirect or special losses), even if he is informed of the possibility of such losses arising as a result of your use or personal dependence on this Website.",
                p6: "The Advertiser remains solely and fully responsible for any violations in relation to the Content of advertising materials, accuracy and/or quality of information, Products and/or Services, Software and for any party of it, for any direct, indirect, implied, punitive, special, incidental or other indirect losses arising directly or indirectly from any use of the Website, Content of advertising materials, information and/or Software.",
                p7: "Any claims for compensation for losses, one way or another, or any other claims and/or complaints in relation to the Website, Content of advertising materials, accuracy and/or quality of information, Products and/or Services, Software shall be raised and/or filed to the Advertiser.",
                p8: "The quality, non-violation, accuracy, completeness or reliability of any third-party materials, programs, products displayed on such a third-party website or which you can access through a link to such a website is not confirmed in any way by the Operator, and the Operator does not give any guarantees regarding of this.",
                p9: "The Operator expressly disclaims responsibility for the content, materials, accuracy and/or quality of information, products and/or services available or advertised on these third-party websites. All communication or relations between the User and a third party occur exclusively between the User and such third party and in no way affect the Operator.",
            },
            other: {
                heading: "Other",
                p1: "If the Operator is not able to insist or ensure strict implementation of any provision of these Terms, this should be construed as a waiver of any provision or right in accordance with these Terms or legislation.",
                p2: "Legal relationships established in accordance with this Terms will be governed by and construed in accordance with the laws of Hong Kong.",
                p3: "The date of actual use of the Website by the User is the date of regulation of relations between the User and the Operator. The rights and obligations of the parties are exercised upon registration of the User.",
                p4: "The Operator may transfer its rights and obligations in accordance with these Terms to any party and at any time without notifying the User. The User has no right and cannot assign any rights or obligations of the User to third parties without the prior written consent of the Operator. These Terms constitute the entire agreement between the User and the Operator regarding the use of the Website.",
                p5: "The following provisions remain in force after the termination of these Terms: IP rights, Limitation of liability and any other provisions of these Terms that by their nature remain in force after the termination of this Terms.",
                p6: "These Terms may from time to time be changed or supplemented by the Operator unilaterally. The new edition of the Terms comes into force from the moment they are published on the Website. If the User does not agree with the new Terms, he/she stops using the Website and the Service.",
                p7: "Written communication or business relations between the parties also include communication or business relations by e-mail without an electronic signature, unless otherwise expressly provided herein. In the event that any part or provision of this Terms is deemed illegal or ineffective for any reason, neither validity nor the rest will be affected.",
                copyright: "Copyright © 2025 product | All Rights Reserved",
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

export default function TermsPage() {
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
            {/* Main Content Area for Terms of Use */}
            <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 sm:py-12 text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12">{t.termsOfUseContent.title}</h1>
                <p className="text-center text-sm mb-8">{t.termsOfUseContent.effectiveDate}</p>
                <section className="space-y-8 text-lg leading-relaxed">
                    <h2 className="text-3xl font-bold text-orange-400 mb-4">{t.termsOfUseContent.generalProvisions.heading}</h2>
                    <p>{t.termsOfUseContent.generalProvisions.p1}</p>
                    <p>{t.termsOfUseContent.generalProvisions.p2}</p>
                    <p>{t.termsOfUseContent.generalProvisions.p3}</p>
                    <p>{t.termsOfUseContent.generalProvisions.p4}</p>
                    <p>{t.termsOfUseContent.generalProvisions.p5}</p>
                    <h2 className="text-3xl font-bold text-orange-400 mb-4">{t.termsOfUseContent.websiteContent.heading}</h2>
                    <p>{t.termsOfUseContent.websiteContent.p1}</p>
                    <p>{t.termsOfUseContent.websiteContent.p2}</p>
                    <p>{t.termsOfUseContent.websiteContent.p3}</p>
                    <h2 className="text-3xl font-bold text-orange-400 mb-4">{t.termsOfUseContent.serviceUsage.heading}</h2>
                    <p>{t.termsOfUseContent.serviceUsage.p1}</p>
                    <p>{t.termsOfUseContent.serviceUsage.p2}</p>
                    <p>{t.termsOfUseContent.serviceUsage.p3}</p>
                    <p>{t.termsOfUseContent.serviceUsage.p4}</p>
                    <p>{t.termsOfUseContent.serviceUsage.p5}</p>
                    <p>{t.termsOfUseContent.serviceUsage.p6}</p>
                    <p>{t.termsOfUseContent.serviceUsage.p7}</p>
                    <p>{t.termsOfUseContent.serviceUsage.p8}</p>
                    <ul className="list-decimal list-inside space-y-2 ml-4">
                        {t.termsOfUseContent.serviceUsage.list1.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p>{t.termsOfUseContent.serviceUsage.p9}</p>
                    <p>{t.termsOfUseContent.serviceUsage.p10}</p>
                    <h2 className="text-3xl font-bold text-orange-400 mb-4">{t.termsOfUseContent.ipRights.heading}</h2>
                    <p>{t.termsOfUseContent.ipRights.p1}</p>
                    <p>{t.termsOfUseContent.ipRights.p2}</p>
                    <p>{t.termsOfUseContent.ipRights.p3}</p>
                    <h2 className="text-3xl font-bold text-orange-400 mb-4">
                        {t.termsOfUseContent.limitationOfLiability.heading}
                    </h2>
                    <p>{t.termsOfUseContent.limitationOfLiability.p1}</p>
                    <p>{t.termsOfUseContent.limitationOfLiability.p2}</p>
                    <p>{t.termsOfUseContent.limitationOfLiability.p3}</p>
                    <p>{t.termsOfUseContent.limitationOfLiability.p4}</p>
                    <p>{t.termsOfUseContent.limitationOfLiability.p5}</p>
                    <p>{t.termsOfUseContent.limitationOfLiability.p6}</p>
                    <p>{t.termsOfUseContent.limitationOfLiability.p7}</p>
                    <p>{t.termsOfUseContent.limitationOfLiability.p8}</p>
                    <p>{t.termsOfUseContent.limitationOfLiability.p9}</p>
                    <h2 className="text-3xl font-bold text-orange-400 mb-4">{t.termsOfUseContent.other.heading}</h2>
                    <p>{t.termsOfUseContent.other.p1}</p>
                    <p>{t.termsOfUseContent.other.p2}</p>
                    <p>{t.termsOfUseContent.other.p3}</p>
                    <p>{t.termsOfUseContent.other.p4}</p>
                    <p>{t.termsOfUseContent.other.p5}</p>
                    <p>{t.termsOfUseContent.other.p6}</p>
                    <p>{t.termsOfUseContent.other.p7}</p>
                    <p className="text-sm text-white/70 mt-8">{t.termsOfUseContent.other.copyright}</p>
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
                                <Link href="/privacy" className="hover:text-orange-300 transition-colors duration-200">
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
