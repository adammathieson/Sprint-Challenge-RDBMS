const router = require('express').Router();

const db = require('../data/dbConfig.js');

router.get('/', (req, res) => {
    db('projects')
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json(err)
        });
});

router.get('/:id', (req, res) => {
    const {
        id
    } = req.params;
    db('projects')
        .where({
            id
        })
        .first()
        .then(project => {
            if (!project) {
                return res.status(400).json({
                    message: 'No record exists.'
                })
            }
            db('actions')
                .where({
                    project_id: project.id
                })
                .then(action => {
                    project.actions = action
                    res.status(200).json(project)
                })

        })
        .catch(err => {
            res.status(500).json(err)
        });
});

router.post('/', (req, res) => {
    const {
        project_name,
        project_description
    } = req.body;
    if (!project_name || !project_description) {
        return res.status(400).json({
            errorMessage: 'Please provide a name and description for the project.'
        })
    }
    db('projects')
        .insert({
            project_name,
            project_description
        })
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            res.status(500).json({
                error: 'Project could not be saved to database.'
            })
        });
});
module.exports = router;