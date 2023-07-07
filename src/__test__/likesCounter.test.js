import { likesCounter } from '../modules/likesCounter.js';

describe('likesCounter', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="likes-count">10</div>
      <div class="likes-count">20</div>
      <div class="likes-count">abc</div>
      <div class="likes-count">30</div>
    `;
  });
  test('should return the correct sum of likes count', () => {
    const result = likesCounter();
    expect(result).toBe(60);
  });
  test('should handle NaN values gracefully', () => {
    document.querySelectorAll('.likes-count')[2].textContent = 'xyz';
    const result = likesCounter();
    expect(result).toBe(60);
  });
});