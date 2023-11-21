// Import Sequelize DataTypes module
const DataTypes = require('sequelize');

// Create a new Sequelize instance for the database connection
const db = new DataTypes('codegig', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres'
});

// Define an async function to sync the model with the database
const syncDatabase = async () => {
    try {
      await db.authenticate();
      console.log('Database connected!');
    } catch (error) {
      console.error('Error syncing database:', error);
    }
  };
syncDatabase();
// Export the Sequelize instance representing the database connection
module.exports = db;
