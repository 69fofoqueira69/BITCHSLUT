const perfil = {
  nome: "XXXX",
  idade: "XXXXX",
  genero: "XXXXX",
  ocupacao: "XXXXXX",
  quantidadeSexo: "XXXXX",
  biografia: [
    "XXXXXXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXXXXXX"
  ].join("\n"),
  imagem: "" // coloque aqui a URL da imagem quando quiser exibir
};

function preencherPerfil(data) {
  document.getElementById("nome").textContent = data.nome;
  document.getElementById("idade").textContent = data.idade;
  document.getElementById("genero").textContent = data.genero;
  document.getElementById("ocupacao").textContent = data.ocupacao;
  document.getElementById("quantidadeSexo").textContent = data.quantidadeSexo;
  document.getElementById("biografia").textContent = data.biografia;

  const imagem = document.getElementById("imagemPerfil");
  const placeholder = document.getElementById("placeholderTexto");

  if (data.imagem) {
    imagem.src = data.imagem;
    imagem.style.display = "block";
    placeholder.style.display = "none";
  }
}

preencherPerfil(perfil);
