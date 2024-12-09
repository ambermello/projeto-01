document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário para processamento

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let mensagem = document.getElementById('mensagem').value;

    // Validação simples
    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    alert('Obrigado pela sua mensagem, ' + nome + '!');

    // Limpar os campos após o envio
    document.getElementById('form-contato').reset();
});
                