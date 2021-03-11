

/* eslint-disable no-undef */
import Add from './Add';
import Form from './Form';

let wrapper;

beforeEach(() => {
    //shallow method does not render <label> elements inside <Form> copmonent, which is why this test fails.
    wrapper = shallow(<Add />);
});

describe('<Add /> rendering', () => {
    it('should render one <h1>', () => {
        expect(wrapper.find('h1')).toHaveLength(1);
    });
it('should render one <Form>', () => {
        expect(wrapper.find(Form)).toHaveLength(1);
    });
    /**
     * beforeEach(() => {
        wrapper = shallow(<Add />);
        it('should render 2 <label>s', () => {
            expect(wrapper.find('label')).toHaveLength(2);
        });
        this will fail  the reson is that label is the child of Form  shallow dont render that
        shallow method does not render <label> elements inside <Form> copmonent, which is why this test fails.
        Solution
        Change the shallow method in Add.test.js to mount and run the test again.});
        beforeEach(() => {
            wrapper = mount(<Add />);
        });

        What is the best?

        It is recommended to use shallow as much as possible because unit tests should be isolated as much as possible.
        We do not need to check the units (components) inside a unit (component)when running a single test


        When you use mount you are automatically exposed to the logic of all the units (components) in your render tree making it impossible to only test the component in question.

        It is more costly in execution time when using mount, because it requires JSDOM.

        # render
        There is another function like shallow and mount, which is render.
        This has the ability to render to static HTML.
        It renders the children.
        But this does not have access to React lifecycle methods.

     */
});;
