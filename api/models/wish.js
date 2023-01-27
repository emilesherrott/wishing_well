const client = require("../database/connect")

class Wish {
  constructor(data) {
    ;(this.wishId = data.wish_id),
      (this.wishText = data.wish_text),
      (this.createdAt = data.created_at),
      (this.wishStatus = data.wish_status),
      (this.votesGrant = data.votes_grant),
      (this.votesDeny = data.votes_deny),
      (this.reported = data.reported),
      (this.category_of_wish = data.category_of_wish)
  }

  // /wishes
  static async index() {
    try {
      const result = await client.query("SELECT * FROM wishes;")
      return result.rows
    } catch (err) {
      console.log(err)
    }
  }

  static create(wishText, category) {
    try {
      client.query("INSERT INTO wishes (wish_text, category_of_wish) VALUES ($1, $2) RETURNING *", [wishText, category])
      return "Wish added"
    } catch (err) {
      console.log(err)
    }
  }

  // /wishes/:id
  static async show(id) {
    try {
      const result = await client.query("SELECT * FROM wishes WHERE wish_id = $1;", [id])
      return result.rows
    } catch (err) {
      console.log(err)
      throw new Error("Wish not found.")
    }
  }

  // /wishes/:id/comments
  static async indexComments(wishId) {
    try {
      const response = await client.query("SELECT wishes.wish_id, comments.comment_id, comments.comment_text FROM wishes JOIN comments ON wishes.wish_id=comments.wish_id WHERE wishes.wish_id = $1;", [wishId])
      return response.rows
    } catch (err) {
      console.log(err)
    }
  }

  // /wishes/category/:type
  static async indexCategory(category) {
    try {
      const result = await client.query("SELECT * FROM wishes WHERE category_of_wish = $1;", [category])
      return result.rows
    } catch (err) {
      console.log(err)
    }
  }

  // /wishes/:id/:update
  static async update(id, update) {
    try {
      if (update === "for") {
        const result = await client.query("UPDATE wishes SET votes_grant = votes_grant + 1 WHERE wish_id = $1;", [id])
        return result.rows
      } else if (update === "against") {
        const result = await client.query("UPDATE wishes SET votes_deny = votes_deny + 1 WHERE wish_id = $1;", [id])
        return result.rows
      } else {
        console.log("Use For or Against.")
      }
    } catch (err) {
      console.log(err)
    }
  }
}

module.exports = Wish
