let fs = require('fs');

fs.readFile('holiday.txt',(error,data)=>{
    console.log(data.toString());
});

console.log("Done");