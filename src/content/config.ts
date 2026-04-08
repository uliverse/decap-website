import { defineCollection, z } from 'astro:content';

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    endDate: z.string().optional(),
    location: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    address: z.string().optional(),
  }),
});

export const collections = { events, pages };
