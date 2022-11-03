// Problem 1:

 let kthDigitFinder = (nuum, k) => {
    var kthDigit;
    let kk = "" + nuum;
    for (let i = 0; i < kk.length; i++) {
        if (kk[i] == (k - 1)) {
            kthDigit = "" + kk[i];
        }}
    return parseInt(kthDigit);
}
console.log(kthDigitFinder(1234, 4));


// Problem 2:

var a = "23618"; 
let arr = []; 

for (let aa of a) {
    arr.push(parseInt(aa));
}
console.log(arr);
var result = arr.reduce((prev, curr) => {
    return prev + curr;
})
console.log(`total result=${result}`); 


// Problem 3:

var nums = "123456";
let arr2 = [];

for (let n of nums) {
    arr2.push(parseInt(n));
}
let sum = 0;

arr2.map((number) => {
    if (number % 2 == 0) {
        sum = sum + number;
    }
})
console.log(arr2);
console.log(`total Sum=${sum}`);


// Problem 4:

var squareAndCubes = () => {
    let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let squares = num.map((na) => {
        return na ** 2;
    })
    let cubes = num.map((ne) => {
        return ne ** 3;
    })
    var obj = {
        allNumbers: num,
        Squares: squares,
        Cubes: cubes
    }
    return obj;
}
console.log(squareAndCubes());

// Problem 5:

let vowelPositioner = (val) => {
    let vals = "";
    vals = val;
    vals = vals.toLocaleLowerCase();
    let position;
    for (let i = 0; i < vals.length; i++) {
        if (vals[i] === 'a' || vals[i] === 'e' || vals[i] === 'i' || vals[i] === 'o' || vals[i] == 'u') {
            position = i;
            break;
        }
    }
    return position;
}
console.log("Postion of Left most vowel ::" + vowelPositioner('A55isd'));


// Task 2 :    Reversing the numbers

let numberReverser = (digits) => {
    let nums = "" + digits; 
    var arr = []; 
    for (let element of nums) {
        arr.push(element);
    }
    let arr2 = arr.reverse().join(''); 
    return parseInt(arr2);
}
console.log(numberReverser(564));


// Problem 6:

const ps = require('prompt-sync');
const prompt = ps();
var randomGuesser = () => {
    var randomNumber = Math.floor((Math.random() * 10 + 1));
    console.log(randomNumber);
    var guessNumber = prompt("Enter You guess::");
    if (guessNumber == randomNumber) {
        console.log("You WIN");
    }
    else {
        console.log("Not Matched")
    }
}


// Problem 7:

let numberChecker = (array) => {
    if (array.length >= 2) {
        return array[0] === 10 || array[array.length - 1] === 10;
    }
    else {
        console.log('Array size is less than 2');
    }
}
console.log(numberChecker([10, 2, 3, 4]));


// Problem 8:

let alphabeticOrder = (st) => {
    let arrays = [];
    for (let i = 0; i < st.length; i++) {
        arrays.push(st[i]);
    }
    let str = "";
    str = str + arrays.sort().join('');
    return str;
}
console.log(alphabeticOrder('comsats'));