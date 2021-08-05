import React from 'react';
import { Header } from './header';
import { useArgs } from '@storybook/client-api';
import StorybookMocks from '../../utils/storybook-mocks';

export default {
    title: '02 Redux/01 Header',
    component: Header,
    argTypes: {
        appTitle: {
            table: {
                category: 'Text',
            }
        },
        user: {
            table: {
                category: 'Redux',
            }
        },
        loading: {
            table: {
                category: 'Redux',
            }
        },
        // We want to hide this since it's supplied automatically
        // by Redux
        setUser: {
            table: {
                disable: true,
                category: 'Redux',
            }
        },
        // We want to disable this, since it should always be
        // the same object from react router
        history: {
            control: false,
            table: {
                category: 'Router',
            },
        },
    },
};

const Template = (args) => {
    const updateArgs = useArgs()[1];

    // Mock a "set user" function to demo UI when the user
    // would set user through Redux actions
    const setUserMock = (user) => {
        // Set the user loading state to true
        updateArgs({ ...args, loading: true });
        // Set a timeout function to "set user" after
        // 2 seconds
        setTimeout(() => {
            // Set the loading state to false and the user state
            // to the passed-in user value
            updateArgs({
                ...args,
                loading: false,
                user,
            });
        }, 2000);
    };

    // Attach the arguments and the mocked functions to the
    // component
    return <Header
        {...args}
        setUser={setUserMock}
        history={StorybookMocks.createHistoryMock()}
    />;
};

// Header while user is not signed in
export const Unauthenticated = Template.bind({});
Unauthenticated.args = {
    appTitle: 'Food Fair +',
    user: null,
    loading: false,
}

// Header while the user auth state is loading
export const Loading = Template.bind({});
Loading.args = {
    appTitle: 'Carnival Fair +',
    user: null,
    loading: true,
};

// Header while the user is authenticated
export const Authenticated = Template.bind({});
Authenticated.args = {
    appTitle: 'That\'s Unfair +',
    user: { email: 'johntannerlehett@gmail.com' },
    loading: false,
};