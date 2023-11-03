/** @type {import('tailwindcss').Config} */
export default {
  "content": [
      "./src/**/*.{js,jsx,ts,tsx}"
  ],
  "theme": {
      "extend": {
        screens: {
            'xs': '375px',  // Custom screen size for smaller than 'sm'
          },
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


