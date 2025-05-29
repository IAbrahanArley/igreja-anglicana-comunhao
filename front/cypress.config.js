const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    // onde estão suas features
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: "http://localhost:8080",
    async setupNodeEvents(on, config) {
      // registra o plugin de Cucumber
      await addCucumberPreprocessorPlugin(on, config, {
        // aqui diz onde estão os seus files de steps
        stepDefinitions: "cypress/support/step_definitions/**/*.js",
      });

      // registra o bundler
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});
