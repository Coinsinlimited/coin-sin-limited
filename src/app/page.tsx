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
    masterTradingTitle: "DOMINA EL TRADING DE CRIPTOMONEDAS CON NUESTRA",
    masterTradingHighlight: "HERRAMIENTA DE INVERSIÓN DE IA CON UNA PRECISIÓN DEL 99.4%",
    ctaParagraph1:
      "Imagina una nueva vida en la que el trabajo se vuelva opcional, los ahorros ya no sean necesarios y todas tus facturas se paguen sin esfuerzo. Imagina la libertad de explorar, planificar un coche nuevo o incluso tener una casa.",
    ctaParagraph2:
      "Ahora imagínate mirando la pantalla de tu teléfono inteligente y siendo testigo de otra ganancia de 1,000$ sin esfuerzo hoy mismo. Suena atractivo, ¿verdad?",
    ctaParagraph3:
      "Coin Sin Limited lo hace posible. Como una plataforma de inicio impulsada por IA, empoderamos a los nuevos inversores para que se sumerjan en el mundo de las inversiones en criptomonedas, independientemente de su experiencia previa. By starting with an investment of just €250, you can seize the opportunity to multiply your daily earnings by x5.",
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
      "Los tiempos no son fáciles, y todo a nuestro alrededor va poco a poco hacia abajo. Aunque la situación puede mejorar en el futuro, todo el mundo debería ocuparse hoy de su futuro para no depender de factores externos. Smart tools can help you with this.",
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
      "Users have access to a virtual demo account where they can risk-free evaluate the system's capabilities before investing real funds. User protection is the main requirement of the project. SSL certificates and multi-layer encryption reliably protect all personal data.",
    notScamTitle: "COIN SIN LIMITED NO ES UNA ESTAFA, Y ESTA ES LA RAZÓN",
    notScamText1:
      "It is an automated investment project that offers the opportunity to earn money by investing in popular cryptocurrencies and promising projects in the world of digital assets. The system is controlled by computer engineers and brokers registered with CySEC. Authorized brokers carry out the financial processes in the system.",
    notScamText3:
      "For security, it is recommended to log out after each use and avoid connecting to the system from public networks.",
    notScamText4:
      "Coin Sin Limited offers maximum benefits and risk-free earnings, and presents proof of non-fraud. You will also find opinions about Coin Sin Limited below.",
    testimonialsTitle: "DESCUBRE LO QUE DICEN LOS MIEMBROS DE",
    testimonialsHighlight: "COIN SIN LIMITED",
    testimonialsTitle2: "SAY ABOUT THIS TRADING PLATFORM:",
    tradingEasyTitle: "TRADING CON COIN SIN LIMITED ES",
    tradingEasyHighlight: "¡100% FÁCIL Y CÓMODO!",
    tradingEasyIntro:
      "By submitting the form below with your accurate information on this website, you will quickly unlock unrestricted access to our highly reliable, dedicated, and unbiased AI trading system. Join the more than 2,500 astute investors who are already benefiting from its capabilities.",
    featureAiSelectionsTitle: "SELECCIONES DE INVERSIÓN EXCLUSIVAMENTE RENTABLES REALIZADAS POR IA",
    featureAiSelectionsText:
      "Atrás quedaron los días en que las inversiones estaban reservados para los ricos. Nuestro avanzado sistema informático analiza meticulosamente la liquidez, la volatilidad y el volumen de operaciones, lo que garantiza decisiones de inversión óptimas. Disfruta de ingresos constantes en tu cuenta a través de acciones de empresas de primer nivel, respaldadas por una impresionante garantía de precisión comercial del 99.4%.",
    featureAutoTradingTitle: "FUNCIONALIDAD DE COMERCIO AUTOMÁTICO IMPECABLE",
    featureAutoTradingText:
      "Experimenta la Conveniencia de nuestra función de trading automático, que te permite generar ganancias sin esfuerzo, incluso cuando no estés en tu puesto de trabajo. ¡No se requiere experiencia comercial! Simplemente haz tu inversión inicial y observa cómo el saldo de tu cuenta crece constantemente.",
    featureSupportTitle: "SOPORTE INTEGRAL AL USUARIO",
    featureSupportText:
      "As a valuable member of Coin Sin Limited, our friendly customer service manager is at your disposal, ready to address any questions or concerns you may have.",
    featureCommunityTitle: "ACCESO EXCLUSIVO A UNA COMUNIDAD ÚNICA",
    featureCommunityText:
      "Únete a nuestra prestigiosa comunidad Coin Sin Limited y obtén una membresía privilegiada. Considérate afortunado de haber encontrado la oportunidad de registrar. Ten en cuenta que, debido a las limitaciones de capacidad del sistema, solo podemos enviar invitaciones a un número selecto de usuarios. Aprovecha esta oportunidad para resolver tus problemas financieros de una vez por todas.",
    createAccountButton: "¡Crea tu cuenta!",
    howToStartTitle: "CÓMO",
    howToStartHighlight: "EMPEZAR?",
    step1Title: "REGISTRO: COMPLETA EL FORMULARIO A CONTINUACIÓN",
    step1Description:
      "El formulario de registro está en esta página. Completa el formulario para convertirte en miembro. Una vez que tu registro sea aprobado, automáticamente te convertirás en un nuevo participante de Coin Sin Limited.",
    step2Title: "DEPOSITA €250 O MÁS",
    step2Description:
      "As in any business, you need initial capital. The advantage of the Coin Sin Limited platform is that it only requires a modest initial investment. Simply deposit €250 or more to start earning money.",
    step3Title: "ESTATE ATENTO A TU TELÉFONO... ¡PODRÍAS RECIBIR UNA LLAMADA!",
    step3Description:
      "After making a payment, our manager will contact you to confirm everything and activate your account. If you have any questions, the manager will provide detailed answers to help you. Please note that the call may come from an unidentified number.",
    faqTitle: "PREGUNTAS",
    faqHighlight: "FRECUENTES",
    finalSectionTitle: "APROVECHA LA OPORTUNIDAD DE CONVERTIRTE EN UN INVERSOR INTELIGENTE HOY Y...",
    finalSectionSubtitle: "...¡DESATA UN MUNDO DE POSIBILIDADES, CON UN MÍNIMO DE $1,000 EN TU CUENTA CADA DÍA!",
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
    smallFormNamePlaceholder: "Tu nombre",
    smallFormSurnamePlaceholder: "Tu apellido",
    smallFormEmailPlaceholder: "Tu correo electrónico",
    smallFormPhonePlaceholder: "9 11 2345-6789",
    smallFormDobPlaceholder: "Fecha de Nacimiento", // Nuevo placeholder para el formulario pequeño
    smallFormRegisterButton: "Regístrame",
    smallFormTermsText: "By registering, you accept and agree to the site's terms of use and Privacy Policy.",
    smallFormPrivacyText:
      "Your data is always protected with Coin Sin Limited. By completing this form, you agree to receive our marketing emails.",
    ageConfirmation: "Confirmo que soy mayor de edad.",
    disclaimerFull: `IMPORTANTE: Exenciones de Responsabilidad de Ingresos y Legales. Los gráficos de ingresos y ganancias creados por smartbitboost.io, también conocido como "Este Sitio Web", se utilizan únicamente como ilustraciones ideales de su potencial de ganancias. El éxito de las personas en testimonios y otros ejemplos son resultados excepcionales, y por lo tanto no tienen la intención de garantizar que usted u otros lograrán lo mismo. Los resultados individuales dependerán de cómo utilice smartbitboost.io. Por lo que haga, este sitio web no tiene responsabilidad. Siempre debe actuar con precaución y diligencia debida porque asume la plena responsabilidad de sus acciones y decisiones al utilizar productos y servicios. Usted acepta que de ninguna manera este sitio web será responsable de los resultados de su uso de nuestros servicios. Consulte nuestros términos de uso para obtener información sobre nuestras exenciones de responsabilidad y otras restricciones. Si bien el trading puede generar beneficios notables, también conlleva el riesgo de perder el capital invertido en parte o en su totalidad, por lo que debe considerar si puede permitirse invertir. ©2025AVISO REGULATORIO DE EE. UU.: El trading de Forex, CFD y criptomonedas no está bajo ninguna regulación de EE. UU. La inversión en criptomonedas no está regulada ni supervisada por ninguna agencia financiera o de EE. UU. Cualquier trading no regulado por residentes de EE. UU. se considera ilegal. Este sitio web no acepta clientes ni ciudadanos de EE. UU. Este sitio web no tiene responsabilidad por las acciones de clientes ubicados en o con ciudadanía estadounidense. Los clientes ubicados dentro de los Estados Unidos o con ciudadanía estadounidense asumen la plena responsabilidad de sus acciones y decisiones al utilizar productos y servicios from this Website. In any and all circumstances, the choice to use the Website, the Service and/or the Software is under the sole responsibility of the User, who must comply with current legislation.`,
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
    registerButton: "Register Me",
    searchCountry: "Search country...",
    termsText: "By registering, you accept and agree to the site's terms of use and Privacy Policy.",
    privacyText:
      "Your data is always protected with Coin Sin Limited. By completing this form, you agree to receive our marketing emails. You can change your mind at any time by clicking the unsubscribe link at the bottom of any of our emails.",
    registrationSuccessTitle: "Thank You for Registering!",
    noCountriesFound: "No countries found",
    masterTradingTitle: "MASTER CRYPTOCURRENCY TRADING WITH OUR",
    masterTradingHighlight: "AI INVESTMENT TOOL WITH 99.4% ACCURACY",
    ctaParagraph1:
      "Imagine a new life where work becomes optional, savings are no longer necessary, and all your bills are paid effortlessly. Imagine the freedom to explore, plan a new car, or even own a home.",
    ctaParagraph2:
      "Now imagine looking at your smartphone screen and witnessing another effortless $1,000 gain today. Sounds appealing, right?",
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
      "Another factor that makes investing in Canada, Australia, and other countries attractive is education. Many people feel that a human can make decisions influenced by emotions, a machine remains objective and rational. It is essential not to forget emotions. Segregating rationality from emotion is fundamental, but a realization in the investment sphere, where everything is decided based on pure data and exact forecasts.",
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
      "For novice investors, investing in cryptocurrencies can be incredibly complicated. Often, beginners need to understand all the ins and outs of this field so as not to lose their small investments in the shortest possible time. This leads them to lose interest in cryptocurrencies and in investing in general. However, they need to realize the potential opportunities they are missing.",
    platformBenefitText2:
      "The Coin Sin Limited platform allows them to make their dreams of stable passive income come true. Based on artificial intelligence, this algorithm works continuously, analyzing the market situation, studying cryptocurrency trends, and performing operations that almost always result in profits. Thousands of people around the world have already generated billions of dollars with Coin Sin Limited.",
    platformFeaturesTitle: "The features of the Coin Sin Limited platform include:",
    feature1:
      "A deep understanding of the cryptocurrency market and trends in the world of digital assets that are beyond the reach of the human mind.",
    feature2:
      "The supercomputer can calculate millions of variations every second and predict trends with maximum accuracy.",
    feature3: "Secure operations with benefits for the investor.",
    platformUnnoticedText:
      "The Coin Sin Limited platform went unnoticed at the time of product launch. However, it is causing anger and panic among central banks and governments around the world. While big players try to stop the Coin Sin Limited platform project, you can start earning big money now.",
    investSmartTitle: "INVEST IN CRYPTOCURRENCIES SMARTLY WITH THE COIN SIN LIMITED PLATFORM",
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
    footerCopyright: "All rights reserved. Coin Sin Limited.",
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
    disclaimerFull: `IMPORTANT: Income and Legal Disclaimers. The income and earnings graphs created by smartbitboost.io, also known as "This Website", are used solely as ideal illustrations of your earning potential. The success of individuals in testimonials and other examples are exceptional results, and therefore are not intended to guarantee that you or others will achieve the same. Individual results will depend on how you use smartbitboost.io. For whatever you do, this website has no responsibility. You should always act with caution and due diligence because you assume full responsibility for your actions and decisions when using products and services. You agree that in no way will this website be responsible for the results of your use of our services. See our terms of use for information on our disclaimers and other restrictions. While trading can generate notable benefits, it also carries the risk of losing invested capital in part or in full, so you should consider whether you can afford to invest. ©2025USA REGULATORY NOTICE: Forex, CFD, and cryptocurrency trading is not under any US regulation. Cryptocurrency investment is not regulated or supervised by any US or financial agency. Any unregulated trading by US residents is considered illegal. This website does not accept US clients or US citizens. This website has no responsibility for the actions of clients located in or with US citizenship. Clients located within the United States or with US citizenship assume the plena responsabilidad de sus acciones y decisiones al utilizar productos y servicios from this Website. In any and all circumstances, the choice to use the Website, the Service and/or the Software is under the sole responsibility of the User, who must comply with current legislation.`,
  },
}
// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sofía",
    location: { es: "Buenos Aires, 35 años", en: "Buenos Aires, 35 years old" },
    avatar: "/placeholder.svg?height=60&width=60",
    text: {
      es: "¡Increíble! Con Coin Sin Limited, mis ingresos han crecido exponencialmente. Antes, el trading me parecía complicado, pero la IA de esta plataforma lo hace todo tan sencillo. Ahora tengo la libertad financiera que siempre soñé. ¡Totalmente recomendado!",
      en: "Incredible! With Coin Sin Limited, my income has grown exponentially. Before, trading seemed complicated, but this platform's AI makes everything so simple. Now I have the financial freedom I always dreamed of. Totally recommended!",
    },
  },
  {
    id: 2,
    name: "Ricardo",
    location: { es: "Ciudad de México, 48 años", en: "Mexico City, 48 years old" },
    avatar: "/placeholder.svg?height=60&width=60",
    text: {
      es: "Después de años de trabajo duro, buscaba una forma de asegurar mi jubilación. Coin Sin Limited ha sido la solución. La automatización y la precisión de la IA me permiten generar ganancias sin estrés. Es la mejor decisión financiera que he tomado.",
      en: "After years of hard work, I was looking for a way to secure my retirement. Coin Sin Limited has been the solution. The automation and AI precision allow me to generate profits without stress. It's the best financial decision I've ever taken.",
    },
  },
  {
    id: 3,
    name: "Elena",
    location: { es: "Bogotá, 29 años", en: "Bogota, 29 years old" },
    avatar: "/placeholder.svg?height=60&width=60",
    text: {
      es: "Como estudiante, necesitaba ingresos extra sin sacrificar mis estudios. Coin Sin Limited me ha dado esa oportunidad. Dedico solo unos minutos al día y veo cómo mi cuenta crece. Es una herramienta poderosa para cualquiera que quiera mejorar sus finanzas.",
      en: "As a student, I needed extra income without sacrificing my studies. Coin Sin Limited has given me that opportunity. I dedicate only a few minutes a day and watch my account grow. It's a powerful tool for anyone looking to improve your finances.",
    },
  },
  {
    id: 4,
    name: "Andrés",
    location: { es: "Santiago, 42 años", en: "Santiago, 42 years old" },
    avatar: "/placeholder.svg?height=60&width=60",
    text: {
      es: "Siempre fui escéptico con las inversiones online, pero Coin Sin Limited me demostró lo contrario. La transparencia y los resultados son reales. He diversificado mi cartera y mis ganancias superan con creces mis expectativas iniciales. ¡Una plataforma de confianza!",
      en: "I was always skeptical about online investments, but Coin Sin Limited proved me wrong. The transparency and results are real. I've diversified my portfolio, and my earnings far exceed my initial expectations. A trustworthy platform!",
    },
  },
  {
    id: 5,
    name: "Valeria",
    location: { es: "Lima, 31 años", en: "Lima, 31 years old" },
    avatar: "/placeholder.svg?height=60&width=60",
    text: {
      es: "Gracias a Coin Sin Limited, pude pagar mis deudas y empezar a ahorrar para mi casa. La facilidad de uso y el soporte al cliente son excepcionales. Me siento segura invirtiendo aquí, sabiendo que la IA está trabajando para mí 24/7.",
      en: "Thanks to Coin Sin Limited, I was able to pay off my debts and start saving for my house. The ease of use and customer support are exceptional. I feel secure investing here, knowing that AI is working for me 24/7.",
    },
  },
  {
    id: 6,
    name: "Juan",
    location: { es: "Madrid, 55 años", en: "Madrid, 55 years old" },
    avatar: "/placeholder.svg?height=60&width=60",
    text: {
      es: "Nunca pensé que a mi edad podría entender el mundo de las criptomonedas, pero Coin Sin Limited lo hizo posible. La plataforma es intuitiva y los resultados son consistentes. ¡Es una bendición para mi economía familiar!",
      en: "I never thought that at my age I could understand the world of cryptocurrencies, but Coin Sin Limited made it possible. The platform is intuitive and the results are consistent. It's a blessing for my family's economy!",
    },
  },
]
const faqData = [
  {
    id: 1,
    question: {
      es: "¿Qué puedo esperar en términos de resultados?",
      en: "What can I expect in terms of results?",
    },
    answer: {
      es: "Nuestros miembros generalmente disfrutan de ganancias diarias de al menos $1,000, constantemente ganando aproximadamente $30,000 por mes y $365,000 por año. Tus ingresos son transparentes y visibles dentro de tu cuenta de usuario.",
      en: "Our members generally enjoy daily earnings of at least $1,000, consistently earning approximately $30,000 per month and $365,000 per year. Your income is transparent and visible within your user account.",
    },
  },
  {
    id: 2,
    question: {
      es: "¿Cuánto tiempo tengo que dedicar cada día?",
      en: "How much time do I have to dedicate each day?",
    },
    answer: {
      es: "Nuestros miembros informan que pasan menos de 10 minutos al día y aún logran ingresos sustanciales. La compra y venta de acciones está totalmente automatizada y controlada por nuestro sistema de inteligencia artificial.",
      en: "Our members report spending less than 10 minutes a day and still achieving substantial income. Stock buying and selling is fully automated and controlled by our artificial intelligence system.",
    },
  },
  {
    id: 3,
    question: {
      es: "¿Hay un límite máximo de cuánto puedo ganar?",
      en: "Is there a maximum limit to how much I can earn?",
    },
    answer: {
      es: "No hay límite en tus ganancias potenciales con Coin Sin Limited. Puedes ganar tanto como desees. Ten en cuenta que una mayor inversión inicial puede generar mayores ganancias.",
      en: "No, there is no limit to your potential earnings with Coin Sin Limited. You can earn as much as you want. Please note that a larger initial investment can lead to higher profits.",
    },
  },
  {
    id: 4,
    question: {
      es: "¿Qué costos involucrados hay?",
      en: "What costs are involved?",
    },
    answer: {
      es: "El acceso a Coin Sin Limited es totalmente gratuito. Solo se requiere un depósito inicial de €250. Puedes registrarte como miembro completando el formulario a continuación.",
      en: "Access to Coin Sin Limited is completely free. Only an initial deposit of €250 is required. You can register as a member by completing the form below.",
    },
  },
  {
    id: 6,
    question: {
      es: "¿Hay algún cargo adicional?",
      en: "Are there any additional charges?",
    },
    answer: {
      es: "No, no hay tarifas ocultas o cargos inesperadas. Usar Coin Sin Limited es completamente gratis. Simplemente completa el formulario a continuación para",
      en: "No, there are no hidden fees or unexpected charges. Using Coin Sin Limited is completely free. Simply complete the form below to",
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
  { id: "IT", code: "+39", flag: "���🇹", country: "Italy", name: "Italia" },
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
  { id: "MR", code: "+222", flag: "🇲🇷", country: "Mauritania", name: "Mauritania" },
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
export default function CryptoLanding() {
  const [language, setLanguage] = useState<"es" | "en">("es")
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
    investment: 250,
    days: 10,
  })
  const [platformNetBenefit, setPlatformNetBenefit] = useState(466837090)
  const [newUsersToday, setNewUsersToday] = useState(4000)
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
  useEffect(() => {
    const benefitInterval = setInterval(() => {
      setPlatformNetBenefit((prev) => prev + Math.floor(Math.random() * 1000) + 100) // Increment by 100-1099
    }, 5000) // Update every 5 seconds
    const usersInterval = setInterval(() => {
      setNewUsersToday((prev) => prev + Math.floor(Math.random() * 5) + 1) // Increment by 1-5 users
    }, 10000) // Update every 10 seconds
    return () => {
      clearInterval(benefitInterval)
      clearInterval(usersInterval)
    }
  }, [])
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
    setLanguage(newLanguage as "es" | "en")
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
          {/* Main Content (Hero section) */}
          <div className="relative z-20 container mx-auto px-4 py-8 sm:px-6 sm:py-12">
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                {t.mainTitle}
                <br />
                <span className="text-orange-400">{t.mainTitleHighlight}</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">{t.subtitle}</p>
            </div>
          </div>
        </div>
      </div>
      {/* FIN DEL DIV CON LA IMAGEN DE FONDO */}
      {/* Combined Section - MOVED OUTSIDE THE BACKGROUND IMAGE DIV */}
      <div className="max-w-7xl mx-auto">
        {/* Moved "READY TO JOIN" banner here, outside the grid */}
        <div className="bg-blue-700/50 text-white p-4 rounded-lg flex items-center gap-3 mb-6 animate-in slide-in-from-left-5 duration-700">
          <Info className="w-5 h-5" />
          <span className="font-semibold">{t.readyToJoin}</span>
        </div>
        <div className="rounded-2xl p-6 sm:p-8 shadow-2xl border border-blue-400/20 animate-in slide-in-from-bottom-5 duration-700 glowing-form-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 items-start">
            {/* Left Side - Video/Content */}
            <div className="lg:col-span-2 pt-0">
              {" "}
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/20 rounded-full mb-4 animate-pulse">
                  <Shield className="w-8 h-8 text-orange-400" />
                </div>
                <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto rounded-full animate-in slide-in-from-left-5 duration-500 delay-300"></div>
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
                      className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white h-14 w-14 sm:h-16 sm:w-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      <div className="relative flex items-center justify-center">
                        {isVideoPlaying ? (
                          <Pause className="w-7 h-7 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform duration-300" />
                        ) : (
                          <Play className="w-7 h-7 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform duration-300" />
                        )}
                      </div>
                    </Button>
                  </div>
                  {/* Video Controls (Volume, Fullscreen) */}
                  <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between bg-black/50 p-2 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" onClick={toggleMute} className="text-white hover:bg-white/20">
                        {isMuted || volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                      </Button>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="w-20 sm:w-24 h-1 bg-gray-400 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={toggleFullScreen}
                      className="text-white hover:bg-white/20"
                    >
                      <Maximize className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
                <p className="text-white/80 text-sm">{isVideoPlaying ? t.pauseVideo : t.playVideo}</p>
              </div>
            </div>
            {/* Right Side - Registration Form */}
            <div id="registration-form" className="space-y-6">
              {registrationState.success && (
                <div className="text-center space-y-6 animate-in fade-in-50 duration-500">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full mb-4">
                    <svg className="w-10 h-10 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{t.registrationSuccessTitle}</h2>
                  <p className="text-white/90 text-base sm:text-lg">{registrationState.message}</p>
                  <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full"></div>
                </div>
              )}
              {registrationState.errors?._form && (
                <div className="text-red-400 text-sm text-center">{registrationState.errors._form[0]}</div>
              )}
              {!registrationState.success && (
                <>
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/20 rounded-full mb-4 animate-pulse">
                      <img
                        src="/logo.png"
                        alt="Coin Sin Limited Logo"
                        className="h-12 w-24 object-contain rounded-lg"
                      />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 animate-in fade-in-50 duration-500 delay-200">
                      {t.improveLife}
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto rounded-full animate-in slide-in-from-left-5 duration-500 delay-300"></div>
                  </div>
                  <form className="space-y-4" action={registrationAction}>
                    {/* Name Field */}
                    <div className="relative group animate-in slide-in-from-left-3 duration-500 delay-100">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600 group-focus-within:text-blue-500 transition-colors duration-200 z-10">
                        <User className="w-5 h-5" />
                      </div>
                      <Input
                        name="name"
                        placeholder={t.namePlaceholder}
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="w-full bg-white/95 backdrop-blur-sm border-0 h-12 text-gray-900 placeholder:text-gray-500 pl-12 pr-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 focus:scale-[1.02] focus:bg-white group"
                      />
                      {formData.name && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 animate-in zoom-in-50 duration-200">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
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
                        <User className="w-5 h-5" />
                      </div>
                      <Input
                        name="surname"
                        placeholder={t.surnamePlaceholder}
                        value={formData.surname}
                        onChange={(e) => handleInputChange("surname", e.target.value)}
                        required
                        className="w-full bg-white/95 backdrop-blur-sm border-0 h-12 text-gray-900 placeholder:text-gray-500 pl-12 pr-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 focus:scale-[1.02] focus:bg-white group"
                      />
                      {formData.surname && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 animate-in zoom-in-50 duration-200">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
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
                        <Mail className="w-5 h-5" />
                      </div>
                      <Input
                        name="email"
                        type="email"
                        placeholder={t.emailPlaceholder}
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="w-full bg-white/95 backdrop-blur-sm border-0 h-12 text-gray-900 placeholder:text-gray-500 pl-12 pr-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 focus:scale-[1.02] focus:bg-white group"
                      />
                      {formData.email && formData.email.includes("@") && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 animate-in zoom-in-50 duration-200">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
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
                        <Calendar className="w-5 h-5" />
                      </div>
                      <Input
                        name="dateOfBirth"
                        type="date"
                        placeholder={t.dobPlaceholder}
                        value={formData.dateOfBirth}
                        onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                        required
                        className="w-full bg-white/95 backdrop-blur-sm border-0 h-12 text-gray-900 placeholder:text-gray-500 pl-12 pr-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 focus:scale-[1.02] focus:bg-white group"
                      />
                      {formData.dateOfBirth && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 animate-in zoom-in-50 duration-200">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
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
                          <SelectTrigger className="w-full bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 border-r border-gray-300 h-12 text-white rounded-l-xl rounded-r-none text-sm flex items-center justify-start pl-3 min-h-[48px]">
                            <SelectValue>
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-semibold">
                                  {selectedCountry?.id.toUpperCase()} {selectedCountry?.code}
                                </span>
                              </div>
                            </SelectValue>
                          </SelectTrigger>
                          <SelectContent className="w-[var(--radix-popper-anchor-width)] max-h-80 rounded-xl border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
                            <div className="p-3 border-b border-gray-100">
                              <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <Input
                                  placeholder={t.searchCountry}
                                  value={countrySearch}
                                  onChange={(e) => setCountrySearch(e.target.value)}
                                  className="pl-10 h-10 text-sm rounded-lg border border-gray-200 focus:border-blue-400 transition-colors duration-200 w-full"
                                  onClick={(e) => e.stopPropagation()}
                                />
                              </div>
                            </div>
                            <div className="max-h-60 overflow-y-auto">
                              {filteredCountries.map((country) => (
                                <SelectItem
                                  key={country.id}
                                  value={country.code}
                                  className="hover:bg-blue-50 transition-colors duration-150 cursor-pointer"
                                >
                                  <div className="flex items-center gap-3 py-1">
                                    <span className="text-lg">{country.flag}</span>
                                    <span className="text-sm font-semibold">{country.code}</span>
                                    <span className="text-sm text-gray-600">
                                      {language === "es" ? country.name : country.country}
                                    </span>
                                  </div>
                                </SelectItem>
                              ))}
                              {filteredCountries.length === 0 && (
                                <div className="p-4 text-sm text-gray-500 text-center">{t.noCountriesFound}</div>
                              )}
                            </div>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="relative flex-1 group">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600 group-focus-within:text-blue-500 transition-colors duration-200 z-10">
                          <Phone className="w-5 h-5" />
                        </div>
                        <Input
                          name="phone"
                          placeholder={t.phonePlaceholder}
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          required
                          className="w-full bg-white/95 backdrop-blur-sm border-0 h-12 text-gray-900 placeholder:text-gray-500 pl-12 pr-12 rounded-r-xl rounded-l-none min-h-[48px]"
                        />
                        {formData.phone && !phoneError && formData.phone.length >= 8 && (
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 animate-in zoom-in-50 duration-200">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
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
                    {phoneError && <p className="text-red-400 text-sm text-left mt-1">{phoneError}</p>}
                    <input type="hidden" name="language" value={language} />
                    {/* Register Button */}
                    <div className="animate-in slide-in-from-bottom-3 duration-500 delay-500">
                      <SubmitButton language={language} disabled={!ageConfirmed || !!phoneError}>
                        {t.registerButton}
                      </SubmitButton>
                    </div>
                    {/* Age Confirmation Checkbox */}
                    <div className="flex items-start gap-4 text-xs text-white animate-in fade-in-50 duration-500 delay-600">
                      <div className="relative">
                        <Checkbox
                          id="age-confirm"
                          checked={ageConfirmed}
                          onCheckedChange={(checked) => setAgeConfirmed(!!checked)}
                          required
                          className="mt-1 border-white/30 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500 transition-all duration-200 hover:scale-110"
                        />
                      </div>
                      <label
                        htmlFor="age-confirm"
                        className="leading-relaxed cursor-pointer hover:text-orange-200 transition-colors duration-200"
                      >
                        <Shield className="w-4 h-4 inline mr-2 text-orange-400 align-middle" />
                        {t.ageConfirmation}
                      </label>
                    </div>
                    {/* Terms Checkbox */}
                    <div className="flex items-start gap-4 text-xs text-white animate-in fade-in-50 duration-500 delay-600">
                      <div className="relative">
                        <Checkbox
                          id="terms"
                          required
                          className="mt-1 border-white/30 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500 transition-all duration-200 hover:scale-110"
                        />
                      </div>
                      <label
                        htmlFor="terms"
                        className="leading-relaxed cursor-pointer hover:text-orange-200 transition-colors duration-200"
                      >
                        <Shield className="w-4 h-4 inline mr-2 text-orange-400 align-middle" />
                        {t.termsText}
                      </label>
                    </div>
                    {/* Privacy Text */}
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
                        <span>{t.privacyText}</span>
                      </div>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
        {/* All Content in Same Screen - Unified */}
        <div className="max-w-7xl mx-auto mt-12 sm:mt-16 space-y-12 sm:space-y-16">
          {/* CTA Section */}
          <div className="text-center space-y-6 sm:space-y-8 px-4 sm:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight animate-in slide-in-from-bottom-5 duration-700">
              {t.masterTradingTitle}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                {t.masterTradingHighlight}
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left">
              <div className="space-y-4 text-white animate-in slide-in-from-left-5 duration-700 delay-300">
                <p className="text-base sm:text-lg leading-relaxed">{t.ctaParagraph1}</p>
                <p className="text-base sm:text-lg leading-relaxed">{t.ctaParagraph2}</p>
              </div>
              <div className="space-y-4 text-white animate-in slide-in-from-right-5 duration-700 delay-400">
                <p className="text-base sm:text-lg leading-relaxed">{t.ctaParagraph3}</p>
                <p className="text-base sm:text-lg font-semibold text-orange-300">{t.ctaParagraph4}</p>
              </div>
            </div>
            <div className="animate-in slide-in-from-bottom-5 duration-700 delay-500">
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
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{t.startNowButton}</span>
                </div>
              </Button>
            </div>
          </div>
          {/* First Information Block */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight animate-in slide-in-from-bottom-5 duration-700 mb-8 sm:mb-12">
              {t.advantagesTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 text-white text-left">
              {/* Left Column */}
              <div className="space-y-6 animate-in slide-in-from-left-5 duration-700 delay-200">
                <p className="text-base leading-relaxed">{t.advantagesIntro}</p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-orange-400 mb-2">{t.growthPotentialTitle}</h3>
                    <p className="text-base leading-relaxed">{t.growthPotentialText}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-orange-400 mb-2">{t.diversificationTitle}</h3>
                    <p className="text-base leading-relaxed">{t.diversificationText}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-orange-400 mb-2">{t.focusOnPlatformTitle}</h3>
                    <p className="text-base leading-relaxed">{t.focusOnPlatformText1}</p>
                  </div>
                  <p className="text-base leading-relaxed">{t.focusOnPlatformText2}</p>
                  <p className="text-base leading-relaxed">{t.focusOnPlatformText3}</p>
                  <p className="text-base leading-relaxed">{t.focusOnPlatformText4}</p>
                </div>
              </div>
              {/* Right Column */}
              <div className="space-y-6 animate-in slide-in-from-right-5 duration-700 delay-300">
                <p className="text-base leading-relaxed">{t.nineReasonsIntro}</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-base leading-relaxed">{t.reason1}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-base leading-relaxed">{t.reason2}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-base leading-relaxed">{t.reason3}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-base leading-relaxed">{t.reason4}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-base leading-relaxed">{t.reason5}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-base leading-relaxed">{t.reason6}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-base leading-relaxed">{t.reason7}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-base leading-relaxed">{t.reason8}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-base leading-relaxed">{t.reason9}</p>
                  </div>
                </div>
                <div className="bg-blue-800/50 p-6 rounded-lg border border-blue-600/30 mt-8">
                  <p className="text-base leading-relaxed font-medium">{t.efficiencyGuarantee}</p>
                </div>
              </div>
            </div>
            {/* Second Information Block */}
            <div className="text-center mb-12 sm:mb-16 mt-16 sm:mt-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight animate-in slide-in-from-bottom-5 duration-700 mb-8 sm:mb-12">
                {t.platformBenefitTitle}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 text-white text-left">
                <div className="space-y-6 animate-in slide-in-from-left-5 duration-700 delay-200">
                  <p className="text-base leading-relaxed">{t.platformBenefitText1}</p>
                  <p className="text-base leading-relaxed">{t.platformBenefitText2}</p>
                </div>
                <div className="space-y-6 animate-in slide-in-from-right-5 duration-700 delay-300">
                  <p className="text-base leading-relaxed">{t.platformFeaturesTitle}</p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-base leading-relaxed">{t.feature1}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-base leading-relaxed">{t.feature2}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-base leading-relaxed">{t.feature3}</p>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed">{t.platformUnnoticedText}</p>
                </div>
              </div>
            </div>
            {/* Third Information Block */}
            <div className="text-center mb-12 sm:mb-16 mt-16 sm:mt-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight animate-in slide-in-from-bottom-5 duration-700 mb-8 sm:mb-12">
                {t.investSmartTitle}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 text-white text-left relative">
                <div className="space-y-6 animate-in slide-in-from-left-5 duration-700 delay-200">
                  <p className="text-base leading-relaxed">{t.investSmartText1}</p>
                  <p className="text-base leading-relaxed">{t.investSmartText2}</p>
                </div>
                <div className="space-y-6 animate-in slide-in-from-right-5 duration-700 delay-300">
                  <p className="text-base leading-relaxed">{t.algorithmToolsIntro}</p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-base leading-relaxed">{t.tool1}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-base leading-relaxed">{t.tool2}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-base leading-relaxed">{t.tool3}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-base leading-relaxed">{t.tool4}</p>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed font-medium text-orange-300">{t.finalInvitation}</p>
                </div>
                {/* Bitcoin Symbol */}
                <div className="absolute bottom-0 right-0 opacity-20 animate-pulse hidden sm:block">
                  <div className="text-8xl text-orange-400 font-bold">₿</div>
                </div>
              </div>
            </div>
            {/* Investment Calculator Section */}
            <div className="text-center mb-12 sm:mb-16 mt-16 sm:mt-20">
              <div className="max-w-4xl mx-auto">
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
                              {calculatorData.investment.toLocaleString()} USD
                            </div>
                            <span className="text-white font-semibold text-base sm:text-lg">{t.myInvestment}</span>
                          </div>
                          <div className="relative">
                            <input
                              type="range"
                              min="250"
                              max="1000000"
                              step="250"
                              value={calculatorData.investment}
                              onChange={(e) => {
                                const value = Number.parseInt(e.target.value)
                                setCalculatorData((prev) => ({ ...prev, investment: value }))
                              }}
                              className="w-full h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg appearance-none cursor-pointer slider"
                            />
                            <div className="flex justify-between text-white text-xs sm:text-sm mt-2 px-1">
                              <span>250</span>
                              <span>250K</span>
                              <span>500K</span>
                              <span>750K</span>
                              <span>1M</span>
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
                            {calculateReturn(calculatorData.investment, calculatorData.days).toLocaleString()} USD
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
                                clipRule="evenodd"
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
                                <img
                                  src="/logo.png"
                                  alt="Coin Sin Limited Logo"
                                  className="h-12 w-24 object-contain rounded-lg mx-auto mb-4"
                                />
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
                            <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-6">
                              {t.improveLife}
                            </h3>
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
                                        <div className="p-2 text-sm text-gray-500 text-center">
                                          {t.noCountriesFound}
                                        </div>
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
                  {/* Footer */}
                  <footer className="bg-blue-900 text-white py-8 sm:py-12 mt-16 sm:mt-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
                      {/* Company Info */}
                      <div className="space-y-4 text-sm">
                        <img
                          src="/logo.png"
                          alt="Coin Sin Limited Logo"
                          className="h-20 w-40 object-contain rounded-lg mb-2"
                        />
                        <p className="leading-relaxed">{t.footerCompanyInfo}</p>
                      </div>
                      {/* Quick Links */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-bold text-orange-400 mb-2">Enlaces Rápidos</h3>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <a
                              href="#registration-form"
                              className="hover:text-orange-300 transition-colors duration-200"
                            >
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
                    </div>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
