// NavbarItem.tsx
import React from 'react'
import Link from 'next/link'
interface NavbarItemProps {
  children: React.ReactNode
}

export const NavbarItem: React.FC<NavbarItemProps> = ({ children }) => {
  return <li className='py-4'>{children}</li>
}
