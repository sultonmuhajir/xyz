const logout = document.querySelector(".logout");
if (localStorage.getItem("key") != "sulton..") {
   document.location = "index.html";
}

window.addEventListener("load", function () {
	setTimeout(function () {	
		document.querySelector(".left").style.left = "-50%";
		document.querySelector(".right").style.right = "-50%"
	}, 500)
});