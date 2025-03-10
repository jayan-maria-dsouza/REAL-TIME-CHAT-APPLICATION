# REAL-TIME-CHAT-APPLICATION

*COMPANY*: CODETECH IT SOLUTIONS

*NAME*: JAYAN MARIA DSOUZA

*INTERN ID*: CT08TKG

*DOMAIN*: FRONT END DEVELOPMENT

*DURATION*: 4 WEEKS

*MENTOR*: NEELA SANTOSH





# Description
This code constructs a simple, interactive chatbot application using React, designed to function seamlessly across various web browsers. The primary component, App.js, serves as the entry point, rendering a title "MIX Chatbot" and the Chatbot component itself. The Chatbot component, defined in Chatbot.js, encapsulates the chatbot's functionality and user interface. The styling for the chatbot is provided by Chatbot.css, ensuring a visually appealing and user-friendly experience.

The Chatbot component leverages React's state management using the useState hook to maintain the message history (messages) and the user's input (userInput). The useRef hook is employed to create a reference to the chat box element (chatBoxRef), enabling automatic scrolling to the latest message. The component initializes with a welcome message from the bot. A predefined set of responses is stored in the responses object, allowing the chatbot to provide relevant replies to specific user inputs.

The handleSend function is responsible for processing user messages. It first checks if the user input is not empty. If valid, it creates a message object representing the user's input and converts it to lowercase for case-insensitive matching against the predefined responses. The chatbot then iterates through the responses object to find a matching key. If a match is found, the corresponding response is used; otherwise, a default response is provided. The user's message and the bot's response are then appended to the messages state, and the input field is cleared. The handleKeyPress function listens for the "Enter" key press, triggering the handleSend function when detected, enhancing user convenience.

The useEffect hook is used to automatically scroll the chat box to the bottom whenever the messages state changes. This ensures that the latest messages are always visible to the user. The rendering logic maps over the messages array, displaying each message in a div element with appropriate styling based on the sender ("bot" or "user"). The user interface consists of a chat box, an input field, and a send button. The chat box is styled with a gradient background and rounded corners, providing a modern look. Messages are displayed with different background colors and alignment based on the sender, clearly distinguishing between user and bot messages. The input field and send button are styled with rounded corners and appropriate padding, ensuring a consistent visual appearance. Custom scrollbar styling is applied to the chat box, enhancing the user experience.

The CSS styling in Chatbot.css ensures that the chatbot is responsive and visually consistent across different browsers. The use of flexbox and percentage-based widths allows the chatbot to adapt to various screen sizes. The styling focuses on creating a clean and intuitive interface, making it easy for users to interact with the chatbot. The combination of React's component-based architecture and CSS styling results in a robust and user-friendly chatbot application that can be easily integrated into other web projects. The application is created using Visual Studio Code, ensuring a smooth development process and cross-browser compatibility.

# OUT PUT

![Image](https://github.com/user-attachments/assets/3df8ffae-79e4-42b9-ae6e-d366c6b5980f)


![Image](https://github.com/user-attachments/assets/ac83b5fc-801e-46ff-8800-8e67640fb718)
