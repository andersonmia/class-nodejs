/* This is to check whart happens 
when there are more than one async functions */

let fs = require ('fs');

for(i = 0; i < 10; i++){
fs.readFile('holiday.txt',(err,data)=>{
    console.log(data.toString());
});
}

console.log("Done");