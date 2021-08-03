import express from 'express';

export var router = express.Router();

router.get('/', (req, res) => {
    res.send('TODO: Landing page');
});


