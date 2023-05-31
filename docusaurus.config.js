// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "九星文档",
  tagline: "九星系列说明文档",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.9xing.cn",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // 国际化支持，默认为简体中文。
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["en", "zh-Hans"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: ["@docusaurus/theme-live-codeblock", ["drawio", {}]],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "九星文档",
        logo: {
          alt: "九星文档",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "cloudSidebar",
            position: "left",
            label: "云平台文档",
          },
          {
            type: "docSidebar",
            sidebarId: "manualSidebar",
            position: "left",
            label: "产品手册",
          },
          { to: "/blog", label: "平台消息", position: "left" },
          {
            href: "https://www.9xing.cn",
            label: "官网",
            position: "right",
          },
          {
            href: "https://cloud.9xing.cn",
            label: "九星云",
            position: "right",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 九星物联网`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      liveCodeBlock: {
        /**
         * The position of the live playground, above or under the editor
         * Possible values: "top" | "bottom"
         */
        playgroundPosition: "bottom",
      },
      algolia: {
        appId: "LNQZPXEE51",
        apiKey: "3cae79b49ee7d38a371207ab46ea8112",
        siteId: '6de315bc-a9fc-4b66-b0cd-d04ae1b6a461',
        branch: 'master',
        selector: 'div#search',
        indexName: "prod",
        startUrls: ['https://docs.9xing.cn/'],
        sitemaps: ['https://docs.9xing.cn/sitemap.xml'],
        ignoreCanonicalTo: true,
        discoveryPatterns: ['https://docs.9xing.cn/**'],
        contextualSearch: true,
        searchParameters: {},
      },
      mermaid: {
        theme: { light: "forest", dark: "forest" },
      },
    }),
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
};

module.exports = config;
