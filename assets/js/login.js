window.addEventListener("load", function() {
   setTimeout(function() {
      document.querySelector(".left").style.left = "-50%";
      document.querySelector(".right").style.right = "-50%"
   }, 500)
});


const inp = document.getElementById("pw");
const form = document.querySelector("form")
const error = document.querySelector(".error")
const btn = document.querySelector(".btn")


function showPassword() {
   if (inp.type === "password") {
      inp.type = "text";
   } else {
      inp.type = "password";
   }
}


inp.addEventListener("keyup", function(event) {
   this.style.border = "1px solid #aaa";
   error.style.visibility = "hidden";
   if (event.keyCode === 13) {
      event.preventDefault();
      btn.click();
   }
});


form.onsubmit = () => { return false; }
function login() {
   if (inp.value == "" || inp.value != "sulton..") {
      inp.value = "";
      inp.focus();
      inp.style.border = "1px solid red";
      error.style.visibility = "visible";
   } else {
      document.location = "home.html"
   }
}