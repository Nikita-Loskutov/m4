let classi = document.getElementById("result");
let main = document.getElementById("main");
let starti = document.getElementById("start");
let result = document.getElementById("result");
document.getElementById('start').addEventListener('click', function(){
    classi.style.display = 'flex';
    main.style.display = 'block';
    starti.style.display = 'none';
    result.style.display = 'none'
    genquestion()
}
)


let questions = [
    {
        questions: '5+2=?',
        correct: 7,
        answer: [4, 7, 6, 8],
    },
    {
        questions: '12+15=?',
        correct: 27,
        answer: [24, 27, 36, 58],
    },
    {
        questions: 'Сколько месяцев в году?',
        correct: 12,
        answer: [14, 11, 10, 12],
    },
    {
        questions: 'Сколько часов в году?',
        correct: 8760,
        answer: [9160, 8760, 6540, 8000],
    },
    {
        questions: 'Сколько дней в  весокосном году',
        correct: 366,
        answer: [360, 366, 365, 361],
    }
]

let currentquestions = 0
let count = 0

function genquestion(){
    let quest = questions[currentquestions].questions;
    main.innerHTML = `<h1 class="question">${quest}</h1>`;
    let answ = questions[currentquestions].answer;
    let btns = '';
    for (let i of answ) {
        btns += `<button onclick="checkanswer(${i})">${i}</button>`;
    }
    main.innerHTML += `<nav>${btns}</nav>`;
}

function checkanswer(answ){
    let correct = questions[currentquestions].correct;
    currentquestions += 1;
    if (answ == correct){
        count += 1
    };
    
    if (questions.length > currentquestions){
        genquestion()
    }else {
        resultat()
    };
}

function resultat(){
    classi.innerHTML = `Верно: ${count}/${currentquestions}`;
    classi.style.display = 'flex';
    starti.style.display = 'flex';
    main.style.display = "none";
    count = 0;
    currentquestions = 0
};
