const express = require('express');
const router = express.Router();
const {getHeroes, setHero, updateHero, deleteHero} = require('../controllers/heroController')

router.route('/').get(getHeroes).post(setHero);
router.route('/:id').delete(deleteHero).put(updateHero)


module.exports = router;


