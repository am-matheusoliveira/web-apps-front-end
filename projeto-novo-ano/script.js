// Definir sua idade atual
let idadeAtual = 27;

// Função para adicionar um zero à esquerda se o número for menor que 10
function formatarDoisDigitos(numero) {
    return numero < 10 ? '0' + numero : numero;
}

// Definir a data exata do próximo aniversário
const proximoAniversario = new Date();
proximoAniversario.setFullYear(proximoAniversario.getMonth() > 11 || (proximoAniversario.getMonth() === 11 && proximoAniversario.getDate() >= 28) 
    ? proximoAniversario.getFullYear() + 1 
    : proximoAniversario.getFullYear());
proximoAniversario.setMonth(11); // Dezembro (meses no JS começam em 0)
proximoAniversario.setDate(28);
proximoAniversario.setHours(18);
proximoAniversario.setMinutes(30);
proximoAniversario.setSeconds(0);

// Atualizar o contador a cada segundo
function atualizarContagem() {
    const agora = new Date();
    const diferenca = proximoAniversario - agora; // Diferença em milissegundos

    // Converter a diferença para dias, horas, minutos e segundos
    const dias     = formatarDoisDigitos(Math.floor( diferenca / (1000 * 60 * 60   * 24)));
    const horas    = formatarDoisDigitos(Math.floor((diferenca % (1000 * 60 * 60   * 24)) / (1000 * 60 * 60)));
    const minutos  = formatarDoisDigitos(Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60)));
    const segundos = formatarDoisDigitos(Math.floor((diferenca % (1000 * 60))      / 1000));

    // Atualizar o DOM com os valores formatados
    document.getElementById("days").textContent    = dias;
    document.getElementById("hours").textContent   = horas;
    document.getElementById("minutes").textContent = minutos;
    document.getElementById("seconds").textContent = segundos;

    // Quando chegar ao próximo ano, incrementar a idade
    if (diferenca <= 0) {
        idadeAtual++;
        proximoAniversario.setFullYear(proximoAniversario.getFullYear() + 1);
        alert("Você agora tem " + idadeAtual + " anos!");
    }
}

// Executar a função a cada segundo
setInterval(atualizarContagem, 1000);
