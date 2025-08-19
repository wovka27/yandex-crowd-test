import type {
  PropsWithChildren,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
} from 'react'

type ThemeButton =
  | 'primary'
  | 'secondary'
  | 'circle'
  | 'circle-reverse'
  | 'default'
  | 'outline'

type Button = ButtonHTMLAttributes<HTMLButtonElement>
type Anchor = AnchorHTMLAttributes<HTMLAnchorElement>

export type TButtonProps = PropsWithChildren<
  Button & Anchor & { theme: ThemeButton }
>
