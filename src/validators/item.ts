import { z } from "zod";
import { UserSchema } from "./user";
import { BidSchema } from "./bid";

// Define the Item schema without circular references
export const BaseItemSchema = z.object({
  id: z.number().int().positive(),
  name: z.string(),
  description: z.string(),
  starting_price: z.number().nonnegative(),
  current_price: z.number().nonnegative().default(0),
  image_url: z.string().url().optional(),
  end_time: z.date(),
  created_at: z.date(),
  userId: z.number().int().positive(),
});

// Export the Item schema with circular references
export const ItemSchema: z.ZodSchema = BaseItemSchema.extend({
  user: z.lazy(() => UserSchema),
  bids: z.array(z.lazy(() => BidSchema)),
});

// Export the Item type
export type Item = z.infer<typeof ItemSchema>;
