// import './style.css';
// import { fetchAPI } from './modules/api.js';
// import { displayData } from './modules/utils.js';

// const showListContainer = document.getElementById('show-list');

// fetchAPI()
//   .then((shows) => {
//     shows.forEach((show) => {
//       const showTitle = show.name;
//       const showImage = show.image.medium;
//       const itemId = show.id;
//       const listItem = document.createElement('li');
//       listItem.innerHTML = `
//         <img src="${showImage}" alt="${showTitle}">
//         <h2 class="title">${showTitle}</h2>
//         <div class="interact">
//           <button class="comments">Comment</button>
//           <button class="likes" onclick="updateLikeCount(${itemId})">Likes</button>
//           <span class="likes-count" id="likes-count-${itemId}">${show.likes}</span>
//         </div>
//         <hr>
//       `;

//       showListContainer.appendChild(listItem);
// const likeButton = document.querySelector('.likes');
//       likeButton.addEventListener('click', () => {
//         updateLikeCount(itemId);
//       });
//     });

//     displayData(shows);
//   })
//   .catch((err) => console.log(err));

import './style.css';

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
  const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}/likes`);
  const data = await res.json();
  return data;
};

const updateLikeCount = async (itemId) => {
  try {
    const fetchData = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}/likes`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: itemId,
        }),
      },
    );
    if (!fetchData.ok) throw new Error('Like cannot be added');
    // Update the like count on the page
    const likesCountElement = document.getElementById(`likes-count-${itemId}`);
    if (likesCountElement) {
      const likesCount = parseInt(likesCountElement.textContent, 10) + 1;
      likesCountElement.textContent = likesCount;
    }
  } catch (e) {
    console.error(e);
  }
};

fetchAPI()
  .then(() => {
    // Display the show list in the HTML
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
          <button class="comments">Comment</button>
          <button class="likes">Likes</button>
          <span class="likes-count" id="likes-count-${itemId}">${show.likes}</span>
        </div>
        <hr>
      `;
      showListContainer.appendChild(listItem);
      const likeButton = document.querySelector('.likes');
      likeButton.addEventListener('click', () => {
        updateLikeCount(itemId);
      });
    });
  })
  .catch((err) => console.log(err));