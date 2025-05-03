import mostraLivros from "./forEach.js";
import mostrarValor from "./reduce.js";

export default function filtrarLivros(livros,id) {
    const botao = document.getElementById(id);
    const categoria = botao.value;
    let livrosFiltrados = []
    if (categoria === 'disponiveis'){
        livrosFiltrados = livros.filter(livro => livro.quantidade > 0);
        mostraLivros(livrosFiltrados);
        mostrarValor(livrosFiltrados);
    } else {
        livrosFiltrados = livros.filter(livro => livro.categoria == categoria);
        mostraLivros(livrosFiltrados);
    }   
}
 



