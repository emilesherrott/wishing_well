const client = require('../database/connect');

class Comment {
    constructor(data) {
        this.commentId = data.comment_id,
        this.commentText = data.comment_text,
        this.createdAt = data.created_at,
        this.voteAgree = data.votes_agree,
        this.votesDisagree = data.votes_disagree,
        this.reported = data.reported,
        this.wishId = data.wish_id
    }

    static async index() {
        try {
            const result = await client.query("SELECT * FROM comments;");
            return result.rows;
        } catch (err) {
            console.log(err)
        }
    }

    static async create(id, comment) {
        try {
            const result = await client.query("INSERT INTO comments (wish_id, comment_text) VALUES ($1, $2);", [id, comment ])
            return result.rows
        } catch (err) {
            console.log(err)
        }
    }


}

module.exports = Comment