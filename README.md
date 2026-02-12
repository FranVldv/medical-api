# 🏥 MediConnect API | Hospital Management System

A robust RESTful API built with **NestJS** and **TypeScript** for managing patient records and medical scheduling.

![Swagger UI Preview](assets/swagger-preview.png)

---

## 📖 About the Project

**MediConnect API** is a backend service designed to handle the core logic of a hospital admission system.

It provides:

- Patient Registration & Lookup  
- Medical History Management  
- Appointment Scheduling (Planned)

The project follows a modular architecture using the NestJS Module Pattern.

---

## 🛠️ Tech Stack

- **Framework:** NestJS  
- **Language:** TypeScript  
- **Documentation:** Swagger / OpenAPI  
- **Architecture:** Modular (Controller–Service pattern)  
- **Runtime:** Node.js  

---

## ✨ Key Features

- Modular feature structure (`PatientModule`)
- In-memory data storage (no database required)
- Integrated Swagger documentation
- DTO validation with pipes

---

## 🚀 Getting Started

You only need **Node.js** installed.

### 1️⃣ Clone the repository

```bash
git clone https://github.com/FranVldv/medical-api.git
cd medical-api
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the server

```bash
npm run start:dev
```

The server will start at:

```
http://localhost:3000
```

---

## 📚 API Documentation

After starting the server, open:

```
http://localhost:3000/api
```

This will open the interactive Swagger UI.

---

## 📌 Available Endpoints

| Method | Endpoint          | Description                              |
|--------|------------------|------------------------------------------|
| GET    | `/patients`      | Retrieve all registered patients         |
| POST   | `/patients`      | Register a new patient (JSON body)       |
| GET    | `/patients/:dni` | Retrieve a patient by National ID (DNI)  |

---

## 📂 Project Structure

```plaintext
src/
├── app.module.ts
├── main.ts
└── patient/
    ├── patient.controller.ts
    ├── patient.service.ts
    ├── patient.entity.ts
    └── patient.module.ts
```

---

## 🔜 Future Roadmap

- [ ] PostgreSQL integration with TypeORM  
- [ ] JWT authentication  
- [ ] Docker containerization  
- [ ] Unit testing with Jest  
