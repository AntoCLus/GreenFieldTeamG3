require("dotenv").config();
const mongoose = require("mongoose");

URI = process.env.MONGODB_URI;

main().then(() => console.log("DB is connected successfully"))
.catch((err) => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGODB_URI)
}

module.exports = main;