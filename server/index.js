const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000; // for Heroku to know
app.listen(PORT);

// localhost:5000