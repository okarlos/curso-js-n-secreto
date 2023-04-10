window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
const elementoChute = document.getElementById('chute');

recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

// function onSpeak(e) {
//     var chute = e.results[0][0].transcript
//     console.log('Você disse:',chute)
//     exibeChuteNaTela(chute)
//     verificaChute(chute)
// }

function onSpeak(e) {
    var chute = e.results[0][0].transcript;
    var numeros = chute.replace(/[^0-9]/g, '').match(/\d+/g);
    if (numeros && !isNaN(numeros.join(''))) {
        console.log('Você disse:', numeros.join(''));
        exibeChuteNaTela(numeros.join(''));
        verificaChute(numeros.join(''));
    } else {
        console.log('Você não disse um número.');
    }
}


function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start());
