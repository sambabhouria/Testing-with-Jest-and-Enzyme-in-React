# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

## Jest vs. Enzyme

# Jest
Jest is used by Facebook to do JavaScript testing including React Applications.

The slogan of Jest is “Delightful JavaScript Testing”. The main reasons for Jest to be delightful are,

1-> Jest is a test runner, which can run tests in parallel to maximize the performance.
2-> Jest is an assertion library, where you do not need to install Chai, Should.js etc. to do the assertions.
3-> Jest is a mocking library, where you do not need to install seperate libraries like proxyquire, sinon, testdouble etc.
4-> est provides the facility to create coverage reports as built-in functionality.

Fewer configurations to be done when using Jest.

# Enzyme
Enzyme is a JavaScript Testing tool created by Airbnb for React, which helps to do assertions, manipulations, and traversals in your React Components’ output.

# Why Jest and Enzyme both?

Jest can be used to test any JavaScript application while Enzyme can only be used with React.
Jest can be used without Enzyme, but Enzyme needs to be paired with Jest or any other test runner in order to function.
Enzyme provides additional functionality when interacting with elements while testing.

##  babel-preset-env
is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s).
If you do not install this you might get errors because of inability to identify import statements (ES6) in js files.

## Configuration for babel (.babelrc)
{
  "presets": [
    "@babel/preset-env",
    "react-app"
  ]
}

## Configuration for Jest :
   setupTests.js


## “Best Practices when testing with Jest and Enzyme” :
Tip 1 — Create a separate file with the global variables
Tip 2 — Use ‘describe’ and ‘it ’keywords appropriately in tests
    ‘describe’ helps to decompose/break your test suite into components. In other words, it helps to break the tasks
    of a component and to visualize the big picture of the tests. Also, you can use nested ‘describe’ statements to further subdivide the test suite.
    ‘it’ explains each test that you are going to perform. For example, in a component named ‘Add’, can have a test specified as “it(‘should render 
    2 <input>s’……….”. You should not be able to subdivide tests further when you use ‘it’.
Tip 3 — Main categories to test
    It is better if you can categorize the tests under ‘describe’ keyword. Following are some examples.
    Rendering — You can categorize the tests like rendering components in a parent component. Examples: How many text boxes rendered?, Whether some element is rendered under some condition? etc.
    Interactions — You can categorize the tests which help to check the interactions in UI. Examples: onClick method of a button, onChange method, state changes etc.
    Lifecycle Method Calls — You can categorize tests which help to know whether a particular lifecycle method is called. Examples: To test componentDidMount method and associated state changes etc.
Tip 4 — Things to be done Before and After tests
    It is better if you can structure what should be done before or after some set of tests. You can use the following keywords for that.
    beforeEach(() => { someInitializationFunction(); });
    afterEach(() => { someClearFunction(); });
    beforeAll(() => { someOneTimeInitializationFunction(); });
    afterAll(() => { someOneTimeClearFunction(); });

Important — It is better if we can run each ‘it’ block without depending on others in an isolated manner. In here sometimes beforeAll() or afterAll() methods can cause harm. So make sure to use them wisely.

Tip 5 — Passing props
    When there are more than one props to be passed it is better to use a separate function to create the props (createTestProps())
    and assigned them to a variable (props) by calling the function inside beforeAll() or beforeEach() or in any place you need. Below is an example of such function usage.

function createTestProps(props) {
    return {
        apiId: '6e770272-212b-404e-ab9c-333fdba02f2f',
        cancelButton: true,
        allComments: [],
        theme: { custom: { maxCommentLength: 1300 } },
        ...props,
    };
}
let wrapper, props;
beforeEach(() => {
    props = createTestProps();
    wrapper = shallow(<Comment {...props} /> );
});

Important — The purpose of having props to be passed as an argument to createTestProps() method is, to provide the facility of simply overriding/adding a prop value in the middle of a test case. Check below code segment.

Please refer below article for further knowledge of best practices
https://techblog.commercetools.com/testing-in-react-best-practices-tips-and-tricks-577bb98845cd


## shallow vs. mount in Enzyme

Most of us have a problem of clarifying When to use shallow and when to use mount when testing with Enzyme.

# shallow
shallow method is used to render the single component that we are testing. It does not render child components.
In Enzyme version less than 3, the shallow method does not have the ability to access lifecycle methods. But in Enzyme version 3, we have this ability.
Simple shallow calls the constructor, render, componentDidMount (in Enzyme version 3) methods.
shallow + setProps =>  call componentWillReceiveProps, shouldComponentUpdate, componentWillUpdate, render, componentDidUpdate (in Enzyme version 3) methods.
shallow + unmount call => componentWillUnmount method.

# mount
mount method renders the full DOM including the child components of the parent component that we are running the tests.

This is more suitable when there are components which directly interfere with DOM API or lifecycle methods of React.
But this is more costly in execution time
Simple mount calls =>  the constructor, render, componentDidMount methods.
mount + setProps call = > componentWillReceiveProps, shouldComponentUpdate, componentWillUpdate, render, componentDidUpdate methods.
mount + unmount call => componentWillUnmount method.
