let lista = document.getElementById("tarefas");
let campo = document.getElementById("nome");

function criar() {
  //  let item = document.getElementById("item1");
  //  item.innerText = "nova tarefinha";

  let novo = document.createElement("li");
  novo.innerText = campo.value;
  lista.appendChild(novo);
}
