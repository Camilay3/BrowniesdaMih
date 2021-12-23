//funções
function copiar(n){
    navigator.clipboard.writeText(n);
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Copiado com sucesso!',
        showConfirmButton: false,
        timer: 1500
    })
}

function copiarEmail(){
    var email = 'browniesdamih@gmail.com';
    //https://mail.google.com/mail/u/0/?fs=1&to=browniesdamih@gmail.com&tf=cm
    copiar(email);
}
