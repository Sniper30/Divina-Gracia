import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";
const images = defineCollection({
    loader: glob({ pattern: "**/*.json", base: "./src/data" }),
    schema: z.array(
        z.object({
        id:z.number(),
        source: z.string(),
        title: z.string(),
        description: z.string()
    })),
});

export const collections = { images };
