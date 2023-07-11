
const path = require("path");
const fs = require('fs');
const plugin = require('tailwindcss/plugin')
const colors = require('./colors');  
const fonts = require('./fonts');  
const components = require('./components');  
module.exports = {
  content: ["./config/integrations/tailwind/3.3/templates/**/*.{html,js}"],
  blocklist: [],
  theme: {
    colors: colors,
    fontSize: fonts.fontSize,
    lineHeight: fonts.lineHeight,
    textColor: fonts.textColor,
    fontFamily: fonts.fontFamily,
    fontWeight: fonts.fontWeight,
    letterSpacing: fonts.letterSpacing
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents(components);
    }),
  ],
};
