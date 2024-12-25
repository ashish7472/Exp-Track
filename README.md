<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Expense Tracker - README</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 0;
      background-color: #f4f4f9;
      color: #333;
    }
    .container {
      max-width: 900px;
      margin: 20px auto;
      padding: 20px;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    h1, h2, h3 {
      color: #1a73e8;
    }
    ul {
      margin: 10px 0 20px;
      padding-left: 20px;
    }
    ul li {
      margin-bottom: 10px;
    }
    code {
      background: #f1f1f1;
      padding: 2px 4px;
      border-radius: 4px;
      font-size: 0.95em;
    }
    .footer {
      text-align: center;
      margin-top: 20px;
      font-size: 0.9em;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Expense Tracker</h1>
    <p><strong>Overview:</strong> The <em>Expense Tracker</em> is a web application designed to help users manage their finances effectively. With features like budget setting, expense tracking, graphical representations, and downloadable reports, it ensures users stay in control of their spending habits.</p>

    <h2>Features</h2>
    <ul>
      <li><strong>Set and Track Monthly Budgets:</strong> Define a monthly budget and monitor your expenses in real-time.</li>
      <li><strong>Graphs and Charts:</strong> Visualize your monthly and yearly expenses with intuitive graphs and charts.</li>
      <li><strong>Budget Exceed Notifications:</strong> Receive alerts when your spending surpasses the set budget.</li>
      <li><strong>Downloadable Reports:</strong> Export your monthly expenses as PDF or CSV files for offline use.</li>
      <li><strong>Expense History:</strong> View a detailed history of your expenses with highlights on minimum and maximum spending months.</li>
    </ul>

    <h2>Tech Stack</h2>
    <ul>
      <li><strong>Frontend:</strong> React.js, Tailwind CSS</li>
      <li><strong>Backend:</strong> Node.js, Express.js</li>
      <li><strong>Database:</strong> MongoDB (MongoDB Atlas)</li>
      <li><strong>Deployment:</strong> Hosted on [platform name, e.g., Render.com]</li>
    </ul>

    <h2>Installation and Setup</h2>
    <ol>
      <li>Clone the repository:
        <pre><code>git clone https://github.com/ashish7472/Exp-Track.git</code></pre>
      </li>
      <li>Navigate to the project directory:
        <pre><code>cd Exp-Track</code></pre>
      </li>
      <li>Install dependencies:
        <ul>
          <li>For the frontend:
            <pre><code>cd frontend<br>npm install</code></pre>
          </li>
          <li>For the backend:
            <pre><code>cd ../backend<br>npm install</code></pre>
          </li>
        </ul>
      </li>
      <li>Configure environment variables:
        <pre><code>
MONGO_URI=&lt;your-mongodb-connection-string&gt;
JWT_SECRET=&lt;your-jwt-secret&gt;
        </code></pre>
      </li>
      <li>Start the development server:
        <ul>
          <li>Backend:
            <pre><code>cd backend<br>npm start</code></pre>
          </li>
          <li>Frontend:
            <pre><code>cd ../frontend<br>npm start</code></pre>
          </li>
        </ul>
      </li>
      <li>Open the app in your browser at <code>http://localhost:3000</code>.</li>
    </ol>

    <h2>Future Plans</h2>
    <ul>
      <li>Add advanced analytics for expense categorization.</li>
      <li>Integrate a mobile-friendly interface.</li>
      <li>Include features for recurring payments and subscriptions.</li>
      <li>Implement user authentication using OAuth.</li>
      <li><strong>Expense Splitting:</strong> Easily split expenses among friends and keep track of who owes whom.</li>
    </ul>

    <h2>Contribution</h2>
    <p>We welcome contributions! To contribute, follow these steps:</p>
    <ol>
      <li>Fork the repository.</li>
      <li>Create a new branch:
        <pre><code>git checkout -b feature-name</code></pre>
      </li>
      <li>Commit your changes and push to your fork.</li>
      <li>Open a pull request on the main repository.</li>
    </ol>

    <h2>Contact</h2>
    <p>For any queries or suggestions, feel free to reach out:</p>
    <ul>
      <li><strong>Email:</strong> ashishrolan292@gmail.com</li>
      <li><strong>GitHub:</strong> <a href="https://github.com/ashish7472">ashish7472</a></li>
    </ul>

    <div class="footer">
      <p>&copy; 2024 Exp-Track. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
