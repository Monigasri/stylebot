import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import ReactMarkdown from "react-markdown"; // ✅ Import markdown renderer
import "../styles/styles.css";

const socket = io("http://localhost:5001");

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("receiveMessage", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => socket.off("receiveMessage");
  }, []);

  const sendMessage = () => {
    if (!input.trim()) return;
    socket.emit("sendMessage", input);
    setInput("");
  };

  return (
    <div className="chatbot-wrapper">
      {/* Sidebar */}
      <aside className="sidebar">
    
        <div className="user-card">
          <img src="user-profile.png" alt="User" className="user-avatar" />
          <div>
            <h4>Monica</h4>
          </div>
        </div>
      </aside>

      {/* Chat Section */}
      <main className="chat-area">
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`chat-message ${msg.sender === "User" ? "user" : "bot"}`} // ✅ Fixed className
            >
              {msg.sender !== "User" && (
                <img src="bot-profile.png" alt="Bot" className="chat-avatar" />
              )}
              <div className="message-bubble">
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              </div>
              {msg.sender === "User" && (
                <img src="user-profile.png" alt="User" className="chat-avatar" />
              )}
            </div>
          ))}
        </div>

        {/* Input Bar */}
        <div className="input-bar">
          <input
            type="text"
            placeholder="Type a new message here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                sendMessage();
              }
            }}
          />
          <div className="input-icons">
            <button>📎</button>
            <button>😊</button>
            <button onClick={sendMessage}>➤</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chatbot;
