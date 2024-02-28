Feature: Cart Item Counter

    @tag3
    Scenario: Adding a product to the cart should increase the item count by 1 
        Given I am on the home page
        When I click on Dresses
        And I click on a product
        And I select size and color
        And I click the Add to Card button
        And I see a message "Product successfully added to your shopping cart"
        And I click the Proceed to Checkout button
        Then I click on the cart
        