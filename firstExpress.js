let express = require('express');
let app = express();
let bodyparser =  require('body-parser');

let districtsList =[
    {id:1,name:'Nyabihu',province:' West'},
    {id:2,name:'Gasabo',province:' Kigali'},
    {id:3,name:'Kamonyi',province:' south'},
    {id:4,name:'Kayonza',province:' East'}
]

app.get('./api/districts',(req,res)=>{res.send(districtsList)})
app.post('./api/provinces',(req,res)=>{
    console.log(req.body);
    districtsList.push(req.body)
    res.status(201);

    res.send(districtsList);
});
app.listen(5000, () => console.log("Listening on port 5000......"))