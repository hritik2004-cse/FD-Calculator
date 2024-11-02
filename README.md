# FD Calculator 💰

Welcome to the **FD Calculator**! This project is a simple, user-friendly tool for calculating the maturity amount of a fixed deposit based on user-provided values for principal amount, interest rate, and tenure.

## Features 🚀
- Easy input fields for principal, interest rate, and tenure
- Simple interest calculation to determine maturity amount
- Clear, interactive design using HTML, CSS, and JavaScript
- Real-time result display with an engaging UI

## Demo 🖼️
![FD Calculator Screenshot](https://github.com/hritik2004-cse/FD-Calculator/blob/main/img/cover-img.png)

## Getting Started 🛠️

### Prerequisites
Ensure you have a modern web browser installed (Chrome, Firefox, etc.).

### Project Structure
This project includes the following files:

- **index.html**: Contains the structure and layout for the calculator.
- **style.css**: Adds styling for a clean and professional look.
- **script.js**: Contains the JavaScript logic for calculating the maturity amount based on user input.


## Usage Instructions 📘
1. Enter the **Principal Amount** in the designated field.
2. Input the **Interest Rate** (annual) as a percentage.
3. Set the **Tenure** (in years).
4. Click the **Calculate** button, and the maturity amount will be displayed instantly.

## Code Highlights 📄
- **HTML Structure**: Provides a clean layout for form inputs and the result section.
- **CSS Styling**: Enhances the look and feel with intuitive input fields and button styling.
- **JavaScript Logic**: Calculates the maturity amount based on the user’s inputs.

```javascript
const interest = (principle * interestRate * tenure) / 100;
const maturityAmount = principle + interest;
