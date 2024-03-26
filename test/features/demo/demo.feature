Feature: Opening Demo URL in Browser

    @demo
    Scenario Outline:  Opening Demo URL in Browser
        Given Google Page is open
        When Search with <SearchItem>
        Then Click on the first search result
        Then Url should match <ExpectedUrl>

        Examples:
            | Test ID | SearchItem | ExpectedUrl           |
            | TC_001  | WDIO       | https://webdriver.io/ |
