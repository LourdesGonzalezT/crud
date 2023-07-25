const router = require("express").Router()

const Festival = require('./../models/festival.model')

router.get('/getAllFestivals', (req, res, next) => {

    Festival
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.get('/getOneFestival/:festival_id', (req, res, next) => {
    const { festival_id } = req.params

    Festival
        .findById(festival_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.post('/createFestival', (req, res, next) => {

    const { name, music, artistsInvited, date, edition, venue, address, city, webSite, image, contactName, contactPhone, contactEmail, observations } = req.body

    Festival
        .create({ name, music, artistsInvited, date, edition, venue, address, city, webSite, image, contactName, contactPhone, contactEmail, observations })
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.put('/edit/:festival_id', (req, res, next) => {
    const { name, music, artistsInvited, date, edition, venue, address, city, webSite, image, contactName, contactPhone, contactEmail, observations } = req.body

    const { festival_id } = req.params

    Festival
        .findByIdAndUpdate(festival_id, { name, music, artistsInvited, date, edition, venue, address, city, webSite, image, contactName, contactPhone, contactEmail, observations }, { new: true })
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.delete('/delete/:festival_id', (req, res, next) => {
    const { festival_id } = req.params

    Festival
        .findByIdAndDelete(festival_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})

module.exports = router;

