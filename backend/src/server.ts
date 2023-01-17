import express from "express";

const app = express();

const PORT = 3001;

app.get("/", (req, res) => {
    res.json("Hello Express!");
})

app.post("/api/users", (req, res) => {
    res.json("This is a post request!");
})

app.listen(PORT, () => {
    console.log("App is running on port: " + PORT);
})