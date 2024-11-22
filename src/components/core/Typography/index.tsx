import React from 'react'

type Props = {
  children: React.ReactNode
  variant?: 'xs' | 'small' | 'medium' | 'large' | 'xl'
  color?: 'white' | 'whiteSmoke' | 'black' | 'gray' | 'red' | 'blue'
  className?: string
}

export default function Typography({
  children,
  variant = 'medium',
  color = 'white',
  className
}: Props) {
  const variantStyles = {
    xs: 'text-xs',
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
    xl: 'text-xl'
  }

  const colorStyles = {
    white: 'text-white',
    whiteSmoke: 'text-gray-300',
    black: 'text-black',
    gray: 'text-gray-500',
    red: 'text-red-500',
    blue: 'text-blue-500'
  }

  const variantClass = variantStyles[variant]
  const colorClass = colorStyles[color]

  return (
    <p className={`${variantClass} ${colorClass} ${className}`}>{children}</p>
  )
}
