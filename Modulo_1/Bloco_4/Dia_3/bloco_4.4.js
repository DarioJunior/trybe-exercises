function palindromo(string) {
  //Transformar palavra em array e tratar para minusculas
  let isPalindrome;
  let word = string.toLowerCase();
  let wordToCheckArray = Array.from(word);

  // setando o indice invertido para o array que vai checar
  let invertedIndex = wordToCheckArray.length;
  // varrer o array letra por letra
  for (let index = 0; index <= wordToCheckArray.length - 1; index += 1) {
    invertedIndex -= 1;

    console.log(wordToCheckArray[index])
    // varrer o array de traz pra frente checando igualdade
    for (invertedIndex; invertedIndex >= 0; invertedIndex -= 1) {
      console.log(wordToCheckArray[invertedIndex]);
      if (wordToCheckArray[invertedIndex] == wordToCheckArray[index]) {
        break;
      } else {
        return console.log(`${string} não é um palíndromo.`);
      }
    }
    isPalindrome = true;
  }
  isPalindrome == true ? console.log(`${string} é um palindromo`) : console.log("Error.")
}
// palindromo('Arara')

function indexOfHighestValue(arr) {

  let highestNumberIndex = 0;

  for (index in arr) {
    if (arr[index] > highestNumberIndex) {
      highestNumberIndex = arr[index];
    }
  }

  return console.log(`O maior valor é ${highestNumberIndex} e esta no índice ${arr.indexOf(highestNumberIndex)}.`)
}
let arrayToTest = [2, 3, 6, 7, 10, 1];
// indexOfHighestValue(arrayToTest);

function indexOfMinorValue(arr) {

  let minorNumber = 0;

  for (index in arr) {
    if (arr[index] < minorNumber) {
      minorNumber = arr[index];
    }
  }
  return console.log(`O maior valor é ${minorNumber} e esta no índice ${arr.indexOf(minorNumber)}.`)
}
let arrayToTestMinor = [2, 4, 6, 7, 10, 0, -3]
// indexOfMinorValue(arrayToTestMinor)

function nameWithHighestCharactersLength(arr) {

  let biggestName = 0;
  let greatestName = '';

  for (indexOfName in arr) {
    if (arr[indexOfName].length > biggestName) {
      biggestName = arr[indexOfName].length;
      greatestName = arr[indexOfName];
    }
  }

  return console.log(` The longgest name of array has ${greatestName}`)
}

let namesArray = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
// nameWithHighestCharactersLength(namesArray);

function numbersThatTheMostRepeat(arr) {

  // NOVO ARRAY PARA SALVAR OS NÚMEROS
  let numberWithMoreRepetitionIndex;
  let totalCounts = 0;

  // VARRER O ARRAY DOS NÚMEROS QUE SERÃO CHECADOS
  for (var index = 0; index <= arr.length - 1; index += 1) {
    let countTimes = 1;
    // VARRAR O ARRAY CHAR POR CHAR
    for (let secIndex = index + 1; secIndex < arr.length; secIndex += 1) {
      // IDENTIFICAR SE O NÚMERO A SER CHECADO É IGUAL AO DA SEGUNDA VARREDURA
      if (arr[index] == arr[secIndex]) {
        // CRIAR UM CONTADOR PARA CADA VOLTA
        countTimes += 1;
        if (countTimes >= totalCounts) {
          // SALVAR O NOVO NÚMERO SE O COUNT TIMES PASSAR DO TOTAL 
          numberWithMoreRepetitionIndex = arr[index];
          totalCounts = countTimes;
        }
      }
    }
  }
  console.log(`O número inteiro que mais se repete é o ${numberWithMoreRepetitionIndex}`)
}
let numbersToCheckRepeats = [2, 3, 2, 5, 8, 2, 3];
// numbersThatTheMostRepeat(numbersToCheckRepeats);

function sequentialSum(number) {
  let total = 0;

  for (let i = 0; i <= number; i++) {
    total += i;
  }
  return console.log(`O total é: ${total}`)
}
let numberToSums = 5;
// sequentialSum(numberToSums);

function checkEndWord([word, end]) {

  //TRANSFORMAR AS STRINGS EM ARRAY DE LETRAS
  let wordLowerCase = word.toLowerCase();
  let endLowerCase = end.toLowerCase()
  let wordInArray = Array.from(wordLowerCase);
  let endWordToCheck = Array.from(endLowerCase);

  //INDICE DA PALAVRA DO LADO DE FORA PARA NÃO SER RESETADO NA HORA DE CHECAR A PRÓXIMA END LETTER
  let wordIndex = wordInArray.length - 1;
  // CHECAR SE O FINAL É IGUAL 
  for (let endIndex = endWordToCheck.length - 1; endIndex >= 0; endIndex -= 1) {
    for (wordIndex; wordIndex >= 0; wordIndex -= 1) {
      if (wordInArray[wordIndex] == endWordToCheck[endIndex]) {
        wordIndex -= 1;
        break;
      } else {
        return console.log("A string final não corresponde a palavra");
      }
    }
  }
  return console.log("A string final coincide com o final da palavra");
}
let stringToTest = ['casamento', 'mento'];
// checkEndWord(stringToTest);




