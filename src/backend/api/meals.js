const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const titles = await knex("meals").select("title", "idmeals");
    response.json(titles);
  } catch (error) {
    throw error;
  }
});

router.get("/:mealId", async (request, response) => {
  const mealId = request.params.mealId
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const titles = await knex("meals").where({ idmeals: mealId }).select("title", "idmeals");
    response.json(titles[0]);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
