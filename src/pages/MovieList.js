import React, { Component } from 'react';
import { MovieCard, Loading } from '../components';
// import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      loading: true,
    };

    this.handleState = this.handleState.bind(this);
  }

  componentDidMount() {
    // movieAPI.getMovies().then((data) => {
    //   this.setState({
    //     movies: data,
    //     loading: false,
    this.handleState();
    // Consulta PR #51 Lanai
  }

  async handleState() {
    const moviesList = await movieAPI.getMovies();
    this.setState({
      movies: moviesList,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;

    if (loading === true) return <Loading />;

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
