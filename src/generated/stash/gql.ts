/* eslint-disable */
import * as types from './graphql'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
  '\n  fragment PerformerFragment on Performer {\n    id\n    name\n    aliases: alias_list\n    measurements\n    boobsType: fake_tits\n    isFavorite: favorite\n    imageUrl: image_path\n    stashServices: stash_ids {\n      endpoint\n      id: stash_id\n    }\n  }\n': typeof types.PerformerFragmentFragmentDoc
  '\n  query AllPerformers {\n    allPerformers {\n      id\n      name\n      imageUrl: image_path\n    }\n  }\n': typeof types.AllPerformersDocument
  '\n  query FindPerformer($id: ID!) {\n    findPerformer(id: $id) {\n      id\n      name\n      aliases: alias_list\n      measurements\n      boobsType: fake_tits\n      isFavorite: favorite\n      imageUrl: image_path\n      stashes: stash_ids {\n        endpoint\n        id: stash_id\n      }\n      scenes {\n        id\n        title\n        date\n        studio {\n          name\n        }\n        stashes: stash_ids {\n          endpoint\n          id: stash_id\n        }\n        paths {\n          screenshot\n        }\n      }\n    }\n  }\n': typeof types.FindPerformerDocument
}
const documents: Documents = {
  '\n  fragment PerformerFragment on Performer {\n    id\n    name\n    aliases: alias_list\n    measurements\n    boobsType: fake_tits\n    isFavorite: favorite\n    imageUrl: image_path\n    stashServices: stash_ids {\n      endpoint\n      id: stash_id\n    }\n  }\n':
    types.PerformerFragmentFragmentDoc,
  '\n  query AllPerformers {\n    allPerformers {\n      id\n      name\n      imageUrl: image_path\n    }\n  }\n':
    types.AllPerformersDocument,
  '\n  query FindPerformer($id: ID!) {\n    findPerformer(id: $id) {\n      id\n      name\n      aliases: alias_list\n      measurements\n      boobsType: fake_tits\n      isFavorite: favorite\n      imageUrl: image_path\n      stashes: stash_ids {\n        endpoint\n        id: stash_id\n      }\n      scenes {\n        id\n        title\n        date\n        studio {\n          name\n        }\n        stashes: stash_ids {\n          endpoint\n          id: stash_id\n        }\n        paths {\n          screenshot\n        }\n      }\n    }\n  }\n':
    types.FindPerformerDocument
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment PerformerFragment on Performer {\n    id\n    name\n    aliases: alias_list\n    measurements\n    boobsType: fake_tits\n    isFavorite: favorite\n    imageUrl: image_path\n    stashServices: stash_ids {\n      endpoint\n      id: stash_id\n    }\n  }\n'
): typeof import('./graphql').PerformerFragmentFragmentDoc
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query AllPerformers {\n    allPerformers {\n      id\n      name\n      imageUrl: image_path\n    }\n  }\n'
): typeof import('./graphql').AllPerformersDocument
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query FindPerformer($id: ID!) {\n    findPerformer(id: $id) {\n      id\n      name\n      aliases: alias_list\n      measurements\n      boobsType: fake_tits\n      isFavorite: favorite\n      imageUrl: image_path\n      stashes: stash_ids {\n        endpoint\n        id: stash_id\n      }\n      scenes {\n        id\n        title\n        date\n        studio {\n          name\n        }\n        stashes: stash_ids {\n          endpoint\n          id: stash_id\n        }\n        paths {\n          screenshot\n        }\n      }\n    }\n  }\n'
): typeof import('./graphql').FindPerformerDocument

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}
