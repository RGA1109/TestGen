function showQuestion(id) {
var listing = ["multichoice", "true/false", "shortanswer", "matching", "fillblank", "fillformaula", "essay"]
  if (id === "radio1") {
    var x = document.getElementById("multichoice");
    document.getElementById('tagsfield').style.display = "block";
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("true/false").style.display = "none";
        document.getElementById("shortanswer").style.display = "none";
        document.getElementById("matching").style.display = "none";
        document.getElementById("fillblank").style.display = "none";
        document.getElementById("fillformaula").style.display = "none";
        document.getElementById("essay").style.display = "none";

    } else
        x.style.diplay ="none";
  }
  else if (id === "radio2") {
    var x = document.getElementById("true/false");
    document.getElementById('tagsfield').style.display = "block";
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("multichoice").style.display = "none";
        document.getElementById("shortanswer").style.display = "none";
        document.getElementById("matching").style.display = "none";
        document.getElementById("fillblank").style.display = "none";
        document.getElementById("fillformaula").style.display = "none";
        document.getElementById("essay").style.display = "none";
    } else
        x.style.diplay ="none";
  }
  else if (id == "radio3") {
    var x = document.getElementById("shortanswer");
    document.getElementById('tagsfield').style.display = "block";
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("multichoice").style.display = "none";
        document.getElementById("true/false").style.display = "none";
        document.getElementById("matching").style.display = "none";
        document.getElementById("fillblank").style.display = "none";
        document.getElementById("fillformaula").style.display = "none";
        document.getElementById("essay").style.display = "none";

    } else
        x.style.diplay ="none";
  }
  else if (id == "radio4") {
    var x = document.getElementById("matching");
    document.getElementById('tagsfield').style.display = "block";
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("multichoice").style.display = "none";
        document.getElementById("true/false").style.display = "none";
        document.getElementById("shortanswer").style.display = "none";
        document.getElementById("fillblank").style.display = "none";
        document.getElementById("fillformaula").style.display = "none";
        document.getElementById("essay").style.display = "none";
    } else
        x.style.diplay ="none";
  }
  else if (id == "radio5") {
    var x = document.getElementById("fillblank");
    document.getElementById('tagsfield').style.display = "block";
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("multichoice").style.display = "none";
        document.getElementById("true/false").style.display = "none";
        document.getElementById("shortanswer").style.display = "none";
        document.getElementById("matching").style.display = "none";
        document.getElementById("fillformaula").style.display = "none";
        document.getElementById("essay").style.display = "none";
    } else
        x.style.diplay ="none";
  }
  else if (id == "radio6") {
    var x = document.getElementById("fillformaula");
    document.getElementById('tagsfield').style.display = "block";
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("multichoice").style.display = "none";
        document.getElementById("true/false").style.display = "none";
        document.getElementById("shortanswer").style.display = "none";
        document.getElementById("matching").style.display = "none";
        document.getElementById("fillblank").style.display = "none";
        document.getElementById("essay").style.display = "none";
    } else
        x.style.diplay ="none";
  }
  else if (id == "radio7") {
    var x = document.getElementById("essay");
    document.getElementById('tagsfield').style.display = "block";
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("multichoice").style.display = "none";
        document.getElementById("true/false").style.display = "none";
        document.getElementById("shortanswer").style.display = "none";
        document.getElementById("matching").style.display = "none";
        document.getElementById("fillblank").style.display = "none";
        document.getElementById("fillformaula").style.display = "none";

    } else
        x.style.diplay ="none";

  }
}