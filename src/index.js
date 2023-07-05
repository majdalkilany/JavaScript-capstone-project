import './style.css';
const APP_ID= "DUanzoHMk8l8HLimHh6p";
let shows;
const fetchAPI = async () => {
  const baseURL = 'https://api.tvmaze.com/shows';
  const response = await fetch(baseURL);
  const data = await response.json();
  shows = data.slice(0, 15);
};

// function Get likes : 

const getLikes = async() => {
const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}/likes`);
const data = await res.json();
return data;
console.log(data);
}
getLikes();
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
    if (!fetchData.ok) throw new Error('like cannot be add');
    return fetchData;
  } catch (e) {
    return e;
  }
};

fetchAPI().then(res => {
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
        <button class="comments">Comment</button>
        <button class="likes">Likes</button>
      </div>
      <hr>
    `;

    showListContainer.appendChild(listItem);
  });
    }).catch(err => console.log(err));

