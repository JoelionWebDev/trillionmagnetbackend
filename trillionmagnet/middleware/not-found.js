const notFound = (req, res) =>
  res.status(400).send({ Hellow_Check_Well: "Route not found" });

module.exports = notFound;
