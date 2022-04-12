const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {getHouses, deleteHouses, createHouse, updateHouse} = require('./controller')

app.get('/api/houses', getHouses)
app.delete('/api/houses/:id', deleteHouses)
app.post('/api/houses', createHouse)
app.put('/api/houses/:id', updateHouse)


app.listen(5050, () => console.log('Listening on port 5050'))