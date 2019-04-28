const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
if (process.env.NODE_ENV == 'production') {
    app.listen({ port: process.env.PORT || 80 })
} else {
    app.listen(3000);
}