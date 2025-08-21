document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for contacting Mthanti Tech Solutions! We'll get back to you soon.");
});
function toggleChat() {
    var chatbox = document.getElementById("chatbox");
    if (chatbox.style.display === "none") {
        chatbox.style.display = "flex";
    } else {
        chatbox.style.display = "none";
    }
}

function handleInput(event) {
    if (event.key === "Enter") {
        let input = document.getElementById("chat-input").value;
        if (input.trim() !== "") {
            // Append user message to the chat
            let messages = document.getElementById("chat-messages");
            let userMessage = document.createElement("div");
            userMessage.textContent = "You: " + input;
            messages.appendChild(userMessage);

            // Clear the input field
            document.getElementById("chat-input").value = "";

            // Here's where you would add your chatbot logic
            // Based on the user's input, the bot would respond
            let botResponse = "";
            if (input.toLowerCase().includes("endchat")) {
                botResponse = "Thank you for chatting. Goodbye!";
            } else {
                botResponse = "This is a basic example. I'm not a real bot yet.";
            }

            // Append bot message after a short delay
            setTimeout(() => {
                let botMessage = document.createElement("div");
                botMessage.textContent = "Bot: " + botResponse;
                messages.appendChild(botMessage);
                messages.scrollTop = messages.scrollHeight; // Auto-scroll to the bottom
            }, 500);
        }
    }
}
