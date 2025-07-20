// Sample data structure - in real implementation this would be loaded from JSON files
const siteData = {
  reviews: [
    {
      id: 1,
      author: "Alex Johnson",
      text: "This game is absolutely addictive! The egg shooting mechanics are so satisfying and the power-ups make every level exciting. I've been playing for hours and still can't get enough. The graphics are stunning and the sound effects are perfect!",
      rating: 5,
    },
    {
      id: 2,
      author: "Sarah Chen",
      text: "As someone who loves puzzle games, Egg Shooter 2 is exactly what I was looking for. The slingshot mechanics are intuitive and the combo system is incredibly rewarding. The difficulty progression is perfect - challenging but fair!",
      rating: 5,
    },
    {
      id: 3,
      author: "Mike Rodriguez",
      text: "My kids love this game and I love that it's both fun and educational. The colorful eggs and explosive effects keep them engaged for hours. The controls are simple enough for kids but the strategy keeps adults interested too.",
      rating: 5,
    },
    {
      id: 4,
      author: "Emma Thompson",
      text: "Perfect for quick gaming sessions! I play it on my commute and the levels are just the right length. The power-ups add a great strategic element and the boss battles are epic. Highly recommend for any puzzle game fan!",
      rating: 5,
    },
    {
      id: 5,
      author: "David Park",
      text: "I'm not usually into mobile games, but Egg Shooter 2 changed my mind! The precision shooting mechanics are so satisfying and the visual effects are amazing. It's become my go-to game for relaxation and fun.",
      rating: 5,
    },
    {
      id: 6,
      author: "Lisa Wilson",
      text: "This is the best bubble shooter game I've ever played. The egg theme is unique and the gameplay is incredibly polished. The achievement system keeps me motivated and the global leaderboards add great competition!",
      rating: 5,
    },
  ],

  news: [
    {
      id: 1,
      title: "New Power-up System Released",
      category: "Game Updates",
      icon: "⚡",
      excerpt:
        "We've added an exciting new power-up system with 10 unique abilities that will help you blast through challenging levels. From explosive eggs to rainbow blasters, discover new ways to dominate the board!",
      fullText:
        "We're thrilled to announce our biggest update yet! We've added an exciting new power-up system with 10 unique abilities that will help you blast through challenging levels. From explosive eggs that clear entire rows to rainbow blasters that match any color, these new power-ups will revolutionize your egg shooting experience. Each power-up has been carefully balanced to provide strategic advantages without making the game too easy. You'll need to collect special tokens during gameplay to unlock these powerful abilities. The new system also includes a progression tree where you can upgrade your favorite power-ups to make them even more effective. Early feedback from our beta testers has been overwhelmingly positive, with many players reporting that the new power-ups have added hours of replayability to the game.<br><br><img src='./image/new1.jpg' alt='New Power-up System' style='width: 100%; max-width: 500px; border-radius: 8px; margin: 20px 0;'>",
    },
    {
      id: 2,
      title: "Community Spotlight: Top Players",
      category: "Player Stories",
      icon: "🏆",
      excerpt:
        "Meet the legendary players who have mastered the art of egg shooting! Discover their strategies, favorite power-ups, and tips for achieving the highest scores in the game.",
      fullText:
        "We're absolutely amazed by the incredible skill and dedication of our community! This month, we're featuring some of the most legendary players who have mastered the art of egg shooting. These top players have achieved incredible scores and discovered advanced strategies that we never even considered during development. From players who can chain 50+ combos in a single level to those who have unlocked every achievement in record time, our community continues to push the boundaries of what's possible in Egg Shooter 2. Many of these players have shared their strategies and tips, helping newcomers improve their skills and discover new ways to approach challenging levels. We love seeing how each player develops their own unique style and approach to the game.",
    },
    {
      id: 3,
      title: "Performance Improvements & Bug Fixes",
      category: "Game Updates",
      icon: "🔧",
      excerpt:
        "We've optimized the game for smoother performance and fixed several minor bugs. Your egg shooting experience should now be even more fluid and enjoyable.",
      fullText:
        "We're constantly working to improve your Egg Shooter 2 experience, and this update brings significant performance improvements and bug fixes. We've optimized the rendering engine to provide smoother shooting animations, especially on older devices. The egg collision detection is now more responsive, and we've reduced loading times between different levels. We've also fixed several minor bugs that were affecting the user experience, including issues with power-up activation and combo counting. The game should now run more smoothly across all devices, providing an even more enjoyable egg shooting experience. We've also improved the auto-save feature to ensure your progress is always protected. These updates are part of our ongoing commitment to providing the best possible gaming experience.",
    },
    {
      id: 4,
      title: "New Boss Battle Levels Released",
      category: "Game Updates",
      icon: "👹",
      excerpt:
        "Introducing our new boss battle system with 5 epic encounters that will test your egg shooting skills to the limit. Each boss has unique mechanics and requires different strategies to defeat.",
      fullText:
        "We're excited to introduce our brand new boss battle system! This major update features 5 epic boss encounters that will test your egg shooting skills to the limit. Each boss has unique mechanics and requires different strategies to defeat. From the Egg King who multiplies eggs rapidly to the Shadow Shooter who creates dark zones on the board, these bosses will challenge even the most experienced players. The boss battles are designed to be both challenging and fair, with clear visual indicators and strategic opportunities. Many of our players have found that these boss battles add a whole new dimension to the game, requiring them to think strategically and adapt their usual playstyle. The bosses also drop special rewards that can't be obtained anywhere else in the game.<br><br><img src='./image/new2.jpg' alt='Boss Battle Levels' style='width: 100%; max-width: 500px; border-radius: 8px; margin: 20px 0;'>",
    },
    {
      id: 5,
      title: "Player Story: From Beginner to Champion",
      category: "Player Stories",
      icon: "🌟",
      excerpt:
        "Read the inspiring story of Tom, a casual gamer who discovered his passion for competitive egg shooting and became one of our top players.",
      fullText:
        "Today we want to share the inspiring story of Tom, a casual gamer who discovered his passion for competitive egg shooting. Tom started playing Egg Shooter 2 during his lunch breaks at work and was immediately hooked by the simple but engaging mechanics. 'I started playing just to pass the time,' Tom shares. 'But then I discovered the global leaderboards and realized I could actually compete with players from around the world.' Tom's story is just one example of how our game is bringing people together and creating a competitive community. He has since achieved top 10 rankings in multiple categories and has even started a small gaming group with his colleagues. 'It's amazing how something so simple can become so competitive and engaging,' he says. Stories like Tom's remind us why we created this game and inspire us to continue improving the experience for all our players.",
    },
    {
      id: 6,
      title: "Advanced Combo System Released",
      category: "Game Updates",
      icon: "💥",
      excerpt:
        "New advanced combo system with chain reactions, multiplier bonuses, and special effects are now available. Master the art of creating massive combos for maximum points!",
      fullText:
        "We're excited to announce the release of our advanced combo system! This major update introduces sophisticated chain reactions, multiplier bonuses, and special effects that will take your egg shooting to the next level. The new combo system rewards skilled players with massive point multipliers and spectacular visual effects. Chain reactions can now trigger across the entire board, creating cascading explosions that are both visually stunning and highly rewarding. We've also added special combo effects that activate when you achieve certain milestones, such as clearing an entire row or column in a single shot. The system is designed to be intuitive while providing deep strategic gameplay. Early feedback from our beta testers has been overwhelmingly positive, with many users reporting that the new combo system has inspired them to develop more advanced strategies and achieve higher scores than ever before.",
    },
  ],

  contact: {
    email: "contact@gaminghb.com",
    phone: "+1 (403) 979-0103",
    address: "2687 Maple Street, Vancouver, British Columbia V6J 3T7, Canada",
    mapLocation:
      "2687 Maple Street, Vancouver, British Columbia V6J 3T7, Canada",
  },
};

// Load reviews from JSON
async function loadReviews() {
  const reviewsContainer = document.getElementById("reviews-container");
  if (!reviewsContainer) {
    console.warn("Reviews container not found");
    return;
  }

  try {
    console.log("Loading reviews from JSON...");
    const response = await fetch("./js/reviews.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Reviews loaded successfully:", data.reviews.length, "reviews");

    data.reviews.forEach((review) => {
      const reviewCard = document.createElement("div");
      reviewCard.className = "review-card";

      const stars = "★".repeat(review.rating);

      reviewCard.innerHTML = `
              <div class="review-rating">
                  <span class="star">${stars}</span>
              </div>
              <p class="review-text">"${review.text}"</p>
              <div class="review-author">${review.author}</div>
          `;

      reviewsContainer.appendChild(reviewCard);
    });
  } catch (error) {
    console.error(
      "Error loading reviews from JSON, using fallback data:",
      error
    );
    // Fallback to hardcoded data if JSON fails
    siteData.reviews.forEach((review) => {
      const reviewCard = document.createElement("div");
      reviewCard.className = "review-card";

      const stars = "★".repeat(review.rating);

      reviewCard.innerHTML = `
              <div class="review-rating">
                  <span class="star">${stars}</span>
              </div>
              <p class="review-text">"${review.text}"</p>
              <div class="review-author">${review.author}</div>
          `;

      reviewsContainer.appendChild(reviewCard);
    });
  }
}

// Load news from JSON
async function loadNews() {
  const newsContainer = document.getElementById("news-container");
  if (!newsContainer) {
    console.warn("News container not found");
    return;
  }

  try {
    console.log("Loading news from JSON...");
    const response = await fetch("./js/news.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("News loaded successfully:", data.news.length, "articles");

    // Group articles by category
    const gameUpdates = data.news.filter(
      (article) => article.category === "Game Updates"
    );
    const playerStories = data.news.filter(
      (article) => article.category === "Player Stories"
    );

    // Create Game Updates section
    const updatesSection = document.createElement("div");
    updatesSection.className = "news-section-category";
    updatesSection.innerHTML = `
      <h2 class="category-title">Game Updates</h2>
      <div class="news-grid-category">
        ${gameUpdates
          .map(
            (article) => `
          <div class="news-card">
            <div class="news-icon-container">
              <div class="news-icon">${article.icon}</div>
            </div>
            <div class="news-content">
              <div class="news-category">${article.category}</div>
              <h3 class="news-title">${article.title}</h3>
              <p class="news-excerpt">${article.excerpt}</p>
              <button class="btn btn-secondary read-more-btn" data-article-id="${article.id}">Read More</button>
              <div class="news-full-text" id="full-text-${article.id}" style="display: none;">
                <p>${article.fullText}</p>
              </div>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    `;
    newsContainer.appendChild(updatesSection);

    // Create Player Stories section
    const storiesSection = document.createElement("div");
    storiesSection.className = "news-section-category";
    storiesSection.innerHTML = `
      <h2 class="category-title">Player Stories</h2>
      <div class="news-grid-category">
        ${playerStories
          .map(
            (article) => `
          <div class="news-card">
            <div class="news-icon-container">
              <div class="news-icon">${article.icon}</div>
            </div>
            <div class="news-content">
              <div class="news-category">${article.category}</div>
              <h3 class="news-title">${article.title}</h3>
              <p class="news-excerpt">${article.excerpt}</p>
              <button class="btn btn-secondary read-more-btn" data-article-id="${article.id}">Read More</button>
              <div class="news-full-text" id="full-text-${article.id}" style="display: none;">
                <p>${article.fullText}</p>
              </div>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    `;
    newsContainer.appendChild(storiesSection);

    // Add event listeners for read more buttons
    const readMoreBtns = document.querySelectorAll(".read-more-btn");
    readMoreBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const articleId = this.getAttribute("data-article-id");
        const article = data.news.find((article) => article.id == articleId);

        if (article) {
          showNewsModal(article);
        }
      });
    });
  } catch (error) {
    console.error("Error loading news from JSON, using fallback data:", error);
    // Fallback to hardcoded data if JSON fails
    const gameUpdates = siteData.news.filter(
      (article) => article.category === "Game Updates"
    );
    const playerStories = siteData.news.filter(
      (article) => article.category === "Player Stories"
    );

    // Create Game Updates section
    const updatesSection = document.createElement("div");
    updatesSection.className = "news-section-category";
    updatesSection.innerHTML = `
      <h2 class="category-title">Game Updates</h2>
      <div class="news-grid-category">
        ${gameUpdates
          .map(
            (article) => `
          <div class="news-card">
            <div class="news-icon-container">
              <div class="news-icon">${article.icon}</div>
            </div>
            <div class="news-content">
              <div class="news-category">${article.category}</div>
              <h3 class="news-title">${article.title}</h3>
              <p class="news-excerpt">${article.excerpt}</p>
              <button class="btn btn-secondary read-more-btn" data-article-id="${article.id}">Read More</button>
              <div class="news-full-text" id="full-text-${article.id}" style="display: none;">
                <p>${article.fullText}</p>
              </div>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    `;
    newsContainer.appendChild(updatesSection);

    // Create Player Stories section
    const storiesSection = document.createElement("div");
    storiesSection.className = "news-section-category";
    storiesSection.innerHTML = `
      <h2 class="category-title">Player Stories</h2>
      <div class="news-grid-category">
        ${playerStories
          .map(
            (article) => `
          <div class="news-card">
            <div class="news-icon-container">
              <div class="news-icon">${article.icon}</div>
            </div>
            <div class="news-content">
              <div class="news-category">${article.category}</div>
              <h3 class="news-title">${article.title}</h3>
              <p class="news-excerpt">${article.excerpt}</p>
              <button class="btn btn-secondary read-more-btn" data-article-id="${article.id}">Read More</button>
              <div class="news-full-text" id="full-text-${article.id}" style="display: none;">
                <p>${article.fullText}</p>
              </div>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    `;
    newsContainer.appendChild(storiesSection);

    // Add event listeners for read more buttons
    const readMoreBtns = document.querySelectorAll(".read-more-btn");
    readMoreBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const articleId = this.getAttribute("data-article-id");
        const article = siteData.news.find(
          (article) => article.id == articleId
        );

        if (article) {
          showNewsModal(article);
        }
      });
    });
  }
}

// Show news modal function
function showNewsModal(article) {
  // Remove existing modal if any
  const existingModal = document.querySelector(".news-modal");
  if (existingModal) {
    existingModal.remove();
  }

  // Create modal
  const modal = document.createElement("div");
  modal.className = "news-modal";
  modal.innerHTML = `
    <div class="news-modal-overlay">
      <div class="news-modal-content">
        <div class="news-modal-header">
          <div class="news-modal-icon">${article.icon}</div>
          <div class="news-modal-category">${article.category}</div>
          <button class="news-modal-close">&times;</button>
        </div>
        <h2 class="news-modal-title">${article.title}</h2>
        <div class="news-modal-body">
          ${article.fullText}
        </div>
      </div>
    </div>
  `;

  // Add modal to body
  document.body.appendChild(modal);

  // Add close functionality
  const closeBtn = modal.querySelector(".news-modal-close");
  const overlay = modal.querySelector(".news-modal-overlay");

  closeBtn.addEventListener("click", () => modal.remove());
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      modal.remove();
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", function closeOnEscape(e) {
    if (e.key === "Escape") {
      modal.remove();
      document.removeEventListener("keydown", closeOnEscape);
    }
  });
}

// Initialize data loading when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Ensure reviews container exists before loading
  const reviewsContainer = document.getElementById("reviews-container");
  if (reviewsContainer) {
    loadReviews();
  }

  // Ensure news container exists before loading
  const newsContainer = document.getElementById("news-container");
  if (newsContainer) {
    loadNews();
  }
});
