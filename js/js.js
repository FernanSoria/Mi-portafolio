// Interceptar el envío del formulario de contacto para evitar redirección y mostrar alerta
document.addEventListener('DOMContentLoaded', function() {
	const form = document.querySelector('.contact-form');
	if (form) {
		form.addEventListener('submit', function(e) {
			e.preventDefault(); // Evita la redirección
			const data = new FormData(form);
			fetch(form.action, {
				method: 'POST',
				body: data,
				headers: {
					'Accept': 'application/json'
				}
			})
					.then(response => {
						const successDiv = document.getElementById('contact-success');
						if (response.ok) {
							form.reset();
							if (successDiv) {
								successDiv.textContent = '¡Mensaje enviado!';
								successDiv.style.display = 'block';
								successDiv.style.opacity = '1';
								setTimeout(() => {
									successDiv.style.opacity = '0';
									setTimeout(() => { successDiv.style.display = 'none'; }, 400);
								}, 3500);
							}
						} else {
							if (successDiv) {
								successDiv.textContent = 'Hubo un error al enviar el mensaje. Intenta nuevamente.';
								successDiv.style.display = 'block';
								successDiv.style.opacity = '1';
								setTimeout(() => {
									successDiv.style.opacity = '0';
									setTimeout(() => { successDiv.style.display = 'none'; }, 400);
								}, 3500);
							}
						}
					})
					.catch(() => {
						const successDiv = document.getElementById('contact-success');
						if (successDiv) {
							successDiv.textContent = 'Hubo un error al enviar el mensaje. Intenta nuevamente.';
							successDiv.style.display = 'block';
							successDiv.style.opacity = '1';
							setTimeout(() => {
								successDiv.style.opacity = '0';
								setTimeout(() => { successDiv.style.display = 'none'; }, 400);
							}, 3500);
						}
					});
		});
	}
});
