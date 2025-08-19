import type { TournamentParticipantItemType } from '@/components/TournamentParticipants/TournamentParticipantItem/types'

export const tournamentParticipantList = [
  'Хозе-Рауль Капабланка',
  'Эммануил Ласкер',
  'Александр Алехин',
  'Арон Нимцович',
  'Рихард Рети',
  'Остап Бендер',
].map(
  (name) =>
    ({ name, rang: 'Чемпион мира по шахматам' }) as TournamentParticipantItemType
)