const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Users').insertOne({
        name: 'Andrew',
        age: 25,
        location: 'HK'
    }, (err, result) => {
        if(err){ 
            return console.log('Unable to insert Users'); 
        }    
        console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(result.ops[0]._id.getTimestamp());
    })

    client.close();

})