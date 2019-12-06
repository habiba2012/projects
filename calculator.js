const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html");
})


app.get("/calc", (request, response) => {
    response.send("");
})

app.post("/", (request, response) => {
    console.log(request.body);
})

app.listen(3000);