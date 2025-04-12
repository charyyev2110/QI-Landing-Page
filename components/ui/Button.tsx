import { cn } from '@/lib/utils'
import React from 'react'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        'text-black bg-foreground h-10 cursor-pointer max-w-md rounded-md border border-input text-sm ml-2 whitespace-nowrap ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    >
      {props.children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
