// Define the start and end dates in the format YYYY-MM-DD
const startDate = new Date('2024-05-01'); // Start date
const endDate = new Date('2024-05-31');   // End date

// Function to check if today's date is within the range
function checkDate() {
    // Check if on the specific page by checking for the presence of a unique element
    if (document.getElementById('pageIdentifier')) {
        const today = new Date();
        if (today >= startDate && today <= endDate) {
            // If today is within the range, display the item
            document.getElementById('specialItem').style.display = 'block';
        } else {
            // Otherwise, hide the item
            document.getElementById('specialItem').style.display = 'none';
        }
    }
}

// Run the function when the page loads
window.onload = checkDate;

