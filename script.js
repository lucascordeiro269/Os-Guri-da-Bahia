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
                afirmacao: [
                    "Somos chamados para uma missão muito importante, espalhar o plano de salvação por toda Terra",
                    " pescadores de homens."
                ]
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: [
                    "Somos chamados para uma missão muito importante, espalhar o plano de salvação por toda Terra",
                    " pescadores de homens"
                ]
            }
        ]
    },
    {
        enunciado: "Com a descoberta deste novo Adão, chamado Jesus de Nazaré, uma professora de teologia da escola decidiu fazer uma sequência de aulas sobre Jesus. No fim de uma aula, ela pede que você escreva um trabalho sobre quem era Jesus. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utilizar a Bíblia como base de busca para encontrar informações relevantes para o trabalho e explicar numa linguagem que facilite o entendimento.",
                afirmacao: "Na Bíblia encontramos respostas para tudo."
            },
            {
                texto: "Escrever o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: "Na Bíblia encontramos respostas para tudo."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa, também foi levantado um ponto muito importante: como Jesus transforma a vida das pessoas. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Defender a ideia de que Jesus é o único que pode preencher o vazio que sentimos.",
                afirmacao: [
                    "Jesus nos salvou.",
                    "pecadores,"
                ]
            },
            {
                texto: "Defender que somos bons o suficiente e não precisamos de Jesus.",
                afirmacao: [
                    "Jesus nos salvou.",
                    "pecadores,"
                ]
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou falar para todos quem Jesus é pra você.",
        alternativas: [
            {
                texto: "Falar o que Jesus é pra você com base nas suas experiências, sensações e momentos que  você viveu com Ele.",
                afirmacao: "e nenhuma IA consegue descreve-lo."
            },
            {
                texto: "Buscar informações de quem foi Jesus em uma IA.",
                afirmacao: "e nenhuma IA consegue descreve-lo."
            }
        ]
    },
    {
        enunciado: "Um colega de turma, após estudar sobre Jesus, resolveu aceitá-lo. Ele te procura para saber como fazer isso. O que você faz?",
        alternativas: [
            {
                texto: "Instruí-lo com base nos ensinamentos bíblicos e orienta-lo para ser mais ítimo com o Senhor.",
                afirmacao: [
                    "Devemos compartilhar Jesus",
                    "não guarda-lo para nós mesmos."
                ]
            },
            {
                texto: "Falar para ele ir buscar as informações na Bíblia e deixá-lo se virar sozinho.",
                afirmacao: [
                    "Devemos compartilhar Jesus",
                    "não guarda-lo para nós mesmos."
                ]
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

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Parabéns, você concluiu o Quiz com suceso! Agora que tal você ser igual os discipulos de Jesus e espalhar as boas nova peo mundo?"
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

mostraPergunta();