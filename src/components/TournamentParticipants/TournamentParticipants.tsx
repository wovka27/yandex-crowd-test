import './TournamentParticipants.scss'
import Button from '@/components/Button'
import CarouselComponent from '@/layouts/CarouselComponent'
import ListRenderer from '@/components/ListRenderer'
import TournamentParticipantItem from '@/components/TournamentParticipants/TournamentParticipantItem'
import { tournamentParticipantList } from '@/components/TournamentParticipants/content'

export default () => {
  return (
    <section id="carousel" className="carousel container">
      <h2>Участники турнира</h2>
      <div className="tournament-participants-actions">
        <Button
          theme="circle-reverse"
          className="button--icon-arrow"
          data-carousel-prev-btn
        />
        <span>
          <span data-carousel-current-slide>3</span> /{' '}
          <span data-carousel-total-slides>6</span>
        </span>
        <Button
          theme="circle"
          className="button--icon-arrow"
          data-carousel-next-btn
        />
      </div>
      <CarouselComponent>
        <ListRenderer
          ComponentItem={TournamentParticipantItem}
          list={tournamentParticipantList}
        />
      </CarouselComponent>
    </section>
  )
}
