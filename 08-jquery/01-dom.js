// Exercise #1:
// When the user clicks the 'copy' button, copy the user input to the output area

$(document).ready(() => {
  let userInput1 = document.querySelector("#userInput1");
  let copy = document.querySelector("#copy");
  let output1 = document.querySelector("#output1");

  $("#copy").on("click", (event) => {
    console.log("click event", event);
    $("#output1").text($("#userInput1").val());
  });

  // Exercise #2:
  // When the user enters input text, copy the user input to the output area

  // Fetch JavaScript objects representing specific elements in the DOM
  let userInput2 = document.querySelector("#userInput2");
  let output2 = document.querySelector("#output2");

  $("#userInput2").on("input", (event) => {
    console.log("input event", event);
    $("#output2").text($("#userInput2").val());
  });
});
