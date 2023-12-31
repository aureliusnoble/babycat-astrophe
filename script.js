document.getElementById('submitBtn').addEventListener('click', function() {
    var inputCode = document.getElementById('codeInput').value.toLowerCase();
    var message = '';

    // Define codes and their corresponding messages in lower case
    var codes = {
        'rumpleteazer': 'Correct! Lead found: RUMPLETEAZER',
        'willard': 'Correct! Unlock: Kitchen Door. Living Room Door.',
        'morphine': 'Correct! Lead found: MORPHINE',
        // Add more codes and messages as needed
    };

    // Convert keys in codes object to lower case
    var lowerCaseCodes = {};
    for (var code in codes) {
        lowerCaseCodes[code.toLowerCase()] = codes[code];
    }

    message = lowerCaseCodes[inputCode] || 'Incorrect. Try again';

    document.getElementById('message').textContent = message;
});
