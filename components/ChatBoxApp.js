<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Simple Chatbox</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f5f5f5;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .chatbox {
      width: 300px;
      height: 400px;
      border: 1px solid #ccc;
      border-radius: 10px;
      background: white;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    .messages {
      flex: 1;
      padding: 10px;
      overflow-y: auto;
    }
    .message {
      margin: 5px 0;
      padding: 8px;
      border-radius: 6px;
      max-width: 80%;
    }
    .user {
      background: #007bff;
      color: white;
      align-self: flex-end;
    }
    .bot {
      background: #e4e6eb;
      align-self: flex-start;
    }
    .input-box {
      display: flex;
      border-top: 1px solid #ccc;
    }
    .input-box input {
      flex: 1;
      padding: 10px;
      border: none;
      outline: none;
    }
    .input-box button {
      padding: 10px;
      border: none;
      background: #007bff;
      color: white;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="chatbox">
    <div class="messages" id="messages"></div>
    <div class="input-box">
      <input type="text" id="input" placeholder="Type a message...">
      <button onclick="sendMessage()">Send</button>
    </div>
  </div>

  <script>
    function sendMessage() {
      const input = document.getElementById("input");
      const messages = document.getElementById("messages");
      const text = input.value.trim();

      if (text !== "") {
        // User message
        const userMsg = document.createElement("div");
        userMsg.className = "message user";
        userMsg.innerText = text;
        messages.appendChild(userMsg);

        // Bot reply
        const botMsg = document.createElement("div");
        botMsg.className = "message bot";
        botMsg.innerText = "You said: " + text;
        messages.appendChild(botMsg);

        // Scroll to bottom
        messages.scrollTop = messages.scrollHeight;

        input.value = "";
      }
    }
  </script>
</body>
</html>