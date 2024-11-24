import { Meta, StoryFn } from '@storybook/react'
import MultiSelectWithCheckboxes, { Props } from './'

export default {
  title: 'Components/MultiSelectWithCheckboxes',
  component: MultiSelectWithCheckboxes,
  argTypes: {
    isMulti: { control: 'boolean' },
    placeholder: { control: 'text' },
    options: { control: 'object' },
    value: { control: 'object' },
    onChange: { action: 'changed' }
  }
} as Meta

const Template: StoryFn<Props> = (args) => (
  <MultiSelectWithCheckboxes {...args} />
)

export const Default = Template.bind({})
Default.args = {
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ],
  placeholder: 'Select options...',
  isMulti: true
}

export const SingleSelect = Template.bind({})
SingleSelect.args = {
  options: [
    { label: 'Option A', value: 'optionA' },
    { label: 'Option B', value: 'optionB' },
    { label: 'Option C', value: 'optionC' }
  ],
  placeholder: 'Select one option...',
  isMulti: false
}

export const PreselectedOptions = Template.bind({})
PreselectedOptions.args = {
  options: [
    { label: 'Option X', value: 'optionX' },
    { label: 'Option Y', value: 'optionY' },
    { label: 'Option Z', value: 'optionZ' }
  ],
  placeholder: 'Select options...',
  isMulti: true,
  value: [
    { label: 'Option X', value: 'optionX' },
    { label: 'Option Y', value: 'optionY' }
  ]
}
