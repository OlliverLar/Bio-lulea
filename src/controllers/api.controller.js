import apiAdapter from "../helpers/apiAdapter.js";
import { loadMovies, loadMovie } from "../helpers/movies.js";
import { getAllScreenings, getMovieScreenings, screeningsStartpage } from "../helpers/screenings.js";

const apiCtrl = {};

apiCtrl.movies = async (req, res) => {
  res.json(await loadMovies());
};

apiCtrl.movie = async (req, res) => {
  res.json(await loadMovie(req.params.id));
};

apiCtrl.startpageScreenings = async (req, res) => {
  res.json(await screeningsStartpage(apiAdapter));
};

apiCtrl.movieScreenings = async (req, res) => {
  if (!req.query.page) {
    res.json(await getMovieScreenings(apiAdapter, req.params.id));
  } else {
    res.json(await getMovieScreenings(apiAdapter, req.params.id, req.query.page));
  }
};

apiCtrl.getAllScreenings = async (req, res) => {
  res.json(await getAllScreenings());
};

export default apiCtrl;
