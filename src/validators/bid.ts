import { z } from "zod";
import { ItemSchema } from "./item";
import { UserSchema } from "./user";

// Define the Bid schema without circular references
export const BaseBidSchema = z.object({
  id: z.number().int().positive(),
  itemId: z.number().int().positive(),
  userId: z.number().int().positive(),
  bid_amount: z.number().nonnegative(),
  created_at: z.date(),
});

// Export the Bid schema with circular references
export const BidSchema: z.ZodSchema<any> = BaseBidSchema.extend({
  item: z.lazy(() => ItemSchema),
  user: z.lazy(() => UserSchema),
});

// Export the Bid type
export type Bid = z.infer<typeof BidSchema>;
