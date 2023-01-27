const express = require("express")
const { getWishes, getWish, postWish, updateWish, getCategory, getWishComments } = require("../controllers/wishes.js")
const { postComment, getComments } = require("../controllers/comments.js")

const router = express.Router()

// WISHES
router.route("/wishes")
    .get(getWishes)
        .post(postWish)

router.route("/wishes/:id")
    .get(getWish)

router.route("/wishes/:id/comments")
    .get(getWishComments)

router.route("/wishes/category/:type")
    .get(getCategory)

router.route("/wishes/:id/:update")
    .put(updateWish)

// COMMNETS
router.route("/comments")
    .get(getComments)

router.route("/wishes/:id/comments")
    .post(postComment)

module.exports = router
