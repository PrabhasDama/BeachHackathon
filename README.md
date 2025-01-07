# Beach Hackathon Project

Welcome to the **Beach Hackathon Project**! This is a full-stack web application designed during the Cerebral Beach Hackathon. The application allows users to input a query and receive responses from multiple AI models (ChatGPT, Claude, Perplexity, and Gemini) using API integrations.

---

## **Features**

- **Multi-Model Query Support**: Query multiple AI models simultaneously.
- **Real-Time Responses**: Fetch and display responses in real-time using APIs.
- **User-Friendly Interface**: Intuitive and clean UI for seamless interaction.
- **Collaborative Development**: Built by a team of 4 participants during the hackathon.

---

## **Tech Stack**

- **Frontend**:
  - HTML, CSS, JavaScript
  - React.js (for dynamic user interfaces)

- **Backend**:
  - Node.js with Express.js
  - API integrations with ChatGPT, Claude, Perplexity, and Gemini

- **Database**:
  - MongoDB (to store user queries and responses for analysis)

- **Other Tools**:
  - GitHub for version control
  - Postman for API testing

---

## **Setup and Installation**

### Prerequisites
- Node.js and npm installed.
- MongoDB set up and running locally or on a cloud provider.

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/PrabhasDama/BeachHackathon.git
   cd BeachHackathon
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Create a `.env` file in the root directory.
   - Add the following:
     ```env
     PORT=5000
     MONGO_URI=<your_mongo_connection_string>
     CHATGPT_API_KEY=<your_chatgpt_api_key>
     CLAUDE_API_KEY=<your_claude_api_key>
     PERPLEXITY_API_KEY=<your_perplexity_api_key>
     GEMINI_API_KEY=<your_gemini_api_key>
     ```

4. **Run the application**:
   ```bash
   npm start
   ```

5. **Access the app**:
   Open [http://localhost:5000](http://localhost:5000) in your browser.

---

## **Usage**

1. Enter your query in the input field.
2. Select the AI models you want to query.
3. Click **Submit**.
4. View and compare responses from multiple AI models on the results page.

---

## **Project Structure**
```
BeachHackathon/
|-- frontend/
|   |-- public/
|   |-- src/
|       |-- components/
|       |-- App.js
|       |-- index.js
|-- backend/
|   |-- models/
|   |-- routes/
|   |-- server.js
|-- .env.example
|-- README.md
|-- package.json
```

---

## **Contributors**

This project was collaboratively developed by a team of four during the Cerebral Beach Hackathon. Special thanks to:

- [Prabhas Dama]
- [Barry Watkins]
- [Divyanshu Mehta]
- [Prexa Kamani]

---

## **Future Enhancements**

- Add support for more AI models.
- Improve response visualization and comparison.
- Implement user authentication for personalized query history.
- Deploy the app to a cloud platform (e.g., AWS, Heroku).

---

## **Feedback and Contributions**

Feel free to fork this repository, submit issues, or create pull requests. Feedback and suggestions are always welcome!

---
