const mongoose = require('mongoose');

mongoose.connect('mongodb://unico-reptiles:unico-reptiles@cluster0-shard-00-00-qb2n1.mongodb.net:27017,cluster0-shard-00-01-qb2n1.mongodb.net:27017,cluster0-shard-00-02-qb2n1.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true
})

  .then(db => console.log('Base de datos conectada'))
  .catch(err => console.log(err));