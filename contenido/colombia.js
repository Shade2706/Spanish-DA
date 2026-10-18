
 // ============================================================
 //  CONTENT FILE: COLOMBIA
 // ============================================================

var CONTENIDO = {

  // Colours inspired by the Colombian flag
  colores: ["#FCD116", "#003893"],

  // ---------- Quick facts ----------
  datos: [
    { icono: "🏛️", titulo: "Capital", valor: "Bogotá" },
    { icono: "🗣️", titulo: "Language", valor: "Español" },
    { icono: "💵", titulo: "Currency", valor: "Peso colombiano" },
    { icono: "👥", titulo: "Population", valor: "Aproximadamente 53 millones" },
    { icono: "☀️", titulo: "Best time", valor: "Diciembre a marzo" }
  ],

  // ---------- Short introduction ----------
  introduccion: [
    "Colombia es un [[país|country]] de América del Sur. Es famoso por su [[café|coffee]], su [[música|music]], sus [[playas|beaches]] y sus hermosos [[paisajes|landscapes]]. La [[capital|capital city]] de Colombia es Bogotá, una [[ciudad|city]] con mucha [[historia|history]]."
  ],

  // ---------- Sections ----------
  secciones: [

    {
      icono: "🏛️", titulo: "Lugares famosos", subtitulo: "Famous places",
      tipo: "tarjetas",
      items: [
        {
          titulo: "Bogotá",
          foto: "images/colombia/bogota.jpg",
          texto: "Bogotá es la [[capital|capital city]] de Colombia. Tiene muchos [[museos|museums]], parques y edificios históricos."
        },
        {
          titulo: "Cartagena",
          foto: "images/colombia/cartagena.jpg",
          texto: "Cartagena es una ciudad [[costera|coastal]] famosa por sus calles coloridas y su arquitectura colonial."
        },
        {
          titulo: "Valle de Cocora",
          foto: "images/colombia/cocora.jpg",
          texto: "El Valle de Cocora es famoso por sus altas [[palmeras|palm trees]], sus verdes [[montañas|mountains]] y sus paisajes naturales."
        },
        {
          titulo: "Parque Tayrona",
          foto: "images/colombia/tayrona.jpg",
          texto: "El Parque Tayrona tiene hermosas [[playas|beaches]], bosques y muchos [[animales|animals]]."
        }
      ]
    },

    {
      icono: "🍽️", titulo: "Comida para probar", subtitulo: "Foods to try",
      tipo: "tarjetas",
      items: [
        {
          titulo: "Bandeja paisa",
          foto: "images/colombia/bandeja-paisa.jpg",
          texto: "La bandeja paisa es un plato tradicional con [[frijoles|beans]], [[arroz|rice]], huevo y carne."
        },
        {
          titulo: "Arepas",
          foto: "images/colombia/arepa.jpeg",
          texto: "Las arepas se preparan con [[maíz|corn]]. Se pueden comer con queso."
        },
        {
          titulo: "Café colombiano",
          foto: "images/colombia/coffee-farm.jpg",
          texto: "Colombia es famosa por su [[café|coffee]]. Muchas personas trabajan en las [[fincas|farms]] de café."
        }
      ]
    },

    {
      icono: "🎉", titulo: "Fiestas", subtitulo: "Festivals",
      tipo: "tarjetas",
      items: [
        {
          titulo: "Carnaval de Barranquilla",
          foto: "images/colombia/carnaval.jpg",
          texto: "El Carnaval de Barranquilla es una fiesta famosa con [[música|music]], [[baile|dance]], disfraces y desfiles."
        }
      ]
    },

    {
      icono: "🎶", titulo: "Música y baile", subtitulo: "Music and dance",
      tipo: "texto",
      foto: "images/colombia/cumbia.jpg",
      texto: [
        "La [[cumbia|cumbia music]] y el [[vallenato|vallenato music]] son estilos musicales importantes de Colombia.",
        "La música y el baile son importantes en las [[tradiciones|traditions]] colombianas."
      ]
    },

    {
      icono: "🚌", titulo: "Transporte", subtitulo: "Getting around",
      tipo: "lista",
      items: [
        {
          icono: "🚌", titulo: "Autobús",
          texto: "El [[autobús|bus]] es un medio de transporte común para viajar entre ciudades."
        },
        {
          icono: "🚇", titulo: "TransMilenio",
          texto: "TransMilenio es un sistema de transporte público de Bogotá."
        }
      ]
    },

    {
      icono: "💵", titulo: "Dinero y presupuesto", subtitulo: "Money and budget",
      tipo: "lista",
      items: [
        {
          icono: "💰", titulo: "Peso colombiano",
          texto: "La [[moneda|currency]] oficial de Colombia es el peso colombiano."
        },
        {
          icono: "🍴", titulo: "Comida",
          texto: "Los precios de la [[comida|food]] dependen de la ciudad y del restaurante."
        }
      ]
    },

    {
      icono: "🗣️", titulo: "Frases útiles", subtitulo: "Useful phrases",
      tipo: "frases",
      items: [
        { es: "¡Hola!", en: "Hello!" },
        { es: "Buenos días", en: "Good morning" },
        { es: "Gracias", en: "Thank you" },
        { es: "¿Dónde está...?", en: "Where is...?" },
        { es: "¿Cuánto cuesta?", en: "How much does it cost?" },
        { es: "Por favor", en: "Please" }
      ]
    },

    {
      icono: "☀️", titulo: "Cuándo ir", subtitulo: "Best time to visit",
      tipo: "lista",
      items: [
        {
          icono: "🌤️", titulo: "Temporada seca",
          texto: "En muchas regiones, de diciembre a marzo suele haber menos [[lluvia|rain]]."
        },
        {
          icono: "🌦️", titulo: "Clima",
          texto: "El [[clima|climate]] cambia según la región. Algunas zonas son cálidas y otras son frescas."
        }
      ]
    },

    {
      icono: "⚠️", titulo: "Seguridad y consejos", subtitulo: "Safety and travel tips",
      tipo: "lista",
      items: [
        {
          icono: "🎒", titulo: "Cuida tus pertenencias",
          texto: "Mantén tu [[bolso|bag]] y tus objetos de valor seguros en lugares concurridos."
        },
        {
          icono: "🗺️", titulo: "Planifica tu viaje",
          texto: "Consulta las recomendaciones de seguridad antes de visitar nuevos lugares."
        }
      ]
    },

    {
      icono: "🤓", titulo: "Datos curiosos", subtitulo: "Fun facts",
      tipo: "lista",
      items: [
        {
          icono: "☕", titulo: "Café colombiano",
          texto: "El [[café|coffee]] colombiano es conocido en muchos países."
        },
        {
          icono: "🌎", titulo: "Biodiversidad",
          texto: "Colombia tiene una gran [[biodiversidad|biodiversity]] y muchos tipos de animales y plantas."
        },
        {
          icono: "🌊", titulo: "Dos costas",
          texto: "Colombia tiene costas en el océano Pacífico y el mar Caribe."
        }
      ]
    }

  ],

  // ---------- Reflection ----------
  reflexion: [
    "Me gusta Colombia. Es un país muy bonito. Me gusta su comida, su música y sus lugares famosos. Colombia tiene muchas playas y montañas. Aprendo muchas cosas sobre Colombia. Estoy feliz de hacer este proyecto."
  ]
};
