import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Адаптивный помощник чата поддержки',
  url: 'https://DaniilSilkin.github.io',
  baseUrl: '/Documentation/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'DaniilSilkin',
  projectName: 'Documentation',
  trailingSlash: false,

  // Включение Mermaid
  markdown: {
    mermaid: true,
  },
  
  // Подключение темы Mermaid
  themes: ['@docusaurus/theme-mermaid'],

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/docs',
          editUrl: 'https://github.com/DaniilSilkin/Documentation/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    
    // Настройка темы Mermaid
    mermaid: {
      theme: { light: 'neutral', dark: 'dark' },
      options: {
        flowchart: {
          useMaxWidth: true,
          htmlLabels: true,
        },
      },
    },
    
    navbar: {
      title: 'Адаптивный помощник',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Документация',
        },
        {
          href: 'https://github.com/DaniilSilkin/Documentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Документация',
          items: [
            {
              label: 'Введение',
              to: '/docs/intro',
            },
            {
              label: 'Функциональные требования',
              to: '/docs/functional-requirements',
            },
            {
              label: 'Нефункциональные требования',
              to: '/docs/non-functional-requirements',
            },
          ],
        },
        {
          title: 'Ресурсы',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/DaniilSilkin/Documentation',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Адаптивный помощник. Сделано с Docusaurus.`,
    },
    
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;