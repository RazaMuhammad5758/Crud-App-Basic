import express from "express"

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crudapp"})

app.listen(8800, () => {
    console.log("Backend is connected!")
})