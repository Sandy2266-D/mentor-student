const express=require('express')
const app=express()

app.use(express.json())
const mentor=[
    {"id":1,"name":"Sandy"},
    {"id":2,"name":"Ganesh"}
]

app.get('/mentor',(req,res)=>
{
    res.send({mentor})
})

app.post('/mentor',(req,res)=>
{
    
 const student= [{
     id:mentor.length + 1,
     name:req.body.name
 }] 
 mentor.push(student)
 if(mentor)
 {
 return res.send(student)
 }
 else{
     return res.send("Not in the list")
 }

})

app.put('/mentor/:id',(req,res)=>
{
const mentors=mentor.find(c=>c.id === parseInt(req.params.id))
return res.send(mentors)
})

// app.get('/mentors',(req,res)=>{
//     return res.send({mentors})
// })

// app.post('/mentor',(req,res)=>
// {
// if(!mentor)
// return res.send(mentor)
// })

//port
const port =process.env.PORT || 5000
app.listen(port,()=>
console.log('server listening'))