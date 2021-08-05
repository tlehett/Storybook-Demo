import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import routes from './routes';
import { ThemeProvider } from '@material-ui/styles';
import MuiTheme from '../styles/muiTheme';

export default class Root extends Component {
    render() {
        const { store, history } = this.props;
        return (
            <Provider store={store}>
                <ThemeProvider theme={MuiTheme}>
                    <ConnectedRouter history={history}>
                        {routes}
                    </ConnectedRouter>
                </ThemeProvider>
            </Provider>
        );
    }
}