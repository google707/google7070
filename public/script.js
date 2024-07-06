document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simulação do envio dos dados de login
    console.log('Email:', email);
    console.log('Senha:', password);
    
    // Exibe uma mensagem de sucesso
    document.getElementById('message').innerText = 'Login bem-sucedido!';
    
    // Redirecionamento após login bem-sucedido
    setTimeout(function() {
        window.location.href = 'https://.com/share/8a5f0a6a-e327-9910-94c2f04c1d8b'; // Substitua pela URL de destino
    }, 2000); // Aguarda 2 segundos antes de redirecionar
});
