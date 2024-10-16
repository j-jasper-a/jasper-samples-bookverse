import { z } from "zod";
const AuthorSchema = z.object({
    name: z.string(),
});
export { AuthorSchema };
