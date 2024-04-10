const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
    nombre: String,
    mensaje: String,
    socketId: String
}, { versionKey: false, timestamps: true });

module.exports = model('message', messageSchema);