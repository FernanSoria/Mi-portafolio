// Limpiar el formulario de contacto tras el envío
document.addEventListener('DOMContentLoaded', function() {
	const form = document.querySelector('.contact-form');
	if (form) {
		form.addEventListener('submit', function(e) {
			// Permite el envío normal, pero limpia tras un pequeño retardo
			setTimeout(() => {
				form.reset();
			}, 100);
		});
	}
});
