
const chalk = require('chalk');
const readlineSync = require("readline-sync")

let questionBank = [
  {
    question: 'What is my last name?',
    answer: 'Kulkarni'
  },
  {
    question: 'How old am I?',
    answer: '21'
  },
  {
    question: 'Where do I live?',
    answer: 'Texas'
  },
  {
    question: 'Which city was my college in?',
    answer: 'San Francisco'
  },
  {
    question: 'What is my favorite TV series',
    answer: 'Silicon Valley'
  }
]

highScorers = [
  {
  name: "Abhishek",
  score: '4'
  }
]

correctCount = 0

function play_game(){

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

}

play_game()

console.log(chalk.cyan("You got", correctCount, "/5 correct"))