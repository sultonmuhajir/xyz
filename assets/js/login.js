window.addEventListener("load", function() {
   setTimeout(function() {
      document.querySelector(".left").style.left = "-50%";
      document.querySelector(".right").style.right = "-50%"
   }, 500)
});


const form = document.querySelector("form")
const input = document.getElementById("pw");
const error = document.querySelector("p")
const btn = document.querySelector("button")


function showPassword() {
   if (input.type === "password") {
      input.type = "text";
   } else {
      input.type = "password";
   }
}


input.addEventListener("keyup", function(event) {
   this.style.border = "1px solid #aaa";
   error.style.visibility = "hidden";
   if (event.keyCode === 13) {
      btn.click();
   }
});


form.onsubmit = () => {
   if (input.value == "" || input.value != "sulton..") {
      input.value = "";
      input.focus();
      input.style.border = "1px solid red";
      error.style.visibility = "visible";
      return false;
   }
}