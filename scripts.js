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
let condComida = "";
let condBebida = "";
let condPudim = "";

function estaSelecionadoComida(botaoComida){
    const botaoSelecionado = document.querySelector(".selecionado");

    if (botaoSelecionado !== null){
        botaoSelecionado.classList.toggle("selecionado");
        condComida = botaoComida.classList.contains("selecionado");
     }else{
        botaoComida.classList.add("selecionado");
        condComida = botaoComida.classList.contains("selecionado");
        nomeComida = botaoComida.querySelector(".comidas").innerHTML;
        document.querySelector(".produtoSelecionadoComida").innerHTML = nomeComida;
        valorComida = botaoComida.querySelector(".valoresc").innerHTML;
        valorComida = valorComida.replace("R$ ", "");
        document.querySelector(".valorSelecionadoComida").innerHTML = valorComida;
        valorComida = valorComida.replace(",", ".");
    }

    verificarItens()
}

function estaSelecionadoBebida(botaoBebida){
    const botaoSelecionado = document.querySelector(".selecionado1");

    if (botaoSelecionado !== null){
        botaoSelecionado.classList.toggle("selecionado1");
        condBebida = botaoBebida.classList.contains("selecionado1");
    }else {
        botaoBebida.classList.add("selecionado1");
        condBebida = botaoBebida.classList.contains("selecionado1");
        nomeBebida = botaoBebida.querySelector(".bebidas").innerHTML;
        document.querySelector(".produtoSelecionadoBebida").innerHTML = nomeBebida;
        valorBebida = botaoBebida.querySelector(".valoresb").innerHTML;
        valorBebida = valorBebida.replace("R$ ", "");
        document.querySelector(".valorSelecionadoBebida").innerHTML = valorBebida;
        valorBebida = valorBebida.replace(",", ".");
    }

    verificarItens()
}

function estaSelecionadoPudim(botaoPudim){
    const botaoSelecionado = document.querySelector(".selecionado2");

    if (botaoSelecionado !== null){
        botaoSelecionado.classList.toggle("selecionado2");
        condPudim = botaoPudim.classList.contains("selecionado2");
    }else{
        botaoPudim.classList.add("selecionado2");
        condPudim = botaoPudim.classList.contains("selecionado2");
        nomePudim = botaoPudim.querySelector(".pudim").innerHTML;
        document.querySelector(".produtoSelecionadoPudim").innerHTML = nomePudim;
        valorPudim = botaoPudim.querySelector(".valoresp").innerHTML;
        valorPudim = valorPudim.replace("R$ ", "");
        document.querySelector(".valorSelecionadoPudim").innerHTML = valorPudim;
        valorPudim = valorPudim.replace(",", ".");
    }

    verificarItens()
}

function trocarValores(){
    valorTotal = Number(valorComida) + Number(valorBebida) + Number(valorPudim);
    document.querySelector(".valorTotal").innerHTML = `R$ ${parseInt(valorTotal).toFixed(2).replace(".", ",")}`;
}

function verificarItens(){
    const estaCerto = document.querySelector(".fecharPedido");

    if(condComida === true && condBebida === true  && condPudim === true){
        trocarValores();
        estaCerto.innerHTML = "Fechar pedido";
        estaCerto.classList.add("botaoVerificado");
        estaCerto.classList.remove("botaoRecusado")
        pedidoOk = 1;
    }else {
        estaCerto.innerHTML = "Selecione os 3 itens para fechar o pedido";
        estaCerto.classList.add("botaoRecusado")
        estaCerto.classList.remove("botaoVerificado");
    }
}

function finalizarPedido(){
    const finaliza = document.querySelector(".fundo-confirmarPedido");
    if(pedidoOk === 1){
        nomeCLiente = prompt("Qual seu nome?");
        enderecoCliente = prompt("Qual seu endereço?")
    }

    if (nomeCLiente === null && enderecoCliente === null){
        alert("Por favor adicione Nome e Endereço")
        finalizarPedido()
    }else{
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
    Total: R$ ${parseInt(valorTotal).toFixed(2).replace(".", ",")}

    Nome: ${nomeCLiente}
    Endereço: ${enderecoCliente}`;

    mensagemCodi = encodeURIComponent(mensagemPronta);

    window.open(`https://wa.me/5543999725094?text=${mensagemCodi}`);
}


