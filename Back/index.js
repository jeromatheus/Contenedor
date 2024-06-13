const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const BlogModel = require('./Models/Blog')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/blog')

app.get('/get',(req, res) => {
    BlogModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/add', (req, res) => {
    const { campo, dato } = req.body; 
    BlogModel.create({
        campo: campo,
        dato: dato
    })
    .then(result => res.json(result))
    .catch(err => res.status(500).json(err));
})

app.put('/update/:id', (req, res) => {
    const { id, valor } = req.params;
    BlogModel.findByIdAndUpdate({id:id}, {valor:valor})
    .then(result => res.json(result))
    .catch(err => res.status(500).json(err));
})

app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    BlogModel.findByIdAndDelete(id)
    .then(result => res.json(result))
    .catch(err => res.status(500).json(err));
});

app.listen(3001, () => {
    console.log('Server is running')
})