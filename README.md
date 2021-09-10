# <TeamProfileGenerator>

a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.

## Description

Motivation for this project was to understand how to generate HTML within Javascript but take the js data and output it into the HTML.
I built this project to be able to present different profiles based on certain roles.
The problem that this project solves is being able to specify between employees (manager, intern, engineer).
I learned how to extend a class, test js, learned how to this, constructor functions, get, inquirer, jest, and generate HTML within Javascript.

## Table of Contents

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Features](#features)
- [Tests](#tests)

## Installation

npm init -y, npm install -D jest, npm i inquirer, run in terminal, node index.js

## Usage

Once you run node index.js in your terminal (after installing everything), you will be (inquirer) prompted, if you want to create a Team (Y or N input only), if you type Y and hit return, it will then proceed for you to be able to name the employee then give them specific inputs (id, email, and/or github, office number)

## Credits

- Nate Nguyen helped me understand, troubleshoot, and get started on the code!

## Features

Website will present cards of which will provide specific values based on the role of the employee. Managers have specified office numbers, engineers have github links, and interns have their school they are attending.
