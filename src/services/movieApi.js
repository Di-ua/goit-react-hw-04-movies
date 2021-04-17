import axios from 'axios';

class BaseHttpService {
  baseURL = 'https://api.themoviedb.org/3/';
  key = '4b09b9f11ab38c2c9b3fb8d82d1b956b';
  language = 'en-US';
  fetchPopularMovies = () => {
    return this.get(`trending/movie/day?api_key=${this.key}&adult=false`);
  };

  fetchMoviesWithQuery = (searchQuery, page = 1) => {
    return this.get(
      `search/movie?api_key=${this.key}&language=${this.language}&query=${searchQuery}&page=${page}&include_adult=false`,
    );
  };

  fetchMovieDetails = id => {
    return this.get(
      `movie/${id}?api_key=${this.key}&language=${this.language}`,
    );
  };

  fetchMovieCast = id => {
    return this.get(
      `movie/${id}/credits?api_key=${this.key}&language=${this.language}`,
    );
  };

  fetchMovieReviews = id => {
    return this.get(
      `movie/${id}/reviews?api_key=${this.key}&language=${this.language}`,
    );
  };
  
  get = (url = '') => {
    return axios.get(`${this.baseURL}${url}`).then(res => res.data);
  };
}

const baseHttpService = new BaseHttpService();

export default baseHttpService;