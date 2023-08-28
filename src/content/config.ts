// 1. Import your utilities and schemas
import { defineCollection, z, reference } from 'astro:content';
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

const whbonusCollection = defineCollection({
  type: 'content',
  schema: z.object({
    whid: z.string()
    })
});


const workhistoryCollection = defineCollection({
  type: 'content',
  schema: z.object({
     whid: z.string()
    ,title: z.string()
    ,wh_smry: z.string()
    ,whbonus: reference('whbonus').optional()
    ,start_dt: z.string().optional()
    ,end_dt: z.string().optional()
    ,co_logo_src: z.string().optional()
    ,co_logo_id: z.string().optional()
    ,co_logo_class: z.string().optional()
    ,co_href: z.string().url().optional()
    ,co_aria_label: z.string().optional()
    ,co_name: z.string().optional()
    // ,whbonus: z.array(reference('whbonus'))
    })
});

export const collections = {
  'education': genericCollection
  ,'accomplishments': genericCollection
  ,'whbonus': whbonusCollection
  ,'workhistory': workhistoryCollection
};