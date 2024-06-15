const randomNumber=Math.floor(Math.random()*100+1)
const submit=document.querySelector('#sbt')
const message=document.querySelector('.message')
const guessNumberElement=document.querySelector('.guessField')
const remainingGuessElement=document.querySelector('.remainingGuesses')
const prevGuesses=document.querySelector('.guesses')
const guessField=document.querySelector('.guessField')
const resultParas=document.querySelector('.resultParas')
let guessedNums=[]
let guessedNumsStr=""
let remainingGuesses=10
const restartBtn=document.createElement('button')



let playGame=true
submit.addEventListener('click',(e)=> {
    e.preventDefault()
    if (playGame){
        const userGuessNumber = parseInt(guessNumberElement.value)
        validateGuess(userGuessNumber)
    } else{
        // do not respond
    }

})


function validateGuess(userGuessNumber){
    if(isNaN(userGuessNumber)){
        alert("Please enter a valid number")
    }
    else if(userGuessNumber<1){
        alert("Please enter a number greater than or equal to 1")
    }
    else if(userGuessNumber>100){
        alert("Please enter a number less than or equal to 100")
    }
    else{
        guessedNums.push(userGuessNumber)
        remainingGuesses--

        checkGuess(userGuessNumber)
    }
}

function checkGuess(userGuessNumber){
    if (randomNumber===userGuessNumber) {
        displayMessage("You guessed it right")
        remainingGuessElement.innerHTML=remainingGuesses.toString()
        guessedNumsStr=guessedNums.join()
        prevGuesses.innerHTML=guessedNumsStr
        endGame()
        return
    } else if (randomNumber<userGuessNumber){
        displayMessage("Guess a lower number")
    } else if (randomNumber>userGuessNumber){
        displayMessage("Guess a higher number")
    }
    updateValues()
}

function updateValues(){
    guessNumberElement.value=''
    remainingGuessElement.innerHTML=remainingGuesses.toString()

    guessedNumsStr=guessedNums.join()
    prevGuesses.innerHTML=guessedNumsStr

    if(remainingGuesses===0){
        displayMessage(`You lost the game. The right number was ${randomNumber}`)
        endGame()
    }
}

function displayMessage(msg){
    message.innerHTML = msg
}


function endGame(qualifiedName, value){
    guessField.setAttribute('disabled','')
    playGame=false

    resultParas.appendChild(restartBtn)
    restartBtn.classList.add('restart-button')
    restartBtn.innerHTML="Restart"
    restartBtn.addEventListener('click',(e)=>{
        e.preventDefault()
        guessField.removeAttribute('disabled')
        remainingGuesses=10
        guessedNums=[]
        displayMessage("Let's start the game!")
        updateValues()
        resultParas.removeChild(restartBtn)
        playGame=true
    })
}