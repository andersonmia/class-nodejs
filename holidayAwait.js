function a(){
    return Promise.resolve("I am a promise!");
}

async function c(){
    return "I am a promise because of async keyword!";
}

console.log(a());
console.log(c());
console.log("********** NEXT *********");

/* Both functions return promises.
This shows that the Async keyword returns a promise */

let fs = require('fs');
let util = require('util');
let read = util.promisify(fs.readFile)

/* Using await */

let run = async () => {    
    const data = await read('holiday.txt');
    console.log(data.toString());
    console.log("********** NEXT *********");
};
run();

/* Using promises */

let runn = async () => {
    read('TestFile.txt')
    .then(data => {
        console.log(data.toString());
        console.log("********** NEXT *********");
    });
};
runn();

/* async when using promises to read multiple files */

let runmany = async () =>{
    Promise.all([
        read('write.txt'),
        read('holiday.txt'),
        read('TestFile.txt')
    ])
    .then(data => {
        const[ write,holiday,TestFile ] = data;
        console.log(write.toString());
        console.log(holiday.toString());
        console.log(TestFile.toString());
        console.log("********** NEXT *********");
    });
};
runmany();


/* async when using await to read multiple files */

let runnmany = async () => {
    const [ write,holiday,TestFile] = await Promise.all([
        read('write.txt'),
        read('holiday.txt'),
        read('TestFile.txt')
    ]);
    console.log(write.toString());
    console.log(holiday.toString());
    console.log(TestFile.toString());
    console.log("********** NEXT *********");
};
runnmany();

/* .then in promises == try{} in async/await then .catch == catch{} */