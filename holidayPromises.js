let promise = new Promise((resolve,reject)=>{
    resolve("GOOD!");
    //reject("BAD!");
})
.then(value =>{
    console.log(value);
})
.catch(err =>{
    console.log(err);
});

/* When you throw an error,
 the value of the reject will be overridden by the thrown error */

let promise2 = new Promise((resolve,reject)=>{
    resolve("EXCELLENT!");
    // reject("POOR!");
})
.then(value =>{
    throw 'GROSS!';
    console.log(value);
})
.catch(err =>{
    console.log(err);
})

Promise.resolve("GENIUS!")
.then(value =>{
    console.log(value);
})
.catch(err =>{
    console.log(err);
});