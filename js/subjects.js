function makeSubjects() {
  const content = document.getElementById('content');

  const data = [{
      title: "Programação 1",
      href: "/details.html",
    }, {
      title: "Matemática Discreta",
      href: "/details.html",
    }, {
      title: "...",
      href: "/details.html",
    }
  ]
  
  const generatedHtml = data.reduce((acc, item) => {
    return acc + `
    <a class="text-center text-white" href="${item.href}">${item.title}</a>
  `}, '');

  content.innerHTML = generatedHtml;  
}

makeSubjects()