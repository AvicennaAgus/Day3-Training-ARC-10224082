const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());


app.get('/api/message', (req, res) => {
    res.json({ message: "Amogus" });
});


app.post('/api/echo', (req, res) => {
    const { text } = req.body;
    res.json({ echoedText: text });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});