const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoModel = require('./Server/Model/Todo');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://cnawkar19:eKrc13oL6L21fY7z@mydatabase.ao4wrdn.mongodb.net/todo')

app.get('/get', (req, res) => {
    TodoModel.find() 
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.put('/edit/:id', (req, res) => {    
    const { id } = req.params;
    TodoModel.findByIdAndUpdate({_id: id}, { done: true })
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    TodoModel.findByIdAndDelete({_id: id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/insert', (req , res ) => {
    const task = req.body.task;
    TodoModel.create({
        task: task
        }).then(result => res.json(result))
        .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log('Server is running...');
})