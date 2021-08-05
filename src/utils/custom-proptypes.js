
// Defining some custom prop type validation here
const CustomPropTypes = {
    
    // Color validation that ensures the prop is a valid RGB hex string
    color: function color(props, propName, componentName) {
        // Fetch the property to test
        const prop = props[propName];
        // Test if the property is set to valid RGB hex
        const validHex = /^#(?:[0-9a-fA-F]{3}){1,2}$/.test(prop);
        // If it isn't, return an error
        if (!validHex) {
            return new Error(`\`${componentName}\` only accepts valid RGB hex.`);
        }
    },
};

export default CustomPropTypes;