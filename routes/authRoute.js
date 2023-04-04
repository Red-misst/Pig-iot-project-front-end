const express = require("express");
const { 
    createUser, 
    loginUserCtrl, 
    deleteaUser,  
    updatedUser, 
    handleRefreshToken,
    logout
    } = require("../controller/userCtrl");
const { authMiddleware} = require("../middleware/authMiddleware");
const router = express.Router();
router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.get("/logout", logout);
router.get("/refresh", handleRefreshToken);
router.delete("/:id", deleteaUser);
router.put("/edit-user", authMiddleware, updatedUser);


module.exports = router;