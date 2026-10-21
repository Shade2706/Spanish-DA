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
//   research notes in English. Replace each one with your own
//       simple Spanish sentences (like the Sagrada Familia card).
//  Photos: Wikimedia Commons (free to use with credit).
// ============================================================

// Wikimedia picture links (shortcut so the lines below stay short)
const WM = "https://thumb.wikimedia.org/wikipedia/commons/thumb/";

var CONTENIDO = {

  // Optional: your own colours instead of the flag colours
  // colores: ["#c60b1e", "#f1bf00"],

  // ---------- Quick facts ----------
  datos: [
    { icono: "🏛️", titulo: "Capital", valor: "Madrid" },
    { icono: "🗣️", titulo: "Idioma", valor: "Español" },
    { icono: "💶", titulo: "Moneda", valor: "Euro (€)" },
    { icono: "👥", titulo: "Población", valor: "49 millones" },
    { icono: "☀️", titulo: "Mejor época", valor: "Primavera y otoño" }
  ],

  // ---------- Short introduction ----------
  introduccion:
    `España está en el suroeste de Europa. Es famosa por sus [[playas|beaches]], su [[comida|food]] y su fútbol.
    Hay muchos lugares bonitos para visitar y mucha [[comida|food]] deliciosa para probar.
    Me gustaría visitar España porque quiero conocer su [[cultura|culture]] y sus [[tradiciones|traditions]].`,

  // ---------- Sections ----------
  secciones: [

    {
      icono: "🏛️", titulo: "Lugares famosos", subtitulo: "Famous places",
      tipo: "tarjetas",
      items: [
        { titulo: "La Sagrada Familia",
          foto: WM + "0/08/Sagrada_Familia_March_2015-14a.jpg/960px-Sagrada_Familia_March_2015-14a.jpg",
          texto: `Es una [[iglesia|church]] muy famosa de Barcelona, diseñada por Antoni Gaudí.
                  Su construcción comenzó en 1882. Es muy bella y especial.` },
        { titulo: "Plaza Mayor",
          foto: WM + "5/58/Plaza_Mayor_de_Madrid_-_01.jpg/960px-Plaza_Mayor_de_Madrid_-_01.jpg",
          texto: `Es una [[plaza|square]] muy grande de Madrid, del siglo XVII.
                  En el centro hay una [[estatua|statue]] del [[rey|king]] Felipe III.
                  En diciembre hay un mercado de Navidad.` },
        { titulo: "Museo del Prado",
          foto: WM + "5/5a/Museo_del_Prado%2C_from_Avenida.jpg/960px-Museo_del_Prado%2C_from_Avenida.jpg",
          texto: `Es uno de los [[museos|museums]] de arte más importantes del mundo.
                  Tiene cuadros de [[pintores|painters]] como Velázquez y Goya.
                  La entrada es [[gratuita|free]] las dos últimas horas del día.` },
        { titulo: "Park Güell",
          foto: WM + "c/cb/Park_G%C3%BCell_02.jpg/960px-Park_G%C3%BCell_02.jpg",
          texto: `Es un [[parque|park]] de Barcelona diseñado por Gaudí.
                  Tiene muchos [[mosaicos|mosaics]] de colores y un lagarto famoso: 'el drac'.
                  Desde el parque hay una vista preciosa.` }
      ]
    },

    {
      icono: "🍽️", titulo: "Comida para probar", subtitulo: "Foods to try",
      tipo: "tarjetas",
      items: [
        { titulo: "Paella",
          foto: WM + "e/ed/01_Paella_Valenciana_original.jpg/960px-01_Paella_Valenciana_original.jpg",
          texto: "La paella es un plato de [[arroz|rice]] con [[mariscos|seafood]] y [[carne|meat]]. Se come en el [[almuerzo|lunch]]." },
        { titulo: "Tortilla española",
          foto: WM + "c/c0/Tortilla_de_Patatas_%28Corte_transversal%29.jpg/960px-Tortilla_de_Patatas_%28Corte_transversal%29.jpg",
          texto: "Se hace con [[huevos|eggs]] y [[patatas|potatoes]]. Se come en el [[desayuno|breakfast]] o la [[cena|dinner]]." },
        { titulo: "Churros con chocolate",
          foto: WM + "e/e6/Chocolate_con_churros_en_La_Giralda.jpg/960px-Chocolate_con_churros_en_La_Giralda.jpg",
          texto: "Los churros se comen con chocolate [[caliente|hot]] por la [[mañana|morning]]." }
      ]
    },

    {
      icono: "🎉", titulo: "Fiestas", subtitulo: "Festivals",
      tipo: "tarjetas",
      items: [
        { titulo: "La Tomatina",
          foto: WM + "2/21/La_Tomatina_%2825.08.2010%29_-_Spain%2C_Bu%C3%B1ol_21.jpg/960px-La_Tomatina_%2825.08.2010%29_-_Spain%2C_Bu%C3%B1ol_21.jpg",
          texto: "El último miércoles de agosto, la [[gente|people]] se lanza [[tomates|tomatoes]] unos a otros en Buñol." },
        { titulo: "Las Fallas",
          foto: WM + "e/e6/Falla_del_Ayuntamiento_Valencia_2019_%283%29.jpg/960px-Falla_del_Ayuntamiento_Valencia_2019_%283%29.jpg",
          texto: "Del 15 al 19 de marzo. En Valencia, queman figuras [[gigantes|giant]] de [[madera|wood]]." },
        { titulo: "San Fermín",
          foto: WM + "b/bc/Tabla_con_el_Encierro_de_San_Ferm%C3%ADn_por_Jos%C3%A9_Mar%C3%ADa_Ordeig_2.jpg/960px-Tabla_con_el_Encierro_de_San_Ferm%C3%ADn_por_Jos%C3%A9_Mar%C3%ADa_Ordeig_2.jpg",
          texto: "Del 6 al 14 de julio. La gente corre con los [[toros|bulls]] en Pamplona, con una [[camiseta|T-shirt]] blanca y un [[pañuelo|scarf]] rojo." }
      ]
    },

    {
      icono: "💃", titulo: "Flamenco", subtitulo: "Music & dance",
      tipo: "texto",
      foto: WM + "9/9c/Flamenco_en_el_Palacio_Andaluz%2C_Sevilla%2C_Espa%C3%B1a%2C_2015-12-06%2C_DD_19.JPG/960px-Flamenco_en_el_Palacio_Andaluz%2C_Sevilla%2C_Espa%C3%B1a%2C_2015-12-06%2C_DD_19.JPG",
      texto: [
        "El flamenco viene de [[Andalucía|Andalusia]], en el sur de España. La [[cultura gitana|Roma culture]] es muy importante en su historia. Es patrimonio de la UNESCO desde 2010.",
        "Tiene tres partes: el [[cante|singing]], el [[toque|guitar playing]] y el [[baile|dance]]. También hay [[palmas|clapping]] y [[castañuelas|castanets]]. Es muy apasionado.",
        "Puedes ver [[espectáculos|shows]] en Sevilla, Granada y Madrid, en lugares llamados tablaos."
      ]
    },

    {
      icono: "🚆", titulo: "Transporte", subtitulo: "Getting around",
      tipo: "lista",
      items: [
        { icono: "🚄", titulo: "Tren AVE", texto: "Es un [[tren|train]] de alta [[velocidad|speed]]: puede ir a 300 km/h. Conecta las [[ciudades|cities]] principales." },
        { icono: "🚇", titulo: "Metro", texto: "Madrid y Barcelona tienen un metro grande y [[barato|cheap]]. Los [[billetes|tickets]] de 10 viajes te ayudan a [[ahorrar|save]]." },
        { icono: "🚌", titulo: "Autobús", texto: "Es la forma [[más barata|cheapest]] de [[viajar|to travel]] entre ciudades. ALSA es una empresa famosa." },
        { icono: "🚲", titulo: "Bicicleta", texto: "Puedes [[alquilar|to rent]] una [[bicicleta|bicycle]] en Madrid y Barcelona. Es una forma [[divertida|fun]] de ver la [[ciudad|city]]." }
      ]
    },

    {
      icono: "💶", titulo: "Dinero y presupuesto", subtitulo: "Money & budget",
      tipo: "lista",
      items: [
        { icono: "💳", titulo: "Euro", texto: "La [[moneda|currency]] es el euro (€). Puedes pagar con [[tarjeta|card]] en muchos sitios, pero lleva un poco de [[efectivo|cash]]." },
        { icono: "🍽️", titulo: "Menú del día", texto: "[[Cuesta|It costs]] 12–15 euros e incluye un [[plato principal|main course]], un [[postre|dessert]] y una [[bebida|drink]]." },
        { icono: "🧾", titulo: "Presupuesto diario", texto: "Unos 50–70 euros al día en un [[albergue|hostel]] y 100–150 euros en un hotel." },
        { icono: "🪙", titulo: "Propinas", texto: "No es [[necesario|necessary]] dejar [[propina|tip]], pero si estás contento con el [[servicio|service]], puedes dejar unas [[monedas|coins]]." }
      ]
    },

    {
      icono: "🗣️", titulo: "Frases útiles", subtitulo: "Useful phrases",
      tipo: "frases",
      items: [
        { es: "¡Hola!", en: "Hello!" },
        { es: "Gracias", en: "Thank you" },
        { es: "¿Dónde está...?", en: "Where is...?" },
        { es: "No entiendo", en: "I don't understand" },
      ]
    },

    {
      icono: "☀️", titulo: "Cuándo ir", subtitulo: "Best time to visit",
      tipo: "lista",
      items: [
        { icono: "🌸", titulo: "Primavera", texto: "De marzo a mayo. Hace buen [[tiempo|weather]] y no hace mucho calor." },
        { icono: "🔥", titulo: "Verano", texto: "De junio a agosto. Hace mucho [[calor|heat]], ideal para ir a la [[playa|beach]]." },
        { icono: "🍂", titulo: "Otoño", texto: "De septiembre a noviembre. Hay menos [[turistas|tourists]] y los [[precios|prices]] son más bajos." },
        { icono: "❄️", titulo: "Invierno", texto: "De diciembre a febrero. Hace [[frío|cold]] y puedes [[esquiar|ski]] en la [[nieve|snow]] en Sierra Nevada." }
      ]
    },

    {
      icono: "⚠️", titulo: "Seguridad y consejos", subtitulo: "Safety & travel tips",
      tipo: "lista",
      items: [
        { icono: "🎒", titulo: "Cuidado con tu bolso", texto: "Ten [[cuidado|care]] con tus [[pertenencias|belongings]] en el metro y en las zonas turísticas." },
        { icono: "🕑", titulo: "Horarios", texto: "La gente cena [[tarde|late]], a las nueve o diez de la [[noche|night]]." },
        { icono: "😴", titulo: "La siesta", texto: "Algunas [[tiendas|shops]] cierran por la tarde para [[descansar|to rest]]." },
        { icono: "🚑", titulo: "Emergencias", texto: "El número de [[emergencias|emergency]] es el 112." }
      ]
    },

    {
      icono: "🤓", titulo: "Datos curiosos", subtitulo: "Fun facts",
      tipo: "lista",
      items: [
        { icono: "🍇", titulo: "Las doce uvas", texto: "En Nochevieja, la gente come doce [[uvas|grapes]] a [[medianoche|midnight]], una por cada campanada, para tener buena [[suerte|luck]]." },
        { icono: "🫒", titulo: "Aceite de oliva", texto: "España produce aproximadamente la mitad del [[aceite de oliva|olive oil]] del [[mundo|world]]." },
        { icono: "🍴", titulo: "Restaurante Botín", texto: "Botín, en Madrid, inaugurado en 1725, es el restaurante más [[antiguo|oldest]] del mundo." },
        { icono: "🎄", titulo: "El Gordo", texto: "Es un gran sorteo de [[lotería|lottery]] de [[Navidad|Christmas]] el 22 de diciembre. Todo el [[país|country]] lo ve." }
      ]
    }

  ],

  // ---------- Your reflection (one paragraph, in your own words) ----------
  reflexion: [
    `For this project, I researched Spain and made a breakdown of the things I found most fascinating about it. 
    The fact that Spanish people eat 12 grapes at midnight for good luck surprised me, because I thought everyone just celebrated New Year with fireworks. 
    The island beaches, like the Canary Islands, are so beautiful, and Park Güell has amazing mosaics and an awesome view of the city. 
    I really want to visit these places while I'm young, say hi to the famous lizard in Park Güell, "el drac" (the dragon), and celebrate festivals like La Tomatina and San Fermín. 
    This project made me see how rich and fun Spanish culture is. <br>
    ¡Algún día quiero visitar España!.`
  ]
};
