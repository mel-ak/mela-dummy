# mela-dummy

A simple NestJS project designed to demonstrate basic API functionality:

## Features

- **GET /user**: Retrieve a list of dummy users.
- **POST /user**: Add a new user by providing their name and email.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [NestJS CLI](https://docs.nestjs.com/) (optional, for development purposes).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/<your-username>/mela-dummy.git
   cd mela-dummy
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the application:

   ```bash
   npm run start
   ```

4. Access the API at `http://localhost:3000/user`.

## API Endpoints

### GET /user

Returns a list of dummy users in JSON format.

**Response:**

```json
[
  { "id": 1, "name": "John Doe", "email": "john@example.com" },
  { "id": 2, "name": "Jane Smith", "email": "jane@example.com" }
]
```

### POST /user

Adds a new user to the list.

**Request Body:**

```json
{ "name": "Alice", "email": "alice@example.com" }
```

**Response:**

```json
{ "id": 3, "name": "Alice", "email": "alice@example.com" }
```

## Example Usage

### Using `curl`

#### GET /user

```bash
curl http://localhost:3000/user
```

#### POST /user

```bash
curl -X POST http://localhost:3000/user \
-H "Content-Type: application/json" \
-d '{"name": "Alice", "email": "alice@example.com"}'
```

## Contributing

Feel free to fork this repository and submit pull requests to enhance the project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Happy coding!
