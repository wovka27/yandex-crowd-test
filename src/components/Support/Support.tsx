import './Support.scss'
import { Image } from 'minista'

export default () => {
  return (
    <section id="support" className="support container mt-80">
      <h3 className="support__title-wrapper">
        <div className="support__title">
          <p>Чтобы поддержать Международный васюкинский турнир</p>
          <p>посетите лекцию на тему: <span className="strong">«Плодотворная дебютная идея»</span></p>
        </div>
        <Image src="/src/assets/images/many_chees_players.png" alt="картинка поддержки" />
      </h3>
    </section>
  )
}