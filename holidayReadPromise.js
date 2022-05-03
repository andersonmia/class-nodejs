let fs = require ('fs');
let util = require('util');
let promise = new Promise((resolve,reject) => {
    fs.readFile('holiday.txt',(err,data) =>{
        if(err){
            reject(err);
        }else{
            resolve(data);
        }
    });
})
.then(data => {
    console.log(data.toString());
})
.catch(err => {
    console.log(err);
});

/* A shortcut for the above code can be */

let read = util.promisify(fs.readFile);
read('holiday.txt')
.then(data => {
    console.log(data.toString());
})
.catch(err => {
    console.log(err);
});