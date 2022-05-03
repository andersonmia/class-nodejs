setTimeout(()=>{
    console.log("The result when let is used\n");
},1000);

for(let i = 0; i <= 4; i++){    
    setTimeout(()=>{        
        console.log(i);
    },1000);
}

setTimeout(()=>{
    console.log("\nThe result when var is used\n");
},1000);

/*var will increment the i all the way to 5 before the time expires */
for(var i = 0; i <= 4; i++){
    setTimeout(()=>{
        console.log(i);
    },1000);
}