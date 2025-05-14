const { posts } = require('../data/posts');

// index
function index(req, res) {
    res.json(posts);
}

// show

function show(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);

    if (post) {
        res.json(post);
    } else {
        res.status(404).send('Post non trovato');
    }
}

// store

function store(req, res) {
    res.send('Creazione di un nuovo post');
}

//update

function update(req, res) {
    const id = parseInt(req.params.id);
    res.send(`Aggiornamento del post ${id}`);
}

// destroy

function destroy(req, res) {
    const id = parseInt(req.params.id);
    res.send(`Cancellazione del post ${id}`);
}

module.exports = {
    index,
    show,
    store,
    update,
    destroy
};