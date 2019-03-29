const router = require('express').Router();

const db = require('../data/dbConfig.js');

router.get('/', (req, res) => {
    db('actions')
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(err => {
            res.status(500).json(err)
        });
});

module.exports = router;