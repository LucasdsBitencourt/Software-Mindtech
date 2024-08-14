document.getElementById('subscribeForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('subscribeEmail').value;
    const messageElement = document.getElementById('message');

    fetch('http://localhost:3000/subscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = 'success.html';
        } else {
            messageElement.textContent = data.error || "Algo deu errado.";
            messageElement.style.color = 'red';
        }
    })
    .catch(error => {
        messageElement.textContent = "Erro ao se conectar com o servidor.";
        messageElement.style.color = 'red';
    });
});


document.getElementById('unsubscribeForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('unsubscribeEmail').value;
    const messageElement = document.getElementById('message');

    fetch('http://localhost:3000/unsubscribe', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            messageElement.textContent = "Inscrição cancelada com sucesso!";
            messageElement.style.color = 'green';
        } else {
            messageElement.textContent = data.error || "Algo deu errado.";
            messageElement.style.color = 'red';
        }
    })
    .catch(error => {
        messageElement.textContent = "Erro ao se conectar com o servidor.";
        messageElement.style.color = 'red';
    });
});
