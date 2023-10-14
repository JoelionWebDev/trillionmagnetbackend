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
router.route("/user/:id").get(getMessage).patch(updateMessage);
router.route("/delete/:id").delete(deleteMessage);

module.exports = router;
