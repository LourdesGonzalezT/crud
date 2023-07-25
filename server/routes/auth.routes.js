const router = require("express").Router()
const bcrypt = require('bcryptjs')

const User = require('./../models/user.model')
const saltRounds = 10

router.post('/signup', (req, res, next) => {

    const { email, password, username } = req.body

    if (password.length < 2) {
        res.status(400).json({ message: 'Password must have at least 2 characters' })
        return
    }

    User
        .findOne({ email })
        .then((foundUser) => {

            if (foundUser) {
                res.status(400).json({ message: "User already exists." })
                return
            }

            const salt = bcrypt.genSaltSync(saltRounds)
            const hashedPassword = bcrypt.hashSync(password, salt)

            return User.create({ email, password: hashedPassword, username })
        })
        .then((createdUser) => {

            const { email, username, _id } = createdUser
            const user = { email, username, _id }

            res.status(201).json({ user })
        })
        .catch(err => {
            next(err)
        })
})

module.exports = router