const faker = require('faker');
//const model = require('./model.js');
//const mongoose = require('mongoose')

const activityList = [];

//const faker = require('faker');


for (var i = 0; i < 100; i++) {
   let activity = {
    id: i,
    photoUrl: faker.lorem.sentence(),
    title: faker.lorem.sentence(),
    category: faker.lorem.sentence()
    price: Math.floor(Math.random() * 200 + 100),
    reviews: Math.floor(Math.random() * 200 + 100),
    }
    activityList.push(activity)
}

console.log(activityList)

