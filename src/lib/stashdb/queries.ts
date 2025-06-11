import { graphql } from '@/generated/stashdb'

export const QUERY_SCENES_QUERY = graphql(`
  query QueryScenes($performerIds: [ID!], $perPage: Int!) {
    queryScenes(input: { performers: { modifier: INCLUDES, value: $performerIds }, per_page: $perPage }) {
      scenes {
        id
        title
        releaseDate: release_date
        images {
          url
          width
          height
        }
      }
    }
  }
`)
