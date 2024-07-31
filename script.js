const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu do Jardim, você se depara com um novo Adão, um Adão que consegue responder a todas as dúvidas que uma pessoa pode ter. Ele também oferece a salvação, a vida eterna, etc. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "Somos chamados para uma missão muito importante, espalhar o plano de salvação por toda Terra."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Com a descoberta deste novo Adão, chamado Jesus de Nazaré, uma professora de teologia da escola decidiu fazer uma sequência de aulas sobre Jesus. No fim de uma aula, ela pede que você escreva um trabalho sobre quem era Jesus. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utilizar a Bíblia como base de busca para encontrar informações relevantes para o trabalho e explicar numa linguagem que facilite o entendimento.",
                afirmacao: ""
            },
            {
                texto: "Escrever o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa, também foi levantado um ponto muito importante: como Jesus transforma a vida das pessoas. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Defender a ideia de que Jesus é o único que pode preencher o vazio que sentimos.",
                afirmacao: ""
            },
            {
                texto: "Defender que somos bons o suficiente e não precisamos de Jesus.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre Jesus. E agora?",
        alternativas: [
            {
                texto: "Desenhar uma imagem que representa o que Jesus é para você.",
                afirmacao: ""
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Um colega de turma, após estudar sobre Jesus, resolveu aceitá-lo. Ele te procura para saber como fazer isso. O que você faz?",
        alternativas: [
            {
                texto: "Instruí-lo com base nos ensinamentos bíblicos e levá-lo para o corpo de Jesus Cristo (igreja) do qual você faz parte.",
                afirmacao: ""
            },
            {
                texto: "Falar para ele ir buscar as informações na Bíblia e deixá-lo se virar sozinho.",
                afirmacao: ""
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Parabéns, você concluiu o Quiz com suceso! Contudo nós cristãos devemos cumprir nosso chamado. (Marcos1:17) Então, Jesus lhes disse: SIgam-me, e eu os farei pescadores de homens.                 (Matheus 5:13) -Vocês são o sal da terra. Mas, se o sal perder seu sabor, como restaurá-lo? Não servirá para nada, exceto para ser jogado fora e pisado pelos homens.";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();