const charLength = document.querySelector("#charLength")
const lengthRange = document.querySelector("#lengthRange")



lengthRange.addEventListener("change", function(e){
    charLength.textContent = e.currentTarget.value
})

const passwordOutput = document.querySelector("#passwordOutput")
const generateButton = document.querySelector("#generateButton")
const copyButton = document.querySelector("#copyButton")

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', "'", '"', ',', '.', '<', '>', '/', '?', '|', '\\'];

const utils = {
    generateRandomBetween: function (min, max){
        return Math.floor(Math.random()* (max - min + 1) + min)
    },
    getCharsFromArray: function (array, num){
        let chars = ""
        for (let i = 0; i < num; i++) {
            const randNumber = utils.generateRandomBetween(0, array.length-1)
            chars += array[randNumber]

        }
        return chars
    }
}

function evaluatePasswordStrength(password) {
    let score = 0;
    
    if (password.length >= 8) score += 30; // Mayor longitud, mejor
    if (password.length >= 12) score += 20; // Extra seguro si es más larga

    if (letters.some(char => password.includes(char))) score += 20;
    if (numbers.some(char => password.includes(char))) score += 15;
    if (symbols.some(char => password.includes(char))) score += 15;

    return Math.min(score, 100); // Asegurarse de que no pase de 100
}

function generatePassword (){

    const passLength = lengthRange.value
    const includeNumbers = document.querySelector("#numbers").checked
    const includeSymbols = document.querySelector("#symbols").checked


let tempPassword = ""

if(includeNumbers){
    tempPassword += utils.getCharsFromArray(numbers,utils.generateRandomBetween(3,passLength/3))
}
if(includeSymbols){
    tempPassword += utils.getCharsFromArray(symbols,utils.generateRandomBetween(3,passLength/3))
}

tempPassword += utils.getCharsFromArray(letters, passLength - tempPassword.length)

    console.log( tempPassword.split("").sort( () => Math.random() - 0.5 ).join("") )

    passwordOutput.value = tempPassword.split("").sort( () => Math.random() - 0.5 ).join("")

    passwordOutput.value = tempPassword;

    document.querySelector("#strengthIndicator").value = evaluatePasswordStrength(tempPassword);
}


generateButton.addEventListener("click", generatePassword)

function copiarPassword () {

    
    if( passwordOutput.value === "" ) return
    
    const psCopy = passwordOutput.value
    navigator.clipboard.writeText(psCopy)
}

copyButton.addEventListener("click",copiarPassword)

