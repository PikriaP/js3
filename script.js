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