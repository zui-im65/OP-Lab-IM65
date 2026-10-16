//Bohdan Zui IM-65
//Лабораторка 2
//Увесь код працює всередині цього файлу
//Завд. 1 Ідентифікатори
let name = 'Богдан';
let age = 2008;
let deanon = function(name){
    console.log("Я знаю хто ти. Твоє ім'я", name,"і я знаю колір твого умивальника")
}
deanon(name);
//Завд. 2 Цикли
let range = function(start, end){
    let output_array = [];
    for(let i = start; i <= end; i++){
        output_array.push(i);
    }
    return output_array;
}
console.dir(range(15,30));
//Завд. 2. Цикли але ще непарні числа
range = function(start, end){
    let output_array = [];
    for(let i = start; i <= end; i++){
        if(!(i%2 === 0)){output_array.push(i);
    }}
    return output_array;
}
console.dir(range(15,30));
//Вкладені функції
//СЕРЗНАЧ
let average = function(a,b){
    let c = (a+b)/2;
    return c;
}
console.dir(average(50,100));
//КВАДРАТ
let square = function(x){
    c = (x)**2;
    return c;
}
console.dir(square(16));
//cube
let cube = function(x){
    c = (x)**3;
    return c;
}
console.dir(cube(3));
