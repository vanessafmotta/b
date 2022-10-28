import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputProps } from './TextInput'

export default {
	title: 'Components/TextInput',
	component: TextInput,
	args: {
		placeholder: 'Type your e-email address'
	},
	argTypes: {}

} as Meta<TextInputProps>

export const Deafult: StoryObj<TextInputProps> = {}
