const express = require('express');
const { faker } = require('@faker-js/faker');
const router = express.Router();

router.get('/', (req,res) => {
    const users = [];
    const { limit } = req.query;
    const size = limit || 10;

    for(let index = 0; index <size; index++){
       users.push({
        userId: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
       })
    }
    res.json(users);
})

module.exports = router;