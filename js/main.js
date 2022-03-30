//alert('hey!!');
//variables var, let, const
//`${} concatination of strings`
//split(',') splits string into array on comma

//let age=4;
//const no=new Array(1,2,3,4,5);
//const fruits=['apples','oranges','bananas',10,true ];

//console.log(age);

const person={
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music','movies','sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person.address.city);

//  const {firstName,lastName,address:{city}}=person;  //destructuring pulling data out of objects
//     console.log(`${firstName} ${lastName} lives in ${city}`);

person.email = 'john@example.com'; //adding to object
console.log(person.email);

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    } 
];

for(let todo of todos){
    if(todo.id > 1){
    console.log(`${todo.id} . ${todo.text}`);
}
}
//console.log(todos.);  //calling from array of objects
 
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

todos.forEach(function(todo) {
    console.log(todo.text);   
});

const todotext = todos.map(function(todo) {  //stores an array of strings
    return todo.text;
});
const todotextfilter = todos.filter(function(todo) { //stores an array of filtered strings
    return todo.isCompleted === false;
}).map(function(todo) {
    return todo.text;
});
 
console.log(todotextfilter);

// == doesnt check data type === checks data type also

const color = person.age > 10 ? 'red' : 'blue';