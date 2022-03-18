$(document).ready(function () {
    //Reservaciones
    $('#form-reservacion').submit(function (e) {
        const PostData = {
            fecha: $('#fecha').val(),
            personas: $('#personas').val(),
        };
        console.log(PostData);
        $.post('addreservacion.php', PostData, function (response) {
            alert(response);
            $('#form-login-cliente').trigger('reset');
        });
        e.preventDefault();
    });
});
