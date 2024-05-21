const express = require('express')
const dotenv = require('dotenv')
const { MongoClient } = require('mongodb');
const bodyparser = require('body-parser');
const cors = require('cors');
dotenv.config()

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'formik';
const app = express()
const port = 5000
app.use(cors())
app.use(bodyparser.json())

client.connect();

app.get('/', async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('userdetails');
    const findResult = await collection.find({}).toArray();
  res.json(findResult)
})

app.post('/', async (req, res) => {
    const userdeatils = req.body
    const db = client.db(dbName);
    const collection = db.collection('userdetails');
    const findResult = await collection.insertOne(userdeatils);
  res.send({success: true, result: findResult})
})

app.delete('/', async (req, res) => {
  const userdeatils = req.body
  const db = client.db(dbName);
  const collection = db.collection('userdetails');
  const findResult = await collection.deleteOne(userdeatils);
res.send({success: true, result: findResult})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
