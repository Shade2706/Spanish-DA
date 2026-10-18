// ============================================================
//  CONTENT FILE: ARGENTINA
//  Same structure as contenido/espana.js
//  Images go in images/argentina/ (missing pictures show 📷)
// ============================================================

var CONTENIDO = {

  // ---------- Quick facts ----------
  datos: [
    { icono: "🏛️", titulo: "Capital", valor: "Buenos Aires" },
    { icono: "🗣️", titulo: "Language", valor: "Español" },
    { icono: "💵", titulo: "Currency", valor: "Peso argentino ($)" },
    { icono: "👥", titulo: "Population", valor: "Unos 46 millones de habitantes" },
    { icono: "🌦️", titulo: "Best time", valor: "Depende de la región y de la actividad" }
  ],

  // ---------- Short introduction ----------
  introduccion: [
    "Argentina es un [[país|country]] grande de América del Sur. Su [[capital|capital city]] es Buenos Aires, una [[ciudad|city]] famosa por su [[cultura|culture]] y su vida nocturna. En Argentina hay [[montañas|mountains]], [[lagos|lakes]], [[glaciares|glaciers]], [[selvas|jungles]] y llanuras enormes. Además, es un país muy conocido por el [[fútbol|football]], el [[asado|barbecue]], la [[música|music]] del tango y sus [[tradiciones|traditions]]."
  ],

  // ---------- Sections ----------
  secciones: [

    // 1 ----------------------------------------------------
    {
      icono: "🏛️", titulo: "Lugares famosos", subtitulo: "Famous places",
      tipo: "tarjetas",
      items: [
        { titulo: "Buenos Aires y el Obelisco", foto: "images/argentina/buenos-aires.jpg",
          texto: "El Obelisco es un [[monumento|monument]] muy alto en el centro de Buenos Aires. Muchas [[personas|people]] van allí a celebrar los grandes momentos del [[deporte|sport]]." },
        { titulo: "Cataratas del Iguazú", foto: "images/argentina/iguazu.jpg",
          texto: "Son cientos de [[cascadas|waterfalls]] en medio de la [[selva|jungle]], en la frontera con Brasil. Es uno de los lugares más impresionantes de la [[naturaleza|nature]]." },
        { titulo: "Glaciar Perito Moreno", foto: "images/argentina/perito-moreno.jpg",
          texto: "Es un enorme [[glaciar|glacier]] de hielo azul en la Patagonia. Los visitantes pueden ver cómo caen trozos de [[hielo|ice]] al agua." },
        { titulo: "Bariloche", foto: "images/argentina/bariloche.webp",
          texto: "Esta ciudad está al lado de un [[lago|lake]] y rodeada de [[montañas|mountains]]. Es popular en invierno para esquiar y en verano para caminar." },
        { titulo: "Ushuaia", foto: "images/argentina/ushuaia.jpg",
          texto: "Ushuaia es una de las ciudades más al sur del [[mundo|world]]. Por eso la llaman 'el fin del mundo'." }
      ]
    },

    // 2 ----------------------------------------------------
    {
      icono: "🍽️", titulo: "Comida argentina", subtitulo: "Argentine food",
      tipo: "tarjetas",
      items: [
        { titulo: "Asado", foto: "images/argentina/asado.jpg",
          texto: "El asado es [[carne|meat]] cocinada a la parrilla. Es una reunión con la [[familia|familSubhra Akhuli page]] y los [[amigos|friends]], más que solo una comida." },
        { titulo: "Empanadas", foto: "images/argentina/empanadas.jpg",
          texto: "Son pasteles pequeños rellenos de carne, [[queso|cheese]] o verduras. Se comen en [[fiestas|parties]] y en casa." },
        { titulo: "Dulce de leche", foto: "images/argentina/dulce-de-leche.jpg",
          texto: "Es una crema dulce hecha con [[leche|milk]] y azúcar. Los argentinos la comen con [[pan|bread]], en [[postres|desserts]] y en helados." },
        { titulo: "Alfajores", foto: "images/argentina/alfajores.jpg",
          texto: "Son [[galletas|cookies]] dobles rellenas de dulce de leche, a veces cubiertas de chocolate. Son perfectas para la [[merienda|afternoon snack]]." },
        { titulo: "Mate", foto: "images/argentina/mate.jpg",
          texto: "El mate no es una comida, es una [[bebida|drink]] caliente de hierbas. Se comparte en un grupo y es un símbolo de [[amistad|friendship]]." }
      ]
    },

    // 3 ----------------------------------------------------
    {
      icono: "⚽", titulo: "Fútbol argentino", subtitulo: "Argentine football",
      tipo: "texto", foto: "images/argentina/futbol.jpg",
      texto: [
        "En Argentina, el fútbol es una gran [[pasión|passion]] para mucha gente. Los [[niños|children]] juegan en la calle, y los domingos muchas [[familias|families]] ven los [[partidos|matches]].",
        "Lionel Messi, nacido en Rosario, es uno de los jugadores más famosos de la [[historia|history]] del fútbol. Es el capitán de la selección argentina.",
        "En 2022, Argentina ganó la Copa Mundial de la FIFA en Qatar, su tercer título mundial. Muchos aficionados celebraron en las [[calles|streets]] de todo el país."
      ]
    },

    // 4 ----------------------------------------------------
    {
      icono: "💃", titulo: "Tango y música", subtitulo: "Tango and music",
      tipo: "texto", foto: "images/argentina/tango.jpg",
      texto: [
        "El tango nació a finales del siglo XIX en Buenos Aires y en la región del Río de la Plata, que también incluye Uruguay. Es una [[música|music]] y un [[baile|dance]] con mucha emoción.",
        "En una orquesta de tango se escuchan el bandoneón, el violín y el piano. Cada [[canción|song]] cuenta una [[historia|story]] de amor, nostalgia o vida en la ciudad.",
        "Hoy se puede ver tango en teatros y en las [[calles|streets]] de barrios como San Telmo y La Boca. Además, el folklore, con la guitarra, es muy importante en el norte del país."
      ]
    },

    // 5 ----------------------------------------------------
    {
      icono: "🎉", titulo: "Fiestas y tradiciones", subtitulo: "Festivals and traditions",
      tipo: "lista",
      items: [
        { icono: "🎭", titulo: "Carnaval",
          texto: "El [[carnaval|carnival]] se celebra en febrero o marzo con [[desfiles|parades]], trajes de colores y música. Es muy famoso en la provincia de Corrientes y en Gualeguaychú." },
        { icono: "🇦🇷", titulo: "Día de la Independencia",
          texto: "El 9 de julio los argentinos recuerdan la [[independencia|independence]] de 1816. Hay actos oficiales y comida típica en muchas [[ciudades|cities]]." },
        { icono: "🐎", titulo: "Día de la Tradición",
          texto: "El 10 de noviembre se celebra la cultura gaucha. Hay [[desfiles|parades]] de caballos, música folklórica y asado." }
      ]
    },

    // 6 ----------------------------------------------------
    {
      icono: "🏔️", titulo: "Naturaleza y geografía", subtitulo: "Nature and geography",
      tipo: "tarjetas",
      items: [
        { titulo: "Los Andes", foto: "images/argentina/andes.jpg",
          texto: "La cordillera de los Andes está en el oeste del país. Tiene [[montañas|mountains]] muy altas, [[nieve|snow]] y paisajes espectaculares." },
        { titulo: "La Patagonia", foto: "images/argentina/patagonia.jpg",
          texto: "Es una región grande en el sur, con [[viento|wind]] fuerte, [[lagos|lakes]], [[bosques|forests]] y glaciares. Hace [[frío|cold]] gran parte del año." },
        { titulo: "La Pampa", foto: "images/argentina/pampa.jpg",
          texto: "Son llanuras muy grandes y verdes en el centro del país. Allí hay [[vacas|cows]] y campos de cereales." },
        { titulo: "Las Cataratas del Iguazú", foto: "images/argentina/iguazu-naturaleza.jpg",
          texto: "En el noreste hay [[selva|jungle]] subtropical, con animales y plantas muy variados. Allí cae el [[agua|water]] del río Iguazú." }
      ]
    },

    // 7 ----------------------------------------------------
    {
      icono: "🚆", titulo: "Transporte", subtitulo: "Getting around",
      tipo: "lista",
      items: [
        { icono: "🚄", titulo: "Tren",
          texto: "El [[tren|train]] conecta Buenos Aires con ciudades cercanas. Hay menos rutas de larga distancia que en otros países." },
        { icono: "🚌", titulo: "Autobús",
          texto: "El [[autobús|bus]] es muy importante para viajar entre ciudades. Hay servicios de corta y larga distancia." },
        { icono: "🚇", titulo: "Subte",
          texto: "El Subte es el [[metro|subway]] de Buenos Aires. Es útil para moverse por la [[ciudad|city]]." },
        { icono: "🚕", titulo: "Taxi",
          texto: "El [[taxi|taxi]] sirve para trayectos cortos o para ir al [[aeropuerto|airport]]. Conviene confirmar la forma de pago." }
      ]
    },

    // 8 ----------------------------------------------------
    {
      icono: "💵", titulo: "Dinero y presupuesto", subtitulo: "Money and budget",
      tipo: "lista",
      items: [
        { icono: "💳", titulo: "El peso argentino",
          texto: "La [[moneda|currency]] de Argentina es el peso. Se usa en [[tiendas|shops]], restaurantes y transportes." },
        { icono: "📈", titulo: "Precios y cambio",
          texto: "El [[precio|price]] de algo es lo que cuesta en pesos. El tipo de cambio es el valor del peso frente a otras monedas, y puede variar mucho." },
        { icono: "🧾", titulo: "Cómo planificar",
          texto: "Antes de viajar, hay que revisar el cambio en fuentes oficiales. Es buena idea calcular el gasto en alojamiento, [[comida|food]], transporte y [[excursiones|trips]], y guardar algo de [[dinero|money]] extra." }
      ]
    },

    // 9 ----------------------------------------------------
    {
      icono: "🗣️", titulo: "Frases útiles", subtitulo: "Useful phrases",
      tipo: "frases",
      items: [
        { es: "¡Hola! ¿Cómo estás?", en: "Hello! How are you?" },
        { es: "Buenos días", en: "Good morning" },
        { es: "Gracias", en: "Thank you" },
        { es: "Por favor", en: "Please" },
        { es: "¿Dónde está la estación?", en: "Where is the station?" },
        { es: "¿Cuánto cuesta?", en: "How much is it?" },
        { es: "Quisiera una empanada, por favor.", en: "I would like an empanada, please." },
        { es: "La cuenta, por favor.", en: "The bill, please." },
        { es: "No entiendo.", en: "I don't understand." },
        { es: "¿Puede hablar más despacio?", en: "Can you speak more slowly?" },
        { es: "¡Necesito ayuda!", en: "I need help!" },
        { es: "¿Cómo llego al centro?", en: "How do I get to the city centre?" }
      ]
    },

    // 10 ---------------------------------------------------
    {
      icono: "☀️", titulo: "Cuándo ir", subtitulo: "Best time to visit",
      tipo: "lista",
      items: [
        { icono: "🧭", titulo: "Hemisferio sur",
          texto: "Argentina está en el hemisferio sur, por eso las [[estaciones|seasons]] son al revés que en Europa o en el hemisferio norte." },
        { icono: "☀️", titulo: "Verano (diciembre a febrero)",
          texto: "Es la época de más [[calor|heat]]. Es ideal para la Patagonia y las playas, pero puede haber mucha gente." },
        { icono: "🍂", titulo: "Otoño (marzo a mayo)",
          texto: "Hace buen [[tiempo|weather]] en muchas zonas y hay colores bonitos en los bosques del sur." },
        { icono: "❄️", titulo: "Invierno (junio a agosto)",
          texto: "Es la mejor época para esquiar en Bariloche. En la Patagonia hace mucho [[frío|cold]]." },
        { icono: "🌸", titulo: "Primavera (septiembre a noviembre)",
          texto: "Hay temperaturas agradables y muchas [[flores|flowers]]. Es una buena época para visitar Buenos Aires." },
        { icono: "🗺️", titulo: "Depende del destino",
          texto: "El clima cambia mucho entre el norte, el centro y el sur. La mejor época depende del lugar y de lo que quieras hacer." }
      ]
    },

    // 11 ---------------------------------------------------
    {
      icono: "⚠️", titulo: "Seguridad y consejos", subtitulo: "Safety and travel tips",
      tipo: "lista",
      items: [
        { icono: "🎒", titulo: "Cuida tus cosas",
          texto: "En lugares con mucha gente, como estaciones y [[mercados|markets]], mantén tu mochila y tu teléfono cerca de ti." },
        { icono: "🪪", titulo: "Documentos",
          texto: "Lleva una copia de tu pasaporte y guarda el original en un lugar seguro." },
        { icono: "🚌", titulo: "Revisa el transporte",
          texto: "Antes de salir, consulta la [[ruta|route]] y los horarios, sobre todo para viajes largos en autobús." },
        { icono: "📋", titulo: "Consejos oficiales",
          texto: "Consulta la web oficial de viajes de tu gobierno antes de viajar, porque la información puede cambiar." },
        { icono: "🌍", titulo: "Conoce la zona",
          texto: "Pregunta a tu hotel o a la gente local por las condiciones del lugar y el [[clima|climate]]. Con buena información, el viaje es más tranquilo." }
      ]
    },

    // 12 ---------------------------------------------------
    {
      icono: "🤓", titulo: "Datos curiosos", subtitulo: "Fun facts",
      tipo: "lista",
      items: [
        { icono: "📏", titulo: "Un país enorme",
          texto: "Argentina es muy grande: es el segundo país más grande de América del Sur, después de Brasil. Va desde el trópico hasta cerca de la Antártida." },
        { icono: "⛰️", titulo: "El Aconcagua",
          texto: "Es la [[montaña|mountain]] más alta fuera de Asia, con casi 7000 metros. Está en los Andes, en la provincia de Mendoza." },
        { icono: "🧉", titulo: "El mate",
          texto: "Muchos argentinos toman mate cada día. Se pasa de persona en persona, así que es una forma de compartir con los [[amigos|friends]]." },
        { icono: "🎶", titulo: "El tango",
          texto: "La UNESCO reconoció el tango como Patrimonio Cultural Inmaterial de la Humanidad en 2009, junto con Uruguay." },
        { icono: "🏆", titulo: "Campeones del mundo",
          texto: "Argentina ganó la Copa Mundial de fútbol en 1978, 1986 y 2022." }
      ]
    }

  ],

  // ---------- Your reflection (one paragraph, in your own words) ----------
  reflexion: [
    "Al investigar Argentina aprendí que es un país muy diverso. Me sorprendió ver [[montañas|mountains]], [[glaciares|glaciers]], selvas y llanuras en un solo país. También me gustó conocer la [[comida|food]], como el asado, las empanadas y el dulce de leche, y descubrí que el mate es una forma de compartir con la gente. Me interesó mucho la pasión por el fútbol y el tango, porque muestran la [[cultura|culture]] argentina. Me gustaría visitar Argentina algún día, probar las comidas típicas y practicar mi español con la gente local."
  ]
};