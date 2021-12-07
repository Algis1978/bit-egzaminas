const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
const port = 3012

app.listen(port, () => {
    console.log(`Serveris klauso užklausų adresu http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.send('Serveris atsakė į užklausą!')
})

const sasaja = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "paspirtukai",
    password: "root"
});

sasaja.connect(function(err) {
    if (err) throw err;
    console.log("Sujungta su duomenų baze");
});

app.use(cors());
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());
app.get('/JSONtestas', (req, res) => {
    res.send(JSON.stringify({JSONtestas: 'JSON tekstas perskaitytas sėkmingai'}))
})