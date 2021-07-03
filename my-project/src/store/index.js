import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
  MovieNowPlaying: [],
  MovieId: {},
}

function reducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case 'FETCHNOWPLAYING':
      return { ...state, MovieNowPlaying: payload }
    case 'MOVIEBYID':
      return { ...state, MovieId: payload, loading: false }
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store
