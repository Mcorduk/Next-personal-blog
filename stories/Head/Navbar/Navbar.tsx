import React from 'react'
import { NavbarItem } from './NavbarElement/NavbarItem'
import Link from 'next/link'

interface NavItem {
  label: string
  href: string
}

interface NavbarProps {
  items: NavItem[]
}

export const Navbar: React.FC<NavbarProps> = ({ items }) => {
  return (
    <nav className='mx-3'>
      <ul className='flex w-full justify-start gap-3'>
        {items.map((item, index) => (
          <NavbarItem key={index}>
            <Link href={item.href}>{item.label}</Link>
          </NavbarItem>
        ))}
      </ul>
    </nav>
  )
}
