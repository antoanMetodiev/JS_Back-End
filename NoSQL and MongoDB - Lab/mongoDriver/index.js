
const { MongoClient } = require('mongodb');

const connectionString = `mongodb://localhost:27017`;
const client = new MongoClient(connectionString);

async function run() {
    let db = client.db('test1');
    const collection = await db.collections();

    const studentsCursor = (await collection).find();
    const students = await studentsCursor.toArray();

    console.log(students);
};

run();