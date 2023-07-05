import './style.css';
import { runModal } from './modules/modal.js';

const fetchAPI = async () => {
  const baseURL = 'https://api.tvmaze.com/shows';
  const response = await fetch(baseURL);
  const data = await response.json();
  const shows = data.slice(0, 15);

  // Display the show list in the HTML
  const showListContainer = document.getElementById('show-list');
  shows.forEach((show) => {
    const showTitle = show.name;
    const showImage = show.image.medium;

    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <img src="${showImage}" alt="${showTitle}">
      <h2 class="title">${showTitle}</h2>
      <div class="interact">
        <button class="comments myBtn" >Comment</button>
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
  });
};

fetchAPI().catch((error) => console.log(error));
// const btn = document.querySelector('.myBtn');
// btn.addEventListener('click', runModal);
