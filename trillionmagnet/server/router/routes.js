const express = require("express");
const router = express.Router();

const {
  getAllMessage,
  createMessage,
  getMessage,
  updateMessage,
  deleteMessage,
} = require("../../controller/controller");

router.route("/getdata").get(getAllMessage);
router.route("/reg").post(createMessage);
router.route("/:id").get(getMessage).patch(updateMessage);
router.route("/getdata/:id").delete(deleteMessage);

module.exports = router;
