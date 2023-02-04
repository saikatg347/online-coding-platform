require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

const corsOptions = require('./config/corsOptions')

app.use(cors(corsOptions))

app.use(express.json())

app.use('/api', require('./routes/apiRoutes'))

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Listening on PORT: ${PORT}`))
