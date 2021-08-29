'use strict';

const express = require('express');

// FLAG = CTF{de71c185bcc37c8b169f7bb4c1c0bd3c7fe041110ae4d176434d396c2de52121}

// Constants
const PORT = 1234;
const HOST = '0.0.0.0';

// App
const app = express();


app.get('/', (req, res) => {
    app.use(express.static("public"));
    res.sendFile('/home/ctf/index.html');

});


app.get('/multiply', (req, res) => {
    if(req.query.a == null || req.query.b == null ){
        res.status(200);
        res.json({
            result: ("Missing a,b!!")
        });
        return;
    }
    res.setHeader("Content-Type", "application/json");
    res.status(200);
    res.json({
        result: (req.query.a * req.query.b)
    });
});
app.get('/sqrt', (req, res) => {
    if(req.query.a == null || req.query.b == null ){
        res.status(200);
        res.json({
            result: ("Missing a,b!!")
        });
        return;
    }
    res.setHeader("Content-Type", "application/json");
    res.status(200);
    res.json({
        result: (Math.sqrt(req.query.a))
    });
});

app.get('/mod', (req, res) => {
    if(req.query.a == null || req.query.b == null ){
        res.status(200);
        res.json({
            result: ("Missing a,b!!")
        });
        return;
    }
    res.setHeader("Content-Type", "application/json");
    res.status(200);
    res.json({
        result: (req.query.a % req.query.b)
    });
});

app.get('/div', (req, res) => {
    if(req.query.a == null || req.query.b == null ){
        res.status(200);
        res.json({
            result: ("Missing a,b!!")
        });
        return;
    }
    res.setHeader("Content-Type", "application/json");
    res.status(200);
    res.json({
        result: (req.query.a / req.query.b)
    });

});

app.get('/sum', (req, res) => {
    const vm = require("vm");
    // exit remove
    if(req.query.a == null || req.query.b == null ){
        res.status(200);
        res.json({
            result: ("Missing a,b!!")
        });
        return;
    }
    console.log(req.query.a);

    var result = 0, code = "var add = function(a,b){return a + b;}; result = add("+req.query.a+",two);";

    if( req.query.a.includes("exit()")){
        res.status(200);
        res.json({
            result: ("You Bastard!")
    });
    }
    else if (req.query.a.includes(".execSync(")){
        res.status(200);
        res.json({
            result: ("You Better Try Harder Than This!")
    });
    }
    else{
        try {
            result = vm.runInNewContext(code,{two:req.query.b,result:result});
        } catch(e) {
            res.status(500);
            res.json({
             msg: e.toString(),
             stack: e.stack
            });

            return;
        }

    }

    res.status(200);
    res.json({
        result: (result)
        });
    });

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);