const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const path = require('path')

app.use('/', express.static(path.join(__dirname, 'Web/my/build')))

app.get('/', (req, res) => {
    res.send('Hello World........!')
})
app.get('/about', (req, res) => {
    res.send('About Section........!')
})
app.get('/api/v1/contact', (req, res) => {
    res.send('Contact Section........!')
})
app.get('api/v1/profile', (req, res) => {
    res.send('This is your profile........!')
})
app.post('api/v1/profile', (req, res) => {
    res.send('Profile Created........!')
})
app.put('api/v1/profile', (req, res) => {
    res.send('Profile Updated........!')
})
app.delete('api/v1/profile', (req, res) => {
    res.send('Profile Deleted........!')
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})