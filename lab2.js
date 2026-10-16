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
//КВАДРАТ МАЛЄВИЧА
let square = function(x){
    c = (x)**2;
    return c;
}
console.dir(square(16));
//КУБ РУБІКА
let cube = function(x){
    c = (x)**3;
    return c;
}
console.dir(cube(3));
//Цирковний цикл
circus=[];
for(let i = 0; i < 10; i++){
    let x =square(i);
    let y =cube(i);
    let z = average(x,y);
    circus.push(z);

}
console.dir(circus);
//Завд. 3 Об'єкти
//Ми викликаємо console.dir(fn())
//Воно запускає функцію fn()
//В цій функції всередині є дві задані змінні
//Константа obj1 і літерал obj2
//Ми можем поміняти те що всередині поля name і там і там
//Та от ми не можемо поміняти повністю вміст у константі
//Тільки у літералі
//Якщо ми міняємо в константі, воно все вилітає з помилкою
let fn = function(){
    const obj1 = {name: 'Gordon'}
    let obj2 = {name: 'Freeman'}
    obj1.name = 'Eli'
    obj2.name = 'Vance'
    //obj1 = { name: 'Isaac' }; TypeError: Assignment to constant variable.
    obj2 = {name: 'Kleiner'};
    return {obj1, obj2};
}
console.dir(fn());
//Створення користувача
let createUser = function(name, city){
    entry = {name, city};
    return entry;
}
console.dir(createUser("John Cena", "Bejiin"));
//Завд 4. Колекції
//База дніпровського колцентру
let phonebase = [
{name: 'СБУ', phone:'+38044293899'},
{name: 'Пшепшицька Килина', phone:'+38067676767'}
]
let findPhoneByName = function(name){
    for(const item of phonebase){
        if (item.name === name){
            return item.phone;
        }
    }
}
console.dir(findPhoneByName('СБУ'));
//Варіант другий з хешами
phonebase = {
    'СБУ': {phone: '+38044293899'},
    'Пшепшицька Килина': {phone: '+38067676767'}
}
findPhoneByName = function(name){
    return phonebase[name];
}
console.log(findPhoneByName('Пшепшицька Килина'))