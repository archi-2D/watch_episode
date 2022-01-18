console.log("LO QUE QUIERA")
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


// NEW STUFF

var models = require('express-cassandra');

//Tell express-cassandra to use the models-directory, and
//use bind() to load the models using cassandra configurations.
models.setDirectory( __dirname + '/src/models').bind(
    {
        clientOptions: {
            // contactPoints: ['127.0.0.1'],
            contactPoints: [process.env.TEST],
            localDataCenter: 'dc1',
            protocolOptions: { port: 9043 },
            keyspace: 'mykeyspace3',
            queryOptions: {consistency: models.consistencies.one},
            socketOptions: { readTimeout: 60000 },
        },
        ormOptions: {
            defaultReplicationStrategy : {
                class: 'SimpleStrategy',
                replication_factor: 1
            },
            migration: 'safe'
        }
    },
    function(err) {
        console.log("Error aca: ",err)
        if(err) throw err;

        // You'll now have a `person` table in cassandra created against the model
        // schema you've defined earlier and you can now access the model instance
        // in `models.instance.Person` object containing supported orm operations.
    }
);
