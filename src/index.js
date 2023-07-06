
import { runModal } from './modules/modal.js';

import './style.css';
import { commentsCounter } from './modules/commentsCounter.js';
import { likesCounter } from './modules/likesCounter.js';
import { moviesCounter } from './modules/moviesCounter.js';

const APP_ID = 'DUanzoHMk8l8HLimHh6p';
let shows;

const fetchAPI = async () => {
  const baseURL = 'https://api.tvmaze.com/shows';
  const response = await fetch(baseURL);
  const data = await response.json();

  shows = data.slice(0, 15);
  // Fetch likes count for each item and combine with base API data
  const likes = await getLikes();
  shows.forEach((show) => {
    const itemId = show.id;
    const likeData = likes.find((item) => item.item_id === itemId);
    show.likes = likeData ? likeData.likes : 0;
  });
};

const getLikes = async () => {
  const res = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}/likes`
  );
  const data = await res.json();
  return data;
};

const updateLikeCount = async (itemId) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', 'Basic bWFqZDowMDAw');

  const raw = JSON.stringify({
    item_id: Number(itemId),
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}/likes`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error));

  const likesCountElement = document.getElementById(`likes-count-${itemId}`);
  if (likesCountElement) {
    const likesCount = parseInt(likesCountElement.textContent, 10) + 1;
    likesCountElement.textContent = likesCount;
  }
};

fetchAPI()
  .then(() => {
    const showListContainer = document.getElementById('show-list');
    shows.forEach((show) => {
      const showTitle = show.name;
      const showImage = show.image.medium;
      const itemId = show.id;
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <img src="${showImage}" alt="${showTitle}">
        <h2 class="title">${showTitle}</h2>
        <div class="interact">
          <button class="comments myBtn">Comment</button>
          <button class="likes" data-item-id="${itemId}"><i class="far fa-heart"></i></button>
          <span class="likes-count" id="likes-count-${itemId}">${show.likes}</span>
        </div>
        <hr>
      `;
      const btn = listItem.querySelector('.myBtn');
      btn.addEventListener('click', () => {
        const modal = document.getElementById('myModal');
        modal.innerHTML = ` <div class="modal-content">
          <span class="close">&times;</span>
          <h6>MovieShow</h6>
        </div>`;
        runModal(show);
      });

      showListContainer.appendChild(listItem);
      const likeButton = listItem.querySelector('.likes');
      likeButton.addEventListener('click', () => {
        const { itemId } = likeButton.dataset;
        updateLikeCount(itemId);
      });
    });

    const commentsCount = commentsCounter();
    const likesCount = likesCounter();
    const moviesCount = moviesCounter();

    const commentsCounterElement = document.querySelector('.counter.comments');
    const likesCounterElement = document.querySelector('.counter.likes');
    const moviesCounterElement = document.querySelector('.counter.movies');
    const allMoviesCounterElement = document.querySelector('#all .counter');

    commentsCounterElement.textContent = commentsCount;
    likesCounterElement.textContent = likesCount;
    moviesCounterElement.textContent = moviesCount;
    allMoviesCounterElement.textContent = moviesCount;
  })
  .catch((err) => console.log(err));
