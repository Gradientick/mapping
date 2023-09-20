const map = document.getElementById("elementary-school-map");
let startPoint = null;
let click = 0;
// code for getting the coordinates
map.addEventListener("click", (e) => {
  if (click == 0) {
    const x = e.clientX - map.getBoundingClientRect().left;
    const y = e.clientY - map.getBoundingClientRect().top;
    click++;
    console.log(`Clicked at (${x}, ${y})`);
    startPoint = [x, y];
  } else if (click == 1) {
    click = 0;
    console.log("now select wtg");
  }
});
