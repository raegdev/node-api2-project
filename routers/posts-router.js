const express = require("express")
const router = express.Router()
const posts = require("../data/db")

//GET endpoints

router.get("/", (req,res) => {
    
    posts.find()
        .then((posts) =>{
            res.status(200).json(posts)
        })
        .catch((error) => {
            console.log(error)
			res.status(500).json({
			    message: "The posts information could not be retrieved"
			})
        })
})

router.get("/:id", (req,res) => {

    posts.findById(req.params.id)
        .then((posts) => {
            if (posts) {
                res.status(200).json(posts)
            } else {
                res.status(404).json({
                    message: "the posts with the specified ID does not exist"
                })
            }
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({
                message: "error retrieving the posts"
            })
        })
})

module.exports = router