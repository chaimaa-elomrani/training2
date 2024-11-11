const startbtn = document.getElementById('startbtn');
const main = document.getElementById('main');
const a = document.getElementById('a');
let compteurr = 0; 
let questionIndex = 0; 



const questions = [
    {
        questionText: "deyer mi?",
        options: [
            { text: "belki", answer: "incorrect" },
            { text: "deymaz", answer: "correct" },
            { text: "deyer", answer: "incorrect" }
        ]   
    },
    {
        questionText: "Yeni sual?",
        options: [
            { text: "Cevap 1", answer: "incorrect" },
            { text: "Cevap 2", answer: "correct" },
            { text: "Cevap 3", answer: "incorrect" }
        ]
    },
    {
        questionText: "Salam ?",
        options: [
            { text: "ba3d mni", answer: "incorrect" },
            { text: "cava", answer: "correct" },
            { text: "vue", answer: "incorrect" }
        ]
    },
    {
        questionText: "ahahahah ?",
        options: [
            { text: "ba3d mni", answer: "incorrect" },
            { text: "cava", answer: "correct" },
            { text: "vue", answer: "incorrect" }
        ]
    },
    {
        questionText: "ahahahah ?",
        options: [
            { text: "ba3d mni", answer: "incorrect" },
            { text: "cava", answer: "correct" },
            { text: "vue", answer: "incorrect" }
        ]
    }
];




function loadQuestion(questionIndex) {
    const question = questions[questionIndex];
    a.innerHTML = `
    <div class="container">
    <h1 class="sidequestion">Question:</h1>
    <div class="content">
        <p class="question">${question.questionText}</p>
        <div class="buttons"> 
            <button onclick="results(this, '${question.options[0].answer}')">${question.options[0].text}</button>
            <button onclick="results(this, '${question.options[1].answer}')">${question.options[1].text}</button>
            <button onclick="results(this, '${question.options[2].answer}')">${question.options[2].text}</button>
        </div>
    </div>
    <p id="score">Score: <span id="compteur">${compteurr}</span></p>
     </div>
    `;
   
}

startbtn.addEventListener('click', function(e) {
    e.preventDefault();
    main.style.display = 'none';
    a.style.display = 'block';
    loadQuestion(questionIndex);
});

function results(button, answer) {
    const compteur = document.getElementById('compteur');
    if (answer === 'correct') {
        button.classList.add('correct');
        compteurr++; 
    } else {
        button.classList.add('incorrect');
        if (compteurr > 0){
            compteurr--;
        }
    }

    compteur.textContent = compteurr;

    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(btn => btn.disabled = true);

    questionIndex++;
    if (questionIndex < questions.length){
        setTimeout(() => {
            loadQuestion(questionIndex);
        }, 1000); 
    } else {
       
        setTimeout(() => {
            a.innerHTML = `<div class="ending">
                           <h1 id="endingmssg">Quiz Complete!</h1>
                           <p totalscore>Your final score is: ${compteurr}</p>
                            </div>
                           `;
                           
        }, 1000);
    }
}


