About the Project
**Task Manager Application** is a web-based productivity tool designed to help users efficiently manage their tasks. The application allows users to **create, read, update, and delete tasks**, categorize them, set deadlines, and prioritize their work.  

This project demonstrates my ability to build **full-stack web applications** with modern technologies, implement **authentication and security**, and develop **responsive, user-friendly interfaces**.  

**Problem Solved:** Many people struggle to organize their daily tasks effectively. This application provides a simple, intuitive interface for task management, ensuring higher productivity and organization.

---

## Key Features
- **User Authentication**: Secure signup/login using JWT or OAuth (Google, Facebook, LinkedIn).  
- **Task Management**: CRUD operations for tasks.  
- **Task Categorization & Priority**: Users can categorize tasks (Work, Personal, Urgent) and mark priority levels (Low, Medium, High).  
- **Deadline Tracking**: Set due dates and optional reminders.  
- **Responsive UI**: Fully mobile-friendly and accessible on any device.  
- **Search & Filter**: Easily find tasks by name, category, or priority.  
- **Future-Ready**: Easily extendable with notifications, analytics, or calendar views.  

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React.js / Next.js, TypeScript, Tailwind CSS |
| Backend | Node.js, Express.js / Flask, RESTful APIs |
| Database | MongoDB / PostgreSQL |
| Authentication | JWT / OAuth (Google, Facebook, LinkedIn) |
| Deployment | Vercel / Netlify / Heroku |

---

## Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/task-manager.git
cd task-manager
2. Install dependencies
bash
Copy code
# Frontend
cd frontend
npm install

# Backend
cd backend
npm install
3. Configure environment variables
Create a .env file in the backend folder:

env
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
4. Run the application
bash
Copy code
# Start Backend
cd backend
npm start

# Start Frontend
cd frontend
npm start
Visit http://localhost:3000 to access the application.

Usage
Sign Up / Login to access your personal task dashboard.

Add New Task: Click “Add Task”, fill in details, and save.

Edit / Update Task: Modify details or mark tasks as complete.

Delete Task: Remove tasks that are completed or unnecessary.

Filter / Search Tasks: Quickly find tasks by category, priority, or date.

Screenshots
Dashboard View

Add Task Modal

Task List with Filters

Project Structure
bash
Copy code
task-manager/
├─ backend/
│  ├─ controllers/      # API logic
│  ├─ models/           # Database models
│  ├─ routes/           # REST API endpoints
│  ├─ middleware/       # Authentication & error handling
│  └─ server.js         # Entry point for backend
├─ frontend/
│  ├─ components/       # Reusable React components
│  ├─ pages/            # Next.js pages
│  ├─ styles/           # CSS/Tailwind files
│  └─ App.tsx           # Frontend entry point
├─ .gitignore
├─ README.md
└─ package.json
Future Enhancements
Push notifications for upcoming deadlines.

Dark mode for better accessibility.

Drag-and-drop task reordering.

Analytics dashboard for tracking productivity.

Calendar integration to visualize tasks.

Offline support using service workers.

Contribution
Fork the repository.

Create a new branch: git checkout -b feature-name

Commit changes: git commit -m "Add feature"

Push branch: git push origin feature-name

Open a Pull Request for review.
#SCREENSHOTS#
<img width="1907" height="903" alt="Screenshot 2025-10-22 050047" src="https://github.com/user-attachments/assets/e9e86cd3-4dc8-40af-9ff6-ecf747cd4dc1" />
<img width="1909" height="904" alt="Screenshot 2025-10-22 050113" src="https://github.com/user-attachments/assets/d822f157-25f0-47d1-a702-81950757bd64" />
<img width="1905" height="909" alt="Screenshot 2025-10-22 050131" src="https://github.com/user-attachments/assets/893d60c1-9972-4b7f-bd73-f0f0a6035e61" />
<img width="1880" height="906" alt="Screenshot 2025-10-22 050205" src="https://github.com/user-attachments/assets/12cc94b4-35e5-45e6-b3ab-6257f02c5880" />
<img width="1903" height="913" alt="Screenshot 2025-10-22 050235" src="https://github.com/user-attachments/assets/3adf72cb-42e5-431c-9820-4997d0145724" />
<img width="1913" height="902" alt="Screenshot 2025-10-22 115057" src="https://github.com/user-attachments/assets/a55b45c3-03c9-4c6d-8363-980591e3c2b8" />





