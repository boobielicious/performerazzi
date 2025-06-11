import { ReactElement } from 'react'

interface PerformerPageProps {
  params: Promise<{
    stashId: string
  }>
}

const PerformerPage = async ({ params }: PerformerPageProps): Promise<ReactElement> => {
  const { stashId } = await params

  return <h1>Performer: {stashId}</h1>
}

export default PerformerPage
