const express = require('express');

const cors = require('cors');

const path = require('path');

const router = require('./src/routes')

const { json, urlencoded } = express;

const app = express();


const port = process.env.PORT || 8069;

const corsOptions = {
    origin: '*',
    optionsSucessStatus: 200
}

app.use(cors(corsOptions));
app.use(router);
app.use(json());
app.use(urlencoded({extended:false}));
app.use('/', (req, res)=> {
    res.send("this is the default path")
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
