const express = require("express");
const router = express.Router();
const bucketsController = require("../controllers/bucketsController"); 

router.get("/:id/objects", bucketsController.getBucketObjects)

module.exports = router;