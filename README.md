# 📦 Welcome to the official unofficial react-typescript-styled-system-boilerplate setup


## 🎉 How to start!

## Development server
To start the development server, run the command:

```
npm run start
```

This will run the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br>
You will see any linting errors in your console/iTerm2/other fancy shell.

### Production build
To start a production build, - local or in your preferred CI - run the command:

```
npm run deploy
```

This build the app for production to the `dist` folder.<br>
It optimizes the build for the best performance.

Now your build is minified and the filenames are hashed 🎉!


## Generate icons from svg

Place all your icons in `/assets/svg`. Run `npm run svgr`. This generates tsx components from your svg's and optimizes them with SVGO. SVGO config is located in the root of the project. The CamelCased filename will be the name of the icon.

Example:

calendar.svg -> Calendar.tsx

Usage:

`<Icon icon="Calendar" color="primary" />`


## Typescript

This project is written to typescript. If you aren't that familiar with typescript this [cheatsheet](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet) is a great resource to get familiar.

## Documentation

Documentation for this project is present in storybook. Run `npm run storybook` to start up the documentation.

## Design system

This project uses [styled-components](https://www.styled-components.com/) and [styled-system](https://github.com/styled-system/styled-system) to create the ui library, but using *css*, *css modules* and *sass* are still supported.

## Atomic design structure

The component archicture is set up following the atomic design methodology.

![Atomic Design](http://atomicdesign.bradfrost.com/images/content/atomic-design-molecules.png)


## 🙌 Credits

Big thanks to:

__Matt van Voorst__</br>
https://github.com/mattmattvanvoorst

__Tim de Wolf__</br>
https://github.com/tpdewolf

