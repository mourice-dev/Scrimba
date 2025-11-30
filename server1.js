/** @format */

import express from "express";
import { startups } from "./data/data.js";

const PORT = 8000;
const app = express();

app.get("/api", (req, res) => {
  let filteredData = startups;
  const { industry, country, continent, is_seeking_funding, has_mvp } =
    req.query;

  if (industry) {
    filteredData = filteredData.filter(
      (startup) => startup.industry.toLowerCase() === industry.toLowerCase()
    );
  }

  if (country) {
    filteredData = filteredData.filter(
      (startup) => startup.country.toLowerCase() === country.toLowerCase()
    );
  }

  if (continent) {
    filteredData = filteredData.filter(
      (startup) => startup.continent.toLowerCase() === continent.toLowerCase()
    );
  }

  if (is_seeking_funding) {
    filteredData = filteredData.filter(
      (startup) =>
        startup.is_seeking_funding ===
        JSON.parse(is_seeking_funding.toLowerCase())
    );
  }

  if (has_mvp) {
    filteredData = filteredData.filter(
      (startup) => startup.has_mvp === JSON.parse(has_mvp.toLowerCase())
    );
  }

  res.json(filteredData);
});

app.get("/api/:field/:term", (req, res) => {
  const { field, term } = req.params;
  const allowedFields = ["country", "continent", "industry"];

  // If allowed, return filtered results and STOP (return) so we don't send another response.
  if (allowedFields.includes(field)) {
    const filteredData = startups.filter(
      // optional chaining just in case, but field is allowed so should exist
      (startup) => startup[field]?.toLowerCase() === term.toLowerCase()
    );

    return res.json(filteredData); // <-- return prevents further execution
  }

  // Format allowed fields exactly as required: "'country', 'continent', 'industry'"
  const formattedFields = allowedFields.map((f) => `'${f}'`).join(", ");

  // Exact message required by the challenge:
  return res
    .status(400)
    .json({
      message: `Search field not allowed. Please use only ${formattedFields}`,
    });
});

app.listen(PORT, () => console.log(`server connected on port ${PORT}`));
