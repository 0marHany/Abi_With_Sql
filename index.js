const express = require("express");

const app = express();
app.use(express.json())

const usersRoutes = require("./modules/Users/Users.routes")
app.use(usersRoutes)
app.listen(5000, () => {
    console.log("server run on : http://localhost:5000/ ");
})
// console.log(mySQLDateString);