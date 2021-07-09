const logout = document.querySelector(".logout");
if (localStorage.getItem("key") != "sulton..") {
   document.location = "index.html";
}
logout.addEventListener("click", function() {
   localStorage.removeItem('key');
   localStorage.clear();
   document.location = "index.html";
});


window.addEventListener("load", function () {
	setTimeout(function () {	
		document.querySelector(".left").style.left = "-50%";
		document.querySelector(".right").style.right = "-50%"
	}, 500)
});


function alert(text) {
	return Swal.fire({
		title: '<i class="far fa-grin-beam"></i>',
		text: text,
		confirmButtonText: '<i class="fas fa-forward"></i>',
	})
}


document.querySelector(".btn").addEventListener("click", function() {
	alert("Buat kamu yang entah sengaja atau gak sengaja buka halaman ini,,").then((res) => {
		if (res.isConfirmed) {
			alert("Aku cuma mau ngingetin sesuatu..").then((res) => {
				if (res.isConfirmed) {
					alert("Tetep semangat ya ...").then((res) => {
						if (res.isConfirmed) {
							alert("Tetep kuat").then((res) => {
								if (res.isConfirmed) {
									alert("Tetep jaga kesehatan").then((res) => {
										if (res.isConfirmed) {
											alert("Udah itu aja .").then((res) => {
												if (res.isConfirmed) {
													alert("Eh bentar, ada satu lagi..").then((res) => {
														if (res.isConfirmed) {
															alert("Jangan Lupa Tersenyum Hari Ini :)")
														}
													})
												}
											})
										}
									})
								}
							})
						}
					})
				}
			})
		}
	})
})