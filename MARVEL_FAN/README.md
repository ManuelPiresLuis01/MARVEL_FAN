# MARVEL FAN API

This is the backend API for the **Marvel Fan** application, built with **Node.js** and **Express**.  
It handles user registration, login, account activation, password recovery, and JWT-based authentication.

---

## 📦 Technologies Used

- Node.js
- Express
- MySQL
- JWT (JSON Web Tokens)
- Nodemailer
- dotenv

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/marvel-fan-api.git
cd marvel-fan-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and fill in the following variables:

```env
API_PORT=3000

# Email (Gmail) config
MY_EMAIL=your-email@gmail.com
APP_PASSWORD=your-app-password

SALT_ROUND=10
JWT_SECRET=your_jwt_secret

# Database config
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_db_password
DB_NAME=MARVEL_DB
```

Or use the `.env.example` as reference.

### 4. Start the Server

```bash
npm run dev
```

---

## 📡 API Endpoints

### 🔐 Authentication & Account Management

#### Register a New User

**POST** `/auth/registration`

**Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "gender": "male",
  "country": "USA",
  "city": "New York",
  "birth_date": "2000-01-01",
  "phone_number": "123456789"
}
```

---

#### Activate Account

**PUT** `/auth/activateAccount`

**Body:**

```json
{
  "email": "john@example.com",
  "code": "123456"
}
```

---

#### Resend Activation Code

**PUT** `/auth/resendCode`

**Body:**

```json
{
  "email": "john@example.com"
}
```

---

#### Send Recovery Code

**PUT** `/auth/recoveryAccount`

**Body:**

```json
{
  "email": "john@example.com"
}
```

---

#### Reset Password

**PUT** `/auth/resetPassword`

**Body:**

```json
{
  "email": "john@example.com",
  "code": "654321",
  "newPassword": "newPassword123"
}
```

---

#### Login

**POST** `/auth/login`

**Body:**

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "token": "JWT_TOKEN_HERE",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

---

## 🗂️ Project Structure

```
MARVEL_FAN
├── src
│   ├── controllers
│   │   ├── authController.js
│   │   └── userController.js
│   ├── routes
│   │   └── index.js
│   ├── services
│   │   └── sendEmailService.js
│   ├── utils
│   │   └── authUserEmail.js
│   └── server.js
├── .env.example
├── package.json
└── tsconfig.json
```

---

## 📬 Contact

Created by **Manuel Pires Luís**.  
Feel free to reach out if you have any questions!