const express = require('express');

const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
    res.send('Get to /products/');
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Get to /products/${id}`);
})

module.exports = router;