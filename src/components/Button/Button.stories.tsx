import {Story, Meta} from '@storybook/react';
import React from 'react';

import { Button, ButtonProps } from './Button'

export default{
  title: 'Components/Button',
  component: Button,
  parameters:{
    layout: 'centered',
  },
  argTypes:{},
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Neutral = Template.bind({});
Neutral.args = {
  type: 'neutral',
  emphasis: 'high',
  label:'Button-Srini',
  onClick:() => console.log('Button Clicked')
};