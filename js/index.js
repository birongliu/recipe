// Iteration 1: Names and Input
let hacker1 = "C"
console.log(`The driver's name is ${hacker1}`);
let navigators = "C"
console.log(`The navigator's name is ${navigators}`)
// Iteration 2: Conditionals
if(hacker1.length >= navigators.length) {
    console.log(`${hacker1} has the longest name, it has ${hacker1.length} characters`);
}

if(navigators.length >= hacker1.length) {
    console.log(`${navigators} has the longest name, it has ${navigators.length} characters`);
}

if(hacker1.length === navigators.length) {
    console.log(`Wow, you both have equally long names, ${navigators.length} character`)
}
// Iteration 3: Loops
let str = ''
for(let item of hacker1) {
    str += item.toUpperCase() + " "
}
console.log(str)
let str2 = ''
for(let i = hacker1.length - 1; i >= 0; i--) {
    str2 += hacker1[i]
}
console.log(hacker1, navigators)

const lexical = lex(hacker1, navigators);
if(lexical === 0) console.log("What?: You both have same name?");
if(lexical === -1) console.log("Yo, the navigator goes first definitely.");
if(lexical === 1) console.log("The driver's name goes first.");

function lex(str1, str2) {
    for(let i = 0; i < str.length; i++) {
        if(str1.charAt(i) > str2.charAt(i)) return 1;
        if(str1.charAt(i) === str2.charAt(i)) return 0;
    }
    return -1;
}


