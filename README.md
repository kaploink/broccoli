## Priorities
* Standard / future proof
  * Battle-tested tech endorsed by experts and community
* Maintainable
  * Easy to browse, refactor, extend, trace
  * Minimal source - use community libs where possible
  * Minimal control flow complexity
* Robust
  * Explicit dependencies, checked at build time


## Choices

### Starting point: [create-react-app](https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html)

Recently created by the core React team to solve the high cost of creating/choosing/maintaining a best practice build toolset and config.  Abstracts away webpack, babel, hot reload, etc, into a single npm dependency.  Avoided ejecting out and customising to keep source clean.

### Structure

Hierarchy of small encapsulated components with explicit dependencies and co-located couplings (styling, markup, behaviour).  Usually avoid the relative ancestor import paths using webpack config, but didn't want to eject.

### UI component library: [Material UI](http://www.material-ui.com)

Comprehensive, high UX quality, doesn't conflict with other UI components (no global CSS - no CSS at all).

### Styling: javascript / [Radium](https://github.com/FormidableLabs/radium)

I usually use a combination of SCSS styles locally scoped by webpack then imported into components (basically CSS Modules), plus inline styles.  Given create-react-app's webpack config skips preprocessors and tries to not support local scoping (due to being non-standard), I decided to follow Material UI and go purely with inline styles.

Radium fills out inline styling to match the features CSS provides (:hover, media queries, etc), but didn't use those.  It also provides autoprefixing for inline styles (just whichever ones the browser it's running in needs).  Haven't finished setting it up - most components still not wrapped in it; haven't tested.

### State: [Redux](http://redux.js.org/)

Stores app state and manages it nicely.  Just used for Redux Form.

### Form state: [Redux Form](http://redux-form.com/6.0.0-rc.4/)

Cuts down plenty of form state/behaviour boilerplate code.

### Tests: [Jest with Snapshot Testing](https://facebook.github.io/jest/blog/2016/07/27/jest-14.html)

A couple of weeks ago Jest released a snapshot testing tool letting you write fast regression tests with minimal overhead.  It looks awesome, I started setting it up but didn't finish.

### Design

This is rough, haven't themed or styled the Material UI components.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm test`

Runs all tests named \*.test.js, using jest (inc snapshot testing).

### `npm run debug_tests`

Opens up a chrome window allowing you to step through / breakpoint your test source.

### Deploy

#### Heroku

Use the [Heroku Buildpack for create-react-app](https://github.com/mars/create-react-app-buildpack).
