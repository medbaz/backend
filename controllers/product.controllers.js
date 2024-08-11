const express = require('express');
const Product = require('../product.model.js')

const getProducts = async (req,res)=>{
    try {
      const products = await Product.find({})
      res.status(200).json(products)
    } catch (error) {
      res.status(500).json({message:error.message})
    }
  }


  const getProduct = async (req,res)=>{
    try {
        const {id} = req.params ;
        const products = await Product.findById(id)
        res.status(200).json(products)
      } catch (error) {
        res.status(500).json({message:error.message})
      }
  }


  const postProduct = async (req, res)=> {
    try {
      
      const product = await Product.create(req.body)
      res.status(200).json(product)
    } catch (error) {
      res.status(500).json({message:error.message})
    }
  }


  const deleteProduct = async (req, res)=> {
    try {
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id)
        if (!product) {
          return res.status(404).json({message:"product not found"})
          
        }
        res.status(200).json({message:"deleted succussfuly"})
    
      } catch (error) {
        res.status(500).json({message:error.message})
      }
    
  }


  
  const updatetProduct = async (req,res) => {

    try {
      const {id} = req.params;
      const products = await Product.findByIdAndUpdate(id,req.body)
      
      const updatedProduct = await Product.findById(id)
      res.status(200).json(updatedProduct)
      
    } catch (error) {
      res.status(500).json({message:error.message})
    }
  
}




  module.exports = {
    getProducts , getProduct , postProduct , deleteProduct ,updatetProduct
  }
