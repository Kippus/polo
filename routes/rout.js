const { Router } = require('express');
const express = require('express');
const mysql = require("mysql2");
const router = Router();

// _________________________________________________________________MySQL_________________________________________________________________ //

const pool = mysql.createPool({
    connectionLimit: 5,
    host: "127.0.0.1",
    user: "root",
    database: "POLOZHNYAK",
    password: ""
});

// _________________________________________________________________Function_________________________________________________________________ //


// _________________________________________________________________Request_________________________________________________________________ //

router.get('/', (req, res) => {
        res.render('index', {
            title: "Дом"
        });
})

router.get('/store-openings', (req, res) => {
    pool.query("SELECT id, opening_date FROM OPEN_SHOP ORDER BY opening_date ASC", function (err, data) {
        if (err) return console.log(err);
        console.log(data)
        res.render('Store-openings', {
            title: "Открытие магазинов",
            ShopOpenings: true,
            id_data: data
        });
    });
})

module.exports = router;