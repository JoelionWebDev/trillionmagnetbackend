const express = require("express");
const router = express.Router();

const {
  getAllMessage,
  createMessage,
  getMessage,
  updateMessage,
  deleteMessage,
} = require("../../controller/controller");

router.route("/").get(getAllMessage).post(createMessage);
router.route("/:id").get(getMessage).patch(updateMessage).delete(deleteMessage);

module.exports = router;
