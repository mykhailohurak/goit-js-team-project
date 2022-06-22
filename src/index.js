import { renderPopularMovies } from './js/render-popular-movies';
import { changeMoviesPage } from './js/change-movies-page';
import './js/render-search-movies';

async function downloadMainHomePage() {
  const totalPages = await renderPopularMovies();
  changeMoviesPage(totalPages > 50 ? 50 : totalPages, renderPopularMovies);
}

downloadMainHomePage();

/*
Імпорт всього файлу modal-film.js
*/

import * as things from './js/modal-film';
import * as elem from './js/modal-students';
import * as elements from './js/localStorage';
import * as things from './js/change-button-condition';