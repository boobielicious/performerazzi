import type { TypedDocumentString } from '@/generated/stashdb/graphql'

interface GraphQLResponse<T> {
  data: T
}

export const fetchGraphQL = async <TResult, TVariables>(
  apiUrl: string,
  apiKey: string,
  query: TypedDocumentString<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<TResult> => {
  const response = await fetch(apiUrl, {
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
