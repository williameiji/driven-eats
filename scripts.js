
function estaSelecionadoComida(comidaSelecionada) {
    const comida = document.querySelector(".selecionado");
    if (comida !== null) {
      comida.classList.toggle("selecionado");
    }
    else{
        comidaSelecionada.classList.add("selecionado");
        }
}

function estaSelecionadoBebida(bebidaSelecionada) {
    const bebida = document.querySelector(".selecionado2");
    if (bebida !== null) {
      bebida.classList.toggle("selecionado2");
    }
    else{
        bebidaSelecionada.classList.add("selecionado2");
        }
}

function estaSelecionadoPudim(pudimSelecionada) {
    const pudim = document.querySelector(".selecionado3");
    if (pudim !== null) {
      pudim.classList.toggle("selecionado3");
    }
    else{
        pudimSelecionada.classList.add("selecionado3");
        }
}

