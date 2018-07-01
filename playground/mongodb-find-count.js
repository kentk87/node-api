const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Todos').find({completed: false}).count().then((count) => 
    {
        console.log(`Total Todos: ${count}`)
    }, (err) => {
        console.log('unable to fecth todos')
    });

    db.collection('Users').find({name: 'Kent'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('unable to fecth todos')
    });


    client.close();

})