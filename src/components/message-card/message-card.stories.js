import React from 'react';
import MessageCard from './message-card';

export default {
    title: '01 Basic/01 Message-Card',
    component: MessageCard,
};

const Template = (args) => {
    return <MessageCard {...args}/>;
};

// Basic message card
export const Basic = Template.bind({});
Basic.args = {
    header: 'Oops!',
    message: 'You mistakenly left 1/2 point bids out!',
};

// Longer message card
export const Longer = Template.bind({});
Longer.args = {
    header: 'Testing a bit of a longer header here, let\'s see how this goes!',
    message: 'Well, this is quite interesting, but it appears as though the longer message is quite long, indeed! Almost too long!',
};