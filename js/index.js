function makeNews() {
  const content = document.getElementById('content');
  const data = [
    {
      description: "O grupo Katie está organizando o evento de comemoração de aniversário!Se inscrevam para o evento ainda hoje, terá eventos presenciais e online.",
      logo_src: "../images/katie_logo.png",
      alt: "Logo Katie",
    },
    {
      description: "Grupo formado com o intuito de levar informações sobre cibersegurança ao bloco e montar grupos de estudo intensivo na área, perfeito para quem quer entender InfoSec.",
      logo_src: "../images/acha_logo.png",
      alt: "Logo Acha",
    },
  ]
  
  const generatedHtml = data.reduce((acc, item) => {
    return acc + `
    <article class="w-fit px-20 py-7 bg-white flex gap-[140px] rounded-[40px] border-4 border-[#4245DB] items-center">
      <p id="description" class="w-[400px] text-2xl">${item.description}</p>
      <img src="${item.logo_src}" alt="${item.alt}" class="rounded-xl">
    </article>`
  }, '');

  content.innerHTML = generatedHtml;  
}

makeNews()