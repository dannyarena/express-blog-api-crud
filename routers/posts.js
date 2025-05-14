const posts = require('../controllers/postController');
const express = require ('express');
const router = express.Router();
const { posts } = require('../data/posts');

router.get('/', (req, res) => {
    res.json(posts);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);

    if (post) {
        res.json(post);
    }
    else {
        res.status(404).send('Post non trovato');
    }
});

router.post('/', (req, res) => {
    res.send('Creazione di un nuovo post');
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Aggiornamento del post ${id}`);
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Cancellazione del post ${id}`);
});



module.exports = router;
