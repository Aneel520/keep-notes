
This is all Information about the All APIs


Authentication APIs

Register User
Endpoint: POST http://localhost:5000/api/auth/register
Request Body:json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
Response:json
{
  "token": "your_jwt_token"
}


Login User
Endpoint: POST http://localhost:5000/api/auth/login
Request Body:json
{
  "email": "john@example.com",
  "password": "password123"
}
Response:json
{
  "token": "your_jwt_token"
}


Notes APIs
Create a New Note

Endpoint: POST http://localhost:5000/api/notes
Request Headers:json
{
  "x-auth-token": "your_jwt_token"
}
Request Body:json
{
  "title": "My First Note",
  "content": "This is the content of the note.",
  "tags": ["tag1", "tag2"],
  "backgroundColor": "#ffeb3b",
  "reminder": "2024-07-20T10:00:00Z"
}
Response:json
{
  "_id": "60c72b1f4f1a5c12d4f8e5b7",
  "user": "60c72b1e4f1a5c12d4f8e5b6",
  "title": "My First Note",
  "content": "This is the content of the note.",
  "tags": ["tag1", "tag2"],
  "backgroundColor": "#ffeb3b",
  "isArchived": false,
  "isTrash": false,
  "reminder": "2024-07-20T10:00:00Z",
  "createdAt": "2024-07-18T08:53:00.000Z",
  "updatedAt": "2024-07-18T08:53:00.000Z",
  "__v": 0
}


Get All Notes
Endpoint: GET http://localhost:5000/api/notes
Request Headers:json
{
  "x-auth-token": "your_jwt_token"
}
Response:json
[
  {
    "_id": "60c72b1f4f1a5c12d4f8e5b7",
    "user": "60c72b1e4f1a5c12d4f8e5b6",
    "title": "My First Note",
    "content": "This is the content of the note.",
    "tags": ["tag1", "tag2"],
    "backgroundColor": "#ffeb3b",
    "isArchived": false,
    "isTrash": false,
    "reminder": "2024-07-20T10:00:00Z",
    "createdAt": "2024-07-18T08:53:00.000Z",
    "updatedAt": "2024-07-18T08:53:00.000Z",
    "__v": 0
  }
]


Get a Single Note by ID
Endpoint: GET http://localhost:5000/api/notes/:id
Request Headers:json
{
  "x-auth-token": "your_jwt_token"
}
Response:json
{
  "_id": "60c72b1f4f1a5c12d4f8e5b7",
  "user": "60c72b1e4f1a5c12d4f8e5b6",
  "title": "My First Note",
  "content": "This is the content of the note.",
  "tags": ["tag1", "tag2"],
  "backgroundColor": "#ffeb3b",
  "isArchived": false,
  "isTrash": false,
  "reminder": "2024-07-20T10:00:00Z",
  "createdAt": "2024-07-18T08:53:00.000Z",
  "updatedAt": "2024-07-18T08:53:00.000Z",
  "__v": 0
}


Update a Note
Endpoint: PUT http://localhost:5000/api/notes/:id
Request Headers:json
{
  "x-auth-token": "your_jwt_token"
}
Request Body:json
{
  "title": "Updated Note Title",
  "content": "Updated content of the note.",
  "tags": ["tag3", "tag4"],
  "backgroundColor": "#ff5722",
  "isArchived": false,
  "isTrash": false,
  "reminder": "2024-08-01T10:00:00Z"
}
Response:json
{
  "_id": "60c72b1f4f1a5c12d4f8e5b7",
  "user": "60c72b1e4f1a5c12d4f8e5b6",
  "title": "Updated Note Title",
  "content": "Updated content of the note.",
  "tags": ["tag3", "tag4"],
  "backgroundColor": "#ff5722",
  "isArchived": false,
  "isTrash": false,
  "reminder": "2024-08-01T10:00:00Z",
  "createdAt": "2024-07-18T08:53:00.000Z",
  "updatedAt": "2024-07-18T09:00:00.000Z",
  "__v": 0
}


Delete a Note
Endpoint: DELETE http://localhost:5000/api/notes/:id
Request Headers:json
{
  "x-auth-token": "your_jwt_token"
}
Response:json
{
  "msg": "Note removed"
}
