const mongoose = require('mongoose');

const app = require('./app');

const BD_HOST =
  'mongodb+srv://vvdiduh:6gU4wVpHWACxbVdC@cluster0.nmkgwzi.mongodb.net/db-contacts?retryWrites=true&w=majority';

mongoose
  .connect(BD_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log('Database connection successful');
    });
  })
  .catch(error => {
    console.log(error);
    process.exit(1);
  });
