import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '../Buttons/Button'

export default {
	title: 'Components/Button',
	component: Button,
	args: {
		children: 'Create account',
	},
	argTypes: {}

} as Meta<ButtonProps>

export const Deafult: StoryObj<ButtonProps> = {}
