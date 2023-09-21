import express from "express";
const Router = express.Router();
import Usermodel from "../models/UserModel.js";
import { products } from "../constants/data.js";
import MyModel from "../models/ProductModel.js";

Router.post('/signup',async(req,res)=>{

    const body = req.body;  
    const exist = await Usermodel.findOne({username:req.body.username})
        if(exist) {
            return res.status(409).json({"message":"user already exists"})
        }
    const newUser = new Usermodel(body)
    try{
        await newUser.save()  
        res.status(200).json({user:newUser});
    }
    catch(err){{
        console.log(err.message,'error in signup')
    }}
})


Router.post("/signin",async(request,res)=>{
    console.log(request.body)
    try{
    const email = request.body.email;
    const password = request.body.password;
    console.log(email,password)
    const user =await Usermodel.findOne({email:email, password:password})
    if(user){
        return res.status(200).json({user})
    }
    else{
   return res.status(401).json({message:"invalid user"})
    }}
catch(err)
    {   console.log("error in signin")
        return err.message    
    }
})

// get the products from the product model
Router.get("/products",async (req, res)=>{
    try{
        const data = await MyModel.find({})
        // console.log(data, "mydata ")
        res.status(200).send(data);
        
    }
    catch(err){
        console.log(err,"error occurs here")
        res.status(500).send(err.message);
    }
})


// Router.get("/products/:id",async(req,res)=>{
//    try{
//     const id = req.params.id;
//     const data=  await MyModel.findOne({"id":id})
//     res.status(200).json(data)
//    }
//    catch(err){
//   res.status(500).send(err.message);

//    }
// })


Router.get("/products/:id", async(req,res)=>{
    const {id} = req.params;
    try{
        const data = await MyModel.findOne({id: id})
        // console.log(data, "data of model ")
        res.status(200).json(data)
    }
    catch(error){
        res.status(404).json(error.message)
    }
})


export default Router
