const express = require('express');
const mongoose = require('mongoose');
const Product = require('./product.model.js')
const productRouter = require('./routes/product.routs.js')


const app = express()
try {
  app.use(express.json())
} catch (error) {
  console.log("Data received is invalid ");
  
}

app.use('/api/products',productRouter)


app.get('/', function (req, res) {
  res.send('Hello you will make it')
})




// app.post('/api/products', async (req, res)=> {
//   try {
    
//     const product = await Product.create(req.body)
//     res.status(200).json(product)
//   } catch (error) {
//     res.status(500).json({message:error.message})
//   }
// })

// app.get('/api/products',async (req,res)=>{
//   try {
//     const products = await Product.find({})
//     res.status(200).json(products)
//   } catch (error) {
//     res.status(500).json({message:error.message})
//   }
// })

// app.get('/api/products/:id',async (req,res)=>{
//   try {
//     const {id} = req.params ;
//     const products = await Product.findById(id)
//     res.status(200).json(products)
//   } catch (error) {
//     res.status(500).json({message:error.message})
//   }
// })




// app.delete('/api/products/:id',async (req,res) => {
//   try {
//     const {id} = req.params
//     const product = await Product.findByIdAndDelete(id)
//     if (!product) {
//       return res.status(404).json({message:"product not found"})
      
//     }
//     res.status(200).json({message:"deleted succussfuly"})

//   } catch (error) {
//     res.status(500).json({message:error.message})
//   }
// })










// app.put('/api/products/:id',async (req,res) => {

//     try {
//       const {id} = req.params;
//       const products = await Product.findByIdAndUpdate(id,req.body)
      
//       const updatedProduct = await Product.findById(id)
//       res.status(200).json(updatedProduct)
      
//     } catch (error) {
//       res.status(500).json({message:error.message})
//     }
  
// })



mongoose.connect('mongodb+srv://mohamedbazber:EvNbzufMFc2kL4K9@backenddb.7wghg.mongodb.net/API-DB?retryWrites=true&w=majority&appName=backendDB')
  .then(() => {console.log('Connected!') ;

  app.listen(3000); }).catch(()=>{
    console.log("failed");
    
  });