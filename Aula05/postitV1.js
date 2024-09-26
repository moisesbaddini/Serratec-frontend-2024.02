let img = document.createElement("img");
img.src =
  "https://img.freepik.com/fotos-premium/um-cachorrinho-com-uma-coleira-que-diz-eu-sou-um-cachorro_849715-2540.jpg";
img.className = "nota";

let container = document.querySelector(".container");

container.appendChild(img);

function novoPostit(cor, texto) {
  let item = document.createElement("div");
  item.className = "nota " + cor;
  item.textContent = texto;
  container.appendChild(item);
}

novoPostit("", "teste nota postit");
novoPostit("", "outro postit");
novoPostit("", "terceiro");
novoPostit("", "vai estourar");

function criarNota() {
  let campo = document.getElementById("texto");
  let cor = document.getElementById("cor");

  novoPostit(cor.value, campo.value);

  campo.value = "";
}
