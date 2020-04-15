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

router.get("/:id/comments", (req,res) => {

    posts.findPostComments(req.params.id)
        .then((posts) => {
            if(posts) {
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
                message: "error retrieving the posts comments"
            })
        })
})

//POST endpoints

router.post("/", (req,res) => {
    if (!req.body.title || !req.body.contents) {
        return res.status(400).json({
            message: "missing title or contents"
        })
    }
    posts.insert(req.body)
        .then((posts) => {
            res.status(201).json(posts)
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({
                message: "there was an error while saving the post to the database"
            })
        })
})

module.exports = router