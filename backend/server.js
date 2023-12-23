const express = require('express');
const axios = require('axios');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Last.fm Auth Server is running');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

app.get('/authenticate', (req, res) => {
    const apiKey = 'YOUR_API_KEY'; // Replace with your Last.fm API key
    const callbackUrl = encodeURIComponent('http://localhost:3000/callback');
    const authUrl = `http://www.last.fm/api/auth/?api_key=${apiKey}&cb=${callbackUrl}`;

    res.redirect(authUrl);
});

app.get('/callback', async (req, res) => {
    const { token } = req.query;

    if (!token) {
        return res.status(400).send('Token is missing');
    }

    // You can now use this token to make authenticated requests to Last.fm
    res.send(`Token: ${token}`);
});