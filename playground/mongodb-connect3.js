//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);


//var user = {name: 'Andrew', age: 25};
//var {name} = user;
//console.log(name);

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do 2',
    //     completed: false
    // }, (err, result) => {
    //     if(err){ 
    //         return console.log('Unable to insert ToDo'); 
    //     }
    
    //  console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    // db.collection('Users').insertOne({
    //     name: 'Andrew',
    //     age: 25,
    //     location: 'HK'
    // }, (err, result) => {
    //     if(err){ 
    //         return console.log('Unable to insert Users'); 
    //     }    
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // })

    client.close();

})