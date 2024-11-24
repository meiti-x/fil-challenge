import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Typography, { Props } from './'

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['xs', 'small', 'medium', 'large', 'xl']
      }
    },
    color: {
      control: {
        type: 'select',
        options: ['white', 'whiteSmoke', 'black', 'gray', 'red', 'blue']
      }
    },
    className: { control: 'text' },
    children: { control: 'text' }
  }
} as Meta

const Template: StoryFn<Props> = (args) => <Typography {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'This is a Typography component',
  variant: 'medium',
  color: 'white'
}

export const Variants = () => (
  <div>
    <Typography variant="xs">این یک متن است</Typography>
    <Typography variant="small">این یک متن است</Typography>
    <Typography variant="medium">این یک متن است</Typography>
    <Typography variant="large">این یک متن است</Typography>
    <Typography variant="xl">این یک متن است</Typography>
  </div>
)

export const Colors = () => (
  <div>
    <Typography color="white">این یک متن است</Typography>
    <Typography color="whiteSmoke">این یک متن است</Typography>
    <Typography color="black">این یک متن است</Typography>
    <Typography color="gray">این یک متن است</Typography>
    <Typography color="red">این یک متن است</Typography>
    <Typography color="blue">این یک متن است</Typography>
  </div>
)

export const WithCustomClass = Template.bind({})
WithCustomClass.args = {
  children: 'Typography with custom class',
  variant: 'large',
  color: 'blue',
  className: 'italic underline'
}
