# Next JS, Redux Toolkit, Typescript Boilerplate

Next JS, Typescript, Redux Toolkit boilerplate with Axios.

## Prerequisites

- [Node.js > 12](https://nodejs.org) and yarn (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))

## Base dependencies

- [@reduxjs/toolkit](https://redux-toolkit.js.org/) for managing global state.
- [Axios](https://github.com/axios/axios) for networking.
- [Typescript](https://www.typescriptlang.org/) to type-check components exposed properties.
- [react-hook-form](https://react-hook-form.com/) for managing form state.
- [redux-persist](https://github.com/rt2zz/redux-persist) as persistance layer.

## Usage

You can start by cloning this repository. After that you should proceed as with any javascript project:

- Go to the project's root folder and run `yarn install` or `npm install`.
- Run `yarn dev` or `npm run dev` to start the development server!

## Folder structure

This template follows a very simple project structure:

- `components`: Folder to store any common component that we use through your app (such as a generic button)
- `pages`: All the application pages.
- `public`: Folder to store the publicly accessible files.
- `redux`: This folder should have all our reducers, and expose the combined result using its `rootReducer.ts`
  - `slices`: Folder that contains all redux slices.
- `services`: Folder to store your network related services.
- `styles`: Folder to store all the styling.
- `@types` This folder contains all the types.
