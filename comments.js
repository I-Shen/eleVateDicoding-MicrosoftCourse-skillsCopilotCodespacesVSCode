// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
    fs.readFile('./comments.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred');
        } else {
            res.send(data);
        }
    });
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    fs.readFile('./comments.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred');
        } else {
            const comments = JSON.parse(data);
            comments.push(comment);
            fs.writeFile('./comments.json', JSON.stringify(comments), (err) => {
                if (err) {
                    console.log(err);
                    res.status(500).send('An error occurred');
                } else {
                    res.send('Comment added');
                }
            });
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});