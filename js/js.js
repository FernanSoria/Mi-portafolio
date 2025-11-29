// Menú hamburguesa para navegación móvil
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    
    // Cerrar menú al hacer clic en un link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }
});

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
