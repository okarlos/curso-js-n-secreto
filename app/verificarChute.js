function verificaChute(chute) {
    const numero =+ chute;

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += (
            `<div>Chute inválido!</div>`
        )
        return
    }

    if (chuteFora(numero)) {
        elementoChute.innerHTML += (
            `<div class="dica"><i class="fa-solid fa-times-circle text-danger"></i>  
            Chute inválido, fale um número entre ${menorValor} e ${maiorValor}! <i class="fa-solid fa-times-circle text-danger"></i>
            </div>`
        )
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Parabéns! Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}.</h3>
            <button id="jogar-novamente" class="btn-jogar"><span class="jogar">Jogar novamente</span> <i class="fas fa-redo"></i>
            </button>
        `;
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div class="dica"><i class="fa-solid fa-down-long"></i> O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `;
    } else {
        elementoChute.innerHTML += `
            <div class="dica"><i class="fa-solid fa-up-long"></i> O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `;
    }

    if (Math.abs(numero - numeroSecreto) <= 5) {
        elementoChute.innerHTML += `
            <div class="dica">🔥 Tá quente! 🔥</div>
        `;
    }

}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function chuteFora(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})