const $btnAgregarCard = document.getElementById("btn-agregar-card");
const $btnEliminarCard = document.getElementById("btn-eliminar-card");
let firstTime = true;
let contador = 0;

$btnAgregarCard.addEventListener("click", (e) => {
  ++contador;
  const $figure = document.querySelector(".cards");
  const $template = document.getElementById("template-cards").content;
  const $fragment = document.createDocumentFragment();

  if (firstTime) {
    $figure.style.display = "block";
    firstTime = false;
  }

  $template
    .querySelector("img")
    .setAttribute("src", "https://placeholder.co/200/200");
  $template.querySelector("img").setAttribute("alt", `Imagen ${contador}`);
  $template.querySelector("figcaption").textContent = `Imagen ${contador}`;

  $fragment.appendChild(document.importNode($template, true));

  $figure.appendChild($fragment);
});

$btnEliminarCard.addEventListener("click", (e) => {
  if (contador === 0) alert("No haz agregado ninguna card!");
  else {
    const $figure = document.querySelector(".cards");
    const $div = document.querySelector(".cards .card");
    $figure.removeChild($div);
    --contador;
    if (contador === 0) {
      $figure.style.display = "none";
      firstTime = true;
    }
  }
});
