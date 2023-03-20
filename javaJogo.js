let titulo     = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso      = document.querySelector('#aviso')
let progresso  = document.querySelector('#progresso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// AUDIO
let somAcerto   = document.querySelector('#somAcerto')
let somErro     = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let imgQuestao = document.querySelector('.imagemDaQuestao img')  // ADICIONE
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    imagem       : '0.png',  // ADICIONE
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}
const q1 = {
    numQuestao   : 1,
    imagem       : '1.png',  // ADICIONE
    pergunta     : "Qual o menor oceano do planeta?",
    alternativaA : "Oceano Pacífico",
    alternativaB : "Oceano Atlântico",
    alternativaC : "Oceano Índico ",
    alternativaD : "Oceano Ártico",
    correta      : "Oceano Ártico",
}
const q2 = {
    numQuestao   : 2,
    imagem       : '2.png',  // ADICIONE
    pergunta     : "Complete as lacunas da frase a seguir: estima estima-se que ___________ dos oceanos ainda sejam inexplorados",
    alternativaA : "mais de 80%",
    alternativaB : "menos 50%",
    alternativaC : "que exatos 95%",
    alternativaD : "praticamente 50%",
    correta      : "mais de 80%",
}
const q3 = {
    numQuestao   : 3,
    imagem       : '3.png',  // ADICIONE
    pergunta     : "A denominada baleia orca é uma espécie de...",
    alternativaA : "golfinho",
    alternativaB : "baleia",
    alternativaC : "tubarão",
    alternativaD : "polvo",
    correta      : "golfinho",
}
const q4 = {
    numQuestao   : 4,
    imagem       : '4.png',  // ADICIONE
    pergunta     : "Qual dos animais abaixo é um mamífero?",
    alternativaA : "Medusozoa",
    alternativaB : "Baleia",
    alternativaC : "Cavalo-marinho",
    alternativaD : "Nenhuma das opções",
    correta      : "Baleia",
}
const q5 = {
    numQuestao   : 5,
    imagem       : '5.png',  // ADICIONE
    pergunta     : "Qual a maior baleia do mundo?",
    alternativaA : "Orca",
    alternativaB : "Baleia-cinza",
    alternativaC : "Beluga",
    alternativaD : "Baleia-azul",
    correta      : "Baleia-azul",
}
const q6 = {
    numQuestao   : 6,
    imagem       : '6.png',  // ADICIONE
    pergunta     : "O polvo solta uma éspécie de tinta para:",
    alternativaA : "Para atrair presas fáceis",
    alternativaB : "Atordoar a presa e capturá-la",
    alternativaC : "Escapar de predadores",
    alternativaD : "Acasalar",
    correta      : "Escapar de predadores",
}
const q7 = {
    numQuestao   : 7,
    imagem       : '7.png',  // ADICIONE
    pergunta     : "Quantos anos vive uma tartaruga marinha?",
    alternativaA : "Pode chegar aos 100 anos",
    alternativaB : "Máximo 30 anos",
    alternativaC : "Uma década",
    alternativaD : "Até 50 anos",
    correta      : "Pode chegar aos 100 anos",
}
const q8 = {
    numQuestao   : 8,
    imagem       : '8.png',  // ADICIONE
    pergunta     : "Para que as algas favorecem no meio ambiente?",
    alternativaA : "Produção de oxigênio",
    alternativaB : "Comida japonesa",
    alternativaC : "Nada",
    alternativaD : "Ela suja os mares",
    correta      : "Produção de oxigênio",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
imgQuestao.setAttribute('src', 'images/'+q1.imagem)  // ADICIONE
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    imgQuestao.setAttribute('src', 'images/'+questoes[nQuestao].imagem) // ADICIONE
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    progresso.value = parseInt(progresso.value) + 1
    //console.log(progresso.value)
}

// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
alternativas.addEventListener('dblclick', () => {
    if(numQuestao.value == 8 && pontos == 80) { pontos = 80 }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        piscarNoAcerto()
        somAcerto.play()
        pontos += 10 // pontos = pontos + 10
        if(nQuestao.value == 1 && pontos == 20) { pontos = 10 }
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
        piscarNoErro()
        somErro.play()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 150);
    
    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 150)
    desbloquearAlternativas()
}

function fimDoJogo() {

    somAplausos.play()

    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto"+ s

    instrucoes.classList.add('placar')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        //location.reload();
        instrucoes.classList.remove('placar')
        // REINICIAR O JOGO
        articleQuestoes.style.display = 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'Leia a questão e clique na resposta correta'
    }, 8000)

}