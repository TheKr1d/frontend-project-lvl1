import readlineSync from 'readline-sync'
import { hello } from './cli.js'

export const engine = (questionsAnswers, gameRules) => {
  const userName = hello()

  console.log(gameRules)

  let isWinner = true

  for (const [question, correctAnswer] of questionsAnswers) {
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (correctAnswer === userAnswer) {
      console.log('Correct!')
    }
    else {
      isWinner = false
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      break
    }
  }

  if (isWinner) {
    console.log(`Congratulations, ${userName}!`)
  }
  else {
    console.log(`Let's try again, ${userName}!`)
  }
}
