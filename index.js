document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('message-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const inputField = document.getElementById('message-input');
    const messageText = inputField.value.trim();

    if (messageText) {
        displayMessage(messageText, 'user');
        inputField.value = '';
        setTimeout(() => {
            displayMessage(messageText, 'reply');
        }, 500);
    }
}

function displayMessage(text, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = text;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; 
}
