const express = require("express");

const dishesRouter = express.Router();

const { getDishes } = require("../controllers/dishesController");

dishesRouter.get("/dishes", getDishes);

module.exports = dishesRouter;