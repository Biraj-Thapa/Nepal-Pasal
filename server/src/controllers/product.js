const Product = require("../models/product")

  const addNewProduct = async (req,res)=>{
   await Product.create(req.body)
  return res.json({
      msg: 'Product Added!'
    })
  }


  const getAllProducts = async (req,res)=>{
   const productList =  await Product.find()
   return res.json(productList)
   }
  
   const deleteProductById = async (req,res)=>{
    const productList =  await Product.findByIdAndDelete(req.params.id)
    return res.json(productList)
    }
   

   const getProductDetailsById = async (req,res)=>{
    try{
      const productList =  await Product.findById(req.params.id)
       res.json(productList)
    }catch(err){

      return res.json({
        msg: "unable to fetch"
      })
    }
 
    }
   
  module.exports = { addNewProduct,getAllProducts,deleteProductById,getProductDetailsById}