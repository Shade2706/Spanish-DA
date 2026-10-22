// ============================================================
//  MAIN SCRIPT: builds the cards from the PAISES list
// ============================================================

// All Spanish-speaking countries (used by the "add country" form)
const PAISES_HISPANOS = [
  ["España", "es"], ["México", "mx"], ["Argentina", "ar"], ["Colombia", "co"],
  ["Perú", "pe"], ["Chile", "cl"], ["Venezuela", "ve"], ["Ecuador", "ec"],
  ["Bolivia", "bo"], ["Uruguay", "uy"], ["Paraguay", "py"], ["Cuba", "cu"],
  ["República Dominicana", "do"], ["Puerto Rico", "pr"], ["Guatemala", "gt"],
  ["Honduras", "hn"], ["El Salvador", "sv"], ["Nicaragua", "ni"],
  ["Costa Rica", "cr"], ["Panamá", "pa"], ["Guinea Ecuatorial", "gq"]
];

// Drafts = countries added with the ➕ form (saved only in this browser)
function leerBorradores() {
  try { return JSON.parse(localStorage.getItem("borradores")) || []; }
  catch (e) { return []; }
}
function guardarBorradores(lista) {
  try { localStorage.setItem("borradores", JSON.stringify(lista)); } catch (e) {}
}

// Makes one destination slide from the shared country data
function crearTarjeta(p) {
  return `
    <a class="destination-slide" href="pais.html?id=${p.id}" aria-label="Explorar ${p.nombre}">
      <div class="card-img">
        <img src="${p.foto}" alt="Paisaje de ${p.nombre}" loading="lazy" onerror="this.classList.add('image-missing')">
        <img class="flag" src="https://flagcdn.com/w80/${p.codigo}.png" alt="Bandera de ${p.nombre}">
      </div>
      <div class="card-body">
        <p class="destination-kicker">Destino ${p.codigo.toUpperCase()}</p>
        <h3>${p.nombre}</h3>
        <p>${p.lema}</p>
        <span class="destination-cta">Explorar destino <span aria-hidden="true">↗</span></span>
      </div>
    </a>`;
}

// 1. Country carousel + team, drawn from the shared PAISES list
function dibujar() {
  const lista = document.getElementById("lista-paises");
  const equipo = document.getElementById("lista-equipo");
  const borradores = leerBorradores();

  if (lista) {
    const destinos = PAISES.filter(p => p && p.id && p.nombre && p.foto);
    iniciarCarrusel(destinos, lista);
  }

  if (equipo) {
    equipo.innerHTML = "";
    PAISES.concat(borradores).forEach(p => {
      equipo.innerHTML += `
        <div class="member">
          <div class="avatar">${p.autor.charAt(0).toUpperCase()}</div>
          <h3>${p.autor}</h3>
          <p><img src="https://flagcdn.com/w40/${p.codigo}.png" alt=""> ${p.nombre}</p>
        </div>`;
    });
  }

  function iniciarCarrusel(destinos, lista) {
    const carousel = document.getElementById("destino-carousel");
    if (!carousel || destinos.length === 0) {
      lista.innerHTML = "";
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const slides = [destinos[destinos.length - 1], ...destinos, destinos[0]];
    let current = 1;
    let isAnimating = false;
    let timer = null;
    let isPaused = false;
    const transitionDuration = reducedMotion ? 0 : 650;

    lista.innerHTML = slides.map(crearTarjeta).join("");
    const slideElements = Array.from(lista.children);
    const status = carousel.querySelector(".carousel-status");
    const controls = carousel.querySelectorAll("[data-carousel]");

    function setPosition(animate) {
      const firstSlide = slideElements[0];
      const gap = parseFloat(getComputedStyle(lista).gap) || 0;
      const distance = firstSlide.getBoundingClientRect().width + gap;
      lista.style.transition = animate && transitionDuration ? `transform ${transitionDuration}ms cubic-bezier(.22,.61,.36,1)` : "none";
      lista.style.transform = `translate3d(${-current * distance}px, 0, 0)`;
      status.textContent = `${((current - 1 + destinos.length) % destinos.length) + 1} / ${destinos.length}`;
    }

    function move(direction) {
      if (isAnimating || destinos.length < 2) return;
      isAnimating = true;
      current += direction;
      setPosition(true);
      window.setTimeout(() => {
        if (current === 0) current = destinos.length;
        if (current === destinos.length + 1) current = 1;
        setPosition(false);
        isAnimating = false;
      }, transitionDuration || 20);
    }

    function resetTimer() {
      if (timer) window.clearInterval(timer);
      timer = window.setInterval(() => {
        if (!document.hidden && !isPaused) move(1);
      }, 5000);
    }

    controls.forEach(control => {
      control.addEventListener("click", () => {
        move(control.dataset.carousel === "next" ? 1 : -1);
        resetTimer();
      });
    });
    carousel.addEventListener("mouseenter", () => { isPaused = true; });
    carousel.addEventListener("mouseleave", () => { isPaused = false; });
    carousel.addEventListener("focusin", () => { isPaused = true; });
    carousel.addEventListener("focusout", event => {
      if (!carousel.contains(event.relatedTarget)) isPaused = false;
    });
    window.addEventListener("resize", () => setPosition(false), { passive: true });

    setPosition(false);
    resetTimer();
  }
}

// 2. The ➕ form (a pop-up window)
function abrirFormulario() {
  const opciones = PAISES_HISPANOS
    .map(([n, c]) => `<option value="${c}">${n}</option>`).join("");

  document.body.insertAdjacentHTML("beforeend", `
    <div class="modal-fondo" id="modal">
      <div class="modal">
        <button class="modal-cerrar" id="cerrar">✕</button>
        <h2>Añade tu país</h2>
        <p class="section-sub">Add your country</p>

        <label>País · Country
          <select id="f-pais">${opciones}</select></label>
        <label>Tu nombre · Your name
          <input id="f-autor" placeholder="Ej: Ana López"></label>
        <label>Lema · Slogan (en español)
          <input id="f-lema" placeholder="Ej: Tacos, pirámides y color"></label>
        <label>Foto · Photo (link or images/file.jpg)
          <input id="f-foto" placeholder="images/mexico.jpg"></label>

        <button class="btn" id="f-crear">Crear tarjeta ✨</button>

        <div id="f-resultado" hidden>
          <p class="ok">✅ ¡Listo! Your card is on the page now (only on this computer).<br>
          To make it <b>permanent</b>, copy this and paste it into
          <code>js/paises.js</code> where it says <i>Paste your country here</i>:</p>
          <textarea id="f-codigo" readonly></textarea>
          <button class="btn" id="f-copiar">📋 Copiar código</button>
        </div>
      </div>
    </div>`);

  const $ = id => document.getElementById(id);
  $("cerrar").onclick = () => $("modal").remove();
  $("modal").onclick = e => { if (e.target.id === "modal") $("modal").remove(); };

  $("f-crear").onclick = function () {
    const sel = $("f-pais");
    const nombre = sel.options[sel.selectedIndex].text;
    const autor = $("f-autor").value.trim();
    if (!autor) { $("f-autor").focus(); $("f-autor").classList.add("error"); return; }

    const p = {
      // id = country name without accents or spaces, e.g. "República Dominicana" → "republicadominicana"
      id: nombre.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s/g, "").toLowerCase(),
      nombre: nombre,
      codigo: sel.value,
      autor: autor,
      lema: $("f-lema").value.trim() || "¡Bienvenidos!",
      foto: $("f-foto").value.trim() || "images/" + sel.value + ".jpg"
    };

    const l = leerBorradores(); l.push(p); guardarBorradores(l);
    dibujar();

    const q = s => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
    $("f-codigo").value =
`  {
    id: "${p.id}",
    nombre: "${q(p.nombre)}",
    codigo: "${p.codigo}",
    autor: "${q(p.autor)}",
    lema: "${q(p.lema)}",
    foto: "${q(p.foto)}"
  },`;
    $("f-resultado").hidden = false;
    $("f-crear").hidden = true;
  };

  $("f-copiar").onclick = function () {
    $("f-codigo").select();
    document.execCommand("copy");
    this.textContent = "✅ ¡Copiado!";
  };
}

dibujar();

// 3. Spanish word tooltips: tapping works on phones too
document.querySelectorAll(".es").forEach(function (w) {
  w.addEventListener("click", function () { w.classList.toggle("show"); });
});

document.querySelectorAll(".nav-toggle").forEach(function (toggle) {
  toggle.addEventListener("click", function () {
    const nav = toggle.nextElementSibling;
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
});

window.addEventListener("scroll", function () {
  document.querySelector(".site-header")?.classList.toggle("scrolled", window.scrollY > 20);
}, { passive: true });
