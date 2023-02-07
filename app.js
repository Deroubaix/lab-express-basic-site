const { response } = require('express')
const express = require('express')

const app = express()

//Link the public folder - images/css/sounds
app.use(express.static("public"))

//we pass the port number and a callback function that triggers when the server starts listening

/* app.get('/home', (request,response) => {
response.send('<h1>Welcome to hell</h1>')
}) */

//create the routs for the pages that we want

app.get('/home', (request,response) => {
    //dirname will be different deppending on the computer that runs it
    console.log(__dirname)
    response.sendFile(__dirname + "/views/home.html")
    })

app.get('/profile', (request,response) => {
        //dirname will be different deppending on the computer that runs it
        console.log(__dirname)
        response.sendFile(__dirname + "/views/profile.html")
        })

app.get('/work', (request,response) => {
    console.log(__dirname)
    response.sendFile(__dirname + "/views/work.html")
})

app.listen(3000, ()=> {
    console.log("Server running on port 3000")
})