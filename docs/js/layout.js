function cargar(id, archivo) {
  fetch(archivo)
    .then(res => {
      if (!res.ok) throw new Error(`No se pudo cargar ${archivo}`);
      return res.text();
    })
    .then(html => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = html;
    })
    .catch(err => console.error(err));
}

document.addEventListener("DOMContentLoaded", () => {

  cargar("header", "/sauce/header.html");
  cargar("menu", "/sauce/menu.html");
  cargar("footer", "/sauce/footer.html");

  function actualizarHora() {
    const hora = document.getElementById("hora");
    if (hora) hora.textContent = new Date().toLocaleTimeString();
  }

  setInterval(actualizarHora, 1000);
  actualizarHora();
});