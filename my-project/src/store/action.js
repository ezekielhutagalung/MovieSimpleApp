export function fetchNowMov(payload) {
  return { type: 'FETCHNOWPLAYING', payload }
}

export function fetchDetailMov(payload) {
  console.log(payload, 'diaction atas')
  return { type: 'MOVIEBYID', payload }
}

export function fetchNowPlayingMovie() {
  return async (dispatch) => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=93b2c5a5799471f89d512bdaab76267f'
      )
      const data = await response.json()

      dispatch(fetchNowMov(data.results))
    } catch (err) {
      console.log(err.message)
    }
  }
}

export function fetchMovieDetail(movie_id) {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=93b2c5a5799471f89d512bdaab76267f`
      )
      const data = await response.json()
      console.log(data, 'ini di data')
      dispatch(fetchDetailMov(data))
    } catch (err) {
      console.log(err.message)
    }
  }
}
