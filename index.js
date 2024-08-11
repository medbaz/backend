const express = require('express');
const mongoose = require('mongoose');
const Product = require('./product.model.js')
const productRouter = require('./routes/product.routs.js')


const app = express()
try {
  app.use(express.json())
  app.use(express.urlencoded({extended:false}))
} catch (error) {
  console.log("Data received is invalid ");
  
}

app.use('/api/products',productRouter)


app.get('/', function (req, res) {
  res.send('Hello you will make it')
})




mongoose.connect('mongodb+srv://mohamedbazber:EvNbzufMFc2kL4K9@backenddb.7wghg.mongodb.net/API-DB?retryWrites=true&w=majority&appName=backendDB')
  .then(() => {console.log('Connected!') ;

  app.listen(3000); }).catch(()=>{
    console.log("failed");
    
  });