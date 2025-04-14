function sendMessage() {
  const input = document.getElementById("message");
  const message = input.value.trim();
  if (message === "") return;

  const chatBox = document.getElementById("chat-box");
  const msgElement = document.createElement("p");
  msgElement.innerHTML = `<strong>You:</strong> ${message}`;
  chatBox.appendChild(msgElement);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}
