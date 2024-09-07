function pesquisar() {
  // Obtém a seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

  if (!campoPesquisa) {
    section.innerHTML = 
    "<p>Digite qual a sua duvida que estamos anciosos para te ajudar!</p>"
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada dado na lista de dados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLocaleLowerCase()
    tags = dado.tags.toLocaleLowerCase()

    if (titulo.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      tags.includes(campoPesquisa)) {
      // Constrói o HTML para cada item do resultado
      resultados += `
      <div class="item-resultado">
        <h2> <a href="#" target="_blank">${dado.titulo}</a></h2>
        <p class="descricao-meta">${dado.descricao}</p> 
        <a href="${dado.link}" target="_blank">Clique Aqui e veja o tutorial completo</a>
      </div>
      `;
    }

  }

  if (!resultados) {
    resultados = "<p>Defina melhor a sua Busca!</p>"
  }


  // Atribui o HTML gerado à seção de resultados
  section.innerHTML = resultados;

}