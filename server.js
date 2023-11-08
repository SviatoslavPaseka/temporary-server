const express = require('express');
const app = express();
const PORT = 3000;

// Middleware for parsing JSON body
app.use(express.json());

// Sample in-memory storage for GET and POST requests
let getResponses = [];
let postResponses = [];

// GET endpoints
app.get('/get-endpoint-1', (req, res) => {
    res.json(getResponses);
});

app.get('/previous-posts', (req, res) => {
    res.json(postResponses);
});

app.get('/endpoint4', (req, res) => {
    res.send("It is endpoint4");
  });

// cd /Users/sviatoslavpaseka/Documents/projects/simple-server
// node server.js 

// POST endpoints
app.post('/post-endpoint-1', (req, res) => {
    const data = req.body;
    postResponses.push(data);
    res.json({ message: 'Data received successfully' });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
