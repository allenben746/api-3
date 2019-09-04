const express = require('express');
const router = express.Router();
router.use(express.json());

router.get('/', (req, res) => {
    res.send('Get to /clients/');
})

router.get('/:name', (req, res) => {
    const { name } = req.params;
    res.send(`Get to /clients/${name}`);
})

module.exports = router;