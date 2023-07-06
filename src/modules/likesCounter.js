export function likesCounter() {
  const likesCountElements = document.querySelectorAll('.likes-count');
  let likesCount = 0;
  likesCountElements.forEach((element) => {
    const count = parseInt(element.textContent, 10);
    if (!Number.isNaN(count)) {
      likesCount += count;
    }
  });
  return likesCount;
}
