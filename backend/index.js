import express from "express"
import mysql from 'mysql'

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crudapp"})

    app.get("/", (req, res) => {
        res.json("Hello this is the backend!")
    })
    app.get("/books", (req, res) => {
        const q = "SELECT * FROM books"

        db.query(q, (err, data) => {
            if(err) return res.json(err)
            return res.json(data)
        })
    })

    app.post("/books",(req, res) => {
        const q = "INSERT INTO books (`Title`, `Desc.`, `Cover`) VALUES (?)"

        const values = ["Title from backend", "Desc. from backend", "Cover from backend"]

        db.query(q, [values], (err, data) => {
            if(err) return res.json(err)
            return res.json("Book has been created successfully!")
        })
    })

app.listen(8800, () => {
    console.log("Backend is connected!")
})