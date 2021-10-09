const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Hello World........!')
})
app.get('/about', (req, res) => {
    res.send('About Section........!')
})
app.get('/contact', (req, res) => {
    res.send('Contact Section........!')
})
app.get('/profile', (req, res) => {
    res.send('This is your profile........!')
})
app.post('/profile', (req, res) => {
    res.send('Profile Created........!')
})
app.put('/profile', (req, res) => {
    res.send('Profile Updated........!')
})
app.delete('/profile', (req, res) => {
    res.send('Profile Deleted........!')
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})