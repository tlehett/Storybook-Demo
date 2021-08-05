import React from 'react';
import FancyMessageCard from './fancy-message-card';
import StorybookMocks from '../../utils/storybook-mocks';

export default {
    title: '01 Basic/02 Fancy-Message-Card',
    component: FancyMessageCard,
    // Oh look, a new option!
    argTypes: {
        header: {
            table: {
                category: 'Text'
            }
        },
        headerColor: {
            control: 'color',
            table: {
                category: 'Colors',
            }
        },
        message: {
            table: {
                category: 'Text',
            }
        },
        actionButtonText: {
            table: {
                category: 'Text'
            }
        },
        onActionButtonClicked: {
            table: {
                category: 'Callbacks',
            }
        },
    },
};

const Template = (args) => {
    return <FancyMessageCard
        {...args}
        onActionButtonClicked={StorybookMocks.createButtonClickedMock('Action')}
    />;
}

// Basic fancy message card
export const Basic = Template.bind({});
Basic.args = {
    header: 'Oops!',
    message: 'You mistakenly left 1/2 point bids out!',
    actionButtonText: 'Add 1/2 Points',
};

// Custom color
export const CustomColor = Template.bind({});
CustomColor.args = {
    header: 'This is a custom color!',
    headerColor: '#ff6666',
    message: 'Wow, it looks amazing!',
    actionButtonText: 'I\'m a button',
};

// Invalid color
export const InvalidColor = Template.bind({});
InvalidColor.args = {
    header: 'This is an invalid color.',
    headerColor: 'I\'m a color!',
    message: 'Ummm... I think it is broken.',
    actionButtonText: 'Uh-oh',
};