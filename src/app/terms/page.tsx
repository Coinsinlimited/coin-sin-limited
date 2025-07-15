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
            "Invertir con herramientas basadas en inteligencia artificial hace que las inversiones sean assequibles en Canadá, Australia y otros países.",
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
                p2: "Este dominio pertenece al Operador en base a la propiedad, la gestión operativa de este Sitio Web publicitario es realizada únicamente por el Operador. El Sitio Web le proporciona información sobre los servicios y productos de nuestro(s) socio(s) (en adelante, el/los «Anunciante(s)»). El Sitio Web le permite a usted, como Usuario de este Sitio Web, solicitar los productos o servicios del Anunciante utilizando sus sitios web (en adelante, el «Servicio»). Los términos de uso del Sitio Web se rigen por los términos de uso del Sitio Web, que se publican en el Sitio Web (en adelante, los “Terminos”).",
                p3: "El Sitio Web actúa como una plataforma de información en línea e incluye un servicio que permite al Usuario enviar solicitudes de Productos y/o Servicios del Anunciante que se anuncian en el Sitio Web o utilizando los sitios web del Anunciante (en adelante «Servicio») a través de su plataforma de seguimiento (en adelante «Software»).",
                p4: "El Operador solo facilita la comunicación entre el proveedor de productos y/o servicios y el Usuario. El Operador no es un proveedor de ningún servicio y/o producto.",
                p5: "Al enviar cualquier información, usted acepta los términos de uso del Sitio Web, bajo los cuales le proporcionamos información, con el fin de procesar su solicitud para celebrar un acuerdo entre usted y el Anunciante para la compra de servicios o bienes anunciados en el Sitio Web o utilizando los sitios web del Anunciante.",
            },
            websiteContent: {
                heading: "Contenido del Sitio Web",
                p1: "Todos los materiales, incluidos banners, materiales de video y otros contenidos mostrados en el Sitio Web (en adelante, el «Contenido») se proporcionan exclusivamente con fines publicitarios e informativos y no deben utilizarse para otros fines; todos los materiales están destinados únicamente a la imitación o modelado. El Contenido puede no ser preciso y no basarse en eventos o hechos reales precisos; sin embargo, toda la información percibida del Contenido en forma visual, oral o escrita no es asesoramiento financiero, legal, fiscal u otro asesoramiento profesional y no pretende reemplazar la consulta con un profesional calificado. El Operador no ofrece garantías ni declaraciones con respecto a la aplicabilidad, precisión, idoneidad o integridad del Contenido; la información contenida en él está destinada únicamente a fines informativos y publicitarios, y deben tenerse en cuenta todas las reservas presentadas anteriormente. Por lo tanto, basándose en lo anterior, si desea utilizar y aplicar el Programari, asume la total responsabilidad de sus acciones. Ninguna declaración debe interpretarse como asesoramiento de inversión o recomendaciones, sugerencias u ofertas para comprar o vender cualquier tipo de valores y/o instrumentos financieros u otros productos y/o servicios.",
                p2: "Todos los resultados presentados en la metodología y/o sistema que está disponible en el Contenido no indican necesariamente resultados futuros. No se otorgan garantías ni se hacen declaraciones de que cualquier Usuari recibirá o podrá recibir ganancias o pérdidas similares a las indicadas en el Contenido. La ejecución pasada de cualquier sistema o estrategia que pueda mostrarse en el Contenido no demuestra realmente la ejecución y los resultados futuros que se pueden lograr. Recomendamos enfáticamente que consulte con su asesor experto antes de invertir o intercambiar cualquier instrumento financiero. Recomendamos encarecidamente que consulte con su asesor personal que tenga suficientes habilidades profesionales antes de invertir o intercambiar cualquier instrumento financiero.",
                p3: "El Usuari es debidamente notificado, comprende y reconoce que el Operador no está autorizado a ofrecer ninguna recomendación legal, contable, de inversión o fiscal, o recomendaciones con respecto a la estrategia de inversión, idoneidad, rentabilidad u otros asuntos.",
            },
            serviceUsage: {
                heading: "Uso del Servicio",
                p1: "Para registrarse en el Sitio Web, es posible que necesite un nombre, apellido, dirección de correo electrónico, número de teléfono y contraseña. Solo un usuario autorizado puede tener una cuenta; no se permite el registro de varias cuentas registradas por la misma persona física o jurídica y puede llevar al cierre por parte del Operador de todas las cuentas que el Operador considere necesarias. El uso del Servicio es voluntario y gratuito.",
                p2: "Al utilizar el Sitio Web, usted consiente que su identificación y contraseña se mantengan confidenciales y acepta no utilizar la cuenta de otro usuario autorizado.",
                p3: "El Operador no es responsable de ninguna pérdida o daño resultante de su incumplimiento de estas obligaciones, no es responsable de ningún daño causado por robo, piratería o cualquier otro uso no autorizado de su contraseña, datos de identificación u otros medios de identificación.",
                p4: "Durante el registro, el Usuari está obligado a proporcionar al Operador información verdadera, precisa y completa al registrarse rellenando el formulario de registro del Sitio Web. El Usuari acepta cumplir con todas las leyes y regulaciones locales, estatales, nacionales e internacionales pertinentes con respecto al uso del Sitio Web, el Servicio y/o el Software. Además, el Usuari reconoce y acepta que el uso de Internet y acceso o la transferencia o conexión al Sitio Web es enteramente bajo su propio riesgo.",
                p5: "En caso de cualquier violación, el Operador no es responsable de la seguridad de ninguna información transmitida hacia o desde el Sitio Web. El Usuari asume toda la responsabilidad en relación con las acciones relacionadas con su uso del Sitio Web, incluyendo, pero no limitado a, el mantenimiento o la copia de seguridad de cualquier dato.",
                p6: "El Operador realiza todos los esfuerzos comercialmente razonables para que el Software y/o el Servicio estén disponibles para el Usuari. El Usuari reconoce que algunos componentes del Servicio y/o Software pueden ser proporcionados por un tercero, y por lo tanto puede haber retrasos, errores, mal funcionamiento, retraso de datos, etc., que el Operador no puede controlar. El Operador no puede dar ninguna garantía y no asume ninguna responsabilidad por los casos en que el Servicio y/o el Software no estén ininterrumpidos o libres de errores, o que los defectos en el Servicio y/o el Software sean corregidos.",
                p7: "El Operador recibe cualquier dato personal de acuerdo con la Política de Privacidad. El Usuari acepta leer y aceptar la Política de Privacidad antes de enviar cualquier dato personal en este Sitio Web. El Usuari reconoce que el uso del Sitio Web y el uso del Servicio requieren el uso de sus datos personales.",
                p8: "Cualquier Usuari acepta leer y aceptar la Política de Privacidad antes de enviar cualquier dato personal en este Sitio Web, en caso de que el Usuari se entere de una violación o posible violación de seguridad en relación con cualquier dato personal proporcionado al Operador, o sobre cualquier piratería no autorizada del Sitio Web, el Usuari deberá:",
                list1: [
                    "1) notificar inmediatamente al Operador de dicha violación o posible violación;",
                    "2) proporcionar asistencia al Operador si es razonablemente necesario para prevenir o eliminar cualquier dicha violación;",
                    "3) permite al Operador cumplir con cualquier ley aplicable que requiera informes de una violación de seguridad que conduzca a cualquier violación relacionada con la identificación de datos personales.",
                ],
                p9: "Aunque el Sitio Web puede ser accesible en todo el mundo, no todas las funciones o Servicios ofrecidos en el Sitio Web son adecuados o disponibles para su uso en todos los países. El Operador se reserva el derecho de limitar, a su discreción, la provisión y cantidad de cualquier función o Servicio a cualquier persona o región geográfica. De cualquier manera la elección de utilizar el Sitio Web, el Servicio y/o el Software es bajo total responsabilidad de Usuari, quien debe cumplir con la legislación vigente.",
                p10: "Trading Forex, CFDs y Cryptocurrencies no está regulado en los Estados Unidos. Invertir en Crypto no está supervisado ni regulado por ninguna agencia financiera ni de EE. UU. Cualquier actividad comercial no regulada por residentes de EE. UU. se considera ilegal. El Sitio Web no acepta Usuarios ubicados en los Estados Unidos o con ciudadanía estadounidense. Este Sitio Web no es responsable de las acciones de los clientes ubicados o con ciudadanía estadounidense. Los clientes ubicados dentro de los Estados Unidos o con ciudadanía estadounidense asumen toda la responsabilidad por sus acciones y decisiones al usar productos y servicios de este Sitio Web. En cualquier y todas las circunstancias la elección de utilizar el Sitio Web, el Servicio y/o el Software es bajo la total responsabilidad del Usuari, quien debe cumplir con la legislación vigente.",
            },
            ipRights: {
                heading: "Derechos de Propiedad Intelectual",
                p1: "Los derechos de autor del Contenido pertenecen tanto al Operador como a sus socios, y no pueden almacenarse, copiarse o modificarse en ningún formato, venderse o utilizarse de ninguna manera bajo ninguna circunstancia, distribuirse o transferirse de ninguna manera sin el permiso especial del Operador. La información, módulos, patentes, divulgaciones de patentes, solicitudes de patentes y todos los derechos sobre invenciones (patentables o no), marcas comerciales, nombres comerciales, derechos de autor, métodos, conocimientos técnicos, código informático (incluido el código HTML, el código de software original, el código fuente, el código objeto), nombres de dominio de Internet y registres y solicitudes de registro de los mismos junto con todo el fondo de comercio asociado, algoritmos, métodos comerciales, interfaces de usuario, diseño gráfico y software, arquitectura de software, algoritmos, estructuras de datos; y todos los desarrollos, derivados y mejoras de los mismos, independientemente de si están registrados o no, y todos los otros derechos de propiedad intelectual de todo tipo y naturaleza en todo el mundo y como se designen, ya sea que surjan por ley, contrato, licencia o de otra manera, y todos los registres, aplicaciones, renovaciones, extensiones, continuaciones, divisiones o reedicions de los mismos ahora o en el futuro (colectivamente denominados «Propiedad Intelectual»), son propiedad exclusiva del Operador, sus sucursales, sus sucesores y cesionarios, son controlados y licenciados por él, así como/o por terceros que han otorgado al Operador una licencia para usar dicha propiedad intelectual.",
                p2: "El Operador otorga al Usuari una licencia personal, revocable, limitada, no exclusiva, gratuita y no transferible para usar el Sitio Web, el Software y el Contenido solo para uso personal. La licencia no permite al Usuari modificar, copiar, almacenar, reproducir, republicar, cargar, publicar, transferir, licenciar, subllicenciar, display, arrendar, vender, usar o distribuir de ninguna manera ningún dato, propiedad intelectual o material, proporcionado por el Operador a través del Sitio Web de ninguna manera no expresamente permitida por estos Términos. Cualquier alteración, recompilación, traducción, creación de obras derivadas, desensamblaje, publicación, eliminación, alteración de cualquier aviso o etiqueta de propiedad, para proporcionar intereses protectores o usar el Sitio Web de cualquier manera no expresamente permitida en este documento para el Usuari o cualquier tercero.",
                p3: "No puede utilizar ningún «enlace profundo», «borrado de página», «robot», «araña» u otro dispositivo automático, programa, script, algoritmo o metodología o cualquier proceso manual similar o equivalente para acceder, recibir, copiar o controlar cualquier parte del Sitio Web o en cualquier manera reproducir o eludir la estructura de navegación o la presentación del Sitio Web para recibir o intentar recibir cualquier material, documento o información por cualquier medio, intencionalmente disponible a través del Sitio Web, o intentar obtener acceso no autorizado a cualquier parte o función del sitio web, incluyendo, sin limitación, la cuenta de cualquier usuario(s), cualquier otro sistema o red conectado al sitio web o sus servidores, a cualquiera de los servicios ofrecidos en o a través del Sitio Web, piratería, «minería» de contraseñas o cualquier otro método ilegal o prohibido, o investigar, escanear o probar la vulnerabilidad del Sitio Web o cualquier red conectada al Sitio Web, y no violar las medidas de seguridad o autenticación en el Sitio Web o en cualquier red conectada al Sitio Web, o buscar a la inversa, rastrear o intentar rastrear cualquier información sobre cualquier usuario o visitante del Sitio Web, o tomar cualquier acción que cree una carga irrazonable o desproporcionadamente grande en la infraestructura del Sitio Web, sistema, redes o cualquier sistema o red asociado con él, o usar cualquier dispositivo, software o procedimiento para interferir con el funcionamiento normal del Sitio Web o las transacciones realizadas en el Sitio Web o el uso del Sitio Web por cualquier otra persona, o falsificar encabezados, pretender ser otra persona o manipular de otra manera los identificadores para ocultar la verdadera identidad u origen de cualquier mensaje o transmisión enviada hacia o desde el Operador en el Sitio Web, o usar el Sitio Web para recopilar direcciones de correo electrónico u otra información de contacto o personal, o anunciar, compartir la marca, la marca privada, usar el nombre, el logotipo o un nombre similar del Operador en otro dominio, distribuir, revender o permitir de otra manera que terceros accedan al Sitio Web y lo utilicen, en su totalidad o en parte, sin el permiso explícito, separado y previo por escrito del Operador, o usar el Sitio Web de cualquier otra manera ilegal o de una manera que pueda percibirse como causante de daño, humillación u otro impacto negativo en el Operador. Intentar el uso no autorizado de este Sitio Web puede constituir un delito. El Operador se reserva el derecho de ver, rastrear y registrar acciones en el Sitio Web, incluyendo, sin limitación, mediante el archivo de notificaciones o mensajes enviados por el Usuari a través del Sitio Web. Además, el Operador se reserva el derecho de cambiar, suspender, terminar o interrumpir el trabajo o el acceso al Sitio Web o cualquier parte del mismo en cualquier momento y sin previo aviso para proteger el Sitio Web o las actividades del Operador.",
            },
            limitationOfLiability: {
                heading: "Limitación de Responsabilidad",
                p1: "El Usuari asume la total responsabilidad y riesgo por el uso del Sitio Web, el Contenido y el Software. El Operador proporciona el Sitio Web, el Contenido y el Software y la información relacionada en la forma en que se encuentran y no otorga ninguna garantía, representación o respaldo expreso o implícito.",
                p2: "El Operador rechaza cualquier violación en relación con el Sitio Web, el Servicio, el Software, cualquier información o información de terceros o enlaces proporcionados a ellos. El Operador no es responsable de ningún costo o daño que surja directa o indirectamente como resultado de dicha transacción.",
                p3: "El Operador bajo ninguna circunstancia será responsable ante ninguna parte por pérdidas directas, indirectas, implícitas, punitivas, especiales, incidentales u otras pérdidas indirectas que surjan directa o indirectamente del uso del Sitio Web, el Contenido y el Software que se proporciona tal cual, y sin ninguna garantía.",
                p4: "El uso del Sitio Web, el Contenido y el Software es bajo el propio riesgo y responsabilidad del Usuari.",
                p5: "Cualquier reclamo de compensación por pérdidas, de una forma u otra, no puede ser aplicable al Operador; bajo ninguna circunstancia el Operador será responsable por pérdidas (incluidas pérdidas directas, indirectas, consecuentes o especiales), incluso si se le informa de la posibilidad que tales pérdidas surjan como resultado de su uso o dependencia personal de este Sitio Web.",
                p6: "El Anunciante sigue siendo el único y total responsable de cualquier violación en relación con el Contenido de los materiales publicitarios, la precisión y/o calidad de la información, Productos y/o Servicios, Software y para cualquier parte de los mismos, por cualquier pérdida directa, indirecta, implícita, punitiva, especial, incidental o otras pérdidas indirectas que surjan directa o indirectamente de cualquier uso del Sitio Web, Contenido de materiales publicitarios, información y/o Software.",
                p7: "Any claims for compensation for losses, one way or another, or any other claims and/or complaints in relation to the Website, Content of advertising materials, accuracy and/or quality of information, Products and/or Services, Software shall be raised and/or filed to the Advertiser.",
                p8: "The quality, non-violation, accuracy, completeness or reliability of any third-party materials, programs, products displayed on such a third-party website or which you can access through a link to such a website is not confirmed in any way by the Operator, and the Operator does not give any guarantees regarding of this.",
                p9: "The Operator expressly disclaims responsibility for the content, materials, accuracy and/or quality of information, products and/or services available or advertised on these third-party websites. All communication or relations between the User and a third party occur exclusively between the User and such third party and in no way affect the Operator.",
            },
            other: {
                heading: "Otros",
                p1: "Si el Operador no puede insistir o garantizar la estricta implementación de cualquier disposición de estos Términos, esto debe interpretarse como una renuncia a cualquier disposición o derecho en acuerdo con estos Términos o legislación.",
                p2: "Las relaciones legales establecidas de acuerdo con estos Términos se regirán e interpretarán de acuerdo con las leyes de Hong Kong.",
                p3: "La fecha de uso real del Sitio Web por parte del Usuari es la fecha de regulación de las relaciones entre el Usuari y el Operador. Los derechos y obligaciones de las partes se ejercen al registrarse el Usuari.",
                p4: "El Operador puede transferir sus derechos y obligaciones de acuerdo con estos Términos a cualquier parte y en cualquier momento sin notificar al Usuari. El Usuari no tiene derecho y no puede ceder ningún derecho u obligación del Usuari a terceros sin el consentimiento previo por escrito del Operador. Estos Términos constituyen el acuerdo completo entre el Usuari y el Operador con respecto al uso del Sitio Web.",
                p5: "Las siguientes disposiciones permanecen en vigor después de la terminación de estos Términos: derechos de propiedad intelectual, limitación de responsabilidad y cualquier otra disposición de estos Términos que por su naturaleza permanezcan en vigor después de la terminación de este Términos.",
                p6: "Estos Términos pueden ser modificados o complementados por el Operador unilateralmente de vez en cuando. La nueva edición de los Términos entra en vigor desde el momento de su publicación en el Sitio Web. Si el Usuari no está de acuerdo con los nuevos Términos, él/ella deja de usar el Sitio Web y el Servicio.",
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
        disclaimerFull: `IMPORTANT: Income and Legal Disclaimers. The income and earnings graphs created by smartbitboost.io, also known as "This Website", are used solely as ideal illustrations of your earning potential. The success of individuals in testimonials and other examples are exceptional results, and therefore are not intended to guarantee that you or others will achieve the same. Individual results will depend on how you use smartbitboost.io. For whatever you do, this website has no responsibility. You should always act with caution and due diligence because you assume full responsibility for your actions and decisions when using products and services. You agree that in no way will this website be responsible for the results of your use of our services. See our terms of use for information on our disclaimers and other restrictions. While trading can generate notable benefits, it also carries the risk of losing invested capital in part or in full, so you should consider whether you can afford to invest. ©2025USA REGULATORY NOTICE: Forex, CFD, and cryptocurrency trading is not under any US regulation. Cryptocurrency investment is not regulated or supervised by any US or financial agency. Any unregulated trading by US residents is considered illegal. This website does not accept US clients or US citizens. This website has no responsibility for the actions of clients located in or with US citizenship. Clients located within the United States or with US citizenship bear sole responsibility for their actions and decisions when using products and services from this Website. In any and all circumstances, the choice to use the Website, the Service and/or the Software is under the sole responsibility of the User, who must comply with current legislation.`,
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
                p10: "Trading Forex, CFDs and Cryptocurrencies is not regulated within the United States. Invest in Crypto is not supervised or regulated by any financial agencies nor US agencies. Any unregulated trading activity by U.S. residents is considered unlawful. The Website does not accept User located within the United States or holding an American citizenship. This Website is not responsible for actions of customers located within the United States or holding an American citizenship. Customers located within the United States or holding an American citizenship bear sole responsibility for their actions and decisions when using products and services from this Website. In any and all circumstances, the choice to use the Website, the Service and/or the Software is under full responsibility of User, who must comply with the current legislation.",
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
        masterTradingTitle: "DOMINA EL TRADING DE CRIPTOMONEDES AMB LA NOSTRA",
        masterTradingHighlight: "EINA D'INVERSIÓ D'IA AMB UNA PRECISIÓ DEL 99.4%",
        ctaParagraph1:
            "Imagina una nova vida en què la feina esdevingui opcional, els estalvis ja no siguin necessaris i totes les teves factures es paguin sense esforç. Imagina la llibertat d'explorar, planificar un cotxe nou o fins i tot tenir una casa.",
        ctaParagraph2:
            "Ara imagina't mirant la pantalla del teu telèfon intel·ligent i sent testimoni d'un altre guany de 1.000$ sense esforç avui mateix. Sona atractiu, oi?",
        ctaParagraph3:
            "Coin Sin Limited ho fa possible. Com a plataforma d'inici impulsada per IA, empoderem els nous inversors perquè se submergeixin en el món de les inversions en criptomonedes, independentment de la seva experiència prèvia. En començar amb una inversió de només 250 €, pots aprofitar l'oportunitat de multiplicar els teus guanys diaris per x5.",
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
            "Les criptomonedes brinden l'oportunitat de diversificar la seva cartera d'inversions. Proporcionen una classe d'actius alternativa que és independent dels mercats financers tradicionals. Invertir en criptomonedes ajuda a diversificar el risc i a protegir la cartera de possibles influències negatives en una àrea.",
        focusOnPlatformTitle: "Centrem-nos ara en la plataforma Coin Sin Limited.",
        focusOnPlatformText1:
            "Per què la intel·ligència artificial (IA) és fonamental per al mercat d'inversió? La IA és més ràpida que el cervell humà i pot analitzar dades amb precisió, sempre que el sistema estigui configurat correctament. L'aprenentatge automàtic té tres avantatges significatius en el mercat d'inversió.",
        focusOnPlatformText2:
            "A més, la intel·ligència artificial opera en el mercat les 24/7 ara. Significa coneixement de la situació global en temps real, acumulació de coneixements sobre patrons i creació immediata d'estratègies rendibles. La plataforma Coin Sin Limited ofereix una rendibilitat eficaç d'assolir per als humans. És qüestió de temps que les màquines assumeixin plenament aquesta funció.",
        focusOnPlatformText3:
            "Un altre factor que fa atractiva la inversió al Canadà, Austràlia i altres països és l'educació. Moltes persones senten que un humà pot prendre decisions influït per les emocions, una màquina roman objectiva i racional. És fonamental no s'oblidin les emocions. Segregar la racionalitat de l'emoció és fonamental, però un realitzat en l'esfera de la inversió, on tot es decideix basant-se en dades pures i previsions exactes.",
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
            "Així, la intel·ligència artificial garanteix la rendibilitat de la inversió en assegurar una eficàcia dels sistemes de almenys el 95%. La precisió depèn del sistema específic, però pot assolir per als humans entre el 95% i el 99,4%. L'eficiència dels nostres instruments de negociació basats en algoritmes Coin Sin Limited és del 99,4%.",
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
            "Els temps no són fàcils, i tot al nostre voltant va a poc a poc cap avall. Encara que la situació pot millorar en el futur, tothom hauria d'ocupar-se avui del seu futur per no dependre de factors externs. Les eines intel·ligents poden ajudar-lo amb això.",
        investSmartText2:
            "La plataforma d'inversió Coin Sin Limited li permet fer-ho sense perdre temps estudiant el mercat de divises digitals. Pot començar a invertir avui mateix en països com el Canadà, Austràlia i altres. L'èxit està precalculat, i tot el que necessita és el desig d'unir-se.",
        algorithmToolsIntro: "L'algoritme li proporciona les eines per ajudar-lo:",
        tool1: "Evitar riscos i pèrdues innecessàries.",
        tool2: "Obtenir ingressos gairebé totalment passius.",
        tool3: "Treballar en el mercat amb una àmplia diversificació de la cartera i una reducció paral·lela del risc.",
        tool4: "Recibir ingressos estables tant a curt com a llarg termini.",
        finalInvitation:
            "Per tant, el convidem a començar a escriure la primera pàgina de la seva història d'un inversor d'èxit avui després de llegir la revisió de Coin Sin Limited!",
        potentialEarningsTitle: "QUINS GUANYS POTENCIALS PUC ESPERAR EN INVERTIR AMB COIN SIN LIMITED?",
        myInvestment: "La meva inversió:",
        usagePeriod: "Període d'ús:",
        days: "dies",
        potentialProfit: "Guany Potencial",
        startInvestingNowButton: "Començar a Invertir Ara!",
        disclaimer:
            "* Els resultats mostrats són estimacions basades en el rendiment històric de la plataforma. Les inversions comporten riscos.",
        demoAccountTitle: "PROVA EL COMPTE DE DEMOSTRACIÓ DE COIN SIN LIMITED",
        demoAccountText1:
            "Sent-te lliure de l'alt cost d'entrada al món de la inversió! No necessites gastar desenes de milers de dòlars per entendre el comerç de criptomonedes, com funciona i què has de fer per evitar pèrdues. T'oferim l'oportunitat d'invertir fins i tot uns pocs dòlars.",
        demoAccountText2:
            "Prova una eina sense riscos per a un comerç rendible! Registra't, diposita almenys 250 € i obtén el teu primer benefici avui mateix. Simplement desplaça't fins a la part inferior de la pàgina i registra't.",
        notScamTitle: "COIN SIN LIMITED NO ÉS UNA ESTAFA, I AQUÍ TENIU PER QUÈ",
        notScamText1:
            "És un projecte d'inversió automatitzat que ofereix l'oportunitat de guanyar diners invertint en criptomonedes populars i projectes prometedors en el món dels actius digitals. El sistema està controlat per enginyers informàtics i corredors registrats a CySEC. Corredors autoritzats duen a terme els processos financers en el sistema.",
        notScamText2:
            "Els usuaris tenen accés a un compte de demostració virtual on poden avaluar sense riscos les capacitats del sistema abans d'invertir fons reals. La protecció de l'usuari és el principal requisit del projecte. Els certificats SSL i l'encriptació multicapa protegeixen de forma fiable totes les dades personals.",
        notScamText3:
            "Per seguretat, es recomana tancar la sessió després de cada ús i evitar la connexió al sistema des de xarxes públiques.",
        notScamText4:
            "Coin Sin Limited ofereix beneficis màxims i guanys sense riscos, i presenta proves de no frau. També trobareu opinions sobre Coin Sin Limited a continuació.",
        testimonialsTitle: "DESCOBREIX EL QUE DIUEN ELS MEMBRES DE",
        testimonialsHighlight: "COIN SIN LIMITED",
        testimonialsTitle2: "SOBRE AQUESTA PLATAFORMA DE TRADING:",
        tradingEasyTitle: "TRADING AMB COIN SIN LIMITED ÉS",
        tradingEasyHighlight: "100% FÀCIL I CÒMODE!",
        tradingEasyIntro:
            "En enviar el formulari a continuació amb la teva informació precisa en aquesta pàgina web, desbloquejaràs ràpidament l'accés sense restriccions al nostre sistema de comerç d'IA altament fiable, dedicat i imparcial. Uneix-te als més de 2.500 inversors astuts que ja s'estan beneficiant de les seves capacitats.",
        featureAiSelectionsTitle: "SELECCIONS D'INVERSIÓ EXCLUSIVAMENT RENDIBLES REALITZADES PER IA",
        featureAiSelectionsText:
            "Enrere queden els dies en què les inversions estaven reservats per als rics. El nostre avançat sistema informàtic analitza meticulosament la liquiditat, la volatilitat i el volum d'operacions, la qual cosa garanteix decisions d'inversió òptimes. Gaudeix d'ingressos constants al teu compte a través d'accions d'empreses de primer nivell, recolzades per una impressionant garantia de precisió comercial del 99.4%.",
        featureAutoTradingTitle: "FUNCIONALITAT DE COMERÇ AUTOMÀTIC IMPECABLE",
        featureAutoTradingText:
            "Experimenta la conveniència de la nostra funció de trading automàtic, que et permet generar guanys sense esforç, fins i tot quan no estiguis al teu lloc de treball. No es requereix experiència comercial! Simplement fes la teva inversió inicial i observa com el saldo del teu compte creix constantment.",
        featureSupportTitle: "SUPORT COMPLET A L'USUARI",
        featureSupportText:
            "Com a membre valuós de Coin Sin Limited, el nostre amable gerent d'atenció al client està a la teva disposició, llest per atendre qualsevol consulta o inquietud que puguis tenir.",
        featureCommunityTitle: "ACCÉS EXCLUSIU A UNA COMUNITAT ÚNICA",
        featureCommunityText:
            "Uneix-te a la nostra prestigiosa comunitat Coin Sin Limited i obtén una membresia privilegiada. Considera't afortunat d'haver trobat l'oportunitat de registrar. Tingues en compte que, a causa de les limitacions de capacitat del sistema, només podem enviar invitacions a un nombre selecte d'usuaris. Aprofita aquesta oportunitat per resoldre els teus problemes econòmics d'una vegada per totes.",
        createAccountButton: "Crea el teu compte!",
        howToStartTitle: "COM",
        howToStartHighlight: "COMENÇAR?",
        step1Title: "REGISTRE: COMPLETA EL FORMULARI A CONTINUACIÓ",
        step1Description:
            "El formulari de registre està en aquesta pàgina. Completa el formulari per convertir-te en membre. Una vegada que el teu registre sigui aprovat, automàticament et convertiràs en un nou participant de Coin Sin Limited.",
        step2Title: "DEPOSITA 250 € O MÉS",
        step2Description:
            "Com en qualsevol empresa, necessites un capital inicial. L'avantatge de la plataforma Coin Sin Limited és que només requereix una modesta inversió inicial. Simplement diposita 250 € o més per començar a guanyar diners.",
        step3Title: "ESTIGUES ATENT AL TEU TELÈFON... PODRIES REBRE UNA TRUCADA!",
        step3Description:
            "Després de realitzar un pagament, el nostre gerent es posarà en contacte amb tu per confirmar-ho tot i activar el teu compte. Si tens alguna pregunta, el gerent et proporcionarà respostes detallades per ajudar-te. Tingues en compte que la trucada pot provenir d'un número no identificat.",
        faqTitle: "PREGUNTES",
        faqHighlight: "FREQUENTS",
        finalSectionTitle: "APROFITA L'OPORTUNITAT DE CONVERTIR-TE EN UN INVERSOR INTEL·LIGENT AVUI I...",
        finalSectionSubtitle: "...DESENCADENA UN MÓN DE POSSIBILITATS, AMB UN MÍNIM DE 1.000 $ AL TEU COMPTE CADA DIA!",
        finalSectionText:
            "Actua ara proporcionant el teu nom complet i correu electrònic al formulari a continuació, i desbloqueja l'oportunitat més excepcional i exclusiva per generar ingressos substancials sense esforç. Deixa que la IA s'encarregui de la feina dura mentre tu obtens beneficis tangibles a l'instant. No t'ho perdis!",
        footerCompanyInfo:
            "Coin Sin Limited és una empresa especialitzada en proporcionar informació i eines per a la inversió i el trading de criptomonedes, basada en intel·ligència artificial.",
        footerContactanos: "Contacta'ns",
        footerPrivacidad: "Privadesa",
        footerTerminos: "Termes",
        footerDescargo: "Exempció de responsabilitat",
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
        disclaimerFull: `IMPORTANT: Exempcions de Responsabilitat d'Ingressos i Legals. Les gràfiques d'ingressos i guanys creades per smartbitboost.io, també conegut com "Aquest Lloc Web", s'utilitzen únicament com a il·lustracions ideals del teu potencial de guanys. L'èxit de les persones en testimonis i altres exemples són resultats excepcionals, per la qual cosa no estan destinats a garantir que tu o altres aconsegueixin el mateix. Els resultats individuals dependran de com utilitzis smartbitboost.io. Per la qual cosa facis, aquest lloc web no té responsabilitat. Sempre has d'actuar amb precaució i diligència deguda perquè assumeixes tota la responsabilitat per les teves accions i decisions en utilitzar productes i serveis. Acceptes que de cap manera aquest lloc web serà responsable dels resultats del teu ús dels nostres serveis. Consulta els nostres termes d'ús per obtenir informació sobre les nostres exempcions de responsabilitat i altres restriccions. Si bé el comerç pot generar beneficis notables, també comporta el risc de perdre el capital invertit en part o en la seva totalitat, per la qual cosa has de considerar si pots permetre't invertir. ©2025AVÍS DE REGULACIÓ ALS EUA: El comerç de Forex, CFDs i criptomonedes no està sota cap regulació nord-americana. La inversió en criptomonedes no està regulada ni supervisada per cap agència financera o dels EUA. Qualsevol comerç que no sigui regulat per residents nord-americans es considera il·legal. Aquest lloc web no accepta clients nord-americans o ciutadans nord-americans. Aquest lloc web no té responsabilitat per les accions dels clients ubicats o amb ciutadania nord-americana. Els clients ubicats dins dels Estats Units o amb ciutadania nord-americana assumeixen tota la responsabilitat per les seves accions i decisions en utilitzar productes i serveis d'aquest Lloc Web. En qualsevol i totes les circumstàncies, l'elecció d'utilitzar el Lloc Web, el Servei i/o el Programari és sota la total responsabilitat de l'Usuari, qui ha de complir amb la legislació vigent.`,
        termsOfUseContent: {
            title: "Termes d'Ús del Lloc Web",
            effectiveDate: "Aquests Termes entren en vigor el 23 de gener de 2021.",
            generalProvisions: {
                heading: "Disposicions Generals",
                p1: "En utilitzar smartbitboost.io (d'ara endavant «Lloc Web»), accepteu complir amb aquests termes d'ús del Lloc Web, que regeixen els drets i obligacions entre el propietari del domini en què es troba aquest Lloc Web (d'ara endavant «Operador»), i vosaltres com a Usuari d'aquest Lloc Web (d'ara endavant «Vostè» o «Usuari»).",
                p2: "Aquest domini pertany a l'Operador en base a la propietat, la gestió operativa d'aquest Lloc Web publicitari és realitzada únicament per l'Operador. El Lloc Web us proporciona informació sobre els serveis i productes del nostre(s) soci(s) (d'ara endavant, l'/els «Anunciant(s)»). El Lloc Web us permet a vosaltres, com a Usuari d'aquest Lloc Web, sol·licitar els productes o serveis de l'Anunciant utilitzant els seus llocs web (d'ara endavant, el «Servei»). Els termes d'ús del Lloc Web es regeixen pels termes d'ús del Lloc Web, que es publiquen al Lloc Web (d'ara endavant, els “Termes”).",
                p3: "El Lloc Web actua com a plataforma d'informació en línia i inclou un servei que permet a l'Usuari enviar sol·licituds de Productes i/o Serveis de l'Anunciant que s'anuncien al Lloc Web o utilitzant els llocs web de l'Anunciant (d'ara endavant «Servei») a través de la seva plataforma de seguiment (d'ara endavant «Programari»).",
                p4: "L'Operador només facilita la comunicació entre el proveïdor de productes i/o serveis i l'Usuari. L'Operador no és un proveïdor de cap servei i/o producte.",
                p5: "En enviar qualsevol informació, accepteu els termes d'ús del Lloc Web, sota els quals us proporcionem informació, amb la finalitat de processar la vostra sol·licitud per celebrar un acord entre vosaltres i l'Anunciant per a la compra de serveis o béns anunciats al Lloc Web o utilitzant els llocs web de l'Anunciant.",
            },
            websiteContent: {
                heading: "Contingut del Lloc Web",
                p1: "Tots els materials, inclosos bàners, materials de vídeo i altres continguts mostrats al Lloc Web (d'ara endavant, el «Contingut») es proporcionen exclusivament amb finalitats publicitàries i informatives i no s'han d'utilitzar per a altres finalitats; tots els materials estan destinats únicament a la imitació o modelatge. El Contingut pot no ser precís i no basar-se en esdeveniments o fets reals precisos; no obstant això, tota la informació percebuda del Contingut en forma visual, oral o escrita no és assessorament financer, legal, fiscal o altre assessorament professional i no pretén reemplaçar la consulta amb un professional qualificat. L'Operador no ofereix garanties ni declaracions respecte a l'aplicabilitat, precisió, idoneïtat o integritat del Contingut; la informació que conté està destinada únicament a finalitats informatives i publicitàries, i s'han de tenir en compte totes les reserves presentades anteriorment. Per tant, basant-se en l'anterior, si voleu utilitzar i aplicar el Programari, assumiu la total responsabilitat de les vostres accions. Cap declaració s'ha d'interpretar com a assessorament d'inversió o recomanacions, suggeriments o ofertes per comprar o vendre qualsevol tipus de valors i/o instruments financers o altres productes i/o serveis.",
                p2: "Tots els resultats presentats en la metodologia i/o sistema que està disponible en el Contingut no indiquen necessàriament resultats futurs. No s'atorguen garanties ni es fan declaracions que qualsevol Usuari rebrà o podrà rebre guanys o pèrdues similars a les indicades en el Contingut. L'execució passada de qualsevol sistema o estratègia que pugui mostrar-se en el Contingut no demostra realment l'execució i els resultats futurs que es poden aconseguir. Recomanem enfàticament que consulteu amb el vostre assessor expert abans d'invertir o intercanviar qualsevol instrument financer. Recomanem encaridament que consulteu amb el vostre assessor personal que tingui suficients habilitats professionals abans d'invertir o intercanviar qualsevol instrument financer.",
                p3: "L'Usuari és degudament notificat, comprèn i reconeix que l'Operador no està autoritzat a oferir cap recomanació legal, comptable, d'inversió o fiscal, o recomanacions respecte a l'estratègia d'inversió, idoneïtat, rendibilitat o altres qüestions.",
            },
            serviceUsage: {
                heading: "Ús del Servei",
                p1: "Per registrar-se al Lloc Web, és possible que necessiteu un nom, cognom, adreça de correu electrònic, número de telèfon i contrasenya. Només un usuari autoritzat pot tenir un compte; no es permet el registre de diversos comptes registrats per la mateixa persona física o jurídica i pot comportar el tancament per part de l'Operador de tots els comptes que l'Operador consideri necessaris. L'ús del Servei és voluntari i gratuït.",
                p2: "En utilitzar el Lloc Web, consentiu que la vostra identificació i contrasenya es mantinguin confidencials i accepteu no utilitzar el compte d'un altre usuari autoritzat.",
                p3: "L'Operador no és responsable de cap pèrdua o dany resultant del vostre incompliment d'aquestes obligacions, no és responsable de cap dany causat per robatori, pirateria o qualsevol altre ús no autoritzat de la vostra contrasenya, dades d'identificació o altres mitjans d'identificació.",
                p4: "Durant el registre, l'Usuari està obligat a proporcionar a l'Operador informació veritable, precisa i completa en registrar-se omplint el formulari de registre del Lloc Web. L'Usuari accepta complir amb totes les lleis i regulacions locals, estatals, nacionals i internacionals pertinents respecte a l'ús del Lloc Web, el Servei i/o el Programari. A més, l'Usuari reconeix i accepta que l'ús d'Internet i l'accés o la transferència o connexió al Lloc Web és enterament sota el seu propi risc.",
                p5: "En cas de qualsevol violació, l'Operador no és responsable de la seguretat de cap informació transmesa cap o des del Lloc Web. L'Usuari assumeix tota la responsabilitat en relació amb les accions relacionades amb el seu ús del Lloc Web, incloent, però no limitat a, el manteniment o la còpia de seguretat de qualsevol dada.",
                p6: "L'Operador realitza tots els esforços comercialment raonables per fer que el Programari i/o el Servei estiguin disponibles per a l'Usuari. L'Usuari reconeix que alguns components del Servei i/o Programari poden ser proporcionats per un tercer, i per tant hi pot haver retards, errors, mal funcionament, retard de dades, etc., que l'Operador no pot controlar. L'Operador no pot donar cap garantia i no assumeix cap responsabilitat pels casos en què el Servei i/o el Programari no estiguin ininterromputs o lliures d'errors, o que els defectes en el Servei i/o el Programari siguin corregits.",
                p7: "L'Operador rep qualsevol dada personal d'acord amb la Política de Privadesa. L'Usuari accepta llegir i acceptar la Política de Privadesa abans d'enviar qualsevol dada personal en aquest Lloc Web. L'Usuari reconeix que l'ús del Lloc Web i l'ús del Servei requereixen l'ús de les seves dades personals.",
                p8: "Qualsevol Usuari accepta llegir i acceptar la Política de Privadesa abans d'enviar qualsevol dada personal en aquest Lloc Web, en cas que l'Usuari s'assabenti d'una violació o possible violació de seguretat en relació amb qualsevol dada personal proporcionada a l'Operador, o sobre qualsevol pirateria no autoritzada del Lloc Web, l'Usuari haurà de:",
                list1: [
                    "1) notificar immediatament a l'Operador d'aquesta violació o possible violació;",
                    "2) proporcionar assistència a l'Operador si és raonablement necessari per prevenir o eliminar qualsevol dita violació;",
                    "3) permet a l'Operador complir amb qualsevol llei aplicable que requereixi informes d'una violació de seguretat que condueixi a qualsevol violació relacionada amb la identificació de dades personals.",
                ],
                p9: "Encara que el Lloc Web pot ser accessible a tot el món, no totes les funcions o Serveis oferts al Lloc Web són adequats o disponibles per a ús en tots els països. L'Operador es reserva el dret de limitar, a la seva discreció, la provisió i quantitat de qualsevol funció o Servei a qualsevol persona o regió geogràfica. De qualsevol manera l'elecció d'utilitzar el Lloc Web, el Servei i/o el Programari és sota total responsabilitat de l'Usuari, qui ha de complir amb la legislació vigent.",
                p10: "Trading Forex, CFDs i Criptomonedes no està regulat als Estats Units. Invertir en Cripto no està supervisat ni regulat per cap agència financera ni dels EUA. Qualsevol activitat comercial no regulada per residents dels EUA es considera il·legal. El Lloc Web no accepta Usuaris ubicats als Estats Units o amb ciutadania nord-americana. Aquest Lloc Web no és responsable de les accions dels clients ubicats als Estats Units o amb ciutadania nord-americana. Els clients ubicats dins dels Estats Units o amb ciutadania nord-americana assumeixen tota la responsabilitat per les seves accions i decisions en utilitzar productes i serveis d'aquest Lloc Web. En qualsevol i totes les circumstàncies l'elecció d'utilitzar el Lloc Web, el Servei i/o el Programari és sota la total responsabilitat de l'Usuari, qui ha de complir amb la legislació vigent.",
            },
            ipRights: {
                heading: "Drets de Propietat Intel·lectual",
                p1: "Els drets d'autor del Contingut pertanyen tant a l'Operador com als seus socis, i no es poden emmagatzemar, copiar o modificar en cap format, vendre o utilitzar de cap manera sota cap circumstància, distribuir o transferir de cap manera sense permís especial de l'Operador. La informació, mòduls, patents, divulgacions de patents, sol·licituds de patents i tots els drets sobre invencions (patentables o no), marques comercials, noms comercials, drets d'autor, mètodes, coneixements tècnics, codi informàtic (inclòs el codi HTML, el codi de programari original, el codi font, el codi objecte), noms de domini d'Internet i registres i sol·licituds de registre dels mateixos juntament amb tot el fons de comerç associat, algoritmes, mètodes comercials, interfícies d'usuari, disseny gràfic i programari, arquitectura de programari, algoritmes, estructures de dades; i tots els desenvolupaments, derivats i millores d'ells, independentment de si estan registrats o no, i tots els altres drets de propietat intel·lectual de tota mena i naturalesa a tot el món i com es designin, ja sigui que sorgeixin per llei, contracte, llicència o d'altra manera, i tots els registres, aplicacions, renovacions, extensions, continuacions, divisions o reedicions dels mateixos ara o en el futur (col·lectivament denominats «Propietat Intel·lectual»), són propietat exclusiva de l'Operador, les seves sucursals, els seus successors i cessionaris, són controlats i llicenciats per ell, així com/o per tercers que han atorgat a l'Operador una llicència per utilitzar aquesta propietat intel·lectual.",
                p2: "L'Operador proporciona a l'Usuari una llicència personal, revocable, limitada, no exclusiva, gratuïta i no transferible per utilitzar el Lloc Web, el Programari i el Contingut només per a ús personal. La llicència no permet a l'Usuari modificar, copiar, emmagatzemar, reproduir, republicar, carregar, publicar, transferir, llicenciar, subllicenciar, mostrar, arrendar, vendre, utilitzar o distribuir de cap manera cap dada, propietat intel·lectual o material, proporcionat per l'Operador a través del Lloc Web de cap manera no expressament permesa per aquests Termes. Qualsevol alteració, recompilació, traducció, creació de qualsevol obra derivada, desassemblatge, publicació, eliminació, alteració de qualsevol avís o etiqueta de propietat, per proporcionar interessos protectors o utilitzar el Lloc Web de qualsevol manera no expressament permesa en aquest document per a l'Usuari o qualsevol tercer.",
                p3: "No podeu utilitzar cap «enllaç profund», «esborrat de pàgina», «robot», «aranya» o altre dispositiu automàtic, programa, script, algoritme o metodologia o qualsevol procés manual similar o equivalent per accedir, rebre, copiar o controlar qualsevol part del Lloc Web o de qualsevol manera reproduir o eludir l'estructura de navegació o la presentació del Lloc Web per rebre o intentar rebre qualsevol material, document o informació per qualsevol mitjà, intencionadament disponible a través del Lloc Web, o intentar obtenir accés no autoritzat a qualsevol part o funció del lloc web, incloent, sense limitació, el compte de qualsevol usuari(s), qualsevol altre sistema o xarxa connectada al lloc web o els seus servidors, a qualsevol dels serveis oferts en o a través del Lloc Web, pirateria, «mineria» de contrasenyes o qualsevol altre mètode il·legal o prohibit, o investigar, escanejar o provar la vulnerabilitat del Lloc Web o qualsevol xarxa connectada al Lloc Web, i no violar les mesures de seguretat o autenticació al Lloc Web o a qualsevol xarxa connectada al Lloc Web, o buscar a la inversa, rastrejar o intentar rastrejar qualsevol informació sobre qualsevol usuari o visitant del Lloc Web, o prendre qualsevol acció que creï una càrrega irraonable o desproporcionadament gran en la infraestructura del Lloc Web, sistema, xarxes o qualsevol sistema o xarxa associat amb ell, o utilitzar qualsevol dispositiu, programari o procediments per interferir amb el funcionament normal del Lloc Web o les transaccions realitzades al Lloc Web o l'ús del Lloc Web per qualsevol altra persona, o falsificar capçaleres, pretendre ser una altra persona o manipular d'una altra manera els identificadors per ocultar la veritable identitat o origen de qualsevol missatge o transmissió enviada cap o des de l'Operador al Lloc Web, o utilitzar el Lloc Web per recopilar adreces de correu electrònic o altra informació de contacte o personal, o anunciar, compartir la marca, la marca privada, utilitzar el nom, el logotip o un nom similar de l'Operador en un altre domini, distribuir, revendre o permetre d'una altra manera que tercers accedeixin al Lloc Web i l'utilitzin, en la seva totalitat o en part, sense el permís explícit, separat i previ per escrit de l'Operador, o utilitzar el Lloc Web de qualsevol altra manera il·legal o d'una manera que pugui percebre's com a causant de dany, humiliació o altre impacte negatiu en l'Operador. Intentar l'ús no autoritzat d'aquest Lloc Web pot constituir un delicte. L'Operador es reserva el dret de veure, rastrejar i registrar accions al Lloc Web, incloent, sense limitació, mitjançant l'arxiu de notificacions o missatges enviats per l'Usuari a través del Lloc Web. A més, l'Operador es reserva el dret de canviar, suspendre, terminar o interrompre el treball o l'accés al Lloc Web o qualsevol part del mateix en qualsevol moment i sense previ avís per protegir el Lloc Web o les activitats de l'Operador.",
            },
            limitationOfLiability: {
                heading: "Limitació de Responsabilitat",
                p1: "L'Usuari assumeix la total responsabilitat i risc per l'ús del Lloc Web, el Contingut i el Programari. L'Operador proporciona el Lloc Web, el Contingut i el Programari i la informació relacionada en la forma en què es troba i no atorga cap garantia, representació o suport exprés o implícit.",
                p2: "L'Operador rebutja qualsevol violació en relació amb el Lloc Web, el Servei, el Programari, qualsevol informació o informació de tercers o enllaços proporcionats a ells. L'Operador no és responsable de cap cost o dany que sorgeixi directament o indirectament com a resultat d'aquesta transacció.",
                p3: "L'Operador sota cap circumstància serà responsable davant de cap part per pèrdues directes, indirectes, implícites, punitives, especials, incidentals o altres pèrdues indirectes que sorgeixin directament o indirectament de qualsevol ús del Lloc Web, el Contingut i el Programari que es proporciona tal qual, i sense cap garantia.",
                p4: "L'ús del Lloc Web, el Contingut i el Programari és sota el propi risc i responsabilitat de l'Usuari.",
                p5: "Qualsevol reclamació de compensació per pèrdues, d'una forma o altra, no pot ser aplicable a l'Operador; sota cap circumstància l'Operador serà responsable per pèrdues (incloent pèrdues directes, indirectes, conseqüents o especials), fins i tot si se le informa de la possibilitat que aquestes pèrdes sorgeixin com a resultat del seu ús o dependència personal d'aquest Lloc Web.",
                p6: "L'Anunciant segueix sent l'únic i total responsable de qualsevol violació en relació amb el Contingut dels materials publicitaris, la precisió i/o qualitat de la informació, Productes i/o Serveis, Programari i per a qualsevol part d'ells, per qualsevol pèrdua directa, indirecta, implícita, punitiva, especial, incidental o altres pèrdues indirectes que sorgeixin directament o indirectament de qualsevol ús del Lloc Web, Contingut de materials publicitaris, informació i/o Programari.",
                p7: "Any claims for compensation for losses, one way or another, or any other claims and/or complaints in relation to the Website, Content of advertising materials, accuracy and/or quality of information, Products and/or Services, Software shall be raised and/or filed to the Advertiser.",
                p8: "The quality, non-violation, accuracy, completeness or reliability of any third-party materials, programs, products displayed on such a third-party website or which you can access through a link to such a website is not confirmed in any way by the Operator, and the Operator does not give any guarantees regarding of this.",
                p9: "The Operator expressly disclaims responsibility for the content, materials, accuracy and/or quality of information, products and/or services available or advertised on these third-party websites. All communication or relations between the User and a third party occur exclusively between the User and such third party and in no way affect the Operator.",
            },
            other: {
                heading: "Altres",
                p1: "Si l'Operador no pot insistir o garantir la estricta implementació de qualsevol disposició d'aquests Termes, això s'ha d'interpretar com una renúncia a qualsevol disposició o dret d'acord amb aquests Termes o legislació.",
                p2: "Les relacions legals establertes d'acord amb aquests Termes es regiran i interpretaran d'acord amb les lleis de Hong Kong.",
                p3: "La data d'ús real del Lloc Web per part de l'Usuari és la data de regulació de les relacions entre l'Usuari i l'Operador. Els drets i obligacions de les parts s'exerceixen en registrar-se l'Usuari.",
                p4: "L'Operador pot transferir els seus drets i obligacions d'acord amb aquests Termes a qualsevol part i en qualsevol moment sense notificar a l'Usuari. L'Usuari no té dret i no pot cedir cap dret o obligació de l'Usuari a tercers sense el consentiment previ per escrit de l'Operador. Aquests Termes constitueixen l'acord complet entre l'Usuari i l'Operador respecte a l'ús del Lloc Web.",
                p5: "Les següents disposicions romanen en vigor després de la terminació d'aquests Termes: drets de propietat intel·lectual, limitació de responsabilitat i qualsevol altra disposició d'aquests Termes que per la seva naturalesa romanen en vigor després de la terminació d'aquests Termes.",
                p6: "Aquests Termes poden ser modificats o complementats per l'Operador unilateralment de tant en tant. La nova edició dels Termes entra en vigor des del moment de la seva publicació al Lloc Web. Si l'Usuari no està d'acord amb els nous Termes, ell/ella deixa d'utilitzar el Lloc Web i el Servei.",
                p7: "La comunicació escrita o les relacions comercials entre les parts també inclouen la comunicació o les relacions comercials per correu electrònic sense signatura electrònica, a menys que es disposi expressament el contrari en el present. En cas que alguna part o disposició d'aquests Termes es consideri il·legal o ineficaç per qualsevol raó, ni la validesa ni la resta es veuran afectades.",
                copyright: "Copyright © 2025 product | Tots els drets reservats",
            },
        },
    },
    it: {
        notification:
            "Agisci ora! Coin Sin Limited sta accelerando i guadagni dei partecipanti! Assicurati il tuo posto prima che l'invito privato scada!",
        platformBenefit: "Beneficio NETTO Utenti:",
        userIncome: "Nuovi utenti ad oggi",
        mainTitle: "Guadagni intelligenti ogni giorno per la tua nuova",
        mainTitleHighlight: "vita senza stress per sempre",
        subtitle: "I nostri utenti di solito fanno x2, x5 e persino x10 sugli investimenti",
        readyToJoin: "PRONTO AD UNIRTI? INIZIA LA TUA REGISTRAZIONE AL SISTEMA QUI E ORA.",
        motivationalText:
            "HAI DIRITTO ALL'INDIPENDENZA FINANZIARIA, E NON È UN PRIVILEGIO. È UN TUO DIRITTO, INDIPENDENTEMENTE DALLA TUA ETÀ, DAI TUOI RISULTATI E DALLO STATUS SOCIALE.",
        playVideo: "Riproduci Video",
        pauseVideo: "Metti in Pausa Video",
        improveLife: "MIGLIORA LA TUA VITA OGGI",
        namePlaceholder: "Il tuo nome",
        surnamePlaceholder: "Il tuo cognome",
        emailPlaceholder: "La tua email",
        phonePlaceholder: "9 11 2345-6789",
        registerButton: "Registrami",
        searchCountry: "Cerca paese...",
        termsText: "Registrandoti, accetti e sei d'accordo con i termini d'uso e la Politica sulla privacy del sito.",
        privacyText:
            "I tuoi dati sono sempre protetti con Coin Sin Limited. Completando questo modulo, accetti di ricevere le nostre email di marketing. Puoi cambiare idea in qualsiasi momento cliccando sul link di annullamento iscrizione in fondo a qualsiasi nostra email.",
        registrationSuccessTitle: "Grazie Mille per la Registrazione!",
        noCountriesFound: "Nessun paese trovato",
        masterTradingTitle: "DOMINA IL TRADING DI CRIPTOVALUTE CON IL NOSTRO",
        masterTradingHighlight: "STRUMENTO DI INVESTIMENTO AI CON UNA PRECISIONE DEL 99.4%",
        ctaParagraph1:
            "Immagina una nuova vita in cui il lavoro diventi facoltativo, i risparmi non siano più necessari e tutte le tue bollette siano pagate senza sforzo. Immagina la libertà di esplorare, pianificare una nuova auto o persino possedere una casa.",
        ctaParagraph2:
            "Ora immagina di guardare lo schermo del tuo smartphone e di assistere a un altro guadagno di 1.000$ senza sforzo oggi stesso. Sembra allettante, vero?",
        ctaParagraph3:
            "Coin Sin Limited lo rende possibile. Come piattaforma di avvio basata sull'IA, diamo potere ai nuovi investitori di immergersi nel mondo degli investimenti in criptovalute, indipendentemente dalla loro esperienza precedente. Iniziando con un investimento di soli 250 €, puoi cogliere l'opportunità di moltiplicare i tuoi guadagni giornalieri per x5.",
        ctaParagraph4:
            "Pronto a unirti a noi? Segui le istruzioni su questa pagina e intraprendi il tuo emozionante viaggio verso una vita stabile e senza preoccupazioni, piena di abbondanti piaceri!",
        startNowButton: "Inizia ora",
        advantagesTitle:
            "VANTAGGI DI INVESTIRE IN VALUTE POPOLARI E INFORMAZIONI ESSENZIALI SULLA PIATTAFORMA COIN SIN LIMITED",
        advantagesIntro:
            "Investire in valute digitali è un'opzione attraente per gli investitori. Le criptovalute riuniscono tutte le caratteristiche necessarie per offrire una liquidità stabile. Due fattori chiave determinano i benefici di questo tipo di investimenti:",
        growthPotentialTitle: "Potenziale di crescita:",
        growthPotentialText:
            "Alcune criptovalute hanno già raggiunto un valore significativo, ma molti progetti hanno un grande potenziale di sviluppo. A causa della loro crescente popolarità, il mercato delle criptovalute attrae investitori che possono ottenere alti rendimenti investendo in asset digitali.",
        diversificationTitle: "Diversificazione del portafoglio:",
        diversificationText:
            "Le criptovalute offrono l'opportunità di diversificare il tuo portafoglio di investimenti. Forniscono una classe di asset alternativa che è indipendente dai mercati finanziari tradizionali. Investire in criptovalute aiuta a diversificare il rischio e a proteggere il portafoglio da possibili influenze negative in un'area.",
        focusOnPlatformTitle: "Concentriamoci ora sulla piattaforma Coin Sin Limited.",
        focusOnPlatformText1:
            "Perché l'intelligenza artificiale (IA) è fondamentale per il mercato degli investimenti? L'IA è più veloce del cervello umano e può analizzare i dati con precisione, a condizione che il sistema sia configurato correttamente. L'apprendimento automatico ha tre vantaggi significativi nel mercato degli investimenti.",
        focusOnPlatformText2:
            "Inoltre, l'intelligenza artificiale opera sul mercato 24 ore su 24, 7 giorni su 7. Ciò significa conoscenza della situazione globale in tempo reale, accumulo di conoscenze sui modelli e creazione immediata di strategie redditizie. La piattaforma Coin Sin Limited offre una redditività efficace da raggiungere per gli esseri umani. È solo questione di tempo prima che le macchine assumano pienamente questa funzione.",
        focusOnPlatformText3:
            "Un altro fattore che rende attraente l'investimento in Canada, Australia e altri paesi è l'educazione. Molte persone sentono che un essere umano può prendere decisioni influenzato dalle emozioni, una macchina rimane obiettiva e razionale. È fondamentale non dimenticare le emozioni. Separare la razionalità dall'emozione è fondamentale, ma una realizzazione nella sfera degli investimenti, dove tutto è deciso sulla base di dati puri e previsioni esatte.",
        focusOnPlatformText4:
            "Inoltre, investire prima di ottenere un reddito è significativamente diverso. Prima che una persona inizi a ottenere un reddito, spende una quantità significativa di denaro in test, il che ha benefici, oltre ad acquisire esperienza situazionale e consapevolezza dell'investimento. Al contrario, una macchina si occupa di questo molto più velocemente e richiede un esborso minimo per massimizzare il reddito.",
        nineReasonsIntro:
            "Quindi, abbiamo nove ragioni principali per cui l'utilizzo della piattaforma Coin Sin Limited è vantaggioso, specialmente per i trader principianti:",
        reason1:
            "I nostri strumenti di trading elaborano grandi quantità di dati in modo rapido ed efficiente, consentendoti di prendere decisioni precise.",
        reason2:
            "Il software basato sull'intelligenza artificiale fornisce un'analisi avanzata del mercato con dati e previsioni accurate.",
        reason3:
            "L'intelligenza artificiale si adatta alle attuali condizioni di mercato, suggerendo le migliori strategie di investimento.",
        reason4:
            "Investire con un sistema basato sull'intelligenza artificiale non è influenzato da errori umani e fornisce informazioni oggettive.",
        reason5: "Investire usando una macchina è più economico che prendere decisioni umane e genera più profitti.",
        reason6:
            "L'intelligenza artificiale richiede un investimento iniziale inferiore, il che aumenta l'efficienza dell'investimento.",
        reason7:
            "Investire con strumenti basati sull'intelligenza artificiale rende gli investimenti accessibili in Canada, Australia e altri paesi.",
        reason8: "L'uso dell'intelligenza artificiale aumenta la velocità del processo decisionale.",
        reason9:
            "L'intelligenza artificiale fornisce un processo decisionale più rapido per intraprendere migliori azioni di investimento.",
        efficiencyGuarantee:
            "Così, l'intelligenza artificiale garantisce la redditività dell'investimento assicurando un'efficacia dei sistemi di almenno il 95%. La precisione dipende dal sistema specifico, ma può raggiungere per gli esseri umani tra il 95% e il 99,4%. L'efficienza dei nostri strumenti di negoziazione basati su algoritmi Coin Sin Limited è del 99,4%.",
        platformBenefitTitle: "COIN SIN LIMITED È UNA PIATTAFORMA CHE LAVORA A BENEFICIO DELL'INVESTITORE",
        platformBenefitText1:
            "Per gli investitori alle prime armi, investire in criptovalute può essere incredibilmente complicato. Spesso, i principianti devono comprendere tutti i segreti di questo campo per non perdere i loro piccoli investimenti nel minor tempo possibile. Questo li porta a perdere interesse per le criptovalute e per gli investimenti in generale. Tuttavia, devono rendersi conto delle potenziali opportunità che stanno perdendo.",
        platformBenefitText2:
            "La piattaforma Coin Sin Limited consente loro di realizzare i loro sogni di reddito passivo stabile. Basato sull'intelligenza artificiale, questo algoritmo lavora continuamente, analizzando la situazione del mercato, studiando le tendenze delle criptovalute ed eseguendo operazioni che quasi sempre risultano redditizie. Migliaia di persone in tutto il mondo hanno già generato miliardi di dollari con Coin Sin Limited.",
        platformFeaturesTitle: "Le caratteristiche della piattaforma Coin Sin Limited includono:",
        feature1:
            "Una profonda conoscenza del mercato delle criptovalute e delle tendenze nel mondo degli asset digitali che sono al di fuori della portata della mente umana.",
        feature2:
            "Il supercomputer può calcolare milioni di variazioni ogni secondo e prevedere le tendenze con la massima precisione.",
        feature3: "Operazioni sicure con profitti per l'investitore.",
        platformUnnoticedText:
            "La piattaforma Coin Sin Limited è passata inosservata al momento del lancio del prodotto. Tuttavia, sta provocando l'ira e il panico di banche centrali e governi di tutto il mondo. Mentre i grandi attori cercano di fermare il progetto della piattaforma Coin Sin Limited, tu puoi iniziare a guadagnare molti soldi ora.",
        investSmartTitle: "INVESTI IN CRIPTOVALUTE IN MODO INTELLGENTE CON LA PIATTAFORMA COIN SIN LIMITED",
        investSmartText1:
            "I tempi non sono facili, e tutto intorno a noi sta lentamente andando giù. Anche se la situazione potrebbe migliorare in futuro, tutti dovrebbero occuparsi oggi del proprio futuro per non dipendere da fattori esterni. Gli strumenti intelligenti possono aiutarti in questo.",
        investSmartText2:
            "La piattaforma di investimento Coin Sin Limited ti consente di farlo senza perdere tempo a studiare il mercato delle valute digitali. Puoi iniziare a investire oggi stesso in paesi come Canada, Australia e altri. Il successo è precalcolato, e tutto ciò di cui hai bisogno è il desiderio di unirti.",
        algorithmToolsIntro: "L'algoritmo ti fornisce gli strumenti per aiutarti:",
        tool1: "Evitare rischi e perdite inutili.",
        tool2: "Ottenere un reddito quasi totalmente passivo.",
        tool3: "Lavorare sul mercato con un'ampia diversificazione del portafoglio e una parallela riduzione del rischio.",
        tool4: "Ricevere un reddito stabile sia a breve che a lungo termine.",
        finalInvitation:
            "Pertanto, ti invitiamo a iniziare a scrivere la prima pagina della tua storia di un investitore di successo oggi dopo aver letto la recensione de Coin Sin Limited!",
        potentialEarningsTitle: "QUALI GUADAGNI POTENZIALI POSSO ASPETTARMI INVESTENDO CON COIN SIN LIMITED?",
        myInvestment: "Il mio investimento:",
        usagePeriod: "Periodo di utilizzo:",
        days: "giorni",
        potentialProfit: "Profitto Potenziale",
        startInvestingNowButton: "Inizia a Investire Ora!",
        disclaimer:
            "* I risultati mostrati sono stime basate sulla performance storica della piattaforma. Gli investimenti comportano rischi.",
        demoAccountTitle: "PROVA L'ACCOUNT DEMO DI COIN SIN LIMITED",
        demoAccountText1:
            "Sentiti libero dall'alto costo di ingresso nel mondo degli investimenti! Non hai bisogno di spendere decine di migliaia di dollari per capire il trading di criptovalute, come funziona e cosa devi fare per evitare perdite. Ti offriamo l'opportunità di investire anche pochi dollari.",
        demoAccount2:
            "Prova uno strumento senza rischi per un trading redditizio! Registrati, deposita almeno €250 e ottieni il tuo primo profitto oggi stesso. Scorri semplicemente fino alla fine della pagina e registrati.",
        notScamTitle: "COIN SIN LIMITED NON È UNA TRUFFA, ED ECCO PERCHÉ",
        notScamText1:
            "È un progetto di investimento automatizzato che offre l'opportunità di guadagnare denaro investendo in criptovalute popolari e progetti promettenti nel mondo degli asset digitali. Il sistema è controllato da ingegneri informatici e broker registrati presso CySEC. Broker autorizzati eseguono i processi finanziari nel sistema.",
        notScamText2:
            "Gli utenti hanno accesso a un account demo virtuale dove possono valutare senza rischi le capacità del sistema prima di investire fondi reali. La protezione dell'utente è il requisito principale del progetto. I certificati SSL e la crittografia multilivello proteggono in modo affidabile tutti i dati personali.",
        notScamText3:
            "Per sicurezza, si consiglia di disconnettersi dopo ogni utilizzo ed evitare di connettersi al sistema da reti pubbliche.",
        notScamText4:
            "Coin Sin Limited offre massimi benefici e guadagni senza rischi, e presenta prove di non frode. Troverai anche recensioni su Coin Sin Limited qui sotto.",
        testimonialsTitle: "SCOPRI COSA DICONO I MEMBRI DI",
        testimonialsHighlight: "COIN SIN LIMITED",
        testimonialsTitle2: "SU QUESTA PIATTAFORMA DI TRADING:",
        tradingEasyTitle: "IL TRADING CON COIN SIN LIMITED È",
        tradingEasyHighlight: "100% FACILE E CONFORTEVOLE!",
        tradingEasyIntro:
            "Inviando il modulo sottostante con le tue informazioni accurate su questa pagina web, sbloccherai rapidamente l'accesso illimitato al nostro sistema di trading AI altamente affidabile, dedicato e imparziale. Unisciti agli oltre 2.500 investitori astuti che stanno già beneficiando delle sue capacità.",
        featureAiSelectionsTitle: "SELEZIONI DI INVESTIMENTO ESCLUSIVAMENTE REDDITIZIE REALIZZATE DALL'AI",
        featureAiSelectionsText:
            "Sono finiti i giorni in cui gli investimenti erano riservati ai ricchi. Il nostro avanzato sistema informatico analizza meticolosamente liquidità, volatilità e volume di trading, garantendo decisioni di investimento ottimali. Goditi un reddito costante sul tuo conto tramite azioni di aziende di prim'ordine, supportate da un'impressionante garanzia di precisione di trading del 99.4%.",
        featureAutoTradingTitle: "FUNZIONALITÀ DI TRADING AUTOMATICO IMPECCABILE",
        featureAutoTradingText:
            "Sperimenta la comodità della nostra funzione di trading automatico, che ti consente di generare profitti senza sforzo, anche quando non sei alla tua postazione di lavoro. Nessuna esperienza di trading richiesta! Effettua semplicemente il tuo investimento iniziale e osserva il saldo del tuo conto crescere costantemente.",
        featureSupportTitle: "SUPPORTO UTENTE COMPLETO",
        featureSupportText:
            "Come membro prezioso di Coin Sin Limited, il nostro amichevole responsabile del servizio clienti è a tua disposizione, pronto a rispondere a qualsiasi domanda o preoccupazione tu possa avere.",
        featureCommunityTitle: "ACCESSO ESCLUSIVO A UNA COMUNITÀ UNICA",
        featureCommunityText:
            "Unisciti alla nostra prestigiosa comunità Coin Sin Limited e ottieni un'iscrizione privilegiata. Considerati fortunato di aver trovato l'opportunità di registrarti. Tieni presente che, a causa delle limitazioni di capacità del sistema, possiamo inviare inviti solo a un numero selezionato di utenti. Approfitta di questa opportunità per risolvere i tuoi problemi finanziari una volta per tutte.",
        createAccountButton: "Crea il tuo account!",
        howToStartTitle: "COME",
        howToStartHighlight: "INIZIARE?",
        step1Title: "REGISTRAZIONE: COMPLETA IL MODULO SOTTOSTANTE",
        step1Description:
            "Il modulo di registrazione si trova su questa pagina. Completa il modulo per diventare un membro. Una volta che la tua registrazione sarà approvata, diventerai automaticamente un nuovo partecipante di Coin Sin Limited.",
        step2Title: "DEPOSITA €250 O PIÙ",
        step2Description:
            "Come in ogni attività commerciale, hai bisogno di un capitale iniziale. Il vantaggio della piattaforma Coin Sin Limited è che richiede solo un modesto investimento iniziale. Deposita semplicemente €250 o più per iniziare a guadagnare denaro.",
        step3Title: "TIENI D'OCCHIO IL TUO TELEFONO... POTRESTI RICEVERE UNA CHIAMATA!",
        step3Description:
            "Dopo aver effettuato un pagamento, il nostro responsabile ti contatterà per confermare tutto e attivare il tuo account. Se hai domande, il responsabile ti fornirà risposte dettagliate per aiutarti. Tieni presente che la chiamata potrebbe provenire da un numero non identificato.",
        faqTitle: "DOMANDE",
        faqHighlight: "FREQUENTI",
        finalSectionTitle: "COGLI L'OPPORTUNITÀ DI DIVENTARE UN INVESTITORE INTELLIGENTE OGGI E...",
        finalSectionSubtitle: "...SCATENA UN MONDO DI POSSIBILITÀ, CON UN MINIMO DI $1.000 SUL TUO CONTO OGNI GIORNO!",
        finalSectionText:
            "Agisci ora fornendo il tuo nome completo e la tua email nel modulo sottostante, e sblocca l'opportunità più eccezionale ed esclusiva per generare un reddito sostanziale senza sforzo. Lascia che l'IA si occupi del lavoro duro mentre tu raccogli benefici tangibili all'istante. Non perdere l'occasione!",
        footerCompanyInfo:
            "Coin Sin Limited è un'azienda specializzata nella fornitura di informazioni e strumenti per l'investimento e il trading di criptovalute, basata sull'intelligenza artificiale.",
        footerContactanos: "Contattaci",
        footerPrivacidad: "Privacy",
        footerTerminos: "Termini",
        footerDescargo: "Disclaimer",
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
        disclaimerFull: `IMPORTANT: Esclusioni di Responsabilità su Guadagni e Legali. I grafici di reddito e guadagni creati da smartbitboost.io, noto anche come "Questo Sito Web", sono utilizzati unicamente come illustrazioni ideali del tuo potenziale di guadagno. Il successo degli individui nelle testimonianze e in altri esempi sono risultati eccezionali, e pertanto non sono intesi a garantire che tu o altri raggiungerete lo stesso. I risultati individuali dipenderanno da come utilizzi smartbitboost.io. Per qualsiasi cosa tu faccia, questo sito web non ha responsabilità. Dovresti sempre agire con cautela e dovuta diligenza perché ti assumi la piena responsabilità delle tue azioni e decisioni quando utilizzi prodotti e servizi. Accetti che in nessun modo questo sito web sarà responsabile dei risultati del tuo utilizzo dei nostri servizi. Consulta i nostri termini d'uso per informazioni sulle nostre esclusioni di responsabilità e altre restrizioni. Sebbene il trading possa generare benefici notevoli, comporta anche il rischio di perdere il capitale investito in parte o per intero, quindi dovresti considerare se puoi permetterti di investire. ©2025AVVISO DI REGOLAMENTAZIONE NEGLI USA: Il trading di Forex, CFD e criptovalute non è soggetto ad alcuna regolamentazione statunitense. L'investimento in criptovalute non è regolamentato o supervisionato da alcuna agenzia finanziaria o statunitense. Qualsiasi attività di trading non regolamentata da residenti statunitensi è considerata illegale. Questo sito web non accetta clienti statunitensi o cittadini statunitensi. Questo sito web non ha responsabilità per le azioni dei clienti situati negli Stati Uniti o con cittadinanza statunitense. I clienti situati negli Stati Uniti o con cittadinanza statunitense si assumono la piena responsabilità delle loro azioni e decisioni quando utilizzano prodotti e servizi di questo Sito Web. In ogni e qualsiasi circostanza, la scelta di utilizzare il Sito Web, il Servizio e/o il Software è sotto la piena responsabilità dell'Utente, che deve rispettare la legislazione vigente.`,
        termsOfUseContent: {
            title: "Termini di Utilizzo del Sito Web",
            effectiveDate: "Questi Termini entrano in vigore il 23 gennaio 2021.",
            generalProvisions: {
                heading: "Disposizioni Generali",
                p1: "Utilizzando smartbitboost.io (di seguito «Sito Web»), accetti di rispettare questi termini di utilizzo del Sito Web, che regolano i diritti e gli obblighi tra il proprietario del dominio su cui si trova questo Sito Web (di seguito «Operatore»), e tu come Utente di questo Sito Web (di seguito «Tu» o «Utente»).",
                p2: "Questo dominio appartiene all'Operatore in base alla proprietà, la gestione operativa di questo Sito Web pubblicitario è eseguita esclusivamente dall'Operatore. Il Sito Web ti fornisce informazioni sui servizi e prodotti del nostro/i partner/i (di seguito, l'/gli «Inserzionista/i»). Il Sito Web ti consente, come Utente di questo Sito Web, di richiedere i prodotti o servizi dell'Inserzionista utilizzando i suoi siti web (di seguito, il «Servizio»). I termini di utilizzo del Sito Web sono regolati dai termini di utilizzo del Sito Web, che sono pubblicati sul Sito Web (di seguito, i “Termini”).",
                p3: "Il Sito Web agisce come piattaforma di informazione online e include un servizio che consente all'Utente di inviare richieste di Prodotti e/o Servizi dell'Inserzionista che sono pubblicizzati sul Sito Web o utilizzando i siti web dell'Inserzionista (di seguito «Servizio») tramite la sua piattaforma di tracciamento (di seguito «Software»).",
                p4: "L'Operatore facilita solo la comunicazione tra il fornitore di prodotti e/o servizi e l'Utente. L'Operatore non è un fornitore di alcun servizio e/o prodotto.",
                p5: "Inviando qualsiasi informazione, accetti i termini di utilizzo del Sito Web, in base ai quali ti forniamo informazioni, al fine di elaborare la tua richiesta per la conclusione di un accordo tra te e l'Inserzionista per l'acquisto di servizi o beni pubblicizzati sul Sito Web o utilizzando i siti web dell'Inserzionista.",
            },
            websiteContent: {
                heading: "Contenuto del Sito Web",
                p1: "Tutti i materiali, inclusi banner, materiali video e altri contenuti visualizzati sul Sito Web (di seguito, il «Contenuto») sono forniti esclusivamente a scopo pubblicitario e informativo e non devono essere utilizzati per altri scopi; tutti i materiali sono destinati solo all'imitazione o alla modellazione. Il Contenuto potrebbe non essere accurato e non basato su eventi o fatti reali precisi; tuttavia, qualsiasi e tutte le informazioni percepite dal Contenuto in forma visiva, orale o scritta non sono consigli finanziari, legali, fiscali o altri consigli professionali e non sono intese a sostituire la consultazione con un professionista qualificato. L'Operatore non fornisce garanzie o dichiarazioni in merito all'applicabilità, accuratezza, idoneità o completezza del Contenuto; le informazioni in esso contenute sono destinate solo a scopi informativi e pubblicitari, e tutte le riserve presentate sopra dovrebbero essere prese in considerazione. Pertanto, in base a quanto precede, se desideri utilizzare e applicare il Software, ti assumi la piena responsabilità delle tue azioni. Nessuna dichiarazione deve essere interpretata come fornitura di consigli di investimento o raccomandazioni, suggerimenti o offerte per acquistare o vendere qualsiasi tipo di titoli e/o strumenti finanziari o altri prodotti e/o servizi.",
                p2: "Tutti i risultati presentati nella metodologia e/o sistema disponibile nel Contenuto non indicano necessariamente risultati futuri. Non vengono fornite garanzie, né vengono fatte dichiarazioni che qualsiasi Utente riceverà o potrà ricevere profitti o perdite simili a quelli indicati nel Contenuto. L'esecuzione passata di qualsiasi sistema o strategia che potrebbe essere visualizzata nel Contenuto non dimostra realmente l'esecuzione e i risultati futuri che potrebbero essere raggiunti. Ti consigliamo vivamente di consultare il tuo consulente esperto prima di investire o scambiare qualsiasi strumento finanziario. Ti consigliamo vivamente di consultare il tuo consulente personale che abbia sufficienti competenze professionali prima di investire o scambiare qualsiasi strumento finanziario.",
                p3: "L'Utente è debitamente notificato, comprende e riconosce che l'Operatore non è autorizzato a offrire raccomandazioni legali, contabili, di investimento o fiscali, o raccomandazioni in merito alla strategia di investimento, idoneità, redditività o altre questioni.",
            },
            serviceUsage: {
                heading: "Utilizzo del Servizio",
                p1: "Per registrarsi sul Sito Web, potrebbe essere necessario un nome, cognome, indirizzo email, numero di telefono e password. Solo un utente autorizzato può avere un account; la registrazione di più account registrati dalla stessa persona fisica o giuridica non è consentita e può portare alla chiusura da parte dell'Operatore di tutti gli account che l'Operatore ritenga necessari. L'uso del Servizio è volontario e gratuito.",
                p2: "Utilizzando il Sito Web, acconsenti a mantenere riservati la tua identificazione e password e accetti di non utilizzare l'account di un altro utente autorizzato.",
                p3: "L'Operatore non è responsabile per eventuali perdite o danni derivanti dalla tua inosservanza di questi obblighi, non è responsabile per eventuali danni causati da furto, hacking o qualsiasi altro uso non autorizzato della tua password, dati di identificazione o altri mezzi di identificazione.",
                p4: "Durante la registrazione, l'Utente è obbligato a fornire all'Operatore informazioni vere, accurate e complete al momento della registrazione compilando il modulo di registrazione del Sito Web. L'Utente accetta di rispettare tutte le leggi e i regolamenti locali, statali, nazionali e internazionali applicabili in merito all'uso del Sito Web, del Servizio e/o del Software. Inoltre, l'Utente riconosce e accetta che l'uso di Internet e l'accesso o il trasferimento o la connessione al Sito Web è interamente a suo rischio.",
                p5: "In caso di qualsiasi violazione, l'Operatore non è responsabile della sicurezza di alcuna informazione trasmessa da o verso il Sito Web. L'Utente si assume ogni responsabilità in relazione alle azioni relative al suo utilizzo del Sito Web, inclusi, ma non limitati a, il mantenimento o il backup di qualsiasi dato.",
                p6: "L'Operatore compie ogni ragionevole sforzo commerciale per rendere il Software e/o il Servizio disponibili all'Utente. L'Utente riconosce che alcuni componenti del Servizio e/o Software possono essere forniti da terzi, e quindi potrebbero esserci ritardi, errori, malfunzionamenti, ritardi dei dati, ecc., che l'Operatore non può controllare. L'Operatore non può fornire alcuna garanzia e non si assume alcuna responsabilità per i casi in cui il Servizio e/o il Software non siano ininterrotti o privi di errori, o che i difetti nel Servizio e/o nel Software vengano corretti.",
                p7: "L'Operatore riceve i dati personali in conformità con la Politica sulla Privacy. L'Utente accetta di leggere e accettare la Politica sulla Privacy prima di inviare qualsiasi dato personale su questo Sito Web. L'Utente riconosce che l'utilizzo del Sito Web e l'utilizzo del Servizio richiedono l'uso dei suoi dati personali.",
                p8: "Qualsiasi Utente accetta di leggere e accettare la Politica sulla Privacy prima di inviare qualsiasi dato personale su questo Sito Web, nel caso in cui l'Utente venga a conoscenza di una violazione o potenziale violazione della sicurezza in relazione a qualsiasi dato personale fornito all'Operatore, o di qualsiasi hacking non autorizzato del Sito Web, l'Utente dovrà:",
                list1: [
                    "1) notificare immediatamente l'Operatore di tale violazione o potenziale violazione;",
                    "2) fornire assistenza all'Operatore se ragionevolmente necessario per prevenire o eliminare tale violazione;",
                    "3) consente all'Operatore di rispettare qualsiasi legge applicabile che richieda la segnalazione di una violazione della sicurezza che porti a violazioni relative all'identificazione dei dati personali.",
                ],
                p9: "Sebbene il Sito Web possa essere accessibile in tutto il mondo, non tutte le funzioni o i Servizi offerti sul Sito Web sono adatti o disponibili per l'uso in tutti i paesi. L'Operatore si riserva il diritto di limitare, a sua discrezione, la fornitura e la quantità di qualsiasi funzione o Servizio a qualsiasi persona o regione geografica. In ogni caso, la scelta di utilizzare il Sito Web, il Servizio e/o il Software è sotto la piena responsabilità dell'Utente, che deve rispettare la legislazione vigente.",
                p10: "Il trading di Forex, CFD e Criptovalute non è regolamentato negli Stati Uniti. L'investimento in Cripto non è supervisionato o regolamentato da alcuna agenzia finanziaria o statunitense. Qualsiasi attività di trading non regolamentata da residenti statunitensi è considerata illegale. Questo Sito Web non accetta Utenti situati negli Stati Uniti o con cittadinanza americana. Questo Sito Web non è responsabile delle azioni dei clienti situati negli Stati Uniti o con cittadinanza americana. I clienti situati negli Stati Uniti o con cittadinanza americana si assumono la piena responsabilità delle loro azioni e decisioni quando utilizzano prodotti e servizi di questo Sito Web. In ogni e qualsiasi circostanza, la scelta di utilizzare il Sito Web, il Servizio e/o il Software è sotto la piena responsabilità dell'Utente, che deve rispettare la legislazione vigente.",
            },
            ipRights: {
                heading: "Diritti di Proprietà Intellettuale",
                p1: "Il copyright del Contenuto appartiene sia all'Operatore che ai suoi partner, e non possono essere archiviati, copiati o modificati in alcun formato, venduti o utilizzati in alcun modo in nessuna circostanza, distribuiti o trasferiti in alcun modo senza il permesso speciale dell'Operatore. Le informazioni, i moduli, i brevetti, le divulgazioni di brevetti, le domande di brevetto e tutti i diritti sulle invenzioni (brevettabili o meno), i marchi, i nomi commerciali, i diritti d'autore, i metodi, il know-how, il codice informatico (incluso il codice HTML, il codice software originale, il codice sorgente, il codice oggetto), i nomi di dominio Internet e le registrazioni e le domande di registrazione degli stessi insieme a tutto l'avviamento associato, gli algoritmi, i metodi commerciali, le interfacce utente, il design grafico e il software, l'architettura del software, gli algoritmi, le strutture dati; e tutti gli sviluppi, i derivati e i miglioramenti degli stessi, indipendentemente dal fatto che siano registrati o meno, e tutti gli altri diritti di proprietà intellettuale di ogni tipo e natura in tutto il mondo e comunque designati, sia che derivino da legge, contratto, licenza o altro, e tutte le registrazioni, le domande, i rinnovi, le estensioni, le continuazioni, le divisioni o le riemissioni degli stessi ora o in futuro (collettivamente denominati «Proprietà Intellettuale»), sono di piena proprietà dell'Operatore, delle sue filiali, dei suoi successori e cessionari, sono controllati e concessi in licenza da esso, nonché/o da terzi che hanno concesso all'Operatore una licenza per utilizzare tale proprietà intellettuale.",
                p2: "L'Operatore fornisce all'Utente una licenza personale, revocabile, limitata, non esclusiva, gratuita e non trasferibile per utilizzare il Sito Web, il Software e il Contenuto solo per uso personale. La licenza non consente all'Utente di modificare, copiare, archiviare, riprodurre, ripubblicare, caricare, pubblicare, trasferire, concedere in licenza, sublicenziare, visualizzare, noleggiare, vendere, utilizzare o distribuire in alcun modo dati, proprietà intellettuale o material, forniti dall'Operatore tramite il Sito Web in alcun modo non espressamente consentito da questi Termini. Qualsiasi alterazione, ricompilazione, traduzione, creazione di opere derivate, disassemblaggio, pubblicazione, eliminazione, alterazione di avvisi o etichette di proprietà, per fornire interessi protettivi o altrimenti utilizzare il Sito Web in alcun modo non espressamente consentito in questo documento per l'Utente o terzi.",
                p3: "Non è consentito utilizzare alcun «deep link», «cancellazione di pagina», «robot», «spider» o altro dispositivo automatico, programma, script, algoritmo o metodologia o qualsiasi processo manuale simile o equivalente per accedere, ricevere, copiare o controllare qualsiasi parte del Sito Web o in alcun modo riprodurre o aggirare la struttura di navigazione o la presentazione del Sito Web al fine di ricevere o tentare di ricevere materiali, documenti o informazioni con qualsiasi mezzo, intenzionalmente disponibili tramite il Sito Web, o tentare di ottenere accesso non autorizzato a qualsiasi parte o funzione del sito web, inclusi, senza limitazioni, l'account di qualsiasi utente/i, altri sistemi o reti collegati al sito web o ai suoi server, a qualsiasi servizio offerto su o tramite il Sito Web, hacking, «mining» di password o qualsiasi altro metodo illegale o proibito, o indagare, scansionare o testare la vulnerabilità del Sito Web o di qualsiasi rete collegata al Sito Web, e non violare le misure di sicurezza o autenticazione sul Sito Web o su qualsiasi rete collegata al Sito Web, o cercare al contrario, tracciare o tentare di tracciare qualsiasi informazione su qualsiasi utente o visitatore del Sito Web, o intraprendere qualsiasi azione che crei un carico irragionevole o sproporzionatamente grande sull'infrastruttura del Sito Web, del sistema, delle reti o di qualsiasi sistema o rete ad esso associato, o utilizzare qualsiasi dispositivo, software o procedura per interferire con il normale funzionamento del Sito Web o delle transazioni condotte sul Sito Web o l'uso del Sito Web da parte di qualsiasi altra persona, o falsificare intestazioni, fingere di essere un'altra persona o manipolare in altro modo gli identificatori per nascondere la vera identità o origine di qualsiasi messaggio o trasmissione inviata da o verso l'Operatore sul Sito Web, o utilizzare il Sito Web per raccogliere indirizzi email o altre informazioni di contatto o personali, o pubblicizzare, condividere il marchio, il marchio privato, utilizzare il nome, il logo o un nome simile dell'Operatore su un altro dominio, distribuire, rivendere o altrimenti consentire a terzi l'accesso al Sito Web e il suo utilizzo, in tutto o in parte, senza l'esplicita, separata e preventiva autorizzazione scritta dell'Operatore, o utilizzare il Sito Web in qualsiasi altro modo illegale o in un modo che possa essere percepito come causa di danno, umiliazione o altro impatto negativo sull'Operatore. Il tentativo di utilizzo non autorizzato di questo Sito Web può costituire un reato. L'Operatore si riserva il diritto di visualizzare, tracciare e registrare le azioni sul Sito Web, inclusi, senza limitazioni, l'archiviazione di notifiche o messaggi inviati dall'Utente tramite il Sito Web. Inoltre, l'Operatore si riserva il diritto di modificare, sospendere, terminare o interrompere il lavoro o l'accesso al Sito Web o a qualsiasi parte di esso in qualsiasi momento e senza preavviso al fine di proteggere il Sito Web o le attività dell'Operatore.",
            },
            limitationOfLiability: {
                heading: "Limitazione di Responsabilità",
                p1: "L'Utente si assume la piena responsabilità e il rischio per l'utilizzo del Sito Web, del Contenuto e del Software. L'Operatore fornisce il Sito Web, il Contenuto e il Software e le informazioni correlate nella forma in cui si trovano e non fornisce alcuna garanzia, dichiarazione o approvazione espressa o implicita.",
                p2: "L'Operatore declina ogni responsabilità in relazione al Sito Web, al Servizio, al Software, a qualsiasi informazione o informazione di terzi o ai collegamenti forniti ad essi. L'Operatore non è responsabile per eventuali costi o danni derivanti direttamente o indirettamente da tale transazione.",
                p3: "L'Operatore non sarà in nessun caso responsabile nei confronti di alcuna parte per perdite dirette, indirette, implicite, punitive, speciali, incidentali o altre perdite indirette derivanti direttamente o indirettamente dall'utilizzo del Sito Web, del Contenuto e del Software forniti così come sono, e senza alcuna garanzia.",
                p4: "L'utilizzo del Sito Web, del Contenuto e del Software è a rischio e responsabilità dell'Utente.",
                p5: "Qualsiasi richiesta di risarcimento per perdite, in un modo o nell'altro, potrebbe non essere applicabile all'Operatore; in nessun caso l'Operatore sarà responsabile per perdite (incluse perdite dirette, indirette, indirette o speciali), anche se informato della possibilità che tali perdite possano derivare dall'utilizzo o dalla dipendenza personale da questo Sito Web.",
                p6: "L'Inserzionista rimane l'unico e pieno responsabile per eventuali violazioni in relazione al Contenuto dei materiali pubblicitari, all'accuratezza e/o qualità delle informazioni, dei Prodotti e/o Servizi, del Software e per qualsiasi parte di essi, per eventuali perdite dirette, indirette, implicite, punitive, speciali, incidentali o altre perdite indirette derivanti direttamente o indirettamente da qualsiasi utilizzo del Sito Web, del Contenuto dei materiali pubblicitari, delle informazioni e/o del Software.",
                p7: "Any claims for compensation for losses, one way or another, or any other claims and/or complaints in relation to the Website, Content of advertising materials, accuracy and/or quality of information, Products and/or Services, Software shall be raised and/or filed to the Advertiser.",
                p8: "The quality, non-violation, accuracy, completeness or reliability of any third-party materials, programs, products displayed on such a third-party website or which you can access through a link to such a website is not confirmed in any way by the Operator, and the Operator does not give any guarantees regarding of this.",
                p9: "The Operator expressly disclaims responsibility for the content, materials, accuracy and/or quality of information, products and/or services available or advertised on these third-party websites. All communication or relations between the User and a third party occur exclusively between the User and such third party and in no way affect the Operator.",
            },
            other: {
                heading: "Altro",
                p1: "Se l'Operatore non è in grado di insistere o garantire la stretta attuazione di qualsiasi disposizione di questi Termini, ciò deve essere interpretato come una rinuncia a qualsiasi disposizione o diritto in conformità con questi Termini o la legislazione.",
                p2: "Le relazioni legali stabilite in conformità con questi Termini saranno regolate e interpretate in conformità con le leggi di Hong Kong.",
                p3: "La data di effettivo utilizzo del Sito Web da parte dell'Utente è la data di regolamentazione delle relazioni tra l'Utente e l'Operatore. I diritti e gli obblighi delle parti vengono esercitati al momento della registrazione dell'Utente.",
                p4: "L'Operatore può trasferire i suoi diritti e obblighi in conformità con questi Termini a qualsiasi parte e in qualsiasi momento senza notificare l'Utente. L'Utente non ha il diritto e non può cedere alcun diritto o obbligo dell'Utente a terzi senza il previo consenso scritto dell'Operatore. Questi Termini costituiscono l'intero accordo tra l'Utente e l'Operatore in merito all'utilizzo del Sito Web.",
                p5: "Le seguenti disposizioni rimangono in vigore dopo la risoluzione di questi Termini: diritti di proprietà intellettuale, limitazione di responsabilità e qualsiasi altra disposizione di questi Termini che per loro natura rimangono in vigore dopo la risoluzione di questi Termini.",
                p6: "Questi Termini possono essere modificati o integrati dall'Operatore unilateralmente di volta in volta. La nuova edizione dei Termini entra in vigore dal momento della loro pubblicazione sul Sito Web. Se l'Utente non è d'accordo con i nuovi Termini, smette di utilizzare il Sito Web e il Servizio.",
                p7: "La comunicazione scritta o le relazioni commerciali tra le parti includono anche la comunicazione o le relazioni commerciali via e-mail senza firma elettronica, salvo quanto espressamente previsto nel presente. Nel caso in cui una parte o una disposizione di questi Termini sia ritenuta illegale o inefficace per qualsiasi motivo, né la validità né il resto saranno influenzati.",
                copyright: "Copyright © 2025 prodotto | Tutti i diritti riservati",
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

type Locale = keyof typeof translations // Update Locale type to include 'ca' and 'it'

export default function TermsPage() {
    const [language, setLanguage] = useState<Locale>("es") // Use the updated Locale type
    const [countrySearch, setCountrySearch] = useState("") // Needed for Select component, even if not used for search on this page

    const t = translations[language]

    const handleLanguageChange = (newLanguage: string) => {
        setLanguage(newLanguage as Locale) // Cast to Locale
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
                                    <SelectItem value="ca">Catalan</SelectItem> {/* Updated Catalan */}
                                    <SelectItem value="it">🇮🇹 Italiano</SelectItem> {/* Updated Italian */}
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
