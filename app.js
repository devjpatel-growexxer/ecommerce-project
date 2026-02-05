const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('Welcome to the App');
})

<<<<<<< HEAD
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
=======
app.get('/api/users', (req,res) => {
    res.json({ users:[] });
})
>>>>>>> d089e36 (Add users API endpoint)

module.exports = app;