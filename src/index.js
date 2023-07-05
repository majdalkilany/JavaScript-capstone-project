import './style.css';

const fetchAPI = async () => {
  const baseURL = 'https://api.tvmaze.com/shows';
  const response = await fetch(baseURL);
  const data = await response.json();
  const shows = data.slice(0, 15); // Limit to shows

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

    showListContainer.appendChild(listItem);
  });
};

fetchAPI().catch((error) => console.log(error));
