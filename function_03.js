function addNumbers (num1, num2) {
    console.log(arguments); // [Arguments] { '0': 3, '1': 4, '2': 5, '3': 6 }
    console.log(arguments[3]); // 6

    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        sum = sum + element;
    }
    return sum;
}

var result = addNumbers(3, 4, 5, 6);

console.log(result);