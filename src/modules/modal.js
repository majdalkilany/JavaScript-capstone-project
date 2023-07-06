import { postComments } from './post-comments.js';

export const runModal = async ({
  id,
  name,
  summary,
  language,
  genres,
  image: { original },
}) => {
  const commentsAPI = await fetchAPI(id);
  console.log(commentsAPI);
  const modal = document.getElementById('myModal');
  const modalContent = document.querySelector('.modal-content');

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
      modalContent.textContent = '';
    }
  };

  const descriptionContainer = document.createElement('div');
  descriptionContainer.classList.add('modal-des');
  modalContent.appendChild(descriptionContainer);

  modalContent.innerHTML = `
  <span class="close" >&times;</span>
  <h6>MovieShow</h6>
  <div class= "modal-content-container">
  <img src="${original}" alt="${name}" class= "img-preview">
  <div class= "modal-description">
  <h3> title : ${name}</h3>
  <h4> language : ${language} </h4>
  <h4> genres : ${genres[0]} ${genres[1]} </h4>
  <p>  <span class="summary">Summary</span> : ${summary}  </p>
  <br><br>
  </div>

  </div>
  <div id="comments-container">

</div>
  <form action="POST" id="myForm">
  <input type="hidden" name="item_id" id="item_id" value="${id}">

  <input type="text" name="username"
   id="username"
   placeholder="Enter your name ..."> <br> <br>
  <textarea id="comment"
   name="comment"
   rows="4" cols="40"
   placeholder="Enter your comment here..."></textarea><br>
   <input type="submit" value="comment" class="comments">
</form>

  `;
  // Get the <span> element that closes the modal
  const span = document.querySelector('.close');
  console.log(span);

  // When the user clicks the button, open the modal
  modal.style.display = 'block';

  // When the user clicks on <span> (x), close the modal
  span.onclick = () => {
    // console.log(span);
    modal.style.display = 'none';
    modalContent.textContent = '';
  };
  document.getElementById('myForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const comment = document.getElementById('comment').value;
    const itemId = document.getElementById('item_id').value;
    renderComments(username, comment);
    postComments(username, comment, itemId);
    event.target.reset();
  });

  if (commentsAPI.length >= 1) {
    // eslint-disable-next-line camelcase
    commentsAPI.forEach(({ username, comment, creation_date }) => {
      renderComments(username, comment, creation_date);
    });
  }
};

const renderComments = (username, commentMessage, createdTime) => {
  const commentsContainer = document.getElementById('comments-container');
  const divElement = document.createElement('div');
  divElement.classList.add('div-element-comments');
  commentsContainer.appendChild(divElement);
  const commenterName = document.createElement('h6');
  commenterName.classList.add('commenter-name');
  commenterName.textContent = username;
  divElement.appendChild(commenterName);
  const comment = document.createElement('p');
  comment.classList.add('comment');
  comment.textContent = commentMessage;
  divElement.appendChild(comment);

  if (!createdTime) {
    const creationDate = new Date();
    [createdTime] = creationDate.toISOString().split('T');
  }

  const createdAt = document.createElement('span');
  createdAt.classList.add('span-time');
  createdAt.textContent = `at: ${createdTime}`;
  comment.appendChild(createdAt);
};

const fetchAPI = async (id) => {
  const baseURL = `
    https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DUanzoHMk8l8HLimHh6p/comments?item_id=${id}`;
  const response = await fetch(baseURL);
  const data = await response.json();
  return data;
};
