const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const livrosSchema = new Schema({ 
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
        },
        nome: {
            type: String,
            unique: true,
            required: true
            },
        autor: {
            type: Number,
            required: true
        },        
        resenha: {
            type: String,
        },
        lido: {
            type: Boolean,
            required: true
        }


        
})

const livrosCollection = mongoose.model('Livro', livrosSchema)
module.exports = livrosCollection