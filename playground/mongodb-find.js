// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b40a806c4b70a32804e7615')
    // }).toArray().then((docs) => {        
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch tods', err);
    // })

    // db.collection('Todos').find().count().then((count) => {        
    //     console.log('Todos');
    //     console.log(`Todos Count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch tods', err);
    // })
    
    db.collection('Users').find({name: 'Harish'}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log(err);
    })

    // client.close(); 
})