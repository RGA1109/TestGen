function myFunction(question_detail, question_answer, time_questions_used, question_tags) {
  var x = document.getElementById("myDIV2");

  if (x.style.display === "none") {
    x.style.display = "block";

  }
  else
    x.style.display ="none";

  var y = question_detail
      document.getElementById("demo").innerHTML = y;

  var z = question_answer
      document.getElementById("treno").innerHTML = z;

  var a = question_tags
      document.getElementById("QuestionTags").innerHTML = a;

  var b = time_questions_used
      document.getElementById("TimeQuestionsUsed").innerHTML = b;
}

function passingId(object){
        document.getElementById('delete').value = object.id;
}

function onModalButtonPress() {
    $.post('tagdelete', { id : document.getElementById('delete').value });
    setTimeout("location.reload(true);", timeoutPeriod);
    }

// Bind click to OK button within popup
$('#confirm-delete').on('click', '.btn-ok', function(e) {
  var $modalDiv = $(e.delegateTarget);
  var id = $(this).data('recordId');

  $modalDiv.addClass('loading');
  $.post('/api/record/' + id).then(function() {
     $modalDiv.modal('hide').removeClass('loading');
  });
});

// Bind to modal opening to set necessary data properties to be used to make request
$('#confirm-delete').on('show.bs.modal', function(e) {
  var data = $(e.relatedTarget).data();
  $('.title', this).text(data.recordTitle);
  $('.btn-ok', this).data('recordId', data.recordId);
});

$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    console.log(value)
    var c = document.getElementById("myDIV").children;
    var y = document.getElementById("myInput");
    var x = document.getElementById("myDIV");
    $("#myDIV *").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      if (value === "") {
        x.style.display ="none";
      }
      else {
        x.style.display ="block";

      }
    });
  });
});
