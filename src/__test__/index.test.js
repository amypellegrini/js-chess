const iframe = document.getElementById("js-chess-iframe");

function test(message, testFn) {
  const testDescription = message;
  let testResult = testDescription;

  try {
    const expected = testFn();

    if (expected) {
      testResult += " PASSED\n";
    }
  } catch (error) {
    testResult += ` FAILED\n>>>> ${error}`;
  }

  document.getElementById("testResults").innerText += testResult;
}

function runTestSuite() {
  test("It renders a chess board", () => {
    const chessBoard = iframe.contentWindow.document.getElementById(
      "js-chess-board"
    );

    if (chessBoard) {
      return true;
    } else {
      throw new Error("Chess board element not found");
    }
  });

  test("It renders 32 black squares", () => {
    const chessBoard = iframe.contentWindow.document.getElementById(
      "js-chess-board"
    );

    const blackSquares = chessBoard.getElementsByTagName("rect");

    if (blackSquares.length === 32) {
      return true;
    } else {
      throw new Error("Not enough black squares rendered");
    }
  });

  test("Black squares are placed properly", () => {
    const chessBoard = iframe.contentWindow.document.getElementById(
      "js-chess-board"
    );

    const blackSquares = [...chessBoard.getElementsByTagName("rect")];

    let lastX;
    let lastY;

    blackSquares.forEach(square => {
      const x = square.getAttribute("x");
      const y = square.getAttribute("y");

      misplaced =
        !(x % 45 === 0 && x !== lastX) && !(y % 45 === 0 && y !== lastY);

      lastX = x;
      lastY = y;
    });

    if (!misplaced) {
      return true;
    } else {
      throw new Error("Black squares not properly placed");
    }
  });
}

iframe.addEventListener("load", runTestSuite, true);
