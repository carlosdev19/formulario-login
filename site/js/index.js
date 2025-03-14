function logar(event){
    
    event.preventDefault();

    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if(usuario == 'admin' && senha == 'admin'){
        Swal.fire({
        title:'Login realizado!',
        text: 'Bem-vindo, ' + usuario + '!',
        icon:'success',
        confirmButtonText: 'Ok'
       }).then(() => {
        setTimeout(() => {
            location.href="./html/home.html";
        }, 100);
       });

    }else{
        Swal.fire({
            title: 'Erro!',
            text: 'Usuário ou senha incorretos.',
            icon: 'Error',
            confirmButtonText: 'Tentar novamente'

        });
    }

}