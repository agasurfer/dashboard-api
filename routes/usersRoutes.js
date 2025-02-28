const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

// Routes for users
router.get("/", usersController.getAllUsers);
router.get("/:id", usersController.getUserById);
router.get("/:id/containers", usersController.getUserContainers);
router.get("/:id/footprints", usersController.getUserFootprints);
router.get("/:id/buckets", usersController.getUserBuckets);
router.get("/:id/volumes", usersController.getUserVolumes);
router.get("/:id/alerts", usersController.getUserAlerts)


module.exports = router;