const mongoose = require('mongoose');

// Definición del esquema de nuestra colección
let contactoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre del contacto es obligatorio'],
        minlength: [3, 'El nombre del contacto es demasiado corto'],
        trim: true
    },
    telefono: {
        type: String,
        required: [true, 'El número de teléfono es obligatorio'],
        unique: true,
        trim: true,
        match: [/^\d{9}$/, 'El teléfono debe constar de 9 dígitos']
    },
    edad: {
        type: Number,
        min: [18, 'La edad mínima debe ser 18'],
        max: [120, 'La edad máxima debe ser 120']
    }
});

// Asociación con el modelo (colección contactos)
let Contacto = mongoose.model('contacto', contactoSchema);

module.exports = Contacto;