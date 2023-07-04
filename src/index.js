import './style.css';

const fetchAPI = async () => {
  const baseURL = 'https://api.tvmaze.com/shows';
  const response = await fetch(baseURL);
  const data = await response.json();
  const shows = data.slice(0, 15); // Limit to shows
};
