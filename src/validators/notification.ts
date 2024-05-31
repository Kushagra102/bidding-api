import { z } from "zod";
import { UserSchema } from "./user";

// Define the Notification schema without circular references
export const BaseNotificationSchema = z.object({
  id: z.number().int().positive(),
  userId: z.number().int().positive(),
  message: z.string(),
  is_read: z.boolean().default(false),
  created_at: z.date(),
});

// Export the Notification schema with circular references
export const NotificationSchema: z.ZodSchema<any> =
  BaseNotificationSchema.extend({
    user: z.lazy(() => UserSchema),
  });

// Export the Notification type
export type Notification = z.infer<typeof NotificationSchema>;
