import type { Meta, StoryObj } from '@storybook/react'

import { NavbarElement } from './NavbarElement'

const meta: Meta<typeof NavbarElement> = {
  title: 'Sidebar/Navbar/NavbarElement',
  component: NavbarElement,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Navbar Element'
  }
}

export default meta
