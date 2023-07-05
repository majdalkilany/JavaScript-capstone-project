const APP_ID = "DUanzoHMk8l8HLimHh6p";

export const fetchAPI = async () => {
  const baseURL = 'https://api.tvmaze.com/shows';
  const response = await fetch(baseURL);
  const data = await response.json();
  const shows = data.slice(0, 15);

  const likes = await getLikes();
  shows.forEach((show) => {
    const itemId = show.id;
    const likeData = likes.find((item) => item.item_id === itemId);
    show.likes = likeData ? likeData.likes : 0;
  });

  return shows;
};

const getLikes = async () => {
  const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}/likes`);
  const data = await res.json();
  return data;
};

export const updateLikeCount = async (itemId) => {
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

    const likesCountElement = document.getElementById(`likes-count-${itemId}`);
    if (likesCountElement) {
      const likesCount = parseInt(likesCountElement.textContent) + 1;
      likesCountElement.textContent = likesCount;
    }
  } catch (e) {
    console.error(e);
  }
};
