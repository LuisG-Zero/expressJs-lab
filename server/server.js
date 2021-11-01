const express = require('express');
const fs = require('fs');
const app = express();

// app.use((req, res, next) => {
//     console.log(req.url);
//     next();
// });

app.post("/contact", (req, res) => {
    console.log(req.url);
});

app.use(express.static('public'))

app.listen(3000);

