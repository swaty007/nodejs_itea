const mongoose = require('mongoose')
// const ObjectId = Schema.ObjectId;

/** @private */
const articlesSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
        unique: true,
    },
    text: {
        type: String,
        required: true,
    },
    // created_at: {
    //     type: Number,
        // required: true,
    // },
}, {
    timestamps: true,
});

/** @public */
const Article = mongoose.model("Article", articlesSchema);

module.exports = Article;
