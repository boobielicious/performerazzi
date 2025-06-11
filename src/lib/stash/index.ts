import type { TypedDocumentString } from '@/generated/stash/graphql'

interface GraphQLResponse<T> {
  data: T
}

interface FetchGraphQLOptions<TResult, TVariables> {
  apiBaseUrl: string
  apiKey: string
  query: TypedDocumentString<TResult, TVariables>
  variables?: TVariables
}

export const fetchGraphQL = async <TResult, TVariables>({
  apiBaseUrl,
  apiKey,
  query,
  variables
}: FetchGraphQLOptions<TResult, TVariables>): Promise<TResult> => {
  const response = await fetch(`${apiBaseUrl}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/graphql-response+json',
      ApiKey: apiKey
    },
    body: JSON.stringify({
      query,
      variables
    })
  })

  if (!response.ok) throw new Error('Network response was not ok')

  const { data } = (await response.json()) as GraphQLResponse<TResult>
  return data
}
