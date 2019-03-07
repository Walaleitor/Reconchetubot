const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
let Schema = mongoose.Schema;


let insultoSchema = new Schema({
    contenido: {
        type: String,
        unique: true,
        required: [true, 'El contenido es obligatorio']
    },
    estado: {
        type: Boolean,
        default: true
    },
    repeticiones: {
        type: Number,
        default: 0,
    }

})

module.exports = mongoose.model('Insulto', insultoSchema);