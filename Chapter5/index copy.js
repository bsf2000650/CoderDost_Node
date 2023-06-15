const express = require('express');
const morgan = require('morgan');
const server = express();
const productRouter = require('./routes/products');
const userRouter = require('./routes/user');


//bodyParser
server.use(express.json());
server.use(morgan('dev'));
server.use(express.static('public'));
server.use('/products',productRouter.routes);
server.use('/users',userRouter.routes)

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










server.listen(8080,()=>{
    console.log('server started');
});




