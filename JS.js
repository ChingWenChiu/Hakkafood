//javascript

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