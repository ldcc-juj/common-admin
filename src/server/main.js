const express = require('express');
const os = require('os');

const app = express();

app.use(express.static('dist'));
app.get('/api/user', (req, res) => res.send({ username: os.userInfo().username }));
app.listen(8080, () => console.log('Listening on port 8080!'));
