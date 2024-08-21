// Proteção contra SQL Injection, XSS, etc. deve ser feita no lado do servidor
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Exemplo de validação de entrada básica no frontend
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!validateInput(email) || !validateInput(password)) {
        showToast('Entrada inválida. Tente novamente.', 'danger');
        return;
    }

    // Submeter o formulário após a validação
    this.submit();
});

// Notificação Toast ao clicar em "Esqueceu a sua senha?"
document.getElementById('forgot-password').addEventListener('click', function (event) {
    event.preventDefault();
    showToast('Um link para redefinir sua senha foi enviado ao seu email.', 'success');
});

function validateInput(input) {
    const regex = /<script\b[^>]*>([\s\S]*?)<\/script>/gi;
    return !regex.test(input);
}

function showToast(message, type) {
    const toast = document.createElement('div');
    toast.classList.add('toast', 'toast-' + type);
    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
            toast.remove();
        }, 3000);
    }, 100);
}
