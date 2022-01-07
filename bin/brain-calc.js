#!/usr/bin/env node
import engine from '../src/games/index.js';
import _ from "lodash";

const operators = ['+', '-', '*'];
const condition = 'What is the result of the expression?';

const getArr = (arr) => {
  const arrString = String(arr).split(' ');
  switch (arrString[1]) {
    case '-':
      return arrString[0] - arrString[2];
    case '*':
      return arrString[0] * arrString[2];
    case '+':
      return arrString[0] + arrString[2];
    default:
      break;
  }
  return null;
};

const getQuestionAndAnswer = () => {
  let i = 0;
  const resultArr = [];

  while (i !== 3) {
    const arr = [];
    arr.push(`${Math.floor(Math.random() * 1000)} ${operators[Math.floor(Math.random() * 3)]} ${Math.floor(Math.random() * 1000)}`);
    arr.push(getArr(arr[0]));
    resultArr[i] = arr;
    i += 1;
  }
  return resultArr;
};
engine(condition, getQuestionAndAnswer());
