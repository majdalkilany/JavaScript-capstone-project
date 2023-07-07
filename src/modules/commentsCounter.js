export function commentsCounter() {
  const commentsElements = document.querySelectorAll('.comments');
  const commentsCount = commentsElements.length;
  return commentsCount;
}
