const Router = require('express');
const router = new Router();

const { waist, back, cardio, chest, neck, shoulders } = require('../models/models');

router.get('/waist', async function (req, res) {
    const waists = await waist.findAll();
    return res.json(waists);
});

router.get('/shoulders', async function (req, res) {
    const data = await shoulders.findAll();
    return res.json(data);
});

router.get('/neck', async function (req, res) {
    const necks = await neck.findAll();
    return res.json(necks);
});

router.get('/chest', async function (req, res) {
    const chests = await chest.findAll();
    return res.json(chests);
});

router.get('/cardio', async function (req, res) {
    const cardios = await cardio.findAll();
    return res.json(cardios);
});

router.get('/back', async function (req, res) {
    const backs = await back.findAll();
    return res.json(backs);
});

module.exports = router;