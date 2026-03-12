const lista = document.querySelector(".lista-produtos ");

const cafe = [
    {
        nome: "espresso",
        descricao: "Café concentrado y aromático",
        preco: "$3,50",
        img: "./assets/imagens/comida/espresso.jpg"
    },
    {
        nome: "cappuccino",
        descricao: "Espresso con leche vaporizada y espuma",
        preco: "$4,50",
        img: "./assets/imagens/comida/cappuccino.jpg"
    },
    {
        nome: "cafe helado",
        descricao: "Refrescante café frío con hielo",
        preco: "$5,00",
        img: "./assets/imagens/comida/Cafe helado.jpg"
    }
]

const bolo = [
    {
        nome: "Pastel de Chocolate",
        descricao: "Delicioso pastel de chocolate com recheio cremoso",
        preco: "$4,00",
        img: "./assets/imagens/comida/pastel de chocolate.jpg"
    },
    {
        nome: "Croissant",
        descricao: "Croissant francés recién horneado",
        preco: "$3,00",
        img: "./assets/imagens/comida/croissant.jpg"
    },
    {
        nome: "Muffin de Arándanos",
        descricao: "Esponjoso muffin con arándanos frescos",
        preco: "$3,50",
        img: "./assets/imagens/comida/muffin.jpg"
    }
]

const comida = [
    {
        nome: "Sándwich de Pavo",
        descricao: "Sándwich fresco con pavo y vegetales",
        preco: "$6,50",
        img: "./assets/imagens/comida/sándwich de Pavo.jpg"
    },
    {
     nome: "Ensalada César",
     descricao: "Ensalada clásica con pollo a la parrilla y aderezo César",
        preco: "$7,00",
        img: "./assets/imagens/comida/salada.jpg"

    },

    {
        nome: "Quiche de Espinacas",
        descricao: "Quiche de espinacas con queso y masa crujiente",
        preco: "$5,50",
        img: "./assets/imagens/comida/quiche.jpg"

    }

]
 function mostrarProdutos(produtos) {

    lista.innerHTML = ""

    produtos.forEach(produtos=> {

        lista.innerHTML += `<div class="caixa-cards">
                <div class="card-popular">

                    <div class="caixa-img-cards"><img class="img-cards" src=${produtos.img}    >
                    </div>
                    <div class="caixa-texto-card">

                        <p class="titulo-card">${produtos.nome}</p>
                        <p class="subtitulo-card">${produtos.descricao}</p>
                        <div class="preco-btn-card">
                            <p class="preco-card">${produtos.preco}</p>
                            <button class="btn-card"> <i class="bi bi-cart2 card-btn"></i> Agregar</button>
                        </div>

                    </div>

                </div>
        </div>
        `
    })
 }

 document.querySelector(".btn-cafe").addEventListener("click",()=>{
    mostrarProdutos(cafe)

 })

 document.querySelector(".btn-confeitaria").addEventListener("click",()=>{
    mostrarProdutos(bolo)

 })

 document.querySelector(".btn-comida").addEventListener("click",()=>{
    mostrarProdutos(comida)

 })

 mostrarProdutos(cafe)