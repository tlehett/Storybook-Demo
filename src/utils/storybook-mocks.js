
// Helper function
const createNavigationMock = (route) => {
    return () => {
        console.log('Navigating to ' + route + ' ...');
    }
}

// Defining some mock function factories that can be used for Storybook
const StorybookMocks = {

    // Mock factory for a button clicked callback
    createButtonClickedMock: (buttonName) => {
        return () => {
            console.log('\'' + buttonName + '\' Button Clicked!');
        };
    },

    // Mock factory for the history prop
    createHistoryMock: () => {
        return {
            push: (route) => {
                createNavigationMock(route)();
            }
        };
    },

    // Mock factory for a navigation function
    createNavigationMock,
};

export default StorybookMocks;