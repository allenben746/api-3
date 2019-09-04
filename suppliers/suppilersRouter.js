const express = require('express');
const router = express.Router();
router.use(express.json());

router.get('/', (req, res) => {
    res.send('Get to /supplier/');
})

router.get('/:name', (req, res) => {
    const { name } = req.params;
    res.send(`Get to /supplier/${name}`);
})

module.exports = router;