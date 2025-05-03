let livros = []

const apiLivros = "https://guilhermeonrails.github.io/casadocodigo/livros.json"

async function extraiLivros() {
    const res = await fetch(apiLivros);
    livros = await res.json();
    return livros;
}

export default extraiLivros;