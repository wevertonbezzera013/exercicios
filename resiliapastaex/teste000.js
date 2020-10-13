const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
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

const questions = [
  {
    question: 'Acordar e sair de casa?',
    answers: [
      { text: 'Não sair de casa e ir aprender a programar.', correct: true },
      { text: 'Sair de casa e ser corongado.', correct: false }
    ]
  },
  {
    question: 'Fazer projetos e exercícios?',
    answers: [
      { text: 'Não fazer nada e perder a entrevista de emprego.', correct: false },
      { text: 'Criar um portifólio, estudar e se dar bem na entrevista.', correct: true },
    ]
  },
  {
    question: 'O que fazer quando está entediado em casa?',
    answers: [
      { text: 'Programar e aprender coisas novas.', correct: true },
      { text: 'Jogar videogame.', correct: false },
      { text: 'Dormir só mais um pouquinho.', correct: false },
      { text: 'Maratonar série o dia inteiro.', correct: false }
    ]
  },
  {
    question: 'Ricardo quer muito aprender a programar, que curso ele deve fazer?',
    answers: [
      { text: 'Culinária na UFRJ', correct: false },
      { text: 'Resília, o melhor curso do mundo!!!', correct: true }
    ]
  }
]