window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
const elementoChute = document.getElementById('chute');

recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak({ results }) {
    const transcript = results[0][0].transcript;
    const numeros = transcript.replace(/[^0-9]/g, '').match(/\d+/g) ?? [];
    
    if (numeros.length > 0) {
      const numero = numeros.join('');
      console.log(`Você disse: ${numero}`);
      exibeChuteNaTela(numero);
      verificaChute(numero);
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
