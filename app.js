// Project Apex - training clip showcase
// Restart-all: re-sync the three looping clips to t=0 and play them together.

function restartAll() {
  const videos = document.querySelectorAll('video');
  videos.forEach(v => {
    try {
      v.currentTime = 0;
      const p = v.play();
      if (p && typeof p.catch === 'function') { p.catch(() => {}); }
    } catch (e) { /* ignore */ }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('restart-all');
  if (btn) { btn.addEventListener('click', restartAll); }

  // Once every clip has buffered enough, start them together for a clean first sync.
  const videos = Array.from(document.querySelectorAll('video'));
  if (videos.length) {
    let ready = 0;
    videos.forEach(v => {
      v.addEventListener('canplaythrough', () => {
        ready += 1;
        if (ready === videos.length) { restartAll(); }
      }, { once: true });
    });
  }
});
