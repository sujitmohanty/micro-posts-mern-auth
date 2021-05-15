## Usage

- Create a .env file in the respective root directories of the project.

- Copy the following lines and specify appropriate values to corresponding lines.

```
PORT = 5000
NODE_ENV = development
MONGO_URI = mongodb+srv://<username>:<password>@mern.apqfp.mongodb.net/<collection-name>?retryWrites=true&
JWT_SECRET =
```

Install dependencies

```bash
npm install
```

### Run App

```bash
npm run server
```

## Postman Routes

Test your routes in PostMan with the following...

### Post Routes

1. Get all posts - GET - http://localhost:5000/api/posts

2. Get a single post - GET - http://localhost:5000/api/posts/:id

3. Add a new post - POST http://localhost:5000/api/posts/new

| Headers      |                  |
| ------------ | ---------------- |
| key          | value            |
| Content-Type | application/json |

Body

```JSON
{
    "title": "Title Two",
    "message": "This is Title Two"
}
```

4. Update a post - PATCH http://localhost:5000/api/posts/:id

| Headers      |                  |
| ------------ | ---------------- |
| key          | value            |
| Content-Type | application/json |

Body

```JSON
{
"message": "This is the message of Title Two"
}
```

5. Delete a post - DELETE http://localhost:5000/api/posts/:id

### Auth Routes

1. Register a new User - POST - http://localhost:5000/api/users/signup

```JSON
{
    "name": "sujit",
    "email": "sujit@mernapp.com",
    "password": "123456"
}
```

2. Login a User - POST - http://localhost:5000/api/users/signin

```JSON
{
    "email": "sujit@mernapp.com",
    "password": "123456"
}
```
