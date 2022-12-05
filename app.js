// array of an object for all questions
// I will add more questions here by following the template.

const quizDB = [{
    question: "Q1: Captial Canada",
    a: "",
    b: "",
    c: "",
    d: "",
    //ans give the right answer of the question for example if the
    ans: " ans1"
},
{
    question: "Q2: Capital England",
    a: "",
    b: "",
    c: "",
    d: "",
    ans: " ans2"

},
{
    question: "Q3: Capital France",
    a: "",
    b: "",
    c: "",
    d: "",
    ans: " ans2"

},

{
    question: "Q4: Captial US",
    a: "",
    b: "",
    c: "",
    d: "",
 
    ans: " ans1"
},
{
    question: "Q5: Capital Chile",
    a: "",
    b: "",
    c: "",
    d: "",
    ans: " ans2"

},
{
    question: "Q6: Capital Brazil",
    a: "",
    b: "",
    c: "",
    d: "",
    ans: " ans2"

},

{
    question: "Q7: Captial Spain",
    a: "",
    b: "",
    c: "",
    d: "",
    //ans give the right answer of the question for example if the
    ans: " ans1"
},
{
    question: "Q8: Turkey",
    a: "",
    b: "",
    c: "",
    d: "",
    ans: " ans2"

},
{
    question: "Q9: Capital China",
    a: "",
    b: "",
    c: "",
    d: "",
    ans: " ans2"

},
{
    question: "Q10: Capital Italy",
    a: "",
    b: "",
    c: "",
    d: "",
    ans: " ans2"

},

];

//get all references from html file 
//get question from quizDB

const question = document.querySelector('.question');
//get ALL FOUR OPTIONS from quizDB


const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
// get the submit button that submit the answer when click on submit button
const Submit = document.querySelector('#submit');
//get all answers
const answers = document.querySelectorAll('.answer');
// get results. this div will show the overall results
const showscore = document.querySelector('#showscore');


//intialize the questioncount variavble
let questioncount = 0;

//define score variable  
let score = 0;
//define a load function that loads a question on html page
const loadQuestion = () => {
//load a question 

};


// call a load function for load questions
loadQuestion();
// TODO Write function

//define a function that gets the the user input(checked answer) and return the checked answer.



//define a function that deselect all options after answering the user.
const deselectall = () => {
answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

//apply an eventlistener on submit button(when user click on submit button the answer will be submit and new question will come on screen)



Submit.addEventListener('click', () => {
//function to check the right answer by compering it

//call the deselect function


//if else statement for comperison and show results on the screen

});