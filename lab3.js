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
const ip = "192.168.1.1";
const transformIP  = function(ip){
    let digest = ip.split('.').map(Number);
    let output = 0;
    for(let i = 0, j = 3; i < digest.length; i++, j--){
        if (j < 3 || j >= 0){
            output += digest[i] << 8*j;
        }
        else{

        }
    }
    return output;
}
console.dir(transformIP("192.168.1.10"));
console.dir(transformIP("127.0.0.1"));
console.dir(transformIP("0.0.0.0"));
console.dir(transformIP("8.8.8.8"));
console.dir(transformIP("165.225.133.150"));
//Інтроспектор