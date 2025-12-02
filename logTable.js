/** @format */

import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "node:path";

async function viewAllProducts() {
  const db = await open({
    filename: path.join("database.db"),
    driver: sqlite3.Database,
  });

  try {
    const products = await db.all("SELECT * FROM products");
    const display = products.map(({
      title,
      artist,
      price,
      image,
      year,
      genre,
      stock,
    }) => {
      return { title, artist, price, image, year, genre, stock };
      
    });

    console.table(display);
  } catch (err) {
    console.error("Error fetching products:", err.message);
  } finally {
    await db.close();
  }
}

viewAllProducts();
