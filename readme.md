
# **Task Manager Application**

This project is a task manager application that demonstrates **SOLID Principles** using a dynamic task management system. The app is built using **React** on the client-side and **Node.js** with **TypeScript** on the server-side.

## **Table of Contents**
1. [Tech Stack](#tech-stack)
2. [Project Setup](#project-setup)
3. [How to Run](#how-to-run)
4. [Project Structure](#project-structure)
5. [Demonstrating SOLID Principles](#demonstrating-solid-principles)
6. [License](#license)

## **Tech Stack**

- **Frontend**: React, TypeScript
- **Backend**: Node.js, Express, TypeScript
- **Build Tool**: Parcel (for client-side bundling)
- **Language**: TypeScript


## **Project Setup**

This section will guide you through setting up the project, including installing the necessary dependencies and configuring the environment for both the **client-side** (React) and **server-side** (Node.js with Express) components. You will need **Node.js** and **npm** (Node Package Manager) installed on your machine to proceed.

### **Prerequisites**

1. **Node.js**: Make sure you have Node.js installed on your system. You can download and install it from [Node.js Official Website](https://nodejs.org/).  
   To check if Node.js is installed, run the following command:
   ```bash
   node -v
   ```

2. **npm**: Node.js comes with **npm**, the Node package manager. You can verify if **npm** is installed by running:
   ```bash
   npm -v
   ```

3. **TypeScript**: This project uses TypeScript, so TypeScript must be installed globally or locally in your project. To check if TypeScript is installed globally, you can run:
   ```bash
   tsc -v
   ```

   If you don't have it installed, install it globally using:
   ```bash
   npm install -g typescript
   ```

### **Install Project Dependencies**

Now, install the required dependencies for both the **client** and **server** parts of the application.

#### Install Server-Side Dependencies:
Navigate to the project root directory and run the following command:

```bash
npm install
```

This will install the following **server-side** dependencies:

- **express**: A minimal Node.js web application framework that provides robust features for building web and API servers.
- **typescript**: Used to build a strongly typed application that compiles down to JavaScript.
- **@types/node** and **@types/express**: TypeScript definitions for Node.js and Express to provide type safety.
  
#### Install Client-Side Dependencies:

The **client-side** is built with **React** and **Parcel** as the bundler. The following dependencies are necessary:

```bash
npm install react react-dom
npm install --save-dev @types/react @types/react-dom parcel-bundler
```

This will install the following **client-side** dependencies:

- **react**: A JavaScript library for building user interfaces.
- **react-dom**: A package that provides DOM-specific methods that can be used at the top level of your app to render a React component into the DOM.
- **@types/react** and **@types/react-dom**: TypeScript definitions for React and React DOM.
- **parcel-bundler**: A zero-configuration web application bundler used to bundle and serve the React client.

#### **Check `package.json`**

Here’s what your `package.json` should look like after installing dependencies:

```json
{
  "name": "solid-task-manager",
  "version": "1.0.0",
  "main": "dist/server/server.js",
  "scripts": {
    "start-client": "parcel public/index.html",
    "start-server": "node dist/server/server.js",
    "build": "tsc",
    "start": "concurrently \"npm run start-client\" \"npm run start-server\""
  },
  "dependencies": {
    "express": "^4.17.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "typescript": "^4.3.5"
  },
  "devDependencies": {
    "@types/express": "^4.17.11",
    "@types/node": "^14.14.37",
    "@types/react": "^17.0.2",
    "@types/react-dom": "^17.0.2",
    "parcel-bundler": "^1.12.5",
    "concurrently": "^6.0.2"
  }
}
```

### **TypeScript Configuration**

Make sure you have a **tsconfig.json** file at the root of your project. This configuration file tells TypeScript how to compile your code.

Here is a sample `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",                // The JavaScript version to compile to
    "module": "commonjs",              // The module system to use
    "strict": true,                    // Enable strict type checking
    "esModuleInterop": true,           // Enable compatibility with ES modules
    "skipLibCheck": true,              // Skip type checking for libraries
    "forceConsistentCasingInFileNames": true, // Ensure consistent case sensitivity in imports
    "outDir": "./dist",                // Output directory for compiled files
    "jsx": "react"                     // Enable React JSX
  },
  "include": ["src/**/*.ts", "src/**/*.tsx"], // Include TypeScript and TSX files
  "exclude": ["node_modules"]                  // Exclude node_modules from compilation
}
```

### **Parcel Configuration for Client-Side**

The client-side of the application is bundled using **Parcel**, which requires an `index.html` file as an entry point. 

Ensure your `public/index.html` is set up like this:

```html
<!-- public/index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Task Manager</title>
</head>
<body>
  <div id="root"></div>
  <script src="../src/client/App.tsx"></script>
</body>
</html>
```

### **Concurrent Running**

If you want to run the client and server concurrently, you can install the **concurrently** package (already included in the `devDependencies`) and add this script in your `package.json`:

```json
"scripts": {
  "start": "concurrently \"npm run start-client\" \"npm run start-server\""
}
```

This will allow you to run both the client and server in parallel with one command:
```bash
npm start
```

## **How to Run**

Once the project is set up, follow these steps to run both the server-side and client-side parts of the application:

1. **Compile TypeScript**:  
   Before starting, compile the TypeScript files into JavaScript using the following command:
   ```bash
   npx tsc
   ```

2. **Run the Server**:  
   After compiling, start the **Node.js** server by running:
   ```bash
   npm run start-server
   ```
   The server will be running at `http://localhost:3000`.

3. **Run the Client**:  
   Start the client using Parcel with the following command:
   ```bash
   npm run start-client
   ```
   The client will be running at `http://localhost:1234`.

4. **Running Both Client and Server Concurrently**:
   You can run both the server and client at the same time using the following command:
   ```bash
   npm start
   ```

---

### **Dependencies Breakdown**

#### **Server-Side Dependencies:**
1. **express**: 
   - Framework to set up routing and server logic.
   - Handles HTTP requests and routing for tasks (e.g., `GET /tasks`, `POST /tasks`).

2. **typescript**: 
   - Provides static typing for JavaScript, improving maintainability and catching bugs early.

3. **@types/node** and **@types/express**: 
   - TypeScript type definitions for Node.js and Express.

#### **Client-Side Dependencies:**
1. **react**: 
   - Front-end library for building the UI. The `TaskManager` and `TaskList` components are React components.

2. **react-dom**: 
   - Allows React to interact with the browser DOM to render components inside the HTML.

3. **@types/react** and **@types/react-dom**: 
   - TypeScript type definitions for React and React DOM, ensuring type safety when building the client.

4. **parcel-bundler**: 
   - Bundles the React application and serves it locally for development.

#### **Dev Tools:**
1. **concurrently**: 
   - Runs the client and server simultaneously in development mode using a single command.

---

This extended documentation should help clarify the setup process, dependency details, and how the application demonstrates the SOLID principles. Let me know if you need any additional sections!
### **Testing the Application**

- Open your browser and go to `http://localhost:1234` to interact with the task manager.
- To view the API responses from the server, use tools like **Postman** or **curl**.

Example API requests:
- **Get all tasks**:  
  ```bash
  curl http://localhost:3000/tasks
  ```
- **Create a task**:  
  ```bash
  curl -X POST http://localhost:3000/tasks -H "Content-Type: application/json" -d '{"title": "New Task", "description": "Learn TypeScript"}'
  ```

## **Project Structure**

```bash
project-root/
│
├── dist/                            # Compiled output
│   ├── client/                      # Compiled client code
│   └── server/                      # Compiled server code
│
├── node_modules/                    # Project dependencies
│
├── public/                          # Public assets (HTML)
│   └── index.html                   # Entry point for client-side
│
├── src/                             # Source code for both client and server
│   ├── client/                      # Client-side (React, JSX)
│   │   ├── components/              # React components
│   │   │   ├── TaskManager.tsx      # Task manager component
│   │   │   └── TaskList.tsx         # Task list component
│   │   ├── models/                  # Models (Task, UrgentTask)
│   │   │   ├── Task.ts              # Task model
│   │   │   └── UrgentTask.ts        # UrgentTask model (extends Task)
│   │   └── App.tsx                  # Main React component
│   └── server/                      # Server-side (Node.js, Express)
│       ├── controllers/             # Controllers for request handling
│       │   └── TaskController.ts    # Task controller
│       ├── models/                  # Models (Task, UrgentTask)
│       │   ├── Task.ts              # Task model (server-side)
│       │   └── UrgentTask.ts        # UrgentTask model (server-side)
│       ├── repositories/            # Repository layer
│       │   └── TaskRepository.ts    # Task repository
│       ├── services/                # Business logic
│       │   └── TaskService.ts       # Task service (task creation/fetching)
│       └── server.ts                # Entry point for the server
│
├── tsconfig.json                    # TypeScript configuration
├── package.json                     # Dependencies and scripts
└── README.md                        # Project documentation
```

## **Demonstrating SOLID Principles**

### 1. **Single Responsibility Principle (SRP)**

Each class or component in the project has one specific responsibility:
- **TaskManager**: Manages task state and handles adding new tasks.
- **TaskList**: Displays tasks.
- **TaskController**: Handles incoming HTTP requests for tasks.
  
This separation of concerns ensures that each part of the application can be modified independently.

### 2. **Open/Closed Principle (OCP)**

The **`Task`** class is open for extension but closed for modification. The **`UrgentTask`** class extends the functionality of `Task` without modifying it.

```ts
class UrgentTask extends Task {
   // Extends Task functionality
}
```

This allows new types of tasks (like `UrgentTask`) to be introduced without changing the core logic of the `Task` class.

### 3. **Liskov Substitution Principle (LSP)**

Objects of a parent class (like `Task`) can be replaced with objects of a subclass (like `UrgentTask`) without affecting the correctness of the program. The `TaskList` component can accept both `Task` and `UrgentTask` objects.

```tsx
const tasks: Task[] = [
   new Task('Regular Task', 'This is a regular task'),
   new UrgentTask('Urgent Task', 'This is an urgent task', 5)
];
```

### 4. **Interface Segregation Principle (ISP)**

The service layer separates responsibilities by using different interfaces for different behaviors:
- **`ICreateTaskService`**: Responsible for task creation.
- **`IFetchTaskService`**: Responsible for fetching tasks.

```ts
interface ICreateTaskService {
   createTask(title: string, description: string): void;
}
```

This avoids bloating interfaces with methods that clients don't need.

### 5. **Dependency Inversion Principle (DIP)**

High-level modules (like `TaskManager`) depend on abstractions (interfaces) rather than concrete classes (like `TaskService`), making the system more flexible and easier to extend or modify.

```ts
interface ITaskService {
   createTask(title: string, description: string): void;
   getAllTasks(): Task[];
}
```

`TaskManager` depends on `ITaskService`, allowing different implementations of the task service to be used without changing the `TaskManager`.


### Conclusion

This **Task Manager** project demonstrates how to effectively implement the **SOLID principles** in a full-stack TypeScript environment, ensuring code is maintainable, extensible, and flexible.

