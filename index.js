const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Root route
app.get('/', (req, res) => {
    res.send('Hi! Welcome to my Node.js Server!');
});

// Route for /subject
app.get('/subject', (req, res) => {
    res.send('ITE314');
});

// Route for /exam
app.get('/exam', (req, res) => {
    res.send('P2');
});

// Route for /node
app.get('/node', (req, res) => {
    res.send('NODEJS');
});

// Route for /mydata
app.get('/mydata', (req, res) => {
    res.json({
        subject: 'ITE314',
        exam: 'P2',
        node: 'NODEJS'
    });
});

// Start the server
app.listen(port, () => {
    console.log('Server is running on port ${port}');
});

