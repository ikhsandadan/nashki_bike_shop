# NASHKI BIKE SHOP
## Created for StackUp JavaScript Intermediate Campaign Bounty

[Bikeshop](https://nashki-bike-shop.netlify.app/)

### Website Explanation
I have created a Bike Shop website where users can purchase their desired bicycles by logging in first. I have prepared three sample users: Bob with an account balance of $10,000, Alice with an account balance of $3,000, and Alex with an account balance of $5,000, all three sample users passwords is "123456". This account balance can be used to buy bicycles available on the website. If the account balance is less than the bicycle's price, an error message will appear, and the purchase will fail. If the balance is sufficient, the purchase will be successful, and the balance will be reduced accordingly.

Additionally, I have implemented three types of purchase discounts. For purchases equal to or less than $3,000, users will receive a 2.5% discount. For purchases between $3,000 and $6,000, a 5% discount will be applied. Finally, for purchases exceeding $6,000, users will receive a 10% discount.

###  Explanation For Each Part Of My JavaScript Code
#### Class Definitions
I've defined four classes: Account, Bike, DataAccount, and DataBike. These classes are used to structure and manage data related to user accounts and bike information.

#### Constructor Methods
In the Account class, the constructor method initializes properties like username, password, and balance for a user account. In the Bike class, the constructor method initializes properties like name, type, price, img, desc, and availability for a bike.

#### DataAccount and DataBike Classes
DataAccount and DataBike classes are used to store collections of accounts and bikes, respectively. They have methods like addAccount and addBike to add new accounts and bikes to their respective collections, displayAccount and displayAvailableBike methods are used to show user account details and available bikes on the web page.

#### Data Initialization
Instances of DataBike and DataAccount classes (dataBike and dataAccount) are created. Several bike and user account instances are created with sample data.

#### Login Function (login)
This function is triggered when the user clicks the login button or presses Enter on the password field. It retrieves the username and password entered by the user. It then iterates through the accounts collection to check if the provided username and password match any user account. If a match is found, it sets loggedIn to true, otherwise, it sets an error message and reloads the page, and an alert displays the login result. If the login is successful (loggedIn is true), it displays the main content by calling displayData().

#### Event Listeners
Event listeners are added to the login button and input fields to trigger the login function when the user clicks the login button or presses Enter in either the username or password field.

#### Display Data (displayData)
This function is responsible for displaying available bikes and user account details when the user is logged in. It retrieves the lowercase username entered by the user. It calls dataBike.displayAvailableBike() to show available bikes and dataAccount.displayAccount() to show user account details.

#### Cancel Buy (cancelBuy)
This function is called when the user cancels a bike purchase, or to go back to the bike list. It restores the bike display, and refreshes the user's account details.

#### Show Bike (showBike)
This function is called when the user clicks the "Detail" button for a specific bike. It displays detailed information about the selected bike, including its name, image, price, type, and description.

#### Checkout (checkout)
This function calculates the discounted price of the selected bike based on its price range. It deducts the purchase price from the user's balance and displays the purchase summary. Users can proceed with the purchase by clicking the "Buy" button or cancel it by clicking the "Cancel" button.

#### Confirm Buy (confirmBuy)
This function finalizes the bike purchase. It checks if the user's balance is sufficient for the purchase and updates the balance if the purchase is successful. It displays a confirmation message and allows the user to look for another bike.
