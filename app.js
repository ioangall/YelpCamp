const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const Campground = require('./models/campground')
const app = express()



mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')
    .then(() => {
        console.log('Connection successful!')
    })
    .catch(err => {
        console.log(`Connection error: ${err}`)
    })


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views'))



app.get('/', (req,res) => {
    res.render('home')
})

app.get('/makecampground', async (req,res) => {
    const camp = new Campground({title: 'My Backyard', description: 'cheap camping!'})
    await camp.save()
    res.send(camp)
})

app.listen('3000', () => {
    console.log('Serving on port 3000')
})