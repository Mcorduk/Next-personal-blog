import type { Meta, StoryObj } from '@storybook/react'

import { Navbar } from './Navbar'

const meta: Meta = {
  title: 'Sidebar/Navbar',
  component: Navbar,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    items: [
      { label: 'All', href: '/#' },
      { label: 'Front', href: '/#' },
      { label: 'Back', href: '/#' },
      { label: 'Full', href: '/#' }
    ]
  }
}

export default meta
