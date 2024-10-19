const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config({ path: "./config/dev.env" });
const userRouter = require("./routes/userroutes.js");
const contextPath = "/rest/api";
const app = express();
require("./db/mongoose.js");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(contextPath, userRouter);

const PORT = process.env.PORT;
app.get("/",(req, res)=>{
 res.send("Welcome")
})
const server = app.listen(PORT, () =>
  console.log(`server running on port ${PORT}`)
);