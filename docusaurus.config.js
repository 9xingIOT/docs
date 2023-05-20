// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "九星文档",
  tagline: "九星系列说明文档",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://www.9xing.cn",
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
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
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
  plugins: ["@docusaurus/theme-live-codeblock"],

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
      algolia:{
        appId: '9NTFS7GTDJ',
        apiKey: '47a1351a22a8b157c131ae2ec9406347',
        indexName: 'prod_docs',
      }
    }),
};

module.exports = config;
