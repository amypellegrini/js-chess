const iframe = document.getElementById("js-chess-iframe");

function test(message, testFn) {
  const testDescription = "It should render a chess board";
  let testResult = testDescription;

  try {
    const expected = testFn();

    if (expected) {
      testResult += " PASSED";
    }
  } catch (error) {
    testResult += ` FAILED\n${error}`;
  }

  document.getElementById("testResults").innerText = testResult;
}

function runTestSuite() {
  test("It should render a chess board", () => {
    const chessBoard = iframe.contentWindow.document.getElementById(
      "js-chess-board"
    );

    if (chessBoard) {
      return true;
    } else {
      throw new Error("Chess board element not found");
    }
  });
}

iframe.addEventListener("load", runTestSuite, true);
