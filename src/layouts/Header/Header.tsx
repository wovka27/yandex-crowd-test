import './Header.scss'

import Marquee from '@/components/Marquee/Marquee'
import Button from '@/components/Button'
import { Image } from 'minista'
import Icon from '@/components/Icon'

export default () => {
  const titleWords: Array<{ id: string; value: string }> = [
    { id: 'a', value: 'Превратите уездный город' },
    { id: 'b', value: 'в столицу' },
    { id: 'c', value: 'земного шара' },
  ]

  return (
    <header className="header">
      <div className="header__bg">
        <Image
          className="header__img-ellipse"
          src="/src/assets/images/ellipse.svg"
          alt="ellipse"
        />
        <Image
          className="header__img-bg"
          width="1920"
          height="881"
          src="/src/assets/images/bg.png"
          alt="bg"
        />
        <Image
          className="header__img-city"
          width="1634"
          height="464"
          src="/src/assets/images/city.png"
          alt="city"
        />
        <Image
          className="header__img-chess1"
          width="130"
          height="266"
          src="/src/assets/images/chess1.png"
          alt="chess1"
        />
        <Image
          className="header__img-chess2"
          width="146"
          height="266"
          src="/src/assets/images/chess2.png"
          alt="chess2"
        />
        <Image
          className="header__img-chess3"
          width="83"
          height="123"
          src="/src/assets/images/chess3.png"
          alt="chess3"
        />
        <Image
          className="header__img-chess-horse"
          width="197"
          height="269"
          src="/src/assets/images/chessHorse.png"
          alt="chess-horse"
        />
      </div>

      <div className="header__inner container">
        <a className="header__logo-link" href="/">
          <Icon hasFill name="logo" className="header__logo-img" />
        </a>

        <div className="header__content">
          <h1 className="header__title">
            {titleWords.map(({ id, value }, index) => (
              <p id={id} key={index}>
                {value}
              </p>
            ))}
          </h1>
          <p className="header__subtitle">
            Оплатите взнос на телеграммы для организации Международного
            васюкинского турнира по шахматам
          </p>
          <div className="header__link-buttons">
            <Button href="#support" theme="primary">
              Поддержать <br /> шахматную мысль
            </Button>
            <Button href="#stages" theme="outline">
              Подробнее <br /> о турнире
            </Button>
          </div>
        </div>
      </div>

      <Marquee />
    </header>
  )
}
