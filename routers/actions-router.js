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

router.post('/', (req, res) => {
    const { project_id, description, notes } = req.body;
    if(!project_id || !description) {
        return res.status(400).json({ errorMessage: 'Please provide a project ID and a description.' })
    }

    db('actions')
        .insert({ 
            project_id, 
            description, 
            notes 
        })
        .then(action => {
            res.status(201).json(action)
        })
        .catch(err => {
            res.status(500).json({ error: 'The action could not be saved to database' })
        });
});

module.exports = router;