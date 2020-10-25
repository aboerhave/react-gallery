// This is the gallery router file for the Week 10 assignment for Prime Digital Academy, created by Adam Boerhave, 
// 10/22/1010 - 10/25/2020

// requires
const express = require('express');
const router = express.Router();
// Not used anymore now that data is store in db
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');


// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route to increase likes by 1 for pictureId
router.put('/like/:id', (req, res) => {
    const galleryId = req.params.id;
    
    let queryText = `UPDATE "cool_pictures"
    SET "likes" = "likes" + 1 
    WHERE "id" = $1;`;

    pool.query(queryText, [galleryId]).then((respone) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error', error);
        res.sendStatus(500);
    });
}); // END PUT Route

// GET Route to get all previously stored picture data
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

// POST route to post new picture data to database
router.post('/', (req, res) => {
    console.log('req.body', req.body);
    let queryText = `INSERT INTO "cool_pictures" 
    ("path", "description")
    VALUES ($1, $2);`;
    
    pool.query(queryText, [req.body.path, req.body.description]).then((result) => {
        console.log('added to db', req.body);
        res.sendStatus(201);
    }).catch((error) => {
        console.log('error', error);
        res.sendStatus(500);
    });
});

// DELETE route for deleting an item
router.delete('/:id', (req,res) => {
    let queryText = `DELETE FROM "cool_pictures" WHERE "id" = $1;`;

    pool.query(queryText, [req.params.id]).then((result) => {
        console.log('delete request successful');
        res.sendStatus(200);        
    }).catch((error) => {
        console.log('error', error);
        res.sendStatus(500);
    });
});

module.exports = router;