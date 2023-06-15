const fs = require('fs');
const index = fs.readFileSync('index.html','utf-8');
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
const products = data.products;

const epxress = require('express');
const morgan = require('morgan');
const server = epxress();


//bodyParser
server.use(epxress.json());
// server.use(express.urlencoded());

server.use(morgan('dev'));
server.use(epxress.static('public'));







// API - Endpoint - Route

// Products
// API ROOT , base URL, example google.com/api/v2/

// C R U D

// Create POST products

server.post('/products',(req,res)=>{
    console.log(req.body);
    products.push(req.body);
    res.json(req.body);
});

//Read GET /products

server.get('/products',(req,res)=>{
    res.json(products);
});

//Read GET /products/:id

server.get('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const product = products.find(p=>p.id);
    res.json(product);
});

//Update PUT /products/:id

server.put('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id);
    products.splice(productIndex,1,{...req.body, id:id});
    res.json(201).json();
});

// Update PATCH /products/:id

server.patch('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id);
    const product = products[productIndex];
    products.splice(productIndex,1,{...product,...req.body});
    res.json(201).json();
});

// Delete DELETE /products/:id

server.delete ('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id);
    const product = products[productIndex];
    products.splice(productIndex,1);
    res.json(201).json(product);
});










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




