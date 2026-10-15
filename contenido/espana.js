// ============================================================
//  CONTENT FILE: ESPAÑA
//  This is the EXAMPLE every member copies.
//
//  HOW TO MAKE YOUR OWN:
//   1. Copy this file and rename the copy to your country's id
//      (the same id as in js/paises.js), e.g. contenido/mexico.js
//   2. Replace the example text with YOUR OWN research and writing
//
//  RULES (so nothing breaks):
//   • Keep text inside quotes " "  (use ' for quotes inside text)
//   • Keep the commas , between items
//   • Spanish word with translation:  [[comida|food]]
//     → it gets highlighted and shows "food" on hover
//       (use at least 25 different Spanish words on your page)
//   • Pictures: put them in images/ and write "images/name.jpg"
//     (missing picture = a 📷 placeholder, not an error)
//
//  SECTION STYLES (tipo):
//   "tarjetas" → cards with picture + title + text
//   "texto"    → paragraphs next to one picture
//   "lista"    → icon + title + text list
//   "frases"   → flip cards (es = Spanish, en = English)
//  Add, remove or reorder sections as you like. No limit!
//
//  ⚠️ All text below is a short EXAMPLE. Replace it with your own!
// ============================================================

var CONTENIDO = {

  // Optional: your own colours instead of the flag colours
  // colores: ["#c60b1e", "#f1bf00"],

  // ---------- Quick facts ----------
  datos: [
    { icono: "🏛️", titulo: "Capital", valor: "Madrid" },
    { icono: "🗣️", titulo: "Language", valor: "Español" },
    { icono: "💶", titulo: "Currency", valor: "Euro (€)" },
    { icono: "👥", titulo: "Population", valor: "48 millones" },
    { icono: "☀️", titulo: "Best time", valor: "Primavera" }
  ],

  // ---------- Short introduction ----------
  introduccion: [
    "España es un [[país|country]] del sur de Europa. Es famoso por su [[comida|food]], su [[música|music]] y sus [[playas|beaches]]. (Ejemplo: write your own introduction here.)"
  ],

  // ---------- Sections ----------
  secciones: [

    {
      icono: "🏛️", titulo: "Lugares famosos", subtitulo: "Famous places",
      tipo: "tarjetas",
      items: [
        { titulo: "La Sagrada Familia", foto: "images/espana/sagrada.jpg",
          texto: "Una [[iglesia|church]] famosa en Barcelona. (Ejemplo)" },
        { titulo: "La Alhambra", foto: "images/espana/alhambra.jpg",
          texto: "Un [[palacio|palace]] antiguo en Granada. (Ejemplo)" },
        { titulo: "Plaza Mayor", foto: "images/espana/plaza.jpg",
          texto: "Una [[plaza|square]] grande en Madrid. (Ejemplo)" }
      ]
    },

    {
      icono: "🍽️", titulo: "Comida para probar", subtitulo: "Foods to try",
      tipo: "tarjetas",
      items: [
        { titulo: "Paella", foto: "images/espana/paella.jpg",
          texto: "Un plato de [[arroz|rice]] de Valencia. (Ejemplo)" },
        { titulo: "Tapas", foto: "images/espana/tapas.jpg",
          texto: "Pequeños platos para compartir con [[amigos|friends]]. (Ejemplo)" }
      ]
    },

    {
      icono: "🎉", titulo: "Fiestas", subtitulo: "Festivals",
      tipo: "tarjetas",
      items: [
        { titulo: "La Tomatina", foto: "images/espana/tomatina.jpg",
          texto: "Una [[fiesta|party]] donde la gente lanza [[tomates|tomatoes]]. (Ejemplo)" }
      ]
    },

    {
      icono: "💃", titulo: "Flamenco", subtitulo: "Music & dance",
      tipo: "texto", foto: "images/espana/flamenco.jpg",
      texto: [
        "El flamenco es un [[baile|dance]] tradicional del sur de España. (Ejemplo)",
        "You can add as many paragraphs as you want."
      ]
    },

    {
      icono: "🚆", titulo: "Transporte", subtitulo: "Getting around",
      tipo: "lista",
      items: [
        { icono: "🚄", titulo: "Tren", texto: "El [[tren|train]] es rápido entre ciudades. (Ejemplo)" },
        { icono: "🚇", titulo: "Metro", texto: "Madrid y Barcelona tienen metro. (Ejemplo)" }
      ]
    },

    {
      icono: "💶", titulo: "Dinero y presupuesto", subtitulo: "Money & budget",
      tipo: "lista",
      items: [
        { icono: "💳", titulo: "Euro", texto: "La [[moneda|currency]] es el euro. (Ejemplo)" },
        { icono: "🧾", titulo: "Presupuesto", texto: "Write an example daily budget here. (Ejemplo)" }
      ]
    },

    {
      icono: "🗣️", titulo: "Frases útiles", subtitulo: "Useful phrases",
      tipo: "frases",
      items: [
        { es: "¡Hola!", en: "Hello!" },
        { es: "Gracias", en: "Thank you" },
        { es: "¿Dónde está...?", en: "Where is...?" },
        { es: "¿Cuánto cuesta?", en: "How much is it?" }
      ]
    },

    {
      icono: "☀️", titulo: "Cuándo ir", subtitulo: "Best time to visit",
      tipo: "lista",
      items: [
        { icono: "🌸", titulo: "Primavera", texto: "Buen [[tiempo|weather]]. (Ejemplo)" },
        { icono: "🔥", titulo: "Verano", texto: "Mucho [[calor|heat]]. (Ejemplo)" }
      ]
    },

    {
      icono: "⚠️", titulo: "Seguridad y consejos", subtitulo: "Safety & travel tips",
      tipo: "lista",
      items: [
        { icono: "🎒", titulo: "Cuidado", texto: "Watch your bag in busy places. (Ejemplo)" }
      ]
    },

    {
      icono: "🤓", titulo: "Datos curiosos", subtitulo: "Fun facts",
      tipo: "lista",
      items: [
        { icono: "🕙", titulo: "La cena", texto: "Mucha gente come la [[cena|dinner]] muy tarde. (Ejemplo)" }
      ]
    }

  ],

  // ---------- Your reflection (one paragraph, in your own words) ----------
  reflexion: [
    "Write here what YOU learned and felt while making this page."
  ]
};
