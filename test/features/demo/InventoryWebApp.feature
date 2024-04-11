Feature: Inventory

    # @demo
    Scenario Outline: Demo Inventory
        Given Login to inventory web app
        # Then Inventory page should list <NumberOfProducts>
        # Then Validate all products have valid price

        Examples:
            | TESTID    | NumberOfProducts | Header 3 |
            | Web_TC002 | 6                | Value 3  |