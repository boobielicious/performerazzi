import { graphql } from '@/generated/stash'

export const PERFORMER_FRAGMENT = graphql(`
  fragment PerformerFragment on Performer {
    id
    name
    aliases: alias_list
    measurements
    boobsType: fake_tits
    isFavorite: favorite
    imageUrl: image_path
    stashServices: stash_ids {
      endpoint
      id: stash_id
    }
  }
`)
