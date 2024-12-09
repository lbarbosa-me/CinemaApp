// Define the fixed price for each seat
const SEAT_COST = 140;

// Variable to store the total purchase amount
let totalAmount = 0;

// Array to store the IDs of selected seats
let selectedSeatIds = [];

// HTML element where the total purchase amount will be displayed
const totalAmountElement = document.getElementById("total-purchase-amount");

// Function called when a seat is clicked
function handleSeatClick(seatElement) {
    console.log("Clicked seat ID:", seatElement.id); // Logs the clicked seat ID to the console

    if (seatElement.classList.contains("occupied")) { // Skip if the seat is already occupied
        return;
    }

    if (seatElement.classList.contains("selected")) { // Check if the seat is already selected
        console.log("Deselecting seat:", seatElement.id); // Log for debugging
        seatElement.classList.remove("selected"); // Remove the "selected" class
        selectedSeatIds = selectedSeatIds.filter(id => id !== seatElement.id); // Remove the seat ID from the array
    } else {
        console.log("Selecting seat:", seatElement.id); // Log for debugging
        seatElement.classList.add("selected"); // Add the "selected" class
        selectedSeatIds.push(seatElement.id); // Add the seat ID to the array
    }

    totalAmount = selectedSeatIds.length * SEAT_COST; // Update the total amount based on selected seats
    console.log("Selected seat IDs:", selectedSeatIds); // Log the selected seats to the console
    console.log("Total purchase amount:", totalAmount); // Log the total amount to the console

    updateDisplayedAmount(); // Update the UI with the total amount
}

// Function to update the displayed total amount
function updateDisplayedAmount() {
    if (totalAmountElement) { // Check if the element exists
        totalAmountElement.textContent = `R$ ${totalAmount}`; // Update the text with the total amount
    }
}

// Ensure the `handleSeatClick` function is available in the global scope
window.handleSeatClick = handleSeatClick;

// Function to finalize the purchase
function finalizePurchase() {
    if (selectedSeatIds.length === 0) {
        alert("Please select at least one seat before finalizing the purchase.");
        return;
    }

    for (const seatId of selectedSeatIds) {
        const seatElement = document.getElementById(seatId);
        seatElement.classList.remove("selected");
        seatElement.classList.add("occupied");
    }

    selectedSeatIds = [];
    totalAmount = 0;
    updateDisplayedAmount();
}
