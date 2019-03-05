const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
let Schema = mongoose.Schema;

let insultoSchema = new Schema({
    contenido: {
        type: String,
        unique: true,
        required: [true, 'El contenido es obligatorio']
    }
})

module.exports = mongoose.model('Insulto', insultoSchema);