/**
 * Single source of truth for site-wide settings.
 * Change things here — nothing below is hardcoded elsewhere.
 */
export const site = {
  name: 'Nuno Garcia',
  title: 'Nuno Garcia — Geospatial Intelligence & Environmental Data Science',
  description:
    'Geospatial data scientist turning Earth observation, biodiversity models and operational data into decision-ready intelligence. GIS, remote sensing, species distribution models, land-use scenarios, R/Shiny, Google Earth Engine.',
  locale: 'en',
  location: 'Castelo Branco, Portugal',
  timezone: 'Europe/Lisbon',

  /** Availability signal shown in the nav and contact section. Set `show: false` to hide. */
  availability: {
    show: true,
    label: 'Open to selected opportunities',
    // 'open' | 'limited' | 'closed' — only changes the dot colour
    state: 'open' as 'open' | 'limited' | 'closed',
  },

  links: {
    email: 'nunogarcia8@gmail.com',
    github: 'https://github.com/BravoAlpha2',
    linkedin: 'https://www.linkedin.com/in/nuno-garcia-97b780158/',
    researchgate: 'https://www.researchgate.net/profile/Nuno-Garcia-4',
    cv: '/cv/Nuno_Garcia_CV.pdf', // replace the file in public/cv/ to update
    // TODO — Nuno: add ORCID / Google Scholar if you want them shown
    orcid: '',
  },

  /**
   * Privacy-conscious analytics. Provider 'none' loads nothing.
   * Plausible: set domain (e.g. 'bravoalpha2.github.io'). Umami: set websiteId + scriptUrl.
   */
  analytics: {
    provider: 'none' as 'none' | 'plausible' | 'umami',
    plausible: { domain: '', scriptUrl: 'https://plausible.io/js/script.tagged-events.js' },
    umami: { websiteId: '', scriptUrl: 'https://cloud.umami.is/script.js' },
  },

  nav: [
    { label: 'Work', href: '/work' },
    { label: 'Research', href: '/research' },
    { label: 'About', href: '/about' },
  ],

  /** Open Graph image (1200×630). TODO — Nuno: replace with a real one if you like. */
  ogImage: '/images/og.png',
};

export type Site = typeof site;
