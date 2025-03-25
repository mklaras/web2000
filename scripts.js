// Botão Voltar ao Topo
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
// Validação do Formulário de Contato
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        // Validar campos obrigatórios
        const requiredFields = contactForm.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            const formField = field.closest('.form-field');
            if (!field.value.trim()) {
                formField.classList.add('error');
                isValid = false;
                
                // Adicionar mensagem de erro se não existir
                if (!formField.querySelector('.error-message')) {
                    const errorMsg = document.createElement('span');
                    errorMsg.className = 'error-message';
                    errorMsg.textContent = 'Este campo é obrigatório';
                    formField.appendChild(errorMsg);
                }
            } else {
                formField.classList.remove('error');
                const errorMsg = formField.querySelector('.error-message');
                if (errorMsg) errorMsg.remove();
            }
        });

        // Validar email
        const emailField = contactForm.querySelector('#email');
        if (emailField && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
            emailField.closest('.form-field').classList.add('error');
            isValid = false;
        }

        if (isValid) {
            // Simular envio (substituir por AJAX na implementação real)
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            contactForm.reset();
        }
    });
}