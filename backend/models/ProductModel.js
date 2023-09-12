import mongoose from "mongoose"
// creating the model of the dtabase 
const mySchema = new mongoose.Schema({
    id:{
        type:String,
        unique:true
    },
    url:String,
    detailUrl:String,
    title:Object,
    price:Object,
    quantity:Number,
    description:String,
    discount:String,
    tagline:String,

}
    )


// defining the model 

  const MyModel = new mongoose.model("MyModel",mySchema)
    export default MyModel