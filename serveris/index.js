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
    database: "oro_uostas",
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

///Duomenų atsisiuntimas///

app.get('/planes', (req, res) => {
    const sqlUzklausa = `select * from planes`
    sasaja.query(sqlUzklausa, (err, results) =>{
    if (err) {throw err}
    else {res.send(results);console.log(results)}
    }) 
})
//Duomenų įvedimas//
app.post('/planes', (req, res) => {
    const sqlParaiska = `insert into planes
    (from_town, airline, arrival_time, is_late, skrydzio_nr) 
    values (?, ?, ?, ?, ?)`
    sasaja.query(sqlParaiska, [
    //Čia surašomos savybės tokia pačia tvarka, kokia yra užklausa
    req.body.from_town,
    req.body.airline,
    req.body.arrival_time,
    req.body.is_late,
    req.body.skrydzio_nr
    ], (err, results) => {
    if (err) {throw err}
    else {res.send(results)}
    })
})