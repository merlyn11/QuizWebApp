const optionContainer = document.querySelector('.optionBox')
const questionNumber = document.querySelector('#qnumber')
const questionNumberTotal = document.querySelector('#qnumberTotal')
const question = document.querySelector('.que_text')
const options = document.querySelectorAll('.option')
const next = document.querySelector('#next')
const homeBox = document.querySelector('#choices-container')
const quizBox = document.querySelector('#quiz-main-container')
const resultBox = document.querySelector('#showResult_Container')
const mainMenu = document.querySelector('#main-menu')
const progressBar = document.querySelector('.progressBarFull')
const timerBox = document.querySelector('.timerBox span')
const scoreBox = document.querySelector('.scoreBox span')

let questionCounter = 0
let currentQuestion
let availableQuestions = []
let availableOptions = []
let correctAnswers = 0
let inCorrect = 0
let totalScore = 0
let timeValue = 300
let counter

/*GRADE 7 CONTAINER*/
const grade7Container = document.querySelector('#grade7-8_container')
grade7Container.addEventListener('click', () => {
  scoreBox.textContent = 0
  startQuiz()
  startTimer(timeValue)
  setAvailableQuestions(grade7)
  getNewQuestion(grade7)
})

// push the questions into availableQuestions
function setAvailableQuestions(x) {
  const totalQuestion = x.length
  for (let i = 0; i < totalQuestion; i++) {
    availableQuestions.push(x[i])
  }
}

// SET QUESTION NUMBER AND OPTIONS
function getNewQuestion(x) {
  // set question number
  questionNumber.innerHTML = `${questionCounter + 1}`
  questionNumberTotal.innerHTML = `${x.length}`
  progressBar.style.width = `${(questionCounter / grade10.length) * 100}%`

  // set question text
  // get random question
  const questionIndex =
    availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
  currentQuestion = questionIndex
  question.innerHTML = currentQuestion.question
  // get position of questionIndex
  const index1 = availableQuestions.indexOf(questionIndex)
  //remove the questionIndex from the availableQuestion Array, so that the question does not repeat
  availableQuestions.splice(index1, 1)

  // set options
  // get the length of options
  const optionLen = currentQuestion.options.length
  //push options into availableOptions Array
  for (let i = 0; i < optionLen; i++) {
    availableOptions.push(i)
  }
  optionContainer.innerHTML = ''
  let animationDelay = 0.2
  // create options in innerHTML
  for (let i = 0; i < optionLen; i++) {
    //random option
    const optionIndex =
      availableOptions[Math.floor(Math.random() * availableOptions.length)]
    // get the position of optionIndex from the availableOptions
    const index2 = availableOptions.indexOf(optionIndex)
    // remove the optionIndex from the availableOptions, so that the option does not repeat
    availableOptions.splice(index2, 1)
    let option = document.createElement('div')
    option.innerHTML = currentQuestion.options[optionIndex]
    option.id = optionIndex
    option.style.animationDelay = animationDelay + 's'
    animationDelay = animationDelay + 0.2
    option.className = 'option'
    optionContainer.append(option)
    option.setAttribute('onclick', 'getResult(this)')
  }
  questionCounter++
}
// get the result of current attemp question
function getResult(e) {
  const id = parseInt(e.id)
  // get the answer by comparing the id of click and answer number
  if (id === currentQuestion.answer) {
    // add background color if correct
    e.classList.add('correct')
    correctAnswers++
    scoreBox.textContent = correctAnswers
  } else {
    // add background color if wrong
    e.classList.add('wrong')
    inCorrect++

    // UNCOMMENT IF NEEDED THIS IS TO PREVENT CHEATING AND ONLY MEMORIZING THE ANSWER
    // if the answer is incorrect show the correct answer <---------------------------------------------- IF YOU WANT TO REVEAL THE ANSWER AFTER CLICKING WRONG
     const optionLen = optionContainer.children.length

     console.log(optionContainer.children.id)
    for (let i = 0; i < optionLen; i++) {
      if (parseInt(optionContainer.children[i].id) === currentQuestion.answer) {
        optionContainer.children[i].classList.add('correct')
       }
     }
  }
  next.style.visibility = 'visible'
  next.style.transition = 'none'
  unclickableOptions()
}

// make all the options unclickable one the user select one of the options
function unclickableOptions() {
  const optionLen = optionContainer.children.length
  for (let i = 0; i < optionLen; i++) {
    optionContainer.children[i].classList.add('already-answered')
  }
}

// FOR THE NEXT QUESTION
next.addEventListener('click', () => {
  let q = grade7.length
  let g = grade10
  next.style.visibility = 'hidden'
  if (questionCounter === q) {
    console.log('quiz over')
    quizOver()
    clearInterval(counter)
  } else {
    getNewQuestion(g)
  }
})

function quizOver() {
  // hide quizContainer
  quizBox.classList.add('hide')
  //show result Box
  resultBox.classList.remove('hide')
  //clear time
  clearInterval(counter)
  quizResult()
}

// QUIZ RESULT
function quizResult() {
  const percentage = (correctAnswers / grade7.length) * 100
  document.querySelector('.correctAns').innerHTML = correctAnswers
  document.querySelector('.incorrect').innerHTML = inCorrect
  document.querySelector(
    '.totalScore'
  ).innerHTML = `${correctAnswers} / ${grade7.length}`
  document.querySelector('.total').innerHTML = `${percentage.toFixed()}%`
}

// FOR MAIN MENU
mainMenu.addEventListener('click', goToHome)
function goToHome() {
  //hide result Box
  resultBox.classList.add('hide')
  //show homeBox
  homeBox.classList.remove('hide')
  resetQuiz()
}

//STARTING POINT///////////////////////////////////////////////////////////////////////////////////////////////
function startQuiz() {
  //hide home box
  homeBox.classList.add('hide')
  //show quiz Box
  quizBox.classList.remove('hide')
}

function resetQuiz() {
  questionCounter = 0
  correctAnswers = 0
  inCorrect = 0
  totalScore = 0
}

// OPTIONAL FOR TRY AGAIN BUTTON
function tryAgain() {
  // hide the resultBox
  resultBox.add('hide')

  //show the quizBox
  quizBox.classList.remove('hide')
  resetQuiz()
  startQuiz()
}

///TIMER///////////////////////////////////////////////////////////////////////////
function startTimer(time) {
  counter = setInterval(timer, 1000)
  function timer() {
    timerBox.textContent = time
    time--

    if (time < 0) {
      alert('TIMES UP!')
      clearInterval(counter)
      quizOver()
      timerBox.textContent = ''
    }
  }
}

/*GRADE 10 CONTAINER*/
const grade10Container = document.querySelector('#grade9-10_container')
grade10Container.addEventListener('click', function () {
  scoreBox.textContent = 0
  startQuiz()
  startTimer(timeValue)
  setAvailableQuestions(grade10)
  getNewQuestion(grade10)
})
