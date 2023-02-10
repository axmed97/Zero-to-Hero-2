'use strict'
// let r = Math.round(Math.random() * 6);
// let counter = 1;

// while(true){
//     if(r == 3){
//         console.log(counter +  "-" + r);
//         break;
//     }
//     console.log(counter +  "-" + r);
//     counter++;
//     r = Math.round(Math.random() * 6);
// }

// let odd = 0; 
// let even = 0; 
// for (let index = 0; index <= 100; index++) {
//     // if(index %2 == 0){
//     //     even += index;
//     // }else{
//     //     odd+= index;
//     // }

//     (index % 2 == 0) ? even += index : odd += index;
// }

// console.log(odd, even);

// let code = 103;

// switch (code) {
//     case  100:
//     case  101:
//     case  102:
//     case  103:
//         case  100:
//         console.log('Information');
//         break;
//     case 200:
//         console.log('Success');
//         break;
//     case 300:
//         console.log("Redirection")
//         break;
//     case 402:
//     case 403:
//     case 401:
//     case 400:
//         console.log('Error');
//         break;
//     case 500:
//         console.log("Server")
//         break;
//     default:
//         console.log('Sya Sya')
//         break;
// }


// if(code == 100){

// }else if(code == 200){

// }else if(code == 300){

// }
// else if(code == 400){

// }else if(code == 500){

// }else{

// }

//  let c = 5 + 6

//  let a = 13, b = 13;
//  let d = a + b

// a = 8, b = 19;
// d = a + b;

// function SyaSya(){
//     console.log('Hello, SyaSya')
// }

// if(0){
//     SyaSya()
//     SyaSya()
// }
// else{
//     SayHi();
//     console.log('Good Bye Sya Sya')
// }

// function SayHi(){
//     console.log("Molla Maqa yaslara 200 azn gedir")
// }

// function Sum(a, b){
//     console.log(a+b);
// }
// let a = +prompt('value 1:')
// let b = +prompt('value 2:')
// Sum(a,b);

// let a = 'maqa';

// function sayHi(){
//     console.log('Hello ' + "Meri");
// }

// function Sum(value1, value2){
//     return (value1 + value2)
// }

// function Multiple(value1, value2){
//     return (value1 * value2)
// }

// let a = Sum(92,83) * Multiple(83,92)
// console.log(a / 12)

// function Power(a,b){
//     let multiple = 1;
//     for(let i = 0; i < b;i++){
//         multiple = multiple * a;
//     }
//     return multiple;
// }
// console.log(Power(5,6))
// console.log(Math.pow(5,6))

// console.log(multiple(5,6));
// // function expression
// let sum = function(a, b){
//     return a + b;
// }
// console.log(sum(5,6))

// // function declariton

// function multiple(a,b){
//     return a*b;
// }

// arrow function
// const sum = (a, b) =>{
//     console.log(a+b)
// }   

// const sayHello = function(age = 15, name){
//     if(typeof(name) === 'undefined'){
//         age = 15;
//         name ='Meri'
//         console.log(`Hello ${name}, I'm ${age}`)
//     }
// }
// sayHello("Meri")

function Hello(a, b, c){
    return a+b*c
}