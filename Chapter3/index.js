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


// server.use((req,res,next)=>{
//     console.log(
//         req.method, 
//         req.ip,
//         req.hostname,
//         new Date,
//         req.get('User-Agent'));
//     next();
// })


const auth = (req,res,next)=>{
    console.log(req.query)
    // if(req.body.password=='123'){
        
    //     next();
    // }else{
    //     res.sendStatus(401); 
    // }
    next();
}

// server.use(auth);


// API - Endpoint - Route

server.get('/product/:id',auth,(req,res)=>{
    console.log(req.params);
    res.json({type: 'GET'});
})
server.get('/',auth,(req,res)=>{
    res.json({type : 'GET'});
})

server.post('/',auth,(req,res)=>{
    res.json({type : 'POST'});
})

server.put('/',(req,res)=>{
    res.json({type : 'PUT'});
})

server.delete('/',(req,res)=>{
    res.json({type : 'DELETE'});
})

server.patch('/',(req,res)=>{
    res.json({type : 'PATCH'});
})








server.get('/demo',(req,res)=>{
//     res.status(201);
    // res.json(products);
    // res.send('<h1>Hello</h1>');
    // res.sendFile('C:\Users\BISMILLAH COMPUTERS\Desktop\Back End\Back End Coder Dost\index.html');
})










server.listen(8080,()=>{
    console.log('server started');
});




