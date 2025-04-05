const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

if (!process.env.OPENROUTER_API_KEY) {
  console.error("❌ OpenRouter API key is missing! Check your .env file.");
  process.exit(1);
}

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

app.use(cors());
app.use(express.json()); // Enable JSON parsing

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("sendMessage", async (message) => {
    console.log(`User: ${message}`);

    // Send user message to all clients
    io.emit("receiveMessage", { sender: "User", text: message });

    // Fetch response from OpenRouter
    const botReply = await getBotResponse(message);

    // Send chatbot reply
    io.emit("receiveMessage", { sender: "Chatbot", text: botReply });
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

async function getBotResponse(userMessage) {
  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",
        messages: [{ role: "user", content: userMessage }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "HTTP-Referer": "http://localhost:3000",
          "Content-Type": "application/json",
        },
      }
    );

    return (
      response.data.choices?.[0]?.message?.content ||
      "I couldn't understand that."
    );
  } catch (error) {
    console.error(
      "Error fetching chatbot response:",
      error.response?.data || error.message
    );
    return "Sorry, I couldn't process your request right now.";
  }
}

server.listen(5001, () => console.log("✅ Server running on port 5001"));
