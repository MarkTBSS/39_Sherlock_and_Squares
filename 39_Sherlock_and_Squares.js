/* function squares(a, b) {
    var countSquareNumber = 0
    for (var i = a; i <= b; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            console.log(Math.sqrt(i))
            countSquareNumber++
        }    
    }
    return countSquareNumber
} */

/* function squares(a, b) {
    let result = 0
    for (let i = 1; i <= b; i++) {
        let square = i * i
        if (square >= a && square <= b) {
            result++
        } 
        if (square > b) {
            break
        }
    }
    return result
} */

/* function squares(a, b) {
    let start = Math.ceil(Math.sqrt(a));
    let end = Math.floor(Math.sqrt(b));
    return (end - start + 1);
} */

function squares(a, b) {
    var startSquareNumberRounded = 0
    var endSquareNumberRounded = 0
    startSquareNumberRounded = Math.ceil(Math.sqrt(a))
    endSquareNumberRounded = Math.floor(Math.sqrt(b))
    return (endSquareNumberRounded - startSquareNumberRounded) + 1
}

var a = 49
var b = 121
console.log(squares(a, b))