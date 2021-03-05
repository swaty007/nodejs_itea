const mongoose = require('mongoose')
// const ObjectId = Schema.ObjectId;

/** @private */
const userSchema = new mongoose.Schema({
    // author: ObjectId,
    username: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        // required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

/** @public */
const User = mongoose.model("User", userSchema);

module.exports = User;
