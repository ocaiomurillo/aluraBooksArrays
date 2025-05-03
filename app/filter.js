import mostraLivros from "./forEach.js";

export default function filtrarLivros(livros,id) {
    const botao = document.getElementById(id);
    const categoria = botao.value;

    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria);
    mostraLivros(livrosFiltrados);
}
 



