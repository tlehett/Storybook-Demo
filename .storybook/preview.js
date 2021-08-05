import { muiTheme } from 'storybook-addon-material-ui';
import MuiTheme from '../src/styles/muiTheme';
import '@storybook/addon-console';
import { colors } from '@material-ui/core';

export const decorators = [
    muiTheme([MuiTheme])
];

export const parameters = {
    actions: { argTypesRege: '^on[A-z].*' },
    controls: {
        expanded: true,
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    // Here are the non-boilerplate changes
    backgrounds: {
        default: 'white',
        values: [
            {
                name: 'white',
                value: '#ffffff',
            },
            {
                name: 'black',
                value: '#000000',
            },
            {
                name: 'red',
                value: '#ff0000'
            },
            {
                name: 'neutral',
                value: '#dddddd',
            },
        ],
    },
    viewport: {
        viewports: {
            matSmall: {
                name: 'Material Small',
                styles: {
                    width: '600px',
                    height: '600px',
                },
            },
            matMedium: {
                name: 'Material Medium',
                styles: {
                    width: '960px',
                    height: '600px',
                },
            },
            matLarge: {
                name: 'Material Large',
                styles: {
                    width: '1280px',
                    height: '600px',
                }
            },
            matExtraLarge: {
                name: 'Material Extra Large',
                styles: {
                    width: '1920px',
                    height: '1080px',
                }
            },
        },
    }
};