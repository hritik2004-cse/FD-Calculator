function CalculateMaturityAmount() {
    // Getting input values 
    const principle = parseFloat(document.getElementById("principle").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);
    const tenure = parseFloat(document.getElementById("tenure").value);

    // Validating input values
    if (isNaN(principle) || isNaN(interestRate) || isNaN(tenure) || principle <= 0 || interestRate <= 0 || tenure <= 0) {
        alert("Please enter valid numerical values greater than zero.");
        return;
    }

    // Calculating interest
    const interest = (principle * interestRate * tenure) / 100;
    
    // Calculating maturity amount
    const maturityAmount = principle + interest;

    // Displaying result 
    document.getElementById("result").innerText = `Maturity Amount: ₹${maturityAmount.toFixed(2)}`;
    console.log("Maturity Amount Calculated Successfully!");
}
