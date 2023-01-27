const Wish = require("../models/wish")

// /wishes
const getWishes = async (req, res) => {
  let wishes = await Wish.index()
  res.json(wishes)
}

const postWish = (req, res) => {
  Wish.create(req.body.wish_text, req.body.category_of_wish)
  res.json({ message: "Wish created" })
}

// /wishes/:id
const getWish = async (req, res) => {
  let id = req.params.id
  let wish = await Wish.show(id)
  res.json(wish)
}

// /wishes/:id/comments
const getWishComments = async (req, res) => {
  let id = req.params.id
  let wishes = await Wish.indexComments(id)
  res.json(wishes)
}

// /wishes/category/:type
const getCategory = async (req, res) => {
  let category = req.params.type
  let wishes = await Wish.indexCategory(category)
  res.json(wishes)
}

// /wishes/:id/:update
const updateWish = async (req, res) => {
  let id = req.params.id
  let update = req.params.update
  let wish = await Wish.update(id, update)
  res.json(wish)
}

module.exports = {
  getWishes,
  getWishComments,
  postWish,
  getWish,
  updateWish,
  getCategory,
}
