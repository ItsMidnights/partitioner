import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react-native';
import Welcome from '.';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

export const ToStorybook = () => (
  <Welcome 
    showApp={linkTo("Button")} 
  />
);

export default {
  title: "Welcome",
  component: Welcome
}
