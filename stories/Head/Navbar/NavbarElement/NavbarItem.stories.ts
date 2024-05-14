import type { Meta, StoryObj } from '@storybook/react'

import { NavbarItem } from './NavbarItem'

const meta: Meta<typeof NavbarItem> = {
  title: 'Sidebar/Navbar/NavbarElement',
  component: NavbarItem,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: '{}'
  }
}

export default meta
