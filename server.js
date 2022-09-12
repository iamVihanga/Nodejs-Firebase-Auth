const express = require('express')
const app = express()
const firebaseAdmin = require('./firebaseConfig')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Sever routes
app.post('/auth/signup', async (req, res) => {
    try {
        const userResponse = await firebaseAdmin.auth().createUser({
            email: req.body.email,
            password: req.body.password,
            emailVerified: false,
            disabled: false
        })
        res.status(200).json(userResponse)
    } catch (err) {
        res.status(500).json(err)
    }
})

// listen to the server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log('Your server started.!!'))