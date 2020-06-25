var name = 'Kuddus'; // here declare global variable

function add(num1, num2) {
    var result = num1 + num2; // here declare local variable or result = num1 + num2(It's local variable , it can't be access outside);
    // window.result = num1 + num2; It can be access in the window
    console.log('result inside function : ', result);
    console.log('name inside function : ', name); 
    function double(num) {
        return num*2;
    }
    
    return double(result);
}

// console.log('result inside function', result); // It's definitely error because it's variable is local inside function
console.log('name inside function', name); // It's global variable(name). So it's access anywhere

var sum = add(20, 10);
console.log(sum);

//console.log('result outside ', result);