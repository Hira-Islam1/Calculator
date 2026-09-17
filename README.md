# Calculator

A simple and interactive calculator built with **HTML**, **CSS**, and **JavaScript**.

## Features

- Basic arithmetic operations: **addition (+)**, **subtraction (-)**, **multiplication (*)**, and **division (/)**
- Live display showing the current expression
- **Clear (C)** button to reset the calculator
- **Delete (del)** button to remove the last entered digit
- Division by zero shows an error message
- Calculation history saved in **localStorage** (persists after page refresh)

## Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Structure and layout of the calculator |
| CSS3 | Styling, flexbox layout, hover effects |
| JavaScript (Vanilla) | Button logic, calculations, and localStorage |

## Project Structure

```
Calculator/
├── index.html    # Main HTML file
├── style.css     # Styles and layout
├── app.js        # Calculator logic
└── README.md     # Project documentation
```

## How to Run

No installation or build step is required.

1. Clone or download this repository
2. Open `index.html` in any modern web browser (Chrome, Firefox, Edge, etc.)

**Or run with Live Server (VS Code):**

1. Install the **Live Server** extension in VS Code
2. Right-click on `index.html` → **Open with Live Server**

## How It Works

1. Click number buttons to enter the first number
2. Click an operator (`+`, `-`, `*`, `/`) to choose the operation
3. Enter the second number
4. Press `=` to see the result
5. Press `C` to clear everything, or `del` to delete the last digit

## What I Learned

- Building UI with HTML semantic structure
- CSS Flexbox for responsive button grid layout
- DOM manipulation with `querySelector` and event listeners
- Handling user input and conditional logic in JavaScript
- Using `localStorage` to save data in the browser

## Future Improvements

-  Fix keyboard support for typing numbers and operators
-  Improve  responsiveness
-  Add decimal point (`.`) support
## License

This project is open source and available for learning purposes.
