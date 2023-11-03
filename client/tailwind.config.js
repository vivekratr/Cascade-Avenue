/** @type {import('tailwindcss').Config} */
export default {
  "content": [
      "./src/**/*.{js,jsx,ts,tsx}"
  ],
  "theme": {
      "extend": {
          "colors": {
              "yellow-600": "#9f580a"
          },
          "fontFamily": {
            "dm-serif-display": "DynaPuff"
            }
      },
      "fontSize": {
          "inherit": "inherit"
      },
      
  },
  "corePlugins": {
      "preflight": false
  }
}


