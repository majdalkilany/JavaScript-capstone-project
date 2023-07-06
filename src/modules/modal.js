// Get the modal

// Get the button that opens the modal

export const runModal = ({
  name,
  summary,
  language,
  genres,
  image: { original },
}) => {
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
};
