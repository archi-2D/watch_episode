const uploadFile = () => {

    const content = readFileSync(resolve('./test.mp3'), 'base64');

    const objBuffer = new Buffer(content, 'base64');
    console.log(objBuffer);
    const query = 'INSERT INTO local_ksp.filestore (object_id,chunk_id,data) VALUES(?,?,?);';
    const params = ["100", "1", objBuffer];
    db.execute(query, params, (err, result) => {
        if (!err) {
            console.log('Uploaded;')
            res.json({ 'status': 'uploaded !' });
        } else {
            console.log(err)
            res.json({ 'status': 'Error uploading file !!' });
        }
    })
}

module.exports = uploadFile