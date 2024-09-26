function barra() {
  // let lista = document.querySelectorAll(".quadrado");
  // lista[1].innerText = "Modificado no JS";
  // lista[0].style.display = "none";

  let botao = document.querySelector("button");

  let lista;
  lista = document.getElementsByTagName("img");

  if (lista[0].style.display == "none") {
    lista[0].style.display = "inline";
    botao.textContent = "Ocultar";
  } else {
    lista[0].style.display = "none";
    botao.textContent = "Exibir";
  }
}
