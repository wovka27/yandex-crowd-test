import type { Metadata } from 'minista'
import Support from '@/components/Support'
import Session from '@/components/Session'
import Stages from '@/components/Stages'
import Marquee from '@/components/Marquee'
import TournamentParticipants from '@/components/TournamentParticipants'

export const metadata: Metadata = {
  title: 'Test-Landing',
}

export default () => {
  return (
    <>
      <Support />
      <Session />
      <Stages />
      <TournamentParticipants />
      <Marquee />
    </>
  )
}
