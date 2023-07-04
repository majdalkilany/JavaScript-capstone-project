import './style.css';
const APP_ID= "DUanzoHMk8l8HLimHh6p";
const fetchAPI = async () => {
  const baseURL = 'https://api.tvmaze.com/shows';
  const response = await fetch(baseURL);
  const data = await response.json();
  const shows = data.slice(0, 15);
};
