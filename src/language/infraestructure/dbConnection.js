const fs = require('fs');
let cassandra = require('cassandra-driver');
const { Module, builtinModules } = require('module');

const keyspace = "watch_episode";
let contactPoints = ['localhost'];
let client = new cassandra.Client({
    contactPoints: contactPoints,
    keyspace: keyspace,
    localDataCenter: 'datacenter1'
});

// const content = fs.readFileSync('./test.mp3', 'base64');
// const objBuffer = new Buffer.from(content, 'base64');
// const params = [objBuffer];

const insertData = ({ id, current_language, current_subtitle, current_time, languages, reports, season, serie, subtitles }, params) => {
    const query = `INSERT INTO test_file (id, serie) VALUES (1 , ?)`;
    client.execute(query, function (error, result) {
        if (error != undefined) {
            console.log('Error:', error);
        } else {
            console.table(result.rows);
        }
    });
}

const selectAllData = async () => {
    const query = `SELECT * from episodes;`;
    try {
        const res = await client.execute(query);
        return res.rows;
    } catch (e) {
        console.log(e);
        return e;
    }
}

const deleteAllData = () => {
    const query = `TRUNCATE episodes;`;
    client.execute(query, function (error, result) {
        if (error != undefined) {
            console.log('Error:', error);
        } else {
            console.table(result.rows);
        }
    });
}

module.exports = {
    deleteAllData,
    selectAllData,
    insertData
};


