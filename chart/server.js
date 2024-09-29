const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

// Update with your MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/chart'; // Use 'chart' as your database name
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

// Define a Mongoose schema and specify the exact collection
const DataSchema = new mongoose.Schema({
    label: String,
    value: Number
}, { collection: 'chart-mongo' }); // Exact collection name

const DataModel = mongoose.model('Data', DataSchema);

// API endpoint to get chart data
app.get('/api/data', async (req, res) => {
    try {
        const data = await DataModel.find(); // Fetches all records from 'chart-mongo'
        res.json(data); // Send data as JSON to frontend
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

// Start the server
const port = 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

