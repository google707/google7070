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
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').textContent = data.message;
    })
    .catch(error => console.error('Error:', error));
});