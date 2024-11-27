const express = require('express');
const app = express();

// Corrected the route handler syntax
app.get('/1000', (req, res) => {
    res.send("Hello World");
});

// Fixed the typo in the listen callback message
app.listen(3000, () => {
    console.log("Listening on port 3000");
});
