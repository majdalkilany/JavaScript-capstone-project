export const commentsCounterPopup = () => {
  const countsCounterElements = document.querySelectorAll(
    '.div-element-comments'
  );
  const countsCounterElement = document.getElementById('commentsCount');
  const commentsCount = countsCounterElements.length;
  countsCounterElement.textContent = `comments (${commentsCount})`;
  return commentsCount;
};
