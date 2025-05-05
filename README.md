<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Products Microservice

A robust microservice built with NestJS that handles product management operations using TCP as the transport protocol. This service implements a complete CRUD (Create, Read, Update, Delete) system for products, utilizing Prisma ORM with SQLite as the database.

## 🚀 Features

- Complete CRUD operations for products
- TCP-based communication
- Prisma ORM integration
- SQLite database
- TypeScript support
- NestJS framework

## 🛠️ Installation and Setup

1. Clone the repository

```bash
git clone [your-repository-url]
cd products-ms
```

2. Install dependencies

```bash
npm install
```

3. Environment Configuration

```bash
# Copy the environment template
cp .env.template .env
# Edit .env with your configuration
```

4. Database Setup

```bash
# Create and apply database migrations
npx prisma migrate dev --name init
```

5. Start the application

```bash
# Development mode
npm run start:dev

# Production mode
npm run start:prod
```

## 📁 Project Structure

```
src/
├── main.ts              # Application entry point
├── app.module.ts        # Root module
├── products/           # Products module
│   ├── products.controller.ts
│   ├── products.service.ts
│   └── products.module.ts
└── prisma/            # Database configuration
    └── schema.prisma
```

## 🔧 Technologies Used

- [NestJS](https://nestjs.com/) - A progressive Node.js framework
- [Prisma](https://www.prisma.io/) - Next-generation ORM
- [SQLite](https://www.sqlite.org/) - Lightweight database
- [TypeScript](https://www.typescriptlang.org/) - Programming language

## 📝 API Documentation

The microservice exposes the following TCP endpoints:

- `createProduct` - Create a new product
- `findAllProducts` - Retrieve all products
- `findOneProduct` - Get a specific product by ID
- `updateProduct` - Update a product
- `removeProduct` - Delete a product

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](your-issues-page-url).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
