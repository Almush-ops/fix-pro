import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    author: z.string().default('גל לוגסי'),
    category: z.enum(['מיזוג-אוויר', 'אינסטלציה', 'הנדימן', 'טיפים']).default('טיפים'),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
