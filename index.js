let express = require('express')
let cors = require('cors')
let path = require('path')
require('dotenv').config()
let app = express()
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname,'dist')))

let port = process.env.PORT || 8000
app.listen(port,()=>console.log('listening at port ',port))


app.get('/',async(req,res)=>{
 res.sendFile(path.join(__dirname,'dist','index.html'), (err)=>console.log(err))
})
app.get('/*',async(req,res)=>{
res.send(path.join(__dirname,'dist'))
})
