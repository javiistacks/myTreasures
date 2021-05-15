const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { truncate } = require('./user');

// create our Post model
class Shoes extends Model {
    static upvote(body, models) {
        return models.Vote.create({
          user_id: body.user_id,
          shoes_id: body.shoes_id
        }).then(() => {
          return Shoes.findOne({
            where: {
              id: body.shoes_id
            },
            attributes: [
                'id',
                'name',
                'shoe_size',
                'price_paid',
                'resell_value',
                'user_id',
                [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE Shoes.id = vote.Shoes_id)'), 'vote_count']
            ]
          });
        });
      }
    }

// create fields/columns for Post model
Shoes.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      // We talked about limiting the number of preselected...will need to work in to code

      image_url:{
      type: DataTypes.STRING,

      },
      
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },

      shoe_size: {
          type: DataTypes.TEXT,
          allowNull: truncate
      },
      price_paid: {
          type: DataTypes.FLOAT,
          allowNull: true
      },
      resell_value: {
          type: DataTypes.FLOAT,
          alllowNull: true
      },
      notes: {
          type: DataTypes.TEXT,
          allowNull: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'shoes'
    }
  );

  module.exports = Shoes;