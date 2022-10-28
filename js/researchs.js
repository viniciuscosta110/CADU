function makeResearchs() {
  const content = document.getElementById('content');

  const data = [{
      title: "BrAIN",
      description: "Grupo multicêntrico composto por pesquisadores da Computação, Medicina e Física de diferentes regiões do Brasil. Apesar de pouco usual, a construção de parcerias estratégicas com base na interdisciplinaridade tem sido uma poderosa ferramenta de transformação.",
    }, {
      title: "NEES",
      description: "NEES - Núcleo de Excelência em Tecnologias Sociais é um grupo de pesquisa vinculado ao Instituto de Computação da Universidade Federal de Alagoas que tem por objetivo pesquisar e desenvolver soluções de TI, gerando conhecimento  científico de vanguarda e promovendo a sua transferência para a socieade civil, setor produtivo e comunidade científica.",
    }
  ]
  
  const generatedHtml = data.reduce((acc, item) => {
    return acc + `
    <article class="w-auto px-20 py-7 bg-white flex flex-col rounded-[40px] border-4 border-[#4245DB]">
      <h1 class="font-bold text-3xl">BrAIN</h1>
      <p class="text-2xl">
        Grupo multicêntrico composto por pesquisadores da Computação, Medicina
        e Física de diferentes regiões do Brasil. Apesar de pouco usual, a construção
        de parcerias estratégicas com base na interdisciplinaridade tem sido uma
        poderosa ferramenta de transformação.
      </p>
    </article>
  `}, '');

  content.innerHTML = generatedHtml;  
}

makeResearchs()