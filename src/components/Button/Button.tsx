import './Button.scss'
import clsx from 'clsx'
import type { TButtonProps } from './types'

export default (props: TButtonProps) => {
  const {
    className,
    type = 'button',
    href,
    children,
    theme = 'primary',
  } = props

  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'

  const linkAttributes = { href }
  const buttonAttributes = { type }

  const attributesByTag = isLink ? linkAttributes : buttonAttributes

  const classes = clsx(
    'button',
    { 'button--circle': theme === 'circle-reverse' },
    `button--${theme}`,
    className
  )

  return (
    <Component className={classes} {...attributesByTag}>
      {children}
    </Component>
  )
}
