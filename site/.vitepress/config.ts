import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Agent Feishu Channel',
  description: 'Bridge Claude Code or Codex to Feishu group chat',
  base: '/agent-feishu-channel/',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/agent-feishu-channel/favicon.svg' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Agent Feishu Channel' }],
    ['meta', { property: 'og:description', content: 'Bridge Claude Code or Codex to Feishu group chat' }],
    ['meta', { property: 'og:image', content: 'https://blackman99.github.io/agent-feishu-channel/og-en.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Agent Feishu Channel' }],
    ['meta', { name: 'twitter:description', content: 'Bridge Claude Code or Codex to Feishu group chat' }],
    ['meta', { name: 'twitter:image', content: 'https://blackman99.github.io/agent-feishu-channel/og-en.png' }],
  ],

  themeConfig: {
    logo: { light: '/logo-light.svg', dark: '/logo.svg' },

    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Comparison', link: '/guide/comparison' },
      { text: 'npm', link: 'https://www.npmjs.com/package/agent-feishu-channel' },
      { text: 'GitHub', link: 'https://github.com/Blackman99/agent-feishu-channel' },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Commands', link: '/guide/commands' },
          { text: 'Configuration', link: '/guide/configuration' },
          { text: 'Architecture', link: '/guide/architecture' },
          { text: 'Comparison', link: '/guide/comparison' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Blackman99/agent-feishu-channel' },
    ],

    footer: {
      message: 'Built with VitePress',
    },
  },
})
