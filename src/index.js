const boardDOMElement = document.getElementById("js-chess-board");

let xAxis = 0;
let yAxis = 0;

for (let i = 0; i < 32; i++) {
  const square = document.createElementNS("http://www.w3.org/2000/svg", "rect");

  square.setAttribute("width", 45);
  square.setAttribute("height", 45);
  square.setAttribute("x", xAxis);
  square.setAttribute("y", yAxis);
  square.setAttribute("style", "fill:rgb(0,0,0);");

  xAxis += 90;

  if (xAxis > 90 * 4 - 45) {
    xAxis = yAxis % 2 !== 0 ? 0 : 45;
    yAxis += 45;
  }

  boardDOMElement.appendChild(square);
}
