let lista = document.createElement("ul");
document.body.appendChild(lista);

function criarItem(nome, emoji) {
  //Criação do item
  let item = document.createElement("li");
  item.textContent = emoji + " " + nome;
  lista.appendChild(item);

  //Quero separar o primeiro nome
  //procurar o espaço
  let espaco = nome.indexOf(" ");
  //copiar apenas o texto de zero até espaco
  let primeiro = nome.substring(0, espaco);

  //Aplicar a classe CSS ou className
  if (primeiro.length < 6) item.className = "curto";
}

criarItem("Zepa Sauro", "🦇");

criarItem("Andressa Assis Jandre", "🫰🏽");
criarItem("Renata Rodrigues", "🤩");
criarItem("Renan Ferreira", "🍎");
criarItem("Guilherme Senna Pires", "💀");
criarItem("Joao gabriel Tavares Siqueira", "🤓");
criarItem("Fernanda Canto", "😺");
criarItem("Athirson Jogador", "😈");
criarItem("Brenda Barbatti", "🐕");
criarItem("Rafael Guberman", "🍕");
criarItem("Samuel Teldison", "🥶");
criarItem("ERIC DAMIÃO DUARTE", "⚒");
criarItem("Lucas Gomes Coco", "🐀");
criarItem("Eduarda Goulart", "🥰");
criarItem("Júlia Xavier", "✨");
criarItem("Michele Moreira da Silva", "🚀");
criarItem("Vinícius Ramos", "😎");
criarItem("Milton rdmf", "🐶");
criarItem("Gustavo Santos (GCS)", "🐱‍🐉");
criarItem("MURILO BONGARD", "💋");
criarItem("Tiago Ventura", "😁");
criarItem("Thiago Branco", "🚭");
criarItem("Eduarda Pinho", "🌷");
criarItem("Vinícius Ramos", "😱");
criarItem("Eduarda Goulart", "🐾");
criarItem("Isabella Pinheiro", "☂️");
criarItem("Romulo Lourenço", "😎");
