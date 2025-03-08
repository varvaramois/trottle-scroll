document.addEventListener("DOMContentLoaded", () => {
  const output = document.querySelector(".output");
  let scrollEventCounter = 0;

  window.addEventListener(
    "scroll",
    _.throttle(() => {
      scrollEventCounter += 1;
      output.textContent = scrollEventCounter;
    }, 300)
  );
});

document.addEventListener("DOMContentLoaded", () => {
  const counterEl = document.getElementById("counter");
  const btn = document.getElementById("btn");
  let count = 0;

  const updateCounter = () => {
    count++;
    counterEl.textContent = count;
  };

  const throttledUpdate = _.throttle(updateCounter, 1000);

  btn.addEventListener("click", throttledUpdate);
});
