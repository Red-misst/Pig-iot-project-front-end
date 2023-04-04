const bodyParser = require("body-parser");
const express = require("express");
const dbConnect = require("./config/dbConnect");
const { notFound, errorHandler } = require("./middleware/errorHandler");
const app = express();
const dotnev = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const authRouter = require("./routes/authRoute");
const dataRouter = require("./routes/dataRoute");
const cookieParser = require("cookie-parser");
const cors = require("cors");
dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(cors());
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/api/user", authRouter);
app.use("/api/data", dataRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, ()=> {
    console.log("Server is running at port ", PORT );
})