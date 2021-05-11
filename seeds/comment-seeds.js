const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Back to the future 🚀"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "I would go only if I can get back alive."
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "No way jose!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "ALL the Marvel movies."
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "I love space!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "When are we leaving?"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "I have a Tesla and let me tell you it is the best car ever."
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Im ready to invest!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
