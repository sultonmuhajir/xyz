window.addEventListener("load", function() {
   setTimeout(function() {
      document.querySelector(".left").style.left = "-50%";
      document.querySelector(".right").style.right = "-50%"
   }, 500)
});

const x = document.getElementById("pw");
const e = document.querySelector(".error")


x.addEventListener("keyup", function () {
   this.style.border = "1px solid #aaa";
   e.style.visibility = "hidden";
});

function showPassword() {
   if (x.type === "password") {
      x.type = "text";
   } else {
      x.type = "password";
   }
}

function login() {
   if (x.value == "" || x.value != "sulton..") {
      x.value = "";
      x.focus();
      x.style.border = "1px solid red";
      e.style.visibility = "visible";
   } else {
      document.location = "home.html"
   }
}