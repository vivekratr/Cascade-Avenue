/** @type {import('tailwindcss').Config} */
module.exports = {
  "content": [
      "./src/**/*.{js,jsx,ts,tsx}"
  ],
  "theme": {
      "extend": {
          "colors": {
              "yellow-600": "#9f580a"
          },
          "spacing": {}
      },
      "fontSize": {
          "inherit": "inherit"
      }
  },
  "corePlugins": {
      "preflight": false
  }
}