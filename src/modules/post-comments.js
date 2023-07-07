const APP_ID = 'DUanzoHMk8l8HLimHh6p';

export const postComments = async (username, comment, itemId) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', 'Basic bWFqZDowMDAw');
  const raw = JSON.stringify({
    item_id: Number(itemId),
    comment,
    username,
  });
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };
  fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}/comments`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => result)
    .catch((error) => error);
};
