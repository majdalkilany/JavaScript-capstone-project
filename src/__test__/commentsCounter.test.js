import { commentsCounterPopup } from '../modules/commentsCounterPopup.js';

describe('comments Counter on Popup', () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <h6 id="commentsCount"></h6>
      <div class="div-element-comments">10</div>
      <div class="div-element-comments">20</div>
      <div class="div-element-comments">abc</div>
      <div class="div-element-comments">30</div>
    `;
  });
  test('should return the correct sum of likes count', () => {
    const result = commentsCounterPopup();
    expect(result).toBe(4);
  });
});

describe('comments Counter on Popup if thereis no comments ', () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <h6 id="commentsCount"></h6>
 
    `;
  });
  test('should return zero if there is no comments ', () => {
    const result = commentsCounterPopup();
    expect(result).toBe(0);
  });
});
