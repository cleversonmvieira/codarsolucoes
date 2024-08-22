$(document).ready(function () {
    $('#user-form').on('submit', function (event) {
        event.preventDefault();

        // Código para salvar os dados aqui

        // Exemplo de notificação toast
        $('.toast').toast({ delay: 3000 });
        $('.toast').toast('show');
    });
});


document.addEventListener('DOMContentLoaded', function () {
    function updateDateTime() {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        document.getElementById('current-date-time').textContent = now.toLocaleDateString('pt-BR', options);
    }
    setInterval(updateDateTime, 1000);
    updateDateTime();
});





// Confirmação de saída do sistema
document.getElementById('logoutBtn').addEventListener('click', function (e) {
    e.preventDefault();
    Swal.fire({
        title: 'Tem certeza que deseja sair?',
        text: "Você precisará fazer login novamente para acessar o sistema.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, quero sair!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = 'logout.html';
        }
    });


});
