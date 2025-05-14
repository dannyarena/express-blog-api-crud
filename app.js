const express = require ('express');
const app = express();
const postsRouter = require('./routers/posts');

app.use('/posts', postsRouter);

app.get('/', (req, res) => {
    res.send('Benvenuto nel blog!');
});

const port = 3000;

app.listen(port, () => {
    console.log(`App attiva su http://localhost:${port}`);
});