export function moviesCounter() {
  const moviesCounterElement = document.querySelector('.counter.movies');
  const showListContainer = document.getElementById('show-list');
  const moviesCount = showListContainer.children.length;
  moviesCounterElement.textContent = moviesCount;
  return moviesCount;
}
