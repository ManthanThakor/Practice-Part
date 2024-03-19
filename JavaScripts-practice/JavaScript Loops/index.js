console.log("I am a tutorial on Loops")

let a = 1;
// console.log(a)
// console.log(a+1)
// console.log(a+2)
// -------------for -----------------

for (let i = 0; i < 100; i++) { 
    console.log(a + i); 
}

let obj = {
    name: "Harry",
    role: "Programmer",
    company: "CodeWithHarry AI"
}
 // -------------for in-----------------

for (const key in obj) {  
        console.log(key)
}
// -----------for of-------------------

for (const c of "Harry") {
    console.log(c)
}
// ------------while------------------

let i = 0;
while (i<60000) {
    console.log(i)
    i++;
}
// ----------do wile (not more usable)--------------------
let im = 10;
do {
    console.log(im)
    i++;
} while (im<6);
