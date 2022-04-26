// var name = 'max';
// console.log(name); 
// var a=1;
// console.log(a);

// function 
// function add(a,b){
//     return (a+b);
// }
// console.log(add(3,4));
// const add=(a,b) => a+b;
// console.log(add(34,67)); 

// object 
// const person={
//     name :'mausam',
//     age:20,
//     greet: function(){
//         console.log('I am '+this.name);
//     }

// //}
// console.log(person.greet());
//  for coping constructor use ...arg  spread
// const copyperson={...person};
// console.log(copyperson);

// object destructuring

// const printname=(personData)=>{
    // console.log(personData.name);
// }
// printname(person);
// or
const person={
    name :'mausam',
    age:20,
    greet: function(){
        console.log('I am '+this.name);
    }

} 
// const print =({name,age})=>{
//     console.log(name,age);
// }
// print(person);
// or 
const {name,age}=person;
// console.log(name,age);

// array 
const hobbies=['singing','drawing'];
// console.log(hobbies.map((hobby)=>{
//     return ('hobby:  '+hobby);
// }))

// arry spread

// let copyhobbies=[...hobbies];
// console.log(copyhobbies);

// function rest
const addarry=(...args)=>{
    return args;
}
console.log(addarry(56,90,78,99));




