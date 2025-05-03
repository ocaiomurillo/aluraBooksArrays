import mostraLivros from "./forEach.js";

export default function ordenarLivros(livros) {
    const livrosOrdenados = livros.sort((a,b) => a.preco - b.preco);
    mostraLivros(livrosOrdenados);
}