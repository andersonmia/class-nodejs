var fs = require('fs');

//async writing
fs.writeFile('asyncWrite.txt','Asynchronous file writing', (err,data) => {
    if(err){
        throw err;
    }else{
        console.log('Async writing complete');
    }
});

//sync writing
fs.writeFileSync('syncWrite.txt','Synchronous file writing');

