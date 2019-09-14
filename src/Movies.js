import React, { Component } from "react";
import MoviesFan from "./movie_fan";

class MoviesList extends Component {
  render() {
    const { movies, profiles, users } = this.props

    return (
      <div>
        {
          Object.keys(movies).map(movie_key => (
            <div key={movie_key}>
              <h4>{movies[movie_key].name}</h4>
              <MoviesFan movie_key={movie_key} users={users} profiles={profiles}></MoviesFan>
              <br></br>
            </div>
          ))
        }
      </div>
    );
  }
}

export default MoviesList