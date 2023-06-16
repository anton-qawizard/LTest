# Cypress example

## Installation:

- clone the git repo with

  ```bash
  $ git clone *repo link*
  ```

- install dependencies:
  ```bash
  $ npm install
  ```
- run command for testing, after window open select needed test file:
  ```bash
  $ npx cypress open
  ```

## Configuration:

- baseURL is set in **cypress.config.js**

## Folder Structure:

- cypress
  - e2e - contains test files
  - fixture - contains fixture file for testing, ppossible fixture data (like email & passwords for the default users)
  - selectors - contains selectors
  - support
    - commands.js - contains custom cypress commands
    - e2e.js - for importing the plugins

