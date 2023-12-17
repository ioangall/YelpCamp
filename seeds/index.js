const mongoose = require('mongoose')
const Campground = require('../models/campground')
const cities = require('./cities')
const {places,descriptors} = require('./seedHelpers')


mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')
    .then(() => {
        console.log('Connection successful!')
    })
    .catch(err => {
        console.log(`Connection error: ${err}`)
    })

const sample = array => array[Math.floor(Math.random() * array.length)]

const seedDB = async () => {
    await Campground.deleteMany({})
    for (let i = 0; i < 50; i++){
        const random1000 = Math.floor(Math.random() * 1000)
        const price =  Math.floor(Math.random() * 20) + 10
        const camp = new Campground({
            author: '657dccd4023952a90c213b31',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: 'https://source.unsplash.com/collection/483251',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quia doloremque dignissimos cumque nulla dolore commodi harum, ex consectetur porro mollitia quo fuga tenetur quis totam recusandae quam ullam minus!',
            price
        })
        await camp.save()
    }
}

seedDB().then(() => {
    mongoose.connection.close()
})
