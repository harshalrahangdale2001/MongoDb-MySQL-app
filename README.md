# MEAN/MERN Stack Application

This is a simple CRUD application built using the MEAN/MERN stack with MySQL integration for user management and MongoDB for product and order management.

## Sections
1. MEAN/MERN Stack Application
2. MySQL Integration
3. API Development
4. API Integration

## Setup Instructions

### Prerequisites
- Node.js
- MongoDB
- MySQL
- Angular CLI (for MEAN stack)
- Git

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/your-repo.git
    cd your-repo/backend
    ```

2. Install backend dependencies:
    ```bash
    npm install
    ```

3. Setup MongoDB:
    - Make sure MongoDB is running on your machine.
    - Create a database named `your_mongo_db`.

4. Setup MySQL:
    - Make sure MySQL is running on your machine.
    - Create a database named `your_mysql_db`.
    - Create a `Users` table with fields: `id` (Auto-generated identifier), `username` (String), `password` (String).

5. Configure environment variables:
    Create a `.env` file in the `backend` directory and add the following:
    ```env
    MONGO_URI=mongodb://localhost:27017/your_mongo_db
    MYSQL_HOST=localhost
    MYSQL_USER=your_mysql_user
    MYSQL_PASSWORD=your_mysql_password
    MYSQL_DATABASE=your_mysql_db
    JWT_SECRET=your_jwt_secret
    ```

6. Start the backend server:
    ```bash
    npm start
    ```
    The server will run on `http://localhost:5000`.

### Frontend Setup

1. Navigate to the frontend directory:
    ```bash
    cd ../frontend
    ```

2. Install frontend dependencies:
    ```bash
    npm install
    ```

3. Start the Angular development server:
    ```bash
    ng serve
    ```
    The Angular application will run on `http://localhost:4200`.

### API Endpoints

#### Users
- `POST /api/users/register`: Register a new user.
- `POST /api/users/login`: Login a user.

#### Products
- `GET /api/products`: Get all products.
- `POST /api/products`: Create a new product.
- `GET /api/products/:id`: Get a product by ID.
- `PUT /api/products/:id`: Update a product by ID.
- `DELETE /api/products/:id`: Delete a product by ID.

#### Orders
- `POST /api/orders`: Create a new order.
- `GET /api/orders/:id`: Get an order by ID.
- `PUT /api/orders/:id`: Update an order by ID.
- `DELETE /api/orders/:id`: Delete an order by ID.

### Testing

To run tests, navigate to the backend or frontend directory and use the following commands:

#### Backend Tests
1. Install testing dependencies:
    ```bash
    npm install --save-dev jest supertest
    ```

2. Create a `jest.config.js` file:
    ```javascript
    module.exports = {
      testEnvironment: 'node',
    };
    ```

3. Write unit tests in the `tests` folder.

4. Run the tests:
    ```bash
    npm test
    ```

#### Frontend Tests
1. Run the tests:
    ```bash
    ng test
    ```

## Conclusion

You have now set up a MEAN/MERN stack application with MySQL integration for user management and MongoDB for product and order management. The application includes CRUD operations and integrates a third-party API. For further enhancements and customizations, refer to the Angular, Node.js, MongoDB, and MySQL documentation.
