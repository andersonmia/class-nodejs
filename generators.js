function* range(start,end){
    while(start<end){
        yield start;
        start += 1;
    }
}

for(let i of range(0,10)){
    console.log(i);
}