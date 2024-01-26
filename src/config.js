module.exports = {
  siteTitle: 'Dhruv Singhal',
  siteDescription:
    'Dhruv is a Software Developer, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Dhruv Singhal, Dhruvsinghal027, Software Developer, Web Developer, Quant Enthusiast, javascript, Leetcode, Next., HPAIR',
  siteUrl: 'https://roopshreeudaiwal.netlify.app/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Dhruv Singhal',
  location: 'Kurukshetra, India',
  email: 'dhruvsinghal1973@gmail.com',
  github: 'https://github.com/dhruvsinghal7494',
  twitterHandle: '@DhruvSinghal6281541',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/dhruvsinghal7494',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/dhruv-singhal9/',
    },
    {
      name: 'Leetcode',
      url: 'https://leetcode.com/dhruvsinghal1973/',
    },
    {
      name: 'Twitter',
      url: 'https://www.reddit.com/user/Turbulent_Walrus_885',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
