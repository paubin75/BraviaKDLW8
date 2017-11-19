var express = require('express');
var router = express.Router();
const BraviaRemoteControl = require('sony-bravia-tv-remote-v2');
const remote = new BraviaRemoteControl('192.168.0.16', 80, '0000');
const networkRemote = new BraviaRemoteControl('externaldomain.com', 44444, '0000');


router.get('/:action', function(req, res, next) {
    remote.sendAction(req.params.action);
});


router.get('/chaine/:nom', function(req, res, next) {
    switch (req.params.nom){
        case "TF1":
        remote.sendAction("Num1");
        break;
        case "FRANCE2":
        remote.sendAction("Num2");
        break;
        case "FRANCE3":
        remote.sendAction("Num3");
        break;
        case "CANAL":
        remote.sendAction("Num4");
        break;
        case "FRANCE5":
        remote.sendAction("Num5");
        break;
        case "M6":
        remote.sendAction("Num6");
        break;
        case "C8":
        remote.sendAction("Num8");
        break;
        case "W9":
        remote.sendAction("Num9");
        break;
        case "NT1":
        remote.sendAction("Num1");
        setTimeout(function(){
            remote.sendAction("Num1");
          }, 500);
        break;
        case "TMC":
        remote.sendAction("Num1");
        setTimeout(function(){
            remote.sendAction("Num0");
          }, 500);
        break;
        case "FRANCE4":
        remote.sendAction("Num1");
        setTimeout(function(){
            remote.sendAction("Num4");
          }, 500);
        break;
    };
});

module.exports = router;
