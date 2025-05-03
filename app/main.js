import extraiLivros from "./livros.js";
import mostraLivros from "./forEach.js"
import aplicarDesconto from "./map.js";
import filtrarLivros from "./filter.js";

buscaLivros();

async function buscaLivros() {
    const livros = await extraiLivros();
    let livrosDesconto = aplicarDesconto(livros)
    mostraLivros(livrosDesconto);
}

const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => {btn.addEventListener('click', async evento => {
    let livros = await extraiLivros();
    filtrarLivros(livros,btn.id);
})
});