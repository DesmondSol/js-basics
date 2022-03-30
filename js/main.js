// //alert('hey!!');
// //variables var, let, const
// //`${} concatination of strings`
// //split(',') splits string into array on comma

// //let age=4;
// //const no=new Array(1,2,3,4,5);
// //const fruits=['apples','oranges','bananas',10,true ];

// //console.log(age);

// const person={
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music','movies','sports'],
//     address: {
//         street: '50 main st',
//         city: 'Boston',
//         state: 'MA'
//     }
// }

// console.log(person.address.city);

// //  const {firstName,lastName,address:{city}}=person;  //destructuring pulling data out of objects
// //     console.log(`${firstName} ${lastName} lives in ${city}`);

// person.email = 'john@example.com'; //adding to object
// console.log(person.email);

// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist appt',
//         isCompleted: false
//     } 
// ];

// for(let todo of todos){
//     if(todo.id > 1){
//     console.log(`${todo.id} . ${todo.text}`);
// }
// }
// //console.log(todos.);  //calling from array of objects
 
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

// todos.forEach(function(todo) {
//     console.log(todo.text);   
// });

// const todotext = todos.map(function(todo) {  //stores an array of strings
//     return todo.text;
// });
// const todotextfilter = todos.filter(function(todo) { //stores an array of filtered strings
//     return todo.isCompleted === false;
// }).map(function(todo) {
//     return todo.text;
// });
 
// console.log(todotextfilter);

// // == doesnt check data type === checks data type also

// const color = person.age > 10 ? 'red' : 'blue';

//parent of the screen is = window

//selectors
// document.getElementById('my-form');
// const items=document.querySelectorAll('.item');
// console.log(document.querySelectorAll('.item'));

// items.forEach(function(item){
// console.log(item);
// //item.innerHTML='item';


//   //   if(item.children[1].textContent == 'Item 1'){
// //     item.style.backgroundColor='green';
// // }
// });
// items.forEach((item) =>  item.style.color = 'red');

// const ul = document.querySelector('.items');
// ul.children[1].innerText='ola';
// let c=0;
// const btn = document.querySelector('.btn');
// btn.addEventListener('click',(e) => {
// btn.style.backgroundColor='red';
// e.preventDefault();
// console.log(e);
// //const a= e.target.id;
// document.querySelector('#my-form').style.backgroundColor=`#ccc${c}`;
// c++;
// if(c==10){
//     c=0;
// }
// document.querySelector('body').classList.add('bg-dark');

// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        //clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}