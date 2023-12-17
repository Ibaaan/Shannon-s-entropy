function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
  }

let fs = require('fs');
let s = fs.readFileSync("input.txt").toString();

let alph = new Array();
let len = 0;

for (let i = 0; i < s.length; i++) {
    if (alph[s.charAt(i)])
        alph[s.charAt(i)]++;
    else
        alph[s.charAt(i)] = 1;
    len++;
}

let ent = 0;
let p = 0;
let dum = 0;

for(let i in alph){
    p = alph[i]/ len;
    ent += p * getBaseLog(Object.keys(alph).length, p);
}
if(ent !== 0)
    ent *= -1;
console.log("Entrophy", ent);

for (let i in alph){
    console.log(i, alph[i] / len);
    dum +=alph[i]/ len; 
}