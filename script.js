// classworck, switch 
let role = prompt('admin');
let accessLevel;

switch(role) {
    case 'admin':
        accessLevel = 'Full access';
        break;
    case 'editor':
        accessLevel = 'Edit content';
        break;
    case 'viewer':
        accessLevel = 'View content';
        break;
    default:
        accessLevel = 'No access';
}

console.log(`User role: ${role}, Access level: ${accessLevel}`);


for (let i=5; i>= 1; i--){
    console.log(i);
}

// 1
let words= 'MIRACLE';
let lowerCased= words.toLowerCase();
console.log(lowerCased);
let isPalindrome = true;
for (let i=0; i<lowerCased.length/2; i++ ){
    if(lowerCased[i] !== lowerCased[lowerCased.length-1-i]){
        isPalindrome=false;  
        break;
    }
}
if(isPalindrome){
    console.log('input is palindrome.');
    
}else{
    console.log('input is not palindrome.');
}




// 2
const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
const spliced= fruits.splice(1, 2);
console.log(spliced);
// [ 'Orange', 'Apple' ]

// 3
const fruits1 = ["Banana", "Orange", "Apple", "Kiwi"];
const sorted= fruits1.sort();
console.log(sorted);
// [ 'Apple', 'Banana', 'Kiwi', 'Orange' ]

// 4

let calcAverage = (a, b, c) => ((a + b + c) / 3);

let scoreDolphins = calcAverage(85, 54, 41);
let scoreKoalas = calcAverage(23, 34, 27);


console.log(`Dolphins average score: ${scoreDolphins}`);
console.log(`Koalas average score: ${scoreKoalas}`);


function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log('No team wins.');
    }
}


checkWinner(scoreDolphins, scoreKoalas);

// classchallenge
let birthYear = Number(prompt('please enter your birthyear'));

function calcAge() {
    return 2024 - birthYear;
}

if (calcAge() >= 18) {
    console.log('სრულწლოვანი');
} else {
    console.log('არასრულწლოვანი');
}

