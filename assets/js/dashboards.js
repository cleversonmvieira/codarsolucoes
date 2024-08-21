$(document).ready(function() {
    $('#user-form').on('submit', function(event) {
        event.preventDefault();

        // Código para salvar os dados aqui

        // Exemplo de notificação toast
        $('.toast').toast({ delay: 3000 });
        $('.toast').toast('show');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    function updateDateTime() {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        document.getElementById('current-date-time').textContent = now.toLocaleDateString('pt-BR', options);
    }
    setInterval(updateDateTime, 1000);
    updateDateTime();
});

