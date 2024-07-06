const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(`Email: ${email}, Password: ${password}`);
    res.send('Login data received');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
