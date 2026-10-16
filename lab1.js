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
//Disc 2 Side A
const array =
    ['i love alcohol', 67, true,
    Symbol('A'), null,[6,12,5], 1+5,0]
const colivan = {
    numbers: 0,
    strings: 0,
    booleans: 0}
for (const item of array) {
    const type = typeof item;

    if (type === "numbers") colivan.numbers++;
    if (type === "string") colivan.strings++;
    if (type === "boolean") colivan.booleans++;
}
console.dir(colivan)
