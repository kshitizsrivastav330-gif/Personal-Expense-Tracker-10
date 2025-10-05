# 💰 Personal Expense Tracker

A simple and professional web application that helps you track and manage daily expenses.  
This project uses **Spring Boot (Java)** for the backend and **HTML, CSS, JavaScript** for the frontend.

---

## 🚀 How to Run the Project

### 🖥️ Backend (Spring Boot)

1. Open the project in **IntelliJ IDEA** or **VS Code** (with Java extensions).
2. Ensure you have:
   - **JDK 17+**
   - **Maven** or **Gradle**
3. Open the terminal in the backend folder and run:

   mvn spring-boot:run

   Or

   Directly run ExpenseTrackerApplication.java from your IDE.

4. The backend will start at:

   http://localhost:9090/api/expenses

## ⚙️ How to Run

### 1️⃣ Clone or download this project

```bash
git clone https://github.com/yourusername/expense-tracker.git
=======


### 🌐 Frontend (HTML, CSS, JS)

Open the index.html file in the frontend folder.

Ensure the JavaScript file has the correct API base URL:

const apiBaseUrl = "http://localhost:9090/api/expenses";


Open index.html in your browser to start using the tracker.

###🌟 Features 

Add, view, update, and delete expenses

Responsive and modern UI

Real-time connection between frontend and backend

###🧠 Design

The system follows a Client–Server Architecture.

Frontend (Client):

Built using HTML, CSS, and JavaScript.

Handles user interactions and displays expense data dynamically.

Backend (Server):

Built with Spring Boot (Java).

Provides RESTful APIs for expense management.

Uses layered architecture: Controller → Service → Repository → Model.

Data Flow:

User → Frontend (JS) → REST API (Spring Boot) → Database → Response → UI Update

### 📋 Assumptions

The user has Java JDK and Maven installed.

Spring Boot application runs on port 9090.

Database used is H2 (in-memory) or MySQL.

Application supports a single user without authentication.

🧾 Sample Input / Output
Input (Add Expense)
{
  "amount": 300,
  "date": "2025-10-05",
  "note": "Dinner",
  "category": "Food"
}
}

Output (Response)
{
  "message": "Expense added successfully!",
  "expense": {
    "id": 1,
  "amount": 300,
  "date": "2025-10-05",
  "note": "Dinner",
  "category": "Food"

  }
}

# Personal-Expense-Tracker-10

