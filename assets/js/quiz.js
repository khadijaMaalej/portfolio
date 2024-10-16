const questions = [
    {


        question: "What is the capital of the United States?",
        answers: {
            a: "Washington D.C.",
            b: "New York City",
            c: "Los Angeles"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the capital of Canada?",
        answers: {
            a: "Toronto",
            b: "Ottawa",
            c: "Vancouver"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of France?",
        answers: {
            a: "Paris",
            b: "Marseille",
            c: "Lyon"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the capital of Germany?",
        answers: {
            a: "Berlin",
            b: "Munich",
            c: "Hamburg"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the capital of Italy?",
        answers: {
            a: "Venice",
            b: "Milan",
            c: "Rome"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the capital of Spain?",
        answers: {
            a: "Madrid",
            b: "Barcelona",
            c: "Valencia"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the capital of China?",
        answers: {
            a: "Hong kong",
            b: "Shanghai",
            c: "Beijing"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the capital of Russia?",
        answers: {
            a: "St. Petersburg",
            b: "Moscow",
            c: "Kazan"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Brazil?",
        answers: {
            a: "São Paulo",
            b: "Rio de Janeiro",
            c: "Brasília"
        },
        correctAnswer: "c"
    },



    // more questions
];

// Quiz container
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('result');
const submitButton = document.getElementById('submit-button');

// Display quiz
displayQuiz();

submitButton.onclick = showResults;

function displayQuiz() {
    // Output questions and answers
    let output = [];
    questions.forEach((currentQuestion, questionNumber) => {
        // Answers
        let answers = [];
        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>`
            );
        }

        // Add question and answers to output
        output.push(
            `<div class="question" style="font-weight: bold;"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
    });

    // Combine output and add to quiz container
    quizContainer.innerHTML = output.join('');
}

function showResults() {
    // gather answer containers from our quiz
    let answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    questions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        let userAnswer = (answerContainers[questionNumber].querySelector(`input[name=question${questionNumber}]:checked`) || {}).value;

        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
            // add to the number of correct answers
            numCorrect++;

            // color the answers green
            answerContainers[questionNumber].style.color = 'green';
        } else {
            // color the answers red
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}
