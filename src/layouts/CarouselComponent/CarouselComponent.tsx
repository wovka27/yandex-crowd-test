import type { CarouselComponentProps } from '@/layouts/CarouselComponent/types'

import './CarouselComponent.scss'

export default (props: CarouselComponentProps) => {
  const { children } = props
  return (
    <div data-carousel-list className="carousel-component__container">
      <div data-carousel-track className="carousel-component__track">
        {children}
      </div>
    </div>
  )
}