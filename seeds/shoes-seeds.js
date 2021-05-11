const { Shoes } = require('../models');

const ShoesData = [
    {
        title: "Would you invest in DOGECOIN?",
        Shoes_content: "I know you all saw Elon Musk on SNL as he proclaimed himself ''The DogeFather''. Is this enough for you to invest let's talk about it.",
        user_id: 3
    },
    {
        title: "Astronomy",
        Shoes_content: "I wanted to start a thread to be able to talk about anything and everything about space.",
        user_id: 1
    },
    {
        title: "Cars",
        Shoes_content: "Tesla, Ferrari, Porsche, Ford, anything with 4 wheels we appreciate.",
        user_id: 2

    },
    {
        title: "MARS",
        Shoes_content: "Would you be able to move to mars and live there?",
        user_id: 5
    },
    {
        title: "What's your favorite geek movie?",
        Shoes_content: "Matrix is the best! ",
        user_id: 4
    }
]

const seedShoes = () => Shoes.bulkCreate(ShoesData);

module.exports = seedShoess;