const router = require('express').Router();
const { User, Shoes, Comment, Vote } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');


router.get('/create',(req,res) => {
  console.log("trying this out")
    try{
      res.render('createpost');
    }catch(e){
      console.log("error with shoe render");
    }

})
// Get all Shoess
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
            },
          ]
    })
      .then(dbShoesData => res.json(dbShoesData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// Get Shoes by ID
router.get('/getshoe/:id', (req, res) => {
  console.log("getting a shoe")
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
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE Shoes.id = vote.Shoes_id)'), 'vote_count']
          ],
        include: [
            {
                model: User,
                attributes: ['username']
              },
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'Shoes_id', 'user_id', 'created_at'],
                include: {
                  model: User,
                  attributes: ['username']
                }
            }
          ]

    })
      .then(dbShoesData => {
        if (!dbShoesData) {
          res.status(404).json({ message: 'No Shoes found with this id' });
          return;
        }
        res.json(dbShoesData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// Post Shoes
router.post('/', withAuth, (req, res) => {
  console.log("create a shoe");

  // do cloudinary stuff









  console.log("================================",req.body)


    Shoes.create({
      name: req.body.name,
      pic_url: req.body.pic_url,
      shoe_size: req.body.shoe_size,
      price_paid: req.body.price_paid,
      resell_value: req.body.resell_value,
      notes: req.body.notes,
      user_id: req.session.user_id
    })
    .then(dbShoesData => res.json(dbShoesData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
    });

//Shoes voting route
router.put('/upvote', withAuth, (req, res) => {
    if (req.session) {
      Shoes.upvote({ ...req.body, user_id: req.session.user_id }, { Vote, Comment, User })
        .then(updatedVoteData => res.json(updatedVoteData))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    }
  });

// Update Shoess
// router.put('/:id', withAuth, (req, res) => {
//     Shoes.update(req.body, {
//         individualHooks: true,
//         where: {
//             id: req.params.id
//       }
//     })
//       .then(dbShoesData => {
//         if (!dbShoesData[0]) {
//           res.status(404).json({ message: 'No Shoes found with this id' });
//           return;
//         }
//         res.json(dbShoesData);
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
// });

// Delete Shoess
router.delete('/:id', withAuth, (req, res) => {
    Shoes.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbShoesData => {
        if (!dbShoesData) {
          res.status(404).json({ message: 'No Shoes found with this id' });
          return;
        }
        res.json(dbShoesData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;