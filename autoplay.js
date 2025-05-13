// Create the audio element but don't play it yet
const bgAudio = new Audio('Metamorphosis.mp3');
bgAudio.loop = true;

// Once the user interacts, play the audio and remove the listener
function startAudio() {
  bgAudio.play().catch(err => {
    console.error('Playback failed:', err);
  });
  // Remove the click listener so we only trigger once
  window.removeEventListener('click', startAudio);
}

// Listen for the first click (or touch) anywhere on the page
window.addEventListener('click', startAudio);

