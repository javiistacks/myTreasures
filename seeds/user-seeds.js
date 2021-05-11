const { User } = require('../models');

const userData = [
    {
        username: "nina",
        twitter: "NinoshkaRivas",
        github: "NinoshkaRivas",
        email: "ninoshka.rivas@icloud.com",
        password: "Password1"
    },
    {
        username: "nico95",
        twitter: "NicolasDelvalle",
        github: "NicolasD",
        email: "nicolas.delvalle@icloud.com",
        password: "Password2"
    },
    {
        username: "myrta23",
        twitter: "Myrta23",
        github: "Myrta23",
        email: "myrta.23@icloud.com",
        password: "Password3"
    },
    {
        username: "mimi10",
        twitter: "mimi10",
        github: "mimi10",
        email: "mimi.10@icloud.com",
        password: "Password4"
    },
    {
        username: "javiistacks",
        twitter: "JaviannMarrero",
        github: "javiistacks",
        email: "javiann.marrero@icloud.com",
        password: "Password5"
    },

    {
        username: "ashely2",
        twitter: "ashleyg",
        github: "ashelyg",
        email: "ashely.g@icloud.com",
        password: "Password6"
    },
    
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;