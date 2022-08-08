import "./App.css";
import React, { Component } from "react";
import { getGenres } from "./services/fakeGenreService";
import { getMovies } from "./services/fakeMovieService";

class table extends Component {
  state = {
    genre: getGenres(),
    movies: getMovies(),
  };
  render() {
    return <main className="container">{this.available()}</main>;
  }
  deleteRow = (value) => {
    console.log(value);
    this.setState({
      movies: this.state.movies.filter((el) => {
        if (el !== value) {
          return el;
        }
      }),
    });
  };
  available() {
    if (this.state.movies.length === 0) return <h1>empty</h1>;
    else {
      return (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>{this.renderMovies()}</tbody>
        </table>
      );
    }
  }

  renderMovies() {
    return this.state.movies.map((el) => {
      return (
        <tr key={el._id}>
          <td scope="col">{el.title}</td>
          <td scope="col">{el.genre.name}</td>
          <td scope="col">{el.numberInStock}</td>
          <td scope="col">{el.dailyRentalRate}</td>
          <td>
            <button
              onClick={() => this.deleteRow(el)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }
}

export default table;
