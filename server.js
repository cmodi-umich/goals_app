var express = require('express')
var cors = require('cors');
var mongoose = require('mongoose')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// mongoDB config
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

// routes
const router = require('./backend/routes/combined_routes');

app.use('/', router);

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});