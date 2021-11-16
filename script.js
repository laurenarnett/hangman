var answerArray = []
var currentWord = ""
var words = ["javascript", "monkey", "amazing", "pancake"]
var guessInput = document.getElementById("letter");

function getAnswerArray(guess) {
  for (var i = 0; i < currentWord.length; i++) {
    if (currentWord[i] == guess) {
      answerArray[i] = guess
    }
  }
  return answerArray;
}

function buildHangmanHtml(answerArray) {
  let letters = document.getElementById("letters")
  for (var i = 0; i < currentWord.length; i++) {
    let letter = '<li class="letter">' + answerArray[i] + '</li>'
    letters.insertAdjacentHTML('beforeend', letter)
  }
  return false
}

function setup() {
  currentWord = words[Math.floor(Math.random() * words.length)]
  let letters = document.getElementById("letters")
  letters.innerHTML = '<li class="current-word">Current word:</li>'

  for (var i = 0; i < currentWord.length; i++) {
    let letter = '<li class="letter letter' + currentWord.charAt(i).toUpperCase() + '">' + "_" + '</li>'
    letters.insertAdjacentHTML('beforeend', letter)
    answerArray[i] = "_"
  }
}

function hangman() {
  let form = document.getElementById("hangman")
  let letters = document.getElementById("letters")
  let guess = form.elements["letter"].value
  letters.innerHTML = '<li class="current-word">Current word:</li>'
  answerArray = getAnswerArray(guess)
  buildHangmanHtml(answerArray)
  return false;
}

document.getElementById("restart").onclick = setup
window.onload = setup()

/* reset letter to guess on click */
guessInput.onclick = function () {
  this.value = ''
};