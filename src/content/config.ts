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
const accomplishments = defineCollection({
  type: 'content',
  schema: ({image}) => z.object({
    line1: z.string()
    ,astroImportName: z.string().optional()
    ,title: z.string().optional()
    ,exam: z.string().optional()
    ,issuer: z.string().optional()
    ,badge: image().optional()
    ,alt: z.string().optional()
    ,date: z.string().optional()
    ,expires: z.string().optional()
    ,credentialid: z.string().optional()
    })
});

const whbonusCollection = defineCollection({
  type: 'content',
  schema: z.object({
    whid: z.string().optional()
    })
});

const summaryCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.number().optional()
    ,section: z.string().optional()
    ,dir: z.string().optional()
  })
});
const svgCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.number().optional()
    ,class: z.string().optional()
    ,inline_style: z.string().optional()
    ,name: z.string().optional()
    ,width: z.number().optional()
    ,height: z.number().optional()
    ,viewBox: z.string().optional()
    ,d: z.string().optional()
  })
});

const techStackCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.number().optional()
    ,heading: z.string().nullable()
    ,dir: z.string().nullable()
  }).nullable()
});

const socialsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.number().optional()
    ,content_dir: z.string().optional()
    ,title: z.string().optional()
    ,handle: z.string().optional()
    ,href: z.string().url().optional()
    ,logo_href: z.string().url().optional()
    ,logo_img_type: z.string().optional()
    ,logo_src: z.string().optional()
    ,logo_id: z.string().optional()
    ,logo_class: z.string().optional()
    ,logo_target: z.string().optional()
    ,logo_aria_label: z.string().optional()
    ,link_href: z.string().url().optional()
    ,link_path: z.string().optional()
    ,link_text: z.string().optional()
    ,link_src: z.string().optional()
    ,link_id: z.string().optional()
    ,link_class: z.string().optional()
    ,link_aria_label: z.string().optional()
    ,link_target: z.string().optional()
    ,type: z.string().optional()
    ,svg: reference('svg')
  })
});

const workhistoryCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
     id: z.number().optional()
     ,wh_desc: z.string().optional()
     ,content_dir: z.string().optional()
    ,title: z.string()
    ,wh_smry: z.string()
    ,whbonus: reference('whbonus').optional()
    ,start_dt: z.string().optional()
    ,end_dt: z.string().optional()
    // ,co_logo_src: z.string().optional()
    ,co_logo_src: image()
    ,wh_logo_only: z.boolean().default(false).nullable()
    ,wh_logo_width: z.number().optional().nullable()
    ,wh_logo_height: z.number().optional().nullable()
    ,wh_logo_scale: z.number().optional().nullable()
    ,co_logo_id: z.string().optional()
    ,co_logo_class: z.string().optional()
    ,co_logo_alt: z.string().optional()
    ,co_href: z.string().url().optional()
    ,co_aria_label: z.string().optional()
    ,co_name: z.string().optional()
    ,wh_image_id: z.string().optional()
    })
});

export const collections = {
  'education': genericCollection
  ,'accomplishments': accomplishments
  ,'whbonus': whbonusCollection
  ,'workhistory': workhistoryCollection
  ,'socials': socialsCollection
  ,'summary': summaryCollection
  ,'svg': svgCollection
  ,'techstack': techStackCollection
};