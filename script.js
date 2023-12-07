document.getElementById('submitBtn').addEventListener('click', function() {
    var code = document.getElementById('codeInput').value;
    var message = '';

    // Define codes and their corresponding messages
    var codes = {
        '1234': 'Welcome to level 2!',
        '5678': 'You found the secret room!',
        // Add more codes and messages as needed
    };

    message = codes[code] || 'Incorrect. Try again';

    document.getElementById('message').textContent = message;
});

