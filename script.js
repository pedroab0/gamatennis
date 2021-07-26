class Product {
    constructor(id, name, price) {
        this.id = id;
        this.nome = name;
        this.preco = price;
    }
}

var produtos = [];

function addProduct(id, nome, valor) {
    // let botao = document.querySelector("#button-botao");
    // botao.addEventListener("click", () => {
    //     event.preventDefault();
    // });
    let item = new Product(id, nome, valor);
    produtos.push(item);
    console.log(produtos);
}

function totalPrice() {
    let total = 0;

    for (let valor = 0; valor < produtos.length; valor++) {
        total += produtos[valor].preco;
    }

    document.getElementById("total").innerText = `Valor: R$${total}`;
}

function billing() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let data = {
        cliente: {
            nome,
            email,
        },
        itemsBought: produtos,
    };

    let convertData = JSON.stringify(data);

    localStorage.setItem(`Compra${localStorage.length + 1}`, convertData);
}
