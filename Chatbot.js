import { useState, useEffect, useRef } from "react";
import "./Chatbot.css";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you?", sender: "bot" }
  ]);
  const [userInput, setUserInput] = useState("");

  const chatBoxRef = useRef(null); // Ref for auto-scrolling

  // Predefined chatbot responses
  const responses = {
    "how are you": "I'm just a bot, but I'm doing great! How about you?",
    "help me": "Sure! Please tell me what you need help with.",
    hello: "Hi there! How can I help you?",
    "what is your name?": "I am Mix!! Nice to meet you",
    "who created you?": "A human",
    "are you a robot?": "Yes, I am an AI",
    "can you talk?": "Yes! What do you want to ask?",
    "okay":"nice to here!!",
    thanks:"nice to here!!",
    "thank you":"You're welcome!!",
    default: "I'm not sure how to respond to that. Can you try something else?",
  };

  // Function to handle sending messages
  const handleSend = () => {
    if (userInput.trim()) {
      const userMessage = { text: userInput, sender: "user" };
      const lowerCaseInput = userInput.toLowerCase().trim();

      // Find response (case-insensitive)
      let botReply = responses.default;
      for (let key in responses) {
        if (lowerCaseInput === key.toLowerCase().trim()) {
          botReply = responses[key];
          break;
        }
      }

      const botResponse = { text: botReply, sender: "bot" };

      setMessages((prevMessages) => [...prevMessages, userMessage, botResponse]);
      setUserInput(""); // Clear input field
    }
  };

  // Function to handle "Enter" key press
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  // Auto-scroll to the latest message
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="chat-box" ref={chatBoxRef}>
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyPress} // Handle Enter key
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}
