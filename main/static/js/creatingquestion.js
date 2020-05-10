function showQuestion(id) {
var listing = ["multichoice", "true/false", "shortanswer", "matching", "fillblank", "fillformaula", "essay"]
  if (id === "radio1") {
    var x = document.getElementById("multichoice");
    document.getElementById('tagsfield').style.display = "block";
    document.getElementById('card-information').style.border = "1px solid rgba(0,0,0,.125)";
    if (x.style.display === "none") {
        x.style.display = "block";
        x.style.border = 1;
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

$(document).ready(function(){
    $(".check-radio").click(function(){
        $("#radio").prop("checked", true);
    });
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    var x = document.getElementById("myDIV");
    var y = document.getElementById("myDIV").children

    $("#myDIV *").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)

      if (value === "") {
        x.style.display ="none";

      }
      else {
        x.style.display ="block";
        holder = x.children
        x.children.style.display="display";
      }
    });
  });
});
$(document).ready(function(){

});
