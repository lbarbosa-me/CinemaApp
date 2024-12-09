
// let = valor pode ser alterado]
// Const = valor não pode ser alterado

let valorTotalCompra = 0; 
let assentosSelecionados = []; // [] guarda uma lista de valores

function selecionarAssento(assento) {
    const assentoSelecionado = assento;
    assentosSelecionados.push(assentoSelecionado.id);
    console.log(assento);
}