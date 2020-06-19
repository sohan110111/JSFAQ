function evenify (num) {
    for (let index = 0; index < num.length; index++) {
        const element = num[index];
        if (element % 2 == 0) {
            console.log(element, ': is even.');
        } else {
            console.log(element * 2 , ': is even.');
        }
    }
    
    /* if (num % 2 == 0) {
        console.log(num, ': is even.');
    } else {
        console.log(num , ': is odd.');
    } */
}
/* console.log(12);
console.log(); */

nums = [5, 12, 89, 45, 18, 8];
/* for (let i = 0; i < nums.length; i++) {
    const num = nums[i]; */
    //console.log(num * 2);
    //evenify (num);
// }
evenify(nums);

friends_age = [13, 17, 19, 20, 18];
//for (let i = 0; i < friends_age.length; i++) {
    //const age = friends_age[i];
    //evenify (age); 
//}
evenify(friends_age);