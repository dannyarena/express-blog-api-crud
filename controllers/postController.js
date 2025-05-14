const { posts } = require('../data/posts');

function index(req, res) {
    res.json(posts);
}