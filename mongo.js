const { MongoClient,ObjectID}  = require('mongodb');



const url='mongodb://localhost:27017'

const dbName='task-manager';

const id=new ObjectID();

console.log(id.toHexString())

MongoClient.connect(url,{useUnifiedTopology:true},(error,client)=>{
    //assert.equal(null,err);
    if(error)
    return console.log("Unable to connect to server")
    
    console.log("Connected correctly")

    const db=client.db(dbName);

    db.collection('users').findOne({ name :'Sibil'},(error,user)=>{
        if(error)
        return console.log(error)
        console.log(user)
    })

    //client.close();
})