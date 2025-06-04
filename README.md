# CRUD API (MERN Stack)

## About Project

Simple application using MongoDB, ExpressJS, React & NodeJS. The API can create, retrieve, update and delete Users.

### _Demo_

![demo](/assets/images/crud.gif)

### _Screens (on mobile)_

![screens](/assets/images/screens.png)

## Installation

> Backend Directory: _`~/Desktop/project-users`_

> Frontend Directory: _`~/Desktop/project-users/frontend`_

1. Clone the repo:

```
git clone https://github.com/mauriciorfdev/project-users.git
```

2. Install NPM Packages (_On Backend & Frontend_):

```
npm install
```

3. Setup `.env` file for the backend:

```
MONGO_URI = "your_string"
```

3. Setup `.env` file for the frontend:

```
VITE_API_BASE_URL = "your_string"
```

## Usage

**BACKEND**:

On root directory _(`~/Desktop/project-users`)_ run the server: `npm run dev`

```
  Server listen on port 5000...
  Connected to MongoDB Atlas!
```

**FRONTEND**:

In another terminal change to the frontend directory: `cd frontend/`

And run the server: `npm run dev`

```
VITE v6.0.7  ready in 791 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

## API Endpoints

Use Postman or Thunder Client VS Code Extension

| Methods | Endpoints      | Actions               |
| ------- | -------------- | --------------------- |
| GET     | /api/users     | Get all users         |
| GET     | /api/users/:id | Get user by `id`      |
| POST    | /api/users     | Add a new user        |
| PUT     | /api/users/:id | Update a user by `id` |
| DELETE  | /api/users/:id | Remove a user by `id` |
