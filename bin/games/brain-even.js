#!/usr/bin/env node
import _ from 'lodash';
import { engine } from '../../src/index.js';
import { rounds } from '../config/game-settings.js';

const isEvenStr = (num) => num % 2 === 0 ? 'yes' : 'no';

const run = () => {
    const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".'
    const questionsAnswers = []

    let i = 0

    while (i < rounds) {
        const randomNum = _.random(1, 99)
        const correctAnswer = isEvenStr(randomNum)

        questionsAnswers.push([randomNum, correctAnswer])
        i += 1
    }

    engine(questionsAnswers, gameRules)
};

run()