/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
    plugins: [
        require('flowbite/plugin')
    ],
  "content": [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
      "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
      "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  "theme": {
      "extend": {
        screens: {
            'xs': '375px',  // Custom screen size for smaller than 'sm'
          },
          "colors": {
              "yellow-600": "#9f580a",
              "yellow-400": "#e3a008",
              "yellow-700": "#8e4b10",
              "darkkhaki": "#ab995a"
          },
          "fontFamily": {
            "dm-serif-display": "DynaPuff",

            }
      },
      "fontSize": {
          "inherit": "inherit"
      },
      
  },
  "corePlugins": {
      "preflight": false
  }
});


