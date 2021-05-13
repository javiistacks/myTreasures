const router = require('express').Router();
const sequelize = require('../config/connection');
const { Shoes, User, Vote, Comment } = require('../models');

// Get all Shoess render homepage
router.get('/', (req, res) => {
    Shoes.findAll({
      attributes: [
        'id',
        'name',
        'shoe_size',
        'price_paid',
        'resell_value',
        'notes',
        [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE Shoes.id = vote.Shoes_id)'), 'vote_count']
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'Shoes_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbShoesData => {
        const Shoes = dbShoesData.map(Shoes => Shoes.get({ plain: true }));
        console.log('all the dhoes', Shoes)
        res.render('homepage', {
           shoes:  Shoes,
            loggedIn: req.session.loggedIn
          });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// Login
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });




// Get Shoes by ID
// router.get('/Shoes/:id', (req, res) => {
//     Shoes.findOne({
//       where: {
//         id: req.params.id
//       },
//       attributes: [
//         'id',
//         'name',
//         'shoe_size',
//         'price_paid',
//         'resell_value',
//         'notes',
//         [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE Shoes.id = vote.Shoes_id)'), 'vote_count']
//       ],
//       include: [
//         {
//           model: Comment,
//           attributes: ['id', 'comment_text', 'Shoes_id', 'user_id', 'created_at'],
//           include: {
//             model: User,
//             attributes: ['username']
//           }
//         },
//         {
//           model: User,
//           attributes: ['username']
//         }
//       ]
//     })
//       .then(dbShoesData => {
//         if (!dbShoesData) {
//           res.status(404).json({ message: 'No Shoes found with this id' });
//           return;
//         }

//         const Shoes = dbShoesData.get({ plain: true });

//         res.render('single-Shoes', {
//             Shoes,
//             loggedIn: req.session.loggedIn
//           });
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
// });

module.exports = router;