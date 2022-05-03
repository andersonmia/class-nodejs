var fs = require('fs');

//asynchronous reading
fs.readFile('TestFile.txt','utf8', (err,data) => {
    if(err){
        throw err;
    }else{
        console.log('\nAsync: ' + data + '\n');
    }
});

//synchronous reading
let readMe = fs.readFileSync('TestFile.txt','utf8');
console.log('\nSync: ' + readMe + '\n');
console.log("\nI will appear BEFORE the asynchronous message but AFTER the synchronous message\n");
