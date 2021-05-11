const User = require('./User');
const Shoes = require('./Shoes');
const Comment = require('./Comment');
const Vote = require('./Vote');

User.hasMany(Shoes, {
    foreignKey: 'user_id'
});

Shoes.belongsTo(User, {
    foreignKey: 'user_id',
});

User.belongsToMany(Shoes, {
    through: Vote,
    as: 'voted_shoes',
    foreignKey: 'user_id'
});

Shoes.belongsToMany(User, {
    through: Vote,
    as: 'voted_Shoes',
    foreignKey: 'shoes_id'
});

Vote.belongsTo(User, {
    foreignKey: 'user_id'
});
  
Vote.belongsTo(Shoes, {
    foreignKey: 'shoes_id'
});

User.hasMany(Vote, {
    foreignKey: 'user_id'
});
  
Shoes.hasMany(Vote, {
    foreignKey: 'shoes_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
Comment.belongsTo(Shoes, {
    foreignKey: 'shoes_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});
  
Shoes.hasMany(Comment, {
    foreignKey: 'shoes_id'
});

module.exports = {User, Shoes, Vote, Comment};