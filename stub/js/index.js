// Get the modal
var signinmodal = document.getElementById('sign-in-modal');

// Get the button that opens the modal
var signinbtn = document.getElementById("sign-in-btn");

// Get the <span> element that closes the modal
var signinspan = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
signinbtn.onclick = function() {
  signinmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
signinspan.onclick = function() {
  signinmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == signinmodal) {
    signinmodal.style.display = "none";
  }
}

// Get the modal
var signupmodal = document.getElementById('sign-up-modal');

// Get the button that opens the modal
var signupbtn = document.getElementById("sign-up-btn");

// Get the <span> element that closes the modal
var signupspan = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal 
signupbtn.onclick = function() {
  signupmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
signupspan.onclick = function() {
  signupmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == signupmodal) {
    signupmodal.style.display = "none";
  }
}

// Get the modal
var createpostmodal = document.getElementById('create-post-modal');

// Get the button that opens the modal
var createpostbtn = document.getElementById("create-post-btn");

// Get the <span> element that closes the modal
var createpostspan = document.getElementsByClassName("close")[2];

//When the user clicks on CreatePost, open the modal
createpostbtn.onclick = function() {
  createpostmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
createpostspan.onclick = function() {
  createpostmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == createpostmodal) {
    createpostmodal.style.display = "none";
  }
}


//When the user clicks on AllPosts, redirect to bloglist.html

//When the user clicks on Sign Up hyperlink in the Signin Modal
$(document).ready(function() {

  if(window.location.href.indexOf('#myModal') != -1) {
    $('#myModal').modal('show');
  }

});