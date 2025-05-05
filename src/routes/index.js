var express = require("express");
var router = express.Router();

// let funcao = require("../../public/teste");

router.get("/", function (req, res) {
  res.render("index");
  // funcao.testar();
});


module.exports = router;