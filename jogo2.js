let audio = new Audio('somJg.mp3');

function music() {
    let musicYes = document.getElementById('musicYes');
    let musicNo = document.getElementById('musicNo');
    musicYes.addEventListener('click', function() {
        musicNo.checked = false;
        play();

    });
    musicNo.addEventListener('click', function() {
        musicYes.checked = false;
        pause();

    });


}
music();

function play() {
    audio.play();
}

function pause() {
    audio.pause();
    audio.currentTime = 0;
}

function img() {
    let imgYes = document.getElementById('imgYes');
    let imgNo = document.getElementById('imgNo');

    imgYes.addEventListener('click', function() {
        imgNo.checked = false;
        document.body.style.backgroundImage = "url('./covid.jpg')";
    });
    imgNo.addEventListener('click', function() {
        imgYes.checked = false;
        document.body.style.backgroundImage = "none";
    })
}
img();



function startGame1() {
    removeTextElement();
    removeButtonsElement();
    createText("Bem-Vindo ao Kill Humanity! Você é um grande cientista e psicopata nas horas vagas. Vendo o estado atual do planeta Terra, você chega a conclusão que o maior mal da Terra é o próprio homem. Tendo em vista isto, decide criar um patógeno para aniquilar a humanidade. E livrar o planeta desta praga chama homem. Escolha seu patógeno:");
    createButton("virus", phaseOne);
    createButton("bacteria", phaseOne);
    createButton("Fungo", phaseOne);

}

function startGame() {
    createText("Bem-Vindo ao Kill Humanity! Você é um grande cientista e psicopata nas horas vagas. Vendo o estado atual do planeta Terra, você chega a conclusão que o maior mal da Terra é o próprio homem. Tendo em vista isto, decide criar um patógeno para aniquilar a humanidade. E livrar o planeta desta praga chama homem. Escolha seu patógeno:");
    createButton("virus", phaseOne);
    createButton("bacteria", phaseOne);
    createButton("Fungo", phaseOne);
    removeInitialButton();



}

function removeInitialButton() {
    let initialButton = document.getElementById("btn1");
    initialButton.remove();
}


function phaseOne() {
    removeTextElement();
    createText("Ótima escolha jovem cientista! Agora é hora de você modificar seu mais novo microorganismo. Selecione a opção de transmissão escolhida. Lembre-se de tomar cuidado com os órgãos de saúde mundiais. Eles podem acabar com seus planos.");
    removeButtonsElement();
    removeButtonsElement();
    removeButtonsElement();
    createButton("Ar", phaseTwo);
    createButton("Água", phaseTwo);
    createButton("Insetos", phaseTwoI);

}

function phaseTwoI() {
    removeTextElement();
    createText("Esse meio de transmissão é realmente um ótimo jeito de propagar seu patógeno. Agora é hora de escolher alguns sintomas:");
    removeButtonsElement();
    removeButtonsElement();
    removeButtonsElement();
    createButton("Coriza, Febre, Tosse e Espirros", phaseThreeG);
    createButton("erupções cutâneas, febre, anemia", phaseThreeIF);
    createButton("deficit neurológico e convusões ", phaseThreeIF);
}

function phaseTwo() {
    removeTextElement();
    createText("Esse meio de transmissão é realmente um ótimo jeito de propagar seu patógeno. Agora é hora de escolher alguns sintomas:");
    removeButtonsElement();
    removeButtonsElement();
    removeButtonsElement();
    createButton("Coriza, Febre, Tosse e Espirros", phaseThreeG);
    createButton("erupções cutâneas, febre, anemia", phaseThreeF);
    createButton("deficit neurológico e convusões ", phaseThreeN);
}

function phaseThreeIF() {
    removeTextElement();
    createText("Jovem psicopata, até agora seu precioso está ganhando vida e características marcantes. Chegou o momento mais esperado desde a sua grande ideia. Escolha a cidade em que deseja dispesar seu patógeno.")
    removeButtonsElement();
    removeButtonsElement();
    removeButtonsElement();
    createButton("Pequim", phaseFourIFC);
    createButton("São Paulo", phaseFourIFC);
    createButton("New York", phaseFourIFCS);
    createButton("Paris", phaseFourIFCS);
}

function phaseFourIFCS() {
    removeTextElement();
    createText("Caro psicopatinha, devido ao meio de transmissão e a cidade escolhidos, seu patógeno não teve uma grande dispersão. Escolha o que deseja melhorar:");
    removeButtonsElement();
    removeButtonsElement();
    removeButtonsElement();
    removeButtonsElement();
    createButton("Transmissão", phaseSixIFCST);
    createButton("Sintomas", phaseSixIFCSS);
}

function phaseFourIFC() {
    removeTextElement();
    createText("Parabéns cientista maluco. Você escolheu umas das cidades mais populosas do mundo e seu patógeno foi liberado. Algumas agências sanitárias alertaram sobre um surto de uma doença ainda não indetificada atrelada aos insetos. Ela começa a matar uma quantidade absurda de pessoas e causa pânico na cidade. Estão pesquisando sobre o seu patógeno. Deseja diminuir a mortalidade dele para despistar as agências de saúde?");
    removeButtonsElement();
    removeButtonsElement();
    removeButtonsElement();
    removeButtonsElement();
    createButton("Sim", phaseFiveIFCS);
    createButton("Não", phaseFiveIFCN);
}

function phaseFiveIFCS() {
    removeTextElement();
    createText("Você conseguiu despistar as agências por enquanto. Mas elas continuam noticiando sobre o novo surto do seu patógeno. Escolha agora o que deseja melhorar:");
    removeButtonsElement();
    removeButtonsElement();
    createButton("Transmissão", phaseSixIFCST);
    createButton("Sintomas", phaseSixIFCSS);
}

function phaseSixIFCSS() {
    removeTextElement();
    createText("Você melhorou os sintomas e por isso eles se tornaram mais graves e chegaram a matar 1/4 da humanidade. Porém com o grande pânico os governos decretaram lockdown e as agências internacionais de saúde logo descobriram seu patógeno e desenvolveram a cura. Deseja jogar novamente?");
    removeButtonsElement();
    removeButtonsElement();
    createButton("Novo Jogo", startGame1);
}

function phaseSixIFCST() {
    removeTextElement();
    createText("Parabéns jacaré! Você conseguiu contaminar 1/2 da humanidade e matar somente 1/6. Porém as agências sanitárias descobriram seu patógeno e criaram a cura. Deseja jogar novamente?");
    removeButtonsElement();
    removeButtonsElement();
    removeButtonsElement();
    createButton("Novo Jogo", startGame1);
}

function phaseFiveIFCN() {
    removeTextElement();
    createText("Parece que seu plano foi um fracasso total. A doença continuou matando as pessoas e logo as agências de saúde ao redor do mundo descobriram seu patógeno e começaram a desenvolver a cura. Os governos declararam estado de emergência e o planeta ficou em lockdown, diminuindo assim transmissão do seu patógeno.");
    removeButtonsElement();
    removeButtonsElement();
    createButton("Continuar", phaseSixIFCN);
}

function phaseSixIFCN() {
    removeTextElement();
    createText("Depois de alguns meses a cura foi encontrada. Você conseguiu matar somente 1/6 da humanidade. Deseja jogar novamente?");
    removeButtonsElement();
    createButton("Novo Jogo", startGame1);
}

function phaseThreeG() {
    removeTextElement();
    createText("Jovem psicopata, até agora seu precioso está ganhando vida e características marcantes. Chegou o momento mais esperado desde a sua grande ideia. Escolha a cidade em que deseja dispesar seu patógeno.")
    removeButtonsElement();
    removeButtonsElement();
    removeButtonsElement();
    createButton("Pequim", phaseFourGC);
    createButton("São Paulo", phaseFourGC);
    createButton("New York", phaseFourGC);
    createButton("Paris", phaseFourGC);
}

function phaseFourGC() {
    removeTextElement();
    createText("Parabéns cientista maluco. Você escolheu umas das cidades mais populosas do mundo e seu patógeno foi liberado. O patógeno vai se espalha por grande parte do planeta e somente alguns países noticiaram um surto de gripe. Escolha o que deseja melhorar:");
    removeButtonsElement();
    removeButtonsElement();
    removeButtonsElement();
    removeButtonsElement();
    createButton("Sintomas", phaseFiveGCS);
    createButton("Mutação", phaseFiveGCM);
}

function phaseFiveGCM() {
    removeTextElement();
    createText("PARAAAABÉÉÉÉNSSS JACARÉ!!!! Seu patógeno mutou demais e você conseguiu contaminar e matar toda a humanidade. Mas isso inclui você também. Seu fantasma deseja jogar novamente?");
    removeButtonsElement();
    removeButtonsElement();
    createButton("Novo Jogo", startGame1);
}

function phaseFiveGCS() {
    removeTextElement();
    createText("Você melhorou os sintomas e por isso as notícias sobre o seu patógeno aumentaram e logo a cura começou a se desenvolvida. Com o grande pânico os governos decretaram lockdown. Mas você já tinha contaminado o planeta inteiro. Nem as pessoas da Groenlândia ficaram imunes.");
    removeButtonsElement();
    removeButtonsElement();
    createButton("continuar", phaseFiveGCSC);
}

function phaseFiveGCSC() {
    removeTextElement();
    createText("Seu patógeno era muito contagioso. Porém com uma taxa de mortalidade baixa. Logo você não conseguiu acabar com a humanidade dessa vez. Deseja jogar novamente?");
    removeButtonsElement();
    createButton("Novo Jogo", startGame1);
}

function phaseThreeF() {
    removeTextElement();
    createText("Jovem psicopata, até agora seu precioso está ganhando vida e características marcantes. Chegou o momento mais esperado desde a sua grande ideia. Escolha a cidade em que deseja dispesar seu patógeno.")
    removeButtonsElement();
    removeButtonsElement();
    removeButtonsElement();
    createButton("Pequim", phaseFourFS);
    createButton("São Paulo", phaseFourFS);
    createButton("New York", phaseFourFS);
    createButton("Paris", phaseFourFS);
}

function phaseFourFS() {
    removeTextElement();
    createText("Ótima escolha pequeno gafanhoto!. Uma das cidades mais populosas do mundo. Algumas agências de saúde locais noticiaram um novo surto de uma doença misteriosa. Escolha o que deseja melhorar:");
    removeButtonsElement();
    removeButtonsElement();
    removeButtonsElement();
    removeButtonsElement();
    createButton("Transmissão", phaseSixIFCST);
    createButton("Sintomas", phaseFiveFSS);
    createButton("Mutação", phaseFiveFSM);
}

function phaseFiveFSS() {
    removeTextElement();
    createText("Você melhorou os sintomas e por isso eles se tornaram mais graves e chegaram a matar 1/4 da humanidade. Porém com o grande pânico os governos decretaram lockdown e as agências internacionais de saúde logo descobriram seu patógeno e desenvolveram a cura. Deseja jogar novamente?");
    removeButtonsElement();
    removeButtonsElement();
    removeButtonsElement();
    createButton("Novo Jogo", startGame1);
}

function phaseFiveFSM() {
    removeTextElement();
    createText("Jacaré!!! Seu patógeno se tornou incontrolável e muta a cada minuto. Surgindo novos meios de transmissão e sintomas. Todas as agências ao redor do mundo entraram em estado de alerta máximo. ");
    removeButtonsElement();
    removeButtonsElement();
    removeButtonsElement();
    createButton("Continuar", phaseFiveFSMF);
}

function phaseFiveFSMF() {
    removeTextElement();
    createText("Um médico juntamente com um cientista na China isolaram o genoma do seu patógeno e compartilharam com as agências mundiais. A Rússia saiu na frente e desenvolveu a cura em alguns meses. Parabéns você conseguiu matar 2/3 da humanidade! Deseja jogar novamente?");
    removeButtonsElement();
    createButton("Novo Jogo", startGame1);
}

function phaseThreeN() {
    removeTextElement();
    createText("Jovem psicopata, até agora seu precioso está ganhando vida e características marcantes. Chegou o momento mais esperado desde a sua grande ideia. Escolha a cidade em que deseja dispesar seu patógeno.")
    removeButtonsElement();
    removeButtonsElement();
    removeButtonsElement();
    createButton("Pequim", phaseFourIFC);
    createButton("São Paulo", phaseFourIFC);
    createButton("New York", phaseFourIFC);
    createButton("Paris", phaseFourIFC);
}


function createText(textElement) {
    let divText = document.getElementById("text");
    let p = document.createElement('p');
    p.setAttribute("class", "texts");
    p.setAttribute("id", "text1");
    let text = document.createTextNode(textElement);
    p.appendChild(text);
    divText.appendChild(p);

}

function removeButtonsElement() {
    let elem = document.getElementById('btns1');
    elem.parentNode.removeChild(elem);
}

function removeTextElement() {
    let elem = document.getElementById('text1');
    elem.parentNode.removeChild(elem);
}

function createButton(textContentButton, nextFun) {
    let divButtonGrid = document.getElementById("buttonsGrid");
    let button = document.createElement('button');
    let textButton = document.createTextNode(textContentButton);
    button.appendChild(textButton);
    button.setAttribute("class", "btns");
    button.setAttribute("id", "btns1");
    button.addEventListener("click", nextFun);
    divButtonGrid.appendChild(button);
}