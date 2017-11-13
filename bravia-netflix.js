//As module
const BraviaRemoteControl = require('sony-bravia-tv-remote-v2');


// Connect to a local sony tv at 192.168.1.2:80 with the auth key of 0000
const remote = new BraviaRemoteControl('192.168.0.16', 80, '0000');

// Connect to a tv at an external location on port 44444
const networkRemote = new BraviaRemoteControl('externaldomain.com', 44444, '0000');

// Send some single actions (all return promises)
//remote.sendAction('PowerOn'); // turns on
//remote.sendAction('PowerOff'); // turns off
remote.sendAction('Netflix'); // mutes the tv
