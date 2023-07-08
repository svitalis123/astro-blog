import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'Vitalis Learner | Blog',
    description: 'My journey learning Astro',
    site: 'https://melodious-cuchufli-1df2ce.netlify.app/',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}