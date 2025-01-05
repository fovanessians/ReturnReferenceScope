function myfunction(x) {
    console.log(x);
    return(x);
};

let y = myfunction(3);
  
console.log(y);


let newX = function (a){
    console.log(a);
};

let newY = function (){
console.log(newX);
};

let b = 4;
let newYY = function (b){
console.log(b);
};

console.log(newYY);

let newZ = newY;
console.log('newZ: ' + newZ);

dd = 10;
ss = 20;
let preAdd = dd + ss;
console.log(dd+ss);
console.log(`The number is ${preAdd}`);
console.log(typeof preAdd);
console.log(preAdd);

let add = (dd, ss) => dd + ss; 
console.log(add);

function myfunction(x) {
    console.log(x);
    return(x);
};




//let add = (a, b) => a + b;  

/*

const	const is used to declare const values. 
Once the value is assigned, it can not be modified	
Global or block Scope

let	let is also used to declare variables(new way)	
Global or block Scope
*/

