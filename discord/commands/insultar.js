const Insulto = require('../../model/insulto')


insultar = {
    name: 'insultar',
    description: 'Insulta a alguien',
    execute(msg) {
        Insulto.find({}, (err, insultos) => {
            let insulto = insultos[Math.random() * insultos.length | 0];
            return msg.channel.send(insulto.contenido);
        })
    }
}

module.exports = insultar;