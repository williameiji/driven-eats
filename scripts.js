
let nomeComida;
let nomeBebida;
let nomePudim;

let pedidoOk = 0 ;

let valorComida = "";
let valorBebida = "";
let valorPudim = "" ;
let valorTotal = "";

let comidase = "";

let nomeCLiente = "";
let enderecoCliente = "";

let mensagemCodi = "";
let mensagemPronta = "";

function estaSelecionadoComida(botaoComida){
    const botaoSelecionado = document.querySelector(".selecionado");

    if (botaoSelecionado !== null){
    botaoSelecionado.classList.toggle("selecionado");
    }
    else{
    botaoComida.classList.add("selecionado");
    nomeComida = botaoComida.querySelector(".comidas").innerHTML;
    document.querySelector(".produtoSelecionadoComida").innerHTML = nomeComida;
    valorComida = botaoComida.querySelector(".valoresc").innerHTML;

    valorComida = valorComida.replace("R$ ", "");

    document.querySelector(".valorSelecionadoComida").innerHTML = valorComida;

    valorComida = valorComida.replace(",", ".");
    console.log(nomeComida)
    console.log(valorComida)
    verificarItens()
    }
}

function estaSelecionadoBebida(botaoBebida){
    const botaoSelecionado = document.querySelector(".selecionado1");

    if (botaoSelecionado !== null){
        botaoSelecionado.classList.remove("selecionado1");
    }
    else {
    botaoBebida.classList.add("selecionado1");
    nomeBebida = botaoBebida.querySelector(".bebidas").innerHTML;
    document.querySelector(".produtoSelecionadoBebida").innerHTML = nomeBebida;
    valorBebida = botaoBebida.querySelector(".valoresb").innerHTML;

    valorBebida = valorBebida.replace("R$ ", "");

    document.querySelector(".valorSelecionadoBebida").innerHTML = valorBebida;

    valorBebida = valorBebida.replace(",", ".");
    console.log(nomeBebida)
    console.log(valorBebida)
    verificarItens()
    }
}

function estaSelecionadoPudim(botaoPudim){
    const botaoSelecionado = document.querySelector(".selecionado2");

    if (botaoSelecionado !== null){
        botaoSelecionado.classList.remove("selecionado2");
    }
    else{
    botaoPudim.classList.add("selecionado2");
    nomePudim = botaoPudim.querySelector(".pudim").innerHTML;
    document.querySelector(".produtoSelecionadoPudim").innerHTML = nomePudim;
    valorPudim = botaoPudim.querySelector(".valoresp").innerHTML;
    

    valorPudim = valorPudim.replace("R$ ", "");

    
    document.querySelector(".valorSelecionadoPudim").innerHTML = valorPudim;

    valorPudim = valorPudim.replace(",", ".");
    console.log(nomePudim)
    console.log(valorPudim)
    verificarItens()
    }
}

function trocarValores(){
    valorTotal = Number(valorComida) + Number(valorBebida) + Number(valorPudim);
    document.querySelector(".valorTotal").innerHTML = `R$ ${valorTotal.toFixed(2)}`;
}


//FINALIZAR PEDIDO

function verificarItens(){
    const estaCerto = document.querySelector(".fecharPedido");
    if(nomeComida && nomeBebida  && nomePudim){
    trocarValores();
    estaCerto.innerHTML = "Fechar pedido";
    estaCerto.classList.add("botaoVerificado");
    
    pedidoOk = 1;
}
}

function finalizarPedido(){
    const finaliza = document.querySelector(".fundo-confirmarPedido");
    if(pedidoOk === 1){
        nomeCLiente = prompt("Qual seu nome?");
        enderecoCliente = prompt("Qual seu endereço?")
        finaliza.classList.remove("ocultar");
    }
}

function botaoCancelar(){
    window.location.reload();
} 



function enviarPedido(){
mensagemPronta = 
`Olá, gostaria de fazer o pedido:
- Prato: ${nomeComida}
- Bebida: ${nomeBebida}
- Sobremesa: ${nomePudim}
Total: R$ ${valorTotal}

Nome: ${nomeCLiente}
Endereço: ${enderecoCliente}`;
mensagemCodi = encodeURIComponent(mensagemPronta);
    window.open(`https://wa.me/5543999725094?text=${mensagemCodi}`);
}


