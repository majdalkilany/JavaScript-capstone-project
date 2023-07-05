import './style.css';
import { fetchAPI } from './modules/api.js';
import { displayData } from './modules/utils.js';

const showListContainer = document.getElementById('show-list');

fetchAPI()
  .then((shows) => {
    shows.forEach((show) => {
      const showTitle = show.name;
      const showImage = show.image.medium;
      const itemId = show.id;
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <img src="${showImage}" alt="${showTitle}">
        <h2 class="title">${showTitle}</h2>
        <div class="interact">
          <button class="comments">Comment</button>
          <button class="likes" onclick="updateLikeCount(${itemId})">Likes</button>
          <span class="likes-count" id="likes-count-${itemId}">${show.likes}</span>
        </div>
        <hr>
      `;

      showListContainer.appendChild(listItem);
    });

    displayData(shows);
  })
  .catch((err) => console.log(err));
