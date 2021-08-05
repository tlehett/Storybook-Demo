# Storybook Demo

The demo repository for CFP's first lunch and learn on Storybook!

## Running Storybook in this Repo

To start Storybook for this repository, enter `npm run storybook` in the console from the root directory. This will start Storybook on `localhost:6006`. After letting Storybook build, navigate to that address in your browser to see Storybook in action!

## Storybook Config

Storybook can be initialized for a project by typing `npx sb init` in the terminal inside your project's root directory. If run inside a React app, it should automatically determine that it is a React app, and will install the necessary dependencies.

This will create the script in `package.json` that lets you use `npm run storybook`. It also creates a minimal config folder, `.storybook`, in your root directory, as well as some demo pages to show you how Storybook works.

In this project, the demo pages have been removed, and the `.storybook` configuration files have been modified to support some additional plugins, such as support for @material-ui.

`main.js` defines the regex pattern that is used to search for stories within the project, as well as stores a list of installed addons. `storybook-addon-material-ui` was added here.

`preview.js` allows you to define properties of Storybook's preview window. The `muiTheme` support from `storybook-addon-material-ui` has also been added at the top as a decorator. Other properties include available background color options, default viewport sizes, and controls options.

## Creating a Basic Component Story

With the default regex pattern specified in `.storybook/main.js`, stories can be created in any child directory, right alongside your component files. For example, in `src/components/message-card`, a `message-card.stories.js` file has been created beside the `message-card.js` component file.

The default export allows you to state things such as the `title` of the story, and the `component` that is the focus of the demo.

The `title` can include a category to help organize components within Storybook. For example, in `message-card.stories.js`, a category of `01 Basic` is specified for the story, which itself is called `01 Message-Card`.

The `Template` defines the base JSX that all test cases within this story use. In `message-card.stories.js`, we are only returning the `<MessageCard>` component, with `args` being destructured as props for the component.

The remaining `export`'s define each individual test case. Each test case will be named after their variable name. For example, the test case defined by `export const Basic` will be called `Basic`. The first `export const` in the file will be considered the "default" test case, and will be displayed first in the documentation and when first selecting the component's story.

These test cases can define different property values that may be passed to them by setting them in `TEST_CASE_NAME.args`. These will be the defaults for the test case. In Storybook itself, a person can temporarily modify these values for testing how interactions may work between properties, but those changes will not be saved for the project.

With this story defined, we can run Storybook and see `01 Basic/01 Message-Card` defined in the app.

## Handling Callback Functions in Storybook

Some reusable components will accept callback functions that may handle business logic. For example, an action button on a Material card may delete something from the database when clicked.

To create good reusable components, business logic should be extracted out of the component itself, and passed as callback functions in the component's props.

With this separation, testing in Storybook becomes much easier. A callback function mock can be created that may just `console.log('Action button pressed!')`. This mock can be passed as a property to the story's defined `Template`. With Storybook's `@storybook/addon-console` addon, we can then view the `Action button pressed!` log whenever the action button is pressed!

## Customizing Storybook Controls

The property controls for a Storybook story can be defined in each `stories.js` file under the default export. These are called `argTypes`.

Each entry under the `argTypes` object should be the variable name for a property passed to the reusable component. The value for the entry is an object containing information for Storybook on how to display the controls.

You can organize properties into categories by specifying a `category`, or you can change the control Storybook provides by specifying a `control`. For example, a color property may want to make use of a color picker control in Storybook by specifying `control: 'color'`.

With `argTypes` you can even disable users from modifying a property, or even hide them completely in Storybook. This is useful when working with Redux, which automatically adds props to your components that users of your reusable component should not need to worry about. You can hide Redux properties from the Storybook controls altogether to avoid confusion.

## Working with Redux-Connected Reusable Components

Since Redux adds the dispatch and state variables to your components directly as props, you can easily use this when creating stories for your reusable components.

The first thing to note is that you should export the non-connected component to use in Storybooks as opposed to the Redux-connected component. From there, you can pass in the Redux state and dispatch variables as you would with any other arguments in Redux.

You may find that you want to have a mock function update the "Redux state" variables, which are now considered `args` in your story. To do this, you can make use of the `useArgs` hook from `@storybook/client-api`.

For more information on working with Redux-Connected components in Storybook, take a look at the example file, `src/components/header/header.stories.js`.
