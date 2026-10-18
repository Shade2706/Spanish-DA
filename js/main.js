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

// Makes one country card
function crearTarjeta(p, esBorrador, indice) {
  return `
    <a class="card" href="pais.html?id=${p.id}">
      <div class="card-img" style="background-image:url('${p.foto}')">
        <img class="flag" src="https://flagcdn.com/w80/${p.codigo}.png" alt="Bandera de ${p.nombre}">
        ${esBorrador ? `<span class="draft-tag">Borrador · Draft</span>
          <button class="draft-delete" data-i="${indice}" title="Borrar">✕</button>` : ""}
      </div>
      <div class="card-body">
        <h3>${p.nombre}</h3>
        <p>${p.lema}</p>
        <span class="author">✍️ ${p.autor}</span>
      </div>
    </a>`;
}

// 1. Country cards + team, drawn from PAISES and the drafts
function dibujar() {
  const lista = document.getElementById("lista-paises");
  const equipo = document.getElementById("lista-equipo");
  const borradores = leerBorradores();

  if (lista) {
    lista.innerHTML = "";
    PAISES.forEach(p => lista.innerHTML += crearTarjeta(p, false));
    borradores.forEach((p, i) => lista.innerHTML += crearTarjeta(p, true, i));
    lista.innerHTML += `
      <button class="card card-add" id="btn-add">
        <span>➕</span>
        <h3>Tu país aquí</h3>
        <p>Your country here! Click to add it</p>
      </button>`;
    document.getElementById("btn-add").onclick = abrirFormulario;

    // delete buttons on drafts
    lista.querySelectorAll(".draft-delete").forEach(b => {
      b.onclick = function (e) {
        e.preventDefault();
        const l = leerBorradores();
        l.splice(b.dataset.i, 1);
        guardarBorradores(l);
        dibujar();
      };
    });
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
