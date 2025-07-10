"use client"

import { useState, useMemo, useRef } from "react"
import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  TrendingUp,
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
} from "lucide-react"
import { useFormState } from "react-dom"
import { submitRegistration } from "@/actions/submit-registration"

// Componente separado para el botón de envío
function SubmitButton({ children }: { children: React.ReactNode }) {
  const { useFormStatus } = require("react-dom")
  const { pending } = useFormStatus()
  const [language, setLanguage] = useState<"es" | "en">("es") // Assuming language state is available or passed down

  const translations = {
    es: {
      registering: "Registrando...",
    },
    en: {
      registering: "Registering...",
    },
  }
  const t = translations[language]

  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white h-12 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
      <div className="relative flex items-center justify-center gap-3">
        {pending ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            <span>{t.registering}</span>
          </>
        ) : (
          <>
            <svg
              className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span>{children}</span>
          </>
        )}
      </div>
    </Button>
  )
}

// Componente separado para el botón pequeño
function SmallSubmitButton({ children }: { children: React.ReactNode }) {
  const { useFormStatus } = require("react-dom")
  const { pending } = useFormStatus()
  const [language, setLanguage] = useState<"es" | "en">("es") // Assuming language state is available or passed down

  const translations = {
    es: {
      registering: "Registrando...",
    },
    en: {
      registering: "Registering...",
    },
  }
  const t = translations[language]

  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white h-10 text-sm font-bold rounded-lg"
    >
      {pending ? t.registering : children}
    </Button>
  )
}

const translations = {
  es: {
    notification:
      "¡Actúa ahora! Coin Sin Limited está acelerando las ganancias de los participantes! ¡Asegura tu lugar antes de que caduque la invitación Privada!",
    platformBenefit: "Beneficio NETO de la Plataforma:",
    userIncome: "Ingreso total del usuario",
    slotsLeft: "¡Solamente quedan 13 lugares para nuevos usuarios!",
    mainTitle: "Ingresos criptográficos inteligentes todos los días para tu nueva",
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
      "VENTAJAS DE INVERTIR EN CRIPTODIVISAS POPULARES E INFORMACIÓN ESENCIAL SOBRE LA PLATAFORMA COIN SIN LIMITED",
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
    reason5: "Invertir utilizando una máquina es más barato que tomar decisiones humanas y generar más beneficios.",
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
      "¡Pruebe una herramienta sin riesgos para un comercio rentable! Regístrese, deposite al menos 250 € y obtenga su primer beneficio hoy mismo. Simplemente desplácese hasta la parte inferior de la página y regístrese.",
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
    tradingEasyTitle: "¡HACER TRADING CON COIN SIN LIMITED ES",
    tradingEasyHighlight: "100% FÁCIL Y CÓMODO!",
    tradingEasyIntro:
      "Al enviar el formulario a continuación con tu información precisa en esta página web, desbloquearás rápidamente el acceso sin restricciones a nuestro sistema de comercio de IA altamente confiable, dedicado e imparcial. Únete a los más de 2,500 inversores astutos que ya se están beneficiando de sus capacidades.",
    featureAiSelectionsTitle: "SELECCIONES DE INVERSIÓN EXCLUSIVAMENTE RENTABLES REALIZADAS POR IA",
    featureAiSelectionsText:
      "Atrás quedaron los días en que las inversiones estaban reservadas para los ricos. Nuestro avanzado sistema informático analiza meticulosamente la liquidez, la volatilidad y el volumen de operaciones, lo que garantiza decisiones de inversión óptimas. Disfruta de ingresos constantes en tu cuenta a través de acciones de empresas de primer nivel, respaldadas por una impresionante garantía de precisión comercial del 99,4%.",
    featureAutoTradingTitle: "FUNCIONALIDAD DE COMERCIO AUTOMÁTICO IMPECABLE",
    featureAutoTradingText:
      "Experimenta la Conveniencia de nuestra función de trading automático, que te permite generar ganancias sin esfuerzo, incluso cuando no estés en tu puesto de trabajo. ¡No se requiere experiencia comercial! Simplemente haz tu inversión inicial y observa cómo el saldo de tu cuenta crece constantemente.",
    featureSupportTitle: "SOPORTE COMPLETO AL USUARIO",
    featureSupportText:
      "Como miembro valioso de Coin Sin Limited, nuestro amigable gerente de atención al cliente está a tu disposición, listo para atender cualquier consulta o inquietud que puedas tener.",
    featureCommunityTitle: "ACCESO EXCLUSIVO A UNA COMUNIDAD ÚNICA",
    featureCommunityText:
      "Únete a nuestra prestigiosa comunidad Coin Sin Limited y obtén una membresía privilegiada. Considérate afortunado de habernos encontrado y la oportunidad de registrarte. Ten en cuenta que, debido a las limitaciones de capacidad del sistema, solamente podemos enviar invitaciones a un número selecto de usuarios. Aprovecha esta oportunidad para resolver tus problemas económicos de una vez por todas.",
    createAccountButton: "¡Crea tu cuenta!",
    howToStartTitle: "¿CÓMO",
    howToStartHighlight: "EMPEZAR?",
    step1Title: "INSCRIPCIÓN: COMPLETA EL SIGUIENTE FORMULARIO",
    step1Description:
      "El formulario de inscripción se encuentra en esta página. Completa el formulario para convertirte en miembro. Una vez que se apruebe tu registro, te convertirás automáticamente en un nuevo participante de Coin Sin Limited.",
    step2Title: "DEPOSITA 250 € O MÁS",
    step2Description:
      "Al igual que en cualquier aventura empresarial, necesitas algo de capital inicial. La ventaja de la plataforma Coin Sin Limited es que solo requiere una inversión inicial modest. Simplemente deposita 250 € o más para empezar a ganar dinero.",
    step3Title: "VIGILA TU TELÉFONO... ¡PUEDE QUE RECIBAS UNA LLAMADA!",
    step3Description:
      "Después de realizar un pago, nuestro gerente se comunicará contigo para confirmarlo todo y activar tu cuenta. Si tienes alguna pregunta, el gerente te brindará respuestas detalladas para ayudarte. Ten en cuenta que la llamada puede provenir de un número no identificado.",
    faqTitle: "PREGUNTAS",
    faqHighlight: "FRECUENTES",
    finalSectionTitle: "APROVECHA LA OPORTUNIDAD DE CONVERTIRTE EN UN INVERSOR INTELIGENTE HOY MISMO Y...",
    finalSectionSubtitle: "...DESATA UN MUNDO DE POSIBILIDADES, CON UN MÍNIMO DE $1,000 EN TU CUENTA TODOS LOS DÍAS!",
    finalSectionText:
      "Toma acción ahora proporcionando tu nombre completo y correo electrónico en el formulario a continuación, y desbloquea la oportunidad más excepcional y exclusiva para generar ingresos sustanciales sin esfuerzo. Deja que la IA se encargue del trabajo duro mientras tú cosechas beneficios tangibles al instante. ¡No te lo pierdas!",
    footerCompanyInfo:
      "Coin Sin Limited es una empresa que se especializa en proporcionar información y herramientas para la inversión y el comercio de criptomonedas, basadas en inteligencia artificial.",
    footerContactTitle: "Contacto",
    footerEmailLabel: "Correo Electrónico:",
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
  },
  en: {
    notification:
      "Act now! Coin Sin Limited is accelerating participants' earnings! Secure your spot before the Private invitation expires!",
    platformBenefit: "Platform NET Benefit:",
    userIncome: "Total user income",
    slotsLeft: "Only 13 spots left for new users!",
    mainTitle: "Smart cryptocurrency income every day for your new",
    mainTitleHighlight: "stress-free life forever",
    subtitle: "Our users typically make x2, x5 and even x10 on investments",
    readyToJoin: "READY TO JOIN? START YOUR REGISTRATION IN THE SYSTEM HERE AND NOW.",
    motivationalText:
      "YOU ARE ENTITLED TO FINANCIAL INDEPENDENCE, AND IT IS NOT A PRIVILEGE. IT IS YOUR RIGHT, REGARDLESS OF YOUR AGE, ACCOMPLISHMENTS AND SOCIAL STATUS.",
    playVideo: "Play Video",
    pauseVideo: "Pause Video",
    improveLife: "IMPROVE YOUR LIFE TODAY",
    namePlaceholder: "Your name",
    surnamePlaceholder: "Your surname",
    emailPlaceholder: "Your email address",
    phonePlaceholder: "9 11 2345-6789",
    registerButton: "Register Me",
    searchCountry: "Search country...",
    termsText: "By registering, you accept and agree to the terms of use and the site's Privacy Policy.",
    privacyText:
      "Your data is always protected with Coin Sin Limited. By completing this form, you agree to receive our marketing emails. You can change your mind at any time by clicking the unsubscribe link at the bottom of any of our emails.",
    registrationSuccessTitle: "Thank You for Registering!",
    noCountriesFound: "No countries found",
    masterTradingTitle: "MASTER CRYPTOCURRENCY TRADING WITH OUR",
    masterTradingHighlight: "AI INVESTMENT TOOL WITH 99.4% PRECISION",
    ctaParagraph1:
      "Imagine a new life where work becomes optional, savings are no longer necessary, and all your bills are paid effortlessly. Imagine the freedom to explore, plan a new car, or even have a house.",
    ctaParagraph2:
      "Now imagine looking at your smartphone screen and witnessing another effortless $1,000 gain today. Sounds attractive, doesn't it?",
    ctaParagraph3:
      "Coin Sin Limited makes it possible. As an AI-powered startup platform, we empower new investors to dive into the world of cryptocurrency investments, regardless of their previous experience. Starting with an investment of just €250, you can take advantage of the opportunity to multiply your daily earnings by x5.",
    ctaParagraph4:
      "Ready to join us? Follow the instructions on this page and embark on your exciting journey towards a stable and worry-free life, full of abundant pleasures!",
    startNowButton: "Start now",
    advantagesTitle:
      "ADVANTAGES OF INVESTING IN POPULAR CRYPTOCURRENCIES AND ESSENTIAL INFORMATION ABOUT THE COIN SIN LIMITED PLATFORM",
    advantagesIntro:
      "Investing in digital currencies is an attractive option for investors. Cryptocurrencies bring together all the necessary characteristics to offer stable liquidity. Two key factors determine the benefits of this type of investment:",
    growthPotentialTitle: "Growth potential:",
    growthPotentialText:
      "Some cryptocurrencies have already reached significant value, but many projects have great development potential. Due to their growing popularity, the cryptocurrency market attracts investors who can obtain high returns by investing in digital assets.",
    diversificationTitle: "Portfolio diversification:",
    diversificationText:
      "Cryptocurrencies provide the opportunity to diversify your investment portfolio. They provide an alternative asset class that is independent of traditional financial markets. Investing in cryptocurrencies helps diversify risk and protect the portfolio from potential negative influences in one area.",
    focusOnPlatformTitle: "Let's now focus on the Coin Sin Limited platform.",
    focusOnPlatformText1:
      "Why is artificial intelligence (AI) fundamental for the investment market? AI is faster than the human brain and can analyze data accurately, provided the system is configured correctly. Machine learning has three significant advantages in the investment market.",
    focusOnPlatformText2:
      "Additionally, artificial intelligence operates in the market 24/7 now. It means real-time global situation awareness, accumulation of pattern knowledge, and immediate creation of profitable strategies. The Coin Sin Limited platform offers effective profitability achievable for humans. It's a matter of time before machines fully assume this function.",
    focusOnPlatformText3:
      "Another factor that makes investment attractive in Canada, Australia and other countries is education. Many people feel that a human can take decisions influenced by emotions, a machine remains objective and rational. It is essential not to forget emotions. Separating rationality from emotion is fundamental, but I realize in the investment sphere, where everything is decided based on pure data and accurate forecasts.",
    focusOnPlatformText4:
      "Furthermore, investing before obtaining income is significantly different. Before a person starts earning income, they spend a significant amount of money on testing, which has benefits, in addition to acquiring situational experience and investment awareness. In contrast, a machine handles this much faster and requires minimal outlay to maximize the income.",
    nineReasonsIntro:
      "So, we have nine main reasons why using the Coin Sin Limited platform is beneficial, especially for beginner traders:",
    reason1:
      "Our trading tools process large amounts of data quickly and efficiently, allowing you to make precise decisions.",
    reason2: "AI-based software provides advanced market analysis with accurate data and forecasts.",
    reason3: "Artificial intelligence adapts to current market conditions, suggesting the best investment strategies.",
    reason4: "Investing with an AI-based system is not affected by human errors and provides objective information.",
    reason5: "Investing using a machine is cheaper than making human decisions and generates more profits.",
    reason6: "Artificial intelligence requires less initial investment, which increases investment efficiency.",
    reason7: "Investing with AI-based tools makes investments affordable in Canada, Australia and other countries.",
    reason8: "The use of artificial intelligence increases the speed of decision making.",
    reason9: "Artificial intelligence provides faster decision making to perform better investment actions.",
    efficiencyGuarantee:
      "Thus, artificial intelligence guarantees investment profitability by ensuring system efficiency of at least 95%. Accuracy depends on the specific system, but can reach between 95% and 99.4% for humans. The efficiency of our Coin Sin Limited algorithm-based trading instruments is 99.4%.",
    platformBenefitTitle: "COIN SIN LIMITED IS A PLATFORM THAT WORKS FOR THE BENEFIT OF THE INVESTOR",
    platformBenefitText1:
      "For novice investors, investing in cryptocurrencies can be incredibly complicated. Often, beginners need to understand all the intricacies of this field so as not to lose their small investments in the shortest possible time. This leads them to lose interest in cryptocurrencies and investment in general. However, they need to realize the potential opportunities they are missing.",
    platformBenefitText2:
      "The Coin Sin Limited platform allows them to realize their dreams of stable passive income. Based on artificial intelligence, this algorithm works continuously, analyzing the market situation, studying cryptocurrency trends and performing operations that almost always turn out to be profitable. Thousands of people around the world have already generated billions of dollars with Coin Sin Limited.",
    platformFeaturesTitle: "Coin Sin Limited platform features include:",
    feature1:
      "Deep knowledge of the cryptocurrency market and trends in the world of digital assets that are beyond the reach of the human mind.",
    feature2:
      "The supercomputer can calculate millions of variations every second and predict trends with maximum precision.",
    feature3: "Safe operations with benefits for the investor.",
    platformUnnoticedText:
      "The Coin Sin Limited platform went unnoticed at the time of product launch. However, it is causing anger and panic among central banks and governments around the world. While big players try to stop the Coin Sin Limited platform project, you can start making a lot of money now.",
    investSmartTitle: "INVEST IN CRYPTOCURRENCIES INTELLIGENTLY WITH THE COIN SIN LIMITED PLATFORM",
    investSmartText1:
      "Times are not easy, and everything around us is gradually going downhill. Although the situation may improve in the future, everyone should take care of their future today so as not to depend on external factors. Smart tools can help you with this.",
    investSmartText2:
      "The Coin Sin Limited investment platform allows you to do this without wasting time studying the digital currency market. You can start investing today in countries like Canada, Australia and others. Success is pre-calculated, and all you need is the desire to join.",
    algorithmToolsIntro: "The algorithm provides you with tools to help you:",
    tool1: "Avoid unnecessary risks and losses.",
    tool2: "Obtain almost completely passive income.",
    tool3: "Work in the market with broad portfolio diversification and parallel risk reduction.",
    tool4: "Receive stable income both short and long term.",
    finalInvitation:
      "Therefore, we invite you to start writing the first page of your successful investor story today after reading the Coin Sin Limited review!",
    potentialEarningsTitle: "WHAT POTENTIAL EARNINGS CAN I EXPECT WHEN INVESTING WITH COIN SIN LIMITED?",
    myInvestment: "My investment:",
    usagePeriod: "Usage period:",
    days: "days",
    potentialProfit: "Potential Profit",
    startInvestingNowButton: "Start Investing Now!",
    disclaimer:
      "* Results shown are estimates based on the platform's historical performance. Investments carry risks.",
    demoAccountTitle: "TRY THE COIN SIN LIMITED DEMO ACCOUNT",
    demoAccountText1:
      "Feel free from the high cost of entry into the investment world! You don't need to spend tens of thousands of dollars to understand cryptocurrency trading, how it works, and what you need to do to avoid losses. We offer you the opportunity to invest even a few hundred dollars and turn them into a profitable business.",
    demoAccountText2:
      "Try a risk-free tool for profitable trading! Register, deposit at least €250, and get your first profit today. Simply scroll to the bottom of the page and register.",
    notScamTitle: "COIN SIN LIMITED IS NOT A SCAM, AND HERE'S WHY",
    notScamText1:
      "It is an automated investment project that offers the opportunity to earn money by investing in popular cryptocurrencies and promising projects in the world of digital assets. The system is controlled by computer engineers and brokers registered with CySEC. Authorized brokers carry out the financial processes in the system.",
    notScamText2:
      "Users have access to a virtual demo account where they can risk-free evaluate the system's capabilities before investing real funds. User protection is the main requirement of the project. SSL certificates and multi-layer encryption reliably protect all personal data.",
    notScamText3:
      "For security, it is recommended to log out after each use and avoid connecting to the system from public networks.",
    notScamText4:
      "Coin Sin Limited offers maximum benefits and risk-free earnings, and presents proof of no fraud. You will also find reviews about Coin Sin Limited below.",
    testimonialsTitle: "DISCOVER WHAT",
    testimonialsHighlight: "COIN SIN LIMITED",
    testimonialsTitle2: "MEMBERS SAY ABOUT THIS TRADING PLATFORM:",
    tradingEasyTitle: "TRADING WITH COIN SIN LIMITED IS",
    tradingEasyHighlight: "100% EASY AND CONVENIENT!",
    tradingEasyIntro:
      "By submitting the form below with your accurate information on this webpage, you will quickly unlock unrestricted access to our highly reliable, dedicated, and unbiased AI trading system. Join over 2,500 astute investors who are already benefiting from its capabilities.",
    featureAiSelectionsTitle: "EXCLUSIVELY PROFITABLE AI-DRIVEN INVESTMENT SELECTIONS",
    featureAiSelectionsText:
      "Gone are the days when investments were reserved for the wealthy. Our advanced computer system meticulously analyzes liquidity, volatility, and trading volume, ensuring optimal investment decisions. Enjoy consistent income in your account through top-tier company shares, backed by an impressive 99.4% trading accuracy guarantee.",
    featureAutoTradingTitle: "IMPECCABLE AUTOMATIC TRADING FUNCTIONALITY",
    featureAutoTradingText:
      "Experience the convenience of our automatic trading feature, allowing you to effortlessly generate profits even when you're away from your workstation. No trading experience required! Simply make your initial investment and watch your account balance steadily grow.",
    featureSupportTitle: "COMPREHENSIVE USER SUPPORT",
    featureSupportText:
      "As a valued member of Coin Sin Limited, our friendly customer support manager is at your disposal, ready to address any queries or concerns you may have.",
    featureCommunityTitle: "EXCLUSIVE ACCESS TO A UNIQUE COMMUNITY",
    featureCommunityText:
      "Join our prestigious Coin Sin Limited community and gain privileged membership. Consider yourself fortunate to have found us and the opportunity to register. Please note that due to system capacity limitations, we can only extend invitations to a select number of users. Seize this opportunity to solve your financial problems once and for all.",
    createAccountButton: "Create your account!",
    howToStartTitle: "¿CÓMO",
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
    footerContactTitle: "Contact",
    footerEmailLabel: "Email:",
    footerCopyright: "All rights reserved.",
    smallFormNamePlaceholder: "Your name",
    smallFormSurnamePlaceholder: "Your surname",
    smallFormEmailPlaceholder: "Your email address",
    smallFormPhonePlaceholder: "9 11 2345-6789",
    smallFormRegisterButton: "Register Me",
    smallFormTermsText: "By registering, you accept and agree to the terms of use and the site's Privacy Policy.",
    smallFormPrivacyText:
      "Your data is always protected with Coin Sin Limited. By completing this form, you agree to receive our marketing emails.",
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

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Jose",
    location: { es: "Madrid, 40 años", en: "Madrid, 40 years old" },
    avatar: "/placeholder.svg?height=60&width=60",
    text: {
      es: "¡No me podía creer lo simple que era ganar dinero con Coin Sin Limited! Siempre me ha faltado el dinero para, cómo se dice, prosperar. Tenía lo justo para vivir, eso es todo. Al fin y al cabo es Madrid, un lugar bastante caro. Pero con Coin Sin Limited, ahora puedo ganar tres veces más cada mes con solo trabajar unas horas desde casa. Es un gran alivio no tener que preocuparme por cuándo me ingresarán la próxima nómina o si podré pagar mis cuentas. ¡Coin Sin Limited realmente ha hecho mi vida mucho más fácil!",
      en: "I couldn't believe how simple it was to make money with Coin Sin Limited! I've always lacked money to, how do you say, prosper. I only had enough to live, that's all. After all, it's Madrid, a pretty expensive place. But with Coin Sin Limited, I can now earn three times more every month by just working a few hours from home. It's a huge relief not to have to worry about when my next paycheck will be deposited or if I'll be able to pay my bills. Coin Sin Limited has truly made my life much easier!",
    },
  },
  {
    id: 2,
    name: "Mercedes",
    location: { es: "Barcelona, 33 años", en: "Barcelona, 33 years old" },
    avatar: "/placeholder.svg?height=60&width=60",
    text: {
      es: "Al vivir con mi esposo e hijos, las necesidades de mi familia siempre han sido nuestra principal prioridad. Sin embargo, con dos pequeños que cuidar, ha sido un desafío para mí ayudar a mi marido de manera significativa. Pero ahora, especialmente al regreso de mi marido de su viaje de negocios, estoy emocionada de sorprenderlo haciéndome cargo de las cuentas y comprando nuevos artículos para nuestro hogar. Coin Sin Limited realmente ha transformado nuestras vidas, brindando oportunidades económicas que nunca creí posibles.",
      en: "Living with my husband and children, my family's needs have always been our top priority. However, with two small ones to care for, it has been challenging for me to significantly help my husband. But now, especially upon my husband's return from his business trip, I'm excited to surprise him by taking care of the bills and buying new items for our home. Coin Sin Limited has truly transformed our lives, providing economic opportunities I never thought possible.",
    },
  },
  {
    id: 3,
    name: "Carlos",
    location: { es: "Valencia, 45 años", en: "Valencia, 45 years old" },
    avatar: "/placeholder.svg?height=60&width=60",
    text: {
      es: "Después de años trabajando en construcción, mis rodillas ya no aguantan como antes. Coin Sin Limited me ha dado una segunda oportunidad. Ahora puedo generar ingresos desde casa sin el desgaste físico. En solo 3 meses he recuperado mi inversión inicial y sigo ganando. Es increíble cómo la tecnología puede cambiar tu vida cuando menos te lo esperabas.",
      en: "After years working in construction, my knees can't handle it like they used to. Coin Sin Limited has given me a second chance. Now I can generate income from home without the physical wear and tear. In just 3 months I have recovered my initial investment and continue to earn. It's incredible how technology can change your life when you least expected it.",
    },
  },
  {
    id: 4,
    name: "Ana",
    location: { es: "Sevilla, 28 años", en: "Seville, 28 years old" },
    avatar: "/placeholder.svg?height=60&width=60",
    text: {
      es: "Como madre soltera, siempre busqué maneras de generar ingresos extra sin descuidar a mi hija. Coin Sin Limited ha sido la respuesta perfecta. Puedo trabajar desde casa en mis horarios libres y los resultados han superado mis expectativas. Ya no me preocupo por llegar a fin de mes y puedo darle a mi hija las cosas que se merece.",
      en: "As a single mother, I always looked for ways to generate extra income without neglecting my daughter. Coin Sin Limited has been the perfect answer. I can work from home in my free hours and the results have exceeded my expectations. I no longer worry about making ends meet and I can give my daughter the things she deserves.",
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
      es: "Nuestros miembros generalmente disfrutan de ganancias diarias de al menos $1,000, ganando constantemente aproximadamente $30,000 por mes y $365,000 por año. Tus ingresos son transparentes y visibles dentro de tu cuenta de usuario.",
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
      en: "There is no limit to your potential earnings with Coin Sin Limited. You can earn as much as you want. Please note that a larger initial investment can lead to higher profits.",
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
    id: 5,
    question: {
      es: "¿Es esto similar a MLM, Marketing de afiliados o Forex?",
      en: "Is this similar to MLM, Affiliate Marketing, or Forex?",
    },
    answer: {
      es: "No, Coin Sin Limited no es un programa de MLM, marketing de afiliación o Forex. Nuestro software utiliza un nuevo algoritmo con una tasa de precisión del 99,4%.",
      en: "No, Coin Sin Limited is not an MLM, affiliate marketing, or Forex program. Our software uses a new algorithm with a 99.4% accuracy rate.",
    },
  },
  {
    id: 6,
    question: {
      es: "¿Hay algún cargo adicional?",
      en: "Are there any additional charges?",
    },
    answer: {
      es: "No, no hay tarifas ocultas o cargos inesperados. Usar Coin Sin Limited es completamente gratis. Simplemente completa el siguiente formulario para",
      en: "No, there are no hidden fees or unexpected charges. Using Coin Sin Limited is completely free. Simply complete the form below to",
    },
  },
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
  const [registrationState, registrationAction] = useFormState(submitRegistration, {
    success: false,
    message: "",
    errors: {
      name: undefined,
      surname: undefined,
      email: undefined,
      phone: undefined,
      countryCode: undefined,
      language: undefined,
      _form: undefined,
    },
  })

  // Calculate return based on investment and days
  const calculateReturn = (investment: number, days: number) => {
    const dailyRate = 0.2176
    const totalReturn = investment * Math.pow(1 + dailyRate, days)
    return Math.round(totalReturn)
  }

  // Calculate percentage gain
  const calculatePercentage = (investment: number, days: number) => {
    const returnAmount = calculateReturn(investment, days)
    return ((returnAmount - investment) / investment) * 100
  }

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => {
      const maxIndex = testimonials.length - 3
      return prev + 3 > maxIndex ? 0 : prev + 3
    })
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => {
      const maxIndex = testimonials.length - 3
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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
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

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage as "es" | "en")
  }

  const selectedCountry = countryCodes.find((c) => c.code === formData.countryCode)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 relative overflow-hidden">
      {/* Notification Bar */}
      <div className="bg-blue-600 text-white text-center py-2 px-4 text-sm">
        <div className="flex items-center justify-center gap-2">
          <Info className="w-4 h-4" />
          <span>{t.notification}</span>
          <Badge variant="destructive" className="ml-2">
            00:00
          </Badge>
        </div>
      </div>

      {/* Floating Crypto Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80 animate-bounce"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-70 animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-60 animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-40 w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-75 animate-bounce"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-60 left-1/4 w-10 h-10 bg-gradient-to-br from-red-400 to-yellow-500 rounded-full opacity-65 animate-bounce"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-8 h-8 text-orange-400" />
            <img src="/logo.png" alt="Coin Sin Limited Logo" className="h-16 w-32 object-contain rounded-lg" />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-white text-sm">
            <div className="text-orange-400 font-semibold">{t.platformBenefit}</div>
            <div className="text-xl font-bold">$466,837,090</div>
          </div>
          <div className="text-white text-sm">
            <div className="text-orange-400 font-semibold">{t.userIncome}</div>
            <div className="text-xl font-bold">07/10/2025 $193,389</div>
          </div>
          <div className="text-white text-sm">
            <div className="text-orange-400 font-semibold">{t.slotsLeft}</div>
          </div>
          <Select value={language} onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="es">🇪🇸 Español</SelectItem>
              <SelectItem value="en">🇺🇸 English</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t.mainTitle}
            <br />
            <span className="text-orange-400">{t.mainTitleHighlight}</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">{t.subtitle}</p>
        </div>

        {/* Combined Section */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-blue-600/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-blue-400/20 animate-in slide-in-from-bottom-5 duration-700">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Video/Content */}
              <div className="space-y-6">
                <div className="bg-blue-700/50 text-white p-4 rounded-lg flex items-center gap-3 animate-in slide-in-from-left-5 duration-700">
                  <Info className="w-5 h-5" />
                  <span className="font-semibold">{t.readyToJoin}</span>
                </div>
                <Card className="bg-gray-900/80 border-gray-700 overflow-hidden shadow-2xl border border-gray-600/20">
                  <CardContent className="p-8">
                    <div className="text-center space-y-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/20 rounded-full mb-4 animate-pulse">
                        <Shield className="w-8 h-8 text-orange-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white leading-tight animate-in fade-in-50 duration-500 delay-200">
                        {t.motivationalText}
                      </h3>
                      <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto rounded-full animate-in slide-in-from-left-5 duration-500 delay-300"></div>
                      {/* Video Player */}
                      <div className="relative bg-black rounded-xl overflow-hidden">
                        <video
                          ref={videoRef}
                          src="/videos/crypto-demo.mp4" // Referencia al video subido a Vercel Blob
                          className="w-full h-80 object-cover" // Altura más grande
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
                            : "Your browser does not support the video tag."}
                        </video>
                        {/* Custom Play/Pause Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Button
                            onClick={toggleVideo}
                            size="lg"
                            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white h-16 w-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 group relative overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                            <div className="relative flex items-center justify-center">
                              {isVideoPlaying ? (
                                <Pause className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                              ) : (
                                <Play className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                              )}
                            </div>
                          </Button>
                        </div>
                        {/* Video Controls (Volume, Fullscreen) */}
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/50 p-2 rounded-lg">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={toggleMute}
                              className="text-white hover:bg-white/20"
                            >
                              {isMuted || volume === 0 ? (
                                <VolumeX className="w-5 h-5" />
                              ) : (
                                <Volume2 className="w-5 h-5" />
                              )}
                            </Button>
                            <input
                              type="range"
                              min="0"
                              max="1"
                              step="0.01"
                              value={volume}
                              onChange={handleVolumeChange}
                              className="w-24 h-1 bg-gray-400 rounded-lg appearance-none cursor-pointer"
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
                  </CardContent>
                </Card>
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
                    <h2 className="text-3xl font-bold text-white mb-4">{t.registrationSuccessTitle}</h2>
                    <p className="text-white/90 text-lg">{registrationState.message}</p>
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
                        <TrendingUp className="w-8 h-8 text-orange-400" />
                      </div>
                      <h2 className="text-3xl font-bold text-white mb-2 animate-in fade-in-50 duration-500 delay-200">
                        {t.improveLife}
                      </h2>
                      <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto rounded-full animate-in slide-in-from-left-5 duration-500 delay-300"></div>
                    </div>
                    <form className="space-y-4" action={registrationAction}>
                      {/* Name Field */}
                      <div className="relative group animate-in slide-in-from-left-3 duration-500 delay-100">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200">
                          <User className="w-5 h-5" />
                        </div>
                        <Input
                          name="name"
                          placeholder={t.namePlaceholder}
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                          className="bg-white/95 backdrop-blur-sm border-0 h-12 text-gray-900 placeholder:text-gray-500 pl-12 pr-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 focus:scale-[1.02] focus:bg-white group"
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
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200">
                          <User className="w-5 h-5" />
                        </div>
                        <Input
                          name="surname"
                          placeholder={t.surnamePlaceholder}
                          value={formData.surname}
                          onChange={(e) => handleInputChange("surname", e.target.value)}
                          required
                          className="bg-white/95 backdrop-blur-sm border-0 h-12 text-gray-900 placeholder:text-gray-500 pl-12 pr-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 focus:scale-[1.02] focus:bg-white group"
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
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200">
                          <Mail className="w-5 h-5" />
                        </div>
                        <Input
                          name="email"
                          type="email"
                          placeholder={t.emailPlaceholder}
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          className="bg-white/95 backdrop-blur-sm border-0 h-12 text-gray-900 placeholder:text-gray-500 pl-12 pr-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 focus:scale-[1.02] focus:bg-white group"
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
                      {/* Phone Field */}
                      <div className="flex gap-3 animate-in slide-in-from-left-3 duration-500 delay-400">
                        <div className="relative">
                          <Select
                            name="countryCode"
                            value={formData.countryCode}
                            onValueChange={(value) => handleInputChange("countryCode", value)}
                            open={isCountrySelectOpen}
                            onOpenChange={setIsCountrySelectOpen}
                          >
                            <SelectTrigger className="w-32 bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 border-0 h-12 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center">
                              <SelectValue>
                                <div className="flex items-center gap-2">
                                  <span className="text-lg">{selectedCountry?.flag}</span>
                                  <span className="text-sm font-semibold">{selectedCountry?.code}</span>
                                </div>
                              </SelectValue>
                            </SelectTrigger>
                            <SelectContent className="max-h-80 rounded-xl border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
                              <div className="p-3 border-b border-gray-100">
                                <div className="relative">
                                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                  <Input
                                    placeholder={t.searchCountry}
                                    value={countrySearch}
                                    onChange={(e) => setCountrySearch(e.target.value)}
                                    className="pl-10 h-10 text-sm rounded-lg border border-gray-200 focus:border-blue-400 transition-colors duration-200"
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
                                      <span className="text-sm font-medium">{country.code}</span>
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
                          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200">
                            <Phone className="w-5 h-5" />
                          </div>
                          <Input
                            name="phone"
                            placeholder={t.phonePlaceholder}
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            required
                            className="bg-white/95 backdrop-blur-sm border-0 h-12 text-gray-900 placeholder:text-gray-500 pl-12 pr-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 focus:scale-[1.02] focus:bg-white"
                          />
                          {formData.phone && formData.phone.length >= 8 && (
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
                      <input type="hidden" name="language" value={language} />
                      {/* Register Button */}
                      <div className="animate-in slide-in-from-bottom-3 duration-500 delay-500">
                        <SubmitButton>{t.registerButton}</SubmitButton>
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
                          <Shield className="w-4 h-4 inline mr-2 text-orange-400" />
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
          <div className="max-w-7xl mx-auto mt-16 space-y-16">
            {/* CTA Section */}
            <div className="text-center space-y-8 px-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight animate-in slide-in-from-bottom-5 duration-700">
                {t.masterTradingTitle}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                  {t.masterTradingHighlight}
                </span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="space-y-4 text-white animate-in slide-in-from-left-5 duration-700 delay-300">
                  <p className="text-lg leading-relaxed">{t.ctaParagraph1}</p>
                  <p className="text-lg leading-relaxed">{t.ctaParagraph2}</p>
                </div>
                <div className="space-y-4 text-white animate-in slide-in-from-right-5 duration-700 delay-400">
                  <p className="text-lg leading-relaxed">{t.ctaParagraph3}</p>
                  <p className="text-lg leading-relaxed font-semibold text-orange-300">{t.ctaParagraph4}</p>
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
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-12 py-4 h-16 text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <div className="relative flex items-center gap-3">
                    <span>{t.startNowButton}</span>
                    <svg
                      className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300"
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

            {/* First Information Block */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight animate-in slide-in-from-bottom-5 duration-700 mb-12">
                {t.advantagesTitle}
              </h2>
              <div className="grid md:grid-cols-2 gap-12 text-white text-left">
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
            </div>

            {/* Second Information Block */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight animate-in slide-in-from-bottom-5 duration-700 mb-12">
                {t.platformBenefitTitle}
              </h2>
              <div className="grid md:grid-cols-2 gap-12 text-white text-left">
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
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight animate-in slide-in-from-bottom-5 duration-700 mb-12">
                {t.investSmartTitle}
              </h2>
              <div className="grid md:grid-cols-2 gap-12 text-white text-left relative">
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
                <div className="absolute bottom-0 right-0 opacity-20 animate-pulse">
                  <div className="text-8xl text-orange-400 font-bold">₿</div>
                </div>
              </div>
            </div>

            {/* Investment Calculator Section */}
            <div className="text-center mb-16 mt-20">
              <div className="max-w-4xl mx-auto">
                <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-3xl p-8 shadow-2xl border border-blue-400/30 overflow-hidden">
                  {/* Floating Coins */}
                  <div
                    className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80 animate-bounce"
                    style={{ animationDelay: "0s" }}
                  >
                    <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-white">
                      ₿
                    </div>
                  </div>
                  <div
                    className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-70 animate-bounce"
                    style={{ animationDelay: "1s" }}
                  >
                    <div className="w-full h-full flex items-center justify-center text-lg font-bold text-white">₿</div>
                  </div>
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                      {t.potentialEarningsTitle}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      {/* Left Side - Controls */}
                      <div className="space-y-8">
                        {/* Investment Amount */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-4">
                            <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-6 py-3 rounded-full font-bold text-lg min-w-[140px] text-center">
                              {calculatorData.investment.toLocaleString()} USD
                            </div>
                            <span className="text-white font-semibold text-lg">{t.myInvestment}</span>
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
                            <div className="flex justify-between text-white text-sm mt-2">
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
                          <div className="flex items-center gap-4">
                            <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-6 py-3 rounded-full font-bold text-lg min-w-[140px] text-center">
                              {calculatorData.days} {t.days}
                            </div>
                            <span className="text-white font-semibold text-lg">{t.usagePeriod}</span>
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
                            <div className="flex justify-between text-white text-sm mt-2">
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
                        <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-8 text-center min-w-[280px]">
                          <div className="text-5xl md:text-6xl font-bold text-white mb-2 animate-pulse">
                            {calculateReturn(calculatorData.investment, calculatorData.days).toLocaleString()} USD
                          </div>
                          <div className="text-orange-300 font-semibold text-lg">{t.potentialProfit}</div>
                          <div className="text-green-400 font-bold text-xl mt-2">
                            +{calculatePercentage(calculatorData.investment, calculatorData.days).toFixed(1)}%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 text-center">
                      <Button
                        onClick={() => {
                          const formElement = document.querySelector("#registration-form")
                          if (formElement) {
                            formElement.scrollIntoView({ behavior: "smooth", block: "center" })
                          }
                        }}
                        size="lg"
                        className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 h-14 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-green-400/30 to-green-600/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        <div className="relative flex items-center gap-3">
                          <span>{t.startInvestingNowButton}</span>
                          <svg
                            className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
                    <div className="mt-6 text-white/80 text-sm text-center">
                      <p>{t.disclaimer}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Demo Account Section */}
            <div className="text-center mb-16 mt-20">
              <div className="max-w-6xl mx-auto px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-12 animate-in slide-in-from-bottom-5 duration-700">
                  {t.demoAccountTitle}
                </h2>
                <div className="grid md:grid-cols-2 gap-12 text-white text-left mb-12">
                  <div className="space-y-6 animate-in slide-in-from-left-5 duration-700 delay-200">
                    <p className="text-base leading-relaxed">{t.demoAccountText1}</p>
                  </div>
                  <div className="space-y-6 animate-in slide-in-from-right-5 duration-700 delay-300">
                    <p className="text-base leading-relaxed">{t.demoAccountText2}</p>
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-8 animate-in slide-in-from-bottom-5 duration-700 delay-500">
                  {t.notScamTitle}
                </h3>
                <div className="grid md:grid-cols-2 gap-12 text-white text-left mb-12">
                  <div className="space-y-6 animate-in slide-in-from-left-5 duration-700 delay-600">
                    <p className="text-base leading-relaxed">{t.notScamText1}</p>
                    <p className="text-base leading-relaxed">{t.notScamText2}</p>
                  </div>
                  <div className="space-y-6 animate-in slide-in-from-right-5 duration-700 delay-700">
                    <p className="text-base leading-relaxed">{t.notScamText3}</p>
                    <p className="text-base leading-relaxed">{t.notScamText4}</p>
                  </div>
                </div>
                {/* Security Lock Icon */}
                <div className="flex justify-center animate-in fade-in-50 duration-700 delay-800">
                  <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Section with Grid Layout */}
            <div className="text-center mb-16 mt-20">
              <div className="max-w-7xl mx-auto px-8 relative">
                {/* Floating Coin */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80 animate-bounce">
                  <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-white">₿</div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-12 animate-in slide-in-from-bottom-5 duration-700">
                  {t.testimonialsTitle} <span className="text-orange-400">{t.testimonialsHighlight}</span>{" "}
                  {t.testimonialsTitle2}
                </h2>
                {/* Testimonials Grid with Navigation */}
                <div className="relative">
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
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
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white rounded-full w-12 h-12 p-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                  <Button
                    onClick={nextTestimonial}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white rounded-full w-12 h-12 p-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                  >
                    <ChevronRight className="w-6 h-6" />
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
            </div>

            {/* New Trading Features Section */}
            <div className="text-center mb-16 mt-20">
              <div className="max-w-6xl mx-auto px-8 relative">
                {/* Bitcoin Logo */}
                <div className="flex justify-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                    <div className="text-3xl font-bold text-white">₿</div>
                  </div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 animate-in slide-in-from-bottom-5 duration-700">
                  {t.tradingEasyTitle}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                    {t.tradingEasyHighlight}
                  </span>
                </h2>
                <p className="text-lg text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">{t.tradingEasyIntro}</p>
                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {/* Feature 1 */}
                  <div className="bg-blue-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-600/30 animate-in slide-in-from-left-5 duration-700 delay-200">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Percent className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-orange-400 mb-2">{t.featureAiSelectionsTitle}</h3>
                      </div>
                    </div>
                    <p className="text-white text-sm leading-relaxed text-left">{t.featureAiSelectionsText}</p>
                  </div>
                  {/* Feature 2 */}
                  <div className="bg-blue-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-600/30 animate-in slide-in-from-right-5 duration-700 delay-300">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Percent className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-orange-400 mb-2">{t.featureAutoTradingTitle}</h3>
                      </div>
                    </div>
                    <p className="text-white text-sm leading-relaxed text-left">{t.featureAutoTradingText}</p>
                  </div>
                  {/* Feature 3 */}
                  <div className="bg-blue-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-600/30 animate-in slide-in-from-left-5 duration-700 delay-400">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Headphones className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-orange-400 mb-2">{t.featureSupportTitle}</h3>
                      </div>
                    </div>
                    <p className="text-white text-sm leading-relaxed text-left">{t.featureSupportText}</p>
                  </div>
                  {/* Feature 4 */}
                  <div className="bg-blue-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-600/30 animate-in slide-in-from-right-5 duration-700 delay-500">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-orange-400 mb-2">{t.featureCommunityTitle}</h3>
                      </div>
                    </div>
                    <p className="text-white text-sm leading-relaxed text-left">{t.featureCommunityText}</p>
                  </div>
                </div>
                {/* Decorative Coins */}
                <div
                  className="absolute top-20 right-10 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-60 animate-bounce"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="w-full h-full flex items-center justify-center text-lg font-bold text-white">₿</div>
                </div>
                <div
                  className="absolute bottom-20 left-10 w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-70 animate-bounce"
                  style={{ animationDelay: "2s" }}
                >
                  <div className="w-full h-full flex items-center justify-center text-sm font-bold text-white">₿</div>
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
                    className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-12 py-4 h-16 text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <div className="relative flex items-center gap-3">
                      <span>{t.createAccountButton}</span>
                      <svg
                        className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300"
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
            <div className="text-center mb-16 mt-20">
              <div className="max-w-6xl mx-auto px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-16 animate-in slide-in-from-bottom-5 duration-700">
                  <span className="text-orange-400">{t.howToStartTitle}</span> {t.howToStartHighlight}
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Step 1 */}
                  <div className="text-center animate-in slide-in-from-left-5 duration-700 delay-200">
                    <div className="mb-6">
                      <div className="text-orange-400 text-2xl font-bold mb-4">Paso 1</div>
                      <div className="w-full h-48 bg-blue-800/30 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                        <div className="text-white text-center">
                          <User className="w-16 h-16 mx-auto mb-4 text-orange-400" />
                          <p>{language === "es" ? "Inscripción" : "Registration"}</p>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{t.step1Title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{t.step1Description}</p>
                  </div>
                  {/* Step 2 */}
                  <div className="text-center animate-in slide-in-from-bottom-5 duration-700 delay-300">
                    <div className="mb-6">
                      <div className="text-blue-400 text-2xl font-bold mb-4">Paso 2</div>
                      <div className="w-full h-48 bg-blue-800/30 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                        <div className="text-white text-center">
                          <TrendingUp className="w-16 h-16 mx-auto mb-4 text-blue-400" />
                          <p>{language === "es" ? "Depósito" : "Deposit"}</p>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{t.step2Title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{t.step2Description}</p>
                  </div>
                  {/* Step 3 */}
                  <div className="text-center animate-in slide-in-from-right-5 duration-700 delay-400">
                    <div className="mb-6">
                      <div className="text-green-400 text-2xl font-bold mb-4">Paso 3</div>
                      <div className="w-full h-48 bg-blue-800/30 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                        <div className="text-white text-center">
                          <Phone className="w-16 h-16 mx-auto mb-4 text-green-400" />
                          <p>{language === "es" ? "Llamada" : "Call"}</p>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{t.step3Title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{t.step3Description}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="text-center mb-16 mt-20">
              <div className="max-w-4xl mx-auto px-8 relative">
                {/* Floating Coins */}
                <div className="absolute top-10 right-10 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-60 animate-bounce">
                  <div className="w-full h-full flex items-center justify-center text-lg font-bold text-white">₿</div>
                </div>
                <div
                  className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-70 animate-bounce"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-white">₿</div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-12 animate-in slide-in-from-bottom-5 duration-700">
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
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-blue-600/60 transition-all duration-300"
                      >
                        <div className="flex items-center gap-4">
                          <div className="bg-orange-400 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                            {String(faq.id).padStart(2, "0")}
                          </div>
                          <h3 className="text-lg font-semibold text-white">{faq.question[language]}</h3>
                        </div>
                        <div
                          className="text-orange-400 text-2xl font-bold transition-transform duration-300"
                          style={{ transform: expandedFAQ === faq.id ? "rotate(45deg)" : "rotate(0deg)" }}
                        >
                          +
                        </div>
                      </button>
                      {expandedFAQ === faq.id && (
                        <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-300">
                          <p className="text-white/90 leading-relaxed pl-12">{faq.answer[language]}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Final Section with Smaller Form */}
            <div className="mb-16 mt-20">
              <div className="max-w-7xl mx-auto px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left Side - Content */}
                  <div className="space-y-6 animate-in slide-in-from-left-5 duration-700">
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                      <span className="text-orange-400">{t.finalSectionTitle}</span>
                    </h2>
                    <div className="text-white text-lg font-semibold mb-4">{t.finalSectionSubtitle}</div>
                    <p className="text-white/90 leading-relaxed">{t.finalSectionText}</p>
                  </div>
                  {/* Right Side - Smaller Form */}
                  <div className="animate-in slide-in-from-right-5 duration-700">
                    <div className="bg-blue-600/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-blue-400/20">
                      <h3 className="text-2xl font-bold text-white text-center mb-6">{t.improveLife}</h3>
                      <form className="space-y-4" action={registrationAction}>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <Input
                            name="name"
                            placeholder={t.smallFormNamePlaceholder}
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            required
                            className="bg-white/95 border-0 h-10 text-gray-900 placeholder:text-gray-500 pl-10 rounded-lg text-sm"
                          />
                        </div>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <Input
                            name="surname"
                            placeholder={t.smallFormSurnamePlaceholder}
                            value={formData.surname}
                            onChange={(e) => handleInputChange("surname", e.target.value)}
                            required
                            className="bg-white/95 border-0 h-10 text-gray-900 placeholder:text-gray-500 pl-10 rounded-lg text-sm"
                          />
                        </div>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <Input
                            name="email"
                            type="email"
                            placeholder={t.smallFormEmailPlaceholder}
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                            className="bg-white/95 border-0 h-10 text-gray-900 placeholder:text-gray-500 pl-10 rounded-lg text-sm"
                          />
                        </div>
                        <div className="flex gap-2">
                          <Select
                            name="countryCode"
                            value={formData.countryCode}
                            onValueChange={(value) => handleInputChange("countryCode", value)}
                          >
                            <SelectTrigger className="w-24 bg-orange-400 border-0 h-10 text-white rounded-lg text-sm flex items-center">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {countryCodes.map((country) => (
                                <SelectItem key={country.id} value={country.code}>
                                  {country.flag} {country.code}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <div className="relative flex-1">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <Input
                              name="phone"
                              placeholder={t.smallFormPhonePlaceholder}
                              value={formData.phone}
                              onChange={(e) => handleInputChange("phone", e.target.value)}
                              required
                              className="bg-white/95 border-0 h-10 text-gray-900 placeholder:text-gray-500 pl-10 rounded-lg text-sm"
                            />
                          </div>
                        </div>
                        <SmallSubmitButton>{t.smallFormRegisterButton}</SmallSubmitButton>
                        <div className="flex items-start gap-2 text-xs text-white/80">
                          <Checkbox id="terms-small" className="mt-1 w-4 h-4" required />
                          <label htmlFor="terms-small" className="leading-relaxed">
                            {t.smallFormTermsText}
                          </label>
                        </div>
                        <div className="text-xs text-white/70 leading-relaxed bg-white/5 p-3 rounded-lg">
                          {t.smallFormPrivacyText}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <footer className="py-12 relative">
              <div className="max-w-7xl mx-auto px-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Company Info */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-6 h-6 text-orange-400" />
                      <img src="/logo.png" alt="Coin Sin Limited Logo" className="h-20 w-40 object-contain" />
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed">{t.footerCompanyInfo}</p>
                  </div>
                  {/* Contact */}
                  <div className="space-y-4 text-center md:text-right">
                    <h4 className="text-white font-semibold">{t.footerContactTitle}</h4>
                    <div className="space-y-2">
                      <p className="text-white/70 text-sm">{t.footerEmailLabel}</p>
                      <p className="text-orange-400 text-sm">info@coinsinlimited.io</p>
                    </div>
                  </div>
                </div>
                <div className="border-t border-white/10 mt-8 pt-8 text-center">
                  <p className="text-white/60 text-sm">
                    &copy; {new Date().getFullYear()} Coin Sin Limited. {t.footerCopyright}
                  </p>
                </div>
              </div>
            </footer>
          </div>

          {/* Chat Button */}
          <div className="fixed bottom-6 right-6 z-20">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-14 h-14 p-0">
              💬
            </Button>
          </div>
        </div>
        <style jsx>{`
          .slider::-webkit-slider-thumb {
            appearance: none;
            height: 24px;
            width: 24px;
            border-radius: 50%;
            background: linear-gradient(45deg, #f59e0b, #f97316);
            cursor: pointer;
            border: 2px solid white;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          }
          .slider::-moz-range-thumb {
            height: 24px;
            width: 24px;
            border-radius: 50%;
            background: linear-gradient(45deg, #f59e0b, #f97316);
            cursor: pointer;
            border: 2px solid white;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          }
          .line-clamp-4 {
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </div>
    </div>
  )
}
