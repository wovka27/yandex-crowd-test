import './Stages.scss'
import Button from '@/components/Button'

export default () => {
  return (
    <section id="stages" className="stages container">
      <h2>
        Этапы преображения Васюков&nbsp;&nbsp;
        <a className="link" href="#!">
          Будущие источники <br /> обогащения васюкинцев
        </a>
      </h2>
      <div data-carousel-list2 className="stages__list">
        <ol className="stages__track">
          <div className="stages__item-wrapper">
            <li className="stages__item stages__item--1">
              <p>Строительство железнодорожной магистрали Москва-Васюки</p>
            </li>
            <li className="stages__item stages__item--2">
              <p>
                Открытие фешенебельной гостиницы «Проходная пешка» и других
                небоскрёбов
              </p>
            </li>
          </div>
          <li className="stages__item stages__item--3">
            <p>
              Поднятие сельского хозяйства в радиусе на тысячу километров:
              производство овощей, фруктов, икры, шоколадных конфет
            </p>
          </li>
          <div className="stages__item-wrapper">
            <li className="stages__item stages__item--4">
              <p>Строительство дворца для турнира</p>
            </li>
            <li className="stages__item stages__item--5">
              <p>Размещение гаражей для гостевого автотранспорта</p>
            </li>
          </div>
          <li className="stages__item stages__item--6">
            <p>
              Постройка сверхмощной радиостанции для передачи всему миру
              сенсационных результатов
            </p>
          </li>
          <li className="stages__item stages__item--7">
            <p>
              Создание аэропорта «Большие Васюки» с регулярным отправлением
              почтовых самолётов и дирижаблей во все концы света, включая
              Лос-Анжелос и Мельбурн
            </p>
          </li>
        </ol>
      </div>
      <img
        width="401"
        height="241"
        className="stages__plane"
        src="src/assets/images/plane.png"
        alt="картинка самолета"
      />
      <div className="stages__carousel-actions carousel-actions visible-mobile">
        <Button
          theme="circle-reverse"
          className="ui-button--icon-arrow"
          data-carousel-prev-btn2
        ></Button>
        <ul className="stages__dots">
          <li className="stages__dot active"></li>
          <li className="stages__dot"></li>
        </ul>
        <Button
          theme="circle"
          className="ui-button--icon-arrow"
          data-carousel-next-btn2
        ></Button>
      </div>
    </section>
  )
}
