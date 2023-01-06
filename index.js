
const chalk = require('chalk');
const readlineSync = require("readline-sync")

let questionBank = [
  {
    question: 'What is my name?',
    answer: 'Abhishek'
  },
  {
    question: 'How old am I?',
    answer: '22'
  },
  {
    question: 'My favorite IPL team?',
    answer: 'Mumbai Indians'
  },
  {
    question: 'My favorite color?',
    answer: 'White'
  },
  {
    question: 'What is my favorite TV series',
    answer: 'Silicon Valley'
  }
]


function play_game(){
  let correctCount = 0

  for (i=0; i<questionBank.length; i++){
  let userAnswer = readlineSync.question(questionBank[i].question +  " \n")
  if (userAnswer.toUpperCase().replace(/\s+/g, '') == questionBank[i].answer.toUpperCase().replace(/\s+/g, '')) {
    correctCount += 1
    console.log(chalk.green("correct"))
  }
  else{
      console.log(chalk.red("wrong"))
  }
  }
  console.log(chalk.cyan("You got", correctCount, "/5 correct"))
}

play_game()
