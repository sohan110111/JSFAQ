function explain_callback (name, age, task) {
    console.log('Name : ', name);
    console.log('Age : ', age);
    task();
}

function washhand() {
    console.log('Wash-hand Minar');
}
function takeShower() {
    console.log("Take shower Jalil");
}

var array = [washhand, takeShower];
explain_callback('Minar', 56, array[0]);
explain_callback('Jalil', 67, array[1]);
// console.log("Hello world");