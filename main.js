window.onload = function() {
  const currentTimeEl = document.getElementById("current-time");
  function updateTime() {
    currentTimeEl.textContent = Date.now();
  }
  updateTime();
  setInterval(updateTime, 1000);
};
