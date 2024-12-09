Cinema Seat Booking System
Description
This project is a simple cinema seat booking application. It allows users to select available seats, view the total purchase value, and finalize the purchase by confirming the selected seats.

Project Structure
Main Files
HTML (index.html): Basic structure of the user interface, including the seat layout and interaction buttons.
JavaScript (main.js): Contains the logic for seat selection, deselection, and purchase.
CSS (style.css): Defines the visual styling of the system (not included in the example).
Features
Seat Selection
Click on an available seat to select it.
Click the same seat again to deselect it.
Occupied seats cannot be selected.
Total Amount Calculation
Each seat costs R$ 140.
The total purchase value is automatically updated based on selected seats and displayed in the interface.
Finalize Purchase
Clicking the "Finalize Purchase" button:
Marks the selected seats as occupied.
Resets the total amount.
Clears the list of selected seats.
If no seat is selected, an alert message is shown.
Code Structure
HTML
Contains:
A section for seats represented by <li> elements.
An area to display the total purchase amount.
A button to finalize the purchase.
JavaScript
Main Variables:

SEAT_COST: The fixed price for each seat.
totalAmount: The total value calculated based on selected seats.
selectedSeatIds: A list of the IDs of the selected seats.
Functions:

handleSeatClick(seatElement): Logic for selecting/deselecting a seat.
updateDisplayedAmount(): Updates the displayed total amount in the interface.
finalizePurchase(): Finalizes the purchase and updates the seat status.
How to Use
Open the index.html file in a web browser.
Click on available seats to select them.
Check the total amount displayed.
Click the "Finalize Purchase" button to confirm the purchase.
Customization
You can:

Change the seat price by modifying the SEAT_COST value in the main.js file.
Add more seats by duplicating the <li> elements in the HTML and assigning unique IDs.
Customize the visual style by editing the style.css file.
Requirements
A modern browser with JavaScript support.
No additional setup is required.
