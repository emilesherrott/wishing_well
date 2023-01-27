const Comment = require('../models/comment')

const getComments = async (req, res) => {
    let comments = await Comment.index()
    res.json(comments)
}


const postComment = async (req, res) => {
    let id = req.params.id
    let body = req.body.comment
    let comment = await Comment.create(id, body)
    res.json({ message: "Comment created"})

}


module.exports = {
    getComments,
    postComment
}