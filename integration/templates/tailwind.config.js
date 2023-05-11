const path = require("path");
const plugin = require('tailwindcss/plugin')
const tokens = require("../../../../../exported/tailwind-tokens/theme.js");
const components = require("../../../../../exported/tailwind-tokens/components.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./.handoff-app/integrations/tailwind/3.3/**/*.{html,js}"],
  blocklist: [],
  theme: { ...tokens.theme },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents(components);
    }),
  ],
};
