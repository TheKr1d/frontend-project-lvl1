#!/usr/bin/env node
import { hello } from "../src/cli.js";
import _ from 'lodash';
import readlineSync from 'readline-sync';

const isEvenStr = (num) => num % 2 === 0 ? 'yes' : 'no';

const run = () => {
    const userName = hello()    
    const rounds = 3

    let i = 0
    let isWinner = true

    console.log('Answer "yes" if the number is even, otherwise answer "no".')

    while (i < rounds) {
        const randomNum = _.random(1, 99)
        const strQuestion = `Question: ${randomNum}`
        const correctAnswer = isEvenStr(randomNum)

        console.log(strQuestion)
        const userAnswer = readlineSync.question('Your answer: ')

        if (correctAnswer === userAnswer) {
            console.log('Correct!')
            i += 1
        } else {
            isWinner = false
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
            break
        }
    }

    if (isWinner) {
        console.log(`Congratulations, ${userName}!`)
    } else {
        console.log(`Let's try again, ${userName}!`)
    }
};

run()