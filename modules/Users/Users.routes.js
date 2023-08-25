const router = require("express").Router();
const { getUsers, addUsers, updateUsers, deleteUsers } = require("./Controller")


router.get("/getUsers", getUsers)
router.post("/addUsers", addUsers)
router.put("/updateUsers/:id", updateUsers)
router.delete("/deleteUsers/:id", deleteUsers)

module.exports = router;