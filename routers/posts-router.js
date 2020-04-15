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

module.exports = router