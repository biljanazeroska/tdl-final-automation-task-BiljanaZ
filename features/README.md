# TDL Final Automation Task
This project test the website http://www.automationpractice.pl/. 

## Feature 
TC1 When an unregistered user tries to proceed with checkout after ordering some item, the page
should ask to create an account or sign in first, before letting the user finish the order.


TC2 Users should be able to search a product using the search box at the top of the page. For
example, searching for "Blouse" should only find results containing text "Blouse".

TC3 The cart should correctly show the number of items. When a user adds one product to a cart,
the counter on the cart should increase by 1.

TC4 Similarly, when there is 1 item in the cart, if the user removes an item from the cart, it now
should display that there are no items anymore.

## Tag
There are 4 tags, named @Tag1 && @Tag2 && @Tag3 && @Tag4 
## How to install
Run command:
npm install

## How to run the test
npm run wdio

## How to run the tag
npm run tag -- "@tag"

## How to view report
First run the tests and than run the command

npm run allure

 