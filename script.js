// Toggle chatbot visibility
function toggleChatbot() {
    const chatbotContainer = document.getElementById('chatbot-container');
    chatbotContainer.classList.toggle('hidden');
}

// Send a predefined message
function sendChat(message) {
    const messagesDiv = document.getElementById('chatbot-messages');
    messagesDiv.innerHTML += `<p>You: ${message}</p>`;
    setTimeout(() => {
        messagesDiv.innerHTML += `<p>Chatbot: Here is the response to '${message}'</p>`;
    }, 1000);
}

// Send a custom user message
function sendCustomMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value;
    if (message.trim() !== "") {
        const messagesDiv = document.getElementById('chatbot-messages');
        messagesDiv.innerHTML += `<p>You: ${message}</p>`;
        userInput.value = "";
        setTimeout(() => {
            messagesDiv.innerHTML += `<p>Chatbot: Here is the response to your message</p>`;
        }, 1000);
    }
}
