import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputInputProps, TextInputRootProps, TextInputIconProps } from '../TextInput/TextInput'
import { Envelope } from 'phosphor-react'

export default {
	title: 'Components/TextInput',
	component: TextInput.Root,
	args: {
		children: [
			<TextInput.Icon >
				<Envelope />
			</TextInput.Icon>,

			<TextInput.Input placeholder="Type your e-email address" />
		],
	},
	argTypes: {
		children: {
			table: {
				disable: true,
			}
		},
	}
} as Meta<TextInputRootProps>

export const Deafult: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
	args: {
		children: <TextInput.Input placeholder="Type your e-email address" />
	}
}
