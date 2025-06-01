# 📦 CRUD with Node.js, Fastify, and PostgreSQL

This project is a simple **CRUD API** built with **Node.js** using the **Fastify** framework and a **PostgreSQL** database hosted on **[Neon](https://neon.tech/)** (a free serverless database service).

## 🚀 Technologies Used

- **Node.js** (latest version)  
- **Fastify** – A fast and low-overhead web framework  
- **PostgreSQL** – Open-source relational database  
- **Neon Database** – Free serverless PostgreSQL hosting  
- **dotenv** – For managing environment variables  
- **VSCode REST Client** – For testing API routes directly from `.http` files  

---

**Install dependencies:**

   ```bash
   npm install fastify
   npm install @neondatabase/serverless
   npm install postgress
   npm install dotenv -D
   ```

## 🧪 Testing the API

You can use the **REST Client extension** in VSCode to test the API routes.  
Just open the `routes.http` file and click **"Send Request"** above each block.

---

## 🗃️ Database

- The database is hosted on **Neon**, a free and serverless PostgreSQL platform.
- To set it up:
  1. Visit [https://neon.tech](https://neon.tech)
  2. Sign up for a free account (no credit card required)
  3. Create a new project
  4. Copy your connection string and paste it into your `.env` file under `DATABASE_URL`

---