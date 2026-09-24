import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const link = z.object({ label: z.string(), href: z.string() });
const image = z.object({ src: z.string(), alt: z.string(), caption: z.string().optional(), paper: z.boolean().default(false) });

/**
 * Case studies. Every project answers: problem → data → intelligence → technology → outcome.
 * Fields marked optional may hold "TODO — Nuno: ..." strings; those render as visible TODO markers.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    subtitle: z.string(),
    organisation: z.string(),
    role: z.string(),
    years: z.string(),
    summary: z.string(), // one sentence, shown on cards
    theme: z.enum(['forecast', 'platform', 'earth-observation', 'operations', 'ai', 'science']),
    location: z.object({ name: z.string(), lat: z.number(), lon: z.number() }),
    scale: z.enum(['site', 'landscape', 'region', 'country', 'continent', 'global']),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    challenge: z.string(),
    data: z.array(z.string()),
    intelligence: z.array(z.string()),
    technology: z.array(z.string()),
    outcome: z.array(z.string()),
    cover: image.optional(),
    gallery: z.array(image).default([]),
    links: z.array(link).default([]),
    publications: z.array(z.string()).default([]), // ids from the publications collection
    featured: z.boolean().default(true),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    journal: z.string(),
    year: z.number(),
    doi: z.string().optional(),
    href: z.string().optional(),
    status: z.enum(['published', 'in review']).default('published'),
    role: z.enum(['lead author', 'co-author', 'thesis']),
    topic: z.string(),
    contribution: z.string(),
    context: z.string().optional(),
    question: z.string().optional(),
    method: z.string().optional(),
    impact: z.string().optional(),
    image: image.optional(),
    tool: link.optional(), // Research → Project → Interactive tool
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects, publications };
