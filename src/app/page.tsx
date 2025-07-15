"use client"
import { useState, useMemo, useRef, useEffect } from "react"
import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Shield,
  Play,
  Info,
  User,
  Mail,
  Phone,
  Search,
  ChevronLeft,
  ChevronRight,
  Percent,
  Headphones,
  Users,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Calendar,
  Lock,
  DollarSign,
} from "lucide-react"
import { useFormState } from "react-dom"
import { submitRegistration } from "@/actions/submit-registration"
import { SubmitButton, SmallSubmitButton } from "@/components/ui/submit-button"

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
  },
  en: {
    notification:
      "Act now! Coin Sin Limited is accelerating participants' earnings! Secure your spot before the private invitation expires!",
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
    registerButton: "Register Me",
    searchCountry: "Search country...",
    termsText: "By registering, you accept and agree to the site's terms of use and Privacy Policy.",
    privacyText:
      "Your data is always protected with Coin Sin Limited. By completing this form, you agree to receive our marketing emails. You can change your mind at any time by clicking the unsubscribe link at the bottom of any of our emails.",
    registrationSuccessTitle: "Thank You for Registering!",
    noCountriesFound: "No countries found",
    masterTradingTitle: "MASTER CRYPTOCURRENCY TRADING WITH OUR",
    masterTradingHighlight: "AI INVESTMENT SYSTEM WITH 95.6% ACCURACY",
    ctaParagraph1:
      "Imagine a new life where work becomes optional, savings are no longer necessary, and all your bills are paid effortlessly. Imagine the freedom to explore, plan a new car, or even own a home.",
    ctaParagraph2:
      "Now imagine looking at your smartphone screen and witnessing another effortless €1,000 gain today. Sounds appealing, right?",
    ctaParagraph3:
      "Coin Sin Limited makes it possible. As an AI-powered startup platform, we empower new investors to dive into the world of cryptocurrency investments, regardless of their prior experience. By starting with an investment of just €250, you can seize the opportunity to multiply your daily earnings by x5.",
    ctaParagraph4:
      "Ready to join us? Follow the instructions on this page and embark on your exciting journey to a stable, worry-free life, full of abundant pleasures!",
    startNowButton: "Start Now",
    advantagesTitle:
      "ADVANTAGES OF INVESTING IN POPULAR CURRENCIES AND ESSENTIAL INFORMATION ABOUT THE COIN SIN LIMITED PLATFORM",
    advantagesIntro:
      "Investing in digital currencies is an attractive option for investors. Cryptocurrencies bring together all the necessary characteristics to offer stable liquidity. Two key factors determine the benefits of this type of investment:",
    growthPotentialTitle: "Growth Potential:",
    growthPotentialText:
      "Some cryptocurrencies have already reached significant value, but many projects have great development potential. Due to their growing popularity, the cryptocurrency market attracts investors who can obtain high returns by investing in digital assets.",
    diversificationTitle: "Portfolio Diversification:",
    diversificationText:
      "Cryptocurrencies provide an opportunity to diversify your investment portfolio. They provide an alternative asset class that is independent of traditional financial markets. Investing in cryptocurrencies helps diversify risk and protect the portfolio from potential negative influences in one area.",
    focusOnPlatformTitle: "Let's now focus on the Coin Sin Limited platform.",
    focusOnPlatformText1:
      "Why is artificial intelligence (AI) fundamental to the investment market? AI is faster than the human brain and can analyze data accurately, provided the system is configured correctly. Machine learning has three significant advantages in the investment market.",
    focusOnPlatformText2:
      "Furthermore, artificial intelligence operates in the market 24/7 now. It means real-time global situation awareness, knowledge accumulation about patterns, and immediate creation of profitable strategies. The Coin Sin Limited platform offers an effective profitability achievable by humans. It is a matter of time until machines fully assume this function.",
    focusOnPlatformText3:
      "Another factor that makes investing in Canada, Australia, and other countries attractive is education. Many people feel that a human can take decisions influenced by emotions, a machine remains objective and rational. It is essential not to forget emotions. Segregating rationality from emotion is fundamental, but a realization in the investment sphere, where everything is decided based on pure data and exact forecasts.",
    focusOnPlatformText4:
      "Additionally, investing before earning income is significantly different. Before a person starts earning income, they spend a significant amount of money on testing, which has benefits, in addition to gaining situational experience and investment awareness. In contrast, a machine handles this much faster and requires minimal outlay to maximize income.",
    nineReasonsIntro:
      "So, we have nine main reasons why using the Coin Sin Limited platform is beneficial, especially for beginner traders:",
    reason1:
      "Our trading tools process large amounts of data quickly and efficiently, allowing you to take accurate decisions.",
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
      "Coin Sin Limited ofereix màxims beneficis i guanys sense risc, i presenta proves de no frau. També trobaràs opinions sobre Coin Sin Limited a continuació.",
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
    finalSectionSubtitle: "...SCATENA UN MONDO DI POSSIBILITÀ, CON UN MINIMO DI 1.000€ SUL TUO CONTO OGNI GIORNO!",
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
    disclaimerFull: `IMPORTANT: Esclusioni di Responsabilità su Redditi e Legali. I grafici di reddito e guadagni creati da Coin Sin Limited, noto anche come "Questo Sito Web", sono utilizzati unicamente come illustrazioni ideali del tuo potenziale di guadagno. Il successo degli individui nelle testimonianze e in altri esempi sono risultati eccezionali, e pertanto non intendono garantire che tu o altri otterrete lo stesso. I risultati individuali dipenderanno da come utilizzi Coin Sin Limited. Per qualsiasi cosa tu faccia, questo sito web non ha responsabilità. Dovresti sempre agire con cautela e dovuta diligenza perché ti assumi la piena responsabilità delle tue azioni e decisioni quando utilizzi prodotti e servizi. Accetti che in nessun modo questo sito web sarà responsabile dei risultati del tuo utilizzo dei nostri servizi. Consulta i nostri termini d'uso per informazioni sulle nostre esclusioni di responsabilità e altre restrizioni. Sebbene el trading possa generare notevoli benefici, comporta anche il rischio di perdere il capitale investito en parte o per intero, quindi dovresti considerare se puoi permetterti di investire. ©2025AVVISO REGOLATORIO USA: Il trading de Forex, CFD e criptovalute non è soggetto ad alcuna regolamentazione USA. L'investimento in criptovalute non è regolamentato o supervisionato da alcuna agenzia finanziaria o USA. Qualsiasi trading non regolamentato da residenti USA è considerado ilegal. Este sitio web non accetta clienti o cittadini USA. Este sitio web non ha responsabilità per le azioni dei clienti situati o con cittadinanza statunitense. I clienti situati negli Stati Uniti o con cittadinanza statunitense si assumono la piena responsabilità delle loro azioni e decisioni quando utilizzano prodotti e servizi da este Sito Web. In qualsiasi circostanza, la scelta di utilizzare il Sito Web, el Servizio e/o el Programma è sotto la sola responsabilità dell'Utente, che deve rispettare la legislazione vigente.`,
  },
}
// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sofía",
    location: {
      es: "Buenos Aires, 35 años",
      en: "Buenos Aires, 35 years old",
      ca: "Buenos Aires, 35 anys",
      it: "Buenos Aires, 35 anni",
    },
    avatar: "/placeholder.svg?height=60&width=60",
    text: {
      es: "¡Increíble! Con Coin Sin Limited, mis ingresos han crecido exponencialmente. Antes, el trading me parecía complicado, pero la IA de esta plataforma lo hace todo tan sencillo. Ahora tengo la libertad financiera que siempre soñé. ¡Totalmente recomendado!",
      en: "Incredible! With Coin Sin Limited, my income has grown exponentially. Before, trading seemed complicated, but this platform's AI makes everything so simple. Now I have the financial freedom I always dreamed of. Totally recommended!",
      ca: "Increïble! Amb Coin Sin Limited, els meus ingressos han crescut exponencialment. Abans, el trading em semblava complicat, però la IA d'aquesta plataforma ho fa tot tan senzill. Ara tinc la llibertat financera que sempre vaig somiar. Totalment recomanat!",
      it: "Incredibile! Con Coin Sin Limited, i miei guadagni sono cresciuti esponenzialmente. Prima, il trading mi sembrava complicato, ma l'IA di questa piattaforma lo fa tutto così semplice. Ora ho la libertà finanziaria che ho sempre sognato. Assolutamente consigliato!",
    },
  },
  {
    id: 2,
    name: "Ricardo",
    location: {
      es: "Ciudad de México, 48 años",
      en: "Mexico City, 48 years old",
      ca: "Ciutat de Mèxic, 48 anys",
      it: "Città del Messico, 48 anni",
    },
    avatar: "/placeholder.svg?height=60&width=60",
    text: {
      es: "Después de años de trabajo duro, buscaba una forma de asegurar mi jubilación. Coin Sin Limited ha sido la solución. La automatización y la precisión de la IA me permiten generar ganancias sin estrés. Es la mejor decisión financiera que he tomado.",
      en: "After years of hard work, I was looking for a way to secure my retirement. Coin Sin Limited has been the solution. The automation and AI precision allow me to generate profits without stress. It's the best financial decision I've ever taken.",
      ca: "Després d'anys de feina dura, buscava una forma d'assegurar la meva jubilació. Coin Sin Limited ha estat la solució. L'automatització i la precisió de la IA em permeten generar guanys sense estrès. És la millor decisió financera que he pres.",
      it: "Dopo anni di duro lavoro, cercavo un modo per assicurarmi la pensione. Coin Sin Limited è stata la soluzione. L'automazione e la precisione dell'IA mi permettono di generare profitti senza stress. È la migliore decisione finanziaria che abbia mai preso.",
    },
  },
  {
    id: 3,
    name: "Elena",
    location: { es: "Bogotá, 29 años", en: "Bogota, 29 years old", ca: "Bogotà, 29 anys", it: "Bogotà, 29 anni" },
    avatar: "/placeholder.svg?height=60&width=60",
    text: {
      es: "Como estudiante, necesitaba ingresos extra sin sacrificar mis estudios. Coin Sin Limited me ha dado esa oportunidad. Dedico solo unos minutos al día y veo cómo mi cuenta crece. Es una herramienta poderosa para cualquiera que quiera mejorar sus finanzas.",
      en: "As a student, I needed extra income without sacrificing my studies. Coin Sin Limited has given me that opportunity. I dedicate only a few minutes a day and watch my account grow. It's a powerful tool for anyone looking to improve your finances.",
      ca: "Com a estudiant, necessitava ingressos extra sense sacrificar els meus estudis. Coin Sin Limited m'ha donat aquesta oportunitat. Dedico només uns minuts al dia i veig com el meu compte creix. És una eina poderosa per a qualsevol que vulgui millorar les seves finances.",
      it: "Come studente, avevo bisogno di entrate extra senza sacrificare i miei studi. Coin Sin Limited mi ha dato questa opportunità. Dedico solo pochi minuti al giorno e vedo come il mio conto cresce. È uno strumento potente per chiunque voglia migliorare le proprie finanze.",
    },
  },
  {
    id: 4,
    name: "Andrés",
    location: {
      es: "Santiago, 42 años",
      en: "Santiago, 42 years old",
      ca: "Santiago, 42 anys",
      it: "Santiago, 42 anni",
    },
    avatar: "/placeholder.svg?height=60&width=60",
    text: {
      es: "Siempre fui escéptico con las inversiones online, pero Coin Sin Limited me demostró lo contrario. La transparencia y los resultados son reales. He diversificado mi cartera y mis ganancias superan con creces mis expectativas iniciales. ¡Una plataforma de confianza!",
      en: "I was always skeptical about online investments, but Coin Sin Limited proved me wrong. The transparency and results are real. I've diversified my portfolio, and my earnings far exceed my initial expectations. A trustworthy platform!",
      ca: "Sempre vaig ser escèptic amb les inversions en línia, però Coin Sin Limited em va demostrar el contrari. La transparència i els resultats són reals. He diversificat la meva cartera i els meus guanys superen amb escreix les meves expectatives inicials. Una plataforma de confiança!",
      it: "Sono sempre stato scettico sugli investimenti online, ma Coin Sin Limited mi ha dimostrato il contrario. La trasparenza e i risultati sono reali. Ho diversificato il mio portafoglio e i miei guadagni superano di gran lunga le mie aspettative iniziali. Una piattaforma affidabile!",
    },
  },
  {
    id: 5,
    name: "Valeria",
    location: { es: "Lima, 31 años", en: "Lima, 31 years old", ca: "Lima, 31 anys", it: "Lima, 31 anni" },
    avatar: "/placeholder.svg?height=60&width=60",
    text: {
      es: "Gracias a Coin Sin Limited, pude pagar mis deudas y empezar a ahorrar para mi casa. La facilidad de uso y el soporte al cliente son excepcionales. Me siento segura invirtiendo aquí, sabiendo que la IA está trabajando para mí 24/7.",
      en: "Thanks to Coin Sin Limited, I was able to pay off my debts and start saving for my house. The ease of use and customer support are exceptional. I feel secure investing here, knowing that AI is working for me 24/7.",
      ca: "Gràcies a Coin Sin Limited, vaig poder pagar els meus deutes i començar a estalviar per a la meva casa. La facilitat d'ús i el suport al client són excepcionals. Em sento segura invertint aquí, sabent que la IA està treballant per a mi 24/7.",
      it: "Grazie a Coin Sin Limited, sono riuscita a pagare i miei debiti e a iniziare a risparmiare per la mia casa. La facilità d'uso e il supporto clienti sono eccezionali. Mi sento sicura a investire qui, sapendo che l'IA sta lavorando per me 24 ore su 24, 7 giorni su 7.",
    },
  },
  {
    id: 6,
    name: "Juan",
    location: { es: "Madrid, 55 años", en: "Madrid, 55 years old", ca: "Madrid, 55 anys", it: "Madrid, 55 anni" },
    avatar: "/placeholder.svg?height=60&width=60",
    text: {
      es: "Nunca pensé que a mi edad podría entender el mundo de las criptomonedas, pero Coin Sin Limited lo hizo posible. La plataforma es intuitiva y los resultados son consistentes. ¡Es una bendición para mi economía familiar!",
      en: "I never thought that at my age I could understand the world of cryptocurrencies, but Coin Sin Limited made it possible. The platform is intuitive and the results are consistent. It's a blessing for my family's economy!",
      ca: "Mai vaig pensar que a la meva edat podria entendre el món de les criptomonedes, però Coin Sin Limited ho va fer possible. La plataforma és intuitiva i els resultats són consistents. És una benedicció per a la meva economia familiar!",
      it: "Non avrei mai pensato che alla mia età avrei potuto capire il mundo delle criptovalute, ma Coin Sin Limited lo ha reso possibile. La piattaforma è intuitiva e i risultati sono costanti. È una benedizione per la mia economia familiare!",
    },
  },
]
const faqData = [
  {
    id: 1,
    question: {
      es: "¿Qué puedo esperar en términos de resultados?",
      en: "What can I expect in terms of results?",
      ca: "Què puc esperar en termes de resultats?",
      it: "Cosa posso aspettarmi in termini di risultati?",
    },
    answer: {
      es: "Nuestros miembros generalmente disfrutan de ganancias diarias de al menos 1,000€, constantemente ganando aproximadamente 30,000€ por mes y 365,000€ por año. Tus ingresos son transparentes y visibles dentro de tu cuenta de usuario.",
      en: "Our members generally enjoy daily earnings of at least €1,000, consistently earning approximately €30,000 per month and €365,000 per year. Your income is transparent and visible within your user account.",
      ca: "Els nostres membres generalment gaudeixen de guanys diaris d'almenys 1.000€, constantment guanyant aproximadament 30.000€ per mes i 365.000€ per any. Els teus ingressos són transparents i visibles dins del teu compte d'usuari.",
      it: "I nostri membri generalmente godono di guadagni giornalieri d'almento 1.000€, guadagnando costantemente circa 30.000€ al mese e 365.000€ all'anno. Il tuo reddito è trasparente e visibile all'interno del tuo account utente.",
    },
  },
  {
    id: 2,
    question: {
      es: "¿Cuánto tiempo tengo que dedicar cada día?",
      en: "How much time do I have to dedicate each day?",
      ca: "Quant de temps he de dedicar cada dia?",
      it: "Quanto tempo devo dedicare ogni giorno?",
    },
    answer: {
      es: "Nuestros miembros informan que pasan menos de 10 minutos al día y aún logran ingresos sustanciales. La compra y venta de acciones está totalmente automatizada y controlada por nuestro sistema de inteligencia artificial.",
      en: "Our members report spending less than 10 minutes a day and still achieving substantial income. Stock buying and selling is fully automated and controlled by our artificial intelligence system.",
      ca: "Els nostres membres informen que passen menys de 10 minuts al dia i encara aconsegueixen ingressos substancials. La compra i venda d'accions està totalment automatitzada i controlada pel nostre sistema d'intel·ligència artificial.",
      it: "I nostri membri riferiscono di trascorrere meno di 10 minuti al giorno e di ottenere comunque un reddito sostanziale. L'acquisto e la vendita di azioni sono completamente automatizzati e controllati dal nostro sistema di intelligenza artificiale.",
    },
  },
  {
    id: 3,
    question: {
      es: "¿Hay un límite máximo de cuánto puedo ganar?",
      en: "Is there a maximum limit to how much I can earn?",
      ca: "Hi ha un límit màxim de quant puc guanyar?",
      it: "C'è un limite massimo a quanto posso guadagnare?",
    },
    answer: {
      es: "No hay límite en tus ganancias potenciales con Coin Sin Limited. Puedes ganar tanto como desees. Ten en cuenta que una mayor inversión inicial puede generar mayores ganancias.",
      en: "No, there is no limit to your potential earnings with Coin Sin Limited. You can earn as much as you want. Please note that a larger initial investment can lead to higher profits.",
      ca: "No hi ha límit en els teus guanys potencials amb Coin Sin Limited. Pots guanyar tant com desitgis. Tingues en compte que una major inversió inicial pot generar majors guanys.",
      it: "No, non c'è limite ai tuoi potenziali guadagni con Coin Sin Limited. Puoi guadagnare quanto desideri. Tieni presente che un investimento iniziale maggiore può portare a profitti più elevati.",
    },
  },
  {
    id: 4,
    question: {
      es: "¿Qué costos involucrados hay?",
      en: "What costs are involved?",
      ca: "Quins costos hi ha implicats?",
      it: "Quali costi sono coinvolti?",
    },
    answer: {
      es: "El acceso a Coin Sin Limited es totalmente gratuito. Solo se requiere un depósito inicial de €250. Puedes registrarte como miembro completando el formulario a continuación.",
      en: "Access to Coin Sin Limited is completely free. Only an initial deposit of €250 is required. You can register as a member by completing the form below.",
      ca: "L'accés a Coin Sin Limited és totalment gratuït. Només es requereix un dipòsit inicial de 250€. Pots registrar-te com a membre completant el formulari a continuació.",
      it: "L'accesso a Coin Sin Limited è completamente gratuito. È richiesto solo un deposito iniziale di 250€. Puoi registrarti come membro compilando il modulo sottostante.",
    },
  },
  {
    id: 6,
    question: {
      es: "¿Hay algún cargo adicional?",
      en: "Are there any additional charges?",
      ca: "Hi ha algun càrrec addicional?",
      it: "Ci sono costi aggiuntivi?",
    },
    answer: {
      es: "No, no hay tarifas ocultas o cargos inesperados. Usar Coin Sin Limited es completamente gratis. Simplemente completa el formulario a continuación para",
      en: "No, there are no hidden fees or unexpected charges. Using Coin Sin Limited is completely free. Simply complete the form below to",
      ca: "No, no hi ha tarifes ocultes o càrrecs inesperats. Utilitzar Coin Sin Limited és completament gratuït. Simplement completa el formulari a continuació per",
      it: "No, non ci sono costi nascosti o spese inaspettate. L'utilizzo di Coin Sin Limited è completamente gratuito. Basta compilare il modulo sottostante per",
    },
  },
]
const countryCodes = [
  { id: "AF", code: "+93", flag: "🇦🇫", country: "Afghanistan", name: "Afganistán" },
  { id: "AL", code: "+355", flag: "🇦🇱", country: "Albania", name: "Albania" },
  { id: "DZ", code: "+213", flag: "🇩🇿", country: "Algeria", name: "Argelia" },
  { id: "AS", code: "+1-684", flag: "🇦🇸", country: "American Samoa", name: "Samoa Americana" },
  { id: "AD", code: "+376", flag: "🇦🇩", country: "Andorra", name: "Andorra" },
  { id: "AO", code: "+244", flag: "🇦🇴", country: "Angola", name: "Angola" },
  { id: "AI", code: "+1-264", flag: "🇦🇮", country: "Anguilla", name: "Anguila" },
  { id: "AQ", code: "+672", flag: "🇦🇶", country: "Antarctica", name: "Antártida" },
  { id: "AG", code: "+1-268", flag: "🇦🇬", country: "Antigua and Barbuda", name: "Antigua y Barbuda" },
  { id: "AR", code: "+54", flag: "🇦🇷", country: "Argentina", name: "Argentina" },
  { id: "AM", code: "+374", flag: "🇦🇲", country: "Armenia", name: "Armenia" },
  { id: "AW", code: "+297", flag: "🇦🇼", country: "Aruba", name: "Aruba" },
  { id: "AU", code: "+61", flag: "🇦🇺", country: "Australia", name: "Australia" },
  { id: "AT", code: "+43", flag: "🇦🇹", country: "Austria", name: "Austria" },
  { id: "AZ", code: "+994", flag: "🇦🇿", country: "Azerbaijan", name: "Azerbaiyán" },
  { id: "BS", code: "+1-242", flag: "🇧🇸", country: "Bahamas", name: "Bahamas" },
  { id: "BH", code: "+973", flag: "🇧🇭", country: "Bahrain", name: "Bahrein" },
  { id: "BD", code: "+880", flag: "🇧🇩", country: "Bangladesh", name: "Bangladesh" },
  { id: "BB", code: "+1-246", flag: "🇧🇧", country: "Barbados", name: "Barbados" },
  { id: "BY", code: "+375", flag: "🇧🇾", country: "Belarus", name: "Bielorrusia" },
  { id: "BE", code: "+32", flag: "🇧🇪", country: "Belgium", name: "Bélgica" },
  { id: "BZ", code: "+501", flag: "🇧🇿", country: "Belize", name: "Belice" },
  { id: "BJ", code: "+229", flag: "🇧🇯", country: "Benin", name: "Benín" },
  { id: "BM", code: "+1-441", flag: "🇧🇲", country: "Bermuda", name: "Bermudas" },
  { id: "BT", code: "+975", flag: "🇧🇹", country: "Bhutan", name: "Bután" },
  { id: "BO", code: "+591", flag: "🇧🇴", country: "Bolivia", name: "Bolivia" },
  { id: "BA", code: "+387", flag: "🇧🇦", country: "Bosnia and Herzegovina", name: "Bosnia y Herzegovina" },
  { id: "BW", code: "+267", flag: "🇧🇼", country: "Botswana", name: "Botsuana" },
  { id: "BR", code: "+55", flag: "🇧🇷", country: "Brazil", name: "Brasil" },
  {
    id: "IO",
    code: "+246",
    flag: "🇮🇴",
    country: "British Indian Ocean Territory",
    name: "Territorio Británico del Océano Índico",
  },
  { id: "VG", code: "+1-284", flag: "🇻🇬", country: "British Virgin Islands", name: "Islas Vírgenes Británicas" },
  { id: "BN", code: "+673", flag: "🇧🇳", country: "Brunei", name: "Brunéi" },
  { id: "BG", code: "+359", flag: "🇧🇬", country: "Bulgaria", name: "Bulgaria" },
  { id: "BF", code: "+226", flag: "🇧🇫", country: "Burkina Faso", name: "Burkina Faso" },
  { id: "BI", code: "+257", flag: "🇧🇮", country: "Burundi", name: "Burundi" },
  { id: "KH", code: "+855", flag: "🇰🇭", country: "Cambodia", name: "Camboya" },
  { id: "CM", code: "+237", flag: "🇨🇲", country: "Cameroon", name: "Camerún" },
  { id: "CA", code: "+1", flag: "🇨🇦", country: "Canada", name: "Canadá" },
  { id: "CV", code: "+238", flag: "🇨🇻", country: "Cape Verde", name: "Cabo Verde" },
  { id: "KY", code: "+1-345", flag: "🇰🇾", country: "Cayman Islands", name: "Islas Caimán" },
  { id: "CF", code: "+236", flag: "🇨🇫", country: "Central African Republic", name: "República Centroafricana" },
  { id: "TD", code: "+235", flag: "🇹🇩", country: "Chad", name: "Chad" },
  { id: "CL", code: "+56", flag: "🇨🇱", country: "Chile", name: "Chile" },
  { id: "CN", code: "+86", flag: "🇨🇳", country: "China", name: "China" },
  { id: "CX", code: "+61", flag: "🇨🇽", country: "Christmas Island", name: "Isla de Navidad" },
  { id: "CC", code: "+61", flag: "🇨🇨", country: "Cocos (Keeling) Islands", name: "Islas Cocos (Keeling)" },
  { id: "CO", code: "+57", flag: "🇨🇴", country: "Colombia", name: "Colombia" },
  { id: "KM", code: "+269", flag: "🇰🇲", country: "Comoros", name: "Comoras" },
  { id: "CG", code: "+242", flag: "🇨🇬", country: "Congo", name: "Congo" },
  {
    id: "CD",
    code: "+243",
    flag: "🇨🇩",
    country: "Congo, Democratic Republic of the",
    name: "Congo, República Democrática del",
  },
  { id: "CK", code: "+682", flag: "🇨🇰", country: "Cook Islands", name: "Islas Cook" },
  { id: "CR", code: "+506", flag: "🇨🇷", country: "Costa Rica", name: "Costa Rica" },
  { id: "CI", code: "+225", flag: "🇨🇮", country: "Côte d'Ivoire", name: "Costa de Marfil" },
  { id: "HR", code: "+385", flag: "🇭🇷", country: "Croatia", name: "Croacia" },
  { id: "CU", code: "+53", flag: "🇨🇺", country: "Cuba", name: "Cuba" },
  { id: "CW", code: "+599", flag: "🇨🇼", country: "Curacao", name: "Curazao" },
  { id: "CY", code: "+357", flag: "🇨🇾", country: "Cyprus", name: "Chipre" },
  { id: "CZ", code: "+420", flag: "🇨🇿", country: "Czech Republic", name: "República Checa" },
  { id: "DK", code: "+45", flag: "🇩🇰", country: "Denmark", name: "Dinamarca" },
  { id: "DJ", code: "+253", flag: "🇩🇯", country: "Djibouti", name: "Yibuti" },
  { id: "DM", code: "+1-767", flag: "🇩🇲", country: "Dominica", name: "Dominica" },
  { id: "DO", code: "+1-809", flag: "🇩🇴", country: "Dominican Republic", name: "República Dominicana" },
  { id: "EC", code: "+593", flag: "🇪🇨", country: "Ecuador", name: "Ecuador" },
  { id: "EG", code: "+20", flag: "🇪🇬", country: "Egypt", name: "Egipto" },
  { id: "SV", code: "+503", flag: "🇸🇻", country: "El Salvador", name: "El Salvador" },
  { id: "GQ", code: "+240", flag: "🇬🇶", country: "Equatorial Guinea", name: "Guinea Ecuatorial" },
  { id: "ER", code: "+291", flag: "🇪🇷", country: "Eritrea", name: "Eritrea" },
  { id: "EE", code: "+372", flag: "🇪🇪", country: "Estonia", name: "Estonia" },
  { id: "ET", code: "+251", flag: "🇪🇹", country: "Ethiopia", name: "Etiopía" },
  { id: "FK", code: "+500", flag: "🇫🇰", country: "Falkland Islands", name: "Islas Malvinas" },
  { id: "FO", code: "+298", flag: "🇫🇴", country: "Faroe Islands", name: "Islas Feroe" },
  { id: "FJ", code: "+679", flag: "🇫🇯", country: "Fiji", name: "Fiyi" },
  { id: "FI", code: "+358", flag: "🇫🇮", country: "Finland", name: "Finlandia" },
  { id: "FR", code: "+33", flag: "🇫🇷", country: "France", name: "Francia" },
  { id: "GF", code: "+594", flag: "🇬🇫", country: "French Guiana", name: "Guayana Francesa" },
  { id: "PF", code: "+689", flag: "🇵🇫", country: "French Polynesia", name: "Polinesia Francesa" },
  { id: "GA", code: "+241", flag: "🇬🇦", country: "Gabon", name: "Gabón" },
  { id: "GM", code: "+220", flag: "🇬🇲", country: "Gambia", name: "Gambia" },
  { id: "GE", code: "+995", flag: "🇬🇪", country: "Georgia", name: "Georgia" },
  { id: "DE", code: "+49", flag: "🇩🇪", country: "Germany", name: "Alemania" },
  { id: "GH", code: "+233", flag: "🇬🇭", country: "Ghana", name: "Ghana" },
  { id: "GI", code: "+350", flag: "🇬🇮", country: "Gibraltar", name: "Gibraltar" },
  { id: "GR", code: "+30", flag: "🇬🇷", country: "Greece", name: "Grecia" },
  { id: "GL", code: "+299", flag: "🇬🇱", country: "Greenland", name: "Groenlandia" },
  { id: "GD", code: "+1-473", flag: "🇬🇩", country: "Grenada", name: "Granada" },
  { id: "GP", code: "+590", flag: "🇬🇵", country: "Guadeloupe", name: "Guadalupe" },
  { id: "GU", code: "+1-671", flag: "🇬🇺", country: "Guam", name: "Guam" },
  { id: "GT", code: "+502", flag: "🇬🇹", country: "Guatemala", name: "Guatemala" },
  { id: "GG", code: "+44", flag: "🇬🇬", country: "Guernsey", name: "Guernsey" },
  { id: "GN", code: "+224", flag: "🇬🇳", country: "Guinea", name: "Guinea" },
  { id: "GW", code: "+245", flag: "🇬🇼", country: "Guinea-Bisáu", name: "Guinea-Bisáu" },
  { id: "GY", code: "+592", flag: "🇬🇾", country: "Guyana", name: "Guyana" },
  { id: "HT", code: "+509", flag: "🇭🇹", country: "Haiti", name: "Haití" },
  { id: "HN", code: "+504", flag: "🇭🇳", country: "Honduras", name: "Honduras" },
  { id: "HK", code: "+852", flag: "🇭🇰", country: "Hong Kong", name: "Hong Kong" },
  { id: "HU", code: "+36", flag: "🇭🇺", country: "Hungary", name: "Hungría" },
  { id: "IS", code: "+354", flag: "🇮🇸", country: "Iceland", name: "Islandia" },
  { id: "IN", code: "+91", flag: "🇮🇳", country: "India", name: "India" },
  { id: "ID", code: "+62", flag: "🇮🇩", country: "Indonesia", name: "Indonesia" },
  { id: "IR", code: "+98", flag: "🇮🇷", country: "Iran", name: "Irán" },
  { id: "IQ", code: "+964", flag: "🇮🇶", country: "Iraq", name: "Irak" },
  { id: "IE", code: "+353", flag: "🇮🇪", country: "Ireland", name: "Irlanda" },
  { id: "IM", code: "+44", flag: "🇮🇲", country: "Isle of Man", name: "Isla de Man" },
  { id: "IL", code: "+972", flag: "🇮🇱", country: "Israel", name: "Israel" },
  { id: "IT", code: "+39", flag: "🇮🇹", country: "Italy", name: "Italia" },
  { id: "JM", code: "+1-876", flag: "🇯🇲", country: "Jamaica", name: "Jamaica" },
  { id: "JP", code: "+81", flag: "🇯🇵", country: "Japan", name: "Japón" },
  { id: "JE", code: "+44", flag: "🇯🇪", country: "Jersey", name: "Jersey" },
  { id: "JO", code: "+962", flag: "🇯🇴", country: "Jordan", name: "Jordania" },
  { id: "KZ", code: "+7", flag: "🇰🇿", country: "Kazakhstan", name: "Kazajistán" },
  { id: "KE", code: "+254", flag: "🇰🇪", country: "Kenya", name: "Kenia" },
  { id: "KI", code: "+686", flag: "🇰🇮", country: "Kiribati", name: "Kiribati" },
  { id: "KP", code: "+850", flag: "🇰🇵", country: "North Korea", name: "Corea del Norte" },
  { id: "KR", code: "+82", flag: "🇰🇷", country: "South Korea", name: "Corea del Sur" },
  { id: "KW", code: "+965", flag: "🇰🇼", country: "Kuwait", name: "Kuwait" },
  { id: "KG", code: "+996", flag: "🇰🇬", country: "Kyrgyzstan", name: "Kirguistán" },
  { id: "LA", code: "+856", flag: "🇱🇦", country: "Laos", name: "Laos" },
  { id: "LV", code: "+371", flag: "🇱🇻", country: "Latvia", name: "Letonia" },
  { id: "LB", code: "+961", flag: "🇱🇧", country: "Lebanon", name: "Líbano" },
  { id: "LS", code: "+266", flag: "🇱🇸", country: "Lesotho", name: "Lesoto" },
  { id: "LR", code: "+231", flag: "🇱🇷", country: "Liberia", name: "Liberia" },
  { id: "LY", code: "+218", flag: "🇱🇾", country: "Libya", name: "Libia" },
  { id: "LI", code: "+423", flag: "🇱🇮", country: "Liechtenstein", name: "Liechtenstein" },
  { id: "LT", code: "+370", flag: "🇱🇹", country: "Lithuania", name: "Lituania" },
  { id: "LU", code: "+352", flag: "🇱🇺", country: "Luxembourg", name: "Luxemburgo" },
  { id: "MO", code: "+853", flag: "🇲🇴", country: "Macau", name: "Macao" },
  { id: "MK", code: "+389", flag: "🇲🇰", country: "North Macedonia", name: "Macedonia del Norte" },
  { id: "MG", code: "+261", flag: "🇲🇬", country: "Madagascar", name: "Madagascar" },
  { id: "MW", code: "+265", flag: "🇲🇼", country: "Malawi", name: "Malaui" },
  { id: "MY", code: "+60", flag: "🇲🇾", country: "Malaysia", name: "Malasia" },
  { id: "MV", code: "+960", flag: "🇲🇻", country: "Maldives", name: "Maldivas" },
  { id: "ML", code: "+223", flag: "🇲🇱", country: "Mali", name: "Mali" },
  { id: "MT", code: "+356", flag: "🇲🇹", country: "Malta", name: "Malta" },
  { id: "MH", code: "+692", flag: "🇲🇭", country: "Marshall Islands", name: "Islas Marshall" },
  { id: "MQ", code: "+596", flag: "🇲🇶", country: "Martinique", name: "Martinica" },
  { id: "MR", code: "+222", flag: "🇲🇷", country: "Mauritania", name: "Mauricio" },
  { id: "MU", code: "+230", flag: "🇲🇺", country: "Mauritius", name: "Mauricio" },
  { id: "YT", code: "+262", flag: "🇾🇹", country: "Mayotte", name: "Mayotte" },
  { id: "MX", code: "+52", flag: "🇲🇽", country: "Mexico", name: "México" },
  { id: "FM", code: "+691", flag: "🇫🇲", country: "Micronesia", name: "Micronesia" },
  { id: "MD", code: "+373", flag: "🇲🇩", country: "Moldova", name: "Moldavia" },
  { id: "MC", code: "+377", flag: "🇲🇨", country: "Monaco", name: "Mónaco" },
  { id: "MN", code: "+976", flag: "🇲🇳", country: "Mongolia", name: "Mongolia" },
  { id: "ME", code: "+382", flag: "🇲🇪", country: "Montenegro", name: "Montenegro" },
  { id: "MS", code: "+1-664", flag: "🇲🇸", country: "Montserrat", name: "Montserrat" },
  { id: "MA", code: "+212", flag: "🇲🇦", country: "Morocco", name: "Marruecos" },
  { id: "MZ", code: "+258", flag: "🇲🇿", country: "Mozambique", name: "Mozambique" },
  { id: "MM", code: "+95", flag: "🇲🇲", country: "Myanmar", name: "Myanmar" },
  { id: "NA", code: "+264", flag: "🇳🇦", country: "Namibia", name: "Namibia" },
  { id: "NR", code: "+674", flag: "🇳🇷", country: "Nauru", name: "Nauru" },
  { id: "NP", code: "+977", flag: "🇳🇵", country: "Nepal", name: "Nepal" },
  { id: "NL", code: "+31", flag: "🇳🇱", country: "Netherlands", name: "Países Bajos" },
  { id: "NC", code: "+687", flag: "🇳🇨", country: "New Caledonia", name: "Nueva Caledonia" },
  { id: "NZ", code: "+64", flag: "🇳🇿", country: "New Zealand", name: "Nueva Zelanda" },
  { id: "NI", code: "+505", flag: "🇳🇮", country: "Nicaragua", name: "Nicaragua" },
  { id: "NE", code: "+227", flag: "🇳🇪", country: "Niger", name: "Níger" },
  { id: "NG", code: "+234", flag: "🇳🇬", country: "Nigeria", name: "Nigeria" },
  { id: "NU", code: "+683", flag: "🇳🇺", country: "Niue", name: "Niue" },
  { id: "NF", code: "+672", flag: "🇳🇫", country: "Norfolk Island", name: "Isla Norfolk" },
  { id: "MP", code: "+1-670", flag: "🇲🇵", country: "Northern Mariana Islands", name: "Islas Marianas del Norte" },
  { id: "NO", code: "+47", flag: "🇳🇴", country: "Norway", name: "Noruega" },
  { id: "OM", code: "+968", flag: "🇴🇲", country: "Oman", name: "Omán" },
  { id: "PK", code: "+92", flag: "🇵🇰", country: "Pakistan", name: "Pakistán" },
  { id: "PW", code: "+680", flag: "🇵🇼", country: "Palau", name: "Palaos" },
  { id: "PS", code: "+970", flag: "🇵🇸", country: "Palestine", name: "Palestina" },
  { id: "PA", code: "+507", flag: "🇵🇦", country: "Panama", name: "Panamá" },
  { id: "PG", code: "+675", flag: "🇵🇬", country: "Papua New Guinea", name: "Papúa Nueva Guinea" },
  { id: "PY", code: "+595", flag: "🇵🇾", country: "Paraguay", name: "Paraguay" },
  { id: "PE", code: "+51", flag: "🇵🇪", country: "Peru", name: "Perú" },
  { id: "PH", code: "+63", flag: "🇵🇭", country: "Philippines", name: "Filipinas" },
  { id: "PL", code: "+48", flag: "🇵🇱", country: "Poland", name: "Polonia" },
  { id: "PT", code: "+351", flag: "🇵🇹", country: "Portugal", name: "Portugal" },
  { id: "PR", code: "+1-787", flag: "🇵🇷", country: "Puerto Rico", name: "Puerto Rico" },
  { id: "QA", code: "+974", flag: "🇶🇦", country: "Qatar", name: "Catar" },
  { id: "RE", code: "+262", flag: "🇷🇪", country: "Reunion", name: "Reunión" },
  { id: "RO", code: "+40", flag: "🇷🇴", country: "Romania", name: "Rumania" },
  { id: "RU", code: "+7", flag: "🇷🇺", country: "Russia", name: "Rusia" },
  { id: "RW", code: "+250", flag: "🇷🇼", country: "Rwanda", name: "Ruanda" },
  { id: "WS", code: "+685", flag: "🇼🇸", country: "Samoa", name: "Samoa" },
  { id: "SM", code: "+378", flag: "🇸🇲", country: "San Marino", name: "San Marino" },
  { id: "ST", code: "+239", flag: "🇸🇹", country: "Sao Tome and Principe", name: "Santo Tomé y Príncipe" },
  { id: "SA", code: "+966", flag: "🇸🇦", country: "Saudi Arabia", name: "Arabia Saudita" },
  { id: "SN", code: "+221", flag: "🇸🇳", country: "Senegal", name: "Senegal" },
  { id: "RS", code: "+381", flag: "🇷🇸", country: "Serbia", name: "Serbia" },
  { id: "SC", code: "+248", flag: "🇸🇨", country: "Seychelles", name: "Seychelles" },
  { id: "SL", code: "+232", flag: "🇸🇱", country: "Sierra Leone", name: "Sierra Leona" },
  { id: "SG", code: "+65", flag: "🇸🇬", country: "Singapore", name: "Singapur" },
  { id: "SX", code: "+1-721", flag: "🇸🇽", country: "Sint Maarten", name: "Sint Maarten" },
  { id: "SK", code: "+421", flag: "🇸🇰", country: "Slovakia", name: "Eslovaquia" },
  { id: "SI", code: "+386", flag: "🇸🇮", country: "Slovenia", name: "Eslovenia" },
  { id: "SB", code: "+677", flag: "🇸🇧", country: "Solomon Islands", name: "Islas Salomón" },
  { id: "SO", code: "+252", flag: "🇸🇴", country: "Somalia", name: "Somalia" },
  { id: "ZA", code: "+27", flag: "🇿🇦", country: "South Africa", name: "Sudáfrica" },
  { id: "SS", code: "+211", flag: "🇸🇸", country: "South Sudan", name: "Sudán del Sur" },
  { id: "ES", code: "+34", flag: "🇪🇸", country: "Spain", name: "España" },
  { id: "LK", code: "+94", flag: "🇱🇰", country: "Sri Lanka", name: "Sri Lanka" },
  { id: "SD", code: "+249", flag: "🇸🇩", country: "Sudan", name: "Sudán" },
  { id: "SR", code: "+597", flag: "🇸🇷", country: "Suriname", name: "Surinam" },
  { id: "SZ", code: "+268", flag: "🇸🇿", country: "Swaziland", name: "Suazilandia" },
  { id: "SE", code: "+46", flag: "🇸🇪", country: "Sweden", name: "Suecia" },
  { id: "CH", code: "+41", flag: "🇨🇭", country: "Switzerland", name: "Suiza" },
  { id: "SY", code: "+963", flag: "🇸🇾", country: "Siria", name: "Siria" },
  { id: "TW", code: "+886", flag: "🇹🇼", country: "Taiwan", name: "Taiwán" },
  { id: "TJ", code: "+992", flag: "🇹🇯", country: "Tajikistán", name: "Tayikistán" },
  { id: "TZ", code: "+255", flag: "🇹🇿", country: "Tanzania", name: "Tanzania" },
  { id: "TH", code: "+66", flag: "🇹🇭", country: "Thailand", name: "Tailandia" },
  { id: "TL", code: "+670", flag: "🇹🇱", country: "Timor-Leste", name: "Timor Oriental" },
  { id: "TG", code: "+228", flag: "🇹🇬", country: "Togo", name: "Togo" },
  { id: "TK", code: "+690", flag: "🇹🇰", country: "Tokelau", name: "Tokelau" },
  { id: "TO", code: "+676", flag: "🇹🇴", country: "Tonga", name: "Tonga" },
  { id: "TT", code: "+1-868", flag: "🇹🇹", country: "Trinidad and Tobago", name: "Trinidad y Tobago" },
  { id: "TN", code: "+216", flag: "🇹🇳", country: "Tunisia", name: "Túnez" },
  { id: "TR", code: "+90", flag: "🇹🇷", country: "Turkey", name: "Turquía" },
  { id: "TM", code: "+993", flag: "🇹🇲", country: "Turkmenistan", name: "Turkmenistán" },
  { id: "TC", code: "+1-649", flag: "🇹🇨", country: "Turks and Caicos Islands", name: "Islas Turcas y Caicos" },
  { id: "TV", code: "+688", flag: "🇹🇻", country: "Tuvalu", name: "Tuvalu" },
  { id: "UG", code: "+256", flag: "🇺🇬", country: "Uganda", name: "Uganda" },
  { id: "UA", code: "+380", flag: "🇺🇦", country: "Ukraine", name: "Ucrania" },
  { id: "AE", code: "+971", flag: "🇦🇪", country: "United Arab Emirates", name: "Emiratos Árabes Unidos" },
  { id: "GB", code: "+44", flag: "🇬🇧", country: "United Kingdom", name: "Reino Unido" },
  { id: "US", code: "+1", flag: "🇺🇸", country: "United States", name: "Estados Unidos" },
  { id: "UY", code: "+598", flag: "🇺🇾", country: "Uruguay", name: "Uruguay" },
  { id: "UZ", code: "+998", flag: "🇺🇿", country: "Uzbekistan", name: "Uzbekistán" },
  { id: "VU", code: "+678", flag: "🇻🇺", country: "Vanuatu", name: "Vanuatu" },
  { id: "VA", code: "+379", flag: "🇻🇦", country: "Vatican City", name: "Ciudad del Vaticano" },
  { id: "VE", code: "+58", flag: "🇻🇪", country: "Venezuela", name: "Venezuela" },
  { id: "VN", code: "+84", flag: "🇻🇳", country: "Vietnam", name: "Vietnam" },
  { id: "WF", code: "+681", flag: "🇼🇫", country: "Wallis and Futuna", name: "Wallis y Futuna" },
  { id: "EH", code: "+212", flag: "🇪🇭", country: "Western Sahara", name: "Sahara Occidental" },
  { id: "YE", code: "+967", flag: "🇾🇪", country: "Yemen", name: "Yemen" },
  { id: "ZM", code: "+260", flag: "🇿🇲", country: "Zambia", name: "Zambia" },
  { id: "ZW", code: "+263", flag: "🇿🇼", country: "Zimbabwe", name: "Zimbabue" },
]
// Define los valores específicos para la calculadora
const investmentValues = [250, 5000, 25000, 50000, 100000]
type Language = "es" | "en" | "ca" | "it"

export default function CryptoLanding() {
  const [language, setLanguage] = useState<Language>("es")
  const [countrySearch, setCountrySearch] = useState("")
  const [isCountrySelectOpen, setIsCountrySelectOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    dateOfBirth: "", // Nuevo estado para la fecha de nacimiento
    countryCode: "+34",
  })
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [volume, setVolume] = useState(0.5) // Estado para el volumen
  const [isMuted, setIsMuted] = useState(false) // Estado para el mute
  const videoRef = useRef<HTMLVideoElement>(null)
  const [calculatorData, setCalculatorData] = useState({
    investment: investmentValues[0], // Inicializar con el primer valor
    days: 10,
  })
  const [platformNetBenefit, setPlatformNetBenefit] = useState(466837090)
  const [newUsersToday, setNewUsersToday] = useState(3984) // Changed initial value to 3984
  const [ageConfirmed, setAgeConfirmed] = useState(false)
  const [phoneError, setPhoneError] = useState<string | null>(null)

  const [registrationState, registrationAction] = useFormState(submitRegistration, {
    success: false,
    message: "",
    errors: {
      name: undefined,
      surname: undefined,
      email: undefined,
      phone: undefined,
      dateOfBirth: undefined, // Añadir al estado de errores
      countryCode: undefined,
      language: undefined,
      _form: undefined,
    },
  })

  // Countdown timer state
  const initialCountdownTime = 5 * 60 * 1000 // 5 minutes in milliseconds
  const [countdownTime, setCountdownTime] = useState(initialCountdownTime)
  const countdownIntervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Start countdown timer
    countdownIntervalRef.current = setInterval(() => {
      setCountdownTime((prevTime) => {
        if (prevTime <= 1000) {
          // Stop at 0
          clearInterval(countdownIntervalRef.current!)
          return 0
        }
        return prevTime - 1000
      })
    }, 1000)

    const benefitInterval = setInterval(() => {
      setPlatformNetBenefit((prev) => prev + Math.floor(Math.random() * 1000) + 100) // Increment by 100-1099
    }, 5000) // Update every 5 seconds

    const usersInterval = setInterval(() => {
      setNewUsersToday((prev) => prev + Math.floor(Math.random() * 5) + 1) // Increment by 1-5 users
    }, 10000) // Update every 10 seconds

    return () => {
      clearInterval(benefitInterval)
      clearInterval(usersInterval)
      if (countdownIntervalRef.current) {
        clearInterval(countdownIntervalRef.current)
      }
    }
  }, [])

  // Format countdown time
  const formatCountdown = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  // Calculate return based on investment and days
  const calculateReturn = (investment: number, days: number) => {
    const initialDailyRate = 0.0936 // This rate ensures 250 -> 612 in 10 days
    const reducedDailyRate = 0.03 // A much lower rate for subsequent days

    if (days <= 10) {
      return Math.round(investment * Math.pow(1 + initialDailyRate, days))
    } else {
      const baseReturnAt10Days = investment * Math.pow(1 + initialDailyRate, 10)
      const remainingDays = days - 10
      return Math.round(baseReturnAt10Days * Math.pow(1 + reducedDailyRate, remainingDays))
    }
  }

  // Calculate percentage gain
  const calculatePercentage = (investment: number, days: number) => {
    const returnAmount = calculateReturn(investment, days)
    return ((returnAmount - investment) / investment) * 100
  }

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => {
      // Ensure maxIndex is calculated correctly for the number of testimonials and items displayed
      const maxIndex = testimonials.length - 3 // Displaying 3 testimonials at a time
      return prev + 3 > maxIndex ? 0 : prev + 3
    })
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => {
      const maxIndex = testimonials.length - 3 // Displaying 3 testimonials at a time
      return prev - 3 < 0 ? maxIndex : prev - 3
    })
  }

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number.parseFloat(e.target.value)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
      setVolume(newVolume)
      if (newVolume > 0 && isMuted) {
        setIsMuted(false)
      } else if (newVolume === 0 && !isMuted) {
        setIsMuted(true)
      }
    }
  }

  const toggleFullScreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        videoRef.current.requestFullscreen()
      }
    }
  }

  const t = translations[language]

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

  const validatePhoneNumber = (phoneNumber: string) => {
    const commonPatterns = [
      /^(\d)\1+$/, // e.g., 1111111111
      /^1234567890$/,
      /^0987654321$/,
      /^147852369$/,
      /^(?:0123456789|9876543210)$/, // common sequences
    ]
    if (commonPatterns.some((pattern) => pattern.test(phoneNumber))) {
      return "Por favor, introduce un número de teléfono válido."
    }
    return null
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (field === "phone") {
      setPhoneError(validatePhoneNumber(value))
    }
  }

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage as Language)
  }

  const selectedCountry = countryCodes.find((c) => c.code === formData.countryCode)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
      if (!isMuted) {
        videoRef.current.volume = volume
      } else {
        videoRef.current.volume = 0
      }
    }
  }

  // Handler for investment slider
  const handleInvestmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = Number.parseInt(e.target.value)
    setCalculatorData((prev) => ({ ...prev, investment: investmentValues[index] }))
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-blue-950">
      {/* Section with background image 1 (image.jpg) */}
      <div className="relative z-10" aria-label="Background image of cryptocurrency charts">
        <div className="absolute inset-0 bg-[url('/images/image.jpg')] bg-cover bg-center blur-md"></div>
        <div className="relative z-20">
          {/* Notification Bar */}
          <div className="relative z-20 bg-blue-600 text-white text-center py-0.5 px-4 text-sm">
            {" "}
            {/* Reduced py-1 to py-0.5 */}
            <div className="flex items-center justify-center gap-2">
              <Info className="w-4 h-4" />
              <span>{t.notification}</span>
              <Badge variant="destructive" className="ml-2">
                {formatCountdown(countdownTime)}
              </Badge>
            </div>
          </div>

          {/* Header */}
          <header className="relative z-20 grid grid-cols-[auto_1fr_auto] items-center py-1 px-2 sm:py-2 sm:px-4">
            {" "}
            {/* Reduced p-2 sm:p-4 to py-1 px-2 sm:py-2 sm:px-4 */}
            {/* Logo Column */}
            <div className="flex items-center gap-2">
              {" "}
              {/* Reduced gap */}
              <img
                src="/logo.png"
                alt="Coin Sin Limited Logo"
                className="h-20 w-40 sm:h-24 sm:w-48 object-contain rounded-lg" // Increased logo size
              />
            </div>
            {/* Counters Column (centered) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
              {" "}
              {/* Reduced gap */}
              <div className="text-white text-xs text-center sm:text-left">
                {" "}
                {/* Reduced font size */}
                <div className="text-orange-400 font-semibold">{t.platformBenefit}</div>
                <div className="text-lg font-bold">€{platformNetBenefit.toLocaleString()}</div>{" "}
                {/* Reduced font size */}
              </div>
              <div className="text-white text-xs text-center sm:text-left">
                {" "}
                {/* Reduced font size */}
                <div className="text-orange-400 font-semibold">{t.userIncome}</div>
                <div className="text-lg font-bold">{newUsersToday.toLocaleString()}</div> {/* Reduced font size */}
              </div>
            </div>
            {/* Language Selector Column */}
            <div className="flex justify-end">
              <Select value={language} onValueChange={handleLanguageChange}>
                <SelectTrigger className="w-full sm:w-28 bg-white text-gray-900 [&>span]:text-gray-900 [&>span>span]:text-gray-900 [&>svg]:text-gray-900 h-8 text-sm">
                  {" "}
                  {/* Reduced width and height */}
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

          {/* Main Content (Hero section) */}
          <div className="relative z-20 container mx-auto px-4 py-1 sm:px-6 sm:py-2">
            {" "}
            {/* Reduced padding */}
            <div className="text-center mb-1 sm:mb-2">
              {" "}
              {/* Reduced margin-bottom */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-0.5 sm:mb-1 leading-tight">
                {" "}
                {/* Increased font size */}
                {t.mainTitle}
                <br />
                <span className="text-orange-400">{t.mainTitleHighlight}</span>
              </h1>
              <p className="text-xs sm:text-sm text-gray-300 mb-1 sm:mb-2">{t.subtitle}</p>{" "}
              {/* Further reduced font size */}
            </div>
          </div>
        </div>
      </div>
      {/* FIN DEL DIV CON LA IMAGEN DE FONDO 1 */}

      {/* New wrapper for image2.jpg, starting from "READY TO JOIN" and going down */}
      <div className="relative z-0">
        {" "}
        {/* This div will hold image2.jpg as its background */}
        <div className="absolute inset-0 bg-[url('/images/image2.jpg')] bg-cover bg-center opacity-10 blur-sm"></div>{" "}
        {/* The image2.jpg background */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Moved "READY TO JOIN" banner here, outside the grid */}
          <div className="bg-blue-700/50 text-white p-3 rounded-lg flex items-center gap-2 mb-4 animate-in slide-in-from-left-5 duration-700">
            {" "}
            {/* Reduced padding and gap, mb-6 to mb-4 */}
            <Info className="w-4 h-4" /> {/* Reduced icon size */}
            <span className="font-semibold text-sm">{t.readyToJoin}</span> {/* Reduced font size */}
          </div>

          <div className="rounded-2xl p-4 sm:p-6 shadow-2xl border border-blue-400/20 animate-in slide-in-from-bottom-5 duration-700 glowing-form-shadow">
            {" "}
            {/* Reduced padding */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
              {" "}
              {/* Reduced gap */}
              {/* Left Side - Video/Content */}
              <div className="lg:col-span-2 pt-0">
                {" "}
                <div className="text-center space-y-4">
                  {" "}
                  {/* Reduced space-y */}
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-500/20 rounded-full mb-2 animate-pulse">
                    {" "}
                    {/* Reduced size */}
                    <Shield className="w-7 h-7 text-orange-400" /> {/* Reduced icon size */}
                  </div>
                  <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto rounded-full animate-in slide-in-from-left-5 duration-500 delay-300"></div>{" "}
                  {/* Reduced width */}
                  {/* Video Player */}
                  <div className="relative bg-transparent rounded-xl overflow-hidden glowing-form-shadow">
                    <video
                      ref={videoRef}
                      src="/videos/crypto-demo.mp4" // Referencia al video subido a Vercel Blob
                      className="w-full aspect-video object-cover" // Changed to aspect-video for wider view
                      loop
                      onPlay={() => setIsVideoPlaying(true)}
                      onPause={() => setIsVideoPlaying(false)}
                      onVolumeChange={(e) => {
                        setVolume(e.currentTarget.volume)
                        setIsMuted(e.currentTarget.muted)
                      }}
                      autoPlay // Added autoPlay
                      muted={isMuted} // Ensure muted state is applied
                    >
                      {language === "es"
                        ? "Tu navegador no soporta la etiqueta de video."
                        : "Your browser no longer supports the video tag."}
                    </video>
                    {/* Custom Play/Pause Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button
                        onClick={toggleVideo}
                        size="lg"
                        className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white h-12 w-12 sm:h-14 sm:w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 group relative overflow-hidden"
                      >
                        {" "}
                        {/* Reduced size */}
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        <div className="relative flex items-center justify-center">
                          {isVideoPlaying ? (
                            <Pause className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform duration-300" />
                          ) : (
                            <Play className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform duration-300" />
                          )}
                        </div>
                      </Button>
                    </div>
                    {/* Video Controls (Volume, Fullscreen) */}
                    <div className="absolute bottom-1 left-1 right-1 sm:bottom-2 sm:left-2 sm:right-2 flex items-center justify-between bg-black/50 p-1 rounded-lg">
                      {" "}
                      {/* Reduced padding */}
                      <div className="flex items-center gap-1">
                        {" "}
                        {/* Reduced gap */}
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={toggleMute}
                          className="text-white hover:bg-white/20 w-7 h-7"
                        >
                          {" "}
                          {/* Reduced size */}
                          {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}{" "}
                          {/* Reduced icon size */}
                        </Button>
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.01"
                          value={volume}
                          onChange={handleVolumeChange}
                          className="w-16 sm:w-20 h-1 bg-gray-400 rounded-lg appearance-none cursor-pointer"
                        />{" "}
                        {/* Reduced width */}
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleFullScreen}
                        className="text-white hover:bg-white/20 w-7 h-7"
                      >
                        {" "}
                        {/* Reduced size */}
                        <Maximize className="w-4 h-4" /> {/* Reduced icon size */}
                      </Button>
                    </div>
                  </div>
                  <p className="text-white/80 text-xs">{isVideoPlaying ? t.pauseVideo : t.playVideo}</p>{" "}
                  {/* Reduced font size */}
                </div>
              </div>
              {/* Right Side - Registration Form */}
              <div id="registration-form" className="space-y-4">
                {" "}
                {/* Reduced space-y */}
                {registrationState.success && (
                  <div className="text-center space-y-4 animate-in fade-in-50 duration-500">
                    {" "}
                    {/* Reduced space-y */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-2">
                      {" "}
                      {/* Reduced size */}
                      <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        {" "}
                        {/* Reduced icon size */}
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">{t.registrationSuccessTitle}</h2>{" "}
                    {/* Reduced font size */}
                    <p className="text-white/90 text-sm sm:text-base">{registrationState.message}</p>{" "}
                    {/* Reduced font size */}
                    <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full"></div>{" "}
                    {/* Reduced width */}
                  </div>
                )}
                {registrationState.errors?._form && (
                  <div className="text-red-400 text-xs text-center">{registrationState.errors._form[0]}</div>
                )}
                {!registrationState.success && (
                  <>
                    <div className="text-center mb-6">
                      {" "}
                      {/* Reduced margin-bottom */}
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-500/20 rounded-full mb-2 animate-pulse">
                        {" "}
                        {/* Reduced size */}
                        <img
                          src="/logo.png"
                          alt="Coin Sin Limited Logo"
                          className="h-10 w-20 object-contain rounded-lg" // Reduced logo size
                        />
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mb-1 animate-in fade-in-50 duration-500 delay-200">
                        {" "}
                        {/* Reduced font size and margin */}
                        {t.improveLife}
                      </h2>
                      <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto rounded-full animate-in slide-in-from-left-5 duration-500 delay-300"></div>{" "}
                      {/* Reduced width */}
                    </div>
                    <form className="space-y-3" action={registrationAction}>
                      {" "}
                      {/* Reduced space-y */}
                      {/* Name Field */}
                      <div className="relative group animate-in slide-in-from-left-3 duration-500 delay-100">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600 group-focus-within:text-blue-500 transition-colors duration-200 z-10">
                          <User className="w-4 h-4" /> {/* Reduced icon size */}
                        </div>
                        <Input
                          name="name"
                          placeholder={t.namePlaceholder}
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                          className="w-full bg-white/95 backdrop-blur-sm border-0 h-10 text-gray-900 placeholder:text-gray-500 pl-10 pr-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 focus:scale-[1.02] focus:bg-white group"
                        />
                        {formData.name && (
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 animate-in zoom-in-50 duration-200">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              {" "}
                              {/* Reduced icon size */}
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                      {/* Surname Field */}
                      <div className="relative group animate-in slide-in-from-left-3 duration-500 delay-200">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600 group-focus-within:text-blue-500 transition-colors duration-200 z-10">
                          <User className="w-4 h-4" /> {/* Reduced icon size */}
                        </div>
                        <Input
                          name="surname"
                          placeholder={t.surnamePlaceholder}
                          value={formData.surname}
                          onChange={(e) => handleInputChange("surname", e.target.value)}
                          required
                          className="w-full bg-white/95 backdrop-blur-sm border-0 h-10 text-gray-900 placeholder:text-gray-500 pl-10 pr-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 focus:scale-[1.02] focus:bg-white group"
                        />
                        {formData.surname && (
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 animate-in zoom-in-50 duration-200">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              {" "}
                              {/* Reduced icon size */}
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                      {/* Email Field */}
                      <div className="relative group animate-in slide-in-from-left-3 duration-500 delay-300">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600 group-focus-within:text-blue-500 transition-colors duration-200 z-10">
                          <Mail className="w-4 h-4" /> {/* Reduced icon size */}
                        </div>
                        <Input
                          name="email"
                          type="email"
                          placeholder={t.emailPlaceholder}
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          className="w-full bg-white/95 backdrop-blur-sm border-0 h-10 text-gray-900 placeholder:text-gray-500 pl-10 pr-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 focus:scale-[1.02] focus:bg-white group"
                        />
                        {formData.email && formData.email.includes("@") && (
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 animate-in zoom-in-50 duration-200">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              {" "}
                              {/* Reduced icon size */}
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                      {/* Date of Birth Field */}
                      <div className="relative group animate-in slide-in-from-left-3 duration-500 delay-350">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600 group-focus-within:text-blue-500 transition-colors duration-200 z-10">
                          <Calendar className="w-4 h-4" /> {/* Reduced icon size */}
                        </div>
                        <Input
                          name="dateOfBirth"
                          type="date"
                          placeholder={t.dobPlaceholder}
                          value={formData.dateOfBirth}
                          onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                          required
                          className="w-full bg-white/95 backdrop-blur-sm border-0 h-10 text-gray-900 placeholder:text-gray-500 pl-10 pr-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 focus:scale-[1.02] focus:bg-white group"
                        />
                        {formData.dateOfBirth && (
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 animate-in zoom-in-50 duration-200">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              {" "}
                              {/* Reduced icon size */}
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                      {/* Phone Field - Unified */}
                      <div className="flex animate-in slide-in-from-left-3 duration-500 delay-400 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 focus-within:scale-[1.02] focus-within:bg-white overflow-hidden">
                        <div className="relative w-1/3">
                          <Select
                            name="countryCode"
                            value={formData.countryCode}
                            onValueChange={(value) => handleInputChange("countryCode", value)}
                            open={isCountrySelectOpen}
                            onOpenChange={setIsCountrySelectOpen}
                          >
                            <SelectTrigger className="w-full bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 border-r border-gray-300 h-10 text-white rounded-l-xl rounded-r-none text-sm flex items-center justify-start pl-3 min-h-[40px]">
                              {" "}
                              {/* Reduced height */}
                              <SelectValue>
                                <div className="flex items-center gap-1">
                                  {" "}
                                  {/* Reduced gap */}
                                  <span className="text-xs font-semibold">
                                    {" "}
                                    {/* Reduced font size */}
                                    {selectedCountry?.id.toUpperCase()} {selectedCountry?.code}
                                  </span>
                                </div>
                              </SelectValue>
                            </SelectTrigger>
                            <SelectContent className="w-[var(--radix-popper-anchor-width)] max-h-60 rounded-xl border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
                              {" "}
                              {/* Reduced max-height */}
                              <div className="p-2 border-b border-gray-100">
                                {" "}
                                {/* Reduced padding */}
                                <div className="relative">
                                  <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3" />{" "}
                                  {/* Reduced icon size */}
                                  <Input
                                    placeholder={t.searchCountry}
                                    value={countrySearch}
                                    onChange={(e) => setCountrySearch(e.target.value)}
                                    className="pl-8 h-8 text-xs rounded-lg border border-gray-200 focus:border-blue-400 transition-colors duration-200 w-full"
                                    onClick={(e) => e.stopPropagation()}
                                  />{" "}
                                  {/* Reduced padding, height, font size */}
                                </div>
                              </div>
                              <div className="max-h-40 overflow-y-auto">
                                {" "}
                                {/* Reduced max-height */}
                                {filteredCountries.map((country) => (
                                  <SelectItem
                                    key={country.id}
                                    value={country.code}
                                    className="hover:bg-blue-50 transition-colors duration-150 cursor-pointer"
                                  >
                                    <div className="flex items-center gap-2 py-0.5">
                                      {" "}
                                      {/* Reduced padding */}
                                      <span className="text-base">{country.flag}</span> {/* Reduced font size */}
                                      <span className="text-xs font-semibold">{country.code}</span>{" "}
                                      {/* Reduced font size */}
                                      <span className="text-xs text-gray-600">
                                        {" "}
                                        {/* Reduced font size */}
                                        {language === "es" ? country.name : country.country}
                                      </span>
                                    </div>
                                  </SelectItem>
                                ))}
                                {filteredCountries.length === 0 && (
                                  <div className="p-2 text-xs text-gray-500 text-center">{t.noCountriesFound}</div>
                                )}{" "}
                                {/* Reduced padding and font size */}
                              </div>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="relative flex-1 group">
                          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600 group-focus-within:text-blue-500 transition-colors duration-200 z-10">
                            <Phone className="w-4 h-4" /> {/* Reduced icon size */}
                          </div>
                          <Input
                            name="phone"
                            placeholder={t.phonePlaceholder}
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            required
                            className="w-full bg-white/95 backdrop-blur-sm border-0 h-10 text-gray-900 placeholder:text-gray-500 pl-10 pr-10 rounded-r-xl rounded-l-none min-h-[40px]"
                          />
                          {formData.phone && !phoneError && formData.phone.length >= 8 && (
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 animate-in zoom-in-50 duration-200">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                {" "}
                                {/* Reduced icon size */}
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          )}
                        </div>
                      </div>
                      {phoneError && <p className="text-red-400 text-xs text-left mt-1">{phoneError}</p>}{" "}
                      {/* Reduced font size */}
                      <input type="hidden" name="language" value={language} />
                      {/* Register Button */}
                      <div className="animate-in slide-in-from-bottom-3 duration-500 delay-500">
                        <SubmitButton language={language} disabled={!ageConfirmed || !!phoneError}>
                          {t.registerButton}
                        </SubmitButton>
                      </div>
                      {/* Age Confirmation Checkbox */}
                      <div className="flex items-start gap-3 text-xs text-white animate-in fade-in-50 duration-500 delay-600">
                        {" "}
                        {/* Reduced gap */}
                        <div className="relative">
                          <Checkbox
                            id="age-confirm"
                            checked={ageConfirmed}
                            onCheckedChange={(checked) => setAgeConfirmed(!!checked)}
                            required
                            className="mt-0.5 border-white/30 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500 transition-all duration-200 hover:scale-110"
                          />{" "}
                          {/* Adjusted margin-top */}
                        </div>
                        <label
                          htmlFor="age-confirm"
                          className="leading-relaxed cursor-pointer hover:text-orange-200 transition-colors duration-200"
                        >
                          <Shield className="w-3 h-3 inline mr-1 text-orange-400 align-middle" />{" "}
                          {/* Reduced icon size and margin */}
                          {t.ageConfirmation}
                        </label>
                      </div>
                      {/* Terms Checkbox */}
                      <div className="flex items-start gap-3 text-xs text-white animate-in fade-in-50 duration-500 delay-600">
                        {" "}
                        {/* Reduced gap */}
                        <div className="relative">
                          <Checkbox
                            id="terms"
                            required
                            className="mt-0.5 border-white/30 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500 transition-all duration-200 hover:scale-110"
                          />{" "}
                          {/* Adjusted margin-top */}
                        </div>
                        <label
                          htmlFor="terms"
                          className="leading-relaxed cursor-pointer hover:text-orange-200 transition-colors duration-200"
                        >
                          <Shield className="w-3 h-3 inline mr-1 text-orange-400 align-middle" />{" "}
                          {/* Reduced icon size and margin */}
                          {t.termsText}
                        </label>
                      </div>
                      {/* Privacy Text */}
                      <div className="text-xs text-white/80 leading-relaxed animate-in fade-in-50 duration-500 delay-700 bg-white/5 p-3 rounded-lg border border-white/10">
                        {" "}
                        {/* Reduced padding */}
                        <div className="flex items-start gap-1">
                          {" "}
                          {/* Reduced gap */}
                          <svg
                            className="w-3 h-3 text-blue-300 mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            {" "}
                            {/* Reduced icon size */}
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{t.privacyText}</span>
                        </div>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Investment Calculator Section - REMOVED ITS INTERNAL BACKGROUND IMAGE */}
          <div className="text-center mb-12 sm:mb-16 mt-16 sm:mt-20 relative">
            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-3xl p-6 sm:p-8 shadow-2xl border border-blue-400/30 overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                    {t.potentialEarningsTitle}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left Side - Controls */}
                    <div className="space-y-8">
                      {/* Investment Amount */}
                      <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                          <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-bold text-base sm:text-lg w-full sm:w-auto text-center">
                            {calculatorData.investment.toLocaleString()} €
                          </div>
                          <span className="text-white font-semibold text-base sm:text-lg">{t.myInvestment}</span>
                        </div>
                        <div className="relative">
                          <input
                            type="range"
                            min="0" // Index 0 for 250
                            max={investmentValues.length - 1} // Max index
                            step="1"
                            value={investmentValues.indexOf(calculatorData.investment)} // Use index as value
                            onChange={handleInvestmentChange}
                            className="w-full h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg appearance-none cursor-pointer slider"
                          />
                          <div className="flex justify-between text-white text-xs sm:text-sm mt-2 px-1">
                            {investmentValues.map((val, idx) => (
                              <span key={idx}>
                                {val >= 1000 ? `${val / 1000}k` : val}
                                {val === 250 ? "" : ""}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Time Period */}
                      <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                          <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-bold text-base sm:text-lg w-full sm:w-auto text-center">
                            {calculatorData.days} {t.days}
                          </div>
                          <span className="text-white font-semibold text-base sm:text-lg">{t.usagePeriod}</span>
                        </div>
                        <div className="relative">
                          <input
                            type="range"
                            min="10"
                            max="50"
                            step="1"
                            value={calculatorData.days}
                            onChange={(e) => {
                              const value = Number.parseInt(e.target.value)
                              setCalculatorData((prev) => ({ ...prev, days: value }))
                            }}
                            className="w-full h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg appearance-none cursor-pointer slider"
                          />
                          <div className="flex justify-between text-white text-xs sm:text-sm mt-2 px-1">
                            <span>10</span>
                            <span>20</span>
                            <span>30</span>
                            <span>40</span>
                            <span>50</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Result */}
                    <div className="flex justify-center">
                      <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-6 sm:p-8 text-center w-full max-w-[280px] sm:max-w-none">
                        <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 animate-pulse">
                          {calculateReturn(calculatorData.investment, calculatorData.days).toLocaleString()} €
                        </div>
                        <div className="text-orange-300 font-semibold text-base sm:text-lg">{t.potentialProfit}</div>
                        <div className="text-green-400 font-bold text-lg sm:text-xl mt-2">
                          +{calculatePercentage(calculatorData.investment, calculatorData.days).toFixed(1)}%
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-8 text-center">
                    <Button
                      onClick={() => {
                        const formElement = document.querySelector("#registration-form")
                        if (formElement) {
                          formElement.scrollIntoView({ behavior: "smooth", block: "center" })
                        }
                      }}
                      size="lg"
                      className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 h-12 sm:px-8 sm:py-4 sm:h-14 text-base sm:text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400/30 to-green-600/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      <div className="relative flex items-center gap-3">
                        <span>{t.startInvestingNowButton}</span>
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </Button>
                  </div>
                  <div className="mt-4 sm:mt-6 text-white/80 text-xs sm:text-sm text-center">
                    <p>{t.disclaimer}</p>
                  </div>
                </div>
              </div>

              {/* Demo Account Section */}
              <div className="text-center mb-12 sm:mb-16 mt-16 sm:mt-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-8">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8 sm:mb-12 animate-in slide-in-from-bottom-5 duration-700">
                    {t.demoAccountTitle}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 text-white text-left mb-8 sm:mb-12">
                    <div className="space-y-6 animate-in slide-in-from-left-5 duration-700 delay-200">
                      <p className="text-base leading-relaxed">{t.notScamText2}</p>
                    </div>
                    <div className="space-y-6 animate-in slide-in-from-right-5 duration-700 delay-300">
                      <p className="text-base leading-relaxed">{t.notScamText2}</p>
                    </div>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-6 sm:mb-8 animate-in slide-in-from-bottom-5 duration-700 delay-500">
                    {t.notScamTitle}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 text-white text-left mb-8 sm:mb-12">
                    <div className="space-y-6 animate-in slide-in-from-left-5 duration-700 delay-600">
                      <p className="text-base leading-relaxed">{t.notScamText1}</p>
                    </div>
                    <div className="space-y-6 animate-in slide-in-from-right-5 duration-700 delay-700">
                      <p className="text-base leading-relaxed">{t.notScamText3}</p>
                      <p className="text-base leading-relaxed">{t.notScamText4}</p>
                    </div>
                  </div>
                  {/* Security Lock Icon - FIXED HERE */}
                  <div className="flex justify-center animate-in fade-in-50 duration-700 delay-800">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl">
                      <Lock className="w-10 h-10 sm:w-12 sm:h-12 text-white" /> {/* Usando el icono Lock */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonials Section with Grid Layout */}
              <div className="text-center mb-12 sm:mb-16 mt-16 sm:mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8 sm:mb-12 animate-in slide-in-from-bottom-5 duration-700">
                    {t.testimonialsTitle} <span className="text-orange-400">{t.testimonialsHighlight}</span>{" "}
                    {t.testimonialsTitle2}
                  </h2>

                  {/* Testimonials Grid with Navigation */}
                  <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      {testimonials.slice(currentTestimonial, currentTestimonial + 3).map((testimonial, index) => (
                        <div
                          key={testimonial.id}
                          className="bg-blue-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-600/30 animate-in fade-in-50 duration-500 hover:bg-blue-800/60 transition-all duration-300"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="text-4xl text-orange-400 mb-3">"</div>
                          <p className="text-white text-sm leading-relaxed mb-4">{testimonial.text[language]}</p>
                          <div className="text-center">
                            <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                            <p className="text-orange-300 text-sm">{testimonial.location[language]}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Navigation Arrows */}
                    <Button
                      onClick={prevTestimonial}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 p-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                    >
                      <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                    </Button>
                    <Button
                      onClick={nextTestimonial}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 p-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                    >
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </Button>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-6">
                      {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentTestimonial(index * 3)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${Math.floor(currentTestimonial / 3) === index
                              ? "bg-orange-400 scale-125"
                              : "bg-white/30 hover:bg-white/50"
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* New Trading Features Section */}
                <div className="text-center mb-12 sm:mb-16 mt-16 sm:mt-20">
                  <div className="max-w-6xl mx-auto px-4 sm:px-8 relative">
                    {/* Bitcoin Logo */}
                    <div className="flex justify-center mb-6 sm:mb-8">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                        <div className="text-2xl sm:text-3xl font-bold text-white">₿</div>
                      </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6 animate-in slide-in-from-bottom-5 duration-700">
                      {t.tradingEasyTitle}{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                        {t.tradingEasyHighlight}
                      </span>
                    </h2>
                    <p className="text-base sm:text-lg text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                      {t.tradingEasyIntro}
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
                      {/* Feature 1 */}
                      <div className="bg-blue-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-blue-600/30 animate-in slide-in-from-left-5 duration-700 delay-200">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Percent className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                          </div>
                          <div className="text-left">
                            <h3 className="text-lg sm:text-xl font-bold text-orange-400 mb-2">
                              {t.featureAiSelectionsTitle}
                            </h3>
                          </div>
                        </div>
                        <p className="text-white text-sm leading-relaxed text-left">{t.featureAiSelectionsText}</p>
                      </div>

                      {/* Feature 2 */}
                      <div className="bg-blue-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-blue-600/30 animate-in slide-in-from-right-5 duration-700 delay-300">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Percent className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                          </div>
                          <div className="text-left">
                            <h3 className="text-lg sm:text-xl font-bold text-orange-400 mb-2">
                              {t.featureAutoTradingTitle}
                            </h3>
                          </div>
                        </div>
                        <p className="text-white text-sm leading-relaxed text-left">{t.featureAutoTradingText}</p>
                      </div>

                      {/* Feature 3 */}
                      <div className="bg-blue-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-blue-600/30 animate-in slide-in-from-left-5 duration-700 delay-400">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Headphones className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                          </div>
                          <div className="text-left">
                            <h3 className="text-lg sm:text-xl font-bold text-orange-400 mb-2">
                              {t.featureSupportTitle}
                            </h3>
                          </div>
                        </div>
                        <p className="text-white text-sm leading-relaxed text-left">{t.featureSupportText}</p>
                      </div>

                      {/* Feature 4 */}
                      <div className="bg-blue-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-blue-600/30 animate-in slide-in-from-right-5 duration-700 delay-500">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Users className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                          </div>
                          <div className="text-left">
                            <h3 className="text-lg sm:text-xl font-bold text-orange-400 mb-2">
                              {t.featureCommunityTitle}
                            </h3>
                          </div>
                        </div>
                        <p className="text-white text-sm leading-relaxed text-left">{t.featureCommunityText}</p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="animate-in slide-in-from-bottom-5 duration-700 delay-600">
                      <Button
                        onClick={() => {
                          const formElement = document.querySelector("#registration-form")
                          if (formElement) {
                            formElement.scrollIntoView({ behavior: "smooth", block: "center" })
                          }
                        }}
                        size="lg"
                        className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-3 h-14 sm:px-12 sm:py-4 sm:h-16 text-lg sm:text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        <div className="relative flex items-center gap-3">
                          <span>{t.createAccountButton}</span>
                          <svg
                            className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            />
                          </svg>
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* How to Start Section */}
                <div className="text-center mb-12 sm:mb-16 mt-16 sm:mt-20">
                  <div className="max-w-6xl mx-auto px-4 sm:px-8">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-12 sm:mb-16 animate-in slide-in-from-bottom-5 duration-700">
                      <span className="text-orange-400">{t.howToStartTitle}</span> {t.howToStartHighlight}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {/* Step 1 */}
                      <div className="text-center animate-in slide-in-from-left-5 duration-700 delay-200">
                        <div className="mb-6">
                          <div className="text-orange-400 text-xl sm:text-2xl font-bold mb-4">Paso 1</div>
                          <div className="w-full h-40 sm:h-48 bg-blue-800/30 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                            <div className="text-white text-center">
                              <User className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-orange-400" />
                              <p>{language === "es" ? "Inscripción" : "Registration"}</p>
                            </div>
                          </div>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-4">{t.step1Title}</h3>
                        <p className="text-white/80 text-sm leading-relaxed">{t.step1Description}</p>
                      </div>

                      {/* Step 2 */}
                      <div className="text-center animate-in slide-in-from-bottom-5 duration-700 delay-300">
                        <div className="mb-6">
                          <div className="text-blue-400 text-xl sm:text-2xl font-bold mb-4">Paso 2</div>
                          <div className="w-full h-40 sm:h-48 bg-blue-800/30 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                            <div className="text-white text-center">
                              <DollarSign className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-blue-400" />{" "}
                              {/* Changed to DollarSign icon */}
                              <p>{language === "es" ? "Depósito" : "Deposit"}</p>
                            </div>
                          </div>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-4">{t.step2Title}</h3>
                        <p className="text-white/80 text-sm leading-relaxed">{t.step2Description}</p>
                      </div>

                      {/* Step 3 */}
                      <div className="text-center animate-in slide-in-from-right-5 duration-700 delay-400">
                        <div className="mb-6">
                          <div className="text-green-400 text-xl sm:text-2xl font-bold mb-4">Paso 3</div>
                          <div className="w-full h-40 sm:h-48 bg-blue-800/30 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                            <div className="text-white text-center">
                              <Phone className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-green-400" />
                              <p>{language === "es" ? "Llamada" : "Call"}</p>
                            </div>
                          </div>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-4">{t.step3Title}</h3>
                        <p className="text-white/80 text-sm leading-relaxed">{t.step3Description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="text-center mb-12 sm:mb-16 mt-16 sm:mt-20">
                  <div className="max-w-4xl mx-auto px-4 sm:px-8 relative">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8 sm:mb-12 animate-in slide-in-from-bottom-5 duration-700">
                      <span className="text-orange-400">{t.faqTitle}</span> {t.faqHighlight}
                    </h2>
                    <div className="space-y-4">
                      {faqData.map((faq, index) => (
                        <div
                          key={faq.id}
                          className="bg-blue-600/80 backdrop-blur-sm rounded-2xl border border-blue-400/30 overflow-hidden animate-in slide-in-from-bottom-3 duration-500"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <button
                            onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                            className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-blue-600/60 transition-all duration-300"
                          >
                            <div className="flex items-center gap-4">
                              <div className="bg-orange-400 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                                {String(faq.id).padStart(2, "0")}
                              </div>
                              <h3 className="text-base sm:text-lg font-semibold text-white">
                                {faq.question[language]}
                              </h3>
                            </div>
                            <div
                              className="text-orange-400 text-2xl font-bold transition-transform duration-300"
                              style={{ transform: expandedFAQ === faq.id ? "rotate(45deg)" : "rotate(0deg)" }}
                            >
                              +
                            </div>
                          </button>
                          {expandedFAQ === faq.id && (
                            <div className="px-4 pb-4 sm:px-6 sm:pb-6 animate-in slide-in-from-top-2 duration-300">
                              <p className="text-white/90 leading-relaxed pl-12">{faq.answer[language]}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Final Section with Smaller Form */}
                <div className="mb-12 sm:mb-16 mt-16 sm:mt-20">
                  <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                      {/* Left Side - Content */}
                      <div className="space-y-6 animate-in slide-in-from-left-5 duration-700">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                          <span className="text-orange-400">{t.finalSectionTitle}</span>
                        </h2>
                        <div className="text-white text-lg font-semibold mb-4">{t.finalSectionSubtitle}</div>
                        <p className="text-white/90 leading-relaxed">{t.finalSectionText}</p>
                      </div>

                      {/* Right Side - Smaller Form */}
                      <div className="animate-in slide-in-from-right-5 duration-700">
                        <div className="bg-blue-600/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-blue-400/20">
                          <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-6">{t.improveLife}</h3>
                          <form className="space-y-4" action={registrationAction}>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600 w-4 h-4 z-10" />
                              <Input
                                name="name"
                                placeholder={t.smallFormNamePlaceholder}
                                value={formData.name}
                                onChange={(e) => handleInputChange("name", e.target.value)}
                                required
                                className="w-full bg-white/95 border-0 h-10 text-gray-900 placeholder:text-gray-500 pl-10 rounded-lg text-sm"
                              />
                            </div>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600 w-4 h-4 z-10" />
                              <Input
                                name="surname"
                                placeholder={t.smallFormSurnamePlaceholder}
                                value={formData.surname}
                                onChange={(e) => handleInputChange("surname", e.target.value)}
                                required
                                className="w-full bg-white/95 border-0 h-10 text-gray-900 placeholder:text-gray-500 pl-10 rounded-lg text-sm"
                              />
                            </div>
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600 w-4 h-4 z-10" />
                              <Input
                                name="email"
                                type="email"
                                placeholder={t.smallFormEmailPlaceholder}
                                value={formData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                                required
                                className="w-full bg-white/95 border-0 h-10 text-gray-900 placeholder:text-gray-500 pl-10 rounded-lg text-sm"
                              />
                            </div>
                            {/* Date of Birth Field (Small Form) */}
                            <div className="relative">
                              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600 w-4 h-4 z-10" />
                              <Input
                                name="dateOfBirth"
                                type="date"
                                placeholder={t.smallFormDobPlaceholder}
                                value={formData.dateOfBirth}
                                onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                                required
                                className="w-full bg-white/95 border-0 h-10 text-gray-900 placeholder:text-gray-500 pl-10 rounded-lg text-sm"
                              />
                            </div>
                            <div className="flex animate-in slide-in-from-left-3 duration-500 delay-800 rounded-lg shadow-lg overflow-hidden">
                              <div className="relative w-1/3">
                                <Select
                                  name="countryCode"
                                  value={formData.countryCode}
                                  onValueChange={(value) => handleInputChange("countryCode", value)}
                                >
                                  <SelectTrigger
                                    className="w-full bg-orange-400 border-r border-gray-300 text-white rounded-l-lg rounded-r-none text-sm flex items-center justify-start pl-3"
                                    style={{ minHeight: "40px", height: "40px" }}
                                  >
                                    <SelectValue>
                                      <div className="flex items-center gap-2">
                                        <span className="text-sm">
                                          {selectedCountry?.id.toUpperCase()} {selectedCountry?.code}
                                        </span>
                                      </div>
                                    </SelectValue>
                                  </SelectTrigger>
                                  <SelectContent className="w-[var(--radix-popper-anchor-width)] max-h-80 rounded-xl border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
                                    {filteredCountries.map((country) => (
                                      <SelectItem key={country.id} value={country.code}>
                                        {country.flag} {country.code}{" "}
                                        {language === "es" ? country.name : country.country}
                                      </SelectItem>
                                    ))}
                                    {filteredCountries.length === 0 && (
                                      <div className="p-2 text-sm text-gray-500 text-center">{t.noCountriesFound}</div>
                                    )}
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="relative flex-1">
                                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600 w-4 h-4 z-10" />
                                <Input
                                  name="phone"
                                  placeholder={t.smallFormPhonePlaceholder}
                                  value={formData.phone}
                                  onChange={(e) => handleInputChange("phone", e.target.value)}
                                  required
                                  className="w-full bg-white/95 border-0 h-10 text-gray-900 placeholder:text-gray-500 pl-10 rounded-r-lg rounded-l-none text-sm min-h-[40px]"
                                />
                              </div>
                            </div>
                            {phoneError && <p className="text-red-400 text-sm text-left mt-1">{phoneError}</p>}
                            <input type="hidden" name="language" value={language} />
                            <SmallSubmitButton language={language} disabled={!ageConfirmed || !!phoneError}>
                              {t.smallFormRegisterButton}
                            </SmallSubmitButton>
                            {/* Age Confirmation Checkbox (Small Form) */}
                            <div className="flex items-start gap-4 text-xs text-white animate-in fade-in-50 duration-500 delay-600">
                              <div className="relative">
                                <Checkbox
                                  id="age-confirm-small"
                                  checked={ageConfirmed}
                                  onCheckedChange={(checked) => setAgeConfirmed(!!checked)}
                                  required
                                  className="mt-1 border-white/30 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500 transition-all duration-200 hover:scale-110"
                                />
                              </div>
                              <label
                                htmlFor="age-confirm-small"
                                className="leading-relaxed cursor-pointer hover:text-orange-200 transition-colors duration-200"
                              >
                                <Shield className="w-4 h-4 inline mr-2 text-orange-400 align-middle" />
                                {t.ageConfirmation}
                              </label>
                            </div>
                            {/* Terms Checkbox (Small Form) */}
                            <div className="flex items-start gap-4 text-xs text-white animate-in fade-in-50 duration-500 delay-600">
                              <div className="relative">
                                <Checkbox
                                  id="terms-small"
                                  required
                                  className="mt-1 border-white/30 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500 transition-all duration-200 hover:scale-110"
                                />
                              </div>
                              <label
                                htmlFor="terms-small"
                                className="leading-relaxed cursor-pointer hover:text-orange-200 transition-colors duration-200"
                              >
                                <Shield className="w-4 h-4 inline mr-2 text-orange-400 align-middle" />
                                {t.smallFormTermsText}
                              </label>
                            </div>
                            {/* Privacy Text (Small Form) */}
                            <div className="text-xs text-white/80 leading-relaxed animate-in fade-in-50 duration-500 delay-700 bg-white/5 p-4 rounded-lg border border-white/10">
                              <div className="flex items-start gap-2">
                                <svg
                                  className="w-4 h-4 text-blue-300 mt-0.5 flex-shrink-0"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span>{t.smallFormPrivacyText}</span>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer - MOVED OUTSIDE THE MAX-WIDTH CONTAINER */}
          <footer className="bg-blue-900 text-white py-8 sm:py-12 mt-16 sm:mt-20 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
              {/* Company Info */}
              <div className="space-y-4 text-sm">
                <a href="#" className="block">
                  {" "}
                  {/* Made logo clickable */}
                  <img
                    src="/logo.png"
                    alt="Coin Sin Limited Logo"
                    className="h-24 w-48 object-contain rounded-lg mb-2" // Increased logo size
                  />
                </a>
                <p className="leading-relaxed">{t.footerCompanyInfo}</p>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-orange-400 mb-2">Enlaces Rápidos</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#registration-form" className="hover:text-orange-300 transition-colors duration-200">
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
              <p>{t.footerCopyright}</p>
            </div>
            <div className="text-xs text-white/50 mt-4 text-center px-4 sm:px-8 leading-relaxed">
              <p>{t.disclaimerFull}</p>
              <p className="mt-2">{t.officialRegistrationNumber}</p> {/* New line for registration number */}
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
