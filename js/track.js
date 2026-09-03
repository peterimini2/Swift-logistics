const input = document.querySelector('.text-box');
const trackBtn = document.querySelector('.track-btn');

function trackId() {
    if (input.value === '') {
      alert('Please input tracking ID');
    } else if (input.value <= 50) {
      alert('Tracking in process.');
    } else
      alert('Tracking ID not found. Please check and try again.')
};
  
trackBtn.addEventListener("click", () => {
  trackId();
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    trackId();
  }
});