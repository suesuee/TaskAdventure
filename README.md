# TaskAdventure Project

For people of all ages who need the motivation to stay on top of their tasks, Task Adventure is a To-Do List application which gamifies one’s daily life by incorporating role-playing-game elements into a to-do list. Our product will allow you to assign tasks to certain social stats, like Intelligence, Sociability, or Kindness, to tasks. Completing these types of tasks will allow you to gain points towards these social stats, allowing you to rank them up and become a better-rounded person. You can additionally gain achievements, and look back on them as an testament to your efforts.

## Website link
https://task-adventure-frontend.vercel.app/
(Our backend is hosted on Render, which may enter a sleep mode after periods of inactivity. Consequently, you may need to "warm it up" by clicking the link and waiting a few seconds for it to spin up before it fully responds. https://taskadventure.onrender.com/)

## UI Prototype [2/14/25 - date last updated]
[link](https://www.figma.com/design/mQtiIPuDZtMvq97HtfwKGC/CSC-307---TE3-Prototype?node-id=48-9256&t=xreCEQgiIpZlOMW3-1)

## UML Diagram (2/28/25 - date last updated)
[link](https://www.figma.com/board/omTntEmawcK9YPKbH4jduR/TE5-307-UML-diagram?node-id=0-1&t=6oSbw9z52GioCPRE-1)

## Dev Environment Setup:

Install Node.js, NPM, and Mongosh. Create a Mongo Atlas account.
Clone repo
run npm install first on the root folder
Then, run npm start to concurrently run the front end and back end
run 'npm --prettier write .' for each time changes are made to front or backend
pull request code to master to deploy to Vercel webapp

for local testing, include all environment variables in .env files in front and backend

Backend .env
MONGO_URI=<your_mongo_connection_string>
JWT_SECRET=<your_jwt_secret>

Frontend .env 
VITE_API_BASE_URL=http://localhost:5000/api

## Project Setup

1. Clone the repository.
2. Navigate to the root directory and install dependencies:

   ```bash
   npm install
   ```

3. To install dependencies for individual packages, navigate to each directory (`packages/frontend`, `packages/backend`) and run:
   ```bash
   npm install
   ```

---

## Available Commands

### **General Commands**

| Command          | Description                                                   |
| ---------------- | ------------------------------------------------------------- |
| `npm install`    | Installs all dependencies from `package.json`.                |
| `npm nodemon src/server.js`    | Starts the backend server in development mode with `nodemon`. |
| `npm start`      | Starts both the frontend and backend using `concurrently`.    |
| `npm --prettier write .` | Formats all project files according to Prettier rules.        |
| `npm run lint`   | Runs ESLint and prettier to check for code quality and linting errors.     |
| `npm run test`   | Runs the project's tests (if tests are added later).          |
| `npm run dev`     | Starts the React frontend application in development mode. |

---

## Architecture (Folder Structure)

```
TaskAdventure/
  ├── .github/workflows/       (GitHub Actions for CI/CD)
  ├── docs/                    (Documentation files)
  ├── cypress/  
  ├── node_modules/            (Generated by npm, ignored in version control)
  ├── packages/
  │   ├── backend/             (Express backend)
  │   │   ├── src/
  │   │   │   ├── controllers/
  │   │   │   │   ├── authController.js (Aunthentication logic)
  │   │   │   ├── middleware/
  │   │   │   │   ├── auth.js (Aunthentication middleware)
  │   │   │   ├── models/
  │   │   │   │   ├── Calendar.js (Calendar schema)
  │   │   │   │   ├── Contact.js (Contact schema)
  │   │   │   │   ├── Stats.js (Stats schema)
  │   │   │   │   ├── Task.js (Task schema)
  │   │   │   │   ├── User.js (User schema)
  │   │   │   ├── routes/
  │   │   │   │   ├── authRoutes.js (Authentication routes)
  │   │   │   │   ├── calendarRoutes.js (Calendar routes)
  │   │   │   │   ├── contactRoutes.js (Contact routes)
  │   │   │   │   ├── statsRoutes.js (Stats routes)
  │   │   │   │   ├── taskRoutes.js (Task routes)
  │   │   │   │   ├── userRoutes.js (User routes)
  │   │   │   ├── server.js
  │   │   ├── .env (Backend enviroment variables (ignored in git))
  │   │   ├── .gitignore
  │   │   ├── eslint.config.js (ESlint configuration)
  │   │   ├── package-lock.json 
  │   │   ├── package.json (Backend dependencies)
  │   ├── frontend/            (React frontend)
  │   │   ├── src/
  │   │   │   ├── assets/
  │   │   │   ├── components/
  │   │   │   │   ├── Layout.jsx (Nav bar and Menu Bar components)
  │   │   │   ├── pages/
  │   │   │   │   ├── CalendarPage.jsx (Task Calendar page)
  │   │   │   │   ├── ContactUsPage.jsx (Contact page)
  │   │   │   │   ├── Login.jsx (Login page)
  │   │   │   │   ├── Signup.jsx (Signup page)
  │   │   │   │   ├── StatsPage.jsx (User Stats page)
  │   │   │   │   ├── TaskPage.jsx (Task page)
  │   │   │   │   ├── UserInfo.jsx (User profile page)
  │   │   │   ├── styles/
  │   │   │   │   ├── CalendarPage.module.css (Calendar page styles)
  │   │   │   │   ├── ContactUsPage.module.css (Contact page styles)
  │   │   │   │   ├── index.css (Global styles)
  │   │   │   │   ├── Login.module.css (Login page styles)
  │   │   │   │   ├── Signup.module.css (Signup page styles)
  │   │   │   │   ├── StatsPage.module.css (Stats page styles)
  │   │   │   │   ├── TaskPage.module.css (Task page styles)
  │   │   │   ├── App.jsx (Root component for Routers)
  │   │   │   ├── main.jsx (Entry point for React)
  │   │   ├── .env (Frontend enviroment variables (ignored in git))
  │   │   ├── .gitignore
  │   │   ├── eslint.config.js (ESlint configuration)
  │   │   ├── index.html (HTML template)
  │   │   ├── package-lock.json
  │   │   ├── package.json (Frontend dependicies)
  │   │   ├── README.md (Frontend documentation)
  │   │   ├── vercel.json (Deployment configuration)
  │   │   ├── vite.config.js (Vite configuration)
  │   │   ├── .prettierrc (Prettier configuration)
  │   │   ├── CONTRIBUTING.md
  ├── .gitignore (Files to ignore in version control)
  ├── package-lock.json
  ├── package.json (Main project configuration)
  ├── README.md (Project documentation)

```
