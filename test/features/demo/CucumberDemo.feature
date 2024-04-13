@demo
Feature: Cucumber DEMO
    I can have more info about the feature here....
    I can have more info about the feature here....
    I can have more info about the feature here....
    I can have more info about the feature here....
    I can have more info about the feature here....
    -Questions/Clarification
    -known issues
    -Todo

    Feature Description
    Background:  # This will run before every scenario
        Given Google Page is open

    Scenario: Scenario One
        When Search with WDIO
        Then Click on the first search result
        Then Url should match https://webdriver.io/

    Scenario: Scenario Second
        When Search with WebdriverIO
        Then Click on the first search result
        Then Url should match https://webdriver.io/
