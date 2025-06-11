import { graphql } from '@/generated/stash'

export const ALL_PERFORMERS_QUERY = graphql(`
  query AllPerformers {
    allPerformers {
      id
      name
      imageUrl: image_path
    }
  }
`)

export const FIND_PERFORMER_QUERY = graphql(`
  query FindPerformer($id: ID!) {
    findPerformer(id: $id) {
      id
      name
      aliases: alias_list
      measurements
      boobsType: fake_tits
      isFavorite: favorite
      imageUrl: image_path
      stashes: stash_ids {
        endpoint
        id: stash_id
      }
      scenes {
        id
        title
        date
        studio {
          name
        }
        stashes: stash_ids {
          endpoint
          id: stash_id
        }
        paths {
          screenshot
        }
      }
    }
  }
`)
