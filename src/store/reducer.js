import {ActionType} from './action';
import {DEFAULT_GENRE, DEFAULT_VISIBLE_FILMS_COUNT, AuthorizationStatus} from '../const';

const initialState = {
  activeGenre: DEFAULT_GENRE,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false,
  films: [],
  film: null,
  reviews: [],
  favoriteFilms: [],
  promo: {
    backgroundImage: ``,
    genre: ``,
    name: ``,
    posterImage: ``,
    released: 0,
  },
  visibleFilmsCount: DEFAULT_VISIBLE_FILMS_COUNT,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        activeGenre: action.payload,
      };
    case ActionType.INCREASE_VISIBLE_FILMS_COUNT:
      return {
        ...state,
        visibleFilmsCount: state.visibleFilmsCount + DEFAULT_VISIBLE_FILMS_COUNT,
      };
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload.films,
        isDataLoaded: action.payload.isDataLoaded,
      };
    case ActionType.LOAD_PROMO_FILM:
      return {
        ...state,
        promo: action.payload.film,
        isDataLoaded: action.payload.isDataLoaded,
      };
    case ActionType.LOAD_FAVORITE_FILMS_LIST:
      return {
        ...state,
        favoriteFilms: action.payload,
      };
    case ActionType.LOAD_FILM:
      return {
        ...state,
        film: action.payload,
      };
    case ActionType.LOAD_REVIEWS_BY_ID:
      return {
        ...state,
        reviews: action.payload,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.RESET_GENRE:
      return {
        ...state,
        activeGenre: DEFAULT_GENRE,
      };
    case ActionType.RESET_VISIBLE_FILMS_COUNT:
      return {
        ...state,
        visibleFilmsCount: DEFAULT_VISIBLE_FILMS_COUNT,
      };
  }

  return state;
};

const errorInitialState = {
  error: null,
};

const errorReducer = (state = errorInitialState, action) => {
  const {error} = action;

  if (error) {
    return {
      error
    };
  }
  return state;
};

export {reducer, errorReducer};
