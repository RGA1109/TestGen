// Loads all Options choices for the test
function optionCreator() { // don't leak
    truechoice();
    mutlichoice();
    matchingchoice();
    fillBchoice();
    shortchoice();
    essaychoice();
    fillfchoice();
    };

// Sub Functions to Option Creator
function truechoice() {
    var elm = document.getElementById('True/FalseNumber'), // get the select
        df = document.createDocumentFragment(); // create a document fragment to hold the options while we create them
    for (var i = 0; i <= 10; i++) { // loop, i like 42.
            var option = document.createElement('option'); // create the option element
            option.value = i; // set the value property
            option.appendChild(document.createTextNode( i )); // set the textContent in a safe way.
            df.appendChild(option); // append the option to the document fragment
     }
    elm.appendChild(df); // append the document fragment to the DOM. this is the better way rather than setting innerHTML a bunch of times (or even once with a long string)
    };
function mutlichoice() {
    var elm = document.getElementById('MultiChoiceNumber'), // get the select
        df = document.createDocumentFragment(); // create a document fragment to hold the options while we create them
    for (var i = 0; i <= 10; i++) { // loop, i like 42.
            var option = document.createElement('option'); // create the option element
            option.value = i; // set the value property
            option.appendChild(document.createTextNode( i )); // set the textContent in a safe way.
            df.appendChild(option); // append the option to the document fragment
     }
    elm.appendChild(df); // append the document fragment to the DOM. this is the better way rather than setting innerHTML a bunch of times (or even once with a long string)
    };
function matchingchoice() {
    var elm = document.getElementById('MatchingNumber'), // get the select
        df = document.createDocumentFragment(); // create a document fragment to hold the options while we create them
    for (var i = 0; i <= 10; i++) { // loop, i like 42.
            var option = document.createElement('option'); // create the option element
            option.value = i; // set the value property
            option.appendChild(document.createTextNode( i )); // set the textContent in a safe way.
            df.appendChild(option); // append the option to the document fragment
     }
    elm.appendChild(df); // append the document fragment to the DOM. this is the better way rather than setting innerHTML a bunch of times (or even once with a long string)
    };
function fillBchoice() {
    var elm = document.getElementById('FillBNumber'), // get the select
        df = document.createDocumentFragment(); // create a document fragment to hold the options while we create them
    for (var i = 0; i <= 10; i++) { // loop, i like 42.
            var option = document.createElement('option'); // create the option element
            option.value = i; // set the value property
            option.appendChild(document.createTextNode( i )); // set the textContent in a safe way.
            df.appendChild(option); // append the option to the document fragment
     }
    elm.appendChild(df); // append the document fragment to the DOM. this is the better way rather than setting innerHTML a bunch of times (or even once with a long string)
    };
function shortchoice() {
    var elm = document.getElementById('ShortNumber'), // get the select
        df = document.createDocumentFragment(); // create a document fragment to hold the options while we create them
    for (var i = 0; i <= 10; i++) { // loop, i like 42.
            var option = document.createElement('option'); // create the option element
            option.value = i; // set the value property
            option.appendChild(document.createTextNode( i )); // set the textContent in a safe way.
            df.appendChild(option); // append the option to the document fragment
     }
    elm.appendChild(df); // append the document fragment to the DOM. this is the better way rather than setting innerHTML a bunch of times (or even once with a long string)
    };
function essaychoice() {
    var elm = document.getElementById('EssayNumber'), // get the select
        df = document.createDocumentFragment(); // create a document fragment to hold the options while we create them
    for (var i = 0; i <= 10; i++) { // loop, i like 42.
            var option = document.createElement('option'); // create the option element
            option.value = i; // set the value property
            option.appendChild(document.createTextNode( i )); // set the textContent in a safe way.
            df.appendChild(option); // append the option to the document fragment
     }
    elm.appendChild(df); // append the document fragment to the DOM. this is the better way rather than setting innerHTML a bunch of times (or even once with a long string)
    };
function fillfchoice() {
    var elm = document.getElementById('FillFNumber'), // get the select
        df = document.createDocumentFragment(); // create a document fragment to hold the options while we create them
    for (var i = 0; i <= 10; i++) { // loop, i like 42.
            var option = document.createElement('option'); // create the option element
            option.value = i; // set the value property
            option.appendChild(document.createTextNode( i )); // set the textContent in a safe way.
            df.appendChild(option); // append the option to the document fragment
     }
    elm.appendChild(df); // append the document fragment to the DOM. this is the better way rather than setting innerHTML a bunch of times (or even once with a long string)
    };

// Controls the Searching tags function
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

function onModalButtonPress() {
    console.log(document.getElementById('formsubmit').value);
    console.log(document.getElementById('formsubmit').value);
//    print(console.log(document.getElementById('delete').value));
    $.post('generatingtests',{
    True : document.getElementById("True/False").checked,
    MultipleChoice : document.getElementById("MultiChoice").checked,
    Matching : document.getElementById("Matching").checked,
    FillB : document.getElementById("FillB").checked,
    ShortEssay : document.getElementById("Short").checked,
    Essay : document.getElementById("Essay").checked,
    FillF : document.getElementById("FillF").checked,

    TrueNumber : document.getElementById("True/FalseNumber").value,
    MultipleChoiceNumber : document.getElementById("MultiChoiceNumber").value,
    MatchingNumber : document.getElementById("MatchingNumber").value,
    FillBNumber : document.getElementById("FillBNumber").value,
    ShortEssayNumber : document.getElementById("ShortNumber").value,
    EssayNumber : document.getElementById("EssayNumber").value,
    FillFNumber : document.getElementById("FillFNumber").value,

    Semester : document.getElementById("What Semester?").value,
    Year : document.getElementById("What Year?" ).value,
    Exam : document.getElementById("What Exam Number?").value,
    Class : document.getElementById("What class?").value,

    }).then(

    function(result) {
    console.log(result)
    });
}

function onButtonGenerateTest() {
    $.post('createtest', { id : document.getElementById('formsubmit').value });
    setTimeout("location.reload(true);");
}