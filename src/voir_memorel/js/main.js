// Initialize posts
function initializePosts() {
  const postsList = document.querySelector('.posts-list');
  posts.forEach((post) => {
    postsList.appendChild(createPostElement(post));
  });
}

// Handle post creation
const createPostButton = document.querySelector('.post-input button');
createPostButton.addEventListener('click', () => {
  // In a real app, this would open a post creation modal
  alert('Création de publication (fonctionnalité simulée)');
});

// Handle profile actions
const editCoverButton = document.querySelector('.edit-cover');
editCoverButton.addEventListener('click', () => {
  alert('Modification de la photo de couverture (fonctionnalité simulée)');
});

const editPhotoButton = document.querySelector('.edit-photo');
editPhotoButton.addEventListener('click', () => {
  alert('Modification de la photo de profil (fonctionnalité simulée)');
});

const editDetailsButton = document.querySelector('.edit-details');
editDetailsButton.addEventListener('click', () => {
  alert('Modification des détails (fonctionnalité simulée)');
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  initializePosts();
});
