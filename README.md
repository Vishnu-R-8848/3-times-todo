# Notes API

A clean and production-ready REST API for managing notes, built with **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**.

This project is designed to demonstrate a proper backend structure using routes, controllers, models, environment configuration, and REST API principles. It can be used as a beginner-friendly CRUD backend project and can also be extended into a full authentication-based notes application.

---

## Table of Contents

* [Overview](#overview)
* [Tech Stack](#tech-stack)
* [Features](#features)
* [Project Structure](#project-structure)
* [Getting Started](#getting-started)
* [Environment Variables](#environment-variables)
* [Running the Project](#running-the-project)
* [API Documentation](#api-documentation)
* [Postman Testing Flow](#postman-testing-flow)
* [Error Handling](#error-handling)
* [Best Practices Followed](#best-practices-followed)
* [Future Improvements](#future-improvements)
* [Author](#author)
* [License](#license)

---

## Overview

Notes API is a backend application that provides CRUD operations for notes.

Users can:

* Create a note
* Fetch all notes
* Fetch a single note by ID
* Update an existing note
* Delete a note

Each note contains a title and description, along with automatic timestamps.

This project is mainly useful for learning backend API development, Express.js routing, MongoDB database connection, Mongoose schema design, and API testing using Postman.

---

## Tech Stack

| Technology | Purpose                         |
| ---------- | ------------------------------- |
| Node.js    | JavaScript runtime              |
| Express.js | Backend framework               |
| MongoDB    | NoSQL database                  |
| Mongoose   | MongoDB object modeling         |
| dotenv     | Environment variable management |
| nodemon    | Development server restart tool |

---

## Features

* REST API architecture
* CRUD operations for notes
* MongoDB database integration
* Mongoose schema and model
* Environment variable configuration
* Organized folder structure
* Controller-based logic
* API testing support with Postman
* Easy to extend with authentication and user ownership

---

## Project Structure

```txt
notes-api/
│
├── server.js
├── package.json
├── package-lock.json
├── .env
├── .gitignore
├── README.md
│
└── src/
    ├── app.js
    │
    ├── config/
    │   └── database.js
    │
    ├── controllers/
    │   └── notes.controller.js
    │
    ├── models/
    │   └── notes.models.js
    │
    └── routes/
        └── notes.route.js
```

---

## Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/notes-api.git
```

### 2. Move Into the Project Directory

```bash
cd notes-api
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Create Environment File

Create a `.env` file in the root directory.

```bash
touch .env
```

Add the following values:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/notes-api
```

For MongoDB Atlas:

```env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/notes-api
```

---

## Environment Variables

| Variable    | Required | Description                              |
| ----------- | -------- | ---------------------------------------- |
| `PORT`      | Yes      | Port number where the server runs        |
| `MONGO_URI` | Yes      | MongoDB local or Atlas connection string |

Example:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/notes-api
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

After starting the server, the API will be available at:

```txt
http://localhost:5000
```

Base API URL:

```txt
http://localhost:5000/api/notes
```

---

## API Documentation

### 1. Create Note

```http
POST /api/notes/create
```

#### Request Body

```json
{
  "title": "Learn Express.js",
  "description": "Understand routing, controllers, and middleware."
}
```

#### Success Response

```json
{
  "success": true,
  "message": "Note created successfully",
  "note": {
    "_id": "665845a123456789abcd1234",
    "title": "Learn Express.js",
    "description": "Understand routing, controllers, and middleware.",
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

#### Success Response

```json
{
  "success": true,
  "message": "Notes fetched successfully",
  "notes": [
    {
      "_id": "665845a123456789abcd1234",
      "title": "Learn Express.js",
      "description": "Understand routing, controllers, and middleware.",
      "createdAt": "2026-05-28T10:00:00.000Z",
      "updatedAt": "2026-05-28T10:00:00.000Z"
    }
  ]
}
```

---

### 3. Get Single Note

```http
GET /api/notes/get/:id
```

#### Example

```txt
GET http://localhost:5000/api/notes/get/665845a123456789abcd1234
```

#### Success Response

```json
{
  "success": true,
  "message": "Note fetched successfully",
  "note": {
    "_id": "665845a123456789abcd1234",
    "title": "Learn Express.js",
    "description": "Understand routing, controllers, and middleware.",
    "createdAt": "2026-05-28T10:00:00.000Z",
    "updatedAt": "2026-05-28T10:00:00.000Z"
  }
}
```

---

### 4. Update Note

```http
PUT /api/notes/update/:id
```

#### Example

```txt
PUT http://localhost:5000/api/notes/update/665845a123456789abcd1234
```

#### Request Body

```json
{
  "title": "Learn Backend Development",
  "description": "Updated note content."
}
```

#### Success Response

```json
{
  "success": true,
  "message": "Note updated successfully",
  "note": {
    "_id": "665845a123456789abcd1234",
    "title": "Learn Backend Development",
    "description": "Updated note content.",
    "createdAt": "2026-05-28T10:00:00.000Z",
    "updatedAt": "2026-05-28T10:30:00.000Z"
  }
}
```

---

### 5. Delete Note

```http
DELETE /api/notes/delete/:id
```

#### Example

```txt
DELETE http://localhost:5000/api/notes/delete/665845a123456789abcd1234
```

#### Success Response

```json
{
  "success": true,
  "message": "Note deleted successfully"
}
```

---

## API Endpoint Summary

| Method   | Endpoint                | Description       |
| -------- | ----------------------- | ----------------- |
| `POST`   | `/api/notes/create`     | Create a new note |
| `GET`    | `/api/notes/get-all`    | Get all notes     |
| `GET`    | `/api/notes/get/:id`    | Get a single note |
| `PUT`    | `/api/notes/update/:id` | Update a note     |
| `DELETE` | `/api/notes/delete/:id` | Delete a note     |

---

## Postman Testing Flow

Use this order while testing:

```txt
1. Create a note
2. Get all notes
3. Copy one note ID
4. Get single note by ID
5. Update the note
6. Delete the note
7. Get all notes again and verify deletion
```

Recommended Postman base URL:

```txt
http://localhost:5000/api/notes
```

---

## Error Handling

The API should return clear error responses for invalid requests.

Example validation error:

```json
{
  "success": false,
  "message": "Title and description are required"
}
```

Example not found error:

```json
{
  "success": false,
  "message": "Note not found"
}
```

Example server error:

```json
{
  "success": false,
  "message": "Internal Server Error"
}
```

---

## Best Practices Followed

* Separate route, controller, model, and config files
* Environment variables are stored in `.env`
* Sensitive files are ignored using `.gitignore`
* MongoDB connection is separated from server logic
* API follows a clear request-response structure
* Project structure is beginner-friendly and scalable
* Codebase can be extended into a larger MERN application

---

## .gitignore

Make sure your `.gitignore` file contains:

```txt
node_modules
.env
.DS_Store
```

Never push `.env` to GitHub because it contains private database credentials.

---

## Future Improvements

This project can be improved with:

* User authentication
* JWT-based login system
* User-specific notes
* Pagination
* Search notes
* Input validation middleware
* Global error handler
* 404 route handler
* Helmet security middleware
* Rate limiting
* CORS configuration
* Unit testing
* API documentation using Swagger
* Deployment on Render, Railway, or Vercel serverless functions

---

## Roadmap

```txt
Phase 1: Basic CRUD API
Phase 2: Error handling and validation
Phase 3: Authentication and authorization
Phase 4: User-owned notes
Phase 5: Search, pagination, and filtering
Phase 6: Testing and deployment
```

---

## Author

**Vishnu R**

BCA Student | MERN Stack Learner

GitHub: `https://github.com/your-username`

---

## License

This project is open-source and available for learning and practice purposes.
