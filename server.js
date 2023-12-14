const express = require("express")
const app = express();
const PORT= process.env.PORT || 3500//http://localhost:3500


app.use(express.json())

app.get("/", (req, res) => {
    res.send("Get Request!");
  });  
app.post("/", (req, res) => {
    const data = req.body;
    console.log(data);

    res.send("Request Post, 이름: "+data.name+"\n 나이: "+data.age);
  }); 
app.patch("/", (req, res) => {
    const data = req.body;
    console.log(data);

    res.send("Request Patch, 이름: "+data.name+"\n 나이: "+data.age);x``
  }); 


app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`))