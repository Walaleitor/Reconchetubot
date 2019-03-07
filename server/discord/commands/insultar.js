const Insulto = require('../../model/insulto')

insultar = {
    name: 'insultar',
    description: 'Insulta a alguien',
    execute(msg) {
        Insulto.find({}, (err, insultos) => {

            let insulto = insultos[Math.random() * insultos.length | 0];
            insulto.repeticiones += 1;
            insulto.save();
            return msg.channel.send(insulto.contenido, {
                tts: true
            });
        })
    }
}

module.exports = insultar;