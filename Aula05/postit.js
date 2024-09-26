let img = document.createElement("img");
img.src =
  "https://img.freepik.com/fotos-premium/um-cachorrinho-com-uma-coleira-que-diz-eu-sou-um-cachorro_849715-2540.jpg";
img.className = "nota";

let container = document.querySelector(".container");

container.appendChild(img);

function novoPostit(nota) {
  let item = document.createElement("div");
  item.className = "nota " + nota.cor;

  item.innerHTML = "<span>" + nota.texto + "</span><br/>" + "<small>" + nota.aluno + "</small>";

  container.appendChild(item);
}

function criarNota() {
  let campo = document.getElementById("texto");
  let cor = document.getElementById("cor");

  novoPostit(cor.value, campo.value);

  campo.value = "";
}

const lista_postits = [
  {
    cor: "rosa",
    texto: "quero jantar",
    aluno: "Zépa",
  },
  {
    cor: "amarelo",
    texto: "professor, digita um pouco mais devagar!",
    aluno: "Isabella",
  },
  {
    cor: "verde",
    texto: "tomaria uma cerveja",
    aluno: "Samuel",
  },
  {
    cor: "rosa",
    texto: "Amo Vcs✨",
    aluno: "Júlia",
  },
  {
    cor: "azul",
    texto: "js é fera",
    aluno: "Thiago Branco",
  },
  {
    cor: "Azul",
    texto: "oi",
    aluno: "Renan",
  },
  {
    cor: "azul",
    texto: "Olá mundo!",
    aluno: "Brenda Barbatti",
  },
  {
    cor: "Verde",
    texto: "Quero mais um gato",
    aluno: "Andressa",
  },
  {
    cor: "azul",
    texto: "Vamos Fluzão!",
    aluno: "Gabriel",
  },
  {
    cor: "rosa",
    texto: "eu amo minha namorada",
    aluno: "Murilo",
  },
  {
    cor: "azul",
    texto: "Me arrependo de algumas escolhas de vida.",
    aluno: "Guilherme",
  },
  {
    cor: "azul",
    texto: "odeio java",
    aluno: "Eric",
  },
  {
    cor: "Verde",
    texto: "Dog",
    aluno: "Athirson",
  },
  {
    cor: "laranja",
    texto: "tudobom",
    aluno: "Victor Hugo",
  },
  {
    cor: "red",
    texto: "Sabendo mais hoje do que ontem. Obrigado Zepa!!!",
    aluno: "Milton rdmf",
  },
  {
    cor: "azul",
    texto: "vou_aprender",
    aluno: "Tiago Ventura",
  },
  {
    cor: "azul",
    texto: "tô com fome, quero intervalo",
    aluno: "mateus azevedo faria",
  },
  {
    cor: "rosa",
    texto: "Flamengo",
    aluno: "Rafael",
  },
  {
    cor: "azul",
    texto: "Erro às vezes só pra disfarçar minha perfeição.!",
    aluno: "Mi",
  },
  {
    cor: "rosa",
    texto: "boa noite!",
    aluno: "Caio Pacheco",
  },
  {
    cor: "verde",
    texto: "aprendendo sempre",
    aluno: "Pedro Benvindo",
  },
  {
    cor: "azul",
    texto: "Viva MM's ",
    aluno: "Fernanda",
  },
  {
    cor: "lapislazuli",
    texto: "Shangela Winner",
    aluno: "Luiz Fernando",
  },
  {
    cor: "verde",
    texto: "quero dormir",
    aluno: "Vinícius",
  },
  {
    cor: "preto",
    texto: "e o pix nada?",
    aluno: "Gustavo",
  },
  {
    cor: "rosa",
    texto: "Queria uma pizza.",
    aluno: "Eduarda Goulart",
  },
  {
    cor: "vermelho",
    texto: "me ajuda Pai",
    aluno: "Heytor",
  },
  {
    cor: "rosa",
    texto: "oii galerinha bonita",
    aluno: "Eduarda Pinho",
  },
  {
    cor: "roxo",
    texto: "estou com fome",
    aluno: "Joao Gabriel Tavares Siqueira",
  },
  {
    cor: "lilás",
    texto: "aceito pix :)",
    aluno: "Renata Rodrigues de Freitas",
  },
  {
    cor: "vermelho",
    texto: "Me ajuda Deus",
    aluno: "Vitor",
  },
  {
    cor: "Vermelho",
    texto: "Hello",
    aluno: "Rafael G",
  },
];

for (let i = 0; i < lista_postits.length; i++) {
  let item = lista_postits[i];
  novoPostit(item);
}
