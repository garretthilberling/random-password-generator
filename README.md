# Random Password Generator

## Description
For this project we were tasked with creating a password generator that inquires what the desired password length is and what characters will be included (uppercase, lowercase, numbers and special characters). We were given startercode that included HTML and CSS that I did change anything on, and a sparsly populated JavaScript file that only included the basic functionality required to print the password to the page when the button is clicked. This project helped solidify my understanding of the JavaScript language and working with arrays and 'Math.random' helped provide a much deeper understanding of those concepts. 

## Installation
No installation required, access the application at the live URL via this link: https://garretthilberling.github.io/Hilberling-Challenge-3/

## Usage
Firstly, when the button is clicked a window prompt opens asking the user to input their desired password length. Using if/else conditional statements, any non-number answer or any number that does not fall between 8 and 128 characters will return an alert notifying the user that their answer is invalid. Next, the user is presented with a series of confirmation windows that inquire what characters they would like to use. Values of true or false are stored based on the user's decision and that is used later when 'Math.random' is used to generate the new password by selecting from corresponding arrays (which correspond to the character type being 'true'). The result is a password being printed to the screen that contains the length and characters specified by the user.

## Credits
This project was created solely by Garrett Hilberling: https://github.com/garretthilberling
