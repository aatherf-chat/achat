const config = require('./config.json')

const express = require('express')
const port = config.port

const path = require('path')
const fs = require('fs')

const app = express()
app.set('view engine' , 'ejs')
app.use(express.static('public'))
// public css
app.set('pages' , path.join(__dirname , './pages'))

app.get('/' , (req , res) => {
    // fs.readFile('' , function(err , data){ // add file path
    //     res.writeHead(200 , {'Content-Type' : 'text/html'})
    //     res.write(data)
    //     return res.end()
    // })
    res.send('Test')
})

app.listen(port , () => {
    console.log(`Server is online on port ${port}`);
})