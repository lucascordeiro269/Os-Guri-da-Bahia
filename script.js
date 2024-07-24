const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu do Jardim você se depara com um novo Adão, um Adão que consegue responder todas as dúvidas que uma pessoa pode ter, ele também ofrece a salvação, a vida eterna etc. Qual o primeiro pensamento?",
        alternativas: [
            "Isso é assustador!",
            "Isso é maravilhoso!"
        ]
    },
    {
        enunciado: "Com a descoberta deste novo Adão, chamado Jesus de Nazaré, uma professora de teologia da escola decidiu fazer uma sequência de aulas sobre Jesus. No fim de uma aula ela pede que você escreva um trabalho sobre quem era Jesus em sala de aula. Qual atitude você toma?",
        alternativas: [
            "Utilizar a Bíblia como base de buscas  para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
            "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como Jesus transforma a vida das pessoas. Nesse debate, como você se posiciona?",
        alternativas: [
            "Defende a ideia de que Jesus é o único que pode preencher o vazio que sentimos.",
            "defenda que somos bons o suficiente e não precisamos de Jesus."
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre Jesus. E agora?",
        alternativas: [
            "Desenhar uma imagem que representa o que Jesus é para você.",
            "Criar uma imagem utilizando um gerador de imagem de IA."
        ]
    },
    {
        enunciado: "Um colega de turma após estudar sobre Jesus, resolveu aceita-lo,ele te procura para saber como fazer isto, o que você faz?",
        alternativas: [
           "instrui-lo com base nos ensinamentos biblicos, e leva-lo para o corpo de Jesus Cristo (igreja) que você faz parte.",
            "Falar para ele ir buscar as informações na Bíblia e deixar ele se virar sozinho."
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();
