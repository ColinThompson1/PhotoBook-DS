const express = require('express');
const router = express.Router();
import backend from '../sharedb'
const uuidv4 = require('uuid/v4');
const connection = backend.connect();

//generate a doc with a unique uuid
router.post('', function (req, res) {
    const id = uuidv4();
    const doc = connection.get('doc', id);

    console.log('Creating doc with id: ' + id);
    doc.create(req.body, 'json1', {}, (err) => {
        if (err) throw err;
        console.log('Successfully created document');
        let resData = {
            id: id
        };
        res.send(resData);
    });
});

module.exports = router;
