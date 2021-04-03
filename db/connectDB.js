const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect('mongodb://localhost/bdjobs', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
      // eslint-disable-next-line no-console
      console.log('MongoDB successfully connected to server.');
    })
    .catch(() => {
      // eslint-disable-next-line no-console
      console.log('MongoDB server couldn\'t connect!');
    });
};
