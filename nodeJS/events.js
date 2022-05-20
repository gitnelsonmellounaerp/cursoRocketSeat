const events = require('events');
console.log(events);

const { EventEmitter } = require('events');
const ev = new EventEmitter();

ev.on('testeLALALA', () => {
    console.log('escuto')
});

ev.emit('testeLALALA');