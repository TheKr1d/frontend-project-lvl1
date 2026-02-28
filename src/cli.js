import readlineSync from 'readline-sync'

export const hello = () => {
  console.log('Welcome to the Brain Games!')

  const name = readlineSync.question('May I have your name?: ')
  const helloString = `Hello, ${name}!`

  console.log(helloString)

  return name
}
