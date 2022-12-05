const quizDB = [{
    question: "Q1: Which is the fastest land animal?",
    a: "Cheetah",
    b: "jaguar",
    c: "Lion",
    d: "Pronghorn",
    ans: "ans1"
},
{
    question: "Q2: How many countries are in Africa?",
    a: "53",
    b: "54",
    c: "55",
    d: "56",
    ans: "ans1"

},
{
    question: "Q3: In which continent is Toronto?",
    a: "Asia",
    b: "North America",
    c: "Africa",
    d: "America",
    ans: "ans1"

},

{
    question: "Q4: How many countries are in Africa?",
    a: "53",
    b: "54",
    c: "55",
    d: "56",
    ans: "ans1"
},
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const Submit = document.querySelector('#submit');
const Start = document.querySelector('#start');
const answers = document.querySelectorAll('.answer');
const showscore = document.querySelector('#showscore');

let questioncount = 0;
let score = 0;

const loadQuestion = () => {
const QuestionList = quizDB[questioncount];
question.innerText = QuestionList.question;
option1.innerText = QuestionList.a;
option2.innerText = QuestionList.b;
option3.innerText = QuestionList.c;
option4.innerText = QuestionList.d;
};

const musicBtn = document.getElementById('musicBtn');
const music = document.getElementById('music');
// music.play();

musicBtn.addEventListener('click', () => {
    if (musicBtn.textContent == "STOP") {
        music.pause();
        music.currentTime = 0;
        musicBtn.textContent = "PLAY";
    } else {
        musicBtn.textContent = "STOP";
        music.play();
    }
});

document.getElementById("submit").disabled = true;

function startWords() {
    let one = setTimeout(() => {
        option1.innerText = "ONE";
    }, 1000);
    let two = setTimeout(() => {
        option2.innerText = "TWO";
    }, 2000);
    let three = setTimeout(() => {
        option3.innerText = "THREE";
    }, 3000);
    let go = setTimeout(() => {
        option4.innerText = "GO!";
    }, 4000);
    setTimeout(() => {
        loadQuestion();
        document.getElementById("submit").disabled = false;
    }, 5000);
}

var timerInterval;
var timeLeft = 15;
function startGame() {
    startWords();
    document.getElementById("start").style.display = "none";
    setTimeout(() => {
        timerInterval = setInterval(updateTimer, 1000);
    }, 5000);
};

function updateTimer() {
  timeLeft--;
  document.getElementById("timer").innerHTML = Math.floor(timeLeft / 60) + ":" + (timeLeft % 60 < 10 ? "0" : "") + timeLeft % 60;

  if (timeLeft == 0) {
    document.getElementById("submit").style.display = "none";

    showscore.innerHTML = `
    <h4 class="d-flex align-self-center">YOUR SCORE: ${score}</h4>
    <button type="button" class="btn btn-danger" id="submit" onclick = "location.reload()">Play Again</button>
    `;
    showscore.classList.remove('d-none');
    clearInterval(timerInterval);
  }
};

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectall = () => {
answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

Start.addEventListener('click', () => {
    startGame();
});

Submit.addEventListener('click', () => {
    const checkedanswer = getCheckAnswer();

    if (checkedanswer == quizDB[questioncount].ans) {
        score++;
    }
    questioncount++;
    deselectall();

    if (questioncount < quizDB.length) {
        loadQuestion();
    } else {
        showscore.innerHTML = `
        <h4 class="d-flex align-self-center">YOUR SCORE: ${score}</h4>
        <button type="button" class="btn btn-danger" id="submit" onclick = "location.reload()">Play Again</button>
        `;
        showscore.classList.remove('d-none');
    }
});