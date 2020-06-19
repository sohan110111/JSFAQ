

function evenify (num) {
    var result;
    if (num % 2 == 0) {
        result = num;
    } else {
        result = num + " is odd";
    }

    return result;
}
var result = evenify(13);
console.log(result);

function square (num) {
    return num * num;
}

var squareResult = square(12);
console.log("Square is ", squareResult);
console.log("Square Root is : ", Math.sqrt(squareResult));

var nums = [1, 2, 3, 4, 5];
function double (value) {
    var double = [];
    for (let index = 0; index < value.length; index++) {
        const element = value[index] * 2;
        double.push(element);
    }

    return double;
} 

console.log(double(nums));