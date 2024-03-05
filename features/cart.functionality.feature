Feature: Cart Functionality

    @tag4
    Scenario: User can remove items from the cart 
        Given I am on the home page
        When I click on Dresses
        And I click on a product
        And I select size and color
        And I click the Add to Card button
        And I see a message "Product successfully added to your shopping cart"
        And I click the Proceed to Checkout button
        And I click on the cart
        # REVIEW: "I click" is not a Then step
        Then I click on the trush button
        # REIVEW: Where is validation step?
        