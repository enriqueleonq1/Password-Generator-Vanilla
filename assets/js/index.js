/*Elements of password*/
const UPPER_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const LOWER_LETTERS = "abcdefghijklmnopqrstuvwxyz"
const NUMBERS = "0123456789"
const SYMBOLS = "*$%@&#"

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
        console.log("Debe seleccionar algun tipo")
    } else {
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