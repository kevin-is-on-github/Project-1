const answers = ['howdy', 'buckaroo', 'rodeo', 'horse', 'bronco', 'ranch', 'bounty', 'frontier','ranch']
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let wordToGuess = chooseAnswer()
let turnsLeft = 10

//function to choose an answer randomly
function chooseAnswer () {
    return answers[Math.floor(Math.random() * answers.length)]
}

//replace the word with blank spaces
let blankSpaces = Array(wordToGuess.length).fill('_')

//function to update displayed word
function wordDisplay(){
    document.getElementById("word-display").textContent = blankSpaces.join(' ')
}

// function that fades ghost with each wrong guess
function fadeGhost (){
}

//check if you won or loss
function winCheck(){
    if (turnsLeft === 0){
        const lossMessage = document.getElementById("loss-message");
        lossMessage.classList.remove("hidden");
        introduction.classList.add("hidden");
        guessesLeft.classList.add("hidden")
        // letterButtons.innerHTML(`The word was ${wordToGuess}`)
    }
    if (blankSpaces.join("") === wordToGuess){
        const victoryMessage = document.getElementById("victory-message");
        victoryMessage.classList.remove("hidden");
        introduction.classList.add("hidden");
        guessesLeft.classList.add("hidden")
        }
    }

//lives left
const guessesLeft = document.getElementById("guesses-left")
function livesLeft(){
    guessesLeft.innerHTML = `You have ${turnsLeft} chances left, buckaroo.`
}

// create keyboard buttons
function generateButton(){
    const letterButtons = document.getElementById('keyboard-buttons')
    for (let i=0; i<alphabet.length; i++){
        const letterButton = document.createElement("button")
        let letter = alphabet[i]
        letterButton.textContent = letter
        letterButton.addEventListener('click', (event) => handleClick(event))
        letterButtons.appendChild(letterButton)
    }
}

//function for seeing if a guess is valid or not
function handleClick(event){
    let char = event.target.textContent
    let splitWordToGuess = wordToGuess.split('')
    if (splitWordToGuess.includes(char)){
        for (let i=0; i< splitWordToGuess.length; i++){
            if (splitWordToGuess[i] === char){
            blankSpaces[i] = splitWordToGuess[i]
            }
        }
        wordDisplay()
        winCheck()
    } else {
        turnsLeft--
        livesLeft()
        winCheck()
        fadeGhost()
    }
}

//initialize game
livesLeft()
chooseAnswer()
wordDisplay()
generateButton()
