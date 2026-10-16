//Disc 1 Side A
let inc = function(n){
    return n+1;
}

const a = 5;
const b = inc(a);
inc();
console.dir({a,b})
//Disc 1 Side B
inc = function(num){
    num.n+=1
}
const obj = {n:5};
inc(obj);
console.dir(obj);
//Disc 2 Side A STATIC SORTING
const array =
    ['i love alcohol', 67, true,
    Symbol('A'), null,[6,12,5], 1+5,0,
    function(n){return 0;}]
const colivan = {
    number: 0,
    string: 0,
    boolean: 0,
    object: 0,
    symbol: 0,
    function:0
}
for (const item of array) {
    const type = typeof item;
    colivan[type]++;
}
console.dir(colivan)
//Disk 2 Side B aka DYNAMIC SOMETHING
const johnpork = {};
for(const item of array){
    const type = typeof item;
    if(johnpork[type] === undefined){
    johnpork[type] = 0;
    }
    johnpork[type]++;
}
console.dir(johnpork);