const reporter = require('cucumber-html-reporter')

const options = {
  reportSuiteAsScenario: true,
  scenarioTimestamp: true,
  launchReport: true,
  theme: 'bootstrap',
  jsonFile: 'cucumber_report.json',
  output: 'reports/cucumber_report.html',
  metadata: {
    'App Version': '0.0.1',
    'Test Environment': 'DEV',
    Browser: 'Chrome',
    Platform: 'MAC OS',
  },
}

reporter.generate(options)