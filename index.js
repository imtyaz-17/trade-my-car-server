const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors());
app.get('/', (req, res) => {
    res.send('TradeMyCar - API running')
})

app.listen(port, () => {
    console.log(`TradeMyCar app listening on port ${port}`)
})