const mongodb = require('mongodb');

const connectionString = 	'mongodb+srv://todoAppUser:todoAppUser12@cluster0.xiqoc.mongodb.net/ComplexApp?retryWrites=true&w=majority';

mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client){
  module.exports = client.db('ComplexApp');
  const app = require('./app');
  app.listen(3000);
});