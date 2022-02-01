const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

let myScore = 0

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  console.log(shuffledQuestions)
  shuffledQuestions = questions.sort(() => Math.random() -0.5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
  resetScore()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  if (correct) {
    myScore++
    setScore()
  }
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

function setScore() {
  let scoreElement = document.getElementById('point')
  scoreElement.innerHTML = myScore
}

function resetScore() {
  myScore = 0;
  setScore();
}

const questions = [
  {
    question: '√4? (√ = alt + 251 din partea dreaptă)',
    answers: [
      { text: '|2|', correct: true },
      { text: '2', correct: false }
    ]
  },
  {
    question: '2 === "2"',
    answers: [
      { text: 'Adevărat', correct: false },
      { text: 'Fals', correct: true }
    ]
  },
  {
    question: 'CASA == BERE; BERE != CASA. Cu ce este egal BERE?',
    answers: [
      { text: 'AISI', correct: false },
      { text: 'DIRI', correct: false },
      { text: 'AIQI', correct: true },
      { text: 'BARA', correct: false}
    ]
  },
  {
    question: 'Alo!? Dacă 3 * 3 + 1 * 2 + 3 * 5 + 4 * 7 = FALS; 3 * 2 + 3 * 6 + 3 * 7 + 2 * 3 + 3 * 2 + 1 * 8 = ...?',
    answers: [
      { text: 'CORECT', correct: true },
      { text: 'ADEVĂRAT', correct: false },
      { text: 'GREȘIT', correct: false },
      { text: 'ADRIEN', correct: false }
    ]
  },
  {
    question: 'Dacă pe talerul unui cântar se pun 4 kilograme de mere cu 3 lei kilogramul, câte kilograme de mere cu 2 lei kilogramul trebuie puse pe celălalt taler pentru a echilibra balanţa?',
    answers: [
      { text: '3 kg', correct: false },
      { text: '4 kg', correct: true },
      { text: '5 kg', correct: false },
      { text: '4.5 kg', correct: false }
    ]
  },
  {
    question: 'Un melc urcă în timpul zilei pe un copac 3 metri și alunecă noaptea 2 metri. După câte zile va ajunge în vârful copacului care are înălțimea de 10 metri?',
    answers: [
      { text: '8 zile', correct: true },
      { text: '9 zile', correct: false },
      { text: '10 zile', correct: false },
      { text: '11 zile', correct: false }
    ]
  },
  {
    question: 'Într-un coș sunt 3 mere verzi și 4 roșii. Câte mere sunt în coș?',
    answers: [
      { text: '7', correct: false },
      { text: '4', correct: false },
      { text: '0', correct: false },
      { text: '3', correct: true }
    ]
  },
  {
    question: 'Ce număr urmează în seria 172, 84, 40, 18, …',
    answers: [
      { text: '9', correct: false },
      { text: '8', correct: false },
      { text: '7', correct: true },
      { text: '6', correct: false }
    ]
  },
  {
    question: '2 + 2 : 2?',
    answers: [
      { text: '1', correct: false },
      { text: '3', correct: true }
    ]
  },
  {
    question: 'Dacă prietenul tău sosește mereu mai târziu decât tine, înseamnă că tu ajungi mereu mai devreme?',
    answers: [
      { text: 'Da', correct: false },
      { text: 'Nu', correct: true },
      { text: 'Uneori', correct: false },
      { text: 'Categoric', correct: false }
    ]
  },
]
