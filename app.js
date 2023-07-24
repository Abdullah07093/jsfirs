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
