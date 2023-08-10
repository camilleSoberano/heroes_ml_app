const asyncHandler = require('express-async-handler')
const Hero = require('../models/heroModel')


const getHeroes = asyncHandler(async(req, res) => {
    const heroes = await Hero.find()
    res.status(200).json(heroes)
})

const setHero = asyncHandler(async(req, res) => {
    const {name, role, img, quote} = req.body;
    if(!name || !role || !img || !quote){
        res.status(400)
        throw new Error('Add required fields')
    }

    const hero = await Hero.create({
        name:name,
        role:role,
        img:img,
        quote:quote

    })
    res.status(200).json(hero)
})

const updateHero = asyncHandler(async(req, res) => {
    const hero = await Hero.findById(req.params.id);
    if(!hero){
        res.status(400)
        throw new Error('Hero not found!')
    }
    const updatedHero = await Hero.findByIdAndUpdate(req.params.id, req.body, {
        new:true
    })
    res.status(200).json(updatedHero)
})

const deleteHero = asyncHandler(async(req, res) => {
    const hero = await Hero.findById(req.params.id);
    if(!hero){
        res.status(400)
        throw new Error('Hero not found!')
    }

    await hero.remove();
    res.status(200).json({id:req.params.id})
})

module.exports = {
    getHeroes, setHero, updateHero, deleteHero
}