Pynt Senior Full Stack Developer evaluation task.

### Task: Cyber Threat Intelligence Dashboard

**Objective:** Develop a Cyber Threat Intelligence Dashboard that allows users to view and analyze reported cyber threats, incidents and affected systems. The dashboard will present data on various threats, categorize them, and enable detailed inspection of individual incidents.

#### Frontend:

- **Technology:** React with Material-UI (MUI) for styling.
- **Main Components:**
    - **Dashboard View:** Use MUI components to display a summary of recent cyber threats and incidents, including threat type, source, date reported, and a risk rating.
    - **Threat Detail View:** Upon selecting a specific threat, present a detailed view inside a sliding sidebar (drawer) using MUI components. Show detailed information such as threat description, attack vector, affected systems, mitigation steps, and any related threats.

#### Backend Server:

- **Technology:** Node.js with Express framework.
- **Endpoints:**
    - **GET `/threats`**: Returns a list of threats/incidents. (Optional: Support query parameters for filtering by threat category).
    - **GET `/threat/:id`**: Returns detailed information about a specific threat/incident, including data necessary for the Threat Detail View.

#### Database:

- **Technology:** MongoDB.
- **Schema:** We have created a MongoDB instance with two collections threats and categories.

### Task Requirements:

- TODO...

### Goal:

This task aims to evaluate the developer’s skills in creating a full-stack application with React and Material-UI for the frontend, Node.js and Express for the backend, and MongoDB for data storage. The developer should demonstrate knowledge in React, backend server, database interactions, and the ability to perform database operations. The task should be completed in an hour and a half, focusing on the core functionalities to showcase end-to-end implementation skills.

### Extras:

- Implement Authentication
- 