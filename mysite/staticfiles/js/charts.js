function myFunction(question_detail, question_answer) {
  var x = document.getElementById("myDIV2");

  if (x.style.display === "none") {
    x.style.display = "block";
  }
  else
    x.style.diplay ="none";

  var y = question_detail
      document.getElementById("demo").innerHTML = y;
  var z = question_answer
      document.getElementById("treno").innerHTML = z;
}

function showQuestions() {
  var x = document.getElementById("myDIV");

  if (x.style.display === "none") {

    x.style.display = "block";

  }
  else if (x.placeholder.display !== "none") {
    x.style.display = "none"
  }

}
