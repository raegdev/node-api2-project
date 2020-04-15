const express = require("express")
const router = express.Router
const posts = require("../data/db")

//GET endpoints

router.get("/", (req,res) => {
    const options = {
        sortBy: req.query.sortBy,
        limit: req.query.limit,
    }

    posts.find(options)
        .then((posts) =>{
            res.status(200).json(posts)
        })
        .catch(() => {
            console.log(error)
			res.status(500).json({
				error: "The posts information could not be retrieved.",
			})
        })
})

module.exports = router