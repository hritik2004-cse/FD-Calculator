function CalculateMaturityAmount() {
    // Getting input values 
    const Principle = parseFloat(document.getElementById("principle").value);
    const InterestRate = parseFloat(document.getElementById("interestRate").value);
    const Tenure = parseFloat(document.getElementById("tenure").value);

    // Validating input values
    if (isNaN(Principle) || isNaN(InterestRate) || isNaN(Tenure)) {
        alert("Please enter valid numerical values.");
        return;
    }

    // Calculating interest
    const Interest = (Principle * InterestRate * Tenure) / 100;
    
    // Calculating maturity amount
    const MaturityAmount = Principle + Interest;

    // Displaying result 
    document.getElementById("result").innerText = `Maturity amount: ${MaturityAmount.toFixed(2)}`;
    console.log("Maturity Amount Calculated Successfully!");
}
