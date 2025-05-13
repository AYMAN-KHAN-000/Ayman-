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



const overlay = document.getElementById('gifOverlay');

function loopEffect() {
  overlay.classList.remove('fade-in'); // reset animation
  void overlay.offsetWidth;           // force reflow
  overlay.classList.add('fade-in');
}

loopEffect(); // initial trigger
setInterval(loopEffect, 7000); // repeat every 7s