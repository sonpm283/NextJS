import { z } from "zod";

const configSchema = z.object({
  NEXT_PUBLIC_API_ENDPOINT: z.string(),
});
