
/**
 * @type {import("../config/siteConfig").UserConfig}
 */
const config = {
  title: "Docs",
  description: "This is my docs with template",
  author: "Company, Inc.",
  authorLogo: "https://example.com/images/logo.png",
  domain: "https://example.com/",
  navLinks: [
    {
      href: "/about",
      name: "About"
    },
    {
      href: "/get-started",
      name: "Get Started"
    },
    {
      href: "/guides",
      name: "Guides"
    },
    {
      href: "/self-hosted",
      name: "Self Hosted"
    },
  ],
  footer: [
    {
      href: "/privacy-policy",
      name: "Privacy Policy"
    },
    {
      href: "/terms-of-use",
      name: "Terms of use"
    },
    {
      href: "/report-security-issues",
      name: "Report Security Issues"
    },
    {
      href: "/trademark",
      name: "Trademark"
    },
    {
      href: "/report-security-issues",
      name: "Cookie Preferences"
    },
  ],
  showSidebar: true,
  theme: {
      default: "dark",
  },
  social: [
    {
      label: "github",
      href: "https://github.com/kevinzepeda/dploy",
    },
  ],
  search: {
    provider: "kbar",
    kbarConfig: {
      defaultActions: [
        {
          id: "about",
          name: "About",
          keywords: "content",
          perform: () => (window.location.pathname = "about"),
        },
      ],
    },
  },
  nextSeo: {
    title: "My Docs site",
    description: "This is a Docs about my product",
    openGraph: {
      images: [
        {
          url: "https://www.example.ie/og-image.jpg" /*image url path*/,
          alt: "",
          width: 1200,
          height: 627,
          type: "image/jpg"
        }
      ]
    },
    twitter: {
      handle: "@example",
      site: "https://yoursite.com",
      cardType: "summary_large_image",
    },
  },
};

export default config;
