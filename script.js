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
    question: '???4? (??? = alt + 251 din partea dreapt??)',
    answers: [
      { text: '|2|', correct: true },
      { text: '2', correct: false }
    ]
  },
  {
    question: '2 === "2"',
    answers: [
      { text: 'Adev??rat', correct: false },
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
    question: 'Alo!? Dac?? 3 * 3 + 1 * 2 + 3 * 5 + 4 * 7 = FALS; 3 * 2 + 3 * 6 + 3 * 7 + 2 * 3 + 3 * 2 + 1 * 8 = ...?',
    answers: [
      { text: 'CORECT', correct: true },
      { text: 'ADEV??RAT', correct: false },
      { text: 'GRE??IT', correct: false },
      { text: 'ADRIEN', correct: false }
    ]
  },
  {
    question: 'Dac?? pe talerul unui c??ntar se pun 4 kilograme de mere cu 3 lei kilogramul, c??te kilograme de mere cu 2 lei kilogramul trebuie puse pe cel??lalt taler pentru a echilibra balan??a?',
    answers: [
      { text: '3 kg', correct: false },
      { text: '4 kg', correct: true },
      { text: '5 kg', correct: false },
      { text: '4.5 kg', correct: false }
    ]
  },
  {
    question: 'Un melc urc?? ??n timpul zilei pe un copac 3 metri ??i alunec?? noaptea 2 metri. Dup?? c??te zile va ajunge ??n v??rful copacului care are ??n??l??imea de 10 metri?',
    answers: [
      { text: '8 zile', correct: true },
      { text: '9 zile', correct: false },
      { text: '10 zile', correct: false },
      { text: '11 zile', correct: false }
    ]
  },
  {
    question: '??ntr-un co?? sunt 3 mere verzi ??i 4 ro??ii. C??te mere sunt ??n co???',
    answers: [
      { text: '7', correct: false },
      { text: '4', correct: false },
      { text: '0', correct: false },
      { text: '3', correct: true }
    ]
  },
  {
    question: 'Ce num??r urmeaz?? ??n seria 172, 84, 40, 18, ???',
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
    question: 'Dac?? prietenul t??u sose??te mereu mai t??rziu dec??t tine, ??nseamn?? c?? tu ajungi mereu mai devreme?',
    answers: [
      { text: 'Da', correct: false },
      { text: 'Nu', correct: true },
      { text: 'Uneori', correct: false },
      { text: 'Categoric', correct: false }
    ]
  },
]
