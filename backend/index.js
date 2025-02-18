const express = require('express');
const mysql =require('mysql2');
const cors =require('cors');
const bodyParser= require('body-parser');
const app = express();

app.use(cors());
app.use(express.json());
const con=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_beekeeping",
    port: 3309
});
app.use(bodyParser.urlencoded({extended:true}))

con.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
});

app.get('/bee', (req, res) =>{
    con.query('SELECT* FROM beekeeping', (err, result) => {
        if (err) {
            res.status(500).send(err);
        }
        else{
            res.json(result);
        }
    });
});

app.post("/bee/insert",(req, res) =>{
    const beeId = req.body.beeId;
    const beeData = req.body.beeData;
    const beeKorpusy = req.body.beeKorpusy;
    const beeNadstawki = req.body.beeNadstawki;
    const beeRamki = req.body.beeRamki;

    const sqlInsert="INSERT INTO beekeeping(id, data, korpusy, nadstawki, ramki) VALUES (?,?,?,?,?)";
    con.query(sqlInsert,[beeId, beeData, beeKorpusy, beeNadstawki, beeRamki],(err, result)=> {
        console.log(result);
    });
});

const PORT = 5000;
app.listen(PORT,() => {
    console.log(`Serwer działa na porcie ${PORT}`);
});
