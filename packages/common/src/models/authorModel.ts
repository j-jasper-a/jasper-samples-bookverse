import { z } from "zod";

const AuthorSchema = z.object({
  name: z.string(),
});

type AuthorType = z.infer<typeof AuthorSchema>;

export { AuthorSchema, AuthorType };
