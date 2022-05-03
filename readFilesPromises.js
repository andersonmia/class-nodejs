let fs = require('fs');
let util = require('util');

let read = util.promisify(fs.readFile);
Promise.all([
    read('holiday.txt'),
    read('TestFile.txt'),
    read('write.txt'),
])
.then(data => {
    const [ holiday,TestFile,write ] = data;
    console.log(TestFile.toString());
    console.log(holiday.toString());    
    console.log(write.toString());
})