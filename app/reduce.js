const sectionValor = document.getElementById("valor_total_livros_disponiveis")

export default function mostrarValor(livros){
    let valor = livros.reduce((acc, livro) => acc + livro.preco, 0);
    sectionValor.innerHTML = `    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valor.toFixed(2)}</span></p>
    </div>`

}