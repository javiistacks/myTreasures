const router = require('express').Router();
const sequelize = require('../config/connection');
const { Shoes, User, Vote, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Get all Shoes for /inventory
router.get('/', withAuth, (req, res) => {
    console.log(req.session);
    Shoes.findAll({
        where: {
          user_id: req.session.user_id
          },
        attributes: [
          'id',
          'name',
          'shoe_size',
          'price_paid',
          'resell_value',
          'notes',
          [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE shoes.id = vote.shoes_id)'), 'vote_count']
        ],
        include: [
          {
            model: Comment,
            attributes: ['id', 'comment_text', 'shoes_id', 'user_id', 'created_at'],
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
          res.render('inventory', {shoes, loggedIn: true});
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
  });

// Get Shoes by ID
router.get('/shoes/:id', (req, res) => {
    Shoes.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'name',
        'shoe_size',
        'price_paid',
        'resell_value',
        'notes',
        [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE shoes.id = vote.Shoes_id)'), 'vote_count']
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'shoes_id', 'user_id', 'created_at'],
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
        if (!dbShoesData) {
          res.status(404).json({ message: 'No shoes found with this id' });
          return;
        }

        const Shoes = dbShoesData.get({ plain: true });

        res.render('single-shoes', {
            Shoes,
            loggedIn: req.session.loggedIn
          });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

  module.exports = router;