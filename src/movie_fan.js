import React, { Component } from "react";

class MoviesFan extends Component {
  render() {
    const { movie_key, profiles, users } = this.props
    const filtered_profiles = profiles.filter(profile => profile.favoriteMovieID === movie_key)

    return (
      <div>
        {filtered_profiles.length > 0 ? filtered_profiles.map(profile => (
            <p key={profile.userID}>{users[profile.userID].name}</p>
        )) : (
            <p>no body</p>
        )}
      </div>
    );
  }
}

export default MoviesFan