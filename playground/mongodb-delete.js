const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log(err);
    }
    console.log("Connect to MongoDB Server");
    const db = client.db('TodoApp');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });    
    
    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({text: 'asdf'}).then((result) => {
    //     console.log(result);
    // });

    //deleMany users
    // db.collection('Users').deleteMany({name: 'Harish'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete user
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5b40ade0fc461825608bd809')
    }).then((result) => {
        console.log(result);
    });
});