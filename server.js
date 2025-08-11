
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const warrantyRoutes = require('./routes/warrantyroutes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5500'
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/warranty', warrantyRoutes);

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
    });