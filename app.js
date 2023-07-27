let a=5
console.log(a+a);
function first(){
    return function(){
       return "Hello";
    }
}
console.log("task1");

function perimetr(n){
return n*4;
}
console.log(perimetr(7));

console.log("task2");

function perimetrAria(n){
return n*n;
}
console.log(perimetrAria(8));

console.log("task3");

function average(a,b){
return (a+b)/2;
}
console.log(average(7,9));
console.log("task4");

function evenOdd(a){
if(a%2==0){
return 3;
}else return 4;

}
console.log(evenOdd(8));
console.log("task4");

function evenOdd(a){
if(a%2==0){
return 3;
}else return 4;

}
console.log(evenOdd(8));

console.log("task5");

function calculate(x){

return 17*(x*x)-(6*x)+13;
}
console.log(calculate(10));

console.log("task6");

function longest(h,m,s){
if ((h*3600)>m*60&&(h*3600)>s) {
    return h;
} else if((h*3600)<m*60&&(m*60)>s) {
    return m
}
else{
return s;
}

}
console.log(longest(1, 59,3598));
console.log("task7");

function same(a){
    let b=Math.trunc(a/100);
    let c=Math.trunc(a/10)%10;
    let d=a%10;
    if (b==c||b==d) {
        return true;
    } else if (c==b&&c==d){
        return true;

    }
    else if (d==b&&c==d){
        return true;

    }
    else{return false;}

}
console.log(same(212));

console.log("HomeWork 2");

console.log();
console.log("Task1");
function modifyLast(a,b){
    let log='';
for (let index = 1; index < b; index++) {
   log +=  a.slice(a.length - 1); 
}
return a+log;

}
console.log(modifyLast("hey", 6))
console.log("Task2");

function firstLast(n){

   return n[0]+n.slice(-1);
}
console.log(firstLast("ganesh"));
console.log("Task3");
function toInt(n){
return +n;
}
function toIntt(n){
    return parseInt(n);
    }
function toStr(n){
    return String(n);
}
console.log(toInt("77"));
console.log(toIntt("77"));
console.log(toStr(77));
console.log("Task4");
function isPlural(n){
if (n.slice(-1)=="s") {
    return true
}else{
    return false;
}
}
console.log(isPlural("change"));
console.log("Task5");
function reverseCapitalize(n){
    return n.split("").reverse().join("").toUpperCase();
}
console.log(reverseCapitalize("abc"));
console.log("Task6");
function checkEnding(a,b){
return b+" "+a;
}

console.log(checkEnding("abc", "bc"));
console.log("Task7");
function checkPalindrome(n){
    if (n==n.split("").reverse().join("")) {
        return true;
        
    } else {
        false;
    } 
}
console.log(checkPalindrome("mom"));
console.log("Task8");
function charCount(a,b){

    return b.split("").filter(i=>i==a).length;
}
console.log(charCount("a", "edabit"));


console.log("Task9");

function capToFront(a){
let log='';
for(let al of a){
    if (al===al.toUpperCase()) {
log +=  al; 

} 
}
a = a.replace(/[A-Z]/g,'');
return log+a;
}
console.log(capToFront("moveMENT"));

console.log("Task10");
function reverseAndNot(n){
let b=n;
console.log( Number( n.toString().split("").reverse().join("").concat(b)));
}
reverseAndNot(123)
console.log("HomeWork 3");
console.log("Task 1");

function conArray(...args){
    return args.join();
}
console.log(conArray([1, [2, 3],456]));

console.log("Task 2");

function secondMax(...args){
    return args.sort();
}
console.log(secondMax([1, [2, 3],456]));

console.log("Task 3");

function compact(...args){
   return [].filter(function(f) { return f != false||null||0|| ""|| undefined || NaN })
}
console.log(compact([0, 1, false, 2, "", 3]));
console.log("Task 4");

function arrayOfMultiples(num, length){
    let coun=[];

  for (let index = 1; index <= length; index++) {
 coun.push(num*index);
  }
  return coun
}
console.log(arrayOfMultiples(7,5));

console.log("Task 5");

function marathonDistance(...args){
return args.indexOf( 25 ) != -1
}
console.log(marathonDistance([1, 9, 5, 8, 2]));

console.log("Task 6");

function mirror(...args){
    let mirr=args;
    console.log( args.sort().splice(args.length-1));
    console.log( args);
    console.log( mirr);

    console.log(args.concat(mirr.reverse()))
  return args.concat(mirr.reverse());
}
console.log(mirror([0, 2,7, 4, 6]));
console.log("Task 7");
function indexMultiplier(){
    console.log( arguments);

const elem=Array.of(arguments);
console.log( elem.length);
console.log( elem[1]);

let sum=1;

    for (let index = 0; index < arguments.length; index++) {

        sum+=elem[index]*index;
        
    }
    return sum;
}

console.log(indexMultiplier([1, 2, 3, 4, 5]));




console.log("Task 666");

let arr=[0, 2,7, 4, 6];
arr.sort().splice(arr.length-1);
console.log(arr.reverse());

console.log("HomeWork 4 Oject");
console.log("TAsk1")
let obj={
  up:10,
  down:1
}
function getVoteCount(obj){
    return obj   // {up:10,down:1}
}

function getVoteCount(obj){
    return obj.up-obj.down  // 10-1  -->9
}
console.log(getVoteCount({up:10,down:1}));
console.log("TAsk2")
// let obj1={
//     windth:0,
//     length:0,
//     height:0
// }


function volumeOfBox(obj){
    
 
    return obj.width*obj.height*obj.length;
}

console.log(volumeOfBox({ width: 2, length: 5, height: 1 } ));
console.log("TAsk3")

function fiftyThirtyTwenty(a){
    let obj={
"Needs": a*0.5, "Wants": a*.3, "Savings": a*.2 
    }
    return obj;
}

console.log(fiftyThirtyTwenty(10000));
console.log("TAsk4")
function relationToLuke(a){
    let obj={
        "Darth Vader":"father",
        "Leia":"sister",
        "Han":"brother in low",
        "R2D2":"droid"
    }

   
    Object.entries(obj).forEach(([key, value]) => {
        if (key==a) {
            console.log(`Luke, I am your ${value}`); 
        }
  
});
 return "Luke, I am your "+obj.a;// чи гуна return-да броремша???

}
console.log(relationToLuke("Leia"));
console.log("TAsk5")
function cityFacts(obj){
    return obj.name+" has a population of "+obj.population+" and is situated in "+obj.continent;

}
console.log(cityFacts(
{ name: "Paris", population: "2,140,526", continent: "Europe"}
));
console.log("TAsk6")
function totalAmountAdjectives(obj){
   return  Object.keys(obj).length;

}
console.log(totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" }))

console.log("TAsk7")
function nSidedShape(){

}
console.log(nSidedShape(3) ➞ "triangle");