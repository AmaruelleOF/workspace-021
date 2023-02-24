import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>💖 Leftbrained, Inc.</span>,
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  docsRepositoryBase: 'https://github.com/AmaruelleOF/workspace-021',
  footer: {
    text: 'Copyright 2023 @ Leftbrained by Yana Reinn 💖',
  },
  primaryHue: 43,
  faviconGlyph: '💖',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – LFTBR'
    }
  }
}

export default config
