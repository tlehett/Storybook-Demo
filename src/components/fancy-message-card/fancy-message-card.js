import React from 'react';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';
import {
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
} from '@material-ui/core';
import CustomPropTypes from '../../utils/custom-proptypes';

/**
 * A fancier basic message card using React's Material-UI library.
 * 
 * Displays a card with a user-defined header and user-defined
 * message in a very simplistic style.
 * 
 * This fancy component demonstrates how Aphrodite, custom PropTypes,
 * and callback functions can be used effectively in Storybook!
 */
function FancyMessageCard({
    header,
    headerColor,
    message,
    actionButtonText,
    onActionButtonClicked,
}) {
    // Return the main render
    return (
        <Card style={{ width: 'fit-content' }}>
            <CardContent
                style={{ background: headerColor }}
                className={css(styles.header)}
            >
                <Typography variant='h3'>
                    {header}
                </Typography>
            </CardContent>
            <CardContent>
                <Typography variant='body1'>
                    {message}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    onClick={onActionButtonClicked}
                    color='secondary'
                    variant='contained'
                >
                    {actionButtonText}
                </Button>
            </CardActions>
        </Card>
    );
}

const styles = StyleSheet.create({
    header: {
        color: 'white',
    }
});

FancyMessageCard.propTypes = {
    /**
     * The header to display to the user.
     */
    header: PropTypes.string.isRequired,
    /**
     * Optionally specify a different color for the card header.
     */
    headerColor: CustomPropTypes.color,
    /**
     * The message to display to the user.
     */
    message: PropTypes.string.isRequired,
    /**
     * The text to display on the action button.
     */
    actionButtonText: PropTypes.string.isRequired,
    /**
     * The callback function to call when the action button is clicked.
     */
    onActionButtonClicked: PropTypes.func.isRequired,
};

FancyMessageCard.defaultProps = {
    headerColor: '#22aaff',
};

export default FancyMessageCard;