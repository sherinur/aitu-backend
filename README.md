## Assignment 1: BMI Calculator with Routing
### Objective
The goal of this assignment is to build a BMI Calculator web application using Node.js, Express.js,
and basic HTML and CSS, following the principles of server-side routing.

### Requirements
1. Project Structure:
  o Organize your project with proper folders and files, including:
    ▪ views/ for HTML files.
    ▪ public/ for static assets such as style.css.
    ▪ server.js as the main entry point.
  o Ensure all code follows clean, readable, and well-commented practices.

3. Functionalities:
  o Create a form on the homepage (/) where users can enter their weight (in kg) and
  height (in meters).
  o Route the form submission to a /calculate endpoint.
  o Process the BMI calculation in the backend and display the result on a new page.
▪ BMI formula: BMI = weight (kg) / (height (m) * height (m)).
  o Categorize the BMI:
    ▪ Below 18.5: Underweight
    ▪ 18.5 - 24.9: Normal weight
    ▪ 25 - 29.9: Overweight
    ▪ 30 and above: Obesity
  o Add a "Go back" link to the result page to return to the homepage.

4. Styling:
  o Use CSS to ensure the pages are clean and user-friendly.

5. Error Handling:
  o Ensure the application validates inputs (e.g., non-negative numbers for weight and
height).
  o Display meaningful error messages when validation fails.

7. Additional Feature:
  o Add additional fields for age and gender.
  o Provide health tips based on the BMI result.
