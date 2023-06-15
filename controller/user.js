const fs = require('fs');
// const index = fs.readFileSync('index.html','utf-8');
const path = require('path');
const data = JSON.parse(fs.readFileSync(path.resolve(__dirname,'data.json','utf-8')));
const users = data.users;

exports.createUser = (req,res)=>{
    console.log(req.body);
    users.push(req.body);
    res.json(req.body);
}

exports.getAllUsers = (req,res)=>{
    res.json(users);
}

exports.getUser = (req,res)=>{
    const id = +req.params.id;
    const user = users.find(p=>p.id);
    res.json(user);
}
exports.replaceUser = (req,res)=>{
    const id = +req.params.id;
    const userIndex = users.findIndex(p=>p.id);
    users.splice(userIndex,1,{...req.body, id:id});
    res.json(201).json();
}
exports.updateUser = (req,res)=>{
    const id = +req.params.id;
    const userIndex = users.findIndex(p=>p.id);
    const user = users[userIndex];
    users.splice(userIndex,1,{...product,...req.body});
    res.json(201).json();
}
exports.deleteUser = (req,res)=>{
    const id = +req.params.id;
    const userIndex = users.findIndex(p=>p.id);
    const user = users[userIndex];
    users.splice(userIndex,1);
    res.json(201).json(user);
}
