function check() {

  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var correct = 0;

  if (question1 == "Nairobi") {
    correct++;
  }
  if (question2 == "Kampala") {
    correct++;
  }
  if (question3 == "Arusha") {
    correct++;
  }
  var messages = ["Great job!", "That's just okay", "You really need to do better"];
  var images =   ["images/win.webp", "images/draw.webp", "images/loss.webp"];
  var range;

  if (correct < 1) {
      range = 2;
  }

  if (correct > 0 && correct < 3) {
      range = 1;
  }

  if (correct > 2) {
      range = 0;
  }



  document.getElementById("after_submit").style.visibility = "visible";



  document.getElementById("message").innerHTML = messages[range];
  document.getElementById("number_correct").innerHTML = "You got" + correct + " correct.";
  document.getElementById("images").src = images[range];
}
