# 3 Times Notes/Todo CRUD API

A structured **Notes/Todo CRUD Backend API** built with **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**.

This repository contains three separate implementation attempts of the same CRUD application. The main goal of this project is to practice and strengthen backend fundamentals such as API handling, CRUD operations, MongoDB integration, Express routing, controller structure, and real-world backend project organization.

---

## Project Status

![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![Express.js](https://img.shields.io/badge/Express.js-API-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)
![Mongoose](https://img.shields.io/badge/Mongoose-ODM-red)
![Status](https://img.shields.io/badge/Status-Completed-blue)
![License](https://img.shields.io/badge/License-ISC-yellow)

---

## Assignment Objective

The assignment was to build a complete CRUD-based Notes/Todo application multiple times to improve practical understanding.

The project follows three attempts:

| Attempt     | Folder    | Purpose                                                             |
| ----------- | --------- | ------------------------------------------------------------------- |
| 1st Attempt | `1-phase` | Understand and recreate the basic application                       |
| 2nd Attempt | `2-phase` | Build the application again without seeing the original code        |
| 3rd Attempt | `3-phase` | Build the application again and add proper Delete API functionality |

The final and most complete version of the project is available inside:

```txt
3-phase/
```

---

## Overview

This project provides a REST API for managing notes.

Users can perform the following operations:

* Create a new note
* Read all notes
* Read a single note by ID
* Update a note by ID
* Delete a note by ID

Each note contains:

```txt
title
description
createdAt
updatedAt
```

---

## Tech Stack

| Technology | Purpose                         |
| ---------- | ------------------------------- |
| Node.js    | JavaScript runtime              |
| Express.js | Backend framework               |
| MongoDB    | NoSQL database                  |
| Mongoose   | MongoDB object modeling         |
| dotenv     | Environment variable management |
| nodemon    | Development server auto-restart |

---

## Repository Structure

```txt
3-times/
│
├── 1-phase/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   ├── .gitignore
│   └── src/
│       ├── app.js
│       ├── config/
│       │   └── db.js
│       └── models/
│           └── notes.model.js
│
├── 2-phase/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   ├── .gitignore
│   └── src/
│       ├── app.js
│       ├── config/
│       │   └── db.js
│       └── models/
│           └── notes.model.js
│
└── 3-phase/
    ├── server.js
    ├── package.json
    ├── package-lock.json
    ├── .env
    ├── .gitignore
    └── src/
        ├── app.js
        ├── config/
        │   └── database.js
        ├── controllers/
        │   └── notes.controller.js
        ├── models/
        │   └── notes.models.js
        └── routes/
            └── notes.route.js
```

---

## Final Project Folder

The final working version is inside:

```bash
cd 3-phase
```

All setup, installation, and API testing should be done from the `3-phase` folder.

---

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Vishnu-R-8848/3-times-todo.git
```

### 2. Move Into the Project

```bash
cd 3-times-todo/3-phase
```

### 3. Install Dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file inside the `3-phase` folder.

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
```

Example for local MongoDB:

```env
PORT=4000
MONGO_URI=mongodb://127.0.0.1:27017/notes-api
```

Example for MongoDB Atlas:

```env
PORT=4000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/notes-api
```

---

## Running the Project

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

After starting the server, the backend will run on:

```txt
http://localhost:4000
```

---

## API Base URL

```txt
http://localhost:4000/api/notes
```

---

## API Endpoints

| Method | Endpoint                | Description                   |
| ------ | ----------------------- | ----------------------------- |
| POST   | `/api/notes/create`     | Create a new note             |
| GET    | `/api/notes/get-all`    | Get all notes                 |
| GET    | `/api/notes/:id`        | Get a single note by ID       |
| PATCH  | `/api/notes/update/:id` | Update note description by ID |
| DELETE | `/api/notes/delete/:id` | Delete a note by ID           |

---

## Note Model

```js
{
  title: {
    type: String,
    required: true,
    minlength: 5,
    unique: true
  },
  description: {
    type: String,
    minlength: 10
  }
}
```

Mongoose automatically adds:

```txt
createdAt
updatedAt
```

because timestamps are enabled.

---

## API Documentation

### 1. Create Note

```http
POST /api/notes/create
```

Request body:

```json
{
  "title": "Learn Express",
  "description": "Express helps us build backend APIs easily."
}
```

Success response:

```json
{
  "message": "Note created successfully",
  "note": {
    "_id": "665845a123456789abcd1234",
    "title": "Learn Express",
    "description": "Express helps us build backend APIs easily.",
    "createdAt": "2026-05-28T10:00:00.000Z",
    "updatedAt": "2026-05-28T10:00:00.000Z"
  }
}
```

---

### 2. Get All Notes

```http
GET /api/notes/get-all
```

Success response:

```json
{
  "message": "Notes fetched successfully",
  "notes": [
    {
      "_id": "665845a123456789abcd1234",
      "title": "Learn Express",
      "description": "Express helps us build backend APIs easily.",
      "createdAt": "2026-05-28T10:00:00.000Z",
      "updatedAt": "2026-05-28T10:00:00.000Z"
    }
  ]
}
```

---

### 3. Get Single Note

```http
GET /api/notes/:id
```

Example:

```txt
http://localhost:4000/api/notes/665845a123456789abcd1234
```

Success response:

```json
{
  "message": "Note fetched successfully",
  "note": {
    "_id": "665845a123456789abcd1234",
    "title": "Learn Express",
    "description": "Express helps us build backend APIs easily.",
    "createdAt": "2026-05-28T10:00:00.000Z",
    "updatedAt": "2026-05-28T10:00:00.000Z"
  }
}
```

---

### 4. Update Note

```http
PATCH /api/notes/update/:id
```

Example:

```txt
http://localhost:4000/api/notes/update/665845a123456789abcd1234
```

Request body:

```json
{
  "description": "Updated note description with more useful details."
}
```

Success response:

```json
{
  "message": "Note updated successfully",
  "note": {
    "_id": "665845a123456789abcd1234",
    "title": "Learn Express",
    "description": "Updated note description with more useful details.",
    "createdAt": "2026-05-28T10:00:00.000Z",
    "updatedAt": "2026-05-28T10:20:00.000Z"
  }
}
```

---

### 5. Delete Note

```http
DELETE /api/notes/delete/:id
```

Example:

```txt
http://localhost:4000/api/notes/delete/665845a123456789abcd1234
```

Success response:

```json
{
  "message": "Note deleted successfully",
  "note": {
    "_id": "665845a123456789abcd1234",
    "title": "Learn Express",
    "description": "Updated note description with more useful details."
  }
}
```

---

## Validation Responses

### Missing Title

```json
{
  "error": "Title is required"
}
```

### Missing Description

```json
{
  "error": "Description is required"
}
```

### Short Title

```json
{
  "error": "Title must be at least 5 characters long"
}
```

### Short Description

```json
{
  "error": "Description must be at least 10 characters long"
}
```

### Note Not Found

```json
{
  "error": "Note not found"
}
```

---

## Postman Testing Flow

Use the following order while testing the API:

```txt
1. Start the server using npm run dev
2. Create a note using POST /api/notes/create
3. Get all notes using GET /api/notes/get-all
4. Copy one note _id
5. Get single note using GET /api/notes/:id
6. Update note using PATCH /api/notes/update/:id
7. Delete note using DELETE /api/notes/delete/:id
8. Get all notes again and verify the deleted note is removed
```

---

## Scripts

Inside the `3-phase` folder, the following scripts are available:

| Command       | Description                     |
| ------------- | ------------------------------- |
| `npm start`   | Starts the server using Node.js |
| `npm run dev` | Starts the server using nodemon |
| `npm test`    | Placeholder test command        |

---

## Git and GitHub Notes

Before pushing to GitHub, make sure unnecessary files are ignored.

Recommended `.gitignore`:

```txt
node_modules
.env
.DS_Store
```

Do not push:

```txt
node_modules
.env
```

The `.env` file contains private credentials, so it should never be uploaded to GitHub.

---

## Recommended `.env.example`

Create a `.env.example` file inside `3-phase` so others can understand the required environment variables.

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
```

---

## Current Limitations

This project is currently a basic public Notes/Todo API.

Current limitations:

* No authentication
* No user ownership
* No pagination
* No search functionality
* No global error middleware
* No invalid MongoDB ObjectId handling
* No duplicate title error handling
* No automated test cases

---

## Future Improvements

Planned improvements:

* Add authentication using JWT
* Add user-specific notes
* Add global error handling middleware
* Add 404 route handler
* Add invalid MongoDB ObjectId validation
* Add duplicate title error response
* Add pagination
* Add search and filter functionality
* Add input validation middleware
* Add security middleware such as Helmet
* Add CORS configuration
* Add tests using Jest and Supertest
* Add API documentation using Swagger
* Deploy backend on Render or Railway

---

## Learning Outcomes

This project helped in understanding:

* Express server setup
* MongoDB database connection
* Mongoose schema and model creation
* REST API design
* CRUD operations
* Route and controller separation
* Environment variable usage
* Postman API testing
* Git and GitHub project submission workflow

---

## Assignment Submission

This repository contains all three attempts required for the assignment.

Final project folder:

```txt
3-phase/
```

GitHub repository:

```txt
https://github.com/Vishnu-R-8848/3-times-todo
```

---

## Author

**Vishnu R**

BCA Student | MERN Stack Learner

GitHub: [Vishnu-R-8848](https://github.com/Vishnu-R-8848)

---

## License

This project is licensed under the ISC License.
