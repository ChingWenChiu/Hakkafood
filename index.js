
function openNav() {

  document.getElementById("navbar").style.width = "100%";
  document.getElementById("closebtn").style.display = "block";
  document.getElementById("navbar").style.display = "block";

}

function closeNav() {

  document.getElementById("navbar").style.width = "0%";
  document.getElementById("closebtn").style.display = "none";
  document.getElementById("navbar").style.display = "none";
  
}



var i;

var answer = document.getElementsByClassName("answer");

var rightAndFalse1 = document.getElementById("rightAndFalse1");
var rightAndFalse2 = document.getElementById("rightAndFalse2");
var rightAndFalse3 = document.getElementById("rightAndFalse3");
var rightAndFalse4 = document.getElementById("rightAndFalse4");

var span1 = document.getElementById("span1");

for(i=0 ; i < answer.length; i++)

answer[i].onclick = function()
{
  rightAndFalse1.style.display = "block";
  rightAndFalse2.style.display = "block";
  rightAndFalse3.style.display = "block";
  rightAndFalse4.style.display = "block";

  span1.style.display = "block";
}

span1.onclick = function()
{
  document.getElementById("question1").style.display = "none";
  document.getElementById("question2").style.display = "block";
  document.getElementById("question3").style.display = "none";

  var i;

  var answer = document.getElementsByClassName("answer");

  var rightAndFalse5 = document.getElementById("rightAndFalse5");
  var rightAndFalse6 = document.getElementById("rightAndFalse6");
  var rightAndFalse7 = document.getElementById("rightAndFalse7");
  var rightAndFalse8 = document.getElementById("rightAndFalse8");

  var span2 = document.getElementById("span2");

  for(i=0 ; i < answer.length; i++)

  answer[i].onclick = function()
  {
    rightAndFalse5.style.display = "block";
    rightAndFalse6.style.display = "block";
    rightAndFalse7.style.display = "block";
    rightAndFalse8.style.display = "block";

    span2.style.display = "block";
  }
}

span2.onclick = function()
{
  document.getElementById("question1").style.display = "none";
  document.getElementById("question2").style.display = "none";
  document.getElementById("question3").style.display = "block";

  var i;

  var answer = document.getElementsByClassName("answer");

  var rightAndFalse9 = document.getElementById("rightAndFalse9");
  var rightAndFalse10 = document.getElementById("rightAndFalse10");
  var rightAndFalse11 = document.getElementById("rightAndFalse11");
  var rightAndFalse12 = document.getElementById("rightAndFalse12");

  var span3 = document.getElementById("span3");

  for(i=0 ; i < answer.length; i++)

  answer[i].onclick = function()
  {
    rightAndFalse9.style.display = "block";
    rightAndFalse10.style.display = "block";
    rightAndFalse11.style.display = "block";
    rightAndFalse12.style.display = "block";

    span3.style.display = "block";
  }
}


$(document).ready(function(){
  
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      
      event.preventDefault();

      var hash = this.hash;
      
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 600, function(){
       
        window.location.hash = hash;
      });
    } 
  });
});