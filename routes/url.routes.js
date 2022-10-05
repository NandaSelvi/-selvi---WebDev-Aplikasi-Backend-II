const express = require("express");
const router = express.Router();
const { urlController } = require("../controllers");
const { urlValidation } = require("../validators");
const { body, param, validationResult } = require('express-validator');

router.route("/").get(urlController.getUrls);


router.route("/:nama").get(urlValidation.getUrlByName, urlController.getUrlByName);
router.route("/:email/:telepon").get(urlValidation.getUrlByEmailTelepon, urlController.getUrlByEmailTelepon);
router.route("/insert").post(urlValidation.insertUrl, urlController.insertUrl);
router.route("/bulkinsert").post(urlValidation.bulkinsertUrl, urlController.bulkinsertUrl);
router.route("/delete").delete(urlValidation.deleteUrl, urlController.deleteUrl);
router.route("/update").patch(urlValidation.updateUrl, urlController.updateUrl);


module.exports = router;