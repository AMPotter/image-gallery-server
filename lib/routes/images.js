const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Image = require('../models/image');

router
    .get('/', (req, res, next) => {
        Image.find()
            .then(stevens => res.send(stevens))
            .catch(next);
    })
    .get('/:id', (req, res, next) => {
        Image.findById(req.params.id)
            .then(steven => res.send(steven))
            .catch(next);
    })
    .post('/', bodyParser, (req, res, next) => {
        new Image(req.body).save()
            .then(saved => res.send(saved))
            .catch(next);
    })
    .delete('/:id', (req, res, next) => {
        Image.findByIdAndRemove(req.params.id)
            .then(deleted => res.send(deleted))
            .catch(next);
    });

module.exports = router;