const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('Welcome to the App');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
app.get('/api/users', (req,res) => {
    res.json({ users:[] });
});

app.get('/api/products', (req,res) => {
    res.json({ products:[] });
});

module.exports = app;