//Placeholders...
const seedShoes = require('./shoes-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedShoes();
  console.log('\n----- SHOES SEEDED -----\n');

  process.exit(0);
};

seedAll();