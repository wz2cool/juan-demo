setInterval(() => {
  const divTimer = document.getElementById("div_timer");
  if (divTimer) {
    divTimer.innerHTML = new Date().toString();
  }
}, 1000);
