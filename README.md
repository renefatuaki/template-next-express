## Prerequisites

- [Node.js](https://nodejs.org/)

- [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm)

- [npm (Node Package Manager)](https://www.npmjs.com/)

## Getting Started

### Setting up the environment

**Install the required dependencies:**

[Use the correct node version by using nvm](https://github.com/nvm-sh/nvm#nvmrc)

<code>npm install</code>

<code>npm run husky</code>

**Starting Server**

To run both the frontend and backend, navigate to the root directory and run:

<code>npm run dev</code>

## Code Formatting and Linting

This project uses [Prettier](https://prettier.io) for code formatting and [ESLint](https://eslint.org) for linting with the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript). Ensure that your code is formatted and linted according to the project's configurations before committing.

To format your code using **Prettier**, run:

<code>npm run prettier</code>

To **lint** your code, run:

<code>npm run eslint</code>

## GIT

Use Conventional Commits: The [config-conventional](https://www.conventionalcommits.org/en/v1.0.0/) configuration enforces the Conventional Commits standard. This means your commit messages should look something like this:

<code>type(scope): description</code>

- type: Represents the nature of the change (e.g., feat, fix, chore, docs, style, refactor, perf, test).

- scope: (Optional) Represents the section of the codebase the change pertains to (e.g., server, client).

- description: A brief description of the change.
