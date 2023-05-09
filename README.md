# Handoff > Tailwind Demo Project

This project is a prototype to experiment with using Handoff (handoff.com) to
generate a Tailwind config file containing the style tokens. This project is
a work in progress as we work out the best way to compile a tailwind token file.

The artifact publishes `/exported/tailwind-tokens/tailwind.config.js`. This project
uses the `/integration/plugin.js` to hook into the figma pipeline and transform
the data stream into a tailwinds format.

This project also includes the tailwindcss, style-loader, and postcss-loader npm
packages in order to build previews of components using the tailwind file. The
plugin.js file provides customization to the webpack build to compile the tailwind
css bundle.

This project publishes to tailwinds.handoff.com on commit or on manual
execution.

This project is currently hooked up to 
https://www.figma.com/file/HC3BkyW71SsxV7Md433WbO/Unicorn-Starter

## Help
For more information or if you get stuck, contact brad@convertiv.com

## Requirements
- Node 16+/NVM 8
- Figma developer token to at least read a project

## Quick Start
- Clone this project
- Copy the .env.example and customize it
  - Get the `FIGMA_PROJECT_ID` from the url of a figma file
  - Get the `DEV_ACCESS_TOKEN` using these steps
- Run `npm install`
- Run `npm run fetch` to pull the latest from your figma file
- Run `npm run start` to boot the GUI locally and give it spin.
