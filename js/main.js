
function executaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const ListaDeBotoes = document.querySelectorAll('.botao');

let contador = 0;

while (contador < ListaDeBotoes.length) {

    const botoes = ListaDeBotoes[contador];

    const instrumento = botoes.classList[1];

    const idAudio = `#som_${instrumento}`;

    botoes.onclick = function() {
        executaSom(idAudio);
    }
    
    contador++;

    
}





