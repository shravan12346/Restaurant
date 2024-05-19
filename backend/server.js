import app from './app.js'
app.listen(process.env.PORT,()=>{
    console.log("server is running");
})
app.get('/', (req, res) => {
    res.send("GET Request Called")
    })