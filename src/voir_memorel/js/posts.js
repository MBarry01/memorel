const posts = [
  {
    id: 1,
    author: {
      name: "Jean Dupon",
      avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a",
    },
    timestamp: "2h",
    content: {
      text: "Belle journée pour coder ! 💻✨",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    },
    stats: {
      likes: 42,
      comments: 8,
      shares: 3,
    },
  },
  {
    id: 2,
    author: {
      name: "Jean Dupont",
      avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a",
    },
    timestamp: "1j",
    content: {
      text: "Week-end à Paris ! 🗼",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
    },
    stats: {
      likes: 128,
      comments: 24,
      shares: 12,
    },
  },
];

function createPostElement(post) {
  const postElement = document.createElement("div");
  postElement.className = "post";

  postElement.innerHTML = `
      <div class="post-header">
          <img src="${post.author.avatar}" alt="${post.author.name}">
          <div class="post-meta">
              <h3>${post.author.name}</h3>
              <span>${post.timestamp}</span>
          </div>
      </div>
      <div class="post-content">
          <p>${post.content.text}</p>
          ${
            post.content.image
              ? `<img src="${post.content.image}" alt="Post image">`
              : ""
          }
      </div>
      <div class="post-stats">
          <span>${post.stats.likes} J'aime</span>
          <div>
              <span>${post.stats.comments} commentaires</span>
              <span> · </span>
              <span>${post.stats.shares} partages</span>
          </div>
      </div>
      <div class="post-buttons">
          <button>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
              </svg>
              J'aime
          </button>
          <button>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              Commenter
          </button>
          <button>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="18" cy="5" r="3"/>
                  <circle cx="6" cy="12" r="3"/>
                  <circle cx="18" cy="19" r="3"/>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
              </svg>
              Partager
          </button>
      </div>
  `;

  return postElement;
}
