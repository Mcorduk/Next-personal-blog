// NavbarElement.tsx
import React from 'react'
import Link from 'next/link'
interface NavbarElementProps {
  label: string
  href: string
}

export const NavbarElement: React.FC<NavbarElementProps> = ({ label, href = '/' }) => {
  return (
    <Link
      href={href}
      className='px-2 py-1 text-lg text-gray-800 hover:text-blue-500'
    >
      {label}
    </Link>
  )
}
