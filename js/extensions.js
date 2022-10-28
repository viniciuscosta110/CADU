function makeExtensions() {
  const content = document.getElementById('content');

  const data = [{
    description: "Grupo formado com intuito de dar apoio as mulheres na computação, organiza eventos, cursos e palestras movimentando o bloco e levando o nome do IC á escolas e faculdades do Brasil a fora.",
    logo_src: "../images/katie_logo.png",
    alt: "Logo Katie",
  }, {
    description: "Grupo formado com o intuito de levar informações sobre cibersegurança ao bloco e montar grupos de estudo intensivo na área, perfeito para quem quer entender InfoSec.",
    logo_src: "../images/acha_logo.png",
    alt: "Logo Acha",
  }
]
  
  const generatedHtml = data.reduce((acc, item) => {
    return acc + `
    <article class="w-fit px-20 py-7 bg-white flex gap-[92px] rounded-[40px] border-4 border-[#4245DB] items-center">
      <img src="${item.logo_src}" alt="${item.alt}" class="rounded-xl">
      <p class="text-2xl">${item.description}</p>
    </article>
  `}, '');

  content.innerHTML = generatedHtml;  
}

makeExtensions()