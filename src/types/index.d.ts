import { User } from "@prisma/client"; // Assuming you're using Prisma

declare module "express-serve-static-core" {
  interface Request {
    user?: User; // Add the user property with User type
  }
}
