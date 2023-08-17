const timeElement = document.getElementById('time');
//está declarando a variável time//
const alarmInput = document.getElementById('alarmTime');
//está declarando a variável alarmTime//
const setAlarmButton = document.getElementById('setAlarm');
//está declarando a variável setAlarm//
//As três estão sendo declaradas como constantes//
function updateClock() {
    //Dando a função para atualizar o relógio conforme as informações abaixo//
    const now = new Date();
    //constante agora para uma nova data//
    const hours = String(now.getHours()).padStart(2, '0');
    //constante horas com uma quebra de código, usado para formatar as horas//
    const minutes = String(now.getMinutes()).padStart(2, '0');
     //constante minutos com uma quebra de código, usado para formatar os minutos//
    const seconds = String(now.getSeconds()).padStart(2, '0');
     //constante segundos com uma quebra de código, usado para formatar os segundos do relógio//
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    //elemento tempo para mudar as horas, minutos e segundos//
}

function checkAlarm() {
    //função para checar o alarme//
    const now = new Date();
    //constante agora para uma nova data//
    const alarmTime = new Date(now.toDateString() + ' ' + alarmInput.value);
    //constante tempo do alarme para uma nova data, mudando a data + o alarme com o valor//
    if (alarmTime > now) {
        //quando o alarme irá programar...//
        setTimeout(() => {
            //... ele irá inserir definir tempo limite//
            alert('Alarme!');
            // com o tempo inserido ele irá enviar para a tela Alarme! quando estiver na hora//
        }, alarmTime - now);
        //tempo do alarme agora//
    } else {
        //se...//
        alert('Horário do alarme já passou para hoje.');
        //o horário do alrme já passou, mostrar na tela informações as cima//
    }
}

updateClock();
//quando acabar atualizar o relógio//
setInterval(updateClock, 1000);
//inserir intervalo par ele atualizar//

setAlarmButton.addEventListener('click', checkAlarm);
//quando clicar no botão do alarme ele irá fazer a contagem regressiva até aparecer a mensagem alarme!//