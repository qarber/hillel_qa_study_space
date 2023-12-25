const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://qauto.forstudy.space/',
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}'
  },
});
