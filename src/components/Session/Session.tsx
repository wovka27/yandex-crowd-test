import './Session.scss'
import { Image } from 'minista'

const EventInfo = () => {
  const infoRows = {
    'Место проведения:': 'Клуб «Картонажник»',
    'Дата и время мероприятия:': '<b>22 июня 1927 г. в 18:00</b>',
    'Стоимость входных билетов:': '<b>20 коп.</b>',
    'Плата за игру:': '<b>50 коп.</b>',
    'Взнос на телеграммы:': '<s>100 руб.</s> 21 руб. 16 коп.',
  }

  return (
    <div className="session__event-info">
      {Object.entries(infoRows).map(([key, value], index) => (
        <div className="session__event-info__row" key={index}>
          <div className="session__event-info__label">{key}</div>
          <div
            className="session__event-info__value"
            dangerouslySetInnerHTML={{ __html: value }}
          ></div>
        </div>
      ))}
    </div>
  )
}

export default () => {
  const content = {
    link: 'По всем вопросам обращаться в администрацию к К. Михельсону',
    title:
      'и Сеанс <span class="strong">одновременной игры в шахматы на 160 досках</span> гроссмейстера О. Бендера',
  }
  return (
    <section id="session" className="session container">
      <div className="session__img-wrapper">
        <Image
          width="530"
          height="609"
          src="/src/assets/images/session-img.png"
          alt="session-img"
        />
      </div>
      <div className="session__content-wrapper">
        <h3
          className="session__title"
          dangerouslySetInnerHTML={{ __html: content.title }}
        ></h3>

        <EventInfo />

        <a href="#!" className="session__link link">
          {content.link}
        </a>
      </div>
    </section>
  )
}
