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

