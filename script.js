function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  //pegar a tag img e substituir a imagem
  // se tiver ligth mode, adicionar uma imagem se estiver sem manter imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/may.png")
  } else {
    img.setAttribute("src", "./assets/May2.png")
  }
}
