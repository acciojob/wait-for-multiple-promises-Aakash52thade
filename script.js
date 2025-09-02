// Grab table body
const output = document.getElementById("output");

// 1) Show default "Loading..." row (spanning two columns)
const loadingTr = document.createElement("tr");
loadingTr.id = "loading-row";
loadingTr.innerHTML = `<td colspan="2" class="text-center">Loading...</td>`;
output.appendChild(loadingTr);

// 2) Helpers: random delay + timed promise
function randomDelayMs() {
  // Random integer between 1000 and 3000 inclusive
  return Math.floor(Math.random() * 2001) + 1000;
}

function makeTimedPromise() {
  const start = performance.now();
  const delay = randomDelayMs();
  return new Promise((resolve) => {
    setTimeout(() => {
      const elapsedSec = (performance.now() - start) / 1000;
      resolve(elapsedSec); // resolve with time in seconds
    }, delay);
  });
}

// 3) Start all three promises and time overall duration
const overallStart = performance.now();
const promises = [makeTimedPromise(), makeTimedPromise(), makeTimedPromise()];

// 4) Wait for all, then populate table
Promise.all(promises).then((times) => {
  // Remove loading row
  const loading = document.getElementById("loading-row");
  if (loading) loading.remove();

  // Add one row per promise (Promise 1..3)
  times.forEach((sec, idx) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>Promise ${idx + 1}</td>
      <td>${sec.toFixed(3)}</td>
    `;
    output.appendChild(tr);
  });

  // Add Total row (overall time = time until the last promise finished)
  const totalSec = (performance.now() - overallStart) / 1000;
  const totalTr = document.createElement("tr");
  totalTr.innerHTML = `
    <td><strong>Total</strong></td>
    <td><strong>${totalSec.toFixed(3)}</strong></td>
  `;
  output.appendChild(totalTr);
});
