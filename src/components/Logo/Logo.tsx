import './Logo.scss'
import clsx from 'clsx'
import type { TLogoProps } from './types'
import { Image } from 'minista'

export default (props: TLogoProps) => {
  const { className } = props

  const title = 'Home'

  return (
    <a
      className={clsx('logo', className)}
      href="/"
      title={title}
      aria-label={title}
    >
      <Image
        className="logo__image"
        src="/images/logo.svg"
      />
    </a>
  )
}
