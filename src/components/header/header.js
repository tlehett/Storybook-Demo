import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BeatLoader from 'react-spinners/BeatLoader';
import {
    loadingSelector,
    userSelector,
} from '../../data/state/test/test.selectors';
import {
    setUser,
} from '../../data/state/test/test.actions';

/**
 * Header component, connected to Redux to show the app title
 * as well as provide information on the user's authentication state.
 * 
 * This component is intended to demonstrate how Redux actions and
 * selectors can be mocked, as well as showing the React class components
 * can be used in Storybook as well!
 * 
 * Oh, and also showing how the react router history object can be mocked.
 */
export class Header extends Component {

    onLoginClicked = () => {
        this.props.history.push('/login');
    }

    onAccountClicked = () => {
        this.props.setUser(null);
    }

    renderLeftSide = () => {
        return (
            <Typography variant='h5'>
                {this.props.appTitle}
            </Typography>
        );
    }

    renderRightSide = () => {
        if (this.props.loading) {
            return <BeatLoader color='white'/>;
        }
        if (this.props.user) {
            return (
                <IconButton onClick={this.onAccountClicked}>
                    <AccountCircleIcon style={{ color: 'white' }}/>
                </IconButton>
            );
        }
        return (
            <Button
                onClick={this.onLoginClicked}
                style={{ color: 'white' }}
            >
                Login
            </Button>
        );
    }

    render() {
        return (
            <AppBar position='static'>
                <Toolbar className={css(styles.toolbarWrapper)}>
                    <div>
                        {this.renderLeftSide()}
                    </div>
                    <div>
                        {this.renderRightSide()}
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

const styles = StyleSheet.create({
    toolbarWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

Header.propTypes = {
    /**
     * The title of the app to display in the header.
     */
    appTitle: PropTypes.oneOf(['Hi', 'Bye']),
    /**
     * The user object from Redux, if it exists.
     */
    user: PropTypes.object,
    /**
     * The user authentication loading state from Redux.
     */
    loading: PropTypes.bool.isRequired,
    /**
     * The react router history object to facilitate navigation.
     */
    history: PropTypes.object.isRequired,
    /**
     * The Redux action to set the user in state.
     */
    setUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        user: userSelector(state),
        loading: loadingSelector(state),
    };
};

const mapDispatchToProps = {
    setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);