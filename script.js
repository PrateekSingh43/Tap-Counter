const tap = document.querySelector(".btn1");
const goToPrevious = document.querySelector(".btn2");
const reset = document.querySelector(".btn3");
const countNum = document.querySelector(".currentNum");
let previousCounts = [0]; // Initialize the array with the initial count (0)

tap.addEventListener("click", () => {
  countNum.textContent = ++countNum.textContent;
  previousCounts.push(countNum.textContent);
});

goToPrevious.addEventListener("click", () => {
  if (previousCounts.length > 1) {
    // Retrieve the previous count from the array
    previousCounts.pop(); // Remove the current count from the array
    countNum.textContent = previousCounts[previousCounts.length - 1]; // Use length - 1 to get the previous count
  }
});

reset.addEventListener("click", () => {
  countNum.textContent = 0;
  previousCounts = [0, ...previousCounts]; // Preserve the previous counts by adding the initial count to the array
});
