const mocoto = '{"createdAt":"2024-09-23T04:19:15.889Z","id":"23","name":"Milton","Prato":"Mocoto"}';

let objeto = JSON.parse(mocoto);

console.log(objeto);
console.log(objeto.Prato);

localStorage.setItem("visitante", "zepa");

let b = document.createElement("button");

b.onclick = function () {
  let visitante = localStorage.getItem("visitante");
  alert("Bem vindo " + visitante);
};
b.textContent = "Identificar";

let container = document.getElementsByClassName("container")[0];

container.appendChild(b);
