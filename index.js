const boardDOMElement = document.getElementById("js-chess-board");
const square = document.createElementNS("http://www.w3.org/2000/svg", "rect");

square.setAttribute("width", 45);
square.setAttribute("height", 45);
square.setAttribute("x", 0);
square.setAttribute("y", 0);
square.setAttribute("style", "fill:rgb(0,0,0);");

boardDOMElement.appendChild(square);
