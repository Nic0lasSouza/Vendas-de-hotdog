var lsProduto = getLsProdutos();
function addProduto(i, qt) {
    produto = lsProduto[i];
    produto.qt += qt;
    (produto.qt < 0) ? produto.qt = 0: "";
    document.getElementById("cod-" i). innerHTML = `R$ $`
}