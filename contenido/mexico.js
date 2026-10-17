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

  // Optional: your own colours instead of the flag colours
  // colores: ["#006847", "#ce1126"],

  // ---------- Quick facts ----------
  datos: [
    { icono: "🏛️", titulo: "Capital", valor: "Ciudad de México" },
    { icono: "🗣️", titulo: "Language", valor: "Español" },
    { icono: "💵", titulo: "Currency", valor: "Peso mexicano ($)" },
    { icono: "👥", titulo: "Population", valor: "130 millones" },
    { icono: "☀️", titulo: "Best time", valor: "Invierno" }
  ],

  // ---------- Short introduction ----------
  introduccion: [
    "México es un [[país|country]] del norte de [[América|America]]. Es famoso por su [[comida|food]], su [[historia|history]] y sus [[playas|beaches]]. (Ejemplo: write your own introduction here.)"
  ],

  // ---------- Sections ----------
  secciones: [

    {
      icono: "🏛️", titulo: "Lugares famosos", subtitulo: "Famous places",
      tipo: "tarjetas",
      items: [
        { titulo: "Chichén Itzá", foto: "images/mexico/chichen.jpg",
          texto: "Una [[antigua|ancient]] [[ciudad|city]] maya en Yucatán.  " },
        { titulo: "Teotihuacán", foto: "images/mexico/teotihuacan.jpg",
          texto: "[[Pirámides|Pyramids]] grandes cerca de la Ciudad de México.  " },
        { titulo: "Cancún", foto: "images/mexico/cancun.jpg",
          texto: "Playas [[hermosas|beautiful]] con [[agua|water]] azul.  " }
      ]
    },

    {
      icono: "🍽️", titulo: "Comida para probar", subtitulo: "Foods to try",
      tipo: "tarjetas",
      items: [
        { titulo: "Tacos", foto: "images/mexico/tacos.jpg",
          texto: "Tortillas de [[maíz|corn]] con [[carne|meat]], [[cebolla|onion]] y cilantro.  " },
        { titulo: "Mole", foto: "images/mexico/mole.jpg",
          texto: "Una [[salsa|sauce]] [[tradicional|traditional]] con chocolate y [[chiles|chili peppers]]. " }
      ]
    },

    {
      icono: "🎉", titulo: "Fiestas", subtitulo: "Festivals",
      tipo: "tarjetas",
      items: [
        { titulo: "Día de Muertos", foto: "images/mexico/diademuertos.jpg",
          texto: "Una [[fiesta|party]] para recordar a los [[familiares|relatives]] que [[murieron|died]].  " }
      ]
    },

    {
      icono: "🎺", titulo: "Mariachi y música", subtitulo: "Music & dance",
      tipo: "texto", foto: "images/mexico/mariachi.jpg",
      texto: [
        "El [[mariachi|mariachi band]] es la [[música|music]] tradicional más [[famosa|famous]] de México.  "
      ]
    },

    {
      icono: "🚌", titulo: "Transporte", subtitulo: "Getting around",
      tipo: "lista",
      items: [
        { icono: "✈️", titulo: "Avión", texto: "El [[avión|plane]] es [[rápido|fast]] para viajar entre [[estados|states]] lejanos.  " },
        { icono: "🚇", titulo: "Metro", texto: "La Ciudad de México tiene un metro muy [[grande|big]].  " }
      ]
    },

    {
      icono: "💵", titulo: "Dinero y presupuesto", subtitulo: "Money & budget",
      tipo: "lista",
      items: [
        { icono: "💳", titulo: "Peso", texto: "La [[moneda|currency]] oficial es el peso mexicano.  " },
        { icono: "🧾", titulo: "Presupuesto", texto: "Write an example daily budget here.  " }
      ]
    },

    {
      icono: "🗣️", titulo: "Frases útiles", subtitulo: "Useful phrases",
      tipo: "frases",
      items: [
        { es: "¡Hola!", en: "Hello!" },
        { es: "Gracias", en: "Thank you" },
        { es: "¿Cuánto cuesta?", en: "How much is it?" },
        { es: "¿Qué onda?", en: "What's up? (Informal)" }
      ]
    },

    {
      icono: "☀️", titulo: "Cuándo ir", subtitulo: "Best time to visit",
      tipo: "lista",
      items: [
        { icono: "🍂", titulo: "Otoño", texto: "Buen [[clima|weather]] y puedes ver el Día de Muertos.  " },
        { icono: "☀️", titulo: "Verano", texto: "Temporada de [[lluvias|rains]] y hace [[calor|heat]].  " }
      ]
    },

    {
      icono: "⚠️", titulo: "Seguridad y consejos", subtitulo: "Safety & travel tips",
      tipo: "lista",
      items: [
        { icono: "🎒", titulo: "Cuidado", texto: "Usa taxis [[autorizados|authorized]] o [[aplicaciones|apps]] de transporte.  " }
      ]
    },

    {
      icono: "🤓", titulo: "Datos curiosos", subtitulo: "Fun facts",
      tipo: "lista",
      items: [
        { icono: "🍫", titulo: "El chocolate", texto: "El chocolate es [[originario|native]] de México y era [[sagrado|sacred]] para los [[aztecas|Aztecs]].  " }
      ]
    }

  ],

  // ---------- Your reflection (one paragraph, in your own words) ----------
  reflexion: [
    "Making this page showed me that México is much more than tacos and beaches. I was most surprised to learn that chocolate comes from there and was sacred to the Aztecs. Using Spanish [[palabras|words]] inside my own sentences helped me remember them, and now I would love to visit and feel the [[cultura|culture]] myself."
  ]
};