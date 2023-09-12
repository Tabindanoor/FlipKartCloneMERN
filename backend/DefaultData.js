import  MyModel  from './models/ProductModel.js';
import {products} from "./constants/data.js"

  const DefaultData = async()=>{
     await  MyModel.deleteMany({})
     console.log("myProduts",products)
    await MyModel.insertMany(products)
    console.log("data added successfully")
}

export default DefaultData