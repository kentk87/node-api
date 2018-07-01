const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

 //https://docs.mongodb.com/manual/reference/operator/update/
    db.collection('Todos').findOneAndUpdate(
        {_id : new ObjectID('5b39020666229018181f454e')}, 
        { $set: {text: 'Programming3'}}, 
        {returnOriginal: false}).then((result)=>{
            console.log(result);
        });


    client.close();

})  