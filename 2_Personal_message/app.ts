let personName :string = '';

personName = prompt('What is your name?') ||'';

if(personName !== null && personName !== ''){
    alert(`Hello ${personName}, would you like to learn some python today?`)
}
else{
    alert('You have to fill your name !')
}
