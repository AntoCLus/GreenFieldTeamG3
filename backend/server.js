const express = require("express");
const cors = require("cors");
const connection = require("./connection");
const itemRouter = require("./Routers/itemRouter");
const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());


app.use("/item", itemRouter);


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});