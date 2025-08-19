import './TournamentParticipantsItem.scss'
import Button from '@/components/Button'
import { TournamentParticipantItemProps } from '@/components/TournamentParticipants/TournamentParticipantItem/types'

export default (props: TournamentParticipantItemProps) => {
  const { data } = props

  return (
    <article className="tournament-participant-item">
      <header>
        <img
          width="320"
          height="320"
          src={data.image || 'src/assets/images/person.png'}
          alt="ghjgjh"
        />
      </header>
      <main>
        <p>{data.name}</p>
        <p>{data.rang}</p>
      </main>
      <footer>
        <Button theme="secondary">Подробнее</Button>
      </footer>
    </article>
  )
}
