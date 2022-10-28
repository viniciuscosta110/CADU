function makeTeachers() {
  const content = document.getElementById('content');

  const data = [{
      description: "Professor de Iniciativa a projetos, formando na UFAL e doutorado em Harvard, atualemente particpando ativamente nos grupos de pesquisa HARD e LESS",
      photo_src: "/images/prof1.png",
      alt: "Imagem prof1"
    }, {
      description: "Professor de Iniciativa a projetos, formando na UFAL e doutorado em Harvard, atualemente particpando ativamente nos grupos de pesquisa HARD e LESS",
      photo_src: "/images/prof2.png",
      alt: "Imagem prof2"
    }, {
      description: "Professor de Iniciativa a projetos, formando na UFAL e doutorado em Harvard, atualemente particpando ativamente nos grupos de pesquisa HARD e LESS",
      photo_src: "/images/prof3.png",
      alt: "Imagem prof3",
    },
  ]
  
  const generatedHtml = data.reduce((acc, item) => {
    return acc + `
      <article class="w-[280px] px-20 py-9 bg-white flex flex-col items-center gap-[52px] rounded-[40px] border-4 border-[#4245DB]">
      <div class="w-[200px]">
        <img src="${item.photo_src}" alt="${item.alt}" class="rounded-xl">
      </div>
      <p class="h-fit text-2xl text-center font-bold leading-7 tracking-wide">
        ${item.description}
      </p>
    </article>
  `}, '');

  content.innerHTML = generatedHtml;  
}

makeTeachers()