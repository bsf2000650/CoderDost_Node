const fs = require("fs");
const mongoose = require('mongoose');
const model = require("../model/product");
const Product = model.Product;

// Create

exports.createProduct = (req, res) => {
  const product = new Product(req.body);

  product
    .save()
    .then((doc) => {
      console.log({ doc });
    }) 
    .catch((error) => {
      res.status(400).json(error);
    });

    // product.save((err,doc)=>{
    //     console.log({err,doc});
    //     if(err){
    //         res.status(400).json(err);
    //     }
    //     else{
    //         res.status(400).json(doc);
            
    //     }
    // })
};

// Read

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

exports.getProduct = async (req, res) => {
  const id = req.params.id;
  const products = await Product.findById(id);
  res.json(products);
};


// Update

exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  try{
  const doc = await Product.findOneAndReplace({_id:id},req.body,{new:true});
  res.json(doc);
}
catch(err){
    console.log(err);
    res.status(400).json(err);
}
}



exports.updateProduct = async (req, res) => {
    {
        const id = req.params.id;
        try{
        const doc = await Product.findOneAndUpdate({_id:id},req.body,{new:true});
        res.json(doc);
      }
      catch(err){
          console.log(err);
          res.status(400).json(err);
      }
      };
    }


//Delete

exports.deleteProduct = async (req, res) => {
  {
        const id = req.params.id;
        try{
        const doc = await Product.findOneAndDelete({_id:id},req.body);
        res.json(doc);
      }
      catch(err){
          console.log(err);
          res.status(400).json(err);
      }
      }
};
