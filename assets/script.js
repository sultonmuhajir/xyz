document.querySelector(".btn").addEventListener("click", function() {
	Swal.fire({
		title: '<i class="far fa-grin-beam"></i>',
		text: 'Buat kamu yang entah sengaja atau gak sengaja buka halaman ini,,',
		confirmButtonText: '<i class="fas fa-forward"></i>',
	}).then((result) => {
		if (result.isConfirmed) {
			Swal.fire({
				title: '<i class="far fa-grin-beam"></i>',
				text: 'Aku cuma mau ngingetin sesuatu..',
				confirmButtonText: '<i class="fas fa-forward"></i>',
			}).then((result) => {
				if (result.isConfirmed) {
					Swal.fire({
						title: '<i class="far fa-grin-beam"></i>',
						text: 'Jangan Lupa Tersenyum Hari Ini :)',
						confirmButtonText: '<i class="fas fa-forward"></i>',
					}).then((result) => {
						if (result.isConfirmed) {
							Swal.fire({
								title: '<i class="far fa-grin-beam"></i>',
								text: 'Udah itu aja .',
								confirmButtonText: '<i class="fas fa-forward"></i>',
							})
						}
					})
				}
			})
		} 
	})
});