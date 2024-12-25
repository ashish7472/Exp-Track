# Expense Tracker

**Overview:** The *Expense Tracker* is a web application designed to help users manage their finances effectively. With features like budget setting, expense tracking, graphical representations, and downloadable reports, it ensures users stay in control of their spending habits.

## Features
- **Set and Track Monthly Budgets:** Define a monthly budget and monitor your expenses in real-time.
- **Graphs and Charts:** Visualize your monthly and yearly expenses with intuitive graphs and charts.
- **Budget Exceed Notifications:** Receive alerts when your spending surpasses the set budget.
- **Downloadable Reports:** Export your monthly expenses as PDF or CSV files for offline use.
- **Expense History:** View a detailed history of your expenses with highlights on minimum and maximum spending months.

## Tech Stack
- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (MongoDB Atlas)
- **Deployment:** Hosted on [platform name, e.g., Render.com]

## Installation and Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/ashish7472/Exp-Track.git
    ```
2. Navigate to the project directory:
    ```bash
    cd Exp-Track
    ```
3. Install dependencies:
    - For the frontend:
        ```bash
        cd frontend
        npm install
        ```
    - For the backend:
        ```bash
        cd ../backend
        npm install
        ```
4. Configure environment variables:
    ```bash
    MONGO_URI=<your-mongodb-connection-string>
    JWT_SECRET=<your-jwt-secret>
    ```
5. Start the development server:
    - Backend:
        ```bash
        cd backend
        npm start
        ```
    - Frontend:
        ```bash
        cd ../frontend
        npm start
        ```
6. Open the app in your browser at `http://localhost:3000`.

## Future Plans
- Add advanced analytics for expense categorization.
- Integrate a mobile-friendly interface.
- Include features for recurring payments and subscriptions.
- Implement user authentication using OAuth.
- **Expense Splitting:** Easily split expenses among friends and keep track of who owes whom.

## Contribution
We welcome contributions! To contribute, follow these steps:
1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-name
    ```
3. Commit your changes and push to your fork.
4. Open a pull request on the main repository.

## Contact
For any queries or suggestions, feel free to reach out:
- **Email:** ashishrolan292@gmail.com
- **GitHub:** [ashish7472](https://github.com/ashish7472)

&copy; 2024 Exp-Track. All rights reserved.
