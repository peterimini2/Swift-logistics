const input = document.querySelector('.text-box');
const trackBtn = document.querySelector('.track-btn');

trackBtn.addEventListener("click", () => {
  if (input.value <= 50) {
    alert('Tracking in process.');
  } else if (input.value = "") {
    alert('Please input tracking ID');
  } else
    alert('Tracking ID not found. Please check and try again.')
});