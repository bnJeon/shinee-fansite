const express = require('express');
const db = require('./database/db');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;	// React의 포트 번호와 다르게 하기 위해

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    db.query('SELECT * FROM Users', function (err, results, fields) {
        if (err) throw err;
        res.send(results);
    });
});


app.use('/loginJoin', async function(req,res){

    let sql = "INSERT INTO Users values (?, ?)";

    console.log(req.query);
    console.log(req.body);
    console.log(req.body.id);
    console.log(req.body.password);

    let params = [];
    //get 방식은 req.query.parameter_name
    //post 방식은 req.body.parameter_name
    params.push(req.body.id);
    params.push(req.body.password);
    db.query(sql, params, function (err) {
        if (err) console.log("query is not excuted: " + err);   
        else res.sendStatus(200);
    });

});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});