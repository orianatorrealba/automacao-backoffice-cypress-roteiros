const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  video: false,
  record: false,
  defaultCommandTimeout: 10000,
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true,
  e2e: {
    baseUrl: "https://app.fake.asaplog.com.br/",// Define a URL base
    viewportWidth: 1366,
    viewportHeight: 768,
    defaultCommandTimeout: 10000, // Tempo máximo para um comando antes de falhar
    retries: 2, // Número de tentativas antes de falhar
    video: true,
    failOnStatusCode: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
