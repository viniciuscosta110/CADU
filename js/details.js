function makeExtensions() {
  const content = document.getElementById('content');

  const data = [{
    description: "Grupo formado com intuito de dar apoio as mulheres na computação, organiza eventos, cursos e palestras movimentando o bloco e levando o nome do IC á escolas e faculdades do Brasil a fora.",
    phone: "(00) 00000-0000",
    email: "monitor@email.com",
    room: "Sala 204 - IM",
    teacher: "ProfessorX",
    href_teacher: "https://www.linkedin.com/in/professorx/",
    book: "Livro tal"
  }
]
  
  const generatedHtml = data.reduce((acc, item) => {
    return acc + `
    <p class="py-9 px-[224px] bg-white rounded-[40px] border-4 border-[#4245DB] text-center">
      <strong>Disciplina X</strong>
    </p>
    <div class="w-full flex flex-col gap-5 pt-9 font-bold px-[112px]">
      <div id="content" class="flex gap-36">
        <section class="w-full h-[300px] bg-white px-6 py-6 flex flex-col items-center rounded-[40px] gap-8 border-4 border-[#4245DB]">
          <h3>Sala</h3>
          <div class="w-full h-full break-all gap-10 font-normal text-lg flex flex-col justify-center items-center">
            <a href="">
              ${item.room}
            </a>
          </div>
        </section>

        <section class="w-full h-[300px] bg-white px-6 py-6 flex flex-col items-center rounded-[40px] gap-8 border-4 border-[#4245DB]">
          <h3>Professor responsável</h3>
          <div class="w-full h-full break-all gap-4 font-normal text-lg flex flex-col justify-center items-center flex flex-col justify-center items-center">
            <a href="">
              ${item.teacher}
            </a>
          </div>
        </section>

        <section class="w-full h-[300px] bg-white px-6 py-6 flex flex-col items-center rounded-[40px] gap-8 border-4 border-[#4245DB]">
          <h3>Contato de monitores</h3>
          <div class="w-full h-full break-all gap-4 font-normal text-lg flex flex-col justify-center items-center">
            <p>Whatsapp: ${item.phone}</p>
            <p>${item.email}</p>
          </div>
        </section>
      </div>
      <div class="flex justify-center ">
        <section class="w-full h-[300px] bg-white px-8 py-6 flex flex-col items-center rounded-[40px] gap-8 border-4 border-[#4245DB]">
          <h3>Links Uteis</h3>
          <div class="w-full h-full break-all gap-4 font-normal text-lg flex flex-col justify-center items-center">
            <a href="">Livro: ${item.book}</a>
          </div>
        </section>
      </div>
    </div>
  `}, '');

  content.innerHTML = generatedHtml;  
}

makeExtensions()