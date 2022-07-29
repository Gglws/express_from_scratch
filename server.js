import express, { application } from "express";

import pg from "pg";

const app = express();
const PORT = 3000;

const pool = new pg.Pool({
    database: "cars",
})

app.use(express.static('static'))


app.get('/api/cars', (req,res) => {

var sql = 'SELECT * FROM cars';

pool.query(sql).then((result)=>{
    res.type('application/json');
    res.send(result.rows);
})


})

app.post('/api/cars', (req, res) => {

})

app.patch('/api/cars', (req, res) => {});

app.delete('/api/cars', (req, res) => {});



app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
