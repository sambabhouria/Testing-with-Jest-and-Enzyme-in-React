

/* eslint-disable no-undef */

import Form from './Form';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Form />);
});

    // Step 1 — Writing tests for Rendering

describe('<Form /> rendering', () => {

    it('should render one <form>', () => {
        // The first test checks whether there is one <form> element when the <Form> is rendered.
        expect(wrapper.find('form')).toHaveLength(1);
    });

    it('should not render any <button> when operator is not passed in props', () => {
        //The second test is special. If you check Form.js file in testing-demo-app/src/components, you can see that if the operator is not passed, a button would be rendered.
        // In this test we check that. We do not pass the operator as a prop when we are initializing the wrapper. Because of that, no button will be rendered.
        expect(wrapper.find('button')).toHaveLength(0);
    })

    it('should render 2 <label>s', () => {
        // The third test checks there are 2 <label>s. (Those are to label the FIRST NUMBER and the SECOND_NUMBER in UI)
        expect(wrapper.find('label')).toHaveLength(2);
    });

    it('should render 2 <input>s', () => {
        // The fourth test checks whether there are 2 <inputs>, which are to enter the numbers to be added.
        expect(wrapper.find('input')).toHaveLength(2);
    });

    it('should render one <button> to Add when operator \'+\' is passed in props', () => {
        // In the newly added fifth test, we set the prop operator to ‘+’. According to what we have discussed in the second test,
        // now the <Form> must have a <button>. In here we are searching that <button> using its id ‘formButtonAdd’.
        wrapper.setProps({ operator: '+' } );
        expect(wrapper.find('#formButtonAdd')).toHaveLength(1);
        expect(wrapper.find('#formButtonSubtract')).toHaveLength(0);
    });

    it('should render one <button> to Subtract when operator \'-\' is passed in props', () => {
        //Similarly, in the sixth test, we set the prop operator to ‘-’ and check whether there is a <button> with id ‘formButtonSubtract’.
        wrapper.setProps({ operator: '-' } );
        expect(wrapper.find('#formButtonAdd')).toHaveLength(0);
        expect(wrapper.find('#formButtonSubtract')).toHaveLength(1);
    });
});;

 // Step 2 — Writing tests for Interactions

 describe('<Form /> interactions', () => {
    it('should change the state firstNumber when onChange function of the #number1 input is invoked', () => {
        // In the first test under the ‘<Form> interactions’, we are simulating an event in an <input> field.
         //We are simulating the onChange method in the <input> which has the id ‘number1’.
         //We are assigning a value to number1 <input> as 50.
         //If you check the onChange function of number1 in Form.js file, it calls handleFirstNumber() method, which is like below.
         /**
          * handleFirstNumber(event) {
             this.setState({ firstNumber: event.target.value });
          }
          */
        // So according to our test, it sets 50 as the value of number1 and expects this function to automatically change the value of the
        // state.firstNumber in Form.js to 50. This test is passed, which means that we have successfully simulated the onChange method of number1.
        wrapper.find('#number1').simulate('change',
            { target: { value: 50 } }
        );
        expect(wrapper.state('firstNumber')).toEqual(50);
        expect(wrapper.state('secondNumber')).toEqual('');
    });

    it('should change the state secondNumber when onChange function of the #number2 input is invoked', () => {

        // In the second test also, we are doing the similar thing to simulate the onChange method in number2 <input>.
        wrapper.find('#number2').simulate('change',
            { target: { value: 60 } }
        );
        expect(wrapper.state('secondNumber')).toEqual(60);
        expect(wrapper.state('firstNumber')).toEqual('');
    });


    it('should call the onClick function when \'Add\' button is clicked when the operator is \'+\'', () => {

        // In the third test, under ‘<Form> interactions’, is mocking the onClick function of a <button> with the id ‘formButtonAdd’.
        // In Form.js, when this is clicked the function named handleAdd() should be called. Since we have mocked it using a jest function named mockedHandleClickAdd(),
        //  this must be called instead. So our test has passed means, we have successfully mocked onClick function of formButtonAdd.
        wrapper.setProps({ operator: '+' } );
        const mockedHandleClickAdd = jest.fn();
        wrapper.instance().handleAdd = mockedHandleClickAdd;
        wrapper.find('#formButtonAdd').props().onClick();
        expect(mockedHandleClickAdd).toHaveBeenCalledTimes(1);
    });

    it('should call the onClick function when \'Subtract\' button is clicked when the operator is \'-\'', () => {
        // Similarly, in the fourth test, we are mocking the onClick function of ‘formButtonSubtract’.
        wrapper.setProps({ operator: '-' } );
        const mockedHandleClickSubtract = jest.fn();
        wrapper.instance().handleSubtract = mockedHandleClickSubtract;
        wrapper.find('#formButtonSubtract').props().onClick();
        expect(mockedHandleClickSubtract).toHaveBeenCalledTimes(1);
    });
});


// Step 3 — Writing tests for Lifecycle Method calls
// Add another test under ‘<Form> lifecycle method invocations’ in Form.test.js like below and run the file again.

describe('<Form /> lifecycle method invocations', () => {

    // In here we are checking the state named componentState which is defined in Form.js file. 
    //According to Form.js, the state componentState will be changed to ‘mounted’ when componentDidMount method is called.
    // Our test is passed, that means the componentMount mehod is called successfully.
    it('should change the state componentState componentDidMount method is invoked', () => {
        expect(wrapper.state('componentState')).toEqual('mounted');
    });
});

// Special Note on ‘componentDidMount’
/**
 * Assume you have a database call in one of your lifecycle methods (componentDidMount or any other).
 * If you call it from the tests, it will definitely fail because you do not have the database connection when you are testing.
 * So, the solution for this is to use a prototype function of componentDidMount which is defined in your test file like below.
 * 
 * 
 * beforeAll(() => {
    Form.prototype.componentDidMount = () => {
        console.log('componentDidMount method is called');
    };
});
 */
