// ============================================================
//  CONTENT FILE: MÉXICO
//  Goes in: contenido/mexico.js  (file name = id in js/paises.js)
//  Pictures go in: images/mexico/
//
//  Spanish word with translation:  [[comida|food]]
//  Keep text inside quotes " " (use ' for quotes inside text)
//  Keep the commas , between items
// ============================================================

var CONTENIDO = {
  // ---------- Quick facts ----------
  datos: [
    { icono: "🏛️", titulo: "Capital", valor: "Ciudad de México" },
    { icono: "🗣️", titulo: "Language", valor: "Español" },
    { icono: "💵", titulo: "Currency", valor: "Peso mexicano ($)" },
    { icono: "👥", titulo: "Population", valor: "Aproximadamente 130 millones" },
    { icono: "☀️", titulo: "Best time", valor: "Invierno" }
  ],

  // ---------- Short introduction ----------
  introduccion: [
    "México es un [[país|country]] de América del Norte. Es famoso por su [[comida|food]], su [[historia|history]], sus [[playas|beaches]] y sus antiguas civilizaciones. Su capital es la Ciudad de México."
  ],

  // ---------- Sections ----------
  secciones: [
    {
      icono: "🏛️", titulo: "Lugares famosos", subtitulo: "Famous places",
      tipo: "tarjetas",
      items: [
        {
          titulo: "Chichén Itzá",
          foto: "images/mexico/chichen.jpg",
          texto: "Una [[antigua|ancient]] [[ciudad|city]] maya situada en Yucatán. Es famosa por sus construcciones históricas."
        },
        {
          titulo: "Teotihuacán",
          foto: "images/mexico/teotihuacan.jpg",
          texto: "Un importante sitio arqueológico cerca de la Ciudad de México, conocido por sus grandes [[pirámides|pyramids]]."
        },
        {
          titulo: "Cancún",
          foto: "images/mexico/cancun.jpg",
          texto: "Una ciudad turística famosa por sus [[playas|beaches]] de arena blanca y sus aguas azules."
        }
      ]
    },

    {
      icono: "🍽️", titulo: "Comida para probar", subtitulo: "Foods to try",
      tipo: "tarjetas",
      items: [
        {
          titulo: "Tacos",
          foto: "images/mexico/tacos.jpg",
          texto: "Se preparan con tortillas de [[maíz|corn]] o trigo y pueden llevar [[carne|meat]], [[cebolla|onion]] y cilantro."
        },
        {
          titulo: "Mole",
          foto: "images/mexico/mole.jpg",
          texto: "Una [[salsa|sauce]] tradicional que puede combinar chiles, especias y otros ingredientes, como chocolate."
        }
      ]
    },

    {
      icono: "🎉", titulo: "Fiestas", subtitulo: "Festivals",
      tipo: "tarjetas",
      items: [
        {
          titulo: "Día de Muertos",
          foto: "images/mexico/diademuertos.jpg",
          texto: "Una celebración para recordar a los [[familiares|relatives]] y seres queridos que han fallecido. Las familias preparan altares y decoraciones especiales."
        }
      ]
    },

    {
      icono: "🎺", titulo: "Mariachi y música", subtitulo: "Music & dance",
      tipo: "texto",
      foto: "images/mexico/mariachi.jpg",
      texto: [
        "El [[mariachi|mariachi band]] es una expresión musical muy conocida de México. Sus grupos utilizan instrumentos como la guitarra, la trompeta y el violín.",
        "La música es importante en muchas [[fiestas|celebrations]] y tradiciones mexicanas."
      ]
    },

    {
      icono: "🚌", titulo: "Transporte", subtitulo: "Getting around",
      tipo: "lista",
      items: [
        {
          icono: "✈️", titulo: "Avión",
          texto: "El [[avión|plane]] es útil para viajar rápidamente entre regiones lejanas."
        },
        {
          icono: "🚇", titulo: "Metro",
          texto: "La Ciudad de México tiene una amplia red de metro para desplazarse por la [[ciudad|city]]."
        },
        {
          icono: "🚌", titulo: "Autobús",
          texto: "El [[autobús|bus]] es un medio de transporte habitual para viajar dentro y fuera de las ciudades."
        }
      ]
    },

    {
      icono: "💵", titulo: "Dinero y presupuesto", subtitulo: "Money & budget",
      tipo: "lista",
      items: [
        {
          icono: "💳", titulo: "Peso mexicano",
          texto: "La [[moneda|currency]] oficial de México es el peso mexicano ($)."
        },
        {
          icono: "🧾", titulo: "Presupuesto",
          texto: "Antes de viajar, conviene calcular los gastos de alojamiento, [[comida|food]], transporte y actividades. El presupuesto depende de la ciudad, la duración del viaje y el tipo de alojamiento."
        }
      ]
    },

    {
      icono: "🗣️", titulo: "Frases útiles", subtitulo: "Useful phrases",
      tipo: "frases",
      items: [
        { es: "¡Hola!", en: "Hello!" },
        { es: "Gracias", en: "Thank you" },
        { es: "Por favor", en: "Please" },
        { es: "¿Cuánto cuesta?", en: "How much is it?" },
        { es: "¿Qué onda?", en: "What's up? (Informal)" },
        { es: "¿Dónde está el baño?", en: "Where is the bathroom?" },
        { es: "Quisiera agua, por favor.", en: "I would like water, please." },
        { es: "No entiendo.", en: "I don't understand." }
      ]
    },

    {
      icono: "☀️", titulo: "Cuándo ir", subtitulo: "Best time to visit",
      tipo: "lista",
      items: [
        {
          icono: "🍂", titulo: "Otoño",
          texto: "En muchas regiones, el otoño ofrece temperaturas agradables. El Día de Muertos se celebra el 1 y el 2 de noviembre."
        },
        {
          icono: "☀️", titulo: "Verano",
          texto: "En muchas zonas hace [[calor|heat]] y puede ser la temporada de [[lluvias|rain]]. Las condiciones varían según la región."
        },
        {
          icono: "❄️", titulo: "Invierno",
          texto: "En algunas regiones el clima es más fresco y agradable para visitar ciudades y lugares culturales."
        }
      ]
    },

    {
      icono: "⚠️", titulo: "Seguridad y consejos", subtitulo: "Safety & travel tips",
      tipo: "lista",
      items: [
        {
          icono: "🎒", titulo: "Cuida tus pertenencias",
          texto: "En lugares concurridos, mantén tus objetos personales en un lugar seguro."
        },
        {
          icono: "🚕", titulo: "Transporte seguro",
          texto: "Utiliza taxis autorizados o [[aplicaciones|apps]] de transporte fiables."
        },
        {
          icono: "📋", titulo: "Infórmate",
          texto: "Consulta las recomendaciones oficiales de viaje y las condiciones locales antes de salir."
        }
      ]
    },

    {
      icono: "🤓", titulo: "Datos curiosos", subtitulo: "Fun facts",
      tipo: "lista",
      items: [
        {
          icono: "🍫", titulo: "El chocolate",
          texto: "El cacao se utilizaba en las antiguas civilizaciones mesoamericanas, entre ellas la maya y la mexica."
        },
        {
          icono: "🏛️", titulo: "Civilizaciones antiguas",
          texto: "México fue el hogar de importantes civilizaciones, como los mayas y los mexicas."
        },
        {
          icono: "🎶", titulo: "Música mexicana",
          texto: "El mariachi es una tradición musical mexicana reconocida internacionalmente."
        }
      ]
    }
  ],

  // ---------- Your reflection ----------
  reflexion: [
    "Al investigar México aprendí que es un país con una historia y una cultura muy interesantes. Me sorprendieron sus antiguas pirámides, sus celebraciones y su música tradicional. También descubrí muchos platos típicos, como los tacos y el mole. Aprender nuevas [[palabras|words]] en español me ayudó a conocer mejor la [[cultura|culture]] mexicana. Me gustaría visitar México algún día y conocer sus lugares históricos."
  ]
};