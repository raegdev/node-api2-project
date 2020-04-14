const express = require("express")


const server = express ()
const port = 4000

server.use(express.json())

server.get("/", (req, res) => {
    res.json({
        message: "Node 2 API"
    })
})

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})