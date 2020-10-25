const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');


// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    
    let queryText = `UPDATE "cool_pictures"
    SET "likes" = "likes" + 1 
    WHERE "id" = $1;`;

    pool.query(queryText, [galleryId]).then((respone) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error', error);
        res.sendStatus(500);
    })
    
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM cool_pictures ORDER BY "id"`;
    pool.query(queryText).then((result) => {
        console.log('response from db', result.rows);
        res.send(result.rows);
    }).catch((error) => {
        console.log('error in get request', error);
        res.sendStatus(500);
    });
}); // END GET Route

module.exports = router;