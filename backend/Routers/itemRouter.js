const express = require("express");
const router = express.Router();
const {
    createItem,
    getAllItems,
    deleteItem,
    updateItem,
} = require("../controllers/itemController");

router.post("/create", createItem);
router.get("/", getAllItems);
router.delete("/:id", deleteItem);
router.put("/:id", updateItem);

module.exports = router;