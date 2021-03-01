import {ActionType} from './action';
import mockFilms from '../mocks/films';
import {promoFilm} from '../mocks/promo-film';
import {DEFAULT_GENRE, DEFAULT_VISIBLE_FILMS_COUNT} from '../const';

const initialState = {
  activeGenre: DEFAULT_GENRE,
  films: mockFilms,
  promo: promoFilm,
  visibleFilmsCount: DEFAULT_VISIBLE_FILMS_COUNT
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        activeGenre: action.payload,
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
    case ActionType.INCREASE_VISIBLE_FILMS_COUNT:
      return {
        ...state,
        visibleFilmsCount: state.visibleFilmsCount + DEFAULT_VISIBLE_FILMS_COUNT,
      };
  }

  return state;
};


export {reducer};
