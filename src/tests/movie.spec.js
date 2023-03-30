import request from "supertest";
import app from "../app.js";
import { loadMovies } from "../helpers/movies.js";


test("Is info page returning correct title", async () => {
    const movies = await loadMovies();
    for (let i = 0; i < movies.length; i++) {
      const response = await request(app)
        .get("/movies/" + movies[i].id)
        .expect("Content-Type", "text/html; charset=utf-8")
        .expect(200);
  
      expect(response.text.includes(`${movies[i].attributes.title}`)).toBeTruthy();
    }
  });