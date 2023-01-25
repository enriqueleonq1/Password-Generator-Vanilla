/*Elements of password*/
const UPPER_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const LOWER_LETTERS = "abcdefghijklmnopqrstuvwxyz"
const NUMBERS = "0123456789"
const SYMBOLS = "*$%@&#"

/*Copy Password icon eventlistener*/
let iconCopy = document.querySelector(".icon-copy")
iconCopy.addEventListener("click",CopyToClipboard)

/*Getting Inputs Password Config*/
let upperInput = document.querySelector("#upper")
let lowerInput = document.querySelector("#lower")
let numbersInput = document.querySelector("#numbers")
let symbolsInputs = document.querySelector("#symbols")

/*Getting Button Element*/
let button = document.querySelector("#generate-password")
button.addEventListener("click",generatePassword)


/*Getting input value of input type range*/
let inputRange = document.querySelector("#inputRange")
inputRange.addEventListener("change", updateLength)

function generatePassword() {
    let errorCard = document.querySelector(".error-card")
    let elements = ""
    let resultPassword = document.querySelector("#passwordResult")
    if( upperInput.checked )
        elements += UPPER_LETTERS
    if( lowerInput.checked )
        elements += LOWER_LETTERS
    if( numbersInput.checked )
        elements += NUMBERS
    if( symbolsInputs.checked )
        elements += SYMBOLS
    if( elements === "" ) {
        errorCard.style.display = "block"
    } else {
        errorCard.style.display = "none"
        let numberLength = parseInt( inputRange.value )
        let passwordGenerated = ""
        for(let i = 0; i < numberLength; i++ ){
            passwordGenerated += elements[Math.floor(Math.random() * elements.length  )] 
        }
        resultPassword.textContent = passwordGenerated
    }
}

function updateLength() {
    let textLength = document.querySelector("#password-length")
    textLength.textContent = inputRange.value
}


/*Copy text to clipboard*/
function CopyToClipboard() {
    let textDisplay = document.querySelector("#passwordResult")
    if( textDisplay.textContent !== "Your Password!") {
        let copiedDisplay = document.querySelector(".copied-text-section")
        let id = textDisplay.id
        let r = document.createRange()
        r.selectNode(document.getElementById(id))
        window.getSelection().removeAllRanges()
        window.getSelection().addRange(r)
        document.execCommand('copy')
        window.getSelection().removeAllRanges()
        copiedDisplay.style.display = "block"
        setTimeout(() => {
            copiedDisplay.style.display = "none"
        }, 1000)
    }     
}