/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '640px',
      // => media (min-width: 640px) {...}

      md: '768px',
      // => media (min-width: 768px) {...}

      lg: '1024px',
      // => media (min-width: 1024px) {...}

      xl: '1280px',
      // => media (min-width: 1280px) {...}

      '2xl': '1535px',
      // => media (min-width: 1535px) {...}
    },
    extend : {
      
    }
  },
  plugins: [
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
      const isFirefoxRule = postcss.atRule({
        name: '-moz-document',
        params: 'url-prefix()',
      });
      isFirefoxRule.append(container.nodes);
      container.append(isFirefoxRule);
      isFirefoxRule.walkRules((rule) => {
        rule.selector = `.${e(
        `firefox${separator}${rule.selector.slice(1)}`
        )}`;
      });
      });
    }),

  ],
}
