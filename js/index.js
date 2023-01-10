var lsProduto = getLsProdutos();
function addProduto(i, qt) {
    produto = lsProduto[i];
    produto.qt += qt;
    (produto.qt < 0) ? produto.qt = 0: "";
    document.getElementById("cod-"+i). innerHTML = `R$ ${(produto.valor * produto.qt).toFixed(1)} (x${produto.qt})`;
}
function criar() {
    g = "";
    p = lsProduto[1];
    for (i in produto){
        p = lsProduto[i];

        if (g != p.grupo) {
            var grupo = document.createElement("div");
            grupo.classList.add("grupo");
            grupo.innerHTML = `<h4>${p.grupo}<span>${tipo}</span></h4>`;
            document.getElementById("conteudo").appendChild(grupo);
            g = p.grupo;
        }
        if (p.cod != '') {
            var produto = document.getElementsByClassName("produtor")[0].cloneNode(true);
            produto.getElementsByClassName("descricao")[0].innerHTML = p.descricao;
            produto.getElementsByClassName("cod")[0].innerHTML = p.cod;
            produto.getElementsByClassName("valor")[0].innerHTML = `R$ ${p.valor.toFixed(1)}`;
            setEvents(produto);
        } else {
            var produto = document.getElementsByClassName("outros")[0].cloneNode(true);
            produto.getElementsByClassName("outros-desc")[0].innerHTML = p.descricao;
            produto.getElementsByClassName("outros-valor")[0].innerHTML = `R$`
        }
    }
}