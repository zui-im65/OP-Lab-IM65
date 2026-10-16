//Рандомайзер
let random = function(min, max) {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    x = min + Math.floor(Math.random() * (max - min + 1));
    return x;
}
console.dir(random(2, 100));
console.dir(random(50));
//Генератор ключа
const characters = ` !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_abcdefghijklmnopqrstuvwxyz{|}~ `;
let generateKey = function(length, characters){
    let output = ``;
    for (let i = 0; i < length; i++) {
        const index = random(0, characters.length - 1);
        output += characters[index];}
    return output;

}
const key = generateKey(16, characters);
console.log(key)
//Байтшіфт з ІП
const IP = "192.168.1.1";
