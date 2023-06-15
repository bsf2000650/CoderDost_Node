require('dotenv').config();
const morgan = require('morgan');

const express = require('express');
const mongoose = require('mongoose');
const server = express();
const cors = require('cors');
const path = require('path');

const {Schema} = mongoose;
const productRouter = require('./routes/products');
const userRouter = require('./routes/user');
console.log(process.env.DB_PASSWORD);

// db connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log('database connected')
}

// Schema




//bodyParser
server.use(cors());
server.use(express.json());
server.use(morgan('dev'));
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)));
server.use('/products',productRouter.routes);
server.use('/users',userRouter.routes);
server.use(
  express.urlencoded({ extended: true })
);
  
server.use(express.json());
server.use("*",(req,res)=>{
  res.sendFile(path.resolve(__dirname,'build','index.html'))
})

// MVC = model-view-controller


// server.get('/',(req,res)=>{
//     res.json({type : 'GET'});
// })



// server.put('/',(req,res)=>{
//     res.json({type : 'PUT'});
// })

// server.delete('/',(req,res)=>{
//     res.json({type : 'DELETE'});
// })

// server.patch('/',(req,res)=>{
//     res.json({type : 'PATCH'});
// })








// server.get('/demo',(req,res)=>{
// //     res.status(201);
//     // res.json(products);
//     // res.send('<h1>Hello</h1>');
//     // res.sendFile('C:\Users\BISMILLAH COMPUTERS\Desktop\Back End\Back End Coder Dost\index.html');
// })










server.listen(process.env.PORT,()=>{
    console.log('server started --------------------------------------------------------------');
    console.log(`listening on ${process.env.PORT}`)
});




