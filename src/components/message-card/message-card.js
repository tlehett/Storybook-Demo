import React from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    CardContent,
    Typography,
} from '@material-ui/core';

/**
 * A basic message card using React's Material-UI library.
 * 
 * Oh I don't know
 * 
 * Displays a card with a user-defined header and user-defined
 * message in a very simplistic style.
 * 
 * This comment is really just to show how documentation could
 * work using Storybook. Pretty cool!
 */
function MessageCard({
    header,
    message,
}) {
    // Return the main render
    return (
        <Card style={{ width: 'fit-content' }}>
            <CardContent>
                <Typography variant='h3'>
                    {header}
                </Typography>
            </CardContent>
            <CardContent>
                <Typography variant='body1'>
                    {message}
                </Typography>
            </CardContent>
        </Card>
    );
}

MessageCard.propTypes = {
    /**
     * The header to display to the user.
     */
    header: PropTypes.string.isRequired,
    /**
     * The message to display to the user.
     */
    message: PropTypes.string.isRequired,
};

export default MessageCard;