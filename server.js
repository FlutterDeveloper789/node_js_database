const exp=require("express");
const app=exp();

app.use(exp.json());
const students = [{"name":"Arbind","email":"arbind@gmail.com"}]
app.get("/users",(req,res)=>{
    res.status(200).json({
        "message":"user data geting"
    });
})

app.post("/userRegister",(req,res)=>{
    const {name,email}= req.body;
    const stu = {"name":name,"email":email}
    students.push(stu);
    res.status(201).json({"message":"Student inserted successfully"});
});

app.put("/put_data/:id",(req,res)=>{
    const id=req.params.id;
    const name=req.body.name;
    res.status(200).json({"name":name,"id":id});
});

app.delete("/delete_data",(req,res)=>{
    // const {name,eamil}=req.body;
    // const stu = {"name":name,"email":eamil}
    res.status(200).json({"id":1,"message":"delete data"});
})


app.listen(2000,()=>{
    console.log("Arbind Kimar");
})