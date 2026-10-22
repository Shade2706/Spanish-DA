// ============================================================
//  COUNTRY PAGE: builds the page from contenido/<id>.js
//  You don't need to edit this file. Edit your content file instead.
// ============================================================

const id = new URLSearchParams(location.search).get("id");
const pais = PAISES.concat(leerBorradores()).find(p => p.id === id);
const pagina = document.getElementById("pagina");

// Turns [[comida|food]] into a highlighted word with a translation
function marcar(texto) {
  return (texto || "").replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, function (m, es, en) {
    return `<span class="es" data-en="${en.trim()}">${es.trim()}</span>`;
  });
}

// A picture box. If the picture is missing, a "📷" placeholder shows instead.
function foto(src, alt) {
  return src ? `<div class="foto"><img src="${src}" alt="${alt || ""}" loading="lazy" onerror="this.closest('.foto')?.remove()"></div>` : "";
}

// Text can be one string or a list of paragraphs
function parrafos(t) {
  return [].concat(t || []).map(p => `<p>${marcar(p)}</p>`).join("");
}

// ---------- One function per section style ----------
const ESTILOS = {
  // cards: picture + title + text (places, food, festivals)
  tarjetas: s => `<div class="mini-grid">${(s.items || []).filter(i => i && (i.titulo || i.texto)).map((i, index) => `
      <article class="mini-card ${index === 0 ? "mini-card-featured" : ""}">${foto(i.foto, i.titulo)}
        <div class="mini-body"><h3>${marcar(i.titulo)}</h3>${parrafos(i.texto)}</div>
      </article>`).join("")}</div>`,

  // text next to a picture (music & dance, history...)
  texto: s => `<div class="texto-foto">
      <div>${parrafos(s.texto)}</div>${s.foto ? foto(s.foto, s.titulo) : ""}</div>`,

  // icon list (transport, money, tips, fun facts...)
  lista: s => `<div class="tips">${(s.items || []).map(i => `
      <div class="tip"><span class="tip-icono">${i.icono || "•"}</span>
        <div><h3>${marcar(i.titulo)}</h3>${parrafos(i.texto)}</div></div>`).join("")}</div>`,

  // flip cards: Spanish on the front, English on the back
  frases: s => `<p class="hint">👆 Haz clic en una tarjeta · Click a card to flip it</p>
    <div class="flip-grid">${(s.items || []).map(i => `
      <div class="flip" tabindex="0"><div class="flip-in">
        <div class="flip-front">${i.es}</div>
        <div class="flip-back">${i.en}</div>
      </div></div>`).join("")}</div>`
};

// ---------- Build the page ----------
function construir() {
  if (!pais) {
    pagina.innerHTML = `<section class="section"><h2>País no encontrado 😕</h2>
      <p class="section-sub">Country not found.</p><a class="btn" href="index.html">Volver · Back</a></section>`;
    return;
  }

  const c = window.CONTENIDO || null;

  // Colours: from the content file, otherwise from the flag
  const col = (c && c.colores) || COLORES[pais.codigo] || ["#c8102e", "#f2a900"];
  document.documentElement.style.setProperty("--rojo", col[0]);
  document.documentElement.style.setProperty("--oro", col[1]);
  document.title = pais.nombre + " · Mundo Hispano";
  const fallbackFoto = (c?.secciones || []).flatMap(s => s.items || []).find(i => i && i.foto)?.foto || "";
  const heroFotos = [pais.foto, fallbackFoto].filter(Boolean);
  const heroIntro = c?.introduccion ? [].concat(c.introduccion)[0] : "";

  let html = `
    <section class="pais-hero" style="${heroFotos.length ? `background-image:${heroFotos.map(src => `url('${src}')`).join(",")}` : ""}">
      <div class="pais-hero-in">
        <p class="eyebrow">Guía de destino · Destination guide</p>
        <div class="pais-hero-heading">
          <img class="pais-flag" src="https://flagcdn.com/w160/${pais.codigo}.png" alt="Bandera de ${pais.nombre}">
          <div>
            <p class="pais-hero-kicker">${pais.codigo.toUpperCase()} · ${pais.lema}</p>
            <h1>${pais.nombre}</h1>
          </div>
        </div>
        ${heroIntro ? `<p class="pais-hero-intro">${marcar(heroIntro)}</p>` : ""}
        <span class="autor-badge">✍️ Página de ${pais.autor}</span>
      </div>
    </section>`;

  // No content file yet → friendly message
  if (!c) {
    html += `<section class="section"><h2>¡Página en construcción! 🚧</h2>
      <p class="section-sub">This page has no content yet.</p>
      <p>To fill it in: copy <code>contenido/espana.js</code>, rename the copy to
      <code>contenido/${pais.id}.js</code> and change the text inside.</p></section>`;
    pagina.innerHTML = html;
    return;
  }

  // Quick facts
  if (c.datos) {
    html += `<section class="datos" aria-label="Datos rápidos de ${pais.nombre}">${c.datos.filter(d => d && (d.titulo || d.valor)).map(d => `
      <div class="dato"><span>${d.icono}</span><small>${d.titulo}</small><b>${marcar(d.valor)}</b></div>`).join("")}
    </section>`;
  }

  // Intro
  if (c.introduccion) {
    html += `<section class="country-intro">
      <div class="country-intro-label"><span class="eyebrow">En pocas palabras</span><span class="country-intro-line"></span></div>
      <div class="country-intro-copy">${parrafos(c.introduccion)}</div>
    </section>`;
  }

  const secciones = c.secciones || [];

  // Section menu (buttons that jump to each section)
  html += `<nav class="chips">${secciones.map((s, i) =>
    `<a href="#s${i}">${s.icono || ""} ${s.titulo}</a>`).join("")}
    <a href="#reflexion">💭 Reflexión</a></nav>`;

  // The sections themselves
  secciones.forEach((s, i) => {
    const estilo = ESTILOS[s.tipo] || ESTILOS.texto;
    html += `<section class="section country-section ${i % 2 ? "section-alt" : ""}" id="s${i}">
      <div class="section-heading">
        <div><p class="eyebrow">${s.icono || ""} Sección de destino</p><h2>${s.titulo}</h2></div>
        ${s.subtitulo ? `<p class="section-sub">${s.subtitulo}</p>` : ""}
      </div>
      ${estilo(s)}
    </section>`;
  });

  // Reflection
  html += `<section class="section country-section ${secciones.length % 2 ? "section-alt" : ""}" id="reflexion">
    <div class="section-heading"><div><p class="eyebrow">Cierre personal</p><h2>Lo que aprendí</h2></div></div>
    <div class="reflexion">${parrafos(c.reflexion)}<p class="firma">— ${pais.autor}</p></div>
  </section>`;

  pagina.innerHTML = html;

  // Make tooltips tappable and cards flippable
  pagina.querySelectorAll(".es").forEach(w => w.onclick = () => w.classList.toggle("show"));
  pagina.querySelectorAll(".flip").forEach(f => {
    f.onclick = () => f.classList.toggle("girada");
    f.onkeydown = e => { if (e.key === "Enter") f.classList.toggle("girada"); };
  });
}

// Load the country's content file, then build the page
if (pais) {
  const s = document.createElement("script");
  s.src = "contenido/" + pais.id + ".js";
  s.onload = construir;
  s.onerror = construir;   // no file yet → "en construcción" message
  document.body.appendChild(s);
} else {
  construir();
}
