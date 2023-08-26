// 1. Import your utilities and schemas
import { defineCollection, z } from 'astro:content';
// import { educationSchema } from '../schemas';
// import { educationSchema } from '../schemas/education';

// 2. Define your collections
const genericCollection = defineCollection({
  type: 'content',
  schema: z.object({
    line1: z.string()
    ,line2: z.string().optional()
    })
});

export const collections = {
  'education': genericCollection
  ,'accomplishments': genericCollection
};