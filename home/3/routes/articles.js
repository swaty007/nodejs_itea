const express = require('express');
const router = express.Router();
const Article = require('../models/article');
const User = require('../models/user');

// router.use((req, res, next) => {
//     if (!req.isAuthenticated())
//         return res.redirect('/login');
//     next()
// })

router.get('/', async (req, res, next) => {

    let perPage = 10;
    let page = req.query.page ? req.query.page : 0;

    let articles = await Article.find().limit(perPage).skip(perPage * page)
    let count = await Article.count()
    let pages = Math.ceil(count / perPage)
    res.render('articles/index', { title: 'Articles', articles: articles, pages: pages });
});

router.post('/', async (req, res, next) => {
    let article = new Article({
        title: req.params.title,
        text: req.params.text,
        author: req.user.username,
    });
    try {
        await article.save();
    } catch (e) {
        return res.status(406).json(`Error happens ${e}`);
    }
    return res.redirect('/articles');
});

router.get('/:id', async (req, res, next) => {
    let article = await Article.findById(req.params.id)
    let author = await User.find({ username: article.author })
    res.render('articles/show', { title: article.title, article: article, author: author });
});

router.get('/create', async (req, res, next) => {
    res.render('articles/edit', { title: article.title });
});
router.get('/update/:id', async (req, res, next) => {
    let article = await Article.findById(req.params.id)
    res.render('articles/edit', { title: article.title, article: article });
});

router.post('/:id', async (req, res, next) => {
    let article = await Article.findById(req.params.id)

    if (article.author !== req.user.username)
        return res.status(406).json(`Not your article`);

    article.title = req.params.title
    article.text = req.params.text
    await article.save()

    return res.redirect(`/articles/${article._id}`);
});

router.delete('/:id', async (req, res, next) => {
    await Article.findOneAndDelete(req.params.id);
    return res.redirect('/articles');
});

module.exports = router;
