const express = require('express')
const path = require('path')




const app = express()
const connection = require('./connection')
const about = require('./routes/about')
const contact = require('./routes/contact')

const port = 4001
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json())
app.use('/about', about)
app.use('/contact', contact)



app.get('/', (req, res) => {

        connection.db.collection('expertise', (err, collection) => {
            collection.find({}).toArray((err, data) => {
                
                res.render('index', {'title': 'Ivan Eresko', data: data})
            })
            
        })
  
       
})


app.get('/contacts', (req, res) => {

          res.render('contacts', {'title': 'Ivan Eresko'})

   
})

app.get('/study', (req, res) => {

    connection.db.collection('study', (err, collection) => {
        collection.find({}).sort({}).toArray((err, data) => {
            
            res.render('study', {'title': 'Education', data: data})
        })
        
    })
})

app.get('/experience', (req, res) => {

    connection.db.collection('experience', (err, collection) => {
        collection.find({}).sort({_id: -1}).toArray((err, data) => {
            
            res.render('experience', {'title': 'Experience', data: data})
        })
        
    })
})

app.get('/json', (req, res) => {
    
    let message = 'Access granted'
    if (req.body.name !== 'Ivan') {
        message = 'Access denied'
    }
    res.send(message)
})





app.listen(port)