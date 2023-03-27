function capitalize(input){
    return input.charAt(0).toUpperCase() + input.slice(1)
}

function reverseString(input){
    let inputArray = input.split("")
    inputArray.reverse()
    return inputArray.join("")
}

const calculator = ((num1, num2) => {

    const add = (num1, num2) => {
        return num1 + num2
    }
    const subtract = (num1, num2) => {
        return num1 - num2
    }
    const multiply = (num1, num2) => {
        return num1 * num2
    }
    const divide = (num1, num2) => {
        return num1 / num2
    }
    return{add, subtract, multiply, divide}
})()

function caesarCipher(input, shift){
    let inputArray = input.split("")
    let newArray = []
    inputArray.forEach(character => {
        let code = character.charCodeAt()

        if(code > 96 && code < 123){
            code += shift

            if(code > 122){
                let overflow = code - 123
                code = 97 + overflow
            }

        } else if(code > 64 && code < 91){

            code += shift
            if(code > 90){
                let overflow = code - 91
                code = 65 + overflow
            }
        }

        character = String.fromCharCode(code)
        newArray.push(character)
    })
    return newArray.join("")
}

function analyseArray(inputArray){
    let length = inputArray.length
    let sum = 0
    inputArray.forEach(number => {
        sum += number
    })
    let average = sum / length
    return {'average':average, 'length':length, 'max':Math.max(...inputArray), 'min':Math.min(...inputArray)}

}
export {capitalize, reverseString, calculator, caesarCipher, analyseArray}