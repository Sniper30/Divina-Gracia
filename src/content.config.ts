import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";
const menu = defineCollection({
    loader: glob({ pattern: "**/*.json", base: "./src/data" }),
    schema: z.array(
        z.object({
        id:z.number(),
        source: z.string(),
        title: z.string(),
        description: z.string(),
        type:z.string()
    })),
});

export const collections = { menu };
