export default function aplicarDesconto(livros){
    const desconto = 0.3;
    let livrosDesconto = livros.map(livro => {
        return { ...livro, preco: livro.preco - (livro.preco * desconto)}
    });
    return livrosDesconto;
}