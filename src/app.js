import express from 'express'
const app=express()
const port =3000

app.use("/hello",(req,res)=>{
    res.send("Hello")
})
app.use("/",(req,res)=>{
    res.send("Hello from the server")
})
app.use("/hii",(req,res)=>{
    res.send("Hello World")
})
app.listen(port, ()=>{
    console.log(`http://localhost:${3000}`);
})