$(document).ready(function () {
    $("#calculateButton").on("click", function () {
        // Clear previous validation message
        $("#hoursValidation").text("");

        // Get the number of hours entered by the user
        var hours = parseFloat($("#hours").val());

        // Validate that the entered value is a positive number
        if (isNaN(hours) || hours <= 0) {
            $("#hoursValidation").text("Please enter a valid positive number.");
            return;
        }

        // Calculate the total cost
        var hourlyRate = 30; // Your hourly rate
        var totalCost = hours * hourlyRate;

        // Display the total cost in the output box
        $("#total").val("$" + totalCost.toFixed(2));
    });
});
