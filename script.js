const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que ganhou seu telefone depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual a primeira coisa que vocễ faz?",
            alternativas: [
            {   
                texto: "Exploro e conheço mais sobre",
                afirmacao: "No início ficou apreciada com tudo oque o chat faz e suas funcionalidades. "
            },
            {
                texto: "Evito me aprofundar",
                afirmacao: "Muito provavelmente não gosta dessa tecnologia toda ou se assusta com tudo que o chat oferece, essa tecnologia toda."
            }
        ]
    },
    {
        enunciado: "Qual atitude você toma quando a professora pede um trabalho sobre o uso de inteligência artificial em sala de aula? ",
        alternativas: [
            {
                texto: "Utilizo uma ferramenta na internet que me ajuda a encontrar informações relevantes e explico de forma simples.",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Você acredita que a inteligência artificial pode ser considerada inteligente mesmo sem emoções?",
        alternativas: [
            {
                texto: "Sim, a inteligência não depende de sentimentos.",
                afirmacao: "Desde o início, você enxergava a IA como uma ferramenta lógica, eficiente e promissora."
            },
            {
                texto: "Não, a inteligência precisa de empatia e consciência.",
                afirmacao: "Você sempre valorizou a dimenssão humana na inteligência buscando equilíbrio entre a razão e a emoção."
            }
        ]
    },
    {
        enunciado: "Você se preocupa com o impacto da IA no futuro do trabalho?",
        alternativas: [
            {
                texto: "Sim, ela pode substituir empregos e aprofundar desigualdades.",
                afirmacao: "Você se enganou debates sobre a justiça tecnológica e passou buscar forma de adaptação e inclusão."
            },
            {
                texto: "Não, ela vai criar novas profissões e melhorar a produtividade.",
                afirmacao: "Você viu a IA como um trampolim para inovação, adaptando-se rapidamente a novas!"
            }
        ]
    },
    {
        enunciado: "Você acha que a IA pode ultrapassar a inteligência humana em algum momento? ",
        alternativas: [
            {
                texto: "Sim, a evolução tecnológica pode superar nossa capacidade.",
                afirmacao: "Você se preparou para um futuro que os humanos e máquinas precisariam coexistir com responsabilidade."
            },
            {
                texto: "Não, a inteligência humana única e incomparavél.",
                afirmacao: "Você continuou acreditando no poder criativo e emocional dos seres humanos, mesmo com o avanço das máquinas. "
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
    caixaPerguntas.textContent = "Em 2055...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
