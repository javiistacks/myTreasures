const { Shoes } = require('../models');

const ShoesData = [
    {
        id: "1",
        name: "Retro 5",
        shoe_size: "9",
        price_paid: "$200",
        resell_value:"$500",
        user_id: 2,
    },
    {
        id: "2",
        name: "Retro 5",
        shoe_size: "9",
        price_paid: "$200",
        resell_value:"$500",
        user_id: 4,
    },
    {
        id: "3",
        name: "Retro 5",
        shoe_size: "9",
        price_paid: "$200",
        resell_value:"$500",
        user_id: 3,

    },
    {
        id: "4",
        name: "Retro 5",
        shoe_size: "9",
        price_paid: "$200",
        resell_value:"$500",
        user_id: 5,
    },
    {
        id: "5",
        name: "Retro 5",
        shoe_size: "9",
        price_paid: "$200",
        resell_value:"$500",
        user_id: 1,
    }
]

const seedShoes = () => Shoes.bulkCreate(ShoesData);

module.exports = seedShoes;