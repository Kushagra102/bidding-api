import { z } from "zod";
import { ItemSchema } from "./item";
import { BidSchema } from "./bid";
import { NotificationSchema } from "./notification";

// Define the Role schema and type
export const RoleSchema = z.enum(["USER", "ADMIN"]);
export type Role = z.infer<typeof RoleSchema>;

// Define the User schema without circular references
export const BaseUserSchema = z.object({
  username: z.string(),
  password: z.string(),
  email: z.string().email(),
  role: z.enum(["USER", "ADMIN"]).default("USER"),
});

export const LoginUserSchema = BaseUserSchema.pick({
  username: true,
  password: true,
});

// Export the User schema without circular references
export const UserSchema: z.ZodSchema = BaseUserSchema.extend({
  items: z.array(z.lazy(() => ItemSchema)),
  bids: z.array(z.lazy(() => BidSchema)),
  notifications: z.array(z.lazy(() => NotificationSchema)),
});

// Export the User type
export type User = z.infer<typeof UserSchema>;
